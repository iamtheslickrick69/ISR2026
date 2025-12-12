'use client';

import { motion } from 'framer-motion';

export default function StrategicPositioning() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span
            className="inline-block px-5 py-2 border rounded-full text-xs font-semibold tracking-wider uppercase"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.08)',
              letterSpacing: '0.05em',
            }}
          >
            Strategic Partnership Opportunities Open
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          style={{
            color: '#ffffff',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          THE AI REVOLUTION NEEDS ARCHITECTS
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8"
          style={{
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          Bridging generations through intelligent transformation.
        </motion.p>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-3xl mx-auto mb-12"
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
            lineHeight: 1.6,
          }}
        >
          We don't deploy AI solutions. We architect intelligence into the foundation of your organization, creating systems that amplify human potential and compound competitive advantage.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{
            scale: 1.02,
            y: -2,
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 rounded-lg font-semibold"
          style={{
            background: '#ffffff',
            color: '#FF854D',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
          }}
        >
          Explore Partnership
        </motion.button>
      </div>
    </section>
  );
}
