import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Splash({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Auto-hide splash after animation sequence completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3800); 

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
            
            {/* The Lock & Key Sequence */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }} // Fades out as the logo appears
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                {/* Lock Outline - Thin & Minimal (White/30) */}
                <motion.svg viewBox="0 0 48 48" className="absolute w-full h-full text-white/30">
                  <motion.path
                    d="M 24 4 A 20 20 0 0 0 24 44"
                    stroke="currentColor" strokeWidth="1.5" fill="none"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], x: [0, 0, 0, -40] }}
                    transition={{ duration: 2.2, times: [0, 0.2, 0.6, 0.8], ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 24 4 A 20 20 0 0 1 24 44"
                    stroke="currentColor" strokeWidth="1.5" fill="none"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], x: [0, 0, 0, 40] }}
                    transition={{ duration: 2.2, times: [0, 0.2, 0.6, 0.8], ease: "easeInOut" }}
                  />
                </motion.svg>

                {/* Key Icon (Solid White) */}
                <motion.div
                  className="relative w-full h-full text-white"
                  initial={{ opacity: 0, x: -40, rotate: 0 }}
                  animate={{ opacity: [0, 1, 1, 1], x: [-40, 0, 0, 0], rotate: [0, 0, 45, 45] }}
                  transition={{ duration: 2.2, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
                  style={{ originX: "31.25%", originY: "64.58%" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                    <circle cx="7.5" cy="15.5" r="5.5"/>
                    <path d="m21 2-9.6 9.6"/>
                    <path d="m15.5 7.5 3 3L22 7l-3-3"/>
                  </svg>
                  
                  {/* Glow Pulse on Turn (White Flash) */}
                  <motion.div
                    className="absolute w-12 h-12 bg-white rounded-full blur-xl mix-blend-overlay"
                    style={{ top: '0%', right: '0%', transform: 'translate(25%, -25%)' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 0, 0.8, 0], scale: [0, 0, 3, 5] }}
                    transition={{ duration: 2.2, times: [0, 0.5, 0.65, 0.85], ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Revealed Brand Identity */}
            <motion.div 
              className="flex flex-col items-center justify-center gap-6 sm:gap-8"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src="/images/whitelogo.png" 
                alt="Furtuu Systems" 
                className="h-28 sm:h-36 md:h-44 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
              />
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display tracking-[0.2em] mb-3 drop-shadow-md">
                  FURTUU SYSTEMS
                </h1>
                <p className="text-[10px] sm:text-xs text-white/90 font-semibold tracking-[0.15em] uppercase drop-shadow-sm">
                  Building Smart Solutions for a Digital Future
                </p>
              </div>

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
