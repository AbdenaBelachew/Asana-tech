import React from 'react';
import { ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVisual from '../assets/yubahero.png';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const stats = [
  { icon: TrendingUp, value: '10+', label: 'Projects Delivered' },
  { icon: Clock, value: '4hr', label: 'Response Time' },
  { icon: Shield, value: '99.9%', label: 'Uptime' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden min-h-[100dvh] bg-white">
      <div className="hero-bg pointer-events-none" aria-hidden="true" />
      <div className="hero-bg-overlay pointer-events-none hidden lg:block" aria-hidden="true" />

      <div className="section-inner relative z-10 w-full h-full">
        <div className="hero-layout flex flex-col justify-center min-h-[calc(100dvh-4.5rem)] py-8 sm:py-12 lg:py-14">
          {/* Mobile only — logo above content (<768px) */}
          <motion.div
            className="hero-logo-mobile mb-4 sm:mb-8 flex justify-center md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/images/logo.png" alt="Yuba Systems" className="w-28 h-28 sm:w-28 sm:h-28 object-contain scale-150 sm:scale-100" />
          </motion.div>

          {/* Text content — logo is in the PC background image on the right */}
          <motion.div
            className="hero-content flex flex-col items-center md:items-start text-center md:text-left max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-5 glass-card hero-badge-flat"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#166804] animate-pulse" />
              Addis Ababa · Ethiopia
            </motion.span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-slate-900 leading-[1.2] sm:leading-[1.08] tracking-tight mb-3 sm:mb-5 font-display px-4 sm:px-0">
              <span className="gradient-text text-glow-brand">Wisdom-Driven</span>{' '}
              <br className="hidden sm:block" />
              Innovation
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-8 max-w-xl px-4 sm:px-0">
              Combining Ethiopia's heritage with cutting-edge technology to deliver secure, scalable software solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-md sm:max-w-none px-4 sm:px-0 mb-4 sm:mb-0">
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-primary !px-5 !py-2.5 !text-xs sm:!px-8 sm:!py-4 sm:!text-sm w-full pulse-glow"
              >
                Start a Project <ArrowRight size={15} className="sm:w-4 sm:h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-secondary !px-5 !py-2.5 !text-xs sm:!px-8 sm:!py-4 sm:!text-sm w-full"
              >
                View Our Work
              </button>
            </div>

            {/* Stats - Only visible on tablet and larger screens */}
            <div className="hidden sm:grid hero-stats-row grid-cols-3 gap-3 w-full max-w-xl mt-8">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  className="stat-tile-compact"
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="icon-box w-9 h-9 mb-2">
                    <Icon size={16} className="w-4 h-4" />
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 font-display leading-none">{value}</div>
                  <div className="text-[10px] font-semibold text-slate-500 leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tablet — visual below content (no duplicate on PC) */}
          <motion.div
            className="hero-logo-tablet-wrap hidden md:flex lg:hidden justify-center mt-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={heroVisual} alt="" aria-hidden="true" className="max-w-md w-full h-auto object-contain pointer-events-none select-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
