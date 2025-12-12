export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Top bar */}
      <rect x="12" y="4" width="16" height="3" fill="currentColor" />
      {/* Triangle */}
      <path d="M20 10L26 20H14L20 10Z" fill="currentColor" opacity="0.5" />
      {/* Main body */}
      <rect x="8" y="20" width="24" height="4" fill="currentColor" />
      {/* Base */}
      <path d="M10 24H30L28 32H12L10 24Z" fill="currentColor" />
      {/* Ground */}
      <rect x="6" y="32" width="28" height="2" fill="currentColor" />
    </svg>
  )
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="w-8 h-8" />
      <span className="text-xl font-heading font-medium tracking-tight">HAESTUS</span>
    </div>
  )
}
