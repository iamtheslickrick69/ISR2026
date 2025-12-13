"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { LogoWithText } from "./logo"

type NavLink = {
  href: string
  label: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "/agent-builder", label: "AI Builder", external: true },
  { href: "#insights", label: "Insights" },
  { href: "#connect", label: "Connect" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Smooth scroll progress from 0 to 1 over 100px
      const progress = Math.min(scrollY / 100, 1)
      setScrollProgress(progress)

      const sections = navLinks.map((link) => link.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      setMobileMenuOpen(false)
      return // Allow default behavior for external links
    }
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Smooth interpolation calculations
  const headerTop = scrollProgress * 16 // 0px → 16px (top-4)
  const headerHeight = 80 - scrollProgress * 24 // 80px → 56px
  const borderRadius = scrollProgress * 16 // 0px → 16px (rounded-2xl = 16px)
  const borderOpacity = scrollProgress * 0.1 // 0 → 0.1
  const bgOpacity = scrollProgress * 0.4 // 0 → 0.4
  const blurAmount = scrollProgress * 24 // 0px → 24px
  const shadowOpacity = scrollProgress * 0.2 // 0 → 0.2
  const containerPadding = scrollProgress * 16 // 0px → 16px
  const maxWidth = scrollProgress > 0 ? "1200px" : "100%"

  // Text size interpolation
  const navFontSize = 14 - scrollProgress * 2 // 14px → 12px (text-sm → text-xs)
  const navGap = 32 - scrollProgress * 8 // 32px (gap-8) → 24px (gap-6)
  const ctaPaddingX = 20 - scrollProgress * 4 // 20px → 16px
  const ctaPaddingY = 10 - scrollProgress * 4 // 10px → 6px
  const ctaFontSize = 14 - scrollProgress * 2 // 14px → 12px
  const ctaBorderRadius = scrollProgress * 8 // 0 → 8px

  return (
    <header
      className="fixed left-0 right-0 z-50"
      style={{
        top: `${headerTop}px`,
        transition: "top 0.1s linear",
      }}
    >
      <div
        className="border"
        style={{
          maxWidth,
          margin: "0 auto",
          paddingLeft: `${containerPadding}px`,
          paddingRight: `${containerPadding}px`,
          backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
          backdropFilter: `blur(${blurAmount}px)`,
          borderRadius: `${borderRadius}px`,
          borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, ${shadowOpacity})`,
          transition: "all 0.1s linear",
        }}
      >
        <div
          className="mx-auto px-6 flex items-center justify-between relative z-10"
          style={{
            height: `${headerHeight}px`,
            transition: "height 0.1s linear",
          }}
        >
        <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
          <LogoWithText />
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center"
          style={{
            gap: `${navGap}px`,
            transition: "gap 0.1s linear",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className={`transition-colors duration-200 ${
                scrollProgress > 0.5
                  ? activeSection === link.href.slice(1)
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white"
                  : activeSection === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
              }`}
              style={{
                fontSize: `${navFontSize}px`,
                transition: "font-size 0.1s linear, color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className={`border transition-colors duration-200 ${
              scrollProgress > 0.5
                ? "text-white hover:bg-white hover:text-black"
                : "text-foreground hover:bg-foreground hover:text-background"
            }`}
            style={{
              paddingLeft: `${ctaPaddingX}px`,
              paddingRight: `${ctaPaddingX}px`,
              paddingTop: `${ctaPaddingY}px`,
              paddingBottom: `${ctaPaddingY}px`,
              fontSize: `${ctaFontSize}px`,
              borderRadius: `${ctaBorderRadius}px`,
              borderColor: scrollProgress > 0.5 ? "rgba(255, 255, 255, 0.3)" : "currentColor",
              transition: "all 0.1s linear, background-color 0.2s, color 0.2s",
            }}
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-200 ${
            scrollProgress > 0.5 ? "text-white" : "text-foreground"
          }`}
          style={{
            padding: `${10 - scrollProgress * 6}px`,
            transition: "padding 0.1s linear, color 0.2s",
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X style={{ width: `${24 - scrollProgress * 4}px`, height: `${24 - scrollProgress * 4}px` }} />
          ) : (
            <Menu style={{ width: `${24 - scrollProgress * 4}px`, height: `${24 - scrollProgress * 4}px` }} />
          )}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-background transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: `${headerHeight + headerTop}px`,
        }}
      >
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className="text-2xl font-heading text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="mt-4 px-6 py-4 text-center border border-foreground text-foreground"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  )
}
