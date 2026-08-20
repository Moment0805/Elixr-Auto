// Mock data layer — drives the frontend before the Antigravity backend is wired in.
// Shapes mirror the schema in BACKEND_REQUIREMENTS.md so swapping to real API calls is trivial.

export interface User {
  id: string;
  username: string;
  email: string;
  avatar_url: string;
  bio: string;
  trust_score: number; // 0-5
  total_sales: number;
  role: 'buyer' | 'seller';
  verified: boolean;
  reputation: number; // karma from community upvotes
  badge: string;
  joined: string;
}

export interface Listing {
  id: string;
  seller_id: string;
  title: string;
  make: string;
  price: string;
  price_value: number;
  image: string;
  gallery: string[];
  year: string;
  mileage: string;
  transmission: string;
  fuel: string;
  location: string;
  condition: string;
  status: 'Sold' | 'Available';
  verified: boolean;
  description: string;
  created_at: string;
}

export interface Review {
  id: string;
  reviewer_id: string;
  reviewer_name: string;
  receiver_id: string;
  stars: number;
  comment: string;
  type: 'marketplace' | 'blog';
  created_at: string;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  user_name: string;
  avatar_url: string;
  comment_text: string;
  is_upvote: boolean;
  parent_id: string | null;
  created_at: string;
  replies?: Comment[];
}

export interface CommunityPost {
  id: string;
  author_id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  upvotes: number;
  comment_count: number;
  read_time: string;
  created_at: string;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  text: string;
  created_at: string;
}

export interface Conversation {
  id: string;
  listing_id: string;
  listing_title: string;
  listing_image: string;
  seller_id: string;
  seller_name: string;
  seller_avatar: string;
  buyer_id: string;
  buyer_name: string;
  last_message: string;
  last_at: string;
  unread: boolean;
}

