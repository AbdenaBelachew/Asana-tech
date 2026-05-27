import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="page-shell page-noise">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 grid-bg-overlay-light opacity-40" />
        <div className="orb-1 absolute top-[-8%] right-[-4%] w-[520px] h-[520px] rounded-full bg-[#166804]/12 blur-[110px]" />
        <div className="orb-2 absolute bottom-[10%] left-[-8%] w-[480px] h-[480px] rounded-full bg-[#2180cc]/10 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <Footer />

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

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScrollTo('contact')}
          className="btn-primary h-12 px-5 rounded-full shadow-lg cursor-pointer"
          aria-label="Contact us"
        >
          <MessageSquare size={18} />
        </motion.button>
      </div>
    </div>
  );
}
