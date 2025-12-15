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
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/haestusdev',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/haestusdev',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <footer className="border-t border-border text-foreground" style={{ background: '#E5DDD0' }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-6 md:py-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 mb-5 md:mb-10">
          {/* Brand - Compact on Mobile */}
          <div className="space-y-2">
            <Link href="/" className="block">
              <Image
                src="/trans1.png"
                alt="Haestus"
                width={600}
                height={600}
                className="h-auto max-w-[140px] md:max-w-[240px]"
                style={{ filter: 'brightness(0)' }}
              />
            </Link>
            <p className="text-xs text-muted-foreground hidden md:block">
              AI architecture studio crafting digital intelligence.
            </p>
          </div>

          {/* Navigation 1 */}
          <div>
            <h4 className="text-xs font-medium text-foreground mb-1.5 md:mb-2">Navigation</h4>
            <ul className="space-y-0.5 md:space-y-1.5">
              {navigation.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-block"
                    style={{
                      minHeight: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation 2 */}
          <div>
            <h4 className="text-xs font-medium text-foreground mb-1.5 md:mb-2">More</h4>
            <ul className="space-y-0.5 md:space-y-1.5">
              {navigation.slice(3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-block"
                    style={{
                      minHeight: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-1.5 md:space-y-3">
            <h4 className="text-xs font-medium text-foreground">Connect</h4>
            <div className="flex gap-1.5 md:gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item.name}
                  style={{
                    minWidth: '36px',
                    minHeight: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="pt-1 md:pt-3">
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <a
                href="mailto:hello@haestus.dev"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors break-all"
              >
                hello@haestus.dev
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-3 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Haestus. All rights reserved.</p>
            <p className="hidden md:block">Crafted with intention.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
