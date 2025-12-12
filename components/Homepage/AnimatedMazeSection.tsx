'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Animated3DGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 14;
    const cols = Math.ceil(canvas.offsetWidth / gridSize) + 1;
    const rows = Math.ceil(canvas.offsetHeight / gridSize) + 1;

    const animate = () => {
      timeRef.current += 0.008;

      // Clear with white
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw 3D grid cells
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize;
          const y = row * gridSize;

          // Calculate wave-based height for 3D effect
          const distX = (col - cols / 2) / cols;
          const distY = (row - rows / 2) / rows;
          const dist = Math.sqrt(distX * distX + distY * distY);

          // Multiple wave patterns for organic movement
          const wave1 = Math.sin(timeRef.current * 0.8 + col * 0.15 + row * 0.1) * 0.5 + 0.5;
          const wave2 = Math.sin(timeRef.current * 0.6 - row * 0.12 + col * 0.08) * 0.5 + 0.5;
          const wave3 = Math.sin(timeRef.current * 1.2 + dist * 8) * 0.5 + 0.5;

          const combinedWave = (wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3);

          // Height affects opacity and size
          const height = combinedWave;
          const baseOpacity = 0.08;
          const opacity = baseOpacity + height * 0.15;
          const sizeOffset = height * 1.5;

          // Draw cell with 3D-like effect
          const cellSize = gridSize - 3 + sizeOffset;
          const cellX = x + (gridSize - cellSize) / 2;
          const cellY = y + (gridSize - cellSize) / 2;

          // Shadow for depth (only for elevated cells)
          if (height > 0.5) {
            const shadowOpacity = (height - 0.5) * 0.12;
            ctx.fillStyle = `rgba(249, 115, 22, ${shadowOpacity})`;
            ctx.beginPath();
            ctx.roundRect(cellX + 1, cellY + 1, cellSize, cellSize, 2);
            ctx.fill();
          }

          // Main cell
          ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
          ctx.lineWidth = 0.5 + height * 0.3;
          ctx.beginPath();
          ctx.roundRect(cellX, cellY, cellSize, cellSize, 2);
          ctx.stroke();

          // Subtle fill for elevated cells
          if (height > 0.6) {
            const fillOpacity = (height - 0.6) * 0.04;
            ctx.fillStyle = `rgba(249, 115, 22, ${fillOpacity})`;
            ctx.fill();
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}

export default function AnimatedMazeSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const content = [
    {
      label: 'IDENTITY',
      title: 'WHO WE ARE',
      number: '01',
      description:
        "Full-stack AI development. Enterprise-grade standards. We take three projects per month because excellence doesn't scale linearly. Quality accelerates delivery.",
    },
    {
      label: 'CAPABILITY',
      title: 'WHAT WE DO',
      number: '02',
      description:
        'We build AI-powered applications from first pixel to final deployment. Everyone has the same AI tools now. The differentiator is architecture—knowing what to build, how to structure it, and which problems matter.',
    },
    {
      label: 'PHILOSOPHY',
      title: 'WHY HAESTUS',
      number: '03',
      description:
        "Hephaestus forged tools for humans to fight gods. We do the same. AI gives you fire; experience gives you the blueprint. Every system is engineered, not assembled. Built to last.",
    },
  ];

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{
        paddingTop: '140px',
        paddingBottom: '180px',
      }}
    >
      {/* Animated 3D Grid Background */}
      <Animated3DGrid />

      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[1] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1] pointer-events-none" />

      {/* Content */}
      <div ref={ref} className="relative z-[2] max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl p-8 bg-white/95 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Number Badge */}
              <div className="absolute top-8 right-8">
                <span className="text-[11px] font-mono font-semibold text-neutral-300 tracking-wider">
                  {item.number}
                </span>
              </div>

              {/* Icon/Label */}
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#F97316]/[0.08] mb-4">
                  <span className="text-[10px] font-black tracking-[1px] text-[#F97316]">
                    {item.label.slice(0, 2)}
                  </span>
                </span>
                <span className="block text-[11px] font-bold tracking-[2px] text-[#F97316]/80 uppercase">
                  {item.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A0A0B] mb-4 tracking-tight leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] leading-[1.75] text-neutral-500 font-normal">
                {item.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <div className="w-8 h-0.5 bg-[#F97316]/30 group-hover:w-12 group-hover:bg-[#F97316]/60 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
