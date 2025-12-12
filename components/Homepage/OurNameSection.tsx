'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OurNameSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={{
      padding: '120px 40px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          padding: '12px 32px',
          color: '#FAFAFA',
          fontSize: '15px',
          fontWeight: 500,
          cursor: 'pointer',
          display: 'block',
          margin: '0 auto 60px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.5)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(249, 115, 22, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Our Name
      </motion.button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '40px',
                background: 'linear-gradient(180deg, #FAFAFA 0%, #A1A1AA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Why We&apos;re Called Haestus
              </h2>

              <div style={{
                fontSize: '18px',
                lineHeight: 1.8,
                color: '#A1A1AA',
                textAlign: 'center',
                background: 'rgba(20, 20, 23, 0.4)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}>
                <p style={{ marginBottom: '20px' }}>
                  Hephaestus was the Greek god of fire, craftsmanship, and invention — the quiet architect who
                  forged the armor, tools, and machines that empowered both gods and humans. His work wasn&apos;t
                  about spectacle, but precision, resilience, and mastery.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  We named Haestus after him because that&apos;s the philosophy we follow: build with intention,
                  empower through design, and create systems that amplify rather than replace.
                </p>
                <p>
                  In a world moving faster than any era before, we believe great tools shape great futures.
                  Our mission is to forge the technology that helps humanity rise with the tide of AI, not be
                  swept away by it.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
