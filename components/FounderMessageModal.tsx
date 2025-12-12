'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface FounderMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FounderMessageModal({ isOpen, onClose }: FounderMessageModalProps) {
  // Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl w-full h-[85vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Close message"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto overflow-x-hidden">
              <div className="px-8 sm:px-12 md:px-16 py-12 md:py-16">

              {/* Header */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  THE FOUNDER&apos;S MESSAGE
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600" />
              </div>

              {/* Message Content */}
              <div className="space-y-8 text-gray-300">

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    Addressing the Concerns — Identifying the Facts
                  </h3>
                  <p className="leading-relaxed">
                    People feel overwhelmed, and the data explains why. 71% of Americans believe AI could replace their jobs, and more than half feel less secure with their personal data. Meanwhile, 95% of AI projects never reach production, leaving organizations with prototypes instead of progress. The issue isn&apos;t AI — it&apos;s the widening gap between what&apos;s promised and what actually gets built. These concerns are real, measurable, and justified. Ignoring them is how the divide grows.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    A Technology Humanity Has Never Faced Before
                  </h3>
                  <p className="leading-relaxed">
                    For the first time in history, we&apos;re building systems that don&apos;t just store information — they interpret it, generate it, and act on it. Nothing before this compares. Not the computer, not the internet, not the smartphone. Those tools increased productivity. AI amplifies intelligence itself. That means the potential is massive, and so is the responsibility. We&apos;re no longer shaping software; we&apos;re shaping decision-making systems that influence how people work, learn, and understand the world. Treating this like any previous tech wave isn&apos;t just naive — it&apos;s dangerous.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    What AI Should Be — and What It&apos;s Not
                  </h3>
                  <p className="leading-relaxed">
                    AI was never meant to replace people. It was meant to extend them. The real value isn&apos;t in automating entire roles — it&apos;s in eliminating the friction that slows teams down and clarifying decisions that used to take hours. When AI is built correctly, it gives people leverage: faster insight, cleaner workflows, and more consistent performance. Bad teams use AI as a shortcut. Great teams use it as infrastructure. That&apos;s the difference.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    The Divide We Cannot Ignore
                  </h3>
                  <p className="leading-relaxed">
                    The real gap forming today isn&apos;t between people who &quot;have AI&quot; and people who don&apos;t — everyone has access to the same models. The divide is between organizations that integrate AI into their operations and those that treat it like a novelty. Between teams that build intelligence into their workflow and those relying on ad-hoc prompts. One group becomes faster, clearer, and more resilient. The other gets buried in complexity. This divide is real, and the organizations that refuse to build proper AI infrastructure will feel it first.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    AI as the Bridge Between Generations
                  </h3>
                  <p className="leading-relaxed">
                    AI isn&apos;t just a technological shift — it&apos;s an opportunity to bridge generations. Everything we&apos;re building today rests on the foundations laid by the people before us: the workers, engineers, and leaders who created the systems and economy that made AI possible. They deserve access to this capability as much as we do. And at the same time, we owe it to the next generation to build systems that strengthen their future rather than complicate it. AI shouldn&apos;t become a divide between age groups. It should be the link — a way to honor the past and empower the future.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    Why We Built Haestus
                  </h3>
                  <p className="leading-relaxed">
                    Haestus exists to close the gap between what AI promises and what organizations actually achieve. Most teams aren&apos;t failing because they lack talent — they&apos;re failing because they lack the architecture to turn ideas into systems. We&apos;ve seen this gap firsthand across dozens of teams. Haestus changes that. We build intelligence layers that become part of a company&apos;s foundation: clean data flows, scalable automations, and decision systems that compound in value over time. Not hype. Not theory. Infrastructure. If you&apos;re ready to move past prototypes and into real production, to build with intention instead of reacting to noise, this is your moment. The future won&apos;t reward the people who wait — it will reward the people who build. Let&apos;s build it together.
                  </p>
                </div>

              </div>

              {/* Signature */}
              <div className="border-t border-white/10 pt-8 mt-12">
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                    Rocky
                  </div>
                  <div className="text-sm text-gray-400 tracking-wide">
                    Founder, Haestus
                  </div>
                </div>
              </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
