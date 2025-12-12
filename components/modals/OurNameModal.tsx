'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OurNameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OurNameModal({ isOpen, onClose }: OurNameModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and ESC key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto rounded-xl p-10"
            style={{
              background: 'rgba(15, 15, 17, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="our-name-title"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl font-light transition-colors duration-200"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Content */}
            <div className="space-y-6">
              <h2
                id="our-name-title"
                className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight"
              >
                Why We're Called Haestus
              </h2>

              <div className="space-y-6 text-[16px] md:text-[18px] text-white/85 leading-relaxed">
                <p>
                  Hephaestus was the Greek god of fire, craftsmanship, and invention — the quiet
                  architect who forged the armor, tools, and machines that empowered both gods and
                  humans. His work wasn't about spectacle, but precision, resilience, and mastery.
                </p>

                <p>
                  We named Haestus after him because that's the philosophy we follow: build with
                  intention, empower through design, and create systems that amplify rather than
                  replace.
                </p>

                <p>
                  In a world moving faster than any era before, we believe great tools shape great
                  futures. Our mission is to forge the technology that helps humanity rise with the
                  tide of AI, not be swept away by it.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
