"use client"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Logo } from "@/components/logo"
import { HeroWallpaper } from "@/components/HeroWallpaper"
import { ArrowUpRight, Mail } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Consulting",
    description:
      "Technical audits, AI roadmaps, and strategic guidance. We diagnose problems and design solutions before writing a single line of code.",
    features: ["Technical Due Diligence", "AI Readiness Assessment", "Architecture Review", "Technology Strategy"],
  },
  {
    number: "02",
    title: "Building",
    description:
      "Full-stack AI development from first pixel to final deployment. We build products that feel inevitable, not improvised.",
    features: ["Custom AI Systems", "Full-Stack Applications", "API Development", "Production Deployment"],
  },
  {
    number: "03",
    title: "Advising",
    description:
      "Fractional CTO services and board-level strategic guidance. Long-term partnership for organizations building with AI.",
    features: ["Fractional Leadership", "Investment Diligence", "Team Building", "Ongoing Strategy"],
  },
]

const projects = [
  {
    year: "2025",
    name: "ubill.io",
    description: "Real-time analytics and predictive modeling",
    stat: "500K+ daily insights",
    tech: ["Next.js", "AI/ML"],
  },
  {
    year: "2024",
    name: "pestctrl.ai",
    description: "Automated extraction with industry-leading accuracy",
    stat: "99.2% accuracy",
    tech: ["Computer Vision"],
  },
  {
    year: "2024",
    name: "Bid My Brace",
    description: "Multi-modal customer service automation",
    stat: "80% faster",
    tech: ["NLP", "React"],
  },
  {
    year: "2025",
    name: "Crew Cam",
    description: "ML models reducing logistics costs",
    stat: "35% savings",
    tech: ["TensorFlow"],
  },
  {
    year: "2024",
    name: "ProShop24/7",
    description: "IoT integration reducing operational downtime",
    stat: "45% reduction",
    tech: ["IoT", "Real-time"],
  },
  {
    year: "2024",
    name: "promptlee",
    description: "Fine-tuned language models for domain-specific apps",
    stat: "10x faster",
    tech: ["LLMs", "API"],
  },
]

const clients = [
  {
    name: "Beehive Rental and Sales",
    description: "Professional equipment rental and sales platform",
    stat: "Southern Utah's leading provider",
    tech: ["Next.js", "E-commerce"],
  },
  {
    name: "Custom Branded Screen Cleaners",
    description: "Specialized cleaning solutions and brand partnerships",
    stat: "Premium quality service",
    tech: ["Service", "Branding"],
  },
]

const team = [
  {
    name: "Crew Cam",
    description: "ML models reducing logistics costs",
    stat: "35% savings",
    tech: ["TensorFlow", "ML"],
  },
  {
    name: "BidMyBrace",
    description: "Multi-modal customer service automation",
    stat: "80% faster",
    tech: ["NLP", "React"],
  },
  {
    name: "BeWeddy",
    description: "Wedding planning and coordination platform",
    stat: "Premium service",
    tech: ["Next.js", "React"],
  },
]

