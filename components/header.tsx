"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

type NavLink = {
  href: string
  label: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { href: "#services", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#insights", label: "Insights" },
]

export function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      return
    }
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
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
            max-width: 680px !important;
            top: 20px !important;
          }
        }
      `}</style>
      {/* Desktop Dark Liquid Glass / Mobile Simple */}
      <div
        className="rounded-none md:rounded-2xl md:p-[1px] md:mx-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
      >
        <nav
          className="flex items-center justify-between px-4 md:px-6 rounded-none md:rounded-2xl"
          style={{
            paddingTop: '12px',
            paddingBottom: '12px',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(60px) saturate(150%)',
            WebkitBackdropFilter: 'blur(60px) saturate(150%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
        {/* Logo - Far Left */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center"
        >
          <Image
            src="/yaya.png"
            alt="Haestus"
            width={36}
            height={36}
            className="w-9 h-9 md:w-10 md:h-10"
            style={{ filter: 'brightness(0) invert(1)', borderRadius: '6px' }}
            priority
          />
        </a>

        {/* Desktop Nav Links - Center */}
        <div className="flex items-center" style={{ gap: '24px', marginLeft: '36px', marginRight: '36px' }}>
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

        {/* Desktop CTA Button - Far Right */}
        <Link
          href="/portal"
          className="text-sm font-bold px-5 py-2.5 rounded-lg text-white hover:bg-white/5 transition-all duration-200 uppercase tracking-wide whitespace-nowrap"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '2px solid #d97757',
            boxShadow: '0 8px 24px rgba(217, 119, 87, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          Client Portal
        </Link>
        </nav>
      </div>

    </header>
  )
}
