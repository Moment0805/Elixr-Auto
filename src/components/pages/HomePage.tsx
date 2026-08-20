import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Shield, Zap, Coins, CheckCircle, Star, ArrowRight, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import FeaturedListings from '../FeaturedListings';
import SEO from '../SEO';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../lib/animations';

export default function HomePage() {
  const features = [
    { icon: Shield, title: 'Verified Sellers', description: 'Every seller is vetted. Browse listings backed by real trust scores.' },
    { icon: MessageSquare, title: 'In-App Messaging', description: 'Chat directly with sellers on-platform. Your privacy stays protected.' },
    { icon: Star, title: 'Ratings & Reviews', description: 'Two-way feedback after every transaction builds a reputation economy.' },
    { icon: Coins, title: 'Crypto Ready', description: 'Future-ready payments including cryptocurrency for cross-border deals.' },
  ];

  const stats = [
    { value: '2,000+', label: 'Active Listings' },
    { value: '500+', label: 'Verified Sellers' },
    { value: '10,000+', label: 'Happy Buyers' },
    { value: '4.8★', label: 'Avg. Trust Score' },
  ];

  const testimonials = [
    { name: 'Chidi Okonkwo', role: 'Car Buyer', text: 'Found my dream car in 2 days. The in-app chat made negotiating effortless.', rating: 5 },
    { name: 'Amina Ibrahim', role: 'Verified Seller', text: 'My trust score brings serious buyers straight to me. No more time-wasters.', rating: 5 },
    { name: 'David Okeke', role: 'First-time Buyer', text: 'The reviews gave me confidence. Bought my first car entirely through the platform.', rating: 5 },
  ];

  return (
    <div className="bg-[#0A0A0B]">
      <SEO
        title="The Gold Standard in Deals"
        description="A peer-to-peer car marketplace connecting verified sellers with trusted buyers across Africa."
        keywords="car marketplace, verified sellers, peer-to-peer, buy cars Nigeria, sell cars"
        canonicalUrl="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-amber-600/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.04),transparent_60%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.div variants={fadeUp}>
                <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mr-1.5 animate-pulse" /> Peer-to-Peer Marketplace
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
              >
                Buy &amp; sell cars <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">directly</span>, with trust.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-neutral-400 mb-8 leading-relaxed">
                No middleman. Connect with verified sellers, chat on-platform, and trade with confidence powered by a reputation system.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link to="/listings">
                  <Button size="lg" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold px-7 group">
                    Browse Cars
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link to="/sell">
                  <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 hover:border-amber-400/40 px-7">
                    Sell Your Car
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-neutral-500">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Premium car"
                  className="relative rounded-2xl border border-white/10 shadow-2xl w-full h-[420px] object-cover"
                />
              </motion.div>
              {/* floating trust card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-xl w-52"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-neutral-900 text-xs font-bold">AM</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Ade Martins</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-300">Verified Seller · 42 sales</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for trust between buyers &amp; sellers
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-400 text-lg">
              Everything you need to trade peer-to-peer, safely.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-white/10 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all duration-300 h-full group">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <f.icon className="text-amber-400" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10"
          >
            <div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Listings</motion.h2>
              <motion.p variants={fadeUp} className="text-neutral-400">Handpicked vehicles from verified sellers</motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link to="/listings">
                <Button variant="ghost" className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 gap-1.5">
                  View all <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <FeaturedListings />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Find a car', desc: 'Browse verified listings and filter by make, year, location & seller rating.' },
              { step: '02', title: 'Message the seller', desc: 'Chat on-platform. Ask questions and arrange a viewing — your privacy stays protected.' },
              { step: '03', title: 'Trade & rate', desc: 'Mark as sold, then both sides leave a review. Trust scores update automatically.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-amber-400/20 mb-3">{s.step}</div>
                <h3 className="text-white text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Trusted by the community
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-white/10 h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-3">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} className="fill-amber-400 text-amber-400" size={16} />)}
                    </div>
                    <p className="text-neutral-300 mb-4 italic leading-relaxed">"{t.text}"</p>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent p-10 lg:p-16 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 bg-amber-500/20 blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to find your next car?</h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">Join thousands trading peer-to-peer with confidence and a reputation that travels with you.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/listings">
                  <Button size="lg" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold px-7">Browse Cars</Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 px-7">Create Account</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
