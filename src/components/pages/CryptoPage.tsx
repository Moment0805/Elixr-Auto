import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Coins, Shield, Zap, CheckCircle, Bell } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';
import { staggerContainer, fadeUp, slideInRight } from '../../lib/animations';
import { toast } from 'sonner';

export default function CryptoPage() {
  const [email, setEmail] = useState('');

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll notify you when crypto payments launch.");
    setEmail('');
  };

  const features = [
    { icon: Shield, title: 'Secure Transactions', description: 'Blockchain-based security ensures payments are safe and transparent.' },
    { icon: Zap, title: 'Instant Payments', description: 'No waiting for bank transfers. Settlement in minutes, not days.' },
    { icon: Coins, title: 'Multiple Coins', description: 'Accept Bitcoin, Ethereum, USDT and other major cryptocurrencies.' },
    { icon: CheckCircle, title: 'Low Fees', description: 'Significantly lower fees compared to traditional payment methods.' },
  ];

  const benefits = {
    buyers: ['Pay with your preferred cryptocurrency', 'Avoid conversion fees & exchange rate risk', 'Faster transaction processing', 'International purchases made easy'],
    sellers: ['Expand your base to crypto holders', 'Receive international payments instantly', 'Lower processing fees than cards', 'Hedge against currency fluctuations'],
  };

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Crypto Payments" description="The future of auto transactions — cryptocurrency payments on ElixrAuto." canonicalUrl="/crypto" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1584232992172-29cead8e5230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Cryptocurrency" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/85 to-[#0A0A0B]/60" />
          <div className="absolute top-1/4 right-0 h-64 w-64 rounded-full bg-amber-500/15 blur-[100px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <Coins className="text-amber-400" size={36} />
              <span className="bg-amber-400/15 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-400/20">Coming Soon</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">The future of auto transactions</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-neutral-300 mb-8 max-w-xl">ElixrAuto is pioneering cryptocurrency payments for vehicle transactions in Africa. Be part of the revolution.</motion.p>
            <motion.div variants={fadeUp}>
              <a href="#notify">
                <Button size="lg" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold px-7">Get Notified</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-2xl mx-auto mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">How it will work</motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-400 text-lg">Safe, simple, and secure cryptocurrency transactions for automotive deals.</motion.p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-white/10 hover:border-amber-500/30 transition-colors h-full group">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <f.icon className="text-amber-400" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                    <p className="text-neutral-400 text-sm">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits for everyone</h2>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[['For Buyers', benefits.buyers], ['For Sellers', benefits.sellers]].map(([title, list]) => (
              <Card key={title as string} className="bg-white/[0.03] border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-5">{title as string}</h3>
                  <ul className="space-y-3">
                    {(list as string[]).map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
                        <span className="text-neutral-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notify */}
      <section id="notify" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-10 lg:p-16 max-w-2xl mx-auto text-center"
          >
            <Bell className="mx-auto mb-5 text-amber-400" size={40} />
            <h2 className="text-3xl font-bold text-white mb-3">Be the first to know</h2>
            <p className="text-neutral-400 mb-7">Register your interest and we'll notify you when crypto payments go live.</p>
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="bg-white/10 border-white/15 text-white placeholder:text-neutral-500" />
              <Button type="submit" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold px-6 shrink-0">Notify Me</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
