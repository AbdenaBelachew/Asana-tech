import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const stats = [
  { icon: TrendingUp, value: '10+', label: 'Projects Delivered' },
  { icon: Clock, value: '4hr', label: 'Response Time' },
  { icon: Shield, value: '99.9%', label: 'Uptime' },
];

const bars = [68, 45, 82, 55, 91, 73, 88, 62];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-inner py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1"
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

        <motion.div
          className="lg:col-span-5 flex justify-center relative order-1 lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-[#166804]/15 via-transparent to-[#2180cc]/15 rounded-[2rem] blur-2xl pointer-events-none" />

          <div className="w-full max-w-md glass-card keep-glass-mobile overflow-hidden hover:-translate-y-1 shadow-2xl shadow-[#166804]/10">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-white/70 border-b border-[#166804]/8">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/90" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90" />
              </div>
              <span className="text-[9px] sm:text-xs text-slate-500 font-mono font-semibold bg-white/80 px-2 sm:px-3 py-1 rounded-md border border-slate-100 truncate max-w-[55%]">
                dashboard.asanasystems.com
              </span>
            </div>

            <div className="relative bg-slate-950 p-4 sm:p-6 aspect-[4/3] flex flex-col gap-3 sm:gap-4">
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <div>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-bold">Revenue Overview</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white font-display">ETB 2.4M</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] sm:text-xs font-bold">
                  <Sparkles size={11} />
                  +24.8%
                </div>
              </div>

              <div className="grid grid-cols-8 gap-1 sm:gap-1.5 flex-1 min-h-[72px] sm:min-h-[80px] items-end">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="rounded-t-md hero-mock-bar self-end"
                    style={{ height: `${h}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.6 + i * 0.06, duration: 0.6, ease: 'easeOut' }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {[
                  { label: 'Orders', val: '1,284' },
                  { label: 'Clients', val: '342' },
                  { label: 'Uptime', val: '99.9%' },
                ].map(({ label, val }) => (
                  <div key={label} className="hero-mock-stat rounded-lg px-1.5 sm:px-2 py-1.5 sm:py-2 text-center">
                    <p className="text-[8px] sm:text-[9px] text-slate-500 uppercase font-bold">{label}</p>
                    <p className="text-[10px] sm:text-xs font-extrabold text-white font-mono">{val}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                <div className="shimmer-line h-1.5 sm:h-2 rounded-full w-full" />
                <div className="shimmer-line h-1.5 sm:h-2 rounded-full w-4/5" />
              </div>
            </div>
          </div>

          <motion.div
            className="hero-status-card glass-card !rounded-2xl px-3 py-2 sm:px-4 sm:py-3 grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-3 shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e8f5e6] flex items-center justify-center">
              <Shield size={14} className="text-[#166804]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Status</p>
              <p className="text-xs sm:text-sm font-extrabold text-slate-900">All Systems Live</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
