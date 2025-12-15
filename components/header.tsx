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
      className="fixed left-0 right-0 md:left-1/2 md:-translate-x-1/2"
      style={{
        top: '0',
        transition: 'all 0.3s ease',
        width: '100%',
        zIndex: 999999,
      }}
    >
      <style jsx>{`
        @media (min-width: 768px) {
          header {
            max-width: 800px !important;
            top: 20px !important;
          }
        }
      `}</style>
      {/* Desktop Premium Glass / Mobile Simple */}
      <div
        className="rounded-none md:rounded-2xl md:p-[1px] md:mx-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        <nav
          className="flex items-center justify-between px-4 md:px-6 rounded-none md:rounded-2xl"
          style={{
            paddingTop: '12px',
            paddingBottom: '12px',
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center"
        >
          <Image
            src="/blackmm.png"
            alt="Haestus"
            width={36}
            height={36}
            className="w-9 h-9 md:w-10 md:h-10"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center" style={{ gap: '24px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className="text-sm font-bold text-white/80 hover:text-white transition-colors duration-200 uppercase tracking-wide whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="text-sm font-bold px-5 py-2.5 rounded-lg bg-transparent text-white hover:bg-white/10 transition-all duration-200 uppercase tracking-wide whitespace-nowrap"
            style={{
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            Get Started
          </a>
          <Link
            href="/portal"
            className="text-sm font-bold px-5 py-2.5 rounded-lg text-white hover:opacity-90 transition-all duration-200 uppercase tracking-wide whitespace-nowrap"
            style={{
              background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
            }}
          >
            Clients
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 relative z-[1000000]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: '0',
          zIndex: 999998,
          paddingTop: 'env(safe-area-inset-top, 0)',
        }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <Image
            src="/blackmm.png"
            alt="Haestus"
            width={36}
            height={36}
            className="w-9 h-9"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Content */}
        <nav className="flex flex-col p-4 space-y-1">
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className="text-white text-lg py-4 px-3 hover:bg-white/5 rounded-lg transition-colors"
              style={{
                minHeight: '56px',
                display: 'flex',
                alignItems: 'center',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}


          {/* Divider */}
          <div className="border-t border-white/10 my-4"></div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 px-3">
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "#connect")}
              className="text-center py-4 px-4 rounded-lg border border-white/30 text-white font-medium"
              style={{
                minHeight: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              Get Started
            </a>
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-4 px-4 rounded-lg text-white font-medium"
              style={{
                background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
                minHeight: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              Client Portal
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
