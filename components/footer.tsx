'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Capabilities', href: '/#capabilities' },
    { name: 'Impact', href: '/#impact' },
    { name: 'Framework', href: '/#framework' },
    { name: 'Insights', href: '/#insights' },
    { name: 'Partnership', href: '/#partnership' },
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
    <footer className="relative overflow-hidden text-white">

      {/* White Glowing Line at Top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-white z-20"
        style={{
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)',
        }}
      />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          ref={(el) => {
            if (el) el.playbackRate = 0.7;
          }}
        >
          <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/bluetitle.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-7">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

          {/* Column 1: Logo + Tagline */}
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              {/* Logo Icon */}
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/haestus-anvil-icon.png"
                  alt="Haestus"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors drop-shadow-lg">
                HAESTUS
              </span>
            </Link>

            <p className="text-gray-200 text-xs leading-relaxed max-w-xs">
              We craft digital intelligence
            </p>

            <p className="text-gray-300 text-xs">
              Full-stack engineering for AI systems that amplify human capability.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Navigation
            </h3>
            <ul className="space-y-1.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-orange-500 transition-colors text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social + Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Connect
            </h3>

            {/* Social Links */}
            <div className="flex gap-3 mb-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-orange-500 transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Contact Email */}
            <div className="space-y-1.5">
              <p className="text-xs text-gray-300">Get in touch:</p>
              <a
                href="mailto:hello@haestus.dev"
                className="text-xs text-gray-200 hover:text-orange-500 transition-colors"
              >
                hello@haestus.dev
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-5 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-gray-300">
              © 2025 Haestus.dev. All rights reserved.
            </p>

            <p className="text-xs text-gray-400">
              Built with precision. Forged with intelligence.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
