import { Link } from 'react-router-dom';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white border-t border-[#D4AF37]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-[#0C0C0C]">EA</span>
              </div>
              <div>
                <div className="text-[#D4AF37] tracking-wide">ELIXIR AUTOX</div>
              </div>
            </div>
            <p className="text-[#C0C0C0] text-sm">
              The Gold Standard in Deals. Connecting verified car dealers with trusted buyers across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  View Cars
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* For Dealers */}
          <div>
            <h3 className="text-[#D4AF37] mb-4">For Dealers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dealer-signup" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  Join as Dealer
                </Link>
              </li>
              <li>
                <Link to="/crypto" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  Crypto Payments
                </Link>
              </li>
              <li>
                <a href="#" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  Pricing (₦15K/month)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4AF37] mb-4">Contact Us</h3>
            <ul className="space-y-2 mb-4">
              <li className="text-[#C0C0C0]">
                <a href="https://wa.me/2348138964310" className="hover:text-[#D4AF37] transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://wa.me/2348138964310" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37] mt-8 pt-8 text-center text-[#C0C0C0] text-sm">
          <p>&copy; {new Date().getFullYear()} ElixirAutoX. All rights reserved. | Built with trust and precision.</p>
        </div>
      </div>
    </footer>
  );
}
