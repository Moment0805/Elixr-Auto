import { Link } from 'react-router-dom';
import { Instagram, Twitter, Car, LifeBuoy } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Car className="text-neutral-900" size={20} />
              </div>
              <div className="font-bold text-white text-lg">Elixr<span className="text-amber-400">Auto</span></div>
            </div>
            <p className="text-neutral-400 text-sm max-w-xs">
              The peer-to-peer marketplace connecting verified sellers with trusted buyers across Africa.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Marketplace</h3>
            <ul className="space-y-2.5">
              <li><Link to="/listings" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Browse Cars</Link></li>
              <li><Link to="/sell" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Sell a Car</Link></li>
              <li><Link to="/dealer-signup" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Join as Dealer</Link></li>
              <li><Link to="/crypto" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Crypto Payments</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Community</h3>
            <ul className="space-y-2.5">
              <li><Link to="/community" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Discussions</Link></li>
              <li><Link to="/community/create" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Write a Post</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Support</h3>
            <ul className="space-y-2.5">
              <li><Link to="/help" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-1.5"><LifeBuoy size={14} /> Help Center</Link></li>
              <li><Link to="/help" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">Report a Problem</Link></li>
              <li><a href="mailto:support@elixrauto.com" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm">support@elixrauto.com</a></li>
            </ul>
            <div className="flex space-x-3 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-xs">
          <p>&copy; {new Date().getFullYear()} ElixrAuto. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Built with trust &amp; precision · Peer-to-peer</p>
        </div>
      </div>
    </footer>
  );
}
