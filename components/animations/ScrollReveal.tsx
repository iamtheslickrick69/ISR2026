'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

type AnimationType = 'fade' | 'slide' | 'scale' | 'blur' | 'spring' | 'rotate' | 'bounce';
type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  stagger?: number;
  distance?: number;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as any;
const easeOutBack = [0.34, 1.56, 0.64, 1] as any;
const easeOutQuart = [0.25, 1, 0.5, 1] as any;

export function ScrollReveal({
  children,
  animation = 'slide',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  threshold = 0.15,
  distance = 30,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
    rootMargin: '-50px 0px',
  });

  // Reduced motion - instant appearance
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
    }
  };

  const getInitialState = () => {
    switch (animation) {
      case 'fade':
        return { opacity: 0 };
      case 'slide':
        return { opacity: 0, ...getDirectionOffset() };
      case 'scale':
        return { opacity: 0, scale: 0.92 };
      case 'blur':
        return { opacity: 0, filter: 'blur(10px)', ...getDirectionOffset() };
      case 'spring':
        return { opacity: 0, scale: 0.8, ...getDirectionOffset() };
      case 'rotate':
        return { opacity: 0, rotate: direction === 'left' ? -5 : 5, ...getDirectionOffset() };
      case 'bounce':
        return { opacity: 0, y: distance * 1.5 };
      default:
        return { opacity: 0, ...getDirectionOffset() };
    }
  };

  const getAnimateState = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
    };
  };

  const getTransition = () => {
    switch (animation) {
      case 'spring':
        return {
          type: 'spring' as const,
          stiffness: 100,
          damping: 15,
          delay,
        };
      case 'bounce':
        return {
          type: 'spring' as const,
          stiffness: 300,
          damping: 20,
          delay,
        };
      case 'blur':
        return {
          duration: duration * 1.2,
          delay,
          ease: easeOutExpo,
        };
      default:
        return {
          duration,
          delay,
          ease: easeOutQuart,
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()}
      animate={inView ? getAnimateState() : {}}
      transition={getTransition()}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for lists
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
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

// Stagger item for use with StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale';
}

export function StaggerItem({
  children,
  className = '',
  animation = 'slide',
}: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slide' ? 20 : 0,
      scale: animation === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOutQuart,
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

// Parallax effect
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: -20 * speed }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: easeOutQuart }}
    >
      {children}
    </motion.div>
  );
}

// Hover scale effect
interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export function HoverScale({ children, scale = 1.02, className = '' }: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation (character by character)
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: delay + (wordIndex * 0.1) + (charIndex * 0.03),
                ease: easeOutQuart,
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && ' '}
        </span>
      ))}
    </motion.span>
  );
}

export default ScrollReveal;
