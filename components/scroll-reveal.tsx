"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "slide-up"
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up"
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // Add specific animation class
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is visible
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Map animation type to CSS class
  const getAnimationClass = () => {
    switch (animation) {
      case "fade-down":
        return "scroll-fade-down"
      case "fade-left":
        return "scroll-fade-left"
      case "fade-right":
        return "scroll-fade-right"
      case "scale":
        return "scroll-scale"
      case "slide-up":
        return "scroll-slide-up"
      default:
        return "scroll-fade-up"
    }
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}
