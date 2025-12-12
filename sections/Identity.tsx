'use client';

import { motion } from 'framer-motion';

const sections = [
  {
    label: 'IDENTITY',
    title: 'WHO WE ARE',
    content:
      "Full-stack AI development. Enterprise-grade standards. We take three projects per month because excellence doesn't scale linearly. Quality accelerates delivery.",
  },
  {
    label: 'CAPABILITY',
    title: 'WHAT WE DO',
    content:
      "We build AI-powered applications from first pixel to final deployment. Everyone has the same AI tools now. The differentiator is architecture—knowing what to build, how to structure it, and which problems matter.",
  },
  {
    label: 'PHILOSOPHY',
    title: 'WHY HAESTUS',
    content:
      "Hephaestus forged tools for humans to fight gods. We do the same. AI gives you fire; experience gives you the blueprint. Every system is engineered, not assembled. Built to last.",
  },
];

export default function Identity() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center md:text-left"
            >
              <span className="text-xs text-[#CC0000] tracking-[0.3em] uppercase font-medium mb-3 block">
                {section.label}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
              <p className="text-[#B3B3B3] leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
