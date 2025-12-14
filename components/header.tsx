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
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: '1px solid',
        borderColor: isScrolled ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo - Text Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center flex-shrink-0 -ml-2 touch-target-lg"
          >
            <Image
              src="/line.png"
              alt="Haestus"
              width={813}
              height={244}
              className="h-8 w-auto hover:opacity-80 transition-opacity duration-200"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/portal"
              className="text-sm font-medium px-4 py-2 rounded-full text-[#1ebda5] hover:bg-gray-50 transition-colors duration-200"
            >
              Clients
            </Link>
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "#connect")}
              className="text-sm font-medium px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground flex items-center justify-center touch-target-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Clean iOS Design */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: '#ffffff',
        }}
      >
        {/* Mobile Menu Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-gray-200">
          <Image
            src="/line.png"
            alt="Haestus"
            width={813}
            height={244}
            className="h-7 w-auto"
          />
          <button
            className="p-2 -mr-2 flex items-center justify-center touch-target-md"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col px-5 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          {/* Navigation Links */}
          <div className="flex flex-col gap-1 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className="flex items-center justify-between px-4 py-4 rounded-xl active:bg-gray-100 transition-colors touch-target-lg"
              >
                <span className="text-lg font-semibold text-black">{link.label}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-full text-center w-full active:opacity-80 transition-opacity touch-target-lg bg-[#1ebda5] text-white font-semibold"
            >
              Client Portal
            </Link>
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "#connect")}
              className="flex items-center justify-center rounded-full text-center w-full active:opacity-80 transition-opacity touch-target-lg border-2 border-black text-black font-semibold bg-white"
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
