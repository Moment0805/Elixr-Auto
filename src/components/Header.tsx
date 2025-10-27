import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Cars', path: '/listings' },
    { name: 'Dealers', path: '/dealer-signup' },
    { name: 'Blog', path: '/blog' },
    { name: 'Crypto', path: '/crypto' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#0C0C0C] text-white sticky top-0 z-50 border-b border-[#D4AF37]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
              <span className="text-[#0C0C0C]">EA</span>
            </div>
            <div>
              <div className="text-[#D4AF37] tracking-wide">ELIXIRAUTOX</div>
              <div className="text-xs text-[#C0C0C0]">The Gold Standard in Deals</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/listings">
              <Button className="bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0]">
                View Cars
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#D4AF37]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 transition-colors ${
                  isActive(link.path)
                    ? 'text-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/listings" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-4 bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0]">
                View Cars
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
