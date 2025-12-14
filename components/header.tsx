"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { LogoWithText } from "./logo"
import Image from "next/image"

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
    <header
      className="flex justify-center pointer-events-none"
      style={{
        position: 'fixed',
        top: '16px',
        left: 0,
        right: 0,
        zIndex: 999999,
        isolation: 'isolate',
        paddingLeft: '24px',
        paddingRight: '24px',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <div
        className="w-full max-w-[1200px] rounded-xl border bg-background/95 backdrop-blur-md pointer-events-auto"
        style={{
          borderColor: 'rgba(0, 0, 0, 0.12)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div className="px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center flex-shrink-0">
            <Image
              src="/header-icon.png"
              alt="Haestus"
              width={56}
              height={56}
              className="rounded-full hover:scale-105 transition-transform duration-200"
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                width: '56px',
                height: '56px',
              }}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "#connect")}
              className="rounded-button text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200 px-6 py-2.5"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-xl transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: 'fixed',
          top: '88px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999998,
        }}
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
            className="rounded-button mt-4 px-6 py-3 text-center border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  )
}
