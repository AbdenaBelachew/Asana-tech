import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import useIsDesktop from '../hooks/useIsDesktop';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  scale = true,
}) {
  const prefersReduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const reduceMotion = prefersReduced || isDesktop;

  const offsets = {
    up: { y: reduceMotion ? 0 : 36, x: 0 },
    down: { y: reduceMotion ? 0 : -36, x: 0 },
    left: { x: reduceMotion ? 0 : 36, y: 0 },
    right: { x: reduceMotion ? 0 : -36, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offsets[direction] ?? offsets.up;

  if (isDesktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x,
        y,
        scale: scale && !reduceMotion ? 0.94 : 1,
        filter: reduceMotion ? 'blur(0px)' : 'blur(8px)',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once, margin: '-72px', amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
