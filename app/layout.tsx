import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { AnimationProvider } from "@/components/animations/AnimationProvider"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://haestus.dev'),
  title: "Haestus - AI Architecture Studio",
  description: "We architect AI systems that amplify human capability and compound competitive advantage. Custom AI solutions, consulting, and full-stack development.",
  generator: 'v0.app',
  keywords: ['AI', 'Artificial Intelligence', 'AI Consulting', 'AI Development', 'Custom AI Solutions', 'Machine Learning', 'AI Architecture'],
  authors: [{ name: 'Haestus' }],
  creator: 'Haestus',
  publisher: 'Haestus',

  // Open Graph (for SMS, social media sharing)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://haestus.dev',
    title: 'Haestus - AI Architecture Studio',
    description: 'We architect AI systems that amplify human capability and compound competitive advantage.',
    siteName: 'Haestus',
    images: [
      {
        url: '/og-image.png',
        width: 624,
        height: 624,
        alt: 'Haestus - AI Architecture Studio',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Haestus - AI Architecture Studio',
    description: 'We architect AI systems that amplify human capability and compound competitive advantage.',
    images: ['/og-image.png'],
    creator: '@haestus',
  },

  // Icons (Favicon)
  icons: {
    icon: '/header-icon.png',
    shortcut: '/header-icon.png',
    apple: '/header-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} style={{ overflow: 'visible' }}>
      <body className="font-sans antialiased bg-background text-foreground" style={{ overflow: 'visible', position: 'relative' }}>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}
