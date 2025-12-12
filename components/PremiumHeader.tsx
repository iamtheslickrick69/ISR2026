'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { X, Users, Briefcase } from 'lucide-react';

export default function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal on Escape key and manage body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPortalOpen(false);
    };

    if (isPortalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isPortalOpen]);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Capabilities', href: '/#capabilities' },
    { name: 'Impact', href: '/#impact' },
    { name: 'Framework', href: '/#framework' },
    { name: 'Insights', href: '/#insights' },
    { name: 'Partnership', href: '/#partnership' },
  ];

  return (
    <>
      {/* Portal Button (Top Right) */}
      <motion.div
        className="fixed right-10 z-[999] hidden md:flex"
        style={{
          top: scrolled ? '22px' : '28px',
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? 'none' : 'auto',
          transform: scrolled ? 'translateY(-12px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
        }}
      >
        <button
          onClick={() => setIsPortalOpen(true)}
          className="px-6 py-2 text-white font-medium rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
          style={{
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.15)';
          }}
        >
          Portal
        </button>
      </motion.div>

      {/* GROUP 1: Compact Glassmorphism Nav (Scroll-Responsive) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-[1000] transition-transform duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
        style={{
          top: scrolled ? '18px' : '22px',
          transformOrigin: 'top center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <nav
          className="flex items-center rounded-2xl border"
          style={{
            gap: '36px',
            paddingLeft: '16px',
            paddingRight: '32px',
            paddingTop: '10px',
            paddingBottom: '10px',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.14)'
              : 'rgba(255, 255, 255, 0.10)',
            backdropFilter: 'blur(24px) saturate(200%)',
            WebkitBackdropFilter: 'blur(24px) saturate(200%)',
            borderColor: 'rgba(255, 255, 255, 0.20)',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.18), 0 8px 32px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Haestus Anvil Icon - Home Link */}
          <Link href="/" aria-label="Go to home">
            <motion.div
              className="flex items-center justify-center"
              style={{
                marginRight: '24px',
                padding: '4px 8px',
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
              }}
            >
              <Image
                src="/haestus-anvil-icon.png"
                alt="Haestus"
                width={46}
                height={46}
                className="object-contain"
                style={{
                  height: '46px',
                  width: '46px',
                  display: 'block',
                  objectFit: 'contain',
                }}
                priority
              />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center" style={{ gap: '36px' }}>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-[15px] font-semibold transition-all duration-200"
                  style={{
                    color: pathname === link.href ? '#ff6b35' : '#e2e8f0',
                    letterSpacing: '0.3px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ff6b35';
                    e.currentTarget.style.textShadow = '0 0 8px rgba(255,107,53,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = pathname === link.href ? '#ff6b35' : '#e2e8f0';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  {link.name}
                </Link>
                {/* Animated Underline */}
                <motion.div
                  className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Portal Login Modal */}
      <AnimatePresence>
        {isPortalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsPortalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0a0a0a] border border-orange-500/30 rounded-2xl p-8 md:p-12 shadow-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPortalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close portal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Portal Login
                </h2>
                <div className="w-16 h-1 bg-orange-500 mx-auto mb-4" />
                <p className="text-gray-400">
                  Choose your login type
                </p>
              </div>

              {/* Login Options */}
              <div className="space-y-4">
                {/* Partner Login Button */}
                <button
                  onClick={() => {
                    router.push('/partner-login');
                  }}
                  className="w-full p-6 bg-black/40 border border-orange-500/20 rounded-xl hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-white mb-1">
                        Login as Partner
                      </div>
                      <div className="text-sm text-gray-400">
                        Access partner dashboard
                      </div>
                    </div>
                  </div>
                </button>

                {/* Rep Login Button */}
                <button
                  onClick={() => {
                    router.push('/rep-login');
                  }}
                  className="w-full p-6 bg-black/40 border border-orange-500/20 rounded-xl hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-white mb-1">
                        Login as Rep
                      </div>
                      <div className="text-sm text-gray-400">
                        Access rep dashboard
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
