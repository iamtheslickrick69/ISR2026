import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/line.png"
      alt="Haestus"
      width={813}
      height={244}
      className={className}
      priority
    />
  )
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/line.png"
        alt="Haestus"
        width={813}
        height={244}
        className="h-auto"
        priority
      />
    </div>
  )
}
