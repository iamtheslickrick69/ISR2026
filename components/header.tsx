"use client"

import type React from "react"
import { useState } from "react"
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      setMobileMenuOpen(false)
      return
    }
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
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
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="px-4 py-2 text-sm border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
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
        className={`md:hidden fixed inset-0 top-16 bg-background transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className="text-lg text-foreground hover:text-muted-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="mt-4 px-6 py-2 text-center border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  )
}
