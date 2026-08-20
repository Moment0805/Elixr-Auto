import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ListingsPage from './components/pages/ListingsPage';
import ListingDetailPage from './components/pages/ListingDetailPage';
import DealerSignupPage from './components/pages/DealerSignupPage';
import HelpPage from './components/pages/HelpPage';
import CommunityPage from './components/pages/CommunityPage';
import CryptoPage from './components/pages/CryptoPage';
import LoginPage from './components/pages/LoginPage';
import MessagesPage from './components/pages/MessagesPage';
import ProfilePage from './components/pages/ProfilePage';
import SellCarPage from './components/pages/SellCarPage';
import CreatePostPage from './components/pages/CreatePostPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/listings" element={<PageTransition><ListingsPage /></PageTransition>} />
        <Route path="/listings/:id" element={<PageTransition><ListingDetailPage /></PageTransition>} />
        <Route path="/dealer-signup" element={<PageTransition><DealerSignupPage /></PageTransition>} />
        <Route path="/help" element={<PageTransition><HelpPage /></PageTransition>} />
        <Route path="/community" element={<PageTransition><CommunityPage /></PageTransition>} />
        <Route path="/community/create" element={<PageTransition><CreatePostPage /></PageTransition>} />
        <Route path="/crypto" element={<PageTransition><CryptoPage /></PageTransition>} />
        <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
        <Route path="/messages" element={<PageTransition><MessagesPage /></PageTransition>} />
        <Route path="/profile/:id" element={<PageTransition><ProfilePage /></PageTransition>} />
        <Route path="/sell" element={<PageTransition><SellCarPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#0A0A0B] text-white flex flex-col antialiased">
          <Header />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
