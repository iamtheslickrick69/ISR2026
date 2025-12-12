'use client';

import { motion } from 'framer-motion';

export default function Connect() {

  return (
    <section className="relative overflow-hidden min-h-screen py-40 px-8 bg-black">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Left Side - Executive Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Main Heading */}
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-12 tracking-tight leading-none">
              Connect
            </h2>

            {/* Executive Summary */}
            <div className="mb-12 space-y-6">
              <h3 className="text-xs text-[#ff6b35] tracking-[0.25em] uppercase font-semibold mb-6">
                EXECUTIVE SUMMARY
              </h3>
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                We architect AI systems that amplify human capability and compound competitive
                advantage. Three projects per month. Enterprise-grade standards. No inflated
                promises—only real capabilities, real results.
              </p>
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                If you&apos;re ready to transform your organization with intelligent systems built to
                last, we should talk.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="sms:+1234567890"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ff6b35] text-white font-semibold rounded-xl hover:bg-[#ff8556] transition-all duration-300 shadow-lg shadow-[#ff6b35]/20"
              >
                Text Us
              </motion.a>
              <motion.a
                href="mailto:hello@haestus.dev"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                Email Us
              </motion.a>
            </div>

            {/* Footer Note */}
            <div className="space-y-3 text-sm">
              <p className="text-white/60 font-medium">
                Direct line:{' '}
                <a
                  href="mailto:hello@haestus.dev"
                  className="text-white/80 hover:text-[#ff6b35] transition-colors"
                >
                  hello@haestus.dev
                </a>
              </p>
              <p className="text-white/40">
                No NDAs needed—we execute faster than lawyers can draft.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#0A0A0A] to-[#111111] border border-white/5 rounded-2xl p-10 lg:p-12 flex flex-col justify-center items-center text-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Build?
              </h3>
              <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-md">
                Let's discuss your project. Send us an email and we'll respond within 24 hours.
              </p>
            </div>

            <motion.a
              href="mailto:hello@haestus.dev?subject=Project%20Inquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#ff6b35] to-[#ff8556] text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#ff6b35]/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </motion.a>

            <div className="space-y-2">
              <p className="text-white/60 font-medium">
                hello@haestus.dev
              </p>
              <p className="text-sm text-white/40">
                We respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
