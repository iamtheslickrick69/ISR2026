'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#portfolio' },
    { name: 'Insights', href: '/#insights' },
    { name: 'Connect', href: '/#connect' },
  ];

  const social = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/haestus',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/haestusdev',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/haestusdev',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <footer
      className="border-t border-gray-200"
      style={{
        backgroundImage: 'url(/whitehex.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1100px] mx-auto px-5 py-8 md:py-10">

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo + Social Row */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="block">
              <Image
                src="/yaya.png"
                alt="Haestus"
                width={120}
                height={36}
                className="h-8 w-auto"
                style={{ filter: 'brightness(0)' }}
              />
            </Link>
            <div className="flex items-center gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors p-2"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Horizontal Scroll */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Row */}
          <div className="flex items-center justify-between mb-6">
            <a
              href="mailto:hello@haestus.dev"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              hello@haestus.dev
            </a>
            <a
              href="sms:4353136230"
              className="text-xs font-semibold px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Text Us
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Haestus. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between mb-8">
            {/* Left - Logo & Tagline */}
            <div className="flex-shrink-0">
              <Link href="/" className="block mb-2">
                <Image
                  src="/yaya.png"
                  alt="Haestus"
                  width={140}
                  height={42}
                  className="h-9 w-auto"
                  style={{ filter: 'brightness(0)' }}
                />
              </Link>
              <p className="text-xs text-gray-500 max-w-[200px]">
                AI architecture studio crafting digital intelligence.
              </p>
            </div>

            {/* Center - Navigation */}
            <div className="flex gap-8">
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Navigate</h4>
                <ul className="space-y-2">
                  {navigation.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">More</h4>
                <ul className="space-y-2">
                  {navigation.slice(3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Contact & Social */}
            <div className="text-right">
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Connect</h4>
              <a
                href="mailto:hello@haestus.dev"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors block mb-3"
              >
                hello@haestus.dev
              </a>
              <div className="flex items-center justify-end gap-3 mb-4">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <a
                href="sms:4353136230"
                className="inline-block text-xs font-semibold px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Text Us
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <p>© {new Date().getFullYear()} Haestus. All rights reserved.</p>
              <p>Crafted with intention.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
