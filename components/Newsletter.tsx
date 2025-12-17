'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { AdvancedScrollReveal } from './animations/AdvancedScrollReveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call (replace with actual newsletter API)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 lg:py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">

        <AdvancedScrollReveal animation="scaleUp" duration={0.6}>
          <div className="relative rounded-3xl p-12 lg:p-16 text-center overflow-hidden">

            {/* Gradient Background */}
            <div className="absolute inset-0 opacity-10" style={{
              background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)'
            }} />

            {/* Content */}
            <div className="relative z-10">

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)'
              }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Heading */}
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                AI Architecture Insights
              </h3>

              {/* Subheading */}
              <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 2,000+ technical leaders getting monthly insights on building production AI systems. No hype, just architecture.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-green-50 border-2 border-green-500 text-green-700 font-semibold"
                  >
                    <Check className="w-5 h-5" />
                    <span>You're subscribed!</span>
                  </motion.div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={status === 'loading'}
                      className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-base disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group px-8 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                      style={{
                        background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)'
                      }}
                    >
                      {status === 'loading' ? (
                        <span>Subscribing...</span>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>

            </div>

          </div>
        </AdvancedScrollReveal>

      </div>
    </section>
  );
}
