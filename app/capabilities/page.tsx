'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { CapabilityCard } from '@/components/CapabilityCard';

// VideoBackground component
function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/yeet.mp4"
          type="video/mp4"
        />
      </video>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

export default function Capabilities() {
  return (
    <>
      <VideoBackground />

      <div className="relative z-10 min-h-screen bg-transparent text-white">

        {/* Capabilities Section */}
        <section className="relative px-4 py-20 pt-32">
          <div className="max-w-6xl mx-auto">

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What We Build
              </h2>
              <div className="h-1 w-24 bg-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                We build full-stack intelligence systems—from first pixel to final deployment.
              </p>

              {/* Production Guarantee Badge */}
              <div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3"
                style={{
                  boxShadow: '0 0 30px rgba(255, 107, 53, 0.2)',
                }}
              >
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm md:text-base font-semibold text-orange-300">
                  0 Revisions. 100% Production Success.
                </span>
              </div>
            </motion.div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">

              {/* Capability Card 1 */}
              <CapabilityCard
                number="01"
                icon="📈"
                title="Revenue Systems"
                description="AI systems that predict churn, optimize pricing, and automate upsells—turning behavioral data into recurring revenue."
                details={[
                  "Churn prediction & intervention",
                  "Dynamic pricing optimization",
                  "Upsell automation workflows",
                  "Customer lifetime value modeling"
                ]}
                example="Case study: Series B SaaS platform"
              />

              {/* Capability Card 2 */}
              <CapabilityCard
                number="02"
                icon="⚡"
                title="Operations Automation"
                description="Workflow intelligence that eliminates friction, reduces costs, and optimizes internal processes end-to-end."
                details={[
                  "Process automation & orchestration",
                  "Workflow optimization systems",
                  "Cost reduction intelligence",
                  "Internal tool integration"
                ]}
                example="Case study: Available on request"
              />

              {/* Capability Card 3 */}
              <CapabilityCard
                number="03"
                icon="🧠"
                title="Decision Intelligence"
                description="Real-time dashboards that surface the metrics that matter—not the vanity metrics that don't."
                details={[
                  "Executive decision dashboards",
                  "Predictive analytics systems",
                  "Real-time insight platforms",
                  "Strategic clarity tools"
                ]}
                example="Case study: Series A startup"
              />

              {/* Capability Card 4 */}
              <CapabilityCard
                number="04"
                icon="🗄️"
                title="Data Infrastructure"
                description="Clean data pipelines, vector databases, API integrations, and multi-agent architectures that scale."
                details={[
                  "Data pipeline architecture",
                  "Vector database implementation",
                  "API integration layers",
                  "Multi-agent orchestration"
                ]}
                example="Case study: Available on request"
              />

              {/* Capability Card 5 */}
              <CapabilityCard
                number="05"
                icon="🔨"
                title="Custom Systems"
                description="If it requires precision, architecture, and intelligence—we build it. No templates. No shortcuts."
                details={[
                  "Bespoke AI architectures",
                  "Custom model training",
                  "Specialized tooling",
                  "Unique business logic"
                ]}
                example="Every project is custom"
              />

              {/* Capability Card 6 */}
              <CapabilityCard
                number="06"
                icon="🚀"
                title="Production Deployment"
                description="We ship systems that scale, not demos that break. Production-first architecture from day one."
                details={[
                  "Production-grade infrastructure",
                  "Scalability from first deploy",
                  "Zero-downtime deployments",
                  "Monitoring & observability"
                ]}
                example="100% success rate"
              />

            </div>

          </div>
        </section>

      </div>
    </>
  );
}
