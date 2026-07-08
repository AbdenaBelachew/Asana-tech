import React from 'react';
import { ArrowRight, TrendingUp, Clock, Shield, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';
import { DrawLogo } from './Splash';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const stats = [
  { icon: TrendingUp, value: '10+', label: 'Projects Delivered' },
  { icon: Clock, value: '4hr', label: 'Response Time' },
  { icon: Shield, value: '99.9%', label: 'Uptime' },
];

// Reusable AnimatedLogo component for hero animation (derived from Splash)
function AnimatedLogo({ size = 112, className = '' }) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ rotateY: -180, scale: 0, opacity: 0 }}
      animate={{ rotateY: 0, scale: 1, opacity: 1 }}
      transition={{ 
        duration: 1.6, 
        type: "spring", 
        damping: 15,
        stiffness: 120,
        delay: 0.2
      }}
    >
      {/* Expanding Energy Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={`ring-${ring}`}
          className="absolute inset-0 rounded-full border-2 border-[#166804]/30 mix-blend-multiply"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 2.5], opacity: [0.6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.4 + (ring * 0.4),
            ease: "easeOut"
          }}
        />
      ))}

      {/* Particle Burst */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const distance = (size / 2) + Math.random() * (size / 2);
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-[#1a7a05] rounded-full"
            initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
            animate={{ 
              x: `calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px)`, 
              y: `calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)`,
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 1.5,
              delay: 0.2 + Math.random() * 0.2,
              ease: "easeOut"
            }}
          />
        );
      })}

      <motion.div 
        className="w-full h-full relative z-10"
        animate={{ 
          y: [-8, 8],
          filter: [
            'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))',
            'drop-shadow(0px 16px 24px rgba(22, 104, 4, 0.4))'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.8 // Starts floating after the entrance
        }}
      >
        <DrawLogo 
          className="w-full h-full" 
          idPrefix="hero" 
          primaryColor="#166804" 
          secondaryColor="#379707" 
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden min-h-[100dvh] pt-2 md:pt-[2rem] bg-white flex items-center">
      {/* Animated background patterns */}
      <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(22,104,4,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(33,128,204,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(22,104,4,0.02)_25%,rgba(22,104,4,0.02)_26%,transparent_27%,transparent_74%,rgba(22,104,4,0.02)_75%,rgba(22,104,4,0.02)_76%,transparent_77%,transparent),linear-gradient(-45deg,transparent_24%,rgba(22,104,4,0.02)_25%,rgba(22,104,4,0.02)_26%,transparent_27%,transparent_74%,rgba(22,104,4,0.02)_75%,rgba(22,104,4,0.02)_76%,transparent_77%,transparent)]" style={{ backgroundSize: '60px 60px' }} />
      </div>
      <div className="hero-bg-overlay pointer-events-none hidden md:block absolute inset-0" aria-hidden="true" />

      <div className="section-inner relative z-10 w-full">
        <div className="hero-layout flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 min-h-[calc(100dvh-3rem)] py-4 lg:py-8">
          
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center order-first lg:order-last mb-4 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Responsive sizing for the AnimatedLogo */}
            <div className="md:hidden">
              <AnimatedLogo size={120} />
            </div>
            <div className="hidden md:block lg:hidden">
              <AnimatedLogo size={200} />
            </div>
            <div className="hidden lg:block">
              <AnimatedLogo size={320} />
            </div>
          </motion.div>

          <motion.div
            className="hero-content w-full lg:w-1/2 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.3 }
              }
            }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 sm:mb-5 glass-card hero-badge-flat"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12 } }
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#166804] animate-pulse" />
              Addis Ababa · Ethiopia
            </motion.span>

            <motion.h1
              className="font-extrabold text-slate-900 tracking-tight font-display leading-tight mb-3 sm:mb-5"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 14, stiffness: 100 } }
              }}
            >
              <span className="gradient-text text-glow-brand text-4xl sm:text-5xl md:text-6xl block">
                Smart Solutions
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl block mt-1 sm:mt-2">
                for a Digital Future
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
              }}
            >
              Building secure, scalable, and intelligent software that transforms businesses across Africa and beyond.
            </motion.p>

            <motion.div
              className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-primary !px-4 sm:!px-6 !py-3 sm:!py-3.5 !text-xs sm:!text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 tap-highlight-transparent flex-1 sm:flex-none shadow-lg hover:shadow-[#166804]/40"
              >
                Start a Project
              </button>
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-secondary !px-4 sm:!px-6 !py-3 sm:!py-3.5 !text-xs sm:!text-sm font-semibold flex items-center justify-center tap-highlight-transparent flex-1 sm:flex-none whitespace-nowrap hover:bg-[#166804]/5"
              >
                View Our Work
              </button>
            </motion.div>

            {/* Stats - Visible on small screens and up */}
            <motion.div
              className="hero-stats-row grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg mx-auto lg:mx-0 mt-8 sm:mt-12"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
              }}
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  className="stat-tile-compact p-4 bg-white/50 backdrop-blur-md rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12 } }
                  }}
                >
                  <div className="icon-box w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 bg-slate-50 rounded-lg flex items-center justify-center text-[#166804]">
                    <Icon size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display leading-none mb-1">{value}</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 leading-tight uppercase tracking-wider">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}