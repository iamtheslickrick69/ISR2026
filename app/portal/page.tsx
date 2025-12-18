"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortalPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Client password → subdomain mapping
  const clientAccess: Record<string, string> = {
    "beehive2026": "https://beehive-2026.vercel.app",
    "coro": "https://coro.haestus.dev",
    "maestro": "https://maestro.haestus.dev",
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const redirectUrl = clientAccess[password.toLowerCase()]

    setTimeout(() => {
      if (redirectUrl) {
        window.location.href = redirectUrl
      } else {
        setError(true)
        setPassword("")
        setIsLoading(false)
        setTimeout(() => setError(false), 2000)
      }
    }, 500)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
      }}
    >
      {/* Subtle Gradient Orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #d97757 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ffd7b5 0%, transparent 70%)' }}
      />

      {/* Back to Home */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Portal Card */}
      <div
        className="relative rounded-2xl p-8 sm:p-10 max-w-md w-full z-10"
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/yaya.png"
            alt="Haestus"
            width={120}
            height={40}
            className="h-10 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Client Portal
          </h1>
          <p className="text-white/50 text-sm">
            Enter your access code to continue
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handlePasswordSubmit} className="space-y-5">
          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Access code"
              className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-base"
              style={{
                boxShadow: error ? '0 0 0 2px rgba(239, 68, 68, 0.5)' : undefined,
                borderColor: error ? '#ef4444' : undefined,
              }}
              autoFocus
              disabled={isLoading}
            />
            {error && (
              <p className="text-sm text-red-400 mt-2">
                Invalid access code
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full rounded-xl px-6 py-4 font-semibold text-white text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(90deg, #d97757 0%, #e8956f 100%)',
            }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Verifying...
              </span>
            ) : (
              'Continue'
            )}
          </button>
        </form>

        {/* Help */}
        <p className="text-center text-xs text-white/40 mt-6">
          Need access? <a href="mailto:hello@haestus.dev" className="text-white/60 hover:text-white transition-colors">Contact us</a>
        </p>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-6 text-center">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Haestus
        </p>
      </div>
    </div>
  )
}
