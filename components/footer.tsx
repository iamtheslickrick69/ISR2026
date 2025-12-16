'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Firefly animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Firefly class
    class Firefly {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      opacityDirection: number;
      hue: number;
      pulseSpeed: number;
      wanderAngle: number;
      wanderSpeed: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.opacityDirection = Math.random() > 0.5 ? 1 : -1;
        this.hue = Math.random() * 20 + 15; // Peach/orange hue range (15-35)
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.wanderAngle = Math.random() * Math.PI * 2;
        this.wanderSpeed = Math.random() * 0.02 + 0.01;
      }

      update(canvasWidth: number, canvasHeight: number) {
        // Gentle wandering motion
        this.wanderAngle += (Math.random() - 0.5) * this.wanderSpeed;
        this.vx += Math.cos(this.wanderAngle) * 0.01;
        this.vy += Math.sin(this.wanderAngle) * 0.01;

        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Speed limit
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 0.5) {
          this.vx = (this.vx / speed) * 0.5;
          this.vy = (this.vy / speed) * 0.5;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < -10) this.x = canvasWidth + 10;
        if (this.x > canvasWidth + 10) this.x = -10;
        if (this.y < -10) this.y = canvasHeight + 10;
        if (this.y > canvasHeight + 10) this.y = -10;

        // Pulsing glow
        this.opacity += this.opacityDirection * this.pulseSpeed;
        if (this.opacity >= 0.8) {
          this.opacity = 0.8;
          this.opacityDirection = -1;
        } else if (this.opacity <= 0.1) {
          this.opacity = 0.1;
          this.opacityDirection = 1;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 4
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, 70%, ${this.opacity})`);
        gradient.addColorStop(0.3, `hsla(${this.hue}, 70%, 60%, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 60%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 90%, 85%, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create fireflies
    const fireflies: Firefly[] = [];
    const fireflyCount = 25;
    for (let i = 0; i < fireflyCount; i++) {
      fireflies.push(new Firefly(canvas.offsetWidth, canvas.offsetHeight));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      fireflies.forEach(firefly => {
        firefly.update(canvas.offsetWidth, canvas.offsetHeight);
        firefly.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50 overflow-hidden">
      {/* Firefly Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative max-w-[1100px] mx-auto px-5 py-6 md:py-8" style={{ zIndex: 1 }}>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo + Social Row */}
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="block">
              <Image
                src="/yaya.png"
                alt="Haestus"
                width={100}
                height={30}
                className="h-6 w-auto"
                style={{ filter: 'brightness(0)' }}
              />
            </Link>
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors p-1.5"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-gray-600 hover:text-gray-900 transition-colors py-0.5"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Row */}
          <div className="flex items-center justify-between mb-4">
            <a
              href="mailto:hello@haestus.dev"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              hello@haestus.dev
            </a>
            <a
              href="sms:4353136230"
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Text Us
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Haestus. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between mb-6">
            {/* Left - Logo & Tagline */}
            <div className="flex-shrink-0">
              <Link href="/" className="block mb-1.5">
                <Image
                  src="/yaya.png"
                  alt="Haestus"
                  width={120}
                  height={36}
                  className="h-7 w-auto"
                  style={{ filter: 'brightness(0)' }}
                />
              </Link>
              <p className="text-xs text-gray-500 max-w-[180px]">
                AI architecture studio crafting digital intelligence.
              </p>
            </div>

            {/* Center - Navigation */}
            <div className="flex gap-6">
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">Navigate</h4>
                <ul className="space-y-1.5">
                  {navigation.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">More</h4>
                <ul className="space-y-1.5">
                  {navigation.slice(3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
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
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">Connect</h4>
              <a
                href="mailto:hello@haestus.dev"
                className="text-xs text-gray-600 hover:text-gray-900 transition-colors block mb-2"
              >
                hello@haestus.dev
              </a>
              <div className="flex items-center justify-end gap-2 mb-3">
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
                className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Text Us
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-gray-200">
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
