'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'ubill.io',
    description: 'Real-time analytics and predictive modeling for Fortune 500 operations.',
    stats: '500K+ daily insights',
    size: 'hero',
    comingSoon: false,
  },
  {
    id: 2,
    title: 'pestctrl.ai',
    description: 'Automated extraction with 99.2% accuracy.',
    stats: '99.2% accuracy',
    size: 'small',
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Bid My Brace',
    description: 'Multi-modal customer service automation.',
    stats: '80% faster response',
    size: 'small',
    comingSoon: false,
  },
  {
    id: 4,
    title: 'Crew Cam',
    description: 'ML models reducing logistics costs by 35%.',
    stats: '35% cost savings',
    size: 'medium',
    comingSoon: false,
  },
  {
    id: 5,
    title: 'ProShop24/7',
    description: 'IoT integration reducing downtime.',
    stats: '45% cost reduction',
    size: 'small',
    comingSoon: false,
  },
  {
    id: 6,
    title: 'promptlee',
    description: 'Fine-tuned language models for domain-specific applications.',
    stats: '10x faster deployment',
    size: 'wide',
    comingSoon: false,
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-20 px-10 overflow-hidden" style={{ backgroundColor: '#000' }}>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Portfolio{' '}
            <span className="text-white/60 font-light italic">(and growing)</span>
          </h2>
          <p className="text-xl text-white/90 font-medium">
            We don't do MVPs. We ship products that feel inevitable.
          </p>
        </motion.div>

        {/* Bento-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">
          {/* Hero Card - Enterprise AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            }}
            className="md:col-span-3 md:row-span-2 bg-[rgba(30,41,59,0.25)] backdrop-blur-xl rounded-[20px] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,41,59,0.35)] flex flex-col justify-between min-h-[400px]"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          >
            <div>
              {projects[0].comingSoon && (
                <span className="inline-block px-4 py-1.5 bg-[rgba(255,107,53,0.2)] border border-[#ff6b35] text-[#ff6b35] rounded-full text-xs font-semibold uppercase mb-4">
                  COMING SOON
                </span>
              )}
              <h3 className="text-3xl font-bold text-white mb-3">
                {projects[0].title}
              </h3>
              <p className="text-[15px] text-[#cbd5e1] leading-relaxed">
                {projects[0].description}
              </p>
            </div>
            <div className="mt-auto pt-6">
              <span className="text-4xl font-bold text-[#ff6b35]">
                {projects[0].stats}
              </span>
            </div>
          </motion.div>

          {/* Small Card - Document Processing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            }}
            className="md:col-span-1 bg-[rgba(30,41,59,0.25)] backdrop-blur-xl rounded-[20px] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,41,59,0.35)] flex flex-col justify-between min-h-[220px]"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          >
            {projects[1].comingSoon && (
              <span className="inline-block px-4 py-1.5 bg-[rgba(255,107,53,0.2)] border border-[#ff6b35] text-[#ff6b35] rounded-full text-xs font-semibold uppercase mb-3">
                SOON
              </span>
            )}
            <h3 className="text-lg font-bold text-white mb-2">{projects[1].title}</h3>
            <p className="text-sm text-[#cbd5e1] leading-relaxed mb-4">
              {projects[1].description}
            </p>
            <span className="text-2xl font-bold text-[#4ade80] mt-auto">
              {projects[1].stats}
            </span>
          </motion.div>

          {/* Small Card - AI Chat Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            }}
            className="md:col-span-2 bg-[rgba(30,41,59,0.25)] backdrop-blur-xl rounded-[20px] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,41,59,0.35)] flex flex-col justify-between min-h-[220px]"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          >
            {projects[2].comingSoon && (
              <span className="inline-block px-4 py-1.5 bg-[rgba(255,107,53,0.2)] border border-[#ff6b35] text-[#ff6b35] rounded-full text-xs font-semibold uppercase mb-3">
                SOON
              </span>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{projects[2].title}</h3>
            <p className="text-[15px] text-[#cbd5e1] leading-relaxed mb-4">
              {projects[2].description}
            </p>
            <span className="text-3xl font-bold text-[#4ade80] mt-auto">
              {projects[2].stats}
            </span>
          </motion.div>

          {/* Medium Card - Supply Chain */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            }}
            className="md:col-span-3 bg-[rgba(30,41,59,0.25)] backdrop-blur-xl rounded-[20px] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,41,59,0.35)] flex flex-col justify-between min-h-[220px]"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          >
            {projects[3].comingSoon && (
              <span className="inline-block px-4 py-1.5 bg-[rgba(255,107,53,0.2)] border border-[#ff6b35] text-[#ff6b35] rounded-full text-xs font-semibold uppercase mb-3">
                SOON
              </span>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{projects[3].title}</h3>
            <p className="text-[15px] text-[#cbd5e1] leading-relaxed mb-4">
              {projects[3].description}
            </p>
            <span className="text-3xl font-bold text-[#4ade80] mt-auto">
              {projects[3].stats}
            </span>
          </motion.div>

          {/* Small Card - Predictive Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            }}
            className="md:col-span-1 bg-[rgba(30,41,59,0.25)] backdrop-blur-xl rounded-[20px] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,41,59,0.35)] flex flex-col justify-between min-h-[180px]"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          >
            {projects[4].comingSoon && (
              <span className="inline-block px-4 py-1.5 bg-[rgba(255,107,53,0.2)] border border-[#ff6b35] text-[#ff6b35] rounded-full text-xs font-semibold uppercase mb-3">
                SOON
              </span>
            )}
            <h3 className="text-lg font-bold text-white mb-2">{projects[4].title}</h3>
            <span className="text-2xl font-bold text-[#ff6b35] mt-auto">
              {projects[4].stats}
            </span>
          </motion.div>

          {/* Placeholder Future Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 bg-[rgba(30,41,59,0.15)] backdrop-blur-xl rounded-[20px] p-8 border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center min-h-[180px]"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          >
            <span className="text-white/30 text-lg font-medium">More Coming Soon</span>
          </motion.div>

          {/* Wide Card - Custom LLM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            }}
            className="md:col-span-3 bg-[rgba(30,41,59,0.25)] backdrop-blur-xl rounded-[20px] p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,41,59,0.35)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 min-h-[180px]"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            }}
          >
            <div>
              {projects[5].comingSoon && (
                <span className="inline-block px-4 py-1.5 bg-[rgba(255,107,53,0.2)] border border-[#ff6b35] text-[#ff6b35] rounded-full text-xs font-semibold uppercase mb-3">
                  COMING SOON
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{projects[5].title}</h3>
              <p className="text-[15px] text-[#cbd5e1] leading-relaxed">
                {projects[5].description}
              </p>
            </div>
            <span className="text-3xl font-bold text-[#4ade80] whitespace-nowrap">
              {projects[5].stats}
            </span>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#94a3b8]">
            More projects launching soon. We're selective about what we build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
