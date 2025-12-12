'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardContent {
  step: string;
  title: string;
  content: string;
}

const cards: CardContent[] = [
  {
    step: '01',
    title: 'WHO WE ARE',
    content: `Haestus operates as a full-stack AI development and collaboration team. This is where world-class talent meets calculated AI implementation. Every project is architected with enterprise-grade standards. This isn't about scaling teams; it's about curating excellence. We take on a limited number of clients who demand premium results and understand that systematic precision accelerates velocity, not slows it.`,
  },
  {
    step: '02',
    title: 'WHAT WE DO',
    content: `We build AI-powered applications from first pixel to final deployment. Full-stack engineering spanning landing pages, mobile apps, and enterprise systems. Everyone has the same AI tools now. The game isn't access—it's architecture. Knowing what to build, how to structure it, which problems actually matter. We engineer the framework for AI to exist in your business. The technology is democratized. The strategy isn't.`,
  },
  {
    step: '03',
    title: 'WHY HAESTUS',
    content: `Hephaestus: Greek god of the forge. Precision, fire, and relentless iteration. That's us. We're the digital forge. Every project is hammered into shape with systematic discipline until it's unbreakable. AI gives us the fire. Experience gives us the blueprint. You get the weapon. Engineered, not assembled. Forged, not fabricated. Built to last, not patched together.`,
  },
];

export default function TrilogySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return cards.length - 1;
      if (next >= cards.length) return 0;
      return next;
    });
  };

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Step Indicators */}
        <div className="flex justify-center gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.button
              key={card.step}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  text-sm font-mono transition-all duration-500
                  ${
                    index === currentIndex
                      ? 'bg-[#F97316] text-black shadow-lg shadow-[#F97316]/30'
                      : 'bg-white/[0.03] text-white/40 border border-white/[0.08]'
                  }
                `}
              >
                {card.step}
              </div>
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F97316] rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Card Container */}
        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
              <div
                className="
                  h-full p-12 rounded-3xl
                  bg-[rgba(20,20,23,0.7)] backdrop-blur-xl
                  border border-white/[0.06]
                  shadow-2xl shadow-black/50
                "
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-white mb-8 tracking-tight"
                >
                  {cards[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-white/70 leading-relaxed"
                >
                  {cards[currentIndex].content}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            className="
              w-12 h-12 rounded-full flex items-center justify-center
              bg-white/[0.03] border border-white/[0.08]
              text-white/60 hover:text-white
              transition-colors duration-300
            "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => paginate(1)}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            className="
              w-12 h-12 rounded-full flex items-center justify-center
              bg-white/[0.03] border border-white/[0.08]
              text-white/60 hover:text-white
              transition-colors duration-300
            "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
