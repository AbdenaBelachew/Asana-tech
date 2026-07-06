import React from 'react';
import { ArrowRight, TrendingUp, Clock, Shield, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVisual from '../assets/furtuhero.png';

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
        <div className="hero-layout flex flex-col justify-center min-h-[calc(100dvh-4.5rem)]  sm:py-12 lg:py-14">
          {/* Mobile only — animated key above content (<768px) */}
          <motion.div
            className="hero-logo-mobile mb-2 sm:mb-8 flex justify-center md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Floating animated key - Mobile only */}
            <motion.div
              className="relative"
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
                    width: `${120 + i * 20}px`,
                    height: `${120 + i * 20}px`,
                    left: '50%',
                    top: '50%',
                    marginLeft: `-${(120 + i * 20) / 2}px`,
                    marginTop: `-${(120 + i * 20) / 2}px`,
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 - i * 4,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
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
                      ease: "easeInOut",
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
                  ease: "easeInOut"
                }}
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
                    ease: "easeInOut"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#166804] via-[#1a7a05] to-[#0d5003] shadow-2xl flex items-center justify-center relative overflow-hidden border-2 border-[#166804]/20">
                    {/* Scanning line effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent h-8"
                      animate={{
                        y: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1
                      }}
                    />
                    
                    {/* Hexagon pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <polygon points="10,2 17,6 17,14 10,18 3,14 3,6" fill="none" stroke="white" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                      </svg>
                    </div>

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2
                      }}
                    />
                    
                    {/* Unlock pulse rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-emerald-400"
                      animate={{
                        scale: [1, 1.4],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-emerald-300"
                      animate={{
                        scale: [1, 1.4],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.4
                      }}
                    />
                    
                    {/* Key icon with unlock animation */}
                    <motion.div
                      animate={{
                        rotate: [0, -90, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.3, 1],
                        repeatDelay: 2
                      }}
                    >
                      <KeyRound size={64} className="text-white relative z-10 drop-shadow-lg" strokeWidth={2} />
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
                        <div className={`absolute border-emerald-400 ${
                          i === 0 ? 'border-t-2 border-l-2 top-0 left-0 w-full h-full' :
                          i === 1 ? 'border-t-2 border-r-2 top-0 right-0 w-full h-full' :
                          i === 2 ? 'border-b-2 border-l-2 bottom-0 left-0 w-full h-full' :
                          'border-b-2 border-r-2 bottom-0 right-0 w-full h-full'
                        }`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
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
              <span className="gradient-text text-glow-brand">Smart Solutions</span>{' '}
              <br className="hidden sm:block" />
              for a Digital Future
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-8 max-w-xl px-4 sm:px-0">
              Building secure, scalable, and intelligent software that transforms businesses across Africa and beyond.
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