const insights = [
  { date: "Dec 2024", title: "Why 30% of AI Projects Fail After POC", readTime: "8 min" },
  { date: "Dec 2024", title: "The Architecture-First Approach to AI", readTime: "6 min" },
  { date: "Nov 2024", title: "Humans Over Automation: A Framework", readTime: "10 min" },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "clients" | "team">("projects")

  useEffect(() => {
    const reveals = document.querySelectorAll(".fade-in")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          overflow: 'visible',
          zIndex: 0,
          isolation: 'isolate',
        }}
      >
        {/* Magical 3D Hero Wallpaper Background with integrated content */}
        <HeroWallpaper />
      </section>

      {/* PayPro AI Section */}
      <section id="paypro" className="py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-6 pt-32">
          {/* Header */}
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 text-foreground">
                AI isn't coming,<br />it's here.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
                PayPro is focused on decreasing costs and increasing revenue. We are your partners in payments, and our AI partners at{" "}
                <span className="font-semibold text-foreground">Haestus</span>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground">
                Try our products, custom built, or consulting.
              </p>
            </ScrollReveal>
          </div>

          {/* Single Card - Centered */}
          <div className="max-w-2xl mx-auto">
            {/* Increasing Revenue */}
            <ScrollReveal delay={200}>
              <div
                className="relative overflow-hidden rounded-2xl p-10 h-full flex flex-col"
                style={{
                  background: 'linear-gradient(45deg, #1ebda5 0%, #e26a00 50%, #ffe046 100%)',
                  boxShadow: '0 20px 60px -20px rgba(30, 189, 165, 0.5)',
                }}
              >
                <div className="relative z-10">
                  <p className="text-sm font-mono tracking-[0.2em] text-white/90 mb-3">INCREASING REVENUE</p>
                  <h3 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    #1 AI<br />Implementation
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-8">
                    From custom AI agents to full implementation consulting, we build solutions that drive revenue. Real AI. Real results. Real ROI.
                  </p>

                  <div className="space-y-3 mb-10">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                      <span className="text-base">Custom AI products</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                      <span className="text-base">Implementation consulting</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                      <span className="text-base">Built for your business</span>
                    </div>
                  </div>

                  <a
                    href="#ai-solutions"
                    className="inline-block rounded-button px-8 py-4 bg-white font-medium transition-all duration-200 hover:shadow-lg"
                    style={{ color: '#1ebda5' }}
                  >
                    Explore AI Solutions
                  </a>
                </div>

                {/* Decorative gradient overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 60%)',
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-6 pt-32">
          {/* Header */}
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
                Transform Your Business{" "}
                <span style={{ color: '#1ebda5' }}>with AI</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                We don't just talk AI. We build it. Real solutions. Real results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm font-mono tracking-[0.2em] text-muted-foreground mb-6">WHAT WE OFFER</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h3 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4">Our Services</h3>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-lg text-muted-foreground">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </ScrollReveal>
          </div>

          {/* Three Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Consulting */}
            <ScrollReveal delay={100}>
              <div className="group p-8 border border-border angled-border-subtle h-full flex flex-col transition-colors duration-200 hover:border-foreground">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ background: 'rgba(30, 189, 165, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-2">AI Consulting</h3>
                <p className="text-sm font-medium mb-6" style={{ color: '#1ebda5' }}>Strategy & Implementation</p>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  We help you understand where AI fits in your business and develop clear implementation strategies.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Strategy & Roadmap
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Process Audits
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Implementation Planning
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Team Training
                  </li>
                </ul>
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 font-medium transition-all duration-200 w-full"
                  style={{ background: '#1ebda5', color: 'white' }}
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            {/* AI Agent Building */}
            <ScrollReveal delay={200}>
              <div className="group p-8 border border-border angled-border-subtle h-full flex flex-col transition-colors duration-200 hover:border-foreground">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ background: 'rgba(226, 106, 0, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-2">AI Agent Building</h3>
                <p className="text-sm font-medium mb-6" style={{ color: '#e26a00' }}>Custom AI Solutions</p>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  Custom AI agents tailored to your specific business needs and workflows.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom Built Agents
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tailored to Your Business
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fully Integrated
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ongoing Support
                  </li>
                </ul>
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 font-medium transition-all duration-200 w-full"
                  style={{ background: '#e26a00', color: 'white' }}
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            {/* Web App & Design */}
            <ScrollReveal delay={300}>
              <div className="group p-8 border border-border angled-border-subtle h-full flex flex-col transition-colors duration-200 hover:border-foreground">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ background: 'rgba(255, 224, 70, 0.2)' }}>
                  <svg className="w-6 h-6" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-2">Web App & Design</h3>
                <p className="text-sm font-medium mb-6" style={{ color: '#c49f00' }}>Full-Stack Development</p>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  Modern web applications built with the latest technologies and best practices.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Modern UI/UX Design
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Responsive & Fast
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO Optimized
                  </li>
                </ul>
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 font-medium transition-all duration-200 w-full"
                  style={{ background: '#c49f00', color: 'white' }}
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-6 pt-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <ScrollReveal>
                <p className="text-sm font-mono tracking-[0.2em] text-muted-foreground mb-6">OUR WORK</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight">Portfolio</h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground max-w-md">We don't do MVPs. We ship products that feel inevitable.</p>
            </ScrollReveal>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-4 font-medium transition-colors duration-200 ${
                activeTab === "projects"
                  ? "text-foreground border-b-2 border-foreground -mb-px"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-4 py-4 font-medium transition-colors duration-200 ${
                activeTab === "clients"
                  ? "text-foreground border-b-2 border-foreground -mb-px"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Clients
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-4 py-4 font-medium transition-colors duration-200 ${
                activeTab === "team"
                  ? "text-foreground border-b-2 border-foreground -mb-px"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Team
            </button>
          </div>

          <div className="space-y-0">
            {activeTab === "projects" ? (
              projects.map((project, index) => (
                <ScrollReveal key={project.name} delay={index * 50}>
                  <div className="group grid grid-cols-12 gap-4 py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6 cursor-pointer">
                    <div className="col-span-2 md:col-span-1 text-muted-foreground font-mono text-sm">{project.year}</div>
                    <div className="col-span-10 md:col-span-3 font-heading text-foreground font-medium flex items-center gap-2">
                      {project.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <div className="col-span-12 md:col-span-4 text-muted-foreground">{project.description}</div>
                    <div className="col-span-6 md:col-span-2 text-sm font-mono text-muted-foreground">{project.stat}</div>
                    <div className="col-span-6 md:col-span-2 flex flex-wrap gap-2 justify-end">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : activeTab === "clients" ? (
              clients.map((client, index) => (
                <ScrollReveal key={client.name} delay={index * 50}>
                  <div className="group grid grid-cols-12 gap-4 py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6 cursor-pointer">
                    <div className="col-span-10 md:col-span-3 font-heading text-foreground font-medium flex items-center gap-2">
                      {client.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <div className="col-span-12 md:col-span-4 text-muted-foreground">{client.description}</div>
                    <div className="col-span-6 md:col-span-2 text-sm font-mono text-muted-foreground">{client.stat}</div>
                    <div className="col-span-6 md:col-span-2 flex flex-wrap gap-2 justify-end">
                      {client.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 50}>
                  <div className="group grid grid-cols-12 gap-4 py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6 cursor-pointer">
                    <div className="col-span-10 md:col-span-3 font-heading text-foreground font-medium flex items-center gap-2">
                      {member.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <div className="col-span-12 md:col-span-4 text-muted-foreground">{member.description}</div>
                    <div className="col-span-6 md:col-span-2 text-sm font-mono text-muted-foreground">{member.stat}</div>
                    <div className="col-span-6 md:col-span-2 flex flex-wrap gap-2 justify-end">
                      {member.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-16 p-8 border border-border angled-border-subtle text-center">
              <p className="text-muted-foreground italic">
                More projects launching soon. We're selective about what we build.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-6 pt-32">
          <ScrollReveal>
            <p className="text-sm font-mono tracking-[0.2em] text-muted-foreground mb-6">INSIGHTS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">Recent Thoughts</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mb-16">
              Personal research on where AI is, where it's going, and what matters.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 100}>
                <div className="group p-8 border border-border angled-border-subtle cursor-pointer h-full flex flex-col transition-colors duration-200 hover:border-foreground">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground flex-grow">{post.title}</h3>
                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    Read more
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-6 pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-sm font-mono tracking-[0.2em] text-muted-foreground mb-6">GET IN TOUCH</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
                Let's Build Something Legendary
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
                Three projects per month. Enterprise-grade standards. No inflated promises—only real capabilities, real
                results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="p-12 border border-border angled-border mb-8">
                <Mail className="w-8 h-8 text-foreground mx-auto mb-6" />
                <a
                  href="mailto:hello@haestus.dev"
                  className="text-3xl md:text-4xl font-heading text-foreground hover:opacity-70 transition-opacity duration-200 block mb-4"
                >
                  hello@haestus.dev
                </a>
                <p className="text-sm text-muted-foreground">We respond within 24 hours.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#portfolio"
                  className="rounded-button px-10 py-5 bg-foreground text-background font-medium transition-opacity duration-200 hover:opacity-80 w-full sm:w-auto"
                >
                  View My Work →
                </a>
                <a
                  href="mailto:hello@haestus.dev?subject=Project Inquiry"
                  className="rounded-button px-10 py-5 border border-foreground text-foreground font-medium transition-colors duration-200 hover:bg-foreground hover:text-background w-full sm:w-auto"
                >
                  Get In Touch
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
