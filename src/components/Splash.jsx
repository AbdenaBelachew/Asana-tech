import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyRound, Unlock } from 'lucide-react';

export default function Splash({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Auto-hide splash after animation completes
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onComplete) onComplete();
    }, 3500); // Total animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#166804]/95 via-[#1a7a05]/95 to-[#124a06]/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Key and Lock Animation */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              {/* Lock Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Unlock size={80} className="text-white drop-shadow-lg" strokeWidth={1.5} />
                </motion.div>
              </motion.div>

              {/* Key Icon - Rotating and inserting */}
              {/* <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ x: -100, y: -100, rotate: -45, opacity: 0 }}
                animate={{ 
                  x: 0, 
                  y: 0, 
                  rotate: 0, 
                  opacity: 1 
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 0, 90, 90],
                    scale: [1, 1, 0.9, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 1.4,
                    times: [0, 0.3, 0.7, 1],
                    ease: 'easeInOut'
                  }}
                >
                  <KeyRound size={60} className="text-emerald-200 drop-shadow-lg" strokeWidth={2} />
                </motion.div>
              </motion.div> */}

              {/* Unlock glow effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2] }}
                transition={{ 
                  duration: 1,
                  delay: 2.4,
                  ease: 'easeOut'
                }}
              >
                <div className="w-32 h-32 bg-white rounded-full blur-3xl opacity-50" />
              </motion.div>
            </div>

            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="/images/whitelogo.png" 
                alt="Furtuu Systems" 
                className="w-20 h-32 md:w-40 sm:h-50 object-contain filter drop-shadow-lg"
              />
            </motion.div>

            {/* Company name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-2">
                FURTUU SYSTEMS
              </h1>
              <motion.p 
                className="text-sm sm:text-base text-emerald-100 font-semibold tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Building Smart Solutions for a Digital Future
              </motion.p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

            {/* Unlocking text */}
            <motion.p
              className="text-xs sm:text-sm text-emerald-100/80 font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ 
                duration: 2,
                delay: 2,
                times: [0, 0.3, 0.7, 1]
              }}
            >
              Unlocking possibilities...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
