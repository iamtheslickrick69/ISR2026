'use client';

import Image from 'next/image';

interface Tech {
  name: string;
  category: string;
  description: string;
  logo: string;
}

// Banner 1 - First 10 technologies (scrolls right to left)
const firstBannerTechs: Tech[] = [
  {
    name: 'Claude 4.5 Sonnet',
    category: 'AI & INTELLIGENCE',
    description: 'High-speed, high-context AI for real-time systems.',
    logo: '/logos/claude-sonnet.svg',
  },
  {
    name: 'Claude 4.5 Haiku',
    category: 'AI & INTELLIGENCE',
    description: 'Ultra-fast, low-latency AI for production workloads.',
    logo: '/logos/claude-haiku.svg',
  },
  {
    name: 'Claude 4.1 Opus',
    category: 'AI & INTELLIGENCE',
    description: 'Advanced reasoning and complex analysis.',
    logo: '/logos/claude-opus.svg',
  },
  {
    name: 'ChatGPT 5.1',
    category: 'AI & INTELLIGENCE',
    description: 'Multimodal AI with system-level capabilities.',
    logo: '/logos/chatgpt-51.svg',
  },
  {
    name: 'LangChain',
    category: 'AI PIPELINES',
    description: 'Pipelines, agents & RAG orchestration.',
    logo: '/logos/langchain.svg',
  },
  {
    name: 'Pinecone',
    category: 'VECTOR MEMORY',
    description: 'Vector search and long-term AI memory.',
    logo: '/logos/pinecone.svg',
  },
  {
    name: 'AWS',
    category: 'CLOUD INFRASTRUCTURE',
    description: 'Cloud backbone for compute & storage.',
    logo: '/logos/aws.svg',
  },
  {
    name: 'Docker',
    category: 'INFRASTRUCTURE',
    description: 'Containerization & reproducible builds.',
    logo: '/logos/docker.svg',
  },
  {
    name: 'Kubernetes',
    category: 'INFRASTRUCTURE',
    description: 'Autoscaling & orchestration.',
    logo: '/logos/kubernetes.svg',
  },
  {
    name: 'Vercel',
    category: 'EDGE & DEPLOY',
    description: 'Edge functions & frontend CI/CD.',
    logo: '/logos/vercel.svg',
  },
];

// Banner 2 - Remaining technologies (scrolls left to right)
const secondBannerTechs: Tech[] = [
  {
    name: 'Palo Alto Networks',
    category: 'SECURITY',
    description: 'Zero-Trust enterprise security.',
    logo: '/logos/paloalto.svg',
  },
  {
    name: 'Cloudflare',
    category: 'SECURITY',
    description: 'DDoS protection & global CDN.',
    logo: '/logos/cloudflare.svg',
  },
  {
    name: 'Next.js 14',
    category: 'FRONTEND',
    description: 'React framework with SSR/SSG and App Router.',
    logo: '/logos/nextjs.svg',
  },
  {
    name: 'TypeScript',
    category: 'FRONTEND',
    description: 'Type-safe large-scale development.',
    logo: '/logos/typescript.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'FRONTEND',
    description: 'Utility-first styling and cohesive design system.',
    logo: '/logos/tailwind.svg',
  },
  {
    name: 'PostgreSQL',
    category: 'DATA',
    description: 'Relational database with ACID guarantees.',
    logo: '/logos/postgres.svg',
  },
  {
    name: 'Redis',
    category: 'DATA',
    description: 'In-memory cache & real-time store.',
    logo: '/logos/redis.svg',
  },
  {
    name: 'n8n',
    category: 'AUTOMATION',
    description: 'Workflow automation & AI agents.',
    logo: '/logos/n8n.svg',
  },
  {
    name: 'GitHub',
    category: 'COLLABORATION',
    description: 'Version control & collaboration.',
    logo: '/logos/github.svg',
  },
];

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="flex-shrink-0 w-40 p-5 rounded-lg border border-white/20 bg-white/10 backdrop-blur-lg transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105">
      {/* Tech Logo/Icon */}
      <div className="mb-2 flex justify-center">
        <div className="w-9 h-9 flex items-center justify-center">
          <Image
            src={tech.logo}
            alt={tech.name}
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      </div>

      {/* Category Label */}
      <p
        className="text-[0.5rem] uppercase tracking-wider text-[#ff6b35] mb-1 font-semibold text-center"
      >
        {tech.category}
      </p>

      {/* Tech Name */}
      <h3
        className="text-white text-xs font-bold mb-1 text-center tracking-tight"
      >
        {tech.name}
      </h3>

      {/* Description */}
      <p
        className="text-white/85 text-[0.65rem] leading-relaxed text-center"
      >
        {tech.description}
      </p>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="relative overflow-hidden py-16" style={{ backgroundColor: '#000000' }}>
      {/* Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 px-6">
          <p className="text-[0.5rem] uppercase tracking-[0.15em] text-white/80 mb-2 font-semibold">
            Our Technology
          </p>

          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
          >
            Architecture, powered by a<br className="hidden md:block" />
            battle-tested stack.
          </h2>

          <p
            className="text-xs text-white/90 max-w-xl mx-auto leading-relaxed"
          >
            We combine enterprise infrastructure with modern AI tooling so your systems scale under real-world pressure.
          </p>
        </div>

        {/* Single Banner - Scrolling Right to Left with Edge Blur */}
        <div
          className="overflow-hidden relative flex items-center justify-center"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 225px, black calc(100% - 225px), transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 225px, black calc(100% - 225px), transparent 100%)',
          }}
        >
          <div className="flex gap-3 animate-scroll-left">
            {/* First set */}
            {firstBannerTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {firstBannerTechs.map((tech) => (
              <TechCard key={`${tech.name}-dup`} tech={tech} />
            ))}
            {/* Triple for extra smoothness */}
            {firstBannerTechs.map((tech) => (
              <TechCard key={`${tech.name}-dup2`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 18s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
