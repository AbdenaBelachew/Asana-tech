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

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'px-0 pt-0' : 'px-4 sm:px-6 pt-4'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl flex items-center justify-between h-[4.25rem] px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? 'nav-bar-solid rounded-none border-x-0' : 'nav-bar-float rounded-2xl'
          }`}
        >
          {/* Brand */}
          <button type="button" onClick={() => goTo('home')} className="nav-brand group">
           <img
              src="/images/asana.png"
              alt="Asana Systems"
              className="w-24 h-28 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            {/* <span className="font-display font-extrabold uppercase leading-tight text-left">
              <span className="md:hidden block text-[1.05rem] tracking-wide text-slate-900">ASANA</span>
              <span className="hidden md:block">
                <span className="block text-[1.05rem] tracking-wide text-slate-900">ASANA</span>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#166804]">SYSTEMS</span>
              </span>
            </span> */}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center  gap-1 nav-links-pill">
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

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden nav-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
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
              className="fixed top-[5.5rem] left-4 right-4 z-50 md:hidden nav-mobile-panel rounded-2xl overflow-hidden"
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
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
