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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        isolation: 'isolate',
        paddingLeft: '0',
        paddingRight: '0',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <div
        className="w-full rounded-none md:max-w-[900px] md:rounded-xl md:mt-3 md:mx-4 pointer-events-auto"
        style={{
          background: '#ffffff',
          border: 'none',
          borderBottom: '1px solid #e5e5e5',
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="px-5 sm:px-6 md:px-8 py-4 flex items-center justify-between" style={{ minHeight: '64px' }}>
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

      {/* Mobile Menu - iOS SOLID WHITE Background */}
      <div
        className={`md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: 'fixed',
          top: '0',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999997,
          background: '#ffffff',
        }}
      >
        {/* iOS-style header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{
            borderBottom: '1px solid #e5e5e5',
            height: '64px',
            background: '#ffffff',
          }}
        >
          <div className="text-xl font-semibold">Menu</div>
          <button
            className="p-3 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ minHeight: '48px', minWidth: '48px' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-6 gap-2 overflow-y-auto bg-white" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          {/* iOS Navigation Links */}
          <div className="flex flex-col gap-2 pb-6 mb-6" style={{ borderBottom: '1px solid #e5e5e5' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className="flex items-center justify-between px-4 py-4 rounded-xl active:bg-gray-100 transition-colors"
                style={{
                  minHeight: '56px',
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#000000',
                }}
              >
                <span>{link.label}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* iOS Button */}
          <Link
            href="/portal"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center rounded-xl text-center w-full mb-4 active:opacity-80 transition-opacity"
            style={{
              minHeight: '56px',
              background: 'linear-gradient(45deg, #1ebda5 0%, #e26a00 50%, #ffe046 100%)',
              color: 'white',
              fontSize: '17px',
              fontWeight: '600',
              boxShadow: '0 2px 8px rgba(30, 189, 165, 0.3)',
            }}
          >
            🔐 Client Portal
          </Link>

          {/* iOS Secondary Button */}
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="flex items-center justify-center rounded-xl text-center w-full active:opacity-80 transition-opacity"
            style={{
              minHeight: '56px',
              border: '2px solid #000000',
              color: '#000000',
              fontSize: '17px',
              fontWeight: '600',
              background: '#ffffff',
            }}
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  )
}
