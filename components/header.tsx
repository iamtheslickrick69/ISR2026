"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { LogoWithText } from "./logo"
import Image from "next/image"
import Link from "next/link"

type NavLink = {
  href: string
  label: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#insights", label: "Insights" },
  { href: "#connect", label: "Connect" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        top: isScrolled ? '8px' : '12px',
        left: 0,
        right: 0,
        zIndex: 999999,
        isolation: 'isolate',
        paddingLeft: '16px',
        paddingRight: '16px',
        transform: `translateZ(0) scale(${isScrolled ? 0.97 : 1})`,
        willChange: 'transform',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        className="w-full max-w-[900px] rounded-xl pointer-events-auto"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="px-5 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo - Apple Standard: 56px touch target on mobile */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center flex-shrink-0 touch-target-lg">
            <Image
              src="/header-icon.png"
              alt="Haestus"
              width={56}
              height={56}
              className="rounded-full hover:scale-105 transition-transform duration-200 w-14 h-14 sm:w-14 sm:h-14"
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
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
            <Link
              href="/portal"
              className="enhanced-button rounded-button text-sm font-medium px-6 py-2.5 hover:bg-[#1ebda5] hover:text-white"
              style={{
                border: '1px solid #1ebda5',
                color: '#1ebda5',
              }}
            >
              Clients
            </Link>
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "#connect")}
              className="enhanced-button rounded-button text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-2.5"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button - Apple Standard: 48px touch target */}
          <button
            className="md:hidden touch-target-md p-3 text-foreground flex-shrink-0 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Apple Standard Spacing */}
      <div
        className={`md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999998,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <nav className="flex flex-col px-5 py-6 gap-2">
          {/* Main Navigation Links - Apple Standard: 48px touch targets */}
          <div className="flex flex-col gap-1 pb-6 mb-6 border-b border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className="touch-target-md flex items-center text-mobile-lg font-semibold text-foreground hover:text-[#1ebda5] transition-colors px-4 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Prominent Clients Button - Apple Standard: 50px height */}
          <Link
            href="/portal"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-mobile-primary enhanced-button text-center w-full shadow-lg mb-3"
            style={{
              background: 'linear-gradient(45deg, #1ebda5 0%, #e26a00 50%, #ffe046 100%)',
              color: 'white',
            }}
          >
            🔐 Client Portal
          </Link>

          {/* Secondary CTA - Apple Standard: 48px height */}
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="btn-mobile-secondary enhanced-button text-center border-2 border-foreground text-foreground hover:bg-foreground hover:text-background w-full"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  )
}
