'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  // Staggered character animation for title
  const title = "CRAFTING DIGITAL INTELLIGENCE";
  const titleChars = title.split("");

  return (
    <section className="relative min-h-screen bg-transparent text-white flex flex-col">

      {/* Title at Top - Staggered Character Reveal */}
      <div className="pt-32 md:pt-40 pb-8 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-wider">
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.02,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Logo Centered - Main Focus */}
      <div className="flex-1 flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: 'spring', stiffness: 300 },
          }}
          className="relative"
        >
          {/* Background glow effect - animated */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, transparent 70%)',
            }}
          />

          {/* Main Logo */}
          <Image
            src="/official.trans.white.png"
            alt="Haestus"
            width={1563}
            height={1563}
            className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
            priority
          />
        </motion.div>
      </div>

      {/* Tagline at Bottom - Fade + Blur */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{
          duration: 0.8,
          delay: 1.8,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="pb-16 text-center"
      >
        <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light tracking-wide">
          haestus.dev
        </p>
      </motion.div>

      {/* Scroll Indicator - Enhanced Bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1],
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 1, delay: 2.5 },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.svg
          className="w-6 h-6 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.2, color: 'rgba(255, 255, 255, 0.8)' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>

    </section>
  );
}
