'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Orbiting dots for portals block (smaller)
function PortalOrbitingDots() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const circumference = 2 * (width + height);

    const dots = container.querySelectorAll('.portal-orbit-dot');
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      dots.forEach((dot, index) => {
        const element = dot as HTMLElement;
        const progress = ((elapsed / 6) + (index * 0.5)) % 1;
        const distance = progress * circumference;

        let x = 0,
          y = 0;

        if (distance < width) {
          x = distance;
          y = 0;
        } else if (distance < width + height) {
          x = width;
          y = distance - width;
        } else if (distance < 2 * width + height) {
          x = width - (distance - width - height);
          y = height;
        } else {
          x = 0;
          y = height - (distance - 2 * width - height);
        }

        element.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible">
      <div
        className="portal-orbit-dot absolute w-1.5 h-1.5 bg-[#F97316] rounded-full"
        style={{ boxShadow: '0 0 22px rgba(249,115,22,0.7)' }}
      />
      <div
        className="portal-orbit-dot absolute w-1.5 h-1.5 bg-[#FB923C] rounded-full"
        style={{ boxShadow: '0 0 22px rgba(251,146,60,0.7)' }}
      />
    </div>
  );
}

export default function PortalsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-[20px] right-[40px] z-[1100] hidden lg:block"
    >
      <div
        className="relative flex flex-col items-center px-6 py-4 rounded-2xl"
        style={{
          background: 'rgba(15, 15, 17, 0.7)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          boxShadow: '0 0 30px rgba(249,115,22,0.15), inset 0 0 12px rgba(249,115,22,0.03)',
        }}
      >
        <PortalOrbitingDots />

        {/* Label */}
        <motion.span
          whileHover={{ opacity: 1 }}
          className="text-[12px] font-semibold text-white/80 tracking-[1.5px] mb-1.5 relative z-10"
        >
          PORTALS
        </motion.span>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-2.5 relative z-10" />

        {/* Button Row */}
        <div className="flex gap-2.5 mt-2 relative z-10">
          <Link href="/portal/partners">
            <motion.button
              whileHover={{
                background: 'rgba(249,115,22,0.1)',
                borderColor: 'rgba(249,115,22,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 text-[12px] text-white bg-transparent border border-white/20 rounded-[20px] transition-all duration-200"
            >
              Partners
            </motion.button>
          </Link>
          <Link href="/portal/reps">
            <motion.button
              whileHover={{
                background: 'rgba(249,115,22,0.1)',
                borderColor: 'rgba(249,115,22,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 text-[12px] text-white bg-transparent border border-white/20 rounded-[20px] transition-all duration-200"
            >
              Reps
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
