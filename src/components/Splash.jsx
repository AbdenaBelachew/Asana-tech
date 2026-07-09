import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DrawLogo = ({ 
  className,
  idPrefix = "splash",
  primaryColor = "#ffffff",
  secondaryColor = "#a3f77b",
  loop = false
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke={`url(#gradient-${idPrefix})`}
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="hidden"
    animate="visible"
  >
    <defs>
      <linearGradient id={`gradient-${idPrefix}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={primaryColor} />
        <stop offset="100%" stopColor={secondaryColor} />
      </linearGradient>
      <filter id={`glow-${idPrefix}`}>
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Key Head */}
    <motion.circle
      cx="35" cy="65" r="18"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 1, 
          transition: { 
            duration: 1.5, 
            ease: "easeInOut",
            repeat: loop ? Infinity : 0,
            repeatDelay: loop ? 4 : 0 
          } 
        }
      }}
      filter={`url(#glow-${idPrefix})`}
    />
    {/* Key Inner Head */}
    <motion.circle
      cx="35" cy="65" r="6"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 1, 
          transition: { 
            duration: 1, 
            delay: 0.5, 
            ease: "easeInOut",
            repeat: loop ? Infinity : 0,
            repeatDelay: loop ? 4.5 : 0 
          } 
        }
      }}
    />
    
    {/* Key Shaft */}
    <motion.path
      d="M 47.7 52.3 L 80 20"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 1, 
          transition: { 
            duration: 1, 
            delay: 1.2, 
            ease: "easeInOut",
            repeat: loop ? Infinity : 0,
            repeatDelay: loop ? 4.2 : 0 
          } 
        }
      }}
      filter={`url(#glow-${idPrefix})`}
    />
    
    {/* Key Tooth 1 */}
    <motion.path
      d="M 70 30 L 80 40 L 86 34"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 1, 
          transition: { 
            duration: 0.8, 
            delay: 1.8, 
            ease: "easeInOut",
            repeat: loop ? Infinity : 0,
            repeatDelay: loop ? 4.6 : 0 
          } 
        }
      }}
      filter={`url(#glow-${idPrefix})`}
    />
    
    {/* Key Tooth 2 */}
    <motion.path
      d="M 56 44 L 64 52 L 70 46"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 1, 
          transition: { 
            duration: 0.6, 
            delay: 2.2, 
            ease: "easeInOut",
            repeat: loop ? Infinity : 0,
            repeatDelay: loop ? 4.8 : 0 
          } 
        }
      }}
      filter={`url(#glow-${idPrefix})`}
    />
    
    {/* Dynamic Data Nodes (Dots) */}
    <motion.circle cx="86" cy="34" r="3" fill={primaryColor} stroke="none" 
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.6, type: "spring", repeat: loop ? Infinity : 0, repeatDelay: loop ? 5.4 : 0 }} filter={`url(#glow-${idPrefix})`} />
    <motion.circle cx="70" cy="46" r="3" fill={primaryColor} stroke="none" 
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.8, type: "spring", repeat: loop ? Infinity : 0, repeatDelay: loop ? 5.2 : 0 }} filter={`url(#glow-${idPrefix})`} />
    <motion.circle cx="80" cy="20" r="3" fill={primaryColor} stroke="none" 
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2, type: "spring", repeat: loop ? Infinity : 0, repeatDelay: loop ? 5.8 : 0 }} filter={`url(#glow-${idPrefix})`} />
  </motion.svg>
);

export default function Splash({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Auto-hide splash after animation sequence completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#166804] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Deep Premium Brand Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#1a7a05] via-[#166804] to-[#0e4202]"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Subtle radial glow to center focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_60%)] pointer-events-none" />

          {/* Animation Container */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">



            {/* Revealed Brand Identity */}
            <motion.div
              className="flex flex-col items-center justify-center gap-6 sm:gap-8"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative"
                initial={{ rotateY: -180, scale: 0, opacity: 0 }}
                animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                transition={{
                  delay: 1.6,
                  duration: 1.6,
                  type: "spring",
                  damping: 15,
                  stiffness: 120
                }}
              >
                {/* Expanding Energy Rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={`ring-${ring}`}
                    className="absolute inset-0 rounded-full border-2 border-[#a3f77b]/40 mix-blend-overlay"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.5, 2.5], opacity: [0.8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1.8 + (ring * 0.4),
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Particle Burst */}
                {Array.from({ length: 16 }).map((_, i) => {
                  const angle = (i * 360) / 16;
                  const distance = 100 + Math.random() * 50;
                  return (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute left-1/2 top-1/2 w-2 h-2 bg-[#a3f77b] rounded-full mix-blend-screen"
                      initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
                      animate={{
                        x: `calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px)`,
                        y: `calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)`,
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 1.6 + Math.random() * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  );
                })}
                <motion.div
                  className="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 object-contain relative z-10"
                  animate={{ 
                    y: [-12, 12],
                    filter: [
                      'drop-shadow(0px 8px 16px rgba(0,0,0,0.4))',
                      'drop-shadow(0px 24px 32px rgba(66, 174, 18, 0.7))'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2.0 // Starts floating after the entrance
                  }}
                >
                  <DrawLogo className="w-full h-full" />
                </motion.div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 1, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display tracking-[0.2em] mb-3 drop-shadow-md"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #ffffff, #a3f77b, #ffffff)",
                    backgroundSize: "200% auto",
                    color: "transparent",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text"
                  }}
                >
                  FURTUU SYSTEMS
                </motion.h1>

              </motion.div>

              {/* Minimal Loading Progress Bar (White on White/20) */}
              <div className="w-32 sm:w-40 h-[2px] bg-white/20 rounded-full mt-4 overflow-hidden relative">
                {/* Base progress */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, delay: 1.6, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
