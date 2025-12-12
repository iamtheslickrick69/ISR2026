'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FoundersMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FoundersMessage({ isOpen, onClose }: FoundersMessageProps) {
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
            aria-labelledby="founders-message-title"
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
                id="founders-message-title"
                className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight"
              >
                A MESSAGE FROM THE FORGE
              </h2>

              <div className="space-y-6 text-[16px] md:text-[18px] text-white/85 leading-relaxed">
                <p className="font-medium text-white">What a time to be alive.</p>

                <p>
                  Human progress has never moved in a straight line — it jumps. From Roman aqueducts
                  to the printing press. From the light bulb to the automobile. From the early
                  internet to the apps that rewired entire industries. Every leap had one thing in
                  common: it didn't just improve life; it redefined it.
                </p>

                <p className="font-medium text-white">
                  But nothing — nothing — compares to what's happening right now.
                </p>

                <p>
                  Artificial intelligence isn't just another innovation. It's the first technology
                  in human history that evolves every single day. It grows smarter while we sleep.
                  It accelerates while we're still catching our breath. And for the first time,
                  society doesn't have decades to adapt. Entire industries will shift in months, not
                  years.
                </p>

                <p>That reality comes with two truths:</p>

                <div className="pl-4 border-l-2 border-[#F97316]/40 space-y-4">
                  <div>
                    <p className="font-semibold text-white mb-2">The good:</p>
                    <p>
                      AI isn't here to replace people. It's here to amplify us. To connect
                      generations. To unlock the kind of progress humans have always dreamed about
                      but could never reach alone.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">The hard part:</p>
                    <p>
                      The speed of this change raises real concerns — privacy, control, and who gets
                      access to the tools shaping the future. Those questions matter. They can't be
                      ignored.
                    </p>
                  </div>
                </div>

                <p className="font-medium text-white text-xl">That's why we built Haestus.</p>

                <p>
                  This isn't a company to us. It's a responsibility. A movement. A belief that
                  humanity deserves to understand, shape, and wield these new tools — not be
                  blindsided by them.
                </p>

                <p>
                  We exist to teach, to build, and to serve.
                  <br />
                  To architect systems that empower people, not replace them.
                  <br />
                  To help businesses transition from the old world to the new without losing what
                  makes them human.
                </p>

                <p>
                  Change is inevitable. AI simply compresses the timeline. What once took decades
                  will now take weeks. And our goal is simple: guide that transition with intention,
                  integrity, and excellence.
                </p>

                <p>
                  Our name comes from Hephaestus — the Greek god who forged the weapons of gods and
                  heroes. Not because we want to romanticize mythology, but because the symbolism
                  fits. Tools shape civilizations. The ones we forge today will shape the next
                  century.
                </p>

                <p className="font-medium text-white">
                  If we do our job right, the world won't just adapt to AI — it will rise with it.
                </p>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60">—</p>
                  <p className="font-semibold text-white">Slick</p>
                  <p className="text-white/70">Founder, Haestus.dev</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
