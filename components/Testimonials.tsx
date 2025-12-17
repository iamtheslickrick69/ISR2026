'use client';

import { motion } from 'framer-motion';
import { AdvancedScrollReveal, StaggerContainer, StaggerItem } from './animations/AdvancedScrollReveal';

const testimonials = [
  {
    quote: "Haestus shipped a production-grade AI system in 3 weeks that our internal team couldn't build in 6 months. The architecture is flawless.",
    author: "Sarah Chen",
    role: "CTO, Series B SaaS",
    company: "Enterprise Analytics Platform"
  },
  {
    quote: "0 revisions. 100% success rate. They actually mean it. Every system they've built for us has worked perfectly from day one.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "FinTech Startup"
  },
  {
    quote: "We tried 3 other AI agencies before Haestus. They were the only ones who understood that architecture comes before features.",
    author: "Emily Watson",
    role: "Head of Product",
    company: "Healthcare Tech"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AdvancedScrollReveal animation="slideUp" duration={0.6}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              What Clients Say
            </h2>
            <div className="h-1 w-24 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)' }} />
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Results speak louder than promises. Here's what our clients say about working with us.
            </p>
          </div>
        </AdvancedScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="relative h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                    {/* Quote Icon */}
                    <div className="text-5xl text-orange-500/20 mb-4">"</div>

                    {/* Quote */}
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-100 pt-6">
                      <p className="font-bold text-foreground mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Stats Banner */}
        <AdvancedScrollReveal animation="scaleUp" delay={0.3} duration={0.7}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

            <div className="text-center p-6">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                100%
              </div>
              <p className="text-sm lg:text-base font-medium text-gray-600">
                Production Success Rate
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                0
              </div>
              <p className="text-sm lg:text-base font-medium text-gray-600">
                Revisions Required
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ background: 'linear-gradient(90deg, #d97757 0%, #ffd7b5 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                24h
              </div>
              <p className="text-sm lg:text-base font-medium text-gray-600">
                Response Time
              </p>
            </div>

          </div>
        </AdvancedScrollReveal>

      </div>
    </section>
  );
}
