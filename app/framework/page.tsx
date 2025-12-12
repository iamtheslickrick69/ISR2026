'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.playbackRate = 0.9;
    };

    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
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
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/mainheader4k.mp4"
          type="video/mp4"
        />
      </video>
      {/* Medium-dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

export default function Framework() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      number: "01",
      shortTitle: "Discovery",
      title: "DISCOVERY & ALIGNMENT",
      icon: "🔍",
      subtitle: "We don't start building until the mission is clear.",
      description: "Deep stakeholder interviews, system audits, goal alignment, success metrics definition. We ensure everyone understands the vision before any code is written.",
      accentColor: 'orange'
    },
    {
      id: 1,
      number: "02",
      shortTitle: "Blueprint",
      title: "BLUEPRINT",
      icon: "📐",
      subtitle: "Architecture first. Features second.",
      description: "System architecture design, data models, API contracts, infrastructure planning. We design the foundation that will support everything you'll build.",
      accentColor: 'blue'
    },
    {
      id: 2,
      number: "03",
      shortTitle: "Construction",
      title: "CONSTRUCTION",
      icon: "🔨",
      subtitle: "Ship systems, not prototypes.",
      description: "Production-grade development, real-time collaboration, continuous testing. We build with the end state in mind—systems designed to scale from day one.",
      accentColor: 'orange'
    },
    {
      id: 3,
      number: "04",
      shortTitle: "Integration",
      title: "INTEGRATION",
      icon: "🔗",
      subtitle: "Intelligence flows where data connects.",
      description: "API connections, third-party services, data pipelines, authentication systems. We ensure your intelligence layer communicates seamlessly with your existing stack.",
      accentColor: 'blue'
    },
    {
      id: 4,
      number: "05",
      shortTitle: "Deployment",
      title: "DEPLOYMENT",
      icon: "🚀",
      subtitle: "Launch with confidence, not hope.",
      description: "Infrastructure setup, monitoring systems, observability, security hardening. We deploy with the same rigor we design—ensuring your system is bulletproof before it goes live.",
      accentColor: 'orange'
    },
    {
      id: 5,
      number: "06",
      shortTitle: "Evolution",
      title: "EVOLUTION",
      icon: "📈",
      subtitle: "Great systems improve over time.",
      description: "Performance optimization, feature iteration, continuous improvement. We build systems that learn, adapt, and compound in value over time.",
      accentColor: 'blue'
    }
  ];

  const techStack = [
    { name: "Claude API", icon: "🤖", category: "AI/ML" },
    { name: "GPT-4", icon: "⚡", category: "AI/ML" },
    { name: "Pinecone", icon: "📊", category: "Vector DB" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Frontend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "Node.js", icon: "💚", category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Vercel", icon: "▲", category: "Deploy" },
    { name: "Docker", icon: "🐳", category: "Container" }
  ];

  return (
    <>
      {/* Video Background */}
      <VideoBackground />

      {/* Page Content */}
      <div className="relative z-10 min-h-screen bg-transparent text-white">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-12">
          <div className="max-w-6xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              The Forge Framework
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              You can't scale what wasn't architected to survive.
            </motion.p>

          </div>
        </section>

        {/* Phase Navigation */}
        <section className="px-4 pb-8">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">

              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`group px-6 py-4 rounded-2xl transition-all duration-300 ${
                    activePhase === phase.id
                      ? `bg-white/[0.06] border-2 shadow-lg ${
                          phase.accentColor === 'blue'
                            ? 'border-blue-500/60 shadow-blue-500/20'
                            : 'border-orange-500/60 shadow-orange-500/20'
                        }`
                      : `bg-white/[0.02] border border-white/10 ${
                          phase.accentColor === 'blue'
                            ? 'hover:border-blue-500/30'
                            : 'hover:border-orange-500/30'
                        }`
                  }`}
                >
                  <div className={`text-2xl font-bold mb-1 ${
                    phase.accentColor === 'blue' ? 'text-blue-500' : 'text-orange-500'
                  }`}>
                    {phase.number}
                  </div>
                  <div className={`text-sm font-medium ${
                    activePhase === phase.id ? 'text-white' : 'text-gray-400'
                  }`}>
                    {phase.shortTitle}
                  </div>
                </button>
              ))}

            </div>
          </div>
        </section>

        {/* Phase Content */}
        <section className="px-4 py-12">
          <AnimatePresence mode="wait">
            {phases.map((phase) => (
              activePhase === phase.id && (
                <motion.div
                  key={`phase-${phase.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className={`group p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-400 shadow-xl hover:-translate-y-1 ${
                    phase.accentColor === 'blue'
                      ? 'border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/20'
                      : 'border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/20'
                  }`}>

                    {/* Icon */}
                    <div className="text-6xl mb-6">{phase.icon}</div>

                    {/* Phase Number */}
                    <div className={`text-5xl font-bold mb-4 ${
                      phase.accentColor === 'blue' ? 'text-blue-500/30' : 'text-orange-500/30'
                    }`}>
                      {phase.number}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {phase.title}
                    </h2>

                    {/* Colored Underline */}
                    <div className={`w-24 h-1 mb-6 ${
                      phase.accentColor === 'blue'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600'
                    }`} />

                    {/* Subtitle */}
                    <p className="text-xl text-gray-300 mb-6 italic">
                      {phase.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {phase.description}
                    </p>

                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </section>

        {/* Tech Stack Banner - SLOW, 6 AT A TIME */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">

            {/* Label */}
            <div className="text-center mb-8">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Our Technology
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Architecture, powered by a battle-tested stack.
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                We combine enterprise infrastructure with modern AI tooling so your systems scale, perform, and endure.
              </p>
            </div>

            {/* Scrolling Banner */}
            <div className="relative overflow-hidden py-8">
              <motion.div
                className="flex gap-12"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  duration: 60, // SLOW: 60 seconds for full loop
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* First set of logos */}
                {techStack.map((tech, index) => (
                  <div key={`tech-${index}`} className="flex-shrink-0 w-48 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <div className="text-white font-semibold">{tech.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {techStack.map((tech, index) => (
                  <div key={`tech-dup-${index}`} className="flex-shrink-0 w-48 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <div className="text-white font-semibold">{tech.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Fade Edges */}
              <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />

            </div>

          </div>
        </section>

        {/* Quote Section */}
        <section className="px-4 py-16 pb-32">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center"
            >
              <p className="text-2xl md:text-3xl text-white mb-4">
                "Most companies build features.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-orange-500">
                We build foundations."
              </p>
            </motion.div>

          </div>
        </section>

      </div>
    </>
  );
}
