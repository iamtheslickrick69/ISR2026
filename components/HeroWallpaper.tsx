"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroWallpaper() {
  const [isVisible, setIsVisible] = useState(false)
  const [showStory, setShowStory] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Prevent body scroll when story modal is open (iOS fix)
  useEffect(() => {
    if (showStory) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [showStory])

  return (
    <div
      className="absolute left-0 right-0"
      style={{
        top: "0",
        height: "100vh",
        overflow: "visible",
        zIndex: 0,
        background: "#000000",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.6) grayscale(100%) contrast(1.1)'
        }}
      >
        <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/123454321green.mp4" type="video/mp4" />
      </video>

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

          {/* Hero Content - Split Screen Layout */}
          <div className="absolute inset-0 flex items-center justify-center z-[10] pointer-events-none" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-4 pointer-events-auto w-full">

              {/* Logo - Centered Top */}
              <div
                className="flex items-center justify-center mb-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s',
                }}
              >
                <button
                  onClick={() => setShowStory(true)}
                  className="cursor-pointer transition-transform duration-200 hover:scale-105"
                  aria-label="Learn more about Haestus"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <Image
                    src="/mm.png"
                    alt="Haestus"
                    width={330}
                    height={330}
                    className="w-auto h-auto max-w-[240px] sm:max-w-[300px]"
                    priority
                    style={{
                      filter: 'brightness(0) invert(1)',
                      borderRadius: '6px'
                    }}
                  />
                </button>
              </div>

              {/* Split Screen Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* LEFT SIDE: Title, Subtitle, Buttons */}
                <div
                  className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                  }}
                >
                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    The age of AI is the rematch between David and Goliath.
                  </h1>

                  {/* Subtitle - directly under title */}
                  <p className="text-sm sm:text-base md:text-lg text-white/70 font-medium tracking-wide italic">
                    and we're crafting slingshots
                  </p>

                  {/* Buttons Side by Side */}
                  <div className="flex flex-row gap-3 w-full max-w-md">
                    <a
                      href="#services"
                      className="flex-1 text-sm font-bold px-6 py-4 rounded-lg text-white hover:bg-white/10 transition-all duration-200 text-center uppercase tracking-wide"
                      style={{
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                    >
                      Learn More
                    </a>
                    <a
                      href="/portal"
                      className="flex-1 text-sm font-bold px-6 py-4 rounded-lg text-white hover:bg-white/10 transition-all duration-200 text-center uppercase tracking-wide"
                      style={{
                        border: '2px solid #d97757',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                    >
                      Client Portal
                    </a>
                  </div>
                </div>

                {/* RIGHT SIDE: Three Pillars Vertical */}
                <div
                  className="flex flex-col gap-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                  }}
                >
                  {/* Strategy */}
                  <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Strategy</h3>
                      <p className="text-sm text-white/60 leading-relaxed">Build roadmaps that matter</p>
                    </div>
                  </div>

                  {/* Implementation */}
                  <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Implementation</h3>
                      <p className="text-sm text-white/60 leading-relaxed">Ship products that scale</p>
                    </div>
                  </div>

                  {/* Excellence */}
                  <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" style={{ color: '#d97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Excellence</h3>
                      <p className="text-sm text-white/60 leading-relaxed">Deliver reliable results</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <ArrowDown className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Story Card */}
      {showStory && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            style={{
              animation: 'fadeIn 0.4s ease-out',
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
            onClick={() => setShowStory(false)}
          />

          {/* Card - Dark Theme - Centered */}
          <div
            className="fixed z-[70] w-full max-w-2xl mx-4"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'gentlePopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <div
              className="rounded-2xl p-6 sm:p-8 relative"
              style={{
                background: 'rgba(10, 10, 10, 0.98)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                maxHeight: '85vh',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowStory(false)}
                className="absolute top-4 right-4 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 hover:bg-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  minWidth: '40px',
                  minHeight: '40px',
                  WebkitTapHighlightColor: 'transparent',
                }}
                aria-label="Close"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div>
                {/* Header */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 uppercase tracking-wide text-center" style={{ letterSpacing: '0.05em', fontWeight: 700 }}>
                  Leveraging AI
                </h3>

                <div className="w-16 h-0.5 bg-gradient-to-r from-[#d97757] to-[#ffd7b5] mb-4 rounded-full mx-auto" />

                {/* Opening Paragraph */}
                <p className="text-gray-300 leading-relaxed text-xs mb-4 font-medium" style={{ fontWeight: 500 }}>
                  Hephaestus was the Greek god of fire, metalworking, and craftsmanship. Thrown from Olympus, crippled, underestimated—yet he became the master craftsman of the gods.
                </p>

                {/* Key Points */}
                <div className="space-y-3 mb-4">
                  <div>
                    <h5 className="font-bold text-white mb-1 text-xs" style={{ fontWeight: 700 }}>Turns pain into mastery</h5>
                    <p className="text-xs text-gray-400 leading-snug font-medium" style={{ fontWeight: 500 }}>
                      Instead of dwelling on rejection, he channeled it into becoming the best.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-1 text-xs" style={{ fontWeight: 700 }}>Builds for legends</h5>
                    <p className="text-xs text-gray-400 leading-snug font-medium" style={{ fontWeight: 500 }}>
                      Achilles' armor. Zeus' thunderbolts. Every hero depended on his craft.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-1 text-xs" style={{ fontWeight: 700 }}>Creation outlasts power</h5>
                    <p className="text-xs text-gray-400 leading-snug font-medium" style={{ fontWeight: 500 }}>
                      Lightning fades. Systems endure. The world runs on builders.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-1 text-xs" style={{ fontWeight: 700 }}>Works while others posture</h5>
                    <p className="text-xs text-gray-400 leading-snug font-medium" style={{ fontWeight: 500 }}>
                      While Olympus drowns in drama, he's in the forge doing the work.
                    </p>
                  </div>
                </div>

                {/* Our Mission */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide" style={{ fontWeight: 700 }}>Our Mission</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-semibold mb-2" style={{ fontWeight: 600 }}>
                    The age of AI is the rematch between David and Goliath.
                  </p>
                  <p className="text-xs leading-relaxed font-bold mb-3" style={{
                    fontWeight: 700,
                    color: '#d97757',
                    textShadow: '0 0 20px rgba(217, 119, 87, 0.3)'
                  }}>
                    We're the ones making the slingshots.
                  </p>
                  <p className="text-right text-xl" style={{
                    fontFamily: "'Brush Script MT', 'Segoe Script', 'Comic Sans MS', cursive",
                    color: '#d97757',
                    opacity: 0.8,
                    fontStyle: 'italic'
                  }}>
                    — ISR
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Animation CSS */}
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes gentlePopIn {
              0% {
                opacity: 0;
                transform: translate(-50%, -48%) scale(0.92);
              }
              100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
              }
            }
          `}</style>
        </>
      )}
    </div>
  )
}
