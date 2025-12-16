import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/55.png"
      alt="Haestus"
      width={200}
      height={200}
      className={`${className}`}
      style={{ filter: 'brightness(0) saturate(100%)', borderRadius: '6px' }}
      priority
    />
  )
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/55.png"
        alt="Haestus"
        width={200}
        height={200}
        className="h-auto"
        style={{ filter: 'brightness(0) saturate(100%)', borderRadius: '6px' }}
        priority
      />
    </div>
  )
}
