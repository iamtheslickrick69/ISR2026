'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Orbiting dots component
function OrbitingDots() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#F97316] rounded-full"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        >
          <motion.div
            className="absolute w-1.5 h-1.5 bg-[#F97316] rounded-full shadow-lg shadow-[#F97316]/50"
            style={{
              transform: `translateX(${150 + i * 30}px) translateY(-50%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function PremiumDualHeader() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const headerScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const microHeaderOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <>
      {/* Micro header - top right */}
      <motion.div
        className="fixed top-4 right-6 z-50 text-xs text-white/50 font-mono"
        style={{ opacity: microHeaderOpacity }}
      >
        <span className="text-[#F97316]">●</span> St. George, Utah
      </motion.div>

      {/* Main floating nav */}
      <motion.header
        ref={headerRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
        style={{ scale: headerScale }}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`
            relative flex items-center gap-8 px-8 py-3
            rounded-full backdrop-blur-xl
            bg-white/[0.03] border border-white/[0.08]
            shadow-2xl shadow-black/50
            transition-all duration-500
            ${scrolled ? 'bg-white/[0.05]' : ''}
          `}
        >
          <OrbitingDots />

          {/* Navigation Links */}
          <div className="flex items-center gap-6 relative z-10">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <motion.span
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 0.15)', borderColor: 'rgba(249, 115, 22, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="
              relative z-10 px-5 py-2 rounded-full
              bg-[#F97316] text-black text-sm font-medium
              shadow-lg shadow-[#F97316]/25
              transition-all duration-300
            "
          >
            Connect
          </motion.button>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F97316]/5 via-transparent to-[#F97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.nav>
      </motion.header>
    </>
  );
}
