'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BlogPost {
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  link: string;
}

export default function BlogInsights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts: BlogPost[] = [
    {
      readTime: '6 MIN READ',
      date: 'DEC 2024',
      title: 'Why 90% of AI Projects Fail After POC',
      excerpt:
        'The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.',
      category: 'Strategy',
      tags: ['Enterprise AI'],
      link: '/insights/ai-projects-fail',
    },
    {
      readTime: '8 MIN READ',
      date: 'DEC 2024',
      title: 'The Architecture-First Approach to AI',
      excerpt:
        'Building AI systems that scale requires thinking beyond the model. Infrastructure, data pipelines, and human workflows must align.',
      category: 'Architecture',
      tags: ['Best Practices'],
      link: '/insights/architecture-first',
    },
    {
      readTime: '10 MIN READ',
      date: 'NOV 2024',
      title: 'Humans Over Automation: A Framework',
      excerpt:
        'AI should simplify human capability, not replace it. How we design systems that empower rather than eliminate.',
      category: 'Philosophy',
      tags: ['Human-AI Collaboration'],
      link: '/insights/humans-over-automation',
    },
    {
      readTime: '7 MIN READ',
      date: 'NOV 2024',
      title: 'The True Cost of Technical Debt in AI',
      excerpt:
        'Shortcuts in AI development compound exponentially. Why we build for the long term from day one.',
      category: 'Technical',
      tags: ['Long-term Value'],
      link: '/insights/technical-debt',
    },
    {
      readTime: '9 MIN READ',
      date: 'OCT 2024',
      title: 'Beyond the Hype: Real AI Capabilities',
      excerpt:
        'Separating what AI can actually do from what marketers claim. A practical guide for decision-makers.',
      category: 'Reality Check',
      tags: ['Decision Making'],
      link: '/insights/real-ai-capabilities',
    },
    {
      readTime: '5 MIN READ',
      date: 'OCT 2024',
      title: 'Building AI Teams That Last',
      excerpt:
        'The talent shortage is real, but the bigger problem is retention. Creating environments where AI professionals thrive.',
      category: 'Team Building',
      tags: ['Culture'],
      link: '/insights/ai-teams',
    },
  ];

  return (
    <section className="relative mt-[200px] mb-[200px] overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Top carved edge - black to white transition */}
      <div
        className="absolute top-[-100px] left-0 right-0 h-[100px] bg-black z-10"
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% 100%, 55% 100%, 53% 80%, 47% 80%, 45% 100%, 0 100%)',
        }}
      />

      {/* Main blog section */}
      <div className="relative w-full py-[120px]" style={{ zIndex: 10 }}>

        {/* Content Container */}
        <div ref={ref} className="relative max-w-[1400px] mx-auto px-10 z-[1]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="block text-[11px] font-medium tracking-[4px] text-[#F97316] uppercase mb-6 opacity-90">
              INSIGHTS FROM THE FORGE
            </span>

            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium text-[#FAFAFA] leading-[1.05] tracking-tight mb-6">
              Thoughts on AI architecture,
              <br />
              strategy, and transformation.
            </h2>

            <p className="text-[17px] text-[#A3A3A3] max-w-[600px] mx-auto leading-relaxed font-light">
              Deep dives into building AI systems that last. No hype, no fluff — just hard-won
              insights from the frontlines of enterprise AI.
            </p>
          </motion.div>

          {/* Blog Grid - Featured Articles (First 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-[60px]">
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#171717]/70 to-[#262626]/50 backdrop-blur-sm border border-white/[0.05] rounded-xl p-7 cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[#F97316]/30"
              >
                {/* Top metadata */}
                <div className="flex items-center gap-3 mb-4 text-[10px] font-medium text-[#737373] tracking-[1px]">
                  <span>{post.readTime}</span>
                  <span className="text-[#F97316]">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-medium text-[#FAFAFA] mb-3 leading-[1.3] tracking-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] text-[#A3A3A3] leading-relaxed mb-5 font-light">{post.excerpt}</p>

                {/* Bottom metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-3 py-1 bg-[#F97316]/[0.15] text-[#F97316] rounded-full font-medium">
                      {post.category}
                    </span>
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-[#737373] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[#FB923C] text-[13px] font-medium flex items-center gap-1">
                    Read Article →
                  </span>
                </div>

                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-[#F97316] to-[#FB923C] transition-all duration-300 group-hover:h-full" />
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/#insights"
              className="inline-block bg-transparent text-[#F97316] px-9 py-3 rounded-lg border border-[#F97316]/40 text-[14px] font-medium cursor-pointer tracking-wide transition-all duration-300 hover:bg-[#F97316]/5 hover:border-[#F97316]/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(249,115,22,0.2)]"
            >
              VIEW ALL INSIGHTS →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom carved edge - white to black transition */}
      <div
        className="absolute bottom-[-100px] left-0 right-0 h-[100px] bg-black z-10"
        style={{
          clipPath:
            'polygon(0 0, 45% 0, 47% 20%, 53% 20%, 55% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      />
    </section>
  );
}
