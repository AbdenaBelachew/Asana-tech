import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

const QUICK_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  const countRef = useRef(null);
  const navigate = useNavigate();

  // Debug: log when component mounts
  useEffect(() => {
    console.log('[NotFound] Component mounted - React 404 page is active');
  }, []);

  /* Countdown auto-redirect */
  useEffect(() => {
    let seconds = 10;
    const tick = setInterval(() => {
      seconds -= 1;
      if (countRef.current) countRef.current.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(tick);
        navigate('/');
      }
    }, 1000);
    return () => clearInterval(tick);
  }, [navigate]);

  return (
    <main className="nf-page" aria-label="404 Page not found">
      {/* Animated background orbs */}
      <div className="nf-orb nf-orb--1" aria-hidden="true" />
      <div className="nf-orb nf-orb--2" aria-hidden="true" />
      <div className="nf-orb nf-orb--3" aria-hidden="true" />

      {/* Grid lines decoration */}
      <div className="nf-grid" aria-hidden="true" />

      <div className="nf-content">
        {/* Brand chip */}
     
        {/* Big 404 */}
        <div className="nf-hero" aria-hidden="true">
          <span className="nf-digit">4</span>
          <span className="nf-zero">
            <span className="nf-zero__ring" />
            <span className="nf-zero__core" />
          </span>
          <span className="nf-digit">4</span>
        </div>

        {/* Message */}
        <h1 className="display nf-headline">Page Not Found</h1>
        <p className="nf-sub">
          This page went for a wander and didn't come back.<br />
          Let's get you moving in the right direction.
        </p>

        {/* Primary CTA */}
        <div className="nf-ctas">
          <Link to="/" className="btn btn-brand nf-cta-main">
            Back to Home
          </Link>
          <Link to="/services" className="btn btn-outline nf-cta-secondary">
            Explore Services
          </Link>
        </div>

        {/* Quick links */}
        <nav className="nf-quicklinks" aria-label="Quick navigation">
          <p className="tag nf-quicklinks__label">Or explore</p>
          <ul className="nf-quicklinks__list">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="nf-quicklink">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auto-redirect notice */}
        <p className="nf-redirect-notice" aria-live="polite">
          Redirecting to home in
          <span ref={countRef} className="nf-countdown">10</span>s
        </p>
      </div>
    </main>
  );
}