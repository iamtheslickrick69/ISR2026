"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export function HeroWallpaper() {
  const [isVisible, setIsVisible] = useState(false)
  const [showStory, setShowStory] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      video.currentTime = 0
      video.play()
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
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
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.6) grayscale(100%) contrast(1.1)',
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

          {/* Hero Content - Clean Minimalist Layout */}
          <div className="absolute inset-0 flex items-center justify-center z-[10] pointer-events-none" style={{ paddingTop: '80px' }}>
              <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-24 sm:py-32 pointer-events-auto w-full">

                {/* Main Headline - Starlink Style - ABOVE LOGO */}
                <div
                  className="text-center mb-12 sm:mb-16"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none max-w-6xl mx-auto px-4 uppercase" style={{ letterSpacing: '-0.02em' }}>
                    AI Is Leveling the
                    <br />
                    Playing Field For Everyone
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mt-8 max-w-6xl mx-auto px-4 font-light uppercase flex items-center justify-center gap-2"
                    style={{
                      fontFamily: "'Rajdhani', 'Orbitron', 'Exo 2', 'Arial Narrow', 'Arial', sans-serif",
                      letterSpacing: '0.15em',
                      fontWeight: 300
                    }}
                  >
                    <span>Never before has the stage been more set for those</span>
                    <button
                      onClick={() => setShowStory(true)}
                      className="text-white/90 hover:text-white transition-all duration-200 hover:scale-110 cursor-pointer font-bold"
                      aria-label="Learn more about Haestus"
                      style={{
                        minWidth: '44px',
                        minHeight: '44px',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                    >
                      &gt;
                    </button>
                  </p>
                </div>

                {/* Icon - ABOVE LOGO */}
                <div
                  className="flex justify-center mb-8 sm:mb-10"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
                    transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
                  }}
                >
                  <Image
                    src="/blackmm.png"
                    alt="Haestus Icon"
                    width={80}
                    height={80}
                    className="w-auto h-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px]"
                    priority
                    style={{
                      filter: 'brightness(0) invert(1) drop-shadow(0 10px 40px rgba(255, 255, 255, 0.1))',
                    }}
                  />
                </div>

                {/* Large Centered Logo - BELOW ICON */}
                <div
                  className="flex justify-center mb-16 sm:mb-20"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
                    transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                  }}
                >
                  <Image
                    src="/trans1.png"
                    alt="Haestus"
                    width={200}
                    height={200}
                    className="w-auto h-auto max-w-[175px] sm:max-w-[245px] md:max-w-[350px]"
                    priority
                    style={{
                      filter: 'brightness(0) invert(1) drop-shadow(0 10px 40px rgba(255, 255, 255, 0.1))',
                    }}
                  />
                </div>

                {/* Testimonial Cards - Starlink Style */}
                <div
                  className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16 px-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                  }}
                >
                  {/* Left Card */}
                  <div
                    className="relative pl-8 py-8"
                    style={{
                      borderLeft: '2px solid rgba(255,255,255,0.3)',
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                      TRANSFORMATION
                    </h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                      Every industry will be transformed. Every job will evolve. Every business will rebuild.
                    </p>
                  </div>

                  {/* Right Card */}
                  <div
                    className="relative pl-8 py-8"
                    style={{
                      borderLeft: '2px solid rgba(255,255,255,0.3)',
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                      COLLABORATION
                    </h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                      AI amplifies human potential. The future belongs to teams that combine human creativity with machine intelligence.
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div
                  className="max-w-4xl mx-auto mb-16 px-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
                  }}
                >
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-white text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Amplify Collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Create Space for Creativity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Leveraging AI not Humans</span>
                    </div>
                  </div>
                </div>

                {/* CTA - Starlink Style */}
                <div
                  className="flex flex-col sm:flex-row justify-center gap-4 px-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
                  }}
                >
                  <a
                    href="#services"
                    className="text-base font-bold px-12 py-4 rounded-lg bg-transparent text-white hover:bg-white/10 transition-all duration-200 text-center uppercase tracking-wide"
                    style={{
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      minHeight: '56px',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    VIEW ALL PLANS
                  </a>
                  <a
                    href="/portal"
                    className="text-base font-bold px-12 py-4 rounded-lg text-white hover:opacity-90 transition-all duration-200 text-center uppercase tracking-wide"
                    style={{
                      background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
                      minHeight: '56px',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    CLIENTS
                  </a>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                  <ArrowDown className="w-5 h-5 text-white/40" />
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

          {/* Card - Liquid Glass - Centered */}
          <div
            className="fixed z-[70] w-full max-w-3xl mx-4"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'gentlePopIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <div
              className="rounded-3xl p-10 sm:p-14 relative"
              style={{
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.12)',
                maxHeight: '85vh',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowStory(false)}
                className="absolute top-6 right-6 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 hover:bg-gray-100"
                style={{
                  background: 'rgba(0, 0, 0, 0.03)',
                  minWidth: '44px',
                  minHeight: '44px',
                  WebkitTapHighlightColor: 'transparent',
                }}
                aria-label="Close"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div>
                {/* Header */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 uppercase tracking-wide text-center whitespace-nowrap" style={{ letterSpacing: '0.05em', fontWeight: 700 }}>
                  Who Want To Step Into The Light
                </h3>

                <div className="w-24 h-1 bg-gradient-to-r from-[#d97757] to-[#ffd7b5] mb-8 rounded-full mx-auto" />

                {/* Opening Paragraph */}
                <p className="text-gray-800 leading-relaxed text-base mb-10 font-medium" style={{ fontWeight: 500 }}>
                  Hephaestus was the Greek god of fire, metalworking, and craftsmanship. Thrown from Olympus, crippled, underestimated—yet he became the master craftsman of the gods.
                </p>

                {/* Key Points */}
                <div className="space-y-6 mb-10">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 text-base" style={{ fontWeight: 700 }}>Turns pain into mastery</h5>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium" style={{ fontWeight: 500 }}>
                      Instead of dwelling on rejection, he channeled it into becoming the best. Pure "use the wound as fuel" energy.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 text-base" style={{ fontWeight: 700 }}>Builds for legends</h5>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium" style={{ fontWeight: 500 }}>
                      Achilles' armor. Zeus' thunderbolts. The enabler, not the emperor. Every hero depended on his craft.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 text-base" style={{ fontWeight: 700 }}>Creation outlasts power</h5>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium" style={{ fontWeight: 500 }}>
                      Lightning fades. Systems endure. The world runs on builders long after the loud ones are gone.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 text-base" style={{ fontWeight: 700 }}>Works while others posture</h5>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium" style={{ fontWeight: 500 }}>
                      While Olympus drowns in drama, he's in the forge doing the work. Quiet dominance. Relatable excellence.
                    </p>
                  </div>
                </div>

                {/* Our Mission */}
                <div className="pt-8 mt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide" style={{ fontWeight: 700 }}>Our Mission</h4>
                  <p className="text-base text-gray-800 leading-relaxed font-semibold" style={{ fontWeight: 600 }}>
                    The age of AI is the rematch between David and Goliath. We're the ones making the slingshots.
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
              from {
                opacity: 0;
                transform: scale(0.96);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </>
      )}
    </div>
  )
}
