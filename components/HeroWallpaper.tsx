"use client"

import { ArrowDown } from "lucide-react"

export function HeroWallpaper() {

  return (
    <div
      className="absolute left-0 right-0 overflow-hidden bg-black"
      style={{
        top: "0",
        height: "100vh",
      }}
    >
      {/* Main card */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          borderRadius: "0 0 32px 32px",
        }}
      >
        <div
          className="relative w-full h-full overflow-hidden pointer-events-auto"
          style={{
            borderRadius: "0 0 32px 32px",
            boxShadow:
              "0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.3)",
          }}
        >

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center z-[7] pointer-events-none">
              <div className="max-w-[1200px] mx-auto px-6 py-32 text-center pointer-events-auto">
                {/* Tagline */}
                <div className="inline-block px-4 py-2 rounded-full backdrop-blur-sm bg-black/10 border border-white/05 mb-8">
                  <p className="text-sm font-mono tracking-[0.3em] text-white/70">AI ARCHITECTURE STUDIO</p>
                </div>

                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-white">
                  Crafting Digital
                  <br />
                  Intelligence
                </h1>

                {/* Subtitle */}
                <div
                  className="inline-block px-6 py-3 rounded-full backdrop-blur-sm mb-12"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 70%, transparent 100%)",
                  }}
                >
                  <p className="text-lg text-white/80 max-w-xl">
                    We architect AI systems that amplify human capability and compound competitive advantage.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#portfolio"
                    className="px-8 py-4 bg-white text-black font-medium transition-all duration-200 hover:bg-white/90 rounded-lg"
                  >
                    View Our Work
                  </a>
                  <a
                    href="#connect"
                    className="px-8 py-4 border border-white/50 text-white font-medium transition-all duration-200 hover:bg-white hover:text-black hover:border-white rounded-lg"
                  >
                    Start a Project
                  </a>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                  <ArrowDown className="w-5 h-5 text-white/50" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
