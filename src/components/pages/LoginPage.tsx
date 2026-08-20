import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Car, ShoppingCart, ArrowRight, Check, Mail, Lock, User as UserIcon } from 'lucide-react';
import SEO from '../SEO';
import { toast } from 'sonner';

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(mode === 'login' ? 'Welcome back!' : 'Account created!');
    navigate('/');
  };

  const benefits = [
    'Message sellers directly on-platform',
    'Save listings and get notifications',
    'Build a public trust score & reputation',
    'Buy and sell with the same account',
  ];

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Sign In" description="Create an account or sign in to ElixrAuto." canonicalUrl="/login" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Left: marketing panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Car className="text-neutral-900" size={22} />
              </div>
              <div className="font-bold text-white text-xl">Elixr<span className="text-amber-400">Auto</span></div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">One account for buying &amp; selling</h2>
            <p className="text-neutral-400 mb-8 max-w-md">Join a peer-to-peer marketplace where your reputation travels with you.</p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-amber-400" size={12} />
                  </div>
                  <span className="text-neutral-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: auth card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/[0.03] border-white/10">
              <CardContent className="p-7">
                {/* Toggle */}
                <div className="flex bg-white/5 rounded-lg p-1 mb-6">
                  {(['login', 'signup'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${mode === m ? 'bg-amber-400 text-neutral-900' : 'text-neutral-400'}`}
                    >
                      {m === 'login' ? 'Sign In' : 'Sign Up'}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {mode === 'login' ? 'Welcome back' : 'Create your account'}
                    </h2>
                    <p className="text-neutral-400 text-sm mb-6">
                      {mode === 'login' ? 'Sign in to continue to ElixrAuto' : 'Join the marketplace in seconds'}
                    </p>

                    {mode === 'signup' && (
                      <div className="mb-5">
                        <Label className="text-neutral-300 mb-2 block">I want to...</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {([['buyer', 'Buy Cars', ShoppingCart], ['seller', 'Sell Cars', Car]] as const).map(([val, label, Icon]) => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setRole(val)}
                              className={`flex flex-col items-center gap-2 py-4 rounded-xl border transition-all ${role === val ? 'border-amber-400 bg-amber-400/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                            >
                              <Icon className={role === val ? 'text-amber-400' : 'text-neutral-400'} size={22} />
                              <span className={`text-sm font-medium ${role === val ? 'text-amber-300' : 'text-neutral-300'}`}>{label}</span>
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-neutral-500 mt-2">You can do both with a single account.</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {mode === 'signup' && (
                        <div>
                          <Label htmlFor="name" className="text-neutral-300">Full Name</Label>
                          <div className="relative mt-1.5">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                            <Input id="name" placeholder="Your name" required className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                          </div>
                        </div>
                      )}
                      <div>
                        <Label htmlFor="email" className="text-neutral-300">Email</Label>
                        <div className="relative mt-1.5">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                          <Input id="email" type="email" placeholder="you@email.com" required className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="password" className="text-neutral-300">Password</Label>
                        <div className="relative mt-1.5">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                          <Input id="password" type="password" placeholder="••••••••" required className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold py-5 group">
                        {mode === 'login' ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </form>

                    <p className="text-center text-sm text-neutral-500 mt-5">
                      {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                      <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-amber-400 hover:underline font-medium">
                        {mode === 'login' ? 'Sign up' : 'Sign in'}
                      </button>
                    </p>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
