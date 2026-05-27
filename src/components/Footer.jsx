import React from 'react';
import { Phone } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-brand rounded-t-[2rem] overflow-hidden mt-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <button
              type="button"
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-[#166804]/15 overflow-hidden shadow-sm">
                <img src="/images/green.png" alt="Asana Systems" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-wide text-slate-900">
                ASANA-SYSTEMS<span className="text-[#166804] font-bold"> LTD</span>
              </span>
            </button>

            <p className="text-sm text-slate-700 max-w-xs font-medium leading-relaxed">
              Empowering businesses through cutting-edge technology and innovative digital solutions.
            </p>

            <a
              href="tel:+251966780537"
              className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#166804] transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#166804]/15 shadow-sm text-[#166804]">
                <Phone size={14} />
              </div>
              +251 966 780 537
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Our Projects</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              {['Forex Exchange System', 'Shop Inventory ERP', 'Pharmacy Management'].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleScrollTo('projects')}
                  className="text-slate-700 hover:text-[#166804] transition-colors duration-300 cursor-pointer text-left"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm font-semibold text-slate-800">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'About', id: 'about' },
                { label: 'Portfolio', id: 'projects' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleScrollTo(id)}
                  className="text-slate-700 hover:text-[#166804] transition-colors duration-300 cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 bg-white/80 border border-[#166804]/12 px-4 py-2 rounded-full shadow-sm">
              {[
                { href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
                { href: '#', label: 'Twitter', Icon: TwitterIcon },
                { href: '#', label: 'GitHub', Icon: GithubIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-[#e8f5e6] hover:bg-[#166804] text-slate-800 hover:text-white border border-[#166804]/15 transition-all duration-300 hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
              <span className="text-slate-300 text-xs hidden sm:inline">|</span>
              <a href="#privacy" className="text-[11px] font-bold text-slate-600 hover:text-[#166804] transition-colors">Privacy</a>
              <a href="#terms" className="text-[11px] font-bold text-slate-600 hover:text-[#166804] transition-colors">Terms</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#166804]/12 text-center">
          <p className="text-xs font-semibold text-slate-800 tracking-wide">
            &copy; {new Date().getFullYear()} Asana Systems. Crafted with precision in Addis Ababa.
          </p>
        </div>
      </div>
    </footer>
  );
}
