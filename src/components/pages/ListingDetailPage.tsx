import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle, MapPin, Gauge, Calendar, Fuel, Flag, MessageSquare, ShieldCheck, Star, ArrowLeft, ThumbsUp } from 'lucide-react';
import { getListing, getUser, getReviewsFor } from '../../lib/mockData';
import { StarRating, TrustBadge } from '../SellerSnippet';
import SEO from '../SEO';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { toast } from 'sonner';

export default function ListingDetailPage() {
  const { id } = useParams();
  const listing = getListing(id || '');
  const [activeImg, setActiveImg] = useState(0);
  const [reviewOpen, setReviewOpen] = useState(false);

  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <p className="text-neutral-400 text-lg mb-4">Listing not found.</p>
        <Link to="/listings"><Button className="bg-amber-400 text-neutral-900 hover:bg-amber-300">Back to listings</Button></Link>
      </div>
    );
  }

  const seller = getUser(listing.seller_id);
  const sellerReviews = seller ? getReviewsFor(seller.id) : [];

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title={listing.title} description={listing.description} canonicalUrl={`/listings/${listing.id}`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/listings" className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 text-sm mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to listings
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <ImageWithFallback src={listing.gallery[activeImg] || listing.image} alt={listing.title} className="w-full h-[340px] md:h-[460px] object-cover" />
              {listing.verified && (
                <Badge className="absolute top-4 right-4 bg-emerald-500/90 text-white border-0 backdrop-blur-sm">
                  <CheckCircle size={12} className="mr-1" /> Verified
                </Badge>
              )}
            </div>
            {listing.gallery.length > 1 && (
              <div className="flex gap-2 mt-3">
                {listing.gallery.map((g, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`h-16 w-24 rounded-lg overflow-hidden border-2 transition-colors ${i === activeImg ? 'border-amber-400' : 'border-white/10'}`}>
                    <img src={g} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20">{listing.condition}</Badge>
              {listing.status === 'Sold' && <Badge className="bg-red-500/90 text-white border-0">Sold</Badge>}
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">{listing.title}</h1>
            <p className="text-4xl font-bold text-amber-400 mb-6">{listing.price}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Calendar, label: 'Year', value: listing.year },
                { icon: Gauge, label: 'Mileage', value: listing.mileage },
                { icon: Fuel, label: 'Fuel', value: listing.fuel },
                { icon: MapPin, label: 'Location', value: listing.location },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-3.5">
                  <div className="h-9 w-9 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <d.icon className="text-amber-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">{d.label}</p>
                    <p className="text-sm text-white font-medium">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">{listing.description}</p>

            {/* Seller card */}
            {seller && (
              <Card className="bg-white/[0.03] border-white/10 mb-6">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border border-amber-500/20">
                        <AvatarImage src={seller.avatar_url} />
                        <AvatarFallback>{seller.username.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <Link to={`/profile/${seller.id}`} className="text-white font-semibold hover:text-amber-400 transition-colors">{seller.username}</Link>
                          <TrustBadge user={seller} />
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <StarRating value={seller.trust_score} size={13} />
                          <span className="text-xs text-neutral-500">{seller.trust_score} · {seller.total_sales} sales</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20">{seller.badge}</Badge>
                  </div>
                  <p className="text-neutral-400 text-sm mt-3">{seller.bio}</p>
                </CardContent>
              </Card>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold flex-1 gap-2">
                <MessageSquare size={18} /> Message Seller
              </Button>
              <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 gap-2">
                <ShieldCheck size={18} /> Sign Up to Bid
              </Button>
              <Button size="lg" variant="ghost" className="text-neutral-400 hover:text-red-400 gap-2" onClick={() => toast.success('Report submitted. Our team will review it.')}>
                <Flag size={18} /> Report
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Reviews */}
        <section className="mt-12 max-w-3xl">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-white">Seller Reviews</h2>
            <Button variant="outline" size="sm" className="border-white/15 text-white hover:bg-white/5" onClick={() => setReviewOpen(!reviewOpen)}>
              {reviewOpen ? 'Cancel' : 'Write a Review'}
            </Button>
          </div>

          {reviewOpen && (
            <Card className="bg-white/[0.03] border-white/10 mb-5">
              <CardContent className="p-5 space-y-4">
                <div>
                  <p className="text-sm text-neutral-400 mb-2">Your rating</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={24} className="fill-amber-400 text-amber-400 cursor-pointer" />)}
                  </div>
                </div>
                <Textarea placeholder="Share your experience with this seller..." className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500" rows={4} />
                <div className="flex gap-2">
                  <Button className="bg-amber-400 text-neutral-900 hover:bg-amber-300" onClick={() => { setReviewOpen(false); toast.success('Review submitted!'); }}>Submit Review</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
            {sellerReviews.length > 0 ? sellerReviews.map((r) => (
              <motion.div key={r.id} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-white font-medium text-sm">{r.reviewer_name}</p>
                      <StarRating value={r.stars} size={13} />
                    </div>
                    <p className="text-neutral-300 text-sm">{r.comment}</p>
                    <p className="text-neutral-600 text-xs mt-2">{r.created_at}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )) : (
              <p className="text-neutral-500 text-sm">No reviews yet. Be the first to review this seller.</p>
            )}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
