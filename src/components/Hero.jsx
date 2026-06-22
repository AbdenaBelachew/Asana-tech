import React from 'react';
import { ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/asanahero.png';

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
    <section id="home" className="hero-section relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="hero-bg-image pointer-events-none select-none"
      />
      <div className="hero-bg-overlay pointer-events-none" aria-hidden="true" />

      <div className="section-inner relative z-10 py-12 sm:py-16 w-full">
        <motion.div
          className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 glass-card hero-badge-flat !rounded-full !py-1.5 !px-3.5 color-brand sm:!px-3.5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#166804] animate-pulse" />
            Addis Ababa · Ethiopia
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-5 font-display">
            Software Built to{' '}
            <span className="gradient-text text-glow-brand">Scale</span>{' '}
            Your Business
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            Asana Systems crafts fast websites, mobile apps, and custom ERP software — engineered for Ethiopian businesses ready to grow.
          </p>

          <div className="grid grid-cols-2 gap-3 w-full sm:w-auto mb-8 sm:mb-10">
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="btn-primary !px-4 !py-3 !text-xs sm:!text-sm sm:!px-8 sm:!py-4 col-span-2 sm:col-span-1 pulse-glow"
            >
              Start a Project <ArrowRight size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="btn-secondary !px-4 !py-3 !text-xs sm:!text-sm sm:!px-8 sm:!py-4 col-span-2 sm:col-span-1"
            >
              View Our Work
            </button>
          </div>

          <div className="hero-stats-row grid grid-cols-3 gap-1.5 sm:gap-3 w-full">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                className="stat-tile-compact"
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.45 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="icon-box w-6 h-6 sm:w-9 sm:h-9">
                  <Icon size={14} className="sm:w-4 sm:h-4" />
                </div>
                <div className="text-sm sm:text-xl font-extrabold text-slate-900 font-display leading-none">{value}</div>
                <div className="text-[7px] sm:text-[10px] font-semibold text-slate-500 leading-tight px-0.5">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
