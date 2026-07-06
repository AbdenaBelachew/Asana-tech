import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const NAV_HEIGHT = 72;

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT, behavior: 'smooth' });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: [0, 0.1, 0.5] }
    );
    
    sections.forEach((s) => observer.observe(s));
    
    // Additional check for bottom of page (for contact section)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      
      // If we're within 200px of the bottom, activate contact
      if (pageHeight - scrollPosition < 200) {
        setActive('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <motion.header
        className="nav-stuck"
        animate={{
          boxShadow: scrolled
            ? '0 4px 24px -6px rgba(22, 104, 4, 0.16)'
            : '0 4px 24px -6px rgba(22, 104, 4, 0.12)',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="nav-stuck-inner mx-auto max-w-6xl flex items-center justify-between px-8 sm:px-14"
          animate={{ height: scrolled ? '4rem' : '4.5rem' }}
          transition={{ duration: 0.3, ease: [0.22, 0.5, 0.36, 1] }}
        >
          <button type="button" onClick={() => goTo('home')} className="nav-brand group">
            <img
              src="/images/logo.png"
              alt="Furtuu Systems"
              className="h-18 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-100 mt-2"
            />
            {/* <span className="hidden sm:block font-display font-extrabold uppercase leading-tight text-left">
              <span className="block text-sm tracking-wide text-slate-900">FURTUU</span>
              <span className="block text-[9px] font-bold tracking-[0.25em] text-[#166804]">SYSTEMS</span>
            </span> */}
          </button>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 nav-links-pill">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => goTo(l.id)}
                  className={`nav-link-pill ${active === l.id ? 'nav-link-pill-active' : ''}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo('contact')}
              className="btn-primary !px-5 !py-2.5 !text-xs !rounded-full ml-1"
            >
              Get Started
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden nav-menu-toggle flex"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[4.5rem] left-4 right-4 z-50 md:hidden nav-mobile-panel rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-2">
                {links.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => goTo(l.id)}
                    className={`nav-mobile-link ${active === l.id ? 'nav-mobile-link-active' : ''}`}
                  >
                    {l.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => goTo('contact')}
                  className="btn-primary !w-full !rounded-xl !py-3.5 !text-sm mt-2 mx-1"
                >
                  Get Started
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
