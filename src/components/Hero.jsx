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
          loop={true}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden min-h-[100dvh] pt-2 md:pt-[2rem] flex items-center">
      {/* Simple clean background overlay */}
      <div className="hero-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-bg-overlay pointer-events-none hidden md:block absolute inset-0" aria-hidden="true" />

      <div className="section-inner relative z-10 w-full">
        <div className="hero-layout flex flex-col items-start justify-center gap-3 sm:gap-6 lg:gap-8 min-h-[calc(100dvh-3rem)] py-6 sm:py-10 lg:py-16">

          {/* Mobile only — animated logo, centered */}
          <motion.div
            className="flex justify-center w-full mb-1 md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatedLogo size={100} />
          </motion.div>

          <motion.div
            className="hero-content w-full max-w-4xl"
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide uppercase mb-3 bg-slate-100 text-slate-600 border border-slate-200 w-fit"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
              }}
            >
              Addis Ababa · Ethiopia
            </motion.span>

            <motion.h1
              className="font-extrabold text-slate-900 tracking-tight font-display leading-[1.1] mb-3 sm:mb-5"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 14, stiffness: 100 } }
              }}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl block">
                Smart Solutions
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl block mt-1 text-slate-700">
                for a Digital Future
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-500 leading-relaxed mb-5 sm:mb-7 max-w-md text-sm sm:text-base"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
              }}
            >
              Building secure, scalable, and intelligent software that transforms businesses across Africa and beyond.
            </motion.p>

            <motion.div
              className="flex flex-row gap-3 items-center w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-primary !px-5 !py-2.5 !text-sm font-semibold flex-1 sm:flex-none shadow-sm hover:shadow-md transition-shadow"
              >
                Start a Project
              </button>
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-secondary !px-5 !py-2.5 !text-sm font-semibold flex-1 sm:flex-none hover:bg-slate-50 transition-colors"
              >
                View Our Work
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md mt-6 sm:mt-10"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
              }}
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  className="flex flex-col items-start gap-1 p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 14 } }
                  }}
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-[#166804] mb-0.5">
                    <Icon size={15} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 leading-none">{value}</div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider leading-none">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}