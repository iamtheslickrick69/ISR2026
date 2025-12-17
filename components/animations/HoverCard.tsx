'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { springs } from '@/lib/animations/config';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  lift?: boolean;
  glow?: boolean;
}

export function HoverCard({
  children,
  className = '',
  lift = true,
  glow = false,
}: HoverCardProps) {
  const variants = {
    rest: {
      y: 0,
      scale: 1,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    hover: {
      y: lift ? -8 : 0,
      scale: 1.02,
      boxShadow: glow
        ? '0 20px 40px rgba(217, 119, 87, 0.3), 0 0 30px rgba(217, 119, 87, 0.2)'
        : '0 20px 25px rgba(0,0,0,0.15)',
    },
  };

  return (
    <motion.div
      className={className}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      variants={variants}
      transition={springs.smooth}
    >
      {children}
    </motion.div>
  );
}
