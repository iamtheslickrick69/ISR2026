"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { LogoWithText } from "./logo"
import Image from "next/image"

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
  const [showClientPortal, setShowClientPortal] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

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

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "sidekick") {
      window.location.href = "https://sidekick2026.haestus.dev"
    } else {
      setError(true)
      setPassword("")
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <header
      className="flex justify-center pointer-events-none"
      style={{
        position: 'fixed',
        top: isScrolled ? '12px' : '16px',
        left: 0,
        right: 0,
        zIndex: 999999,
        isolation: 'isolate',
        paddingLeft: '24px',
        paddingRight: '24px',
        transform: `translateZ(0) scale(${isScrolled ? 0.93 : 1})`,
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
            <button
              onClick={() => setShowClientPortal(true)}
              className="rounded-button text-sm font-medium transition-all duration-200 px-6 py-2.5"
              style={{
                border: '1px solid #1ebda5',
                color: '#1ebda5',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1ebda5'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#1ebda5'
              }}
            >
              Clients
            </button>
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
        className={`md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: 'fixed',
          top: '88px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999998,
          background: 'rgba(255, 255, 255, 0.98)',
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
          <button
            onClick={() => {
              setShowClientPortal(true)
              setMobileMenuOpen(false)
            }}
            className="rounded-button mt-4 px-6 py-3 text-center transition-colors w-full"
            style={{
              border: '1px solid #1ebda5',
              color: '#1ebda5',
            }}
          >
            Clients
          </button>
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="rounded-button px-6 py-3 text-center border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Get In Touch
          </a>
        </nav>
      </div>

      {/* Client Portal Password Modal */}
      {showClientPortal && (
        <div
          className="fixed inset-0 z-[1000000] flex items-center justify-center p-4"
          style={{
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(12px)',
          }}
          onClick={() => {
            setShowClientPortal(false)
            setPassword("")
            setError(false)
          }}
        >
          <div
            className="relative rounded-2xl p-10 max-w-md w-full"
            style={{
              background: 'white',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setShowClientPortal(false)
                setPassword("")
                setError(false)
              }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/line.png"
                alt="Haestus"
                width={280}
                height={84}
                className="h-auto"
                style={{ maxWidth: '280px' }}
                priority
              />
            </div>

            {/* Welcome Message */}
            <h2 className="text-2xl font-heading font-medium text-center mb-8 text-foreground">
              Welcome! Please enter the password
            </h2>

            {/* Password Form */}
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none transition-all"
                  style={{
                    boxShadow: error ? '0 0 0 2px rgba(239, 68, 68, 0.5)' : undefined,
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 0 2px rgba(30, 189, 165, 0.5)'
                  }}
                  onBlur={(e) => {
                    if (!error) {
                      e.target.style.boxShadow = 'none'
                    }
                  }}
                  autoFocus
                />
                {error && (
                  <p className="text-sm text-red-500 mt-2">
                    Incorrect password. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-button px-6 py-4 font-medium text-white transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'linear-gradient(45deg, #1ebda5 0%, #e26a00 50%, #ffe046 100%)',
                }}
              >
                Access Portal
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
