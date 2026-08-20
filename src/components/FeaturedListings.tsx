import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle, MapPin, Gauge, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SellerSnippet } from './SellerSnippet';
import { listings } from '../lib/mockData';

export default function FeaturedListings() {
  const featured = listings.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featured.map((listing, index) => (
        <motion.div
          key={listing.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to={`/listings/${listing.id}`}>
            <Card className="group overflow-hidden border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="relative overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {listing.verified && (
                  <Badge className="absolute top-3 right-3 bg-emerald-500/90 text-white border-0 backdrop-blur-sm">
                    <CheckCircle size={12} className="mr-1" /> Verified
                  </Badge>
                )}
                <Badge className="absolute top-3 left-3 bg-black/60 text-white border-0 backdrop-blur-sm">
                  {listing.condition}
                </Badge>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-lg drop-shadow">{listing.title}</p>
                </div>
              </div>

              <CardContent className="p-5">
                <p className="text-2xl font-bold text-amber-400 mb-3">{listing.price}</p>

                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-neutral-400 text-sm mb-3">
                  <span className="flex items-center gap-1.5"><Calendar size={14} />{listing.year}</span>
                  <span className="flex items-center gap-1.5"><Gauge size={14} />{listing.mileage}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} />{listing.location}</span>
                </div>

                <SellerSnippet sellerId={listing.seller_id} />

                <Button
                  className="w-full mt-4 bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  Message Seller
                </Button>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
