"use client"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Logo } from "@/components/logo"
import { HeroWallpaper } from "@/components/HeroWallpaper"
import { ArrowUpRight, Mail } from "lucide-react"
import Image from "next/image"

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
  { date: "Dec 2024", title: "Why 30% of AI Projects Fail After POC", readTime: "8 min" },
  { date: "Dec 2024", title: "The Architecture-First Approach to AI", readTime: "6 min" },
  { date: "Nov 2024", title: "Humans Over Automation: A Framework", readTime: "10 min" },
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

      {/* Services Section - Apple Standard Mobile */}
      <section id="services" className="py-16 sm:py-24 md:py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <ScrollReveal>
              <h2 className="font-heading text-mobile-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 sm:mb-8 px-4 sm:px-0">
                Transform Your Business{" "}
                <span style={{ color: '#1ebda5' }}>with AI</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-mobile-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 sm:mb-12 px-4 sm:px-0">
                We don't just talk AI. We build it. Real solutions. Real results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-mobile-xs sm:text-sm font-mono tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6">WHAT WE OFFER</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h3 className="font-heading text-mobile-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-3 sm:mb-4 px-4 sm:px-0">Our Services</h3>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-mobile-base sm:text-lg text-muted-foreground px-4 sm:px-0">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </ScrollReveal>
          </div>

          {/* Three Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Consulting - Apple Mobile Standards */}
            <ScrollReveal delay={100}>
              <div className="card-entrance card-entrance-delay-1 group p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-200 angled-border-subtle" style={{ border: '2px solid #1ebda5' }}>
                <div className="w-12 h-12 rounded-lg mb-5 sm:mb-6 flex items-center justify-center" style={{ background: 'rgba(30, 189, 165, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-heading text-mobile-xl sm:text-2xl font-semibold text-foreground mb-2">AI Consulting</h3>
                <p className="text-mobile-sm sm:text-sm font-semibold mb-5 sm:mb-6" style={{ color: '#1ebda5' }}>Strategy & Implementation</p>
                <p className="text-mobile-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
                  We help you understand where AI fits in your business and develop clear implementation strategies.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI Strategy & Roadmap
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Process Audits
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Implementation Planning
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#1ebda5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Team Training
                  </li>
                </ul>
                <a
                  href="#connect"
                  className="btn-mobile-secondary enhanced-button flex items-center justify-center gap-2 w-full"
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
              <div className="card-entrance card-entrance-delay-2 group p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-200 angled-border-subtle" style={{ border: '2px solid #e26a00' }}>
                <div className="w-12 h-12 rounded-lg mb-5 sm:mb-6 flex items-center justify-center" style={{ background: 'rgba(226, 106, 0, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-heading text-mobile-xl sm:text-2xl font-semibold text-foreground mb-2">AI Agent Building</h3>
                <p className="text-mobile-sm sm:text-sm font-semibold mb-5 sm:mb-6" style={{ color: '#e26a00' }}>Custom AI Solutions</p>
                <p className="text-mobile-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
                  Custom AI agents tailored to your specific business needs and workflows.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom Built Agents
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tailored to Your Business
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fully Integrated
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#e26a00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ongoing Support
                  </li>
                </ul>
                <a
                  href="#connect"
                  className="btn-mobile-secondary enhanced-button flex items-center justify-center gap-2 w-full"
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
              <div className="card-entrance card-entrance-delay-3 group p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-200 angled-border-subtle" style={{ border: '2px solid #c49f00' }}>
                <div className="w-12 h-12 rounded-lg mb-5 sm:mb-6 flex items-center justify-center" style={{ background: 'rgba(255, 224, 70, 0.2)' }}>
                  <svg className="w-6 h-6" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-heading text-mobile-xl sm:text-2xl font-semibold text-foreground mb-2">Web App & Design</h3>
                <p className="text-mobile-sm sm:text-sm font-semibold mb-5 sm:mb-6" style={{ color: '#c49f00' }}>Full-Stack Development</p>
                <p className="text-mobile-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
                  Modern web applications built with the latest technologies and best practices.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Modern UI/UX Design
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Responsive & Fast
                  </li>
                  <li className="flex items-center gap-3 text-mobile-sm sm:text-sm text-muted-foreground">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#c49f00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO Optimized
                  </li>
                </ul>
                <a
                  href="#connect"
                  className="btn-mobile-secondary enhanced-button flex items-center justify-center gap-2 w-full"
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

      {/* Process Section - iOS Mobile */}
      <section id="process" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="section-divider" />

        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #1ebda5, #2dd4bf, #fbbf24, #f59e0b, #ffe046, #1ebda5)',
            backgroundSize: '600% 600%',
            animation: 'gradientFlow 25s ease-in-out infinite',
            zIndex: 0,
          }}
        />

        {/* Overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.1) 100%)',
            zIndex: 0,
          }}
        />

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 50%;
            }
            50% {
              background-position: 50% 100%;
            }
            75% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-12 sm:pt-16 md:pt-20 relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <ScrollReveal>
              <div className="inline-block px-4 sm:px-5 py-1.5 rounded-full mb-4 sm:mb-5" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                <p className="text-mobile-xs sm:text-sm font-medium tracking-wider text-gray-700">HOW WE WORK</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-mobile-4xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-3 sm:mb-4 text-white drop-shadow-lg px-4 sm:px-0">
                Our Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-mobile-base sm:text-lg text-white/90 max-w-3xl mx-auto drop-shadow px-4 sm:px-0">
                From idea to implementation, we guide you every step of the way
              </p>
            </ScrollReveal>
          </div>

          {/* Process Cards - iOS Mobile */}
          <div className="grid md:grid-cols-4 gap-4 sm:gap-5 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ zIndex: 0 }} />

            {/* Card 1 - Discover */}
            <ScrollReveal delay={100}>
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ zIndex: 1 }}>
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)' }}>
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-mobile-xs font-medium text-gray-500 mb-2">01</p>
                <h3 className="font-heading text-mobile-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Discover</h3>
                <p className="text-mobile-sm sm:text-sm text-gray-600 leading-relaxed">
                  We learn your business, challenges, and goals
                </p>
                <div className="mt-4 sm:mt-5 h-1 bg-gray-200 rounded-full" />
              </div>
            </ScrollReveal>

            {/* Card 2 - Design */}
            <ScrollReveal delay={200}>
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ zIndex: 1 }}>
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)' }}>
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <p className="text-mobile-xs font-medium text-gray-500 mb-2">02</p>
                <h3 className="font-heading text-mobile-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Design</h3>
                <p className="text-mobile-sm sm:text-sm text-gray-600 leading-relaxed">
                  We create a tailored solution and strategy
                </p>
                <div className="mt-4 sm:mt-5 h-1 bg-gray-200 rounded-full" />
              </div>
            </ScrollReveal>

            {/* Card 3 - Develop */}
            <ScrollReveal delay={300}>
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ zIndex: 1 }}>
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)' }}>
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <p className="text-mobile-xs font-medium text-gray-500 mb-2">03</p>
                <h3 className="font-heading text-mobile-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Develop</h3>
                <p className="text-mobile-sm sm:text-sm text-gray-600 leading-relaxed">
                  We build and refine your AI solution
                </p>
                <div className="mt-4 sm:mt-5 h-1 bg-gray-200 rounded-full" />
              </div>
            </ScrollReveal>

            {/* Card 4 - Deploy */}
            <ScrollReveal delay={400}>
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ zIndex: 1 }}>
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)' }}>
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <p className="text-mobile-xs font-medium text-gray-500 mb-2">04</p>
                <h3 className="font-heading text-mobile-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Deploy</h3>
                <p className="text-mobile-sm sm:text-sm text-gray-600 leading-relaxed">
                  We launch and support your success
                </p>
                <div className="mt-4 sm:mt-5 h-1 bg-gray-200 rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PayPro AI Section - iOS Mobile */}
      <section id="paypro" className="py-16 sm:py-24 md:py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <ScrollReveal>
              <h2 className="font-heading text-mobile-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 sm:mb-8 text-foreground px-4 sm:px-0">
                AI isn't coming,<br />it's here.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-mobile-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                From custom AI agents to full implementation consulting, we build solutions that drive revenue. Real AI. Real results. Real ROI.
              </p>
            </ScrollReveal>
          </div>

          {/* Single Card - Centered */}
          <div className="max-w-2xl mx-auto">
            {/* Increasing Revenue */}
            <ScrollReveal delay={200}>
              <div
                className="relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-10 h-full flex flex-col"
                style={{
                  boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/haha.png"
                    alt="AI Implementation Background"
                    fill
                    className="object-cover object-center rounded-2xl"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 flex flex-col items-end text-right">
                  <p className="text-mobile-xs sm:text-sm font-mono tracking-[0.2em] text-white/90 mb-3" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>INCREASING REVENUE</p>
                  <h3 className="font-heading text-mobile-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-5 sm:mb-6" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.7)' }}>
                    #1 AI<br />Implementation
                  </h3>

                  <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
                    <div className="flex items-center gap-2.5 sm:gap-3 text-white justify-end" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)' }}>
                      <span className="text-mobile-sm sm:text-base">Custom AI products</span>
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2.5 sm:gap-3 text-white justify-end" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)' }}>
                      <span className="text-mobile-sm sm:text-base">Implementation consulting</span>
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2.5 sm:gap-3 text-white justify-end" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)' }}>
                      <span className="text-mobile-sm sm:text-base">Built for your business</span>
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
                    </div>
                  </div>

                  <a
                    href="#ai-solutions"
                    className="btn-mobile-secondary rounded-button bg-white font-medium transition-all duration-200 hover:shadow-lg w-full sm:w-auto text-center"
                    style={{ color: '#1ebda5' }}
                  >
                    Explore AI Solutions
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Section - iOS Mobile */}
      <section id="portfolio" className="py-16 sm:py-24 md:py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div>
              <ScrollReveal>
                <p className="text-mobile-xs sm:text-sm font-mono tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6">OUR WORK</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-heading text-mobile-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Portfolio</h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <p className="text-mobile-sm sm:text-base text-muted-foreground max-w-md">We don't do MVPs. We ship products that feel inevitable.</p>
            </ScrollReveal>
          </div>

          {/* iOS-Style Tabs */}
          <div className="relative mb-8">
            <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 pb-2" style={{ borderBottom: '1px solid #e5e5e5', overflowX: 'auto' }}>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-4 sm:px-6 py-3 font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "projects"
                    ? "text-foreground border-b-2 border-foreground -mb-px"
                    : "text-gray-400 hover:text-foreground"
                }`}
                style={{ fontSize: '15px', minHeight: '44px' }}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("clients")}
                className={`px-4 sm:px-6 py-3 font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "clients"
                    ? "text-foreground border-b-2 border-foreground -mb-px"
                    : "text-gray-400 hover:text-foreground"
                }`}
                style={{ fontSize: '15px', minHeight: '44px' }}
              >
                Clients
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-4 sm:px-6 py-3 font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "team"
                    ? "text-foreground border-b-2 border-foreground -mb-px"
                    : "text-gray-400 hover:text-foreground"
                }`}
                style={{ fontSize: '15px', minHeight: '44px' }}
              >
                Team
              </button>
            </div>

            {/* iOS Swipe Hint */}
            <div className="md:hidden flex items-center justify-center gap-2 mb-6 text-mobile-xs text-gray-400">
              <svg className="w-4 h-4 swipe-indicator" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to navigate</span>
              <svg className="w-4 h-4 swipe-indicator" style={{ transform: 'rotate(180deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="group relative py-6 md:py-8 border-b border-border transition-colors duration-200 -mx-6 px-6 cursor-pointer overflow-hidden">
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
                      <div className="md:hidden flex flex-col gap-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <span key={t} className="tech-tag text-xs">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <h3 className="font-heading text-xl font-medium text-foreground flex items-center gap-2">
                          {project.name}
                          <ArrowUpRight className="w-4 h-4" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        <span className="text-sm font-mono text-muted-foreground">{project.stat}</span>
                      </div>

                      {/* Desktop Grid Layout */}
                      <div className="hidden md:grid relative z-10 grid-cols-12 gap-4 group-hover:opacity-0 transition-opacity duration-300">
                        <div className="col-span-1 text-muted-foreground font-mono text-sm">{project.year}</div>
                        <div className="col-span-3 font-heading text-foreground font-medium flex items-center gap-2">
                          {project.name}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                        <div className="col-span-4 text-muted-foreground">{project.description}</div>
                        <div className="col-span-2 text-sm font-mono text-muted-foreground">{project.stat}</div>
                        <div className="col-span-2 flex flex-wrap gap-2 justify-end">
                          {project.tech.map((t) => (
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
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <span key={t} className="tech-tag text-xs">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <h3 className="font-heading text-xl font-medium text-foreground flex items-center gap-2">
                          {project.name}
                          <ArrowUpRight className="w-4 h-4" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        <span className="text-sm font-mono text-muted-foreground">{project.stat}</span>
                      </div>

                      {/* Desktop Grid Layout */}
                      <div className="hidden md:grid grid-cols-12 gap-4">
                        <div className="col-span-1 text-muted-foreground font-mono text-sm">{project.year}</div>
                        <div className="col-span-3 font-heading text-foreground font-medium flex items-center gap-2">
                          {project.name}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                        <div className="col-span-4 text-muted-foreground">{project.description}</div>
                        <div className="col-span-2 text-sm font-mono text-muted-foreground">{project.stat}</div>
                        <div className="col-span-2 flex flex-wrap gap-2 justify-end">
                          {project.tech.map((t) => (
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

          <ScrollReveal delay={300}>
            <div className="mt-16 p-8 border border-border angled-border-subtle text-center">
              <p className="text-muted-foreground italic">
                More projects launching soon. We're selective about what we build.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Insights Section - iOS Mobile */}
      <section id="insights" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="section-divider" />

        {/* Video Background */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: 'cover', filter: 'brightness(0.8)' }}
          >
            <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/111peachbaby.mp4" type="video/mp4" />
          </video>

          {/* Subtle overlay for balance */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 sm:pt-20 md:pt-24 relative" style={{ zIndex: 1 }}>
          <ScrollReveal>
            <p className="text-mobile-xs sm:text-sm font-mono tracking-[0.2em] text-white mb-4 sm:mb-6 drop-shadow-lg">INSIGHTS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-mobile-4xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 sm:mb-8 text-white drop-shadow-lg px-4 sm:px-0">Recent Thoughts</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-mobile-base sm:text-lg text-white max-w-2xl mb-12 sm:mb-16 drop-shadow-lg px-4 sm:px-0">
              Personal research on where AI is, where it's going, and what matters.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {insights.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 100}>
                <div className="group p-5 sm:p-6 md:p-8 border border-white/30 angled-border-subtle cursor-pointer h-full flex flex-col transition-all duration-200 hover:border-white/70 bg-white/10 backdrop-blur-md hover:bg-white/20">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-mobile-xs sm:text-sm text-white/90 mb-3 sm:mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-white/90 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-mobile-lg sm:text-xl font-medium text-white flex-grow">{post.title}</h3>
                  <div className="mt-5 sm:mt-6 flex items-center gap-2 text-mobile-xs sm:text-sm text-white/90 group-hover:text-white transition-colors duration-200">
                    Read more
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section - iOS Mobile */}
      <section id="connect" className="py-16 sm:py-24 md:py-32 relative">
        <div className="section-divider" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
          <div className="max-w-3xl mx-auto text-center relative">
            {/* Oogway Image */}
            <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none" style={{ top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <Image
                src="/oogway1.png"
                alt="Oogway"
                width={2400}
                height={2400}
                className="opacity-40"
                style={{ objectFit: 'contain', filter: 'brightness(0)' }}
              />
            </div>

            <div className="relative" style={{ zIndex: 0 }}>
              <ScrollReveal>
                <p className="text-mobile-xs sm:text-sm font-mono tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6">GET IN TOUCH</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-heading text-mobile-4xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 sm:mb-8 px-4 sm:px-0">
                  Let's Build Something Legendary
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-mobile-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 sm:mb-12 px-4 sm:px-0">
                  Three projects per month. Enterprise-grade standards. No inflated promises—only real capabilities, real
                  results.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="p-6 sm:p-8 md:p-12 border border-border angled-border mb-6 sm:mb-8 mx-4 sm:mx-0">
                <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-foreground mx-auto mb-4 sm:mb-6" />
                <a
                  href="mailto:hello@haestus.dev"
                  className="text-mobile-2xl sm:text-3xl md:text-4xl font-heading text-foreground hover:opacity-70 transition-opacity duration-200 block mb-3 sm:mb-4 break-all"
                >
                  hello@haestus.dev
                </a>
                <p className="text-mobile-xs sm:text-sm text-muted-foreground">We respond within 24 hours.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                <a
                  href="#portfolio"
                  className="btn-mobile-primary enhanced-button rounded-button bg-foreground text-background font-medium text-center"
                >
                  View My Work →
                </a>
                <a
                  href="/portal"
                  className="btn-mobile-primary enhanced-button rounded-button border border-foreground text-foreground font-medium hover:bg-foreground hover:text-background text-center"
                >
                  Clients
                </a>
              </div>
            </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
