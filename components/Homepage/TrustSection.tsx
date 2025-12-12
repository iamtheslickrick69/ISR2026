'use client';

import { motion } from 'framer-motion';

const companies = [
  'OpenAI',
  'Anthropic',
  'Google',
  'Meta',
  'Microsoft',
  'Amazon',
  'Apple',
  'Tesla',
];

export default function TrustSection() {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto text-center"
      >
        <p className="text-sm text-[#71717A] uppercase tracking-[3px] mb-8">
          Trusted by Industry Leaders
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-[#52525B] text-lg md:text-xl font-semibold tracking-tight opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
