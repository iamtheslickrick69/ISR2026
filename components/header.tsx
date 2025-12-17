"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      return
    }
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
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
              className="flex items-center z-[100000]"
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
            <div className="hidden md:flex items-center" style={{ gap: '24px', marginLeft: '36px', marginRight: '36px' }}>
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
              className="hidden md:block text-sm font-bold px-5 py-2.5 rounded-lg text-white hover:bg-white/5 transition-all duration-200 uppercase tracking-wide whitespace-nowrap"
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

            {/* Mobile Hamburger Menu - 44px × 44px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-white hover:bg-white/10 rounded-lg transition-colors relative z-[100000]"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {isMounted && (
                <motion.div
                  initial={false}
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMounted && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[99999] md:hidden"
              style={{ paddingTop: 'env(safe-area-inset-top)' }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center justify-center h-full gap-2 px-6"
              >
                {/* Mobile Nav Links */}
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.external)}
                    className="w-full text-center py-5 text-2xl font-bold text-white/90 hover:text-white active:bg-white/5 rounded-xl transition-all uppercase tracking-wide min-h-[56px] flex items-center justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="w-full mt-6"
                >
                  <Link
                    href="/portal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center py-5 text-xl font-bold text-white rounded-xl uppercase tracking-wide min-h-[56px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)',
                      boxShadow: '0 8px 24px rgba(217, 119, 87, 0.4)',
                    }}
                  >
                    Client Portal
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
