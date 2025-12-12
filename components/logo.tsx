export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Less-than symbol - developer/code theme */}
      <text
        x="20"
        y="28"
        fontSize="32"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="monospace"
      >
        &lt;
      </text>
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
