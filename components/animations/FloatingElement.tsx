'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function FloatingElement({
  children,
  className = '',
  delay = 0,
  duration = 3,
  distance = 20,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Pulse animation for attention
interface PulseProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function Pulse({
  children,
  className = '',
  scale = 1.05,
}: PulseProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Rotate continuously
interface RotateProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function Rotate({
  children,
  className = '',
  duration = 20,
}: RotateProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  );
}
