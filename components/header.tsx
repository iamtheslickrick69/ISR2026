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
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
          <LogoWithText />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className={`text-sm transition-colors duration-200 ${
                activeSection === link.href.slice(1) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
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
            className="px-5 py-2.5 text-sm border border-foreground text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-background transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
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
