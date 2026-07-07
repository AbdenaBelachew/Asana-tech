import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'contact', label: 'Contact', path: '/contact' },
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
  const location = useLocation();

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 24;
      setScrolled(isScrolled);
    };

    // Initial check
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Update active link based on current path
    const currentLink = links.find(link => link.path === location.pathname);
    if (currentLink) {
      setActive(currentLink.id);
    }

    // Only run intersection observer on home page
    if (location.pathname !== '/') return;

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

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (pageHeight - scrollPosition < 200) {
        setActive('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const goTo = (link) => {
    setOpen(false);
    if (link.path !== '/') {
      // Navigate to different page
      window.location.href = link.path;
    } else {
      // Scroll within home page
      scrollTo('home');
    }
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 0.5, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2
      }
    })
  };

  return (
    <>
      <motion.header
        className="nav-stuck fixed top-0 left-0 right-0 z-50"
        animate={{
          boxShadow: scrolled
            ? '0 4px 24px -6px rgba(22, 104, 4, 0.16)'
            : '0 4px 24px -6px rgba(22, 104, 4, 0.12)',
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.98)'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="nav-stuck-inner mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-8"
          animate={{ height: scrolled ? '4rem' : '4.5rem' }}
          transition={{ duration: 0.3, ease: [0.22, 0.5, 0.36, 1] }}
        >
          <Link to="/" className="nav-brand group" aria-label="Go to homepage">
            <img
              src="/images/logo.png"
              alt="furtuu Systems"
              className="h-14 sm:h-16 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <div className="flex items-center gap-1 lg:gap-2 nav-links-pill">
              {links.map((l) => (
                <Link
                  key={l.id}
                  to={l.path}
                  className={`nav-link-pill text-xs lg:text-sm ${active === l.id ? 'nav-link-pill-active' : ''}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="btn-primary !px-4 lg:!px-5 !py-2 !lg:py-2.5 !text-xs lg:!text-sm !rounded-full ml-1 lg:ml-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden nav-menu-toggle flex items-center justify-center p-2 rounded-lg tap-highlight-transparent"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-[4.5rem] left-4 right-4 z-50 md:hidden"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60">
              <div className="flex flex-col p-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.id}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      to={l.path}
                      className={`nav-mobile-link mobile-nav-link--responsive ${
                        active === l.id ? 'nav-mobile-link-active' : ''
                      }`}
                      onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={links.length}
                  variants={linkVariants}
                  className="pt-2 pb-1 px-1"
                >
                  <Link
                    to="/contact"
                    className="btn-primary !w-full !rounded-xl !py-4 !text-sm font-semibold flex items-center justify-center gap-2"
                    onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}