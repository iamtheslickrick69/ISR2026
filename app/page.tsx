"use client"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Parallax } from "@/components/parallax"
import { Logo } from "@/components/logo"
import { HeroWallpaper } from "@/components/HeroWallpaper"
import { ArrowUpRight, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const tools = [
  {
    id: 1,
    name: "AI Statement Analyzer",
    description: "Free tool. No login required. Clear, unbiased analysis of payment processing fees for small business owners.",
    image: "/analyze.png",
    tags: ["Free Forever", "No Login", "Unbiased"],
    tagColors: ["bg-white/90 text-gray-800", "bg-white/80 text-gray-800", "bg-white/70 text-gray-800"]
  },
  {
    id: 2,
    name: "SupaPrompt",
    description: "Master prompt engineering for everyone. We bring the menu out to you so you can really order what you want, not just tell a chef \"Make me a grilled cheese.\"",
    image: "/supab.png",
    tags: ["Advanced", "Multi-LLM", "Easy"],
    tagColors: ["bg-white/90 text-gray-800", "bg-white/80 text-gray-800", "bg-white/70 text-gray-800"]
  },
  {
    id: 3,
    name: "ubill.io",
    description: "Free energy bill analysis. No login required. Understand your energy needs as clearly as you understand price per gallon at the pump.",
    image: "/ubill.png",
    tags: ["100% Free", "No Signup", "Transparent"],
    tagColors: ["bg-white/90 text-gray-800", "bg-white/80 text-gray-800", "bg-white/70 text-gray-800"]
  }
]

function ToolCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tools.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTool = tools[currentIndex]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Description Section - Compact */}
        <div className="mb-6 text-center px-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {currentTool.name}
          </h3>
          <p className="text-sm lg:text-base text-gray-700 max-w-2xl mx-auto mb-4 leading-relaxed">
            {currentTool.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {currentTool.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${currentTool.tagColors[idx]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section - Compact */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-[280px] lg:h-[350px]">
              <Image
                src={currentTool.image}
                alt={currentTool.name}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
            </div>
          </div>

          {/* Navigation Arrows - iOS-friendly touch targets */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all duration-300 hover:scale-105 group"
            aria-label="Previous tool"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all duration-300 hover:scale-105 group"
            aria-label="Next tool"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Dot Indicators - iOS-friendly */}
        <div className="flex justify-center gap-2 mt-5">
          {tools.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2.5'
                  : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/80'
              }`}
              style={{
                minHeight: '44px',
                paddingTop: '20px',
                paddingBottom: '20px',
                WebkitTapHighlightColor: 'transparent',
                ...(index === currentIndex ? { background: '#d97757' } : {}),
              }}
              aria-label={`Go to tool ${index + 1}`}
            />
          ))}
        </div>
      </div>
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
  const [activeTab, setActiveTab] = useState<"projects" | "clients" | "team">(() => {
    // Smart default: Remember last visited tab from localStorage
    if (typeof window !== 'undefined') {
      const savedTab = localStorage.getItem('portfolioTab')
      if (savedTab === 'projects' || savedTab === 'clients' || savedTab === 'team') {
        return savedTab
      }
    }
    return "projects"
  })
  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Save tab preference when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolioTab', activeTab)
    }
  }, [activeTab])

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

      {/* Transition Section - Tools Showcase */}
      <section
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          background: '#E5DDD0'
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* Main Header - Compact */}
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-4 leading-tight">
                Building the Future
              </h2>
            </ScrollReveal>

            {/* Pill-shaped description - Compact */}
            <ScrollReveal delay={100}>
              <div className="inline-block mb-10">
                <div className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-900/10 shadow-lg max-w-2xl">
                  <p className="text-sm sm:text-base text-gray-800 font-medium">
                    Building products that make a real difference in everyday life.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tool Carousel */}
            <ToolCarousel />
          </div>
        </div>
      </section>

      {/* Services Section - BELOW Hero */}
      <section
        id="services"
        className="relative bg-gray-50 py-10 sm:py-14 lg:py-16 xl:py-20"
      >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 px-4 sm:px-0">
                Transform Your Business{" "}
                <span style={{ color: '#d97757' }}>with AI</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4 sm:px-0 mb-8 sm:mb-10 lg:mb-12">
                We don't sell AI. We don't develop AI. We architect it. Every day new models and tools are deployed to the market, and most business owners can't keep up.
              </p>
            </ScrollReveal>
          </div>

          {/* Three Service Cards */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
            {/* AI Consulting - Compact */}
            <ScrollReveal delay={50}>
              <div className="card-entrance card-entrance-delay-1 group p-4 sm:p-5 lg:p-6 h-full flex flex-col transition-all duration-300 angled-border-subtle bg-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]" style={{ border: '2px solid #fef5ef' }}>
                <div className="w-10 h-10 rounded-lg mb-3 sm:mb-4 flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.08)' }}>
                  <svg className="w-5 h-5" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-1.5">AI Consulting</h3>
                <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4" style={{ color: '#d97757' }}>Strategy & Implementation</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  We help you understand where AI fits in your business and develop clear implementation strategies.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Strategy & Roadmap
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Process Audits
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Implementation Planning
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Team Training
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* AI Agent Building - Compact */}
            <ScrollReveal delay={100}>
              <div className="card-entrance card-entrance-delay-2 group p-4 sm:p-5 lg:p-6 h-full flex flex-col transition-all duration-300 angled-border-subtle bg-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]" style={{ border: '2px solid #fef5ef' }}>
                <div className="w-10 h-10 rounded-lg mb-3 sm:mb-4 flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.08)' }}>
                  <svg className="w-5 h-5" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-1.5">AI Agent Building</h3>
                <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4" style={{ color: '#d97757' }}>Custom AI Solutions</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  Custom AI agents tailored to your specific business needs and workflows.
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom Built Agents
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tailored to Your Business
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fully Integrated
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ongoing Support
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Web App & Design - Compact */}
            <ScrollReveal delay={150}>
              <div className="card-entrance card-entrance-delay-3 group p-4 sm:p-5 lg:p-6 h-full flex flex-col transition-all duration-300 angled-border-subtle bg-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]" style={{ border: '2px solid #fef5ef' }}>
                <div className="w-10 h-10 rounded-lg mb-3 sm:mb-4 flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.08)' }}>
                  <svg className="w-5 h-5" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-1.5">Web App & Design</h3>
                <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4" style={{ color: '#d97757' }}>Full-Stack Development</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  Modern web applications built with the latest technologies and best practices.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Modern UI/UX Design
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Responsive & Fast
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO Optimized
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Button - Below Cards */}
          <ScrollReveal delay={200}>
            <div className="text-center mt-8">
              <a
                href="#connect"
                className="inline-block text-base sm:text-lg font-bold px-8 py-4 rounded-lg text-white spring-bounce enhanced-button transition-all duration-300 uppercase tracking-wide shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
                }}
              >
                See what the latest AI tools could do for your business
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section - Concrete Gray with Light Cards */}
      <section id="process" className="py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden" style={{ background: '#898989' }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-white px-4 sm:px-0">
                Our Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto px-4 sm:px-0 font-medium">
                From idea to implementation, we guide you every step of the way
              </p>
            </ScrollReveal>
          </div>

          {/* Process Cards - Light Gray on Dark */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - Discover */}
            <ScrollReveal delay={50}>
              <div className="rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl group cursor-pointer"
                style={{
                  background: '#f5f5f5',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)' }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-gray-400 mb-2 tracking-wider">STEP 01</div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Discover</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We learn your business, challenges, and goals to build a foundation for success
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 - Design */}
            <ScrollReveal delay={100}>
              <div className="rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl group cursor-pointer"
                style={{
                  background: '#f5f5f5',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)' }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-gray-400 mb-2 tracking-wider">STEP 02</div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Design</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We create a tailored solution and strategic roadmap aligned with your vision
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 - Develop */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl group cursor-pointer"
                style={{
                  background: '#f5f5f5',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)' }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-gray-400 mb-2 tracking-wider">STEP 03</div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Develop</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We build and refine your AI solution with precision and attention to detail
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4 - Deploy */}
            <ScrollReveal delay={200}>
              <div className="rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl group cursor-pointer"
                style={{
                  background: '#f5f5f5',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)' }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-gray-400 mb-2 tracking-wider">STEP 04</div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Deploy</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We launch your solution and provide ongoing support for lasting success
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Desktop Bold */}
      <section id="portfolio" className="py-16 sm:py-24 lg:py-40 xl:py-48 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 lg:pt-32">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <ScrollReveal>
              <p className="text-center text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-mono tracking-[0.2em] lg:tracking-[0.3em] text-muted-foreground font-medium mb-4 sm:mb-6">OUR WORK</p>
            </ScrollReveal>
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <ScrollReveal delay={100}>
                <h2 className="font-heading text-[1.5rem] sm:text-[1.8rem] lg:text-[2.25rem] xl:text-[3rem] font-bold tracking-tight">Portfolio</h2>
              </ScrollReveal>
            </div>

            {/* Tagline pill - full width below title */}
            <ScrollReveal delay={100}>
              <div className="inline-block max-w-fit">
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

          {/* iOS-Style Tabs */}
          <div className="relative mb-10">
            <div className="flex gap-3 sm:gap-5 mb-8 sm:mb-10 pb-3" style={{ borderBottom: '1px solid #e5e5e5', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-5 sm:px-8 py-4 font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "projects"
                    ? "text-foreground border-b-2 border-foreground -mb-px"
                    : "text-gray-400 hover:text-foreground"
                }`}
                style={{ fontSize: '20px', minHeight: '57px', WebkitTapHighlightColor: 'transparent' }}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("clients")}
                className={`px-5 sm:px-8 py-4 font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "clients"
                    ? "text-foreground border-b-2 border-foreground -mb-px"
                    : "text-gray-400 hover:text-foreground"
                }`}
                style={{ fontSize: '20px', minHeight: '57px', WebkitTapHighlightColor: 'transparent' }}
              >
                Clients
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-5 sm:px-8 py-4 font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "team"
                    ? "text-foreground border-b-2 border-foreground -mb-px"
                    : "text-gray-400 hover:text-foreground"
                }`}
                style={{ fontSize: '20px', minHeight: '57px', WebkitTapHighlightColor: 'transparent' }}
              >
                Team
              </button>
            </div>

            {/* iOS Swipe Hint */}
            <div className="md:hidden flex items-center justify-center gap-3 mb-8 text-sm text-gray-400">
              <svg className="w-5 h-5 swipe-indicator" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to navigate</span>
              <svg className="w-5 h-5 swipe-indicator" style={{ transform: 'rotate(180deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
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
                  {project.name === "promptlee" ? (
                    <div className="group relative py-8 md:py-10 border-b border-border transition-colors duration-200 -mx-6 px-6 cursor-pointer overflow-hidden">
                      {/* Project Image - only visible on hover on desktop */}
                      <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-2xl overflow-hidden" style={{ zIndex: 0 }}>
                        <Image
                          src="/supa.png"
                          alt={project.name}
                          fill
                          className="object-cover object-center rounded-2xl"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Mobile Layout - Stack Vertically */}
                      <div className="md:hidden flex flex-col gap-4 relative z-10">
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
                      <div className="hidden md:grid relative z-10 grid-cols-12 gap-6 items-center group-hover:opacity-0 transition-opacity duration-300">
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
                  ) : (
                    <div className="group py-8 md:py-10 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6 cursor-pointer">
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
                  )}
                </ScrollReveal>
              ))
            ) : activeTab === "clients" ? (
              clients.map((client, index) => (
                <ScrollReveal key={client.name} delay={index * 50}>
                  {(client.name === "PayPro" || client.name === "Beehive Rental and Sales" || client.name === "Custom Branded Screen Cleaners") ? (
                    <div className="group relative py-6 md:py-8 border-b border-border transition-colors duration-200 -mx-6 px-6 cursor-pointer overflow-hidden">
                      {/* Client Image - only visible on hover on desktop */}
                      <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-2xl overflow-hidden" style={{ zIndex: 0 }}>
                        <Image
                          src={
                            client.name === "PayPro"
                              ? "/clients/paypro.png"
                              : client.name === "Beehive Rental and Sales"
                              ? "/clients/beehive.png"
                              : "/clients/custom-branded.png"
                          }
                          alt={client.name}
                          fill
                          className="object-cover object-center rounded-2xl"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Mobile Layout - Stack Vertically */}
                      <div className="md:hidden flex flex-col gap-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <h3 className="font-heading text-xl font-medium text-foreground">{client.name}</h3>
                        </div>
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
                      <div className="hidden md:grid relative z-10 grid-cols-12 gap-4 group-hover:opacity-0 transition-opacity duration-300">
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
                  ) : (
                    <div className="group py-6 md:py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6 cursor-pointer">
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
                  )}
                </ScrollReveal>
              ))
            ) : (
              team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 50}>
                  {(member.name === "Crew Cam" || member.name === "BidMyBrace" || member.name === "BeWeddy") ? (
                    <div className="group relative py-6 md:py-8 border-b border-border transition-colors duration-200 -mx-6 px-6 cursor-pointer overflow-hidden">
                      {/* Team Image - only visible on hover on desktop */}
                      <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-2xl overflow-hidden" style={{ zIndex: 0 }}>
                        <Image
                          src={
                            member.name === "Crew Cam"
                              ? "/team/crew-cam.png"
                              : member.name === "BidMyBrace"
                              ? "/team/bidmybrace.png"
                              : "/team/beweddy.png"
                          }
                          alt={member.name}
                          fill
                          className="object-cover object-center rounded-2xl"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Mobile Layout - Stack Vertically */}
                      <div className="md:hidden flex flex-col gap-3 relative z-10">
                        <h3 className="font-heading text-xl font-medium text-foreground">{member.name}</h3>
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
                      <div className="hidden md:grid relative z-10 grid-cols-12 gap-4 group-hover:opacity-0 transition-opacity duration-300">
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
                  ) : (
                    <div className="group py-6 md:py-8 border-b border-border hover:bg-secondary/50 transition-colors duration-200 -mx-6 px-6 cursor-pointer">
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
                  )}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
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
