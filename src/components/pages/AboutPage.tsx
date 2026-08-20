import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Shield, Target, TrendingUp, Award } from 'lucide-react';
import SEO from '../SEO';
import { staggerContainer, fadeUp, slideInLeft } from '../../lib/animations';

export default function AboutPage() {
  const values = [
    { icon: Shield, title: 'Integrity', description: 'We build trust through transparency and honesty in every transaction.' },
    { icon: Target, title: 'Precision', description: 'Every detail matters. We ensure accuracy in all listings and communications.' },
    { icon: TrendingUp, title: 'Innovation', description: 'Embracing technology to revolutionize the automotive marketplace.' },
    { icon: Award, title: 'Premium Experience', description: 'Delivering gold-standard service to both buyers and sellers.' },
  ];

  const stats = [
    { value: '500+', label: 'Verified Sellers' },
    { value: '2,000+', label: 'Active Listings' },
    { value: '10,000+', label: 'Happy Customers' },
    { value: '4.8★', label: 'Avg. Trust Score' },
  ];

  return (
    <div className="bg-[#0A0A0B]">
      <SEO title="About" description="Redefining automotive transactions through trust and technology." canonicalUrl="/about" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1745421977200-77ced89731c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Premium automobiles" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/80 to-[#0A0A0B]/40" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">About ElixrAuto</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-neutral-300">Redefining automotive transactions through trust, technology, and a peer-to-peer community.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold text-white text-center mb-8">Our Story</motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5 text-neutral-300 text-lg leading-relaxed">
            <motion.p variants={fadeUp}>ElixrAuto was born from a simple vision: a trusted marketplace where car buyers and sellers connect directly, with complete confidence. We saw a gap in the African automotive market — a lack of transparency that left both sides vulnerable.</motion.p>
            <motion.p variants={fadeUp}>Our platform bridges that gap with rigorous seller verification, a reputation system powered by two-way reviews, and on-platform messaging that protects privacy. We don't just connect people with cars — we connect them with peace of mind.</motion.p>
            <motion.p variants={fadeUp}>Today, ElixrAuto stands as the gold standard in automotive deals, trusted by thousands of buyers and verified sellers across Africa.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[{ icon: Target, title: 'Our Vision', text: 'To redefine auto transactions in Africa through trust and technology, becoming the most trusted peer-to-peer automotive marketplace on the continent.' },
              { icon: TrendingUp, title: 'Our Mission', text: 'To build trust between buyers and verified sellers by providing accurate information, seamless communication, and a reputation system that rewards honesty.' }].map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-amber-500/20 h-full">
                  <CardContent className="pt-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-5"><v.icon className="text-amber-400" size={28} /></div>
                    <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                    <p className="text-neutral-400">{v.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-3">Our Core Values</motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-400">The principles that guide everything we do.</motion.p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-white/10 hover:border-amber-500/30 transition-colors h-full group">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <v.icon className="text-amber-400" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                    <p className="text-neutral-400 text-sm">{v.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{s.value}</div>
                <div className="text-neutral-400">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="bg-white/[0.03] border-white/10">
              <CardContent className="pt-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">A Message from Our Founder</h2>
                  <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
                </div>
                <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                  <p>"When I started ElixrAuto, I had one goal: to make car buying and selling in Africa as trustworthy as it should be. Too many people have been burned by fake listings and dishonest dealers."</p>
                  <p>"We're changing that. Every seller is verified. Every transaction is built on trust, transparency, and a reputation system that follows you."</p>
                  <p>"Whether you're buying your first car or your tenth — ElixrAuto elevates your experience to the gold standard. Thank you for trusting us with your automotive journey."</p>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-white font-semibold">ElixrAuto Team</p>
                  <p className="text-sm text-neutral-500">Founder &amp; CEO</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
