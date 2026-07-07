import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './components/NotFound';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import useIsDesktop from './hooks/useIsDesktop';

function ScrollButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full flex items-center justify-center glass-card text-[#166804] cursor-pointer hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn-primary h-8 px-3 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Contact us"
        >
          <MessageSquare size={12} />
        </Link>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <MotionConfig reducedMotion={isDesktop ? 'always' : 'user'}>
      <BrowserRouter>
        <>
        {/* Splash Screen */}
        {!splashComplete && <Splash onComplete={() => setSplashComplete(true)} />}

        {/* Main Content */}
        <div className="page-shell">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />

          <ScrollButtons />
        </div>
      </>
    </BrowserRouter>
    </MotionConfig>
  );
}