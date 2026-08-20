import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LifeBuoy, Flag, MessageCircle, HelpCircle, ChevronDown } from 'lucide-react';
import SEO from '../SEO';
import { staggerContainer, fadeUp } from '../../lib/animations';
import { toast } from 'sonner';

const faqs = [
  { q: 'How do I message a seller?', a: 'Click "Message Seller" on any listing. This opens a private on-platform chat — no phone numbers are shared until you choose to.' },
  { q: 'How does the rating system work?', a: 'After a listing is marked as sold, both buyer and seller are prompted to rate each other. Ratings feed into each user\'s public trust score.' },
  { q: 'How do I report a problem?', a: 'Use the Report button on any listing or chat, or fill out the Report a Problem form below. Reported content is reviewed by our moderation team.' },
  { q: 'Is it free to browse and message?', a: 'Yes. Browsing listings and messaging sellers is completely free. Dealership subscriptions start at ₦15,000/month.' },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [reportType, setReportType] = useState('');

  const handleReport = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Report submitted. Our team will investigate and respond via email.');
    setReportType('');
  };

  const contactOptions = [
    { icon: LifeBuoy, title: 'Help Center', desc: 'Browse guides and FAQs', action: 'View guides' },
    { icon: Flag, title: 'Report a Problem', desc: 'Report fraud, spam, or a dispute', action: 'Report now' },
    { icon: MessageCircle, title: 'Community Support', desc: 'Ask the community in Discussions', action: 'Go to community' },
  ];

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Help Center" description="Get help, report a problem, or browse FAQs on ElixrAuto." canonicalUrl="/help" />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 mb-4">
              <LifeBuoy className="text-amber-400" size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">How can we help?</h1>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">Report issues, browse FAQs, or get community support. We handle only platform issues — deals happen peer-to-peer.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {contactOptions.map((c) => (
              <motion.div key={c.title} variants={fadeUp}>
                <Card className="bg-white/[0.03] border-white/10 hover:border-amber-500/30 transition-colors h-full cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <c.icon className="text-amber-400" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{c.title}</h3>
                    <p className="text-neutral-400 text-sm">{c.desc}</p>
                    <p className="text-amber-400 text-sm mt-3 group-hover:underline">{c.action}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Report form + FAQ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Report a problem */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Flag size={18} className="text-amber-400" /> Report a Problem</h2>
            <Card className="bg-white/[0.03] border-white/10">
              <CardContent className="p-6">
                <form onSubmit={handleReport} className="space-y-4">
                  <div>
                    <Label htmlFor="rname" className="text-neutral-300">Your Name</Label>
                    <Input id="rname" required className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="remail" className="text-neutral-300">Email</Label>
                    <Input id="remail" type="email" required className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" placeholder="you@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="rtype" className="text-neutral-300">Issue Type</Label>
                    <Select value={reportType} onValueChange={setReportType} required>
                      <SelectTrigger className="mt-1.5 bg-white/5 border-white/10 text-white"><SelectValue placeholder="Select issue type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fraud">Fraudulent listing / seller</SelectItem>
                        <SelectItem value="spam">Spam or scam</SelectItem>
                        <SelectItem value="dispute">Transaction dispute</SelectItem>
                        <SelectItem value="bug">Technical bug</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="rdesc" className="text-neutral-300">Description</Label>
                    <Textarea id="rdesc" required rows={4} className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" placeholder="Describe the issue..." />
                  </div>
                  <Button type="submit" className="w-full bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold">Submit Report</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><HelpCircle size={18} className="text-amber-400" /> FAQs</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <Card key={i} className="bg-white/[0.03] border-white/10 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
                    <span className="text-white text-sm font-medium">{f.q}</span>
                    <ChevronDown size={16} className={`text-neutral-400 transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }} className="overflow-hidden">
                    <p className="px-4 pb-4 text-neutral-400 text-sm">{f.a}</p>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
