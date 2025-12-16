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

const projects = [
  {
    year: "2025",
    name: "Alfred Eats",
    description: "AI-powered restaurant ordering and delivery platform",
    stat: "Seamless ordering",
    tech: ["AI", "Mobile"],
  },
  {
    year: "2025",
    name: "Sidekick",
    description: "AI productivity assistant for streamlined workflows",
    stat: "Smart automation",
    tech: ["AI", "Next.js"],
  },
  {
    year: "2025",
    name: "LoopSync",
    description: "Automated customer engagement and retention platform",
    stat: "3x higher retention",
    tech: ["AI", "Automation"],
  },
  {
    year: "2025",
    name: "MachineMate Nate",
    description: "AI-powered voice assistant for business automation",
    stat: "24/7 availability",
    tech: ["Voice AI", "NLP"],
  },
  {
    year: "2025",
    name: "ubill.io",
    description: "Real-time analytics and predictive modeling",
    stat: "Energy bill analysis",
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
  const [activeTab, setActiveTab] = useState<"projects" | "clients" | "team">("projects")
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [touchStart, setTouchStart] = useState<number>(0)
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

      {/* Process Section - Gamified with Vertical Timeline */}
      <section id="process" className="py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900">
                Our Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                Click each step to learn more. Scroll to see your progress.
              </p>
            </ScrollReveal>
          </div>

          {/* Vertical Timeline with Interactive Cards */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200" style={{ zIndex: 0 }}></div>

            {/* Step 1 - Discover */}
            <div className="process-step relative mb-8" data-step="1">
              <div
                className={`relative pl-16 transition-all duration-300 ${expandedStep === 1 ? 'pb-6' : ''}`}
                onClick={() => setExpandedStep(expandedStep === 1 ? null : 1)}
                style={{ cursor: 'pointer' }}
              >
                {/* Checkpoint Circle */}
                <div className={`absolute left-3 top-2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  completedSteps.includes(1) ? 'bg-green-500 scale-110' : 'bg-white border-2 border-gray-300'
                }`} style={{ zIndex: 1 }}>
                  {completedSteps.includes(1) && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold text-gray-500 mb-1 tracking-wider">STEP 01</div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900">Discover</h3>
                    </div>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedStep === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We learn your business, challenges, and goals to build a foundation for success
                  </p>
                  {expandedStep === 1 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2 animate-in fade-in duration-300">
                      <p>• Deep dive into your current workflows and pain points</p>
                      <p>• Identify opportunities for AI integration</p>
                      <p>• Define success metrics and KPIs</p>
                      <p>• Stakeholder interviews and requirement gathering</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 2 - Design */}
            <div className="process-step relative mb-8" data-step="2">
              <div
                className={`relative pl-16 transition-all duration-300 ${expandedStep === 2 ? 'pb-6' : ''}`}
                onClick={() => setExpandedStep(expandedStep === 2 ? null : 2)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`absolute left-3 top-2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  completedSteps.includes(2) ? 'bg-green-500 scale-110' : 'bg-white border-2 border-gray-300'
                }`} style={{ zIndex: 1 }}>
                  {completedSteps.includes(2) && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold text-gray-500 mb-1 tracking-wider">STEP 02</div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900">Design</h3>
                    </div>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedStep === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We create a tailored solution and strategic roadmap aligned with your vision
                  </p>
                  {expandedStep === 2 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2 animate-in fade-in duration-300">
                      <p>• Architecture design and technology selection</p>
                      <p>• UI/UX mockups and user flow mapping</p>
                      <p>• Data model and API specification</p>
                      <p>• Security and compliance planning</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3 - Develop */}
            <div className="process-step relative mb-8" data-step="3">
              <div
                className={`relative pl-16 transition-all duration-300 ${expandedStep === 3 ? 'pb-6' : ''}`}
                onClick={() => setExpandedStep(expandedStep === 3 ? null : 3)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`absolute left-3 top-2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  completedSteps.includes(3) ? 'bg-green-500 scale-110' : 'bg-white border-2 border-gray-300'
                }`} style={{ zIndex: 1 }}>
                  {completedSteps.includes(3) && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold text-gray-500 mb-1 tracking-wider">STEP 03</div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900">Develop</h3>
                    </div>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedStep === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We build and refine your AI solution with precision and attention to detail
                  </p>
                  {expandedStep === 3 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2 animate-in fade-in duration-300">
                      <p>• Agile development with bi-weekly sprints</p>
                      <p>• AI model training and fine-tuning</p>
                      <p>• Continuous testing and quality assurance</p>
                      <p>• Regular demos and feedback sessions</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 4 - Deploy */}
            <div className="process-step relative" data-step="4">
              <div
                className={`relative pl-16 transition-all duration-300 ${expandedStep === 4 ? 'pb-6' : ''}`}
                onClick={() => setExpandedStep(expandedStep === 4 ? null : 4)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`absolute left-3 top-2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  completedSteps.includes(4) ? 'bg-green-500 scale-110' : 'bg-white border-2 border-gray-300'
                }`} style={{ zIndex: 1 }}>
                  {completedSteps.includes(4) && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold text-gray-500 mb-1 tracking-wider">STEP 04</div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900">Deploy</h3>
                    </div>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedStep === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We launch your solution and provide ongoing support for lasting success
                  </p>
                  {expandedStep === 4 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2 animate-in fade-in duration-300">
                      <p>• Production deployment and monitoring setup</p>
                      <p>• Team training and documentation</p>
                      <p>• Performance optimization and scaling</p>
                      <p>• Ongoing maintenance and support</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Section - Tools Showcase - COMPACT */}
      <section
        id="tools"
        className="relative py-8 sm:py-10 lg:py-12"
        style={{
          background: '#ffffff'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Header - Compact */}
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mb-2 text-center">
              We Build Systems That Impact Real Business
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center font-medium">
              Try our free tools — powered by the same AI we use for enterprise clients
            </p>
          </ScrollReveal>

          {/* Tools Grid - Compact Horizontal */}
          <ToolsGrid />
        </div>
      </section>

      {/* Services Section - Split Layout */}
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

      {/* Portfolio Section - Desktop Bold */}
      <section id="portfolio" className="py-16 sm:py-24 lg:py-40 xl:py-48 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 lg:pt-32">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <ScrollReveal>
              <p className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-mono tracking-[0.2em] lg:tracking-[0.3em] text-muted-foreground font-medium mb-4 sm:mb-6">OUR WORK</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-[1.5rem] sm:text-[1.8rem] lg:text-[2.25rem] xl:text-[3rem] font-bold tracking-tight mb-6 sm:mb-8">Portfolio</h2>
            </ScrollReveal>

            {/* Tagline pill - centered */}
            <ScrollReveal delay={200}>
              <div className="flex justify-center">
                <div className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base lg:text-lg overflow-hidden"
                  style={{
                    background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
                    boxShadow: '0 4px 20px rgba(217, 119, 87, 0.3)',
                  }}
                >
                  <span className="relative z-10">The future belongs to those who automate today.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Tabs - Centered */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex gap-2">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-8 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-200 rounded-lg ${
                  activeTab === "projects"
                    ? "bg-black text-white"
                    : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("clients")}
                className={`px-8 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-200 rounded-lg ${
                  activeTab === "clients"
                    ? "bg-black text-white"
                    : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Clients
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-8 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-200 rounded-lg ${
                  activeTab === "team"
                    ? "bg-black text-white"
                    : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Team
              </button>
            </div>
          </div>

          <div
            className="space-y-0"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {activeTab === "projects" ? (
              projects.map((project, index) => (
                <ScrollReveal key={project.name} delay={index * 50}>
                  <div className="group py-8 md:py-10 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6">
                    {/* Mobile Layout - Stack Vertically */}
                    <div className="md:hidden flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span key={t} className="tech-tag text-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-heading text-2xl font-medium text-foreground flex items-center gap-3">
                        {project.name}
                        <ArrowUpRight className="w-5 h-5" />
                      </h3>
                      <p className="text-lg text-muted-foreground">{project.description}</p>
                      <span className="text-lg font-mono text-muted-foreground">{project.stat}</span>
                    </div>

                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid grid-cols-12 gap-6 items-center">
                      <div className="col-span-1 text-gray-500 font-mono text-base font-medium">{project.year}</div>
                      <div className="col-span-2 font-heading text-foreground font-bold flex items-center gap-2 text-xl">
                        {project.name}
                      </div>
                      <div className="col-span-4 text-gray-600 text-base leading-relaxed">{project.description}</div>
                      <div className="col-span-3 text-base font-mono text-gray-700 font-semibold">{project.stat}</div>
                      <div className="col-span-2 flex flex-wrap gap-2 justify-end">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-md text-xs font-semibold border border-gray-300 text-gray-700 bg-white">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : activeTab === "clients" ? (
              clients.map((client, index) => (
                <ScrollReveal key={client.name} delay={index * 50}>
                  <div className="group py-6 md:py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6">
                    {/* Mobile Layout - Stack Vertically */}
                    <div className="md:hidden flex flex-col gap-3">
                      <h3 className="font-heading text-xl font-medium text-foreground flex items-center gap-2">
                        {client.name}
                        <ArrowUpRight className="w-4 h-4" />
                      </h3>
                      <p className="text-sm text-muted-foreground">{client.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-muted-foreground">{client.stat}</span>
                        <div className="flex flex-wrap gap-2">
                          {client.tech.map((t) => (
                            <span key={t} className="tech-tag text-xs">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid grid-cols-12 gap-4">
                      <div className="col-span-3 font-heading text-foreground font-medium flex items-center gap-2">
                        {client.name}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                      <div className="col-span-4 text-muted-foreground">{client.description}</div>
                      <div className="col-span-2 text-sm font-mono text-muted-foreground">{client.stat}</div>
                      <div className="col-span-3 flex flex-wrap gap-2 justify-end">
                        {client.tech.map((t) => (
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 50}>
                  <div className="group py-6 md:py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6">
                    {/* Mobile Layout - Stack Vertically */}
                    <div className="md:hidden flex flex-col gap-3">
                      <h3 className="font-heading text-xl font-medium text-foreground flex items-center gap-2">
                        {member.name}
                        <ArrowUpRight className="w-4 h-4" />
                      </h3>
                      <p className="text-sm text-muted-foreground">{member.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-muted-foreground">{member.stat}</span>
                        <div className="flex flex-wrap gap-2">
                          {member.tech.map((t) => (
                            <span key={t} className="tech-tag text-xs">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid grid-cols-12 gap-4">
                      <div className="col-span-3 font-heading text-foreground font-medium flex items-center gap-2">
                        {member.name}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                      <div className="col-span-4 text-muted-foreground">{member.description}</div>
                      <div className="col-span-2 text-sm font-mono text-muted-foreground">{member.stat}</div>
                      <div className="col-span-3 flex flex-wrap gap-2 justify-end">
                        {member.tech.map((t) => (
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
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
                We are passionate of delivering sustainable solutions and valuable tools to businesses. Let's connect and see if there's something you didn't know you needed.
              </p>
            </ScrollReveal>
          </div>

          {/* Tree - Dead Center with Parallax */}
          <ScrollReveal delay={300}>
            <Parallax speed={0.3}>
              <div className="flex justify-center items-center my-16 sm:my-20 lg:my-24">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <Image
                    src="/oogway1.png"
                    alt="Tree"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    style={{ objectFit: 'contain', filter: 'brightness(0)' }}
                    priority
                  />
                </div>
              </div>
            </Parallax>
          </ScrollReveal>

          {/* Bottom Content - Below Tree */}
          <div className="text-center">
            <ScrollReveal delay={400}>
              <div className="max-w-2xl mx-auto p-10 lg:p-14 border-2 border-gray-200 rounded-3xl mb-12 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="w-12 lg:w-14 h-12 lg:h-14 text-foreground mx-auto mb-8" />
                <a
                  href="mailto:hello@haestus.dev"
                  className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground hover:opacity-70 transition-opacity duration-200 block mb-5"
                >
                  hello@haestus.dev
                </a>
                <p className="text-base lg:text-lg text-muted-foreground font-medium">
                  We respond within 24 hours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <a
                href="/portal"
                className="inline-block text-lg lg:text-xl font-bold px-16 py-5 rounded-full text-white hover:opacity-90 hover:shadow-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
                }}
              >
                Clients
              </a>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
