'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Stat {
  id: string;
  number: string;
  label: string;
  description: string;
  isT3?: boolean;
}

const stats: Stat[] = [
  {
    id: 'stat1',
    number: '5-7',
    label: 'DAYS',
    description: 'Strategy & discovery sprint',
  },
  {
    id: 'stat2',
    number: '2-3',
    label: 'WEEKS',
    description: 'Production deployment',
  },
  {
    id: 'stat3',
    number: '0',
    label: 'REVISIONS',
    description: 'We ship it right the first time',
  },
  {
    id: 'stat4',
    number: '100%',
    label: 'PRODUCTION',
    description: 'Every system deployed successfully',
  },
  {
    id: 'stat5',
    number: 'T³',
    label: 'METHODOLOGY',
    description: 'Click to learn more',
    isT3: true,
  },
];

function StatCard({ stat, index, onClick }: { stat: Stat; index: number; onClick?: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const isT3 = stat.isT3;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className={`group relative ${isT3 ? 'cursor-pointer' : ''}`}
      onClick={isT3 ? onClick : undefined}
    >
      <div
        className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 ${
          isT3 ? 'border-blue-500/30 hover:border-blue-500/70' : 'border-white/10 hover:border-blue-500/50'
        }`}
        style={{
          boxShadow: isT3 ? '0 0 20px rgba(59, 130, 246, 0.2)' : '0 0 0 rgba(59, 130, 246, 0)',
        }}
        onMouseEnter={(e) => {
          if (isT3) {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(59, 130, 246, 0.4)';
          } else {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.3)';
          }
        }}
        onMouseLeave={(e) => {
          if (isT3) {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.2)';
          } else {
            e.currentTarget.style.boxShadow = '0 0 0 rgba(59, 130, 246, 0)';
          }
        }}
      >
        {/* Number */}
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          {stat.number}
        </div>

        {/* Label */}
        <div className="text-blue-400 text-sm font-semibold tracking-wider mb-3">
          {stat.label}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex items-center gap-2">
          {stat.description}
          {isT3 && (
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsDashboard() {
  const [isT3ModalOpen, setIsT3ModalOpen] = useState(false);

  return (
    <section
      className="relative w-full"
      style={{
        background: '#000000',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1400px',
          padding: '0 32px',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '40px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            The Haestus Advantage
          </h2>
          <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Quality accelerates velocity. Here's how we deliver production-ready AI systems faster than anyone else.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={idx}
              onClick={stat.isT3 ? () => setIsT3ModalOpen(true) : undefined}
            />
          ))}
        </div>
      </div>

      {/* T³ Methodology Modal */}
      <AnimatePresence>
        {isT3ModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsT3ModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl"
              style={{
                boxShadow: '0 0 60px rgba(59, 130, 246, 0.3)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsT3ModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    T³ Methodology
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>

                {/* Subtitle */}
                <p className="text-xl text-blue-400 font-semibold">
                  Triadic → Training → Technology
                </p>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  Real AI success requires a three-way partnership between technical expertise, domain knowledge, and learning capabilities.
                </p>

                {/* Three Partners */}
                <div className="space-y-4 mt-8">
                  {/* Partner 1: Haestus */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl">🔧</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Haestus</h4>
                      <p className="text-gray-400 text-sm">Technical expertise & architecture that scales</p>
                    </div>
                  </div>

                  {/* Partner 2: Your Team */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl">💼</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Your Team</h4>
                      <p className="text-gray-400 text-sm">Domain knowledge & workflow expertise</p>
                    </div>
                  </div>

                  {/* Partner 3: AI Systems */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl">🤖</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">AI Systems</h4>
                      <p className="text-gray-400 text-sm">Learning capabilities that amplify humans</p>
                    </div>
                  </div>
                </div>

                {/* Closing Statement */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 italic text-center">
                    We don't build chatbots. We architect intelligence that transforms how you work.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
