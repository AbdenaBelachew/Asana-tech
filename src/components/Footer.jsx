import React from 'react';
import { Phone, ChevronRight, MapPin } from 'lucide-react';

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

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Portfolio', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const PROJECTS = [
  'Dr. Moti Ortho',
  'Kan Seenaa Closet',
  'Womove Active',
  'Zinash Olani Events',
  'Yeroon Travel',
  'Lidya Lifestyle',
];

const SOCIALS = [
  { id: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
  { id: 'twitter', href: '#', label: 'Twitter', Icon: TwitterIcon },
  { id: 'github', href: '#', label: 'GitHub', Icon: GithubIcon },
];

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
    <footer className="footer-brand rounded-t-[2rem] sm:rounded-t-[2.5rem] overflow-hidden mt-6 sm:mt-8">
      <div className="footer-brand-inner max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14 md:py-16">
        <div className="footer-layout">
          <div className="footer-col-brand order-1">
            <button
              type="button"
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="footer-logo-box w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/images/logo.png" alt="furtuu Systems" className="h-8 w-auto object-contain" />
              </div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wide text-white text-left">
                furtuu<span className="text-emerald-200 font-bold"> SYSTEMS</span>
              </span>
            </button>

            <p className="text-sm text-emerald-100/80 max-w-sm font-medium leading-relaxed">
              Building smart solutions for a digital future. Empowering businesses through innovative technology.
            </p>

            {/* <a href="tel:+251966780537" className="footer-call-cta md:hidden">
              <Phone size={16} />
              +251 966 780 537
            </a> */}

            <a
              href="tel:+251966780537"
              className="footer-link hidden md:inline-flex items-center gap-2 text-sm font-bold hover:text-white"
            >
              <div className="footer-phone-icon w-8 h-8 rounded-full flex items-center justify-center">
                <Phone size={14} />
              </div>
              +251 966 780 537
            </a>

            <p className="hidden md:flex items-center gap-2 text-xs text-emerald-100/55 font-medium">
              <MapPin size={13} className="shrink-0" />
              Bole, Addis Ababa
            </p>
          </div>

          <div className="footer-col-nav order-2 md:order-none">
            <h3 className="footer-section-label md:hidden">Explore</h3>
            <div className="footer-nav-chips">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleScrollTo(id)}
                  className="footer-nav-chip"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-col-projects order-3 md:order-none">
            <h3 className="footer-section-label">Our Projects</h3>
            <div className="footer-project-list">
              {PROJECTS.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleScrollTo('projects')}
                  className="footer-project-item"
                >
                  <span>{name}</span>
                  <ChevronRight size={16} className="footer-project-arrow shrink-0 opacity-60" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          <div className="footer-social-wrap order-4 md:order-none">
            {/* <div className="footer-social-panel">
              <h3 className="footer-social-heading md:sr-only">Follow Us</h3>
              <div className="footer-social-grid">
                {SOCIALS.map(({ id, href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`footer-social-tile footer-social-tile--${id}`}
                    aria-label={label}
                  >
                    <span className="footer-social-tile-icon">
                      <Icon className="w-[18px] h-[18px] md:w-3.5 md:h-3.5" />
                    </span>
                    <span className="footer-social-tile-label">{label}</span>
                  </a>
                ))}
              </div>
              <div className="footer-legal-row md:hidden">
                <a href="#privacy" className="footer-legal-link">Privacy</a>
                <span className="text-white/20" aria-hidden="true">·</span>
                <a href="#terms" className="footer-legal-link">Terms</a>
              </div>
            </div> */}

            <div className="footer-social-desktop hidden md:flex">
              {SOCIALS.map(({ id, href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`footer-social-icon footer-social-icon--${id}`}
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}

            </div>
          </div>
        </div>

        <div className="footer-divider mt-10 md:mt-12 pt-6 text-center">
          <p className="text-xs font-semibold text-emerald-100/70 tracking-wide">
            &copy; {new Date().getFullYear()} furtuu Systems. All rights reserved.
          </p>
          <p className="md:hidden mt-2 flex items-center justify-center gap-1.5 text-[11px] font-medium text-emerald-100/50">
            <MapPin size={11} />
            Bole, Addis Ababa · Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
