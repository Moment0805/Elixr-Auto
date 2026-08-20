import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle, MapPin, Gauge, Calendar, Search, SlidersHorizontal, Star } from 'lucide-react';
import { listings, getUser } from '../../lib/mockData';
import { SellerSnippet, StarRating } from '../SellerSnippet';
import SEO from '../SEO';
import { staggerContainer, fadeUp } from '../../lib/animations';

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [minRating, setMinRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const makes = [...new Set(listings.map((l) => l.make))];
  const years = [...new Set(listings.map((l) => l.year))];
  const locations = [...new Set(listings.map((l) => l.location))];

  const filtered = useMemo(() => {
    let result = listings.filter((l) => {
      const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMake = selectedMake === 'all' || l.make === selectedMake;
      const matchesYear = selectedYear === 'all' || l.year === selectedYear;
      const matchesLocation = selectedLocation === 'all' || l.location === selectedLocation;
      const seller = getUser(l.seller_id);
      const matchesRating = minRating === 'all' || (seller && seller.trust_score >= Number(minRating));
      return matchesSearch && matchesMake && matchesYear && matchesLocation && matchesRating;
    });

    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price_value - b.price_value);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price_value - a.price_value);
    if (sortBy === 'rating') result = [...result].sort((a, b) => (getUser(b.seller_id)?.trust_score || 0) - (getUser(a.seller_id)?.trust_score || 0));
    return result;
  }, [searchQuery, selectedMake, selectedYear, selectedLocation, minRating, sortBy]);

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Browse Cars" description="Browse verified car listings from trusted sellers across Africa." canonicalUrl="/listings" />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Browse Cars</h1>
            <p className="text-neutral-400 text-lg max-w-2xl">Verified vehicles from trusted sellers. Filter by rating to trade with confidence.</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white/[0.02] py-5 border-b border-white/10 sticky top-16 z-30 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="relative col-span-2 md:col-span-1 lg:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
              <Input
                placeholder="Search cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
              />
            </div>
            <Select value={selectedMake} onValueChange={setSelectedMake}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white"><SelectValue placeholder="Make" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Makes</SelectItem>
                {makes.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white"><SelectValue placeholder="Year" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white"><SelectValue placeholder="Location" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={minRating} onValueChange={setMinRating}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white"><SelectValue placeholder="Rating" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Rating</SelectItem>
                <SelectItem value="4.5">4.5★ & up</SelectItem>
                <SelectItem value="4">4★ & up</SelectItem>
                <SelectItem value="3">3★ & up</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-neutral-500 text-sm flex items-center gap-1.5"><SlidersHorizontal size={14} /> {filtered.length} vehicles</p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[170px] h-8 bg-white/5 border-white/10 text-white text-sm"><SelectValue placeholder="Sort" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Seller Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((listing) => {
                const seller = getUser(listing.seller_id);
                return (
                  <motion.div key={listing.id} variants={fadeUp}>
                    <Link to={`/listings/${listing.id}`}>
                      <Card className="group overflow-hidden border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                        <div className="relative overflow-hidden rounded-t-xl">
                          <ImageWithFallback src={listing.image} alt={listing.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          {listing.verified && (
                            <Badge className="absolute top-2.5 right-2.5 bg-emerald-500/90 text-white border-0 backdrop-blur-sm text-[11px]">
                              <CheckCircle size={11} className="mr-1" /> Verified
                            </Badge>
                          )}
                          {listing.status === 'Sold' && (
                            <Badge className="absolute top-2.5 left-2.5 bg-red-500/90 text-white border-0 backdrop-blur-sm text-[11px]">Sold</Badge>
                          )}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5">
                            <p className="text-white font-semibold text-base drop-shadow leading-tight">{listing.title}</p>
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <p className="text-xl font-bold text-amber-400 mb-2.5">{listing.price}</p>
                          <div className="flex flex-wrap gap-x-3 gap-y-1 text-neutral-500 text-xs mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} />{listing.year}</span>
                            <span className="flex items-center gap-1"><Gauge size={12} />{listing.mileage}</span>
                            <span className="flex items-center gap-1"><MapPin size={12} />{listing.location}</span>
                          </div>
                          {seller && (
                            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                              <div className="flex items-center gap-1.5">
                                <img src={seller.avatar_url} alt={seller.username} className="h-6 w-6 rounded-full border border-amber-500/20" />
                                <span className="text-xs text-neutral-300">{seller.username}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <StarRating value={seller.trust_score} size={11} />
                              </div>
                            </div>
                          )}
                          <Button className="w-full mt-3 bg-amber-400 text-neutral-900 hover:bg-amber-300 text-sm font-semibold h-9">
                            Message Seller
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-400 text-lg mb-4">No vehicles match your filters.</p>
              <Button
                className="bg-amber-400 text-neutral-900 hover:bg-amber-300"
                onClick={() => { setSearchQuery(''); setSelectedMake('all'); setSelectedYear('all'); setSelectedLocation('all'); setMinRating('all'); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
