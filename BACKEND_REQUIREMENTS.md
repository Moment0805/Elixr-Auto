# ElixrAuto — Backend Requirements (for Antigravity sync)

This document defines everything the backend needs to support the ElixrAuto peer-to-peer car marketplace. The frontend currently runs on **mock data** (`src/lib/mockData.ts`); each mock collection maps 1:1 to a table/endpoint below. When the Antigravity backend is ready, replace the mock imports with real API calls — the shapes are identical.

---

## 1. Tech Stack Recommendation
- **Database:** PostgreSQL (Supabase) or MongoDB
- **Auth:** Supabase Auth / Clerk / NextAuth.js (JWT-based)
- **Realtime:** Supabase Realtime or Ably/Stream Chat (for messaging & comment live updates)
- **File Storage:** Cloudinary or AWS S3 (car photos, blog images, avatars)
- **Notifications:** Novu or Pusher (email + push for new messages, ratings, reports)
- **Moderation:** Report queue + word filters (server-side)

---

## 2. Database Schema (The Blueprint)

### Users
Identity & Reputation.
| Field | Type | Notes |
|---|---|---|
| `id` | uuid / string | PK |
| `username` | string | unique |
| `email` | string | unique |
| `avatar_url` | string | from storage |
| `bio` | text | |
| `trust_score` | float | 0–5, computed from reviews |
| `total_sales` | int | denormalized count |
| `role` | enum | `buyer` \| `seller` (an account can act as both) |
| `verified` | boolean | admin-verified seller |
| `reputation` | int | karma from community upvotes |
| `badge` | string | `Top Contributor`, `Verified Seller`, `Rising Star` |
| `joined` | date | |

> **Dual-role accounts:** sign-up asks for a primary role, but a single account can both buy and sell.

### Listings
Cars for sale.
| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `seller_id` | uuid | FK → Users |
| `title` | string | |
| `make` | string | for filtering |
| `price` | string | display (e.g. `₦85,000,000`) |
| `price_value` | int | numeric, for sorting/filtering |
| `image` | string | cover |
| `gallery` | string[] | up to ~10 photos |
| `year` | string | |
| `mileage` | string | |
| `transmission` | string | |
| `fuel` | string | |
| `location` | string | |
| `condition` | string | |
| `status` | enum | `Available` \| `Sold` |
| `verified` | boolean | listing reviewed |
| `description` | text | |
| `created_at` | timestamp | |

### Blog_Posts (Community)
User-generated content.
| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `author_id` | uuid | FK → Users |
| `title` | string | |
| `excerpt` | string | |
| `content` | text | rich text / markdown |
| `category` | string | `Buying Guide`, `Selling Guide`, `Maintenance`, `Market Trends` |
| `tags` | string[] | e.g. `#CarReview`, `#RepairAdvice` |
| `image` | string | optional cover |
| `upvotes` | int | denormalized count |
| `comment_count` | int | denormalized count |
| `read_time` | string | computed on insert |
| `created_at` | timestamp | |

> **User levels:** only accounts that have completed ≥1 sale or ≥5 comments may post long-form articles (prevents bot spam).

### Reviews
Peer-to-Peer Ratings.
| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `reviewer_id` | uuid | FK → Users (who writes) |
| `receiver_id` | uuid | FK → Users (who is rated) |
| `stars` | int | 1–5 |
| `comment` | text | |
| `type` | enum | `marketplace` \| `blog` |
| `created_at` | timestamp | |

### Interactions
Likes / Comments on community posts.
| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `post_id` | uuid | FK → Blog_Posts |
| `user_id` | uuid | FK → Users |
| `comment_text` | text | null when it's an upvote |
| `is_upvote` | boolean | true = upvote row |
| `parent_id` | uuid | FK → Interactions (for nested comments) |
| `created_at` | timestamp | |

### Conversations / Messages (In-app messaging)
| Field | Type | Notes |
|---|---|---|
| **Conversations** | | |
| `id` | uuid | PK |
| `listing_id` | uuid | FK → Listings |
| `seller_id` | uuid | FK → Users |
| `buyer_id` | uuid | FK → Users |
| `last_message` | string | denormalized |
| `last_at` | timestamp | |
| `unread` | boolean | for the viewing user |
| **Messages** | | |
| `id` | uuid | PK |
| `conversation_id` | uuid | FK → Conversations |
| `sender_id` | uuid | FK → Users |
| `text` | text | |
| `created_at` | timestamp | |

### Reports (Moderation)
| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `reporter_id` | uuid | FK → Users |
| `target_type` | enum | `listing` \| `user` \| `conversation` \| `post` |
| `target_id` | uuid | |
| `reason` | enum | `fraud`, `spam`, `dispute`, `bug`, `other` |
| `description` | text | |
| `status` | enum | `open` \| `investigating` \| `resolved` |
| `created_at` | timestamp | |

---

## 3. The "Trust System"

### Marketplace Trust
When a buyer buys a car from a seller, they leave a review in the **Reviews** table linked to `receiver_id`. Both sides rate each other after a "Mark as Sold" trigger:

