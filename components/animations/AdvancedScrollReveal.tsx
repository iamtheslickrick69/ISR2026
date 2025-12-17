'use client';

import { motion, useReducedMotion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { easings, durations } from '@/lib/animations/config';

type AnimationType =
  | 'fade'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'scaleUp'
  | 'blur'
  | 'flip'
  | 'rotate'
  | 'bounceIn';

interface AdvancedScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  distance?: number;
  blur?: number;
  rotate?: number;
}

export function AdvancedScrollReveal({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = durations.slow,
  className = '',
  once = true,
  threshold = 0.1,
  distance = 60,
  blur = 10,
  rotate: rotateDeg = 15,
}: AdvancedScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-50px',
    amount: threshold,
  });

  // Mobile optimization - reduce animation distance by 50%
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedDistance = isMobile ? distance * 0.5 : distance;
  const adjustedBlur = isMobile ? blur * 0.6 : blur;

  // Reduced motion - instant appearance
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = (): Variants => {
    const baseTransition = {
      duration,
      ease: easings.expo,
      delay,
    };

    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: baseTransition,
          },
        };

      case 'slideUp':
        return {
          hidden: {
            opacity: 0,
            y: adjustedDistance,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };

      case 'slideDown':
        return {
          hidden: {
            opacity: 0,
            y: -adjustedDistance,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };

      case 'slideLeft':
        return {
          hidden: {
            opacity: 0,
            x: adjustedDistance,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };

      case 'slideRight':
        return {
          hidden: {
            opacity: 0,
            x: -adjustedDistance,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };

      case 'scale':
        return {
          hidden: {
            opacity: 0,
            scale: 0.85,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              ...baseTransition,
              ease: easings.backOut,
            },
          },
        };

      case 'scaleUp':
        return {
          hidden: {
            opacity: 0,
            scale: 0.85,
            y: adjustedDistance,
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              ...baseTransition,
              ease: easings.backOut,
            },
          },
        };

      case 'blur':
        return {
          hidden: {
            opacity: 0,
            filter: `blur(${adjustedBlur}px)`,
            y: adjustedDistance / 2,
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
              ...baseTransition,
              duration: duration * 1.2,
            },
          },
        };

      case 'flip':
        return {
          hidden: {
            opacity: 0,
            rotateX: -90,
            transformPerspective: 1000,
          },
          visible: {
            opacity: 1,
            rotateX: 0,
            transformPerspective: 1000,
            transition: {
              ...baseTransition,
              ease: easings.backOut,
            },
          },
        };

      case 'rotate':
        return {
          hidden: {
            opacity: 0,
            rotate: rotateDeg,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
              ...baseTransition,
              ease: easings.backOut,
            },
          },
        };

      case 'bounceIn':
        return {
          hidden: {
            opacity: 0,
            scale: 0.5,
            y: adjustedDistance,
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              ...baseTransition,
              ease: easings.bounce,
            },
          },
        };

      default:
        return {
          hidden: { opacity: 0, y: adjustedDistance },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for sequential animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.08,
  once = true,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger item
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: durations.normal,
            ease: easings.expo,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
