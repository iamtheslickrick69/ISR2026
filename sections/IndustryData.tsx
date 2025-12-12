'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '78%',
    headline: 'of organizations now use AI in at least one business function',
    detail: 'Up from 55% one year ago',
    source: 'McKinsey Global Survey, 2024',
  },
  {
    number: '30%',
    headline: 'of generative AI projects are abandoned after proof of concept',
    detail: 'Fast deployment without architecture leads to expensive failures.',
    source: 'Gartner Research, 2025',
  },
  {
    number: '$644B',
    headline: 'global AI spending projected for 2025',
    detail: 'Massive investment reshaping industries.',
    source: 'Gartner Forecast, 2025',
  },
  {
    number: '1%',
    headline: 'of leaders say their org is mature in AI deployment',
    detail: 'The gap between ambition and execution is where we operate.',
    source: 'McKinsey Global Survey, 2024',
  },
];

export default function IndustryData() {
  return (
    <section id="ai-reality-stats" className="ai-reality-stats">
      {/* Title Block */}
      <header className="ai-reality-header">
        <p className="ai-reality-eyebrow">REALITY CHECK</p>
        <h2 className="ai-reality-title">AI Is Everywhere. Success Isn't.</h2>
        <p className="ai-reality-subtitle">
          Four numbers that explain why most AI initiatives stall — and why architecture matters more
          than ambition.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="relative z-[2] max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/80 backdrop-blur-sm border border-[#1a1a1a] rounded-xl p-8 shadow-lg"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-[#CC0000]/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-[#CC0000]/50 rounded" />
              </div>

              {/* Big Number */}
              <h3 className="text-5xl font-bold text-[#CC0000] mb-4">{stat.number}</h3>

              {/* Headline */}
              <p className="text-lg text-white font-medium mb-3">{stat.headline}</p>

              {/* Supporting paragraph */}
              <p className="text-[#B3B3B3] mb-4 text-sm leading-relaxed">{stat.detail}</p>

              {/* Source */}
              <p className="text-xs text-white/40">Source: {stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inline styles for liquid motion background */}
      <style jsx>{`
        .ai-reality-stats {
          position: relative;
          overflow: hidden;
          padding: 6rem 0;
          background: transparent;
          display: block;
        }

        .ai-reality-stats::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          background: radial-gradient(circle at 15% 20%, rgba(204, 0, 0, 0.16), transparent 55%),
            radial-gradient(circle at 80% 75%, rgba(204, 0, 0, 0.12), transparent 55%),
            radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.06), transparent 60%),
            radial-gradient(circle at 0% 100%, rgba(0, 0, 0, 0.9), #020305);
          animation: aiLiquidDrift 18s ease-in-out infinite alternate;
          opacity: 0.9;
          pointer-events: none;
        }

        .ai-reality-stats::after {
          content: '';
          position: absolute;
          inset: -20px;
          z-index: 1;
          opacity: 0.12;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='noStitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E");
          mix-blend-mode: soft-light;
        }

        @keyframes aiLiquidDrift {
          0% {
            transform: translate3d(-3%, -2%, 0) scale(1.02);
            filter: blur(0px);
          }
          50% {
            transform: translate3d(2%, 3%, 0) scale(1.05);
            filter: blur(1px);
          }
          100% {
            transform: translate3d(-1%, 4%, 0) scale(1.03);
            filter: blur(0.5px);
          }
        }

        .ai-reality-header {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto 3.5rem auto;
          text-align: center;
          padding: 0 1.5rem;
        }

        .ai-reality-eyebrow {
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #F97316;
          margin-bottom: 0.75rem;
        }

        .ai-reality-title {
          font-size: clamp(1.9rem, 2.3vw, 2.4rem);
          font-weight: 600;
          color: #f9fafb;
          margin-bottom: 0.75rem;
        }

        .ai-reality-subtitle {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .ai-reality-stats {
            padding: 4rem 0;
          }
        }
      `}</style>
    </section>
  );
}
