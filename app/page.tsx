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

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-6 pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <p className="text-sm font-mono tracking-[0.2em] text-muted-foreground mb-6">ORIGIN STORY</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
                  Why We're Called Haestus
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Hephaestus was the Greek god of fire, craftsmanship, and invention—the quiet architect who forged the
                  armor, tools, and machines that empowered both gods and humans.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We believe AI can make the world a better place—if we build it with intention. We create tools that
                  help humanity rise with the tide of AI, not get swept away by it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="text-base text-foreground">— Rocky, Founder</p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="p-12 border border-border angled-border">
                <Logo className="opacity-20 mb-8 w-full max-w-md" />
                <blockquote className="text-2xl md:text-3xl font-heading font-light leading-relaxed text-foreground">
                  "He didn't replace heroes—he forged the tools that made them legendary."
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-6 pt-32">
          <ScrollReveal>
            <p className="text-sm font-mono tracking-[0.2em] text-muted-foreground mb-6">WHAT WE DO</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-16 max-w-2xl">
              Three ways we work with you
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 100}>
                <div className="group p-8 border border-border angled-border-subtle h-full flex flex-col transition-colors duration-200 hover:border-foreground">
                  <span className="text-5xl font-heading font-light text-muted-foreground mb-6">{service.number}</span>
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-foreground rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
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