const avatar = (seed: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundColor=D4AF37&textColor=0C0C0C`;

export const users: User[] = [
  {
    id: 'u1',
    username: 'AdeMart',
    email: 'ade@elixr.com',
    avatar_url: avatar('Ade Martins'),
    bio: 'Verified dealer in Lagos. Luxury & performance vehicles. 8 years experience.',
    trust_score: 4.8,
    total_sales: 42,
    role: 'seller',
    verified: true,
    reputation: 320,
    badge: 'Top Contributor',
    joined: 'Jan 2024',
  },
  {
    id: 'u2',
    username: 'ChiEze',
    email: 'chioma@elixr.com',
    avatar_url: avatar('Chioma Eze'),
    bio: 'Car enthusiast and blogger. Reviews, maintenance tips, market trends.',
    trust_score: 4.6,
    total_sales: 12,
    role: 'seller',
    verified: true,
    reputation: 510,
    badge: 'Verified Seller',
    joined: 'Mar 2024',
  },
  {
    id: 'u3',
    username: 'DavidO',
    email: 'david@elixr.com',
    avatar_url: avatar('David Okeke'),
    bio: 'Independent seller based in Abuja. Honest deals, fair prices.',
    trust_score: 4.3,
    total_sales: 7,
    role: 'seller',
    verified: true,
    reputation: 88,
    badge: 'Verified Seller',
    joined: 'Jun 2024',
  },
  {
    id: 'u4',
    username: 'AminaI',
    email: 'amina@elixr.com',
    avatar_url: avatar('Amina Ibrahim'),
    bio: 'Buyer turned seller. Loves SUVs and road trips.',
    trust_score: 4.1,
    total_sales: 3,
    role: 'seller',
    verified: false,
    reputation: 45,
    badge: 'Rising Star',
    joined: 'Aug 2024',
  },
];

export const listings: Listing[] = [
  {
    id: 'l1',
    seller_id: 'u1',
    title: '2023 Mercedes-Benz S-Class',
    make: 'Mercedes-Benz',
    price: '₦85,000,000',
    price_value: 85000000,
    image: 'https://images.unsplash.com/photo-1650256213562-487db281610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1650256213562-487db281610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1617814074217-44b219eaa629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2023',
    mileage: '8,500 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Lagos',
    condition: 'Excellent',
    status: 'Available',
    verified: true,
    description: 'Pristine S-Class, single owner, full service history. Climate control, panoramic roof, Burmester sound.',
    created_at: '2025-10-20',
  },
  {
    id: 'l2',
    seller_id: 'u2',
    title: '2022 Range Rover Sport',
    make: 'Land Rover',
    price: '₦72,000,000',
    price_value: 72000000,
    image: 'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2022',
    mileage: '15,000 km',
    transmission: 'Automatic',
    fuel: 'Diesel',
    location: 'Abuja',
    condition: 'Excellent',
    status: 'Available',
    verified: true,
    description: 'Range Rover Sport HSE. Terrain response, premium leather, low mileage.',
    created_at: '2025-10-18',
  },
  {
    id: 'l3',
    seller_id: 'u1',
    title: '2024 Porsche 911 Carrera',
    make: 'Porsche',
    price: '₦95,000,000',
    price_value: 95000000,
    image: 'https://images.unsplash.com/photo-1517153192978-b2e379ac0710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1517153192978-b2e379ac0710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2024',
    mileage: '2,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Lagos',
    condition: 'Brand New',
    status: 'Available',
    verified: true,
    description: 'Brand new 911 Carrera. Sport chrono, PDK, premium package.',
    created_at: '2025-10-15',
  },
  {
    id: 'l4',
    seller_id: 'u3',
    title: '2021 Toyota Camry XLE',
    make: 'Toyota',
    price: '₦18,500,000',
    price_value: 18500000,
    image: 'https://images.unsplash.com/photo-1624578571415-09e9b1991929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1624578571415-09e9b1991929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2021',
    mileage: '32,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Port Harcourt',
    condition: 'Very Good',
    status: 'Available',
    verified: true,
    description: 'Clean Camry XLE, fabric interior, reverse camera, alloy wheels.',
    created_at: '2025-10-12',
  },
  {
    id: 'l5',
    seller_id: 'u4',
    title: '2023 Honda Accord Touring',
    make: 'Honda',
    price: '₦22,000,000',
    price_value: 22000000,
    image: 'https://images.unsplash.com/photo-1718037322646-065357b8173b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1718037322646-065357b8173b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2023',
    mileage: '12,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Lagos',
    condition: 'Excellent',
    status: 'Available',
    verified: false,
    description: 'Accord Touring, leather seats, sunroof, apple carplay.',
    created_at: '2025-10-10',
  },
  {
    id: 'l6',
    seller_id: 'u2',
    title: '2022 Lexus RX 350',
    make: 'Lexus',
    price: '₦45,000,000',
    price_value: 45000000,
    image: 'https://images.unsplash.com/photo-1742941158083-be03727c216b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1742941158083-be03727c216b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2022',
    mileage: '18,500 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Abuja',
    condition: 'Excellent',
    status: 'Available',
    verified: true,
    description: 'Lexus RX 350 F-Sport. Mark Levinson audio, panoramic view.',
    created_at: '2025-10-08',
  },
  {
    id: 'l7',
    seller_id: 'u1',
    title: '2023 BMW 5 Series',
    make: 'BMW',
    price: '₦52,000,000',
    price_value: 52000000,
    image: 'https://images.unsplash.com/photo-1734299388217-2ebc605ef43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1734299388217-2ebc605ef43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2023',
    mileage: '10,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Lagos',
    condition: 'Excellent',
    status: 'Available',
    verified: true,
    description: 'BMW 530i M-Sport. Adaptive cruise, heads-up display.',
    created_at: '2025-10-05',
  },
  {
    id: 'l8',
    seller_id: 'u3',
    title: '2024 Audi A6',
    make: 'Audi',
    price: '₦58,000,000',
    price_value: 58000000,
    image: 'https://images.unsplash.com/photo-1684155391823-15645c20d488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1684155391823-15645c20d488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2024',
    mileage: '5,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    location: 'Abuja',
    condition: 'Brand New',
    status: 'Sold',
    verified: true,
    description: 'Audi A6 Quattro. Virtual cockpit, Bang & Olufsen.',
    created_at: '2025-10-02',
  },
  {
    id: 'l9',
    seller_id: 'u2',
    title: '2023 Tesla Model 3',
    make: 'Tesla',
    price: '₦38,000,000',
    price_value: 38000000,
    image: 'https://images.unsplash.com/photo-1610470850940-27b52ca7c0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1610470850940-27b52ca7c0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    year: '2023',
    mileage: '8,000 km',
    transmission: 'Automatic',
    fuel: 'Electric',
    location: 'Lagos',
    condition: 'Excellent',
    status: 'Available',
    verified: true,
    description: 'Model 3 Long Range. Autopilot, supercharging included.',
    created_at: '2025-09-28',
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    reviewer_id: 'u4',
    reviewer_name: 'Amina',
    receiver_id: 'u1',
    stars: 5,
    comment: 'Ade was professional and the car was exactly as described. Smooth transaction!',
    type: 'marketplace',
    created_at: '2025-10-01',
  },
  {
    id: 'r2',
    reviewer_id: 'u3',
    reviewer_name: 'David',
    receiver_id: 'u1',
    stars: 5,
    comment: 'Great communication, honest about every detail. Highly recommend.',
    type: 'marketplace',
    created_at: '2025-09-20',
  },
  {
    id: 'r3',
    reviewer_id: 'u1',
    reviewer_name: 'Ade',
    receiver_id: 'u2',
    stars: 4,
    comment: 'Good experience, vehicle accurate. Payment was prompt.',
    type: 'marketplace',
    created_at: '2025-09-15',
  },
  {
    id: 'r4',
    reviewer_id: 'u4',
    reviewer_name: 'Amina',
    receiver_id: 'u2',
    stars: 5,
    comment: 'Chioma is a trusted seller. The SUV was in perfect condition.',
    type: 'marketplace',
    created_at: '2025-09-10',
  },
];

export const communityPosts: CommunityPost[] = [
  {
    id: 'p1',
    author_id: 'u2',
    title: '10 Essential Tips for First-Time Car Buyers in Nigeria',
    excerpt: 'Buying your first car can be overwhelming. Here are the top tips to avoid common pitfalls.',
    content: 'Full article body...',
    category: 'Buying Guide',
    tags: ['#CarReview', '#FirstTimeBuyer'],
    image: 'https://images.unsplash.com/photo-1538575207325-5a2505373ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    upvotes: 124,
    comment_count: 18,
    read_time: '5 min read',
    created_at: '2025-10-20',
  },
  {
    id: 'p2',
    author_id: 'u1',
    title: 'How to Take Professional Photos of Your Car',
    excerpt: 'Lighting, angles, and prep. A guide to making your listing stand out.',
    content: 'Full article body...',
    category: 'Selling Guide',
    tags: ['#Photography', '#SellerTips'],
    image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    upvotes: 89,
    comment_count: 12,
    read_time: '6 min read',
    created_at: '2025-10-18',
  },
  {
    id: 'p3',
    author_id: 'u3',
    title: 'The Ultimate Guide to Car Maintenance in Nigeria',
    excerpt: 'Keep your vehicle running smoothly with these maintenance tips for Nigerian roads.',
    content: 'Full article body...',
    category: 'Maintenance',
    tags: ['#RepairAdvice', '#Maintenance'],
    image: 'https://images.unsplash.com/photo-1730453075684-2ad6232ab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    upvotes: 67,
    comment_count: 9,
    read_time: '8 min read',
    created_at: '2025-10-15',
  },
  {
    id: 'p4',
    author_id: 'u4',
    title: 'Luxury vs. Economy: Which Car is Right for You?',
    excerpt: 'Understanding your needs and budget to make the best decision.',
    content: 'Full article body...',
    category: 'Buying Guide',
    tags: ['#CarReview', '#Budget'],
    image: 'https://images.unsplash.com/photo-1650256213562-487db281610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    upvotes: 45,
    comment_count: 7,
    read_time: '6 min read',
    created_at: '2025-10-12',
  },
  {
    id: 'p5',
    author_id: 'u2',
    title: 'Understanding Car Import Duties in Nigeria',
    excerpt: 'A breakdown of import duties, clearing costs, and what to expect.',
    content: 'Full article body...',
    category: 'Market Trends',
    tags: ['#Import', '#Finance'],
    image: 'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    upvotes: 102,
    comment_count: 21,
    read_time: '10 min read',
    created_at: '2025-10-10',
  },
  {
    id: 'p6',
    author_id: 'u1',
    title: 'The Future of Auto Transactions: Crypto Payments',
    excerpt: 'How cryptocurrency is set to revolutionize car buying in Africa.',
    content: 'Full article body...',
    category: 'Market Trends',
    tags: ['#Crypto', '#Technology'],
    image: 'https://images.unsplash.com/photo-1584232992172-29cead8e5230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    upvotes: 156,
    comment_count: 34,
    read_time: '6 min read',
    created_at: '2025-10-08',
  },
];

export const postComments: Comment[] = [
  {
    id: 'c1',
    post_id: 'p1',
    user_id: 'u4',
    user_name: 'Amina',
    avatar_url: avatar('Amina Ibrahim'),
    comment_text: 'This is gold! Wish I had this before buying my first car.',
    is_upvote: false,
    parent_id: null,
    created_at: '2025-10-20',
    replies: [
      {
        id: 'c1r1',
        post_id: 'p1',
        user_id: 'u2',
        user_name: 'Chioma',
        avatar_url: avatar('Chioma Eze'),
        comment_text: 'Glad it helped! Feel free to ask any questions.',
        is_upvote: false,
        parent_id: 'c1',
        created_at: '2025-10-20',
      },
    ],
  },
  {
    id: 'c2',
    post_id: 'p1',
    user_id: 'u3',
    user_name: 'David',
    avatar_url: avatar('David Okeke'),
    comment_text: 'Tip #4 saved me from a bad deal last week. Thanks for sharing.',
    is_upvote: false,
    parent_id: null,
    created_at: '2025-10-19',
  },
];

export const conversations: Conversation[] = [
  {
    id: 'conv1',
    listing_id: 'l1',
    listing_title: '2023 Mercedes-Benz S-Class',
    listing_image: 'https://images.unsplash.com/photo-1650256213562-487db281610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    seller_id: 'u1',
    seller_name: 'Ade Martins',
    seller_avatar: avatar('Ade Martins'),
    buyer_id: 'u4',
    buyer_name: 'Amina',
    last_message: 'Is the S-Class still available? Can I view it this weekend?',
    last_at: '2h ago',
    unread: true,
  },
  {
    id: 'conv2',
    listing_id: 'l6',
    listing_title: '2022 Lexus RX 350',
    listing_image: 'https://images.unsplash.com/photo-1742941158083-be03727c216b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    seller_id: 'u2',
    seller_name: 'Chioma Eze',
    seller_avatar: avatar('Chioma Eze'),
    buyer_id: 'u4',
    buyer_name: 'Amina',
    last_message: 'The RX 350 is in excellent condition. When would you like to inspect?',
    last_at: '1d ago',
    unread: false,
  },
  {
    id: 'conv3',
    listing_id: 'l4',
    listing_title: '2021 Toyota Camry XLE',
    listing_image: 'https://images.unsplash.com/photo-1624578571415-09e9b1991929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    seller_id: 'u3',
    seller_name: 'David Okeke',
    seller_avatar: avatar('David Okeke'),
    buyer_id: 'u4',
    buyer_name: 'Amina',
    last_message: 'Thanks for the quick response! I will come on Saturday.',
    last_at: '3d ago',
    unread: false,
  },
];

export const messages: Record<string, Message[]> = {
  conv1: [
    { id: 'm1', conversation_id: 'conv1', sender_id: 'u4', text: 'Hi Ade, is the S-Class still available?', created_at: '10:30' },
    { id: 'm2', conversation_id: 'conv1', sender_id: 'u1', text: 'Yes it is! Still in pristine condition.', created_at: '10:32' },
    { id: 'm3', conversation_id: 'conv1', sender_id: 'u4', text: 'Great. Can I view it this weekend?', created_at: '10:33' },
    { id: 'm4', conversation_id: 'conv1', sender_id: 'u1', text: 'Is the S-Class still available? Can I view it this weekend?', created_at: '10:35' },
  ],
  conv2: [
    { id: 'm5', conversation_id: 'conv2', sender_id: 'u4', text: 'Hi Chioma, interested in the Lexus RX 350.', created_at: '9:00' },
    { id: 'm6', conversation_id: 'conv2', sender_id: 'u2', text: 'The RX 350 is in excellent condition. When would you like to inspect?', created_at: '9:15' },
  ],
  conv3: [
    { id: 'm7', conversation_id: 'conv3', sender_id: 'u4', text: 'Is the Camry still for sale?', created_at: 'Mon' },
    { id: 'm8', conversation_id: 'conv3', sender_id: 'u3', text: 'Yes! Located in Port Harcourt.', created_at: 'Mon' },
    { id: 'm9', conversation_id: 'conv3', sender_id: 'u4', text: 'Thanks for the quick response! I will come on Saturday.', created_at: 'Mon' },
  ],
};

// Helpers
export const getUser = (id: string) => users.find((u) => u.id === id);
export const getListing = (id: string) => listings.find((l) => l.id === id);
export const getReviewsFor = (userId: string) =>
  reviews.filter((r) => r.receiver_id === userId && r.type === 'marketplace');
export const getPostsBy = (userId: string) =>
  communityPosts.filter((p) => p.author_id === userId);
export const getListingsBy = (userId: string) =>
  listings.filter((l) => l.seller_id === userId);

export const postCategories = [
  'All',
  'Buying Guide',
  'Selling Guide',
  'Maintenance',
  'Market Trends',
];

// A mock "current user" — the logged-in buyer browsing the marketplace
export const currentUser: User = {
  id: 'u4',
  username: 'AminaI',
  email: 'amina@elixr.com',
  avatar_url: avatar('Amina Ibrahim'),
  bio: 'Buyer turned seller. Loves SUVs and road trips.',
  trust_score: 4.1,
  total_sales: 3,
  role: 'buyer',
  verified: false,
  reputation: 45,
  badge: 'Rising Star',
  joined: 'Aug 2024',
};
