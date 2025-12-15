"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortalPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  // Client password → subdomain mapping
  // Add more clients here as needed
  const clientAccess: Record<string, string> = {
    "beehive2026": "https://beehive-2026.vercel.app",
    // "hillside2026": "https://hillside-palms-rv-park.vercel.app",
    // "koby2026": "https://koby2026.vercel.app",
    // "sidekick": "https://sidekick2026.haestus.dev",
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const redirectUrl = clientAccess[password.toLowerCase()]

    if (redirectUrl) {
      window.location.href = redirectUrl
    } else {
      setError(true)
      setPassword("")
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
      }}
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Back to Home Link */}
      <Link
        href="/"
        className="absolute top-6 left-6 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 group"
        aria-label="Back to home"
      >
        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
      </Link>

      {/* Portal Card */}
      <div className="relative rounded-3xl p-12 max-w-lg w-full z-10"
        style={{
          background: 'white',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/trans1.png"
            alt="Haestus"
            width={120}
            height={120}
            className="h-auto"
            style={{ maxWidth: '120px' }}
            priority
          />
        </div>

        {/* Welcome Message */}
        <h1 className="text-3xl font-heading font-medium text-center mb-3 text-foreground">
          Client Portal
        </h1>
        <p className="text-center text-muted-foreground mb-10">
          Please enter your password to access the portal
        </p>

        {/* Password Form */}
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-5 py-4 rounded-xl border-2 border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none transition-all text-lg"
              style={{
                boxShadow: error ? '0 0 0 3px rgba(239, 68, 68, 0.3)' : undefined,
                borderColor: error ? '#ef4444' : undefined,
              }}
              onFocus={(e) => {
                if (!error) {
                  e.target.style.boxShadow = '0 0 0 3px rgba(217, 119, 87, 0.2)'
                  e.target.style.borderColor = '#d97757'
                }
              }}
              onBlur={(e) => {
                if (!error) {
                  e.target.style.boxShadow = 'none'
                  e.target.style.borderColor = ''
                }
              }}
              autoFocus
            />
            {error && (
              <p className="text-sm text-red-500 mt-3 font-medium">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="enhanced-button w-full rounded-xl px-6 py-5 font-semibold text-white text-lg"
            style={{
              background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)',
              boxShadow: '0 10px 30px rgba(217, 119, 87, 0.3)',
            }}
          >
            Access Portal
          </button>
        </form>

        {/* Help Text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Need help? <a href="/#connect" className="text-[#d97757] hover:underline font-medium">Contact us</a>
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
    </div>
  )
}
