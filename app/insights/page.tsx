'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InsightsPage() {

  const featuredArticle = {
    id: 1,
    title: "Why 90% of AI Projects Fail After POC",
    excerpt: "The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.",
    readTime: "8 min read",
    date: "DEC 2024",
    slug: "why-90-percent-ai-projects-fail"
  };

  const articles = [
    {
      id: 2,
      title: "The Architecture-First Approach to AI",
      excerpt: "Building AI systems that scale requires thinking beyond the model.",
      date: "DEC 2024",
      slug: "architecture-first-approach"
    },
    {
      id: 3,
      title: "Humans Over Automation: A Framework",
      excerpt: "AI should amplify human capability, not replace it.",
      date: "NOV 2024",
      slug: "humans-over-automation"
    },
    {
      id: 4,
      title: "The True Cost of Technical Debt in AI",
      excerpt: "Shortcuts in AI development compound exponentially.",
      date: "NOV 2024",
      slug: "true-cost-technical-debt"
    },
    {
      id: 5,
      title: "Beyond the Hype: Real AI Capabilities",
      excerpt: "Separating what AI can actually do from what marketers claim.",
      date: "OCT 2024",
      slug: "beyond-the-hype"
    },
    {
      id: 6,
      title: "Building AI Teams That Last",
      excerpt: "The talent shortage is real, but the bigger problem is retention.",
      date: "OCT 2024",
      slug: "building-ai-teams"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-12">
        <div className="max-w-7xl mx-auto text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Insights from the Forge
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
          >
            Thoughts on AI architecture, strategy, and transformation.
          </motion.h1>

          {/* Orange Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto"
          >
            Deep dives into building AI systems that last. No hype, no fluff — just hard-won insights from the frontlines of enterprise AI.
          </motion.p>

        </div>
      </section>

      {/* Featured Article (Large Card) */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group p-10 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-xl hover:shadow-blue-500/20 cursor-pointer"
          >

            {/* Label */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                Featured
              </span>
            </div>

            {/* Meta: Read time + Date */}
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
              <span>{featuredArticle.readTime}</span>
              <span>•</span>
              <span>{featuredArticle.date}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {featuredArticle.title}
            </h2>

            {/* Blue Underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />

            {/* Excerpt */}
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>

            {/* Read Link */}
            <Link
              href={`/insights/${featuredArticle.slug}`}
              className="inline-flex items-center gap-2 text-blue-500 font-semibold group-hover:gap-4 transition-all"
            >
              <span>Read Article</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </motion.article>

        </div>
      </section>

      {/* Article Grid (5 Minimal Cards) */}
      <section className="px-4 py-12 pb-32">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {articles.map((article, index) => {
              // Alternate colors: index 0,2,4 = orange, index 1,3 = blue
              const isOrange = index % 2 === 0;
              const borderColor = isOrange ? 'orange' : 'blue';

              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-400 shadow-lg cursor-pointer ${
                    isOrange
                      ? 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                      : 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                  } hover:-translate-y-2`}
                >

                  {/* Date */}
                  <div className="text-sm text-gray-500 mb-4">
                    {article.date}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-bold text-white mb-4 leading-tight transition-colors ${
                    isOrange
                      ? 'group-hover:text-orange-400'
                      : 'group-hover:text-blue-400'
                  }`}>
                    {article.title}
                  </h3>

                  {/* Colored Underline */}
                  <div className={`w-16 h-1 mb-6 ${
                    isOrange
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                  }`} />

                  {/* Excerpt */}
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Read Link */}
                  <Link
                    href={`/insights/${article.slug}`}
                    className={`inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${
                      isOrange ? 'text-orange-500' : 'text-blue-500'
                    }`}
                  >
                    <span>Read Article</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
}
