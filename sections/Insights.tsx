'use client';

import { motion } from 'framer-motion';

const articles = [
  {
    readTime: '8 min read',
    date: 'Dec 2024',
    title: 'Why 30% of AI Projects Fail After POC',
    summary:
      'The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.',
    tags: ['Strategy', 'Enterprise AI'],
  },
  {
    readTime: '6 min read',
    date: 'Dec 2024',
    title: 'The Architecture-First Approach to AI',
    summary:
      'Building AI systems that scale requires thinking beyond the model. Infrastructure, data pipelines, and human workflows must align.',
    tags: ['Architecture', 'Best Practices'],
  },
  {
    readTime: '10 min read',
    date: 'Nov 2024',
    title: 'Humans Over Automation: A Framework',
    summary:
      'AI should amplify human capability, not replace it. How we design systems that empower rather than eliminate.',
    tags: ['Philosophy', 'Human-AI Collaboration'],
  },
  {
    readTime: '7 min read',
    date: 'Nov 2024',
    title: 'The True Cost of Technical Debt in AI',
    summary:
      'Shortcuts in AI development compound exponentially. Why we build for the long term from day one.',
    tags: ['Technical', 'Long-term Value'],
  },
  {
    readTime: '5 min read',
    date: 'Oct 2024',
    title: 'Beyond the Hype: Real AI Capabilities',
    summary:
      'Separating what AI can actually do from what marketers claim. A practical guide for decision makers.',
    tags: ['Reality Check', 'Decision Making'],
  },
  {
    readTime: '9 min read',
    date: 'Oct 2024',
    title: 'Building AI Teams That Last',
    summary:
      'The talent shortage is real, but the bigger problem is retention. Creating environments where AI professionals thrive.',
    tags: ['Team Building', 'Culture'],
  },
];

export default function Insights() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insights from the Forge
          </h2>
          <p className="text-lg text-[#B3B3B3]">
            Thoughts on AI architecture, strategy, and transformation.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#CC0000]/30 transition-colors duration-300 cursor-pointer group"
            >
              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
                <span>{article.readTime}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#CC0000] transition-colors duration-300">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-[#B3B3B3] mb-4 leading-relaxed">{article.summary}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <span className="text-sm text-[#CC0000] font-medium group-hover:underline">
                Read Article →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
