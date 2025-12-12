'use client';

import { motion } from 'framer-motion';

export default function NameOrigin() {
  return (
    <section className="w-full mt-[100px] mb-[80px] px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[800px] mx-auto text-center"
      >
        <h2 className="text-[28px] md:text-[32px] font-semibold text-white mb-[18px] tracking-tight">
          Why We're Called Haestus
        </h2>

        <p className="text-[17px] md:text-[18px] text-white/85 leading-[1.65]">
          Hephaestus was the Greek god of fire, craftsmanship, and invention — the quiet architect
          who forged the armor, tools, and machines that empowered both gods and humans. His work
          wasn't about spectacle, but precision, resilience, and mastery. We named Haestus after him
          because that's the philosophy we follow: build with intention, empower through design, and
          create systems that amplify rather than replace. In a world moving faster than any era
          before, we believe great tools shape great futures. Our mission is to forge the technology
          that helps humanity rise with the tide of AI, not be swept away by it.
        </p>
      </motion.div>
    </section>
  );
}
