"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroWallpaper() {
  const [isVisible, setIsVisible] = useState(false)

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
          background: "linear-gradient(45deg, #121521, #38476b, #b6192e, #ffc1ac)",
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
                  <div className="relative">
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
                </div>

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
