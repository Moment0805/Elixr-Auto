import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowLeft, Image as ImageIcon, Check, Lock } from 'lucide-react';
import SEO from '../SEO';
import { toast } from 'sonner';

export default function SellCarPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Listing draft saved! Sign in to publish it.');
  };

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Sell Your Car" description="List your car on ElixrAuto and reach verified buyers." canonicalUrl="/sell" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-2xl">
        <Link to="/listings" className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 text-sm mb-6 transition-colors">
          <ArrowLeft size={16} /> Back
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 mb-4">
            <span className="text-amber-400 font-bold text-lg">$</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Sell Your Car</h1>
          <p className="text-neutral-400 mb-6">List in minutes. Reach verified buyers and chat on-platform.</p>

          {submitted ? (
            <Card className="bg-white/[0.03] border-amber-500/30">
              <CardContent className="p-8 text-center">
                <div className="h-14 w-14 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="text-amber-400" size={28} />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Draft saved!</h2>
                <p className="text-neutral-400 mb-6">Create an account to publish your listing and start receiving messages from buyers.</p>
                <div className="flex gap-3 justify-center">
                  <Link to="/login"><Button className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold">Sign In to Publish</Button></Link>
                  <Button variant="outline" className="border-white/15 text-white hover:bg-white/5" onClick={() => setSubmitted(false)}>Edit Listing</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/[0.03] border-white/10">
              <CardHeader><CardTitle className="text-white">Listing Details</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handle} className="space-y-5">
                  <div>
                    <Label htmlFor="title" className="text-neutral-300">Title *</Label>
                    <Input id="title" required placeholder="e.g. 2023 Toyota Camry XLE" className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="make" className="text-neutral-300">Make</Label>
                      <Input id="make" placeholder="Toyota" className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                    </div>
                    <div>
                      <Label htmlFor="year" className="text-neutral-300">Year</Label>
                      <Input id="year" placeholder="2023" className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price" className="text-neutral-300">Price (₦) *</Label>
                      <Input id="price" required type="number" placeholder="18500000" className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                    </div>
                    <div>
                      <Label htmlFor="loc" className="text-neutral-300">Location</Label>
                      <Select required>
                        <SelectTrigger className="mt-1.5 bg-white/5 border-white/10 text-white"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="ph">Port Harcourt</SelectItem>
                          <SelectItem value="kano">Kano</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="mileage" className="text-neutral-300">Mileage</Label>
                    <Input id="mileage" placeholder="8,500 km" className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                  </div>
                  <div>
                    <Label htmlFor="desc" className="text-neutral-300">Description</Label>
                    <Textarea id="desc" rows={4} placeholder="Condition, features, service history..." className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                  </div>
                  <div>
                    <Label className="text-neutral-300">Photos</Label>
                    <div className="mt-1.5 border-2 border-dashed border-white/15 rounded-xl p-8 text-center hover:border-amber-400/40 transition-colors cursor-pointer">
                      <ImageIcon className="mx-auto text-neutral-500 mb-2" size={28} />
                      <p className="text-sm text-neutral-400">Upload up to 10 photos</p>
                      <p className="text-xs text-neutral-600 mt-1">First photo becomes the cover image</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-500 bg-white/[0.02] border border-white/10 rounded-lg p-3">
                    <Lock size={14} className="shrink-0 mt-0.5 text-amber-400" />
                    <p>You'll be asked to sign in or create an account before your listing goes live. Your contact details stay hidden — buyers reach you via in-app messaging.</p>
                  </div>
                  <Button type="submit" className="w-full bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold py-5">Save Listing Draft</Button>
                </form>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
