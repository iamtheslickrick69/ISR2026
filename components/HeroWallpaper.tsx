"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function HeroWallpaper() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  // Progressive loading with guaranteed completion
  useEffect(() => {
    let animationFrame: number
    const startTime = Date.now()
    const duration = 1500 // 1.5 seconds guaranteed

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min((elapsed / duration) * 100, 100)

      setLoadProgress(progress)

      if (progress < 100) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Ensure loaded state is set after progress reaches 100
        setTimeout(() => setIsLoaded(true), 100)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  // Generate particle system
  useEffect(() => {
    if (prefersReducedMotion) return

    const particleCount = 30
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }))
    setParticles(newParticles)

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.vx
          let newY = p.y + p.vy
          let newVx = p.vx
          let newVy = p.vy

          if (newX <= 0 || newX >= 100) newVx *= -1
          if (newY <= 0 || newY >= 100) newVy *= -1

          return { ...p, x: newX, y: newY, vx: newVx, vy: newVy }
        }),
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  // Automated gentle tilt animation (no mouse interaction)
  const automatedTiltAnimation = prefersReducedMotion
    ? {}
    : {
        rotateX: [2, -2, 2],
        y: [0, -10, 0],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }

  return (
    <div
      ref={containerRef}
      className="absolute left-0 right-0 overflow-hidden"
      style={{
        perspective: "2000px",
        top: "16.67vh",
        height: "66.67vh",
      }}
    >
      {/* Loading shimmer skeleton */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loadProgress >= 100 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="w-[85%] max-w-6xl aspect-[16/9] rounded-[32px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Loading percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-6xl font-light text-white/90 font-mono mb-2">
                  {Math.floor(loadProgress)}%
                </div>
                <div className="text-sm text-white/50 tracking-[0.2em]">LOADING EXPERIENCE</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main 3D floating card */}
      <motion.div
        ref={cardRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: [0.19, 1.0, 0.22, 1.0] }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative w-full h-full overflow-hidden pointer-events-auto"
          animate={automatedTiltAnimation}
          style={{
            transformStyle: "preserve-3d",
            borderRadius: "0 0 32px 32px",
            boxShadow:
              "0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Black card outline (only bottom rounded) */}
          <div className="absolute inset-0 z-10 pointer-events-none border-2 border-black/40" style={{ borderRadius: "0 0 32px 32px" }} />

          {/* Holographic edge highlight (graceful and slower, 20% darker) */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ borderRadius: "0 0 32px 32px" }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    background: [
                      "linear-gradient(0deg, transparent, rgba(255,255,255,0.0816), transparent)",
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.0816), transparent)",
                      "linear-gradient(180deg, transparent, rgba(255,255,255,0.0816), transparent)",
                      "linear-gradient(270deg, transparent, rgba(255,255,255,0.0816), transparent)",
                      "linear-gradient(0deg, transparent, rgba(255,255,255,0.0816), transparent)",
                    ],
                  }
            }
            transition={
              prefersReducedMotion
                ? {}
                : {
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />

          {/* Main image with priority loading */}
          <div className="relative w-full h-full">
            <Image
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/7kisr.png"
              alt="Hero Background"
              fill
              priority
              quality={95}
              className="object-cover"
              onLoad={() => {
                // Image loaded, but respect the animation timing
                if (loadProgress >= 100 && !isLoaded) {
                  setIsLoaded(true)
                }
              }}
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 85vw, 1200px"
            />
          </div>

          {/* Hero Content - now locked to the 3D card */}
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
              className="absolute inset-0 flex items-center justify-center z-[7] pointer-events-none"
            >
              <div className="max-w-[1200px] mx-auto px-6 py-32 text-center pointer-events-auto">
                {/* Minimalistic glassmorphism pill around tagline */}
                <div className="inline-block px-4 py-2 rounded-full backdrop-blur-sm bg-black/10 border border-white/05 mb-8">
                  <p className="text-sm font-mono tracking-[0.3em] text-white/70">AI ARCHITECTURE STUDIO</p>
                </div>

                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-white">
                  Crafting Digital
                  <br />
                  Intelligence
                </h1>

                {/* Soft gradient pill around subtitle - no sharp border */}
                <div className="inline-block px-6 py-3 rounded-full backdrop-blur-sm mb-12" style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 70%, transparent 100%)'
                }}>
                  <p className="text-lg text-white/80 max-w-xl">
                    We architect AI systems that amplify human capability and compound competitive advantage.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#portfolio"
                    className="px-8 py-4 bg-white text-black font-medium transition-all duration-200 hover:bg-white/90 hover:scale-105 rounded-lg"
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
                  <ArrowDown className="w-5 h-5 text-white/50 animate-bounce" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Multi-layer vignette gradients (15% larger at top/bottom) */}
          <div className="absolute inset-0 z-[5] pointer-events-none">
            {/* Overall 10% darker overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(0,0,0,0.1)",
              }}
            />
            {/* Top gradient (15% larger) */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 20%, transparent 45%)",
              }}
            />
            {/* Outer strong vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.9) 100%)",
              }}
            />
            {/* Inner subtle gradient for depth */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 50% 40%, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 100%)",
              }}
            />
            {/* Bottom gradient (15% larger) */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)",
              }}
            />
          </div>

          {/* Animated grain texture */}
          <motion.div
            className="absolute inset-0 z-[6] pointer-events-none opacity-[0.03]"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }
            }
            transition={
              prefersReducedMotion
                ? {}
                : {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
            }
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Ambient glow - subtle neutral shadow */}
          <div
            className="absolute -inset-[2px] z-[-1] blur-2xl opacity-30"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(200, 200, 200, 0.08), rgba(255, 255, 255, 0.05))",
              borderRadius: "0 0 32px 32px",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Particle system */}
      {!prefersReducedMotion && isLoaded && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                filter: "blur(1px)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.id * 0.1,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
