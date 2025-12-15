"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxProps {
  children: ReactNode
  speed?: number // 0.1 to 1, where 0.1 is slow and 1 is fast
  className?: string
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrolled = window.scrollY
      const rect = ref.current.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const distance = scrolled - elementTop + windowHeight
        const movement = distance * speed * 0.5
        ref.current.style.transform = `translateY(${-movement}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`parallax-medium ${className}`}>
      {children}
    </div>
  )
}
