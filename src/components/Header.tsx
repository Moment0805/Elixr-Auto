import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, User as UserIcon, MessageSquare, Plus } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { currentUser } from '../lib/mockData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Cars', path: '/listings' },
    { name: 'Community', path: '/community' },
    { name: 'Sell a Car', path: '/sell' },
    { name: 'Crypto', path: '/crypto' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Car className="text-neutral-900" size={20} />
            </div>
            <div className="leading-tight">
              <div className="font-bold tracking-tight text-white text-lg">Elixr<span className="text-amber-400">Auto</span></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-400'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-amber-400"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-amber-400 relative">
                <MessageSquare size={18} />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-400" />
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="ghost" size="sm" className="text-neutral-200 gap-1.5">
                <Plus size={16} /> List
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold">
                Sign In
              </Button>
            </Link>
            <Link to={`/profile/${currentUser.id}`}>
              <Avatar className="h-8 w-8 border border-amber-500/30 cursor-pointer">
                <AvatarImage src={currentUser.avatar_url} />
                <AvatarFallback className="bg-amber-400 text-neutral-900 text-xs">
                  {currentUser.username.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-neutral-300 hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <Link to="/messages" onClick={() => setIsMenuOpen(false)} className="flex-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-neutral-200 gap-2">
                    <MessageSquare size={16} /> Messages
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold">
                    Sign In
                  </Button>
                </Link>
              </div>
              <Link
                to={`/profile/${currentUser.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5"
              >
                <UserIcon size={16} /> My Profile
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
