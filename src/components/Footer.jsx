import React from 'react';
import { Phone, ChevronRight, MapPin } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// const GithubIcon = (props) => (
//   <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//     <path d="M9 18c-4.51 2-5-2-7-2" />
//   </svg>
// );

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
  { id: 'whatsapp', href: 'https://wa.me/251966780537', label: 'WhatsApp', Icon: WhatsappIcon },
  { id: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
  { id: 'facebook', href: '#', label: 'Facebook', Icon: FacebookIcon },
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
              <div className="footer-logo-box w-16 h-16 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/images/logo.png" alt="furtuu Systems" className="h-18 w-auto object-contain" />
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
