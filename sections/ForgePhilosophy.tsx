'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: 'HUMANS OVER AUTOMATION',
    description: 'AI should amplify human capability, not eliminate it.',
  },
  {
    title: 'ARCHITECTURE OVER ASSEMBLY',
    description: "We don't stack components—we design systems that create compounding value.",
  },
  {
    title: 'PARTNERSHIP OVER TRANSACTION',
    description: 'We forge lasting relationships with organizations committed to transformation.',
  },
  {
    title: 'TRUTH OVER HYPE',
    description: 'No inflated promises. Only real capabilities, real results.',
  },
];

export default function ForgePhilosophy() {
  return (
    <section className="pt-20 pb-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span
            className="text-xs tracking-widest uppercase font-semibold"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              letterSpacing: '0.1em',
            }}
          >
            Our Foundation
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
          style={{
            color: '#ffffff',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
          }}
        >
          THE FORGE PHILOSOPHY
        </motion.h2>

        {/* Intro Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl italic mb-12"
          style={{
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            lineHeight: 1.5,
            maxWidth: '900px',
            margin: '0 auto 3rem',
          }}
        >
          "In Greek mythology, Hephaestus didn't replace heroes—he forged the tools that made them legendary."
        </motion.blockquote>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg mb-6"
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
            lineHeight: 1.7,
            maxWidth: '800px',
            margin: '0 auto 1.5rem',
          }}
        >
          The god of the forge crafted Achilles' armor, Hermes' winged sandals, and the weapons that shaped fate. True power lies not in replacing the warrior, but in amplifying their potential. Every creation was architecture—deliberate, transformative.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg mb-16"
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
            lineHeight: 1.7,
            maxWidth: '800px',
            margin: '0 auto 4rem',
          }}
        >
          We carry this wisdom forward. We don't build AI to replace your people. We architect intelligence that amplifies capability. As Hephaestus transformed metal into divine instruments, we transform data and algorithms into competitive advantage.
        </motion.p>

        {/* 4 Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(255, 255, 255, 0.4)',
                background: 'rgba(0, 0, 0, 0.4)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
              }}
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(12px) saturate(120%)',
                WebkitBackdropFilter: 'blur(12px) saturate(120%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <h3
                className="text-lg font-bold uppercase tracking-wide mb-3"
                style={{
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                }}
              >
                {principle.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm mt-16"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          The forge isn't where we work—it's how we think.
        </motion.p>
      </div>
    </section>
  );
}
