"use client"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Parallax } from "@/components/parallax"
import { Logo } from "@/components/logo"
import { HeroWallpaper } from "@/components/HeroWallpaper"
import { ArrowUpRight, Mail } from "lucide-react"
import Image from "next/image"

const tools = [
  {
    id: 1,
    name: "AI Statement Analyzer",
    subtitle: "Payment Processing",
    description: "Instant breakdown of your credit card processing fees. No login required.",
    image: "/analyze.png",
    tags: ["Free"],
    tagColors: ["bg-black text-white"],
    cta: "Analyze Statement",
    url: "https://teampaypro.com"
  },
  {
    id: 2,
    name: "SupaPrompt",
    subtitle: "Multi-LLM Interface",
    description: "Talk to multiple AI models in one place. Built for real work.",
    image: "/supab.png",
    tags: ["Free"],
    tagColors: ["bg-black text-white"],
    cta: "Try SupaPrompt",
    url: "https://promptlee.io"
  },
  {
    id: 3,
    name: "ubill.io",
    subtitle: "Energy Bill Analysis",
    description: "Upload your energy bill. Get instant clarity on your costs.",
    image: "/ubill.png",
    tags: ["Free"],
    tagColors: ["bg-black text-white"],
    cta: "Analyze Bill",
    url: "https://ubill.io"
  }
]

