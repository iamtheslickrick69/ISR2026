"use client"

import { ArrowDown, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroWallpaper() {
  const [isVisible, setIsVisible] = useState(false)
  const [showOriginStory, setShowOriginStory] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className="absolute left-0 right-0 bg-background"
      style={{
        top: "0",
        height: "100vh",
        overflow: "visible",
        zIndex: 0,
      }}
    >
      {/* Painterly Gradient Background - 1/3 of page */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "0",
          height: "33vh",
          background: "linear-gradient(45deg, #1ebda5, #e26a00, #ffe046)",
          opacity: 0.6,
          filter: "blur(60px)",
          transform: "scale(1.2)",
          zIndex: 0,
        }}
      />

      {/* Main card */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          borderRadius: "0 0 32px 32px",
        }}
      >
        <div
          className="relative w-full h-full pointer-events-auto"
          style={{
            borderRadius: "0 0 32px 32px",
            boxShadow:
              "0 50px 100px -20px rgba(0, 0, 0, 0.08), 0 30px 60px -30px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(0, 0, 0, 0.08)",
            overflow: "visible",
          }}
        >

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center z-[7] pointer-events-none">
              <div className="max-w-[1200px] mx-auto px-6 py-32 text-center pointer-events-auto">

                {/* Animated Logo */}
                <div
                  className="mb-12 flex justify-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
                    transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div className="relative inline-block">
                    <div
                      style={{
                        transform: showOriginStory ? 'translateX(-80px)' : 'translateX(0)',
                        transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      <Image
                        src="/line.png"
                        alt="Haestus"
                        width={813}
                        height={244}
                        className="h-auto w-full max-w-[700px] px-4"
                        priority
                        style={{
                          filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.08))',
                        }}
                      />
                    </div>

                    {/* Subtle Chevron Icon */}
                    <button
                      onClick={() => setShowOriginStory(true)}
                      className="absolute top-1/2 -translate-y-1/2 -right-4 p-2.5 rounded-full transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        animation: 'subtle-pulse 3.5s ease-in-out infinite',
                      }}
                      aria-label="Learn about our origin story"
                    >
                      <ChevronRight className="w-4 h-4 text-foreground/70" />
                    </button>

                    {/* White Widget */}
                    {showOriginStory && (
                      <div
                        className="absolute top-0 left-full ml-8"
                        style={{
                          width: '420px',
                          animation: 'liquid-morph 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transformOrigin: 'left center',
                        }}
                      >
                        <div
                          className="relative p-8 rounded-2xl bg-white"
                          style={{
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)',
                          }}
                        >
                          {/* Close Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setShowOriginStory(false)
                            }}
                            className="absolute top-3 right-3 p-1.5 rounded-full transition-all duration-200 hover:bg-gray-100"
                            aria-label="Close"
                          >
                            <X className="w-4 h-4 text-gray-500 hover:text-black" />
                          </button>

                          {/* Content */}
                          <p className="text-xs font-mono tracking-[0.25em] text-gray-500 mb-4">ORIGIN STORY</p>
                          <h3 className="font-heading text-xl font-medium tracking-tight mb-4 text-black">
                            Why We're Called Haestus
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            Hephaestus was the Greek god of fire, craftsmanship, and invention—the quiet architect who forged the
                            armor, tools, and machines that empowered both gods and humans.
                          </p>
                          <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            We believe AI can make the world a better place—if we build it with intention. We create tools that
                            help humanity rise with the tide of AI, not get swept away by it.
                          </p>
                          <p className="text-sm text-black font-medium">— Rocky, Founder</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                  @keyframes subtle-pulse {
                    0%, 100% {
                      opacity: 0.7;
                      transform: scale(1);
                    }
                    50% {
                      opacity: 0.95;
                      transform: scale(1.02);
                    }
                  }

                  @keyframes liquid-morph {
                    0% {
                      opacity: 0;
                      transform: scale(0.3) translateX(-100px);
                      filter: blur(10px);
                    }
                    60% {
                      opacity: 0.8;
                      filter: blur(2px);
                    }
                    100% {
                      opacity: 1;
                      transform: scale(1) translateX(0);
                      filter: blur(0);
                    }
                  }
                `}</style>

                {/* Tagline */}
                <div
                  className="inline-block px-4 py-2 rounded-lg backdrop-blur-sm bg-foreground/5 border border-border mb-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                  }}
                >
                  <p className="text-sm font-mono tracking-[0.3em] text-muted-foreground">AI ARCHITECTURE STUDIO</p>
                </div>

                <h1
                  className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-foreground"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
                  }}
                >
                  Crafting Digital
                  <br />
                  Intelligence
                </h1>

                {/* Subtitle */}
                <div
                  className="inline-block px-6 py-3 rounded-full backdrop-blur-sm mb-12"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 70%, transparent 100%)",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
                  }}
                >
                  <p className="text-lg text-muted-foreground max-w-xl">
                    We architect AI systems that amplify human capability and compound competitive advantage.
                  </p>
                </div>

                <div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
                  }}
                >
                  <a
                    href="#portfolio"
                    className="rounded-button px-8 py-4 bg-foreground text-background font-medium transition-all duration-200 hover:opacity-90"
                  >
                    View My Work →
                  </a>
                  <a
                    href="#connect"
                    className="rounded-button px-8 py-4 border border-foreground text-foreground font-medium transition-all duration-200 hover:bg-foreground hover:text-background"
                  >
                    Get In Touch
                  </a>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                  <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