1. Buyer clicks **"Mark as Purchased"** on a listing.
2. System sends a notification to both buyer and seller.
3. Buyer rates seller on **Vehicle Accuracy** & **Communication**.
4. Seller rates buyer on **Seriousness** & **Payment Promptness**.
5. `trust_score` recalculates from the receiver's marketplace reviews.

**Total Reputation** combines both reputation streams:
```
Total Reputation = (Avg. Marketplace Rating × number_of_sales) + (Community upvotes × weight) − penalties
```

### Blog / Community Trust
- Users **upvote** great posts (Reddit-style). Upvotes raise the author's `reputation` (karma).
- A user with high community reputation is more likely to be a trusted seller.
- **Visual badges** appear next to the author's name on posts (e.g. `Top Contributor`, `Verified Seller`).

### Badges (computed)
| Badge | Criteria |
|---|---|
| `Top Contributor` | reputation ≥ 300 |
| `Verified Seller` | admin-verified + ≥ 1 sale |
| `Rising Star` | reputation 20–100 |

---

## 4. Required API Endpoints

### Auth
- `POST /auth/signup` — body: `{ name, email, password, role }`
- `POST /auth/login` — returns JWT
- `GET /auth/me` — current user

### Users & Profiles
- `GET /users/:id` — public profile (trust_score, listings, posts, reviews)
- `PATCH /users/:id` — update bio / avatar
- `POST /users/:id/follow` — follow a seller (notifications on new listings/posts)

### Listings
- `GET /listings` — filters: `make, year, location, minRating, sort, search, status`
- `GET /listings/:id` — full detail + gallery + seller + reviews
- `POST /listings` — create (auth required)
- `PATCH /listings/:id` — update
- `POST /listings/:id/mark-sold` — triggers the review flow for both parties

### Reviews
- `GET /reviews?receiver_id=` — reviews for a user
- `POST /reviews` — `{ reviewer_id, receiver_id, stars, comment, type }`
- Updates `trust_score` on the receiver

### Community (Blog_Posts)
- `GET /posts` — filters: `category, search`
- `GET /posts/:id` — post + comments
- `POST /posts` — create (auth + level gate)
- `POST /posts/:id/upvote` — toggles upvote, updates `reputation` + `upvotes`

### Interactions (Comments)
- `GET /posts/:id/comments` — nested (with `parent_id`)
- `POST /posts/:id/comments` — `{ user_id, comment_text, parent_id? }`
- `POST /comments/:id/reply` — nested reply

### Messaging
- `GET /conversations` — for current user
- `GET /conversations/:id/messages`
- `POST /conversations/:id/messages` — `{ sender_id, text }` (realtime via WebSocket/Realtime)
- Phone numbers / contact info are **hidden by default**; shared only when a user explicitly chooses.

### Reports / Moderation
- `POST /reports` — `{ reporter_id, target_type, target_id, reason, description }`
- Auto-hide a post/listing when reports ≥ 3 (pending admin review).
- `GET /admin/reports` — moderator escalation desk (auth: admin only)
- `POST /admin/users/:id/ban` — ban fraudulent accounts

### Notifications
- Triggered on: new message, new review, listing marked sold, followed user posts, report status change.

---

## 5. Auth & Privacy Rules
- JWT auth on all write endpoints; reads are public.
- Only the buyer/seller in a conversation can read/send its messages.
- A user can only review a party **after** a transaction (listing marked sold linking them).
- Contact info (phone) is **never** returned in public APIs; only revealed inside an explicit "share contact" action in a conversation.
- Spam filter: block common spam words & contact info in post/comment bodies to prevent off-platform dealing.

---

## 6. Frontend ↔ Backend Contract

The mock layer (`src/lib/mockData.ts`) exports typed collections with the exact shapes above. The integration plan:

1. Create an `src/lib/api.ts` with fetch wrappers per endpoint.
2. Replace each `mockData` import with its `api.*` equivalent.
3. The frontend already expects these field names — no component changes needed beyond swapping the data source.
4. Realtime: subscribe to `conversations/:id/messages` and `posts/:id/comments` for live updates.

| Mock export | Replaces |
|---|---|
| `users` | `GET /users` |
| `listings` | `GET /listings` |
| `communityPosts` | `GET /posts` |
| `reviews` / `getReviewsFor` | `GET /reviews?receiver_id=` |
| `conversations` / `messages` | `GET /conversations` + `GET /conversations/:id/messages` |
| `postComments` | `GET /posts/:id/comments` |

---

## 7. Implementation Checklist (for the backend dev)
- [ ] Set up DB with the 7 tables above + relations.
- [ ] Auth (signup with role, login, JWT, `/auth/me`).
- [ ] Listings CRUD + filter/sort + `mark-sold` trigger.
- [ ] Reviews CRUD + trust_score recalculation.
- [ ] Community posts CRUD + upvote toggle + reputation update.
- [ ] Nested comments with `parent_id`.
- [ ] Conversations + messages (realtime).
- [ ] Reports + auto-hide threshold + admin moderation endpoints.
- [ ] Notifications (message, review, sold, follow, report).
- [ ] File uploads (Cloudinary/S3) for car photos, post images, avatars.
- [ ] Spam/word filtering on post & comment bodies.
