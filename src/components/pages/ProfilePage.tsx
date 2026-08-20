import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle, MapPin, Gauge, Calendar, Star, Award, TrendingUp, MessageSquare, FileText, BarChart3 } from 'lucide-react';
import { getUser, getReviewsFor, getListingsBy, getPostsBy } from '../../lib/mockData';
import { StarRating, TrustBadge } from '../SellerSnippet';
import SEO from '../SEO';
import { staggerContainer, fadeUp } from '../../lib/animations';

export default function ProfilePage() {
  const { id } = useParams();
  const user = getUser(id || '');

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <p className="text-neutral-400 mb-4">User not found.</p>
        <Link to="/listings"><Button className="bg-amber-400 text-neutral-900 hover:bg-amber-300">Browse cars</Button></Link>
      </div>
    );
  }

  const reviews = getReviewsFor(user.id);
  const userListings = getListingsBy(user.id);
  const userPosts = getPostsBy(user.id);
  const avgStars = reviews.length ? (reviews.reduce((a, r) => a + r.stars, 0) / reviews.length).toFixed(1) : user.trust_score;

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title={user.username} description={`${user.username}'s profile on ElixrAuto`} canonicalUrl={`/profile/${user.id}`} />

      {/* Profile header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <Avatar className="h-20 w-20 md:h-24 md:w-24 border-2 border-amber-400/30 shrink-0">
              <AvatarImage src={user.avatar_url} />
              <AvatarFallback className="text-2xl">{user.username.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{user.username}</h1>
                <TrustBadge user={user} />
                <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20"><Award size={12} className="mr-1" /> {user.badge}</Badge>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <StarRating value={user.trust_score} size={16} />
                <span className="text-neutral-400 text-sm">{avgStars} · {user.total_sales} sales · {user.reputation} reputation</span>
              </div>
              <p className="text-neutral-400 max-w-xl">{user.bio}</p>
            </div>
            <div className="flex gap-2 md:flex-col">
              <Button className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold gap-2"><MessageSquare size={16} /> Message</Button>
              <Button variant="outline" className="border-white/15 text-white hover:bg-white/5">Follow</Button>
            </div>
          </motion.div>

          {/* Stat cards */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Star, label: 'Trust Score', value: user.trust_score.toFixed(1) },
              { icon: TrendingUp, label: 'Total Sales', value: user.total_sales },
              { icon: Award, label: 'Reputation', value: user.reputation },
              { icon: Calendar, label: 'Joined', value: user.joined },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-white/10">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0">
                      <s.icon className="text-amber-400" size={18} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white leading-none">{s.value}</p>
                      <p className="text-xs text-neutral-500 mt-1">{s.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Listings */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 size={18} className="text-amber-400" /> Listings ({userListings.length})</h2>
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid sm:grid-cols-2 gap-4">
              {userListings.map((l) => (
                <motion.div key={l.id} variants={fadeUp}>
                  <Link to={`/listings/${l.id}`}>
                    <Card className="group overflow-hidden border-white/10 bg-white/[0.03] hover:border-amber-500/30 transition-colors">
                      <div className="relative overflow-hidden rounded-t-xl">
                        <ImageWithFallback src={l.image} alt={l.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
                        {l.status === 'Sold' && <Badge className="absolute top-2 left-2 bg-red-500/90 text-white border-0 text-[11px]">Sold</Badge>}
                      </div>
                      <CardContent className="p-3.5">
                        <p className="text-white text-sm font-semibold truncate">{l.title}</p>
                        <p className="text-amber-400 font-bold">{l.price}</p>
                        <p className="text-xs text-neutral-500 flex items-center gap-1 mt-1"><MapPin size={11} /> {l.location}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Reviews */}
            <h2 className="text-xl font-bold text-white mb-4 mt-8 flex items-center gap-2"><Star size={18} className="text-amber-400" /> Reviews ({reviews.length})</h2>
            <div className="space-y-3">
              {reviews.map((r) => (
                <Card key={r.id} className="bg-white/[0.03] border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-white font-medium text-sm">{r.reviewer_name}</p>
                      <StarRating value={r.stars} size={13} />
                    </div>
                    <p className="text-neutral-300 text-sm">{r.comment}</p>
                    <p className="text-neutral-600 text-xs mt-2">{r.created_at}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community posts */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText size={18} className="text-amber-400" /> Posts ({userPosts.length})</h2>
            <div className="space-y-3">
              {userPosts.map((p) => (
                <Link to="/community" key={p.id}>
                  <Card className="bg-white/[0.03] border-white/10 hover:border-amber-500/20 transition-colors">
                    <CardContent className="p-4">
                      <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-2 text-[10px]">{p.category}</Badge>
                      <p className="text-white text-sm font-medium mb-1">{p.title}</p>
                      <p className="text-xs text-neutral-500">{p.upvotes} upvotes · {p.comment_count} comments</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