function ToolsGrid() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <ScrollReveal key={tool.id} delay={index * 100}>
          <div className="group relative rounded-lg overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg flex flex-col">
            {/* Image Section */}
            <div className="relative w-full h-48 overflow-hidden bg-gray-100">
              <Image
                src={tool.image}
                alt={tool.subtitle}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
                style={
                  tool.id === 3
                    ? {
                        filter: 'brightness(0) saturate(100%)',
                        opacity: 1,
                      }
                    : undefined
                }
              />
              {tool.id === 3 && (
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)',
                    pointerEvents: 'none'
                  }}
                />
              )}
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                {tool.subtitle}
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                {tool.description}
              </p>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 self-start"
                style={{
                  background: '#000000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
              >
                {tool.cta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

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

const portfolioProjects = [
  {
    id: 1,
    name: "MachineMate Nate",
    category: "AI Agents",
    shortDesc: "AI-powered voice assistant for business automation",
    fullDesc: "24/7 voice AI assistant that handles customer inquiries, schedules appointments, and manages business operations with natural language processing",
    client: "MachineMate",
    year: "2025",
    results: "24/7 availability, 80% reduced response time",
    tech: ["Voice AI", "NLP", "Next.js"],
    image: "/portfolio/nate.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Sidekick",
    category: "AI Agents",
    shortDesc: "AI productivity assistant for streamlined workflows",
    fullDesc: "Smart AI agent that automates repetitive tasks, manages emails, and optimizes daily workflows for maximum productivity",
    client: "Internal",
    year: "2025",
    results: "3x faster task completion",
    tech: ["AI", "Next.js", "Automation"],
    image: "/portfolio/sidekick.jpg",
    featured: false,
  },
  {
    id: 3,
    name: "ubill.io",
    category: "Dashboards",
    shortDesc: "Real-time energy analytics dashboard",
    fullDesc: "Comprehensive energy bill analysis platform with predictive modeling and real-time cost tracking",
    client: "uBill",
    year: "2025",
    results: "35% cost savings identified",
    tech: ["Next.js", "AI/ML", "Charts"],
    image: "/portfolio/ubill.jpg",
    featured: false,
  },
  {
    id: 4,
    name: "ProShop24/7",
    category: "Dashboards",
    shortDesc: "IoT operations monitoring dashboard",
    fullDesc: "Real-time IoT integration dashboard reducing operational downtime with predictive maintenance alerts",
    client: "ProShop",
    year: "2024",
    results: "45% downtime reduction",
    tech: ["IoT", "Real-time", "React"],
    image: "/portfolio/proshop.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "LoopSync",
    category: "Automation",
    shortDesc: "Automated customer engagement platform",
    fullDesc: "End-to-end customer engagement automation with intelligent retention workflows and personalized communications",
    client: "LoopSync",
    year: "2025",
    results: "3x higher retention rate",
    tech: ["AI", "Automation", "Next.js"],
    image: "/portfolio/loopsync.jpg",
    featured: false,
  },
  {
    id: 6,
    name: "pestctrl.ai",
    category: "Automation",
    shortDesc: "Automated data extraction system",
    fullDesc: "Computer vision-powered document extraction with industry-leading accuracy for pest control operations",
    client: "PestCtrl",
    year: "2024",
    results: "99.2% accuracy rate",
    tech: ["Computer Vision", "AI"],
    image: "/portfolio/pestctrl.jpg",
    featured: false,
  },
  {
    id: 7,
    name: "Alfred Eats",
    category: "Full Stack",
    shortDesc: "AI-powered restaurant ordering platform",
    fullDesc: "Complete restaurant ordering and delivery platform with AI-driven menu recommendations and seamless checkout",
    client: "Alfred Eats",
    year: "2025",
    results: "Seamless ordering experience",
    tech: ["AI", "Mobile", "Next.js"],
    image: "/portfolio/alfred.jpg",
    featured: false,
  },
  {
    id: 8,
    name: "promptlee",
    category: "Full Stack",
    shortDesc: "Fine-tuned LLM platform",
    fullDesc: "Custom language model platform for domain-specific applications with API integration and fine-tuning capabilities",
    client: "Promptlee",
    year: "2024",
    results: "10x faster responses",
    tech: ["LLMs", "API", "React"],
    image: "/portfolio/promptlee.jpg",
    featured: false,
  },
]

const projects = portfolioProjects

const clients = [
  {
    name: "TRS Homes",
    description: "Residential construction and home building services",
    stat: "Quality craftsmanship",
    tech: ["Construction", "Real Estate"],
  },
  {
    name: "Hillside Palms",
    description: "Premium hospitality and property management services",
    stat: "Elevated guest experiences",
    tech: ["Hospitality", "Management"],
  },
  {
    name: "PayPro",
    description: "Payment processing and AI-powered business solutions",
    stat: "Trusted payment partner",
    tech: ["AI", "Payments"],
    url: "https://teampaypro.com",
  },
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
  { date: "Dec 2025", title: "Why 30% of AI Projects Fail After POC", readTime: "8 min" },
  { date: "Nov 2025", title: "The Architecture-First Approach to AI", readTime: "6 min" },
  { date: "Nov 2025", title: "Humans Over Automation: A Framework", readTime: "10 min" },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "clients" | "team" | "save">("projects")
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [touchStart, setTouchStart] = useState<number>(0)
  const [portfolioCategory, setPortfolioCategory] = useState<"All" | "AI Agents" | "Dashboards" | "Automation" | "Full Stack">("All")
  const [portfolioSearch, setPortfolioSearch] = useState("")

  // Keyboard navigation for Our Process section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const steps = ['projects', 'clients', 'team', 'save'] as const;
      const currentIndex = steps.indexOf(activeTab);

      if (e.key === 'ArrowRight' && currentIndex < steps.length - 1) {
        setActiveTab(steps[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setActiveTab(steps[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab])
  const [touchEnd, setTouchEnd] = useState<number>(0)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Load saved tab preference after hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTab = localStorage.getItem('portfolioTab')
      if (savedTab === 'projects' || savedTab === 'clients' || savedTab === 'team') {
        setActiveTab(savedTab)
      }
    }
  }, [])

  // Save tab preference when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolioTab', activeTab)
    }
  }, [activeTab])

  // Scroll-triggered checkmark animation for Process steps
  useEffect(() => {
    const stepElements = document.querySelectorAll(".process-step")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNum = parseInt(entry.target.getAttribute("data-step") || "0")
            if (!completedSteps.includes(stepNum)) {
              setCompletedSteps((prev) => [...prev, stepNum])
            }
          }
        })
      },
      { threshold: 0.5 },
    )
    stepElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [completedSteps])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // Reset on new touch
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Swipe left: next tab
      if (activeTab === "projects") setActiveTab("clients")
      else if (activeTab === "clients") setActiveTab("team")
    }
    if (isRightSwipe) {
      // Swipe right: previous tab
      if (activeTab === "team") setActiveTab("clients")
      else if (activeTab === "clients") setActiveTab("projects")
    }
  }

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

  // Filter portfolio projects
  const filteredPortfolio = portfolioProjects.filter(project => {
    const matchesCategory = portfolioCategory === "All" || project.category === portfolioCategory
    const matchesSearch = project.name.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
                         project.shortDesc.toLowerCase().includes(portfolioSearch.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredProject = portfolioProjects.find(p => p.featured)

  return (
    <div
      className="min-h-screen"
      style={{
        position: 'relative',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Header />

      {/* Hero Section - AT TOP OF PAGE with Video Background */}
      <section
        id="hero"
        className="relative"
        style={{
          overflow: 'visible',
          zIndex: 0,
          isolation: 'isolate',
        }}
      >
        <div className="min-h-screen flex items-center justify-center relative">
          <HeroWallpaper />
        </div>
      </section>

      {/* Our Process Section - Dark Theme */}
      <section
        id="our-process-interactive"
        className="relative bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <ScrollReveal>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white mb-4"
                style={{
                  fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                How We Work
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                A proven 4-step process that turns your vision into reality
              </p>
            </ScrollReveal>
          </div>

          {/* Progress Bar */}
          <ScrollReveal delay={100}>
            <div className="flex items-center justify-center gap-2 mb-12">
              {[
                { key: 'projects', num: 1, label: 'Discover', time: '1-2 weeks' },
                { key: 'clients', num: 2, label: 'Design', time: '2-3 weeks' },
                { key: 'team', num: 3, label: 'Develop', time: '4-8 weeks' },
                { key: 'save', num: 4, label: 'Deploy', time: '1-2 weeks' }
              ].map((step, index) => (
                <div key={step.key} className="flex items-center">
                  <button
                    onClick={() => setActiveTab(step.key as any)}
                    className={`flex flex-col items-center transition-all duration-300`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                        activeTab === step.key ? 'scale-110' : ''
                      }`}
                      style={{
                        background: activeTab === step.key ? '#d97757' : 'rgba(255, 255, 255, 0.1)',
                        border: `2px solid ${activeTab === step.key ? '#d97757' : 'rgba(255, 255, 255, 0.2)'}`
                      }}
                    >
                      <span className={`text-sm font-bold ${activeTab === step.key ? 'text-white' : 'text-white/60'}`}>
                        {step.num}
                      </span>
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider hidden sm:block ${
                      activeTab === step.key ? 'text-white' : 'text-white/40'
                    }`}>
                      {step.label}
                    </span>
                  </button>
                  {index < 3 && (
                    <div
                      className="w-8 sm:w-16 h-0.5 mx-2"
                      style={{
                        background: ['projects', 'clients', 'team'].indexOf(activeTab) > index
                          ? '#d97757'
                          : 'rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Content Card */}
          <ScrollReveal delay={150}>
            <div
              className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-10 transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
                {activeTab === "projects" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.2)' }}>
                        <svg className="w-7 h-7" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d97757' }}>Week 1-2</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Discover</h2>
                      </div>
                    </div>
                    <p className="text-base text-white/70 leading-relaxed mb-6">
                      We don't just ask what you want—we dig deep to understand why. This phase is about uncovering the real problems worth solving.
                    </p>
                    <div className="space-y-3 mb-6">
                      {['Deep-dive into your workflows and pain points', 'Map opportunities where AI creates real value', 'Define what success actually looks like', 'Align stakeholders on vision and priorities'].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span style={{ color: '#d97757' }}>→</span>
                          <p className="text-sm text-white/80">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 p-4 rounded-xl text-center" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <div className="text-2xl font-bold text-white mb-1">2-3</div>
                        <div className="text-xs text-white/50">Discovery Sessions</div>
                      </div>
                      <div className="flex-1 p-4 rounded-xl text-center" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <div className="text-2xl font-bold text-white mb-1">100%</div>
                        <div className="text-xs text-white/50">Custom Approach</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "clients" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.2)' }}>
                        <svg className="w-7 h-7" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d97757' }}>Week 2-5</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Design</h2>
                      </div>
                    </div>
                    <p className="text-base text-white/70 leading-relaxed mb-6">
                      We architect solutions that are built to scale. No cookie-cutter templates—every design is tailored to your specific needs.
                    </p>
                    <div className="space-y-3 mb-6">
                      {['System architecture and tech stack selection', 'Interactive prototypes and user flows', 'Data models and API specifications', 'Security-first design patterns'].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span style={{ color: '#d97757' }}>→</span>
                          <p className="text-sm text-white/80">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      <div className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider">Our Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {['Next.js', 'AI/ML', 'TypeScript', 'Supabase', 'Tailwind'].map((tech) => (
                          <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: '#d97757', color: 'white' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "team" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.2)' }}>
                        <svg className="w-7 h-7" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d97757' }}>Week 5-13</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Develop</h2>
                      </div>
                    </div>
                    <p className="text-base text-white/70 leading-relaxed mb-6">
                      This is where the magic happens. We build fast, iterate often, and keep you in the loop every step of the way.
                    </p>
                    <div className="space-y-3 mb-6">
                      {['2-week agile sprints with demos', 'AI model training and fine-tuning', 'Continuous testing and QA', 'Weekly progress updates and feedback'].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span style={{ color: '#d97757' }}>→</span>
                          <p className="text-sm text-white/80">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 p-4 rounded-xl text-center" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <div className="text-2xl font-bold text-white mb-1">2-week</div>
                        <div className="text-xs text-white/50">Sprint Cycles</div>
                      </div>
                      <div className="flex-1 p-4 rounded-xl text-center" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                        <div className="text-xs text-white/50">Uptime Target</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "save" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.2)' }}>
                        <svg className="w-7 h-7" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d97757' }}>Week 13-15</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Deploy</h2>
                      </div>
                    </div>
                    <p className="text-base text-white/70 leading-relaxed mb-6">
                      Launch day is just the beginning. We ensure a smooth rollout and stick around to make sure everything runs perfectly.
                    </p>
                    <div className="space-y-3 mb-6">
                      {['Zero-downtime production deployment', 'Team training and documentation', 'Performance monitoring setup', 'Ongoing support and maintenance'].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span style={{ color: '#d97757' }}>✓</span>
                          <p className="text-sm text-white/80">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: 'rgba(217, 119, 87, 0.1)', border: '1px solid rgba(217, 119, 87, 0.3)' }}>
                      <div className="text-sm text-white/90 font-medium mb-2">What's Included</div>
                      <div className="text-xs text-white/60">24/7 monitoring • Dedicated Slack channel • Monthly performance reviews • Priority bug fixes</div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      const steps = ['projects', 'clients', 'team', 'save'];
                      const currentIndex = steps.indexOf(activeTab);
                      if (currentIndex > 0) setActiveTab(steps[currentIndex - 1] as any);
                    }}
                    disabled={activeTab === 'projects'}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'projects' ? 'text-white/30 cursor-not-allowed' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  {activeTab === 'save' ? (
                    <a
                      href="#connect"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all text-white"
                      style={{ background: '#d97757' }}
                    >
                      Start Your Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        const steps = ['projects', 'clients', 'team', 'save'];
                        const currentIndex = steps.indexOf(activeTab);
                        if (currentIndex < steps.length - 1) setActiveTab(steps[currentIndex + 1] as any);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all text-white bg-white/10 hover:bg-white/20"
                    >
                      Next
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transition Section - Tools Showcase - COMPACT */}
      <section
        id="tools"
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          background: '#ffffff',
          backgroundImage: 'url(/whitehex.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* White Card Container with Blurred Border */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl" style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
          }}>
            {/* Main Header - Compact */}
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mb-2 text-center">
                We Build Systems That Impact Real Business
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 text-center font-medium">
                Try our free tools — powered by the same AI we use for enterprise clients
              </p>
            </ScrollReveal>

            {/* Tools Grid - Compact Horizontal */}
            <ToolsGrid />
          </div>
        </div>
      </section>

      {/* Services Section - Split Layout with AI Orb */}
      <section
        id="services"
        className="relative bg-black py-12 sm:py-16 lg:py-20 xl:py-24"
      >
        <div className="max-w-[1190px] mx-auto px-4 sm:px-5">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <ScrollReveal>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white"
                style={{
                  fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Transform Your Business with AI
              </h2>
            </ScrollReveal>
          </div>

          {/* Split Layout Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* LEFT SIDE: Expandable Accordion Cards */}
            <div className="flex flex-col gap-4">
              {/* AI Consulting */}
              <ScrollReveal delay={50}>
                <div
                  className="rounded-lg p-4 cursor-pointer transition-all duration-300"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  onClick={() => {
                    const content = document.getElementById('service-1');
                    const icon = document.getElementById('service-icon-1');
                    if (content && icon) {
                      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                        content.style.maxHeight = '0px';
                        icon.style.transform = 'rotate(0deg)';
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.style.transform = 'rotate(180deg)';
                      }
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white uppercase tracking-wider">AI Consulting</h3>
                      <p className="text-xs text-white/70 font-semibold">Strategy & Implementation</p>
                    </div>
                    <svg id="service-icon-1" className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div id="service-1" className="overflow-hidden transition-all duration-300" style={{ maxHeight: '0px' }}>
                    <p className="text-sm text-white/60 leading-relaxed mb-3 mt-2">
                      We help you understand where AI fits in your business and develop clear implementation strategies.
                    </p>
                    <ul className="space-y-1.5">
                      {['AI Strategy & Roadmap', 'Process Audits', 'Implementation Planning', 'Team Training'].map((item) => (
                        <li key={item} className="text-xs text-white/80 flex items-start gap-2">
                          <span className="text-white/60 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* AI Agent Building */}
              <ScrollReveal delay={100}>
                <div
                  className="rounded-lg p-4 cursor-pointer transition-all duration-300"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  onClick={() => {
                    const content = document.getElementById('service-2');
                    const icon = document.getElementById('service-icon-2');
                    if (content && icon) {
                      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                        content.style.maxHeight = '0px';
                        icon.style.transform = 'rotate(0deg)';
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.style.transform = 'rotate(180deg)';
                      }
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white uppercase tracking-wider">AI Agent Building</h3>
                      <p className="text-xs text-white/70 font-semibold">Custom AI Solutions</p>
                    </div>
                    <svg id="service-icon-2" className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div id="service-2" className="overflow-hidden transition-all duration-300" style={{ maxHeight: '0px' }}>
                    <p className="text-sm text-white/60 leading-relaxed mb-3 mt-2">
                      Custom AI agents tailored to your specific business needs and workflows.
                    </p>
                    <ul className="space-y-1.5">
                      {['Custom Built Agents', 'Tailored to Your Business', 'Fully Integrated', 'Ongoing Support'].map((item) => (
                        <li key={item} className="text-xs text-white/80 flex items-start gap-2">
                          <span className="text-white/60 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Web App & Design */}
              <ScrollReveal delay={150}>
                <div
                  className="rounded-lg p-4 cursor-pointer transition-all duration-300"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  onClick={() => {
                    const content = document.getElementById('service-3');
                    const icon = document.getElementById('service-icon-3');
                    if (content && icon) {
                      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                        content.style.maxHeight = '0px';
                        icon.style.transform = 'rotate(0deg)';
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.style.transform = 'rotate(180deg)';
                      }
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white uppercase tracking-wider">Web App & Design</h3>
                      <p className="text-xs text-white/70 font-semibold">Full-Stack Development</p>
                    </div>
                    <svg id="service-icon-3" className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div id="service-3" className="overflow-hidden transition-all duration-300" style={{ maxHeight: '0px' }}>
                    <p className="text-sm text-white/60 leading-relaxed mb-3 mt-2">
                      Modern web applications built with the latest technologies and best practices.
                    </p>
                    <ul className="space-y-1.5">
                      {['Full-Stack Development', 'Modern UI/UX Design', 'Responsive & Fast', 'SEO Optimized'].map((item) => (
                        <li key={item} className="text-xs text-white/80 flex items-start gap-2">
                          <span className="text-white/60 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT SIDE: AI Orb Video */}
            <ScrollReveal delay={200}>
              <div className="flex justify-center lg:justify-end">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  className="w-full max-w-[340px] lg:max-w-[425px] h-auto"
                  style={{
                    filter: 'brightness(1.1) contrast(1.15) saturate(1.2)',
                  }}
                >
                  <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/00orb.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Dark Accordion Theme */}
      <section id="portfolio" className="relative bg-black py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1190px] mx-auto px-4 sm:px-5">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
            <ScrollReveal>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white"
                style={{
                  fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Our Work
              </h2>
            </ScrollReveal>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "projects"
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "clients"
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Clients
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "team"
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Team
            </button>
          </div>

          {/* Content - Projects */}
          {activeTab === "projects" && (
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              {portfolioProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 30}>
                  <div
                    className="rounded-lg p-6 cursor-pointer transition-all duration-300"
                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                    onClick={() => {
                      const content = document.getElementById(`portfolio-project-${project.id}`);
                      const icon = document.getElementById(`portfolio-icon-${project.id}`);
                      if (content && icon) {
                        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                          content.style.maxHeight = '0px';
                          icon.style.transform = 'rotate(0deg)';
                        } else {
                          content.style.maxHeight = content.scrollHeight + 'px';
                          icon.style.transform = 'rotate(180deg)';
                        }
                      }
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-base font-bold text-white uppercase tracking-wider">{project.name}</h3>
                        <p className="text-xs text-white/70 font-semibold">{project.category}</p>
                      </div>
                      <svg id={`portfolio-icon-${project.id}`} className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div id={`portfolio-project-${project.id}`} className="overflow-hidden transition-all duration-300" style={{ maxHeight: '0px' }}>
                      <p className="text-sm text-white/60 leading-relaxed mb-3 mt-2">
                        {project.fullDesc}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Client</p>
                          <p className="text-sm text-white/80">{project.client}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Year</p>
                          <p className="text-sm text-white/80">{project.year}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Results</p>
                        <p className="text-sm text-white/80">{project.results}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1.5">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Content - Clients */}
          {activeTab === "clients" && (
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              {clients.map((client, index) => (
                <ScrollReveal key={index} delay={index * 30}>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-6 transition-all duration-300 hover:bg-white/10 flex items-center justify-between"
                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <div>
                      <h3 className="text-base font-bold text-white uppercase tracking-wider">{client.name}</h3>
                      <p className="text-xs text-white/70 font-semibold mb-2">{client.industry}</p>
                      <p className="text-sm text-white/60">{client.stat}</p>
                    </div>
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Content - Team */}
          {activeTab === "team" && (
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              {team.map((member, index) => (
                <ScrollReveal key={index} delay={index * 30}>
                  <div
                    className="rounded-lg p-6 transition-all duration-300"
                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">{member.name}</h3>
                    <p className="text-xs text-white/70 font-semibold mb-2">{member.description}</p>
                    <p className="text-sm text-white/60">{member.stat}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Insights Section - Compact */}
      <section id="insights" className="py-10 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="section-divider" />

        {/* Video Background with Overlay */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          >
            <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/111peachbaby.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500/40 via-gray-500/30 to-gray-600/50" />
        </div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-6 sm:mb-8">
            <ScrollReveal>
              <h2 className="font-heading text-[1.75rem] sm:text-[2.1rem] lg:text-[2.625rem] font-bold tracking-tight mb-2 text-white drop-shadow-2xl">Insights</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto drop-shadow-lg font-medium">
                Personal research on where AI is, where it's going, and what matters.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
            {insights.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 100}>
                <div className="group p-4 sm:p-5 rounded-xl cursor-pointer h-full flex flex-col transition-all duration-300 bg-white/95 backdrop-blur-sm hover:bg-white hover:-translate-y-1 hover:shadow-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2 font-medium">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex-grow leading-snug">{post.title}</h3>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold transition-colors duration-200" style={{ color: '#d97757' }}>
                    Read more
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section - 10/10 Design with Centered Tree */}
      <section id="connect" className="py-20 sm:py-32 lg:py-48 relative bg-gray-50">
        <div className="section-divider" />
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 pt-16 sm:pt-20 lg:pt-24">

          {/* Top Content - Above Tree */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <ScrollReveal>
              <p className="text-sm lg:text-base font-mono tracking-[0.3em] text-muted-foreground mb-6 font-medium uppercase">
                GET IN TOUCH
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 px-4 sm:px-0">
                Let's Build Something Legendary
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-2xl mx-auto px-4 sm:px-0 font-medium leading-relaxed">
                Ready to transform your business with AI? Let's talk.
              </p>
            </ScrollReveal>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <ScrollReveal delay={300}>
              <a
                href="mailto:hello@haestus.dev"
                className="inline-block text-base lg:text-lg font-bold px-10 py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
              >
                Get in Touch
              </a>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <a
                href="/#portfolio"
                className="inline-block text-base lg:text-lg font-bold px-10 py-4 rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                View Our Work
              </a>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
