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

  // Prevent body scroll when mobile menu is open (iOS fix)
  useEffect(() => {
    if (mobileMenuOpen) {
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
  }, [mobileMenuOpen])

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
      className="fixed left-1/2 -translate-x-1/2 z-50"
      style={{
        top: isScrolled ? 'max(12px, env(safe-area-inset-top))' : 'max(16px, env(safe-area-inset-top))',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        width: 'auto',
        maxWidth: 'none',
      }}
    >
      {/* Professional Black Header with White Border */}
      <div
        className="rounded-2xl p-[1px]"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
        }}
      >
        <nav
          className="flex items-center rounded-2xl px-7 sm:px-10"
          style={{
            gap: '42px',
            paddingTop: '10px',
            paddingBottom: '10px',
            background: '#000000',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
        {/* Logo Icon */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center flex-shrink-0"
        >
          <Image
            src="/blackmm.png"
            alt="Haestus"
            width={48}
            height={48}
            className="w-12 h-12 hover:opacity-80 transition-opacity duration-200"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center" style={{ gap: '36px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className="text-base font-semibold text-white/70 hover:text-white transition-colors duration-200 uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-6">
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="text-sm font-bold px-6 py-3 rounded-lg bg-transparent text-white hover:bg-white/10 transition-all duration-200 uppercase tracking-wide"
            style={{
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            Get Started
          </a>
          <Link
            href="/portal"
            className="text-sm font-bold px-6 py-3 rounded-lg text-white hover:opacity-90 transition-all duration-200 uppercase tracking-wide"
            style={{
              background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
            }}
          >
            Clients
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white flex items-center justify-center"
          style={{
            minWidth: '44px',
            minHeight: '44px',
            WebkitTapHighlightColor: 'transparent'
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
        </nav>
      </div>

      {/* Mobile Menu - Starlink Style */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: '#000000',
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-5 border-b border-white/10" style={{ height: '64px' }}>
          <Image
            src="/blackmm.png"
            alt="Haestus"
            width={36}
            height={36}
            className="w-9 h-9"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <button
            className="flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className="flex flex-col px-5 py-6 overflow-y-auto"
          style={{
            maxHeight: 'calc(100vh - 64px - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Navigation Links */}
          <div className="flex flex-col gap-1 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className="flex items-center justify-between px-4 rounded-xl active:bg-white/10 transition-colors"
                style={{
                  minHeight: '56px',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <span className="text-lg font-semibold text-white uppercase tracking-wide">{link.label}</span>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "#connect")}
              className="flex items-center justify-center rounded-lg text-center w-full active:opacity-80 transition-opacity bg-transparent text-white font-bold uppercase tracking-wide"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.3)',
                minHeight: '56px',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              Get Started
            </a>
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-lg text-center w-full active:opacity-80 transition-opacity text-white font-bold uppercase tracking-wide"
              style={{
                background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
                minHeight: '56px',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              Clients
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
