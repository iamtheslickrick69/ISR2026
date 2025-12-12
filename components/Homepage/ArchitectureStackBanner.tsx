'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TechStackItem = {
  id: string;
  name: string;
  shortLabel?: string;
  category:
    | 'AI & Intelligence'
    | 'Infrastructure'
    | 'Security'
    | 'Frontend'
    | 'Data'
    | 'Automation'
    | 'Collaboration';
  description: string;
  logo: string;
};

const TECH_STACK: TechStackItem[] = [
  {
    id: 'claude-opus',
    name: 'Claude 4.1 Opus',
    shortLabel: 'Opus',
    category: 'AI & Intelligence',
    description: 'Enterprise-grade reasoning and orchestration.',
    logo: 'claude-opus',
  },
  {
    id: 'claude-sonnet',
    name: 'Claude 4.5 Sonnet',
    shortLabel: 'Sonnet',
    category: 'AI & Intelligence',
    description: 'High-speed, high-context AI for real-time systems.',
    logo: 'claude-sonnet',
  },
  {
    id: 'claude-haiku',
    name: 'Claude 4.5 Haiku',
    shortLabel: 'Haiku',
    category: 'AI & Intelligence',
    description: 'Ultra-fast, low-latency AI for production workloads.',
    logo: 'claude-haiku',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT (gpt-5.1 & gpt-4.1)',
    shortLabel: 'ChatGPT',
    category: 'AI & Intelligence',
    description: 'Multimodal AI with system-level capabilities.',
    logo: 'chatgpt-5',
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'AI & Intelligence',
    description: 'Pipelines, agents, and RAG framework orchestration.',
    logo: 'langchain',
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    category: 'Data',
    description: 'Vector search and long-term AI memory.',
    logo: 'pinecone',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Infrastructure',
    description: 'Cloud backbone for compute, storage, and networking.',
    logo: 'aws',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Infrastructure',
    description: 'Containerization and reproducible builds.',
    logo: 'docker',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Infrastructure',
    description: 'Autoscaling, orchestration, and zero-downtime deploys.',
    logo: 'kubernetes',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Infrastructure',
    description: 'Edge functions, frontend hosting, and CI/CD.',
    logo: 'vercel',
  },
  {
    id: 'palo-alto',
    name: 'Palo Alto Networks',
    category: 'Security',
    description: 'Zero-Trust enterprise security for critical systems.',
    logo: 'paloalto',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'Security',
    description: 'DDoS protection, global CDN, and edge workers.',
    logo: 'cloudflare',
  },
  {
    id: 'nextjs',
    name: 'Next.js 14',
    category: 'Frontend',
    description: 'React framework with SSR, SSG, and App Router.',
    logo: 'nextjs',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Type-safe large-scale application development.',
    logo: 'typescript',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first styling and cohesive design system.',
    logo: 'tailwind',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'Data',
    description: 'Relational database with ACID guarantees.',
    logo: 'postgres',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Data',
    description: 'Real-time cache and in-memory data store.',
    logo: 'redis',
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'Automation',
    description: 'Workflow automation, AI agents, and integrations.',
    logo: 'n8n',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Collaboration',
    description: 'Version control and developer collaboration.',
    logo: 'github',
  },
];

// TechStackCard component
function TechStackCard({ item }: { item: TechStackItem }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[260px] md:w-[280px] h-[120px] bg-gradient-to-br from-[#171717]/80 to-[#262626]/60 border border-white/5 rounded-xl px-4 py-4 flex items-center gap-4 cursor-pointer backdrop-blur-sm"
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
      whileHover={{
        y: -3,
        scale: 1.01,
        borderColor: 'rgba(249, 115, 22, 0.4)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(249, 115, 22, 0.2)',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Logo Badge */}
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#262626] to-[#171717] border border-white/10 flex-shrink-0">
        <div className="relative w-5 h-5">
          <Image
            src={`/logos/TechStack/${item.logo}.svg`}
            alt={item.name}
            fill
            className="object-contain opacity-90"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] md:text-[14px] font-medium text-[#FAFAFA] truncate">
          {item.name}
        </h4>
        <span className="text-[10px] uppercase tracking-[0.12em] text-[#F97316]/70 font-medium">
          {item.category}
        </span>
        <p className="mt-1 text-[11px] md:text-[12px] leading-snug text-[#A3A3A3] line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// MarqueeRow component
function MarqueeRow({
  items,
  direction,
  speed = 40,
  isPaused,
}: {
  items: TechStackItem[];
  direction: 'left' | 'right';
  speed?: number;
  isPaused: boolean;
}) {
  const duplicated = [...items, ...items];
  const baseX = direction === 'left' ? '0%' : '-50%';
  const targetX = direction === 'left' ? '-50%' : '0%';

  return (
    <motion.div
      className="flex gap-4 md:gap-5"
      animate={{
        x: isPaused ? undefined : [baseX, targetX],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: speed,
        ease: 'linear',
      }}
      style={{
        willChange: 'transform',
      }}
    >
      {duplicated.map((item, idx) => (
        <TechStackCard key={`${item.id}-${idx}`} item={item} />
      ))}
    </motion.div>
  );
}

export default function ArchitectureStackBanner() {
  const [isHovered, setIsHovered] = useState(false);

  // Split stack into two rows
  const rowOneItems = TECH_STACK.slice(0, Math.ceil(TECH_STACK.length / 2));
  const rowTwoItems = TECH_STACK.slice(Math.ceil(TECH_STACK.length / 2));

  return (
    <section
      id="architecture-stack"
      className="py-20 md:py-24 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#FAFAFA]">
            Architecture, powered by a battle-tested stack.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#A3A3A3] font-light">
            We combine enterprise infrastructure with modern AI tooling so your systems scale under
            real-world pressure.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div
          className="relative mt-8 md:mt-10 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Edge Fades */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="w-full h-full" />
          </div>

          {/* Ambient Glow Line */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#F97316]/20 to-transparent blur-[1px] opacity-40 z-0" />

          {/* Scan Effect */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: 'linear',
            }}
          >
            <div className="w-[30%] h-full bg-gradient-to-r from-transparent via-[#F97316]/5 to-transparent" />
          </motion.div>

          {/* Marquee Rows */}
          <div className="space-y-3 md:space-y-4 relative z-5">
            <div
              style={{
                maskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <MarqueeRow items={rowOneItems} direction="left" speed={40} isPaused={isHovered} />
            </div>
            <div
              style={{
                maskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <MarqueeRow items={rowTwoItems} direction="right" speed={48} isPaused={isHovered} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
