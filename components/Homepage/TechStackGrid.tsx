'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechCard {
  name: string;
  label: string;
  logo: string;
}

const techStack: TechCard[] = [
  // AI MODEL LAYER (TOP ROW)
  {
    name: 'Claude 3.5 Sonnet',
    label: 'Enterprise reasoning & orchestration',
    logo: '/logos/TechStack/claude-sonnet.svg',
  },
  {
    name: 'Claude 3.5 Haiku',
    label: 'High-speed AI for real-time systems',
    logo: '/logos/TechStack/claude-haiku.svg',
  },
  {
    name: 'Claude 3 Opus',
    label: 'Advanced intelligence & complex analysis',
    logo: '/logos/TechStack/claude-opus.svg',
  },
  {
    name: 'ChatGPT 5.1',
    label: 'Multimodal AI with system-level capabilities',
    logo: '/logos/TechStack/chatgpt-5.svg',
  },
  {
    name: 'GPT-4.1',
    label: 'Vision, reasoning, and agentic workflows',
    logo: '/logos/TechStack/openai-gpt41.svg',
  },

  // INTELLIGENCE & AI TOOLING
  {
    name: 'LangChain',
    label: 'Pipelines, agents & RAG framework',
    logo: '/logos/TechStack/langchain.svg',
  },
  {
    name: 'Pinecone',
    label: 'Vector search & long-term AI memory',
    logo: '/logos/TechStack/pinecone.svg',
  },

  // INFRASTRUCTURE & DEPLOYMENT
  {
    name: 'AWS',
    label: 'Cloud backbone for compute & storage',
    logo: '/logos/TechStack/aws.svg',
  },
  {
    name: 'Docker',
    label: 'Containerization & reproducible builds',
    logo: '/logos/TechStack/docker.svg',
  },
  {
    name: 'Kubernetes',
    label: 'Autoscaling & orchestration',
    logo: '/logos/TechStack/kubernetes.svg',
  },
  {
    name: 'Vercel',
    label: 'Edge functions & CI/CD',
    logo: '/logos/TechStack/vercel.svg',
  },

  // SECURITY & PROTECTION
  {
    name: 'Palo Alto Networks',
    label: 'Zero-Trust enterprise security',
    logo: '/logos/TechStack/paloalto.svg',
  },
  {
    name: 'Cloudflare',
    label: 'DDoS protection & global CDN',
    logo: '/logos/TechStack/cloudflare.svg',
  },

  // FRAMEWORKS & DEVELOPMENT
  {
    name: 'Next.js 14',
    label: 'React framework with SSR/SSG',
    logo: '/logos/TechStack/nextjs.svg',
  },
  {
    name: 'TypeScript',
    label: 'Type-safe large-scale development',
    logo: '/logos/TechStack/typescript.svg',
  },
  {
    name: 'Tailwind CSS',
    label: 'Utility-first styling system',
    logo: '/logos/TechStack/tailwind.svg',
  },

  // DATA & STORAGE
  {
    name: 'PostgreSQL',
    label: 'Relational database with ACID guarantees',
    logo: '/logos/TechStack/postgres.svg',
  },
  {
    name: 'Redis',
    label: 'Real-time cache & in-memory store',
    logo: '/logos/TechStack/redis.svg',
  },

  // AUTOMATION & INTEGRATION
  {
    name: 'n8n',
    label: 'Workflow automation & agents',
    logo: '/logos/TechStack/n8n.svg',
  },
  {
    name: 'GitHub',
    label: 'Version control & collaboration',
    logo: '/logos/TechStack/github.svg',
  },
];

export default function TechStackGrid() {
  return (
    <section
      id="architecture-techstack"
      style={{
        paddingTop: '180px',
        paddingBottom: '180px',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '760px',
          margin: '0 auto 80px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: '#FAFAFA',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}
        >
          Architecture, powered by a battle-tested stack.
        </h2>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#A1A1AA',
          }}
        >
          We combine enterprise infrastructure with modern AI tooling so your systems scale under
          real-world pressure.
        </p>
      </motion.div>

      {/* Tech Stack Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="tech-stack-grid"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.03,
              y: -10,
              borderColor: 'rgba(249, 115, 22, 0.35)',
              boxShadow: '0 0 25px rgba(249, 115, 22, 0.45)',
            }}
            style={{
              background: 'rgba(15, 15, 17, 0.8)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '24px',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: '40px',
                height: '40px',
                position: 'relative',
              }}
            >
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                fill
                style={{
                  objectFit: 'contain',
                  transition: 'filter 0.2s ease',
                }}
                loading="lazy"
              />
            </div>

            {/* Name */}
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#FAFAFA',
                margin: 0,
              }}
            >
              {tech.name}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '13px',
                color: '#71717A',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {tech.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .tech-stack-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .tech-stack-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
