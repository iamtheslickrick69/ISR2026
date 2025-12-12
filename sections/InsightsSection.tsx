'use client';

import React from 'react';
import { motion } from 'framer-motion';

type InsightTag =
  | 'Strategy'
  | 'Enterprise AI'
  | 'Architecture'
  | 'Best Practices'
  | 'Philosophy'
  | 'Human-AI Collaboration'
  | 'Technical'
  | 'Long-term Value'
  | 'Reality Check'
  | 'Decision Making'
  | 'Team Building'
  | 'Culture';

interface InsightArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  tags: InsightTag[];
  href: string;
}

const INSIGHTS: InsightArticle[] = [
  {
    id: '30-percent-fail-after-poc',
    title: 'Why 30% of AI Projects Fail After POC',
    description:
      'The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.',
    readTime: '8 min read',
    date: 'Dec 2024',
    tags: ['Strategy', 'Enterprise AI'],
    href: '#',
  },
  {
    id: 'architecture-first-approach',
    title: 'The Architecture-First Approach to AI',
    description:
      'Building AI systems that scale requires thinking beyond the model. Infrastructure, data pipelines, and human workflows must align.',
    readTime: '6 min read',
    date: 'Dec 2024',
    tags: ['Architecture', 'Best Practices'],
    href: '#',
  },
  {
    id: 'humans-over-automation',
    title: 'Humans Over Automation: A Framework',
    description:
      'AI should amplify human capability, not replace it. How we design systems that empower rather than eliminate.',
    readTime: '10 min read',
    date: 'Nov 2024',
    tags: ['Philosophy', 'Human-AI Collaboration'],
    href: '#',
  },
  {
    id: 'technical-debt-in-ai',
    title: 'The True Cost of Technical Debt in AI',
    description:
      'Shortcuts in AI development compound exponentially. Why we build for the long term from day one.',
    readTime: '7 min read',
    date: 'Nov 2024',
    tags: ['Technical', 'Long-term Value'],
    href: '#',
  },
  {
    id: 'beyond-the-hype',
    title: 'Beyond the Hype: Real AI Capabilities',
    description:
      'Separating what AI can actually do from what marketers claim. A practical guide for decision makers.',
    readTime: '5 min read',
    date: 'Oct 2024',
    tags: ['Reality Check', 'Decision Making'],
    href: '#',
  },
  {
    id: 'building-ai-teams',
    title: 'Building AI Teams That Last',
    description:
      'The talent shortage is real, but the bigger problem is retention. Creating environments where AI professionals thrive.',
    readTime: '9 min read',
    date: 'Oct 2024',
    tags: ['Team Building', 'Culture'],
    href: '#',
  },
];

function InsightCard({ article }: { article: InsightArticle }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -4,
        boxShadow: '0 18px 40px rgba(15,23,42,0.20)',
      }}
      className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 transition-transform duration-200"
    >
      <div className="space-y-3">
        {/* Meta Row */}
        <div className="flex items-center text-[11px] font-medium uppercase tracking-wide text-neutral-500">
          <span>{article.readTime}</span>
          <span className="mx-1.5 h-1 w-1 rounded-full bg-neutral-300" />
          <span>{article.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-[17px] md:text-[18px] font-semibold leading-snug text-neutral-900">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 leading-relaxed">{article.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.a
        href={article.href}
        whileHover={{ x: 2 }}
        className="mt-4 inline-flex items-center text-sm font-semibold text-[#F97316] hover:underline"
      >
        Read Article
        <span className="ml-1 text-[13px]">→</span>
      </motion.a>
    </motion.article>
  );
}

export default function InsightsSection() {
  return (
    <section id="insights" className="relative w-full bg-black py-16 md:py-24">
      {/* Top Angular Cutout */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div
          className="h-16 w-full max-w-6xl bg-black"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 40%, calc(100% - 72px) 100%, 72px 100%, 0 40%)',
          }}
        />
      </div>

      {/* Bottom Angular Cutout */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div
          className="h-16 w-full max-w-6xl bg-black"
          style={{
            clipPath: 'polygon(0 60%, 72px 0, calc(100% - 72px) 0, 100% 60%, 100% 100%, 0 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* White Console Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-white px-4 py-8 md:px-10 md:py-14"
          style={{
            boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
              Insights from the Forge
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Thoughts on AI architecture, strategy, and transformation.
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((article) => (
              <InsightCard key={article.id} article={article} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
