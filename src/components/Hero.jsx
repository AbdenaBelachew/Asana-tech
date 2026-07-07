import React from 'react';
import { ArrowRight, TrendingUp, Clock, Shield, KeyRound } from 'lucide-react';
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

// Reusable AnimatedKey component for hero animation
function AnimatedKey({ size = 112, className = '' }) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ rotate: -45, scale: 0, opacity: 0 }}
      animate={{
        rotate: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.34, 1.56, 0.64, 1]
      }}
    >
      {/* Orbiting tech circles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-[#166804]/30"
          style={{
            width: `${size + i * (size * 0.2)}px`,
            height: `${size + i * (size * 0.2)}px`,
            left: '50%',
            top: '50%',
            marginLeft: `-${(size + i * (size * 0.2)) / 2}px`,
            marginTop: `-${(size + i * (size * 0.2)) / 2}px`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 20 - i * 4,
              repeat: Infinity,
              ease: 'linear'
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3
            }
          }}
        >
          {/* Tech dots on orbit */}
          <motion.div
            className="absolute w-2 h-2 bg-[#166804] rounded-full top-0 left-1/2 -ml-1"
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
          />
        </motion.div>
      ))}

      {/* Container with floating motion */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Key with rotation and tilt */}
        <motion.div
          animate={{
            rotate: [-8, 8, -8],
            rotateY: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="rounded-full bg-gradient-to-br from-[#166804] via-[#1a7a05] to-[#0d5003] shadow-2xl flex items-center justify-center relative overflow-hidden border-2 border-[#166804]/20"
            style={{ width: size, height: size }}
          >
            {/* Scanning line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent h-8"
              animate={{ y: ['-100%', '200%'] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 1
              }}
            />

            {/* Hexagon pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`hexagons-${size}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <polygon points="10,2 17,6 17,14 10,18 3,14 3,6" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#hexagons-${size})`} />
              </svg>
            </div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 2
              }}
            />

            {/* Unlock pulse rings */}
            {[0, 0.4].map((delay) => (
              <motion.div
                key={delay}
                className="absolute inset-0 rounded-full border-2 border-emerald-400"
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay
                }}
              />
            ))}

            {/* Key icon with unlock animation */}
            <motion.div
              animate={{ rotate: [0, -90, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.3, 1],
                repeatDelay: 2
              }}
            >
              <KeyRound
                size={size * 0.55}
                className="text-white relative z-10 drop-shadow-lg"
                strokeWidth={2}
              />
            </motion.div>

            {/* Corner brackets - tech style */}
            {[
              'top-2 left-2',
              'top-2 right-2',
              'bottom-2 left-2',
              'bottom-2 right-2'
            ].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} w-4 h-4`}
                animate={{
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                <div
                  className={`absolute border-emerald-400 ${i === 0 ? 'border-t-2 border-l-2 top-0 left-0 w-full h-full' :
                    i === 1 ? 'border-t-2 border-r-2 top-0 right-0 w-full h-full' :
                      i === 2 ? 'border-b-2 border-l-2 bottom-0 left-0 w-full h-full' :
                        'border-b-2 border-r-2 bottom-0 right-0 w-full h-full'
                    }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden min-h-[100dvh] pt-4 md:pt-[5rem] bg-white flex items-center">
      {/* Animated background patterns */}
      <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(22,104,4,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(33,128,204,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(22,104,4,0.02)_25%,rgba(22,104,4,0.02)_26%,transparent_27%,transparent_74%,rgba(22,104,4,0.02)_75%,rgba(22,104,4,0.02)_76%,transparent_77%,transparent),linear-gradient(-45deg,transparent_24%,rgba(22,104,4,0.02)_25%,rgba(22,104,4,0.02)_26%,transparent_27%,transparent_74%,rgba(22,104,4,0.02)_75%,rgba(22,104,4,0.02)_76%,transparent_77%,transparent)]" style={{ backgroundSize: '60px 60px' }} />
      </div>
      <div className="hero-bg-overlay pointer-events-none hidden md:block absolute inset-0" aria-hidden="true" />

      <div className="section-inner relative z-10 w-full">
        <div className="hero-layout flex flex-col items-center justify-start md:justify-center gap-4 lg:gap-14 min-h-[calc(100dvh-5rem)] py-2 lg:py-20">
          {/* Mobile only — animated key */}
          <motion.div
            className="hero-logo-mobile flex justify-center md:hidden w-full mb-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatedKey size={90} />
          </motion.div>

          <motion.div
            className="hero-content w-full max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 sm:mb-5 glass-card hero-badge-flat"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#166804] animate-pulse" />
              Addis Ababa · Ethiopia
            </motion.span>

            <motion.h1
              className="font-extrabold text-slate-900 tracking-tight font-display leading-tight mb-3 sm:mb-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <span className="gradient-text text-glow-brand text-3xl sm:text-5xl md:text-6xl block">
                Smart Solutions
              </span>
              <span className="text-2xl sm:text-4xl md:text-5xl block mt-1 sm:mt-2">
                for a Digital Future
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Building secure, scalable, and intelligent software that transforms businesses across Africa and beyond.
            </motion.p>

            <motion.div
              className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-primary !px-4 sm:!px-6 !py-3 sm:!py-3.0 !text-xs sm:!text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 tap-highlight-transparent flex-1 sm:flex-none"
              >
                Start a Project

              </button>
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-secondary !px-4 sm:!px-6 !py-3 sm:!py-3.5 !text-xs sm:!text-sm font-semibold flex items-center justify-center tap-highlight-transparent flex-1 sm:flex-none whitespace-nowrap"
              >
                View Our Work
              </button>
            </motion.div>

            {/* Stats - Visible on small screens and up */}
            <motion.div
              className="hero-stats-row grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg mx-auto lg:mx-0 mt-6 sm:mt-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  className="stat-tile-compact"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
                >
                  <div className="icon-box w-8 h-8 sm:w-9 sm:h-9 mb-2">
                    <Icon size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-display leading-none">{value}</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 leading-tight">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}