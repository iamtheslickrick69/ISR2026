import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/trans1.png"
      alt="Haestus"
      width={200}
      height={200}
      className={`${className}`}
      style={{ filter: 'brightness(0) saturate(100%)' }}
      priority
    />
  )
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/trans1.png"
        alt="Haestus"
        width={200}
        height={200}
        className="h-auto"
        style={{ filter: 'brightness(0) saturate(100%)' }}
        priority
      />
    </div>
  )
}
