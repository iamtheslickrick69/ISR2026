// Animation configuration - World-class smooth animations
// Optimized for performance and visual excellence

export const easings = {
  // Smooth, professional easings
  smooth: [0.33, 1, 0.68, 1],
  snappy: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  expo: [0.19, 1, 0.22, 1],
  circOut: [0, 0.55, 0.45, 1],
  backOut: [0.34, 1.56, 0.64, 1],
  elastic: [0.68, -0.6, 0.32, 1.6],
} as const;

export const durations = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
} as const;

export const springs = {
  // Buttery smooth spring configurations
  gentle: { type: 'spring' as const, stiffness: 120, damping: 14, mass: 0.8 },
  smooth: { type: 'spring' as const, stiffness: 170, damping: 20, mass: 1 },
  snappy: { type: 'spring' as const, stiffness: 250, damping: 25, mass: 1 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 18, mass: 1.2 },
  wobbly: { type: 'spring' as const, stiffness: 180, damping: 12, mass: 1 },
} as const;

export const pageTransition = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: durations.fast,
      ease: easings.snappy,
    }
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.expo,
    }
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    }
  },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.expo,
    }
  },
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.expo,
    }
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    }
  },
};

// Hover and interaction animations
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: springs.snappy,
  },
  tap: { scale: 0.98 },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px rgba(0,0,0,0.15)',
    transition: springs.smooth,
  },
};

export const magneticButton = {
  rest: { x: 0, y: 0 },
  hover: (position: { x: number; y: number }) => ({
    x: position.x,
    y: position.y,
    transition: springs.gentle,
  }),
};
