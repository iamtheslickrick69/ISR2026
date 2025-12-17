'use client';

import { AdvancedScrollReveal } from './animations/AdvancedScrollReveal';

const clients = [
  { name: "Enterprise SaaS", category: "Series B" },
  { name: "FinTech Platform", category: "Series A" },
  { name: "Healthcare Tech", category: "Growth Stage" },
  { name: "E-commerce AI", category: "Series C" },
  { name: "Analytics Platform", category: "Enterprise" },
  { name: "Supply Chain AI", category: "Series B" }
];

export function ClientLogos() {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">

        <AdvancedScrollReveal animation="slideUp" duration={0.6}>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Trusted By Leading Companies
            </p>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
              Building AI For Growth-Stage Companies
            </h3>
          </div>
        </AdvancedScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <AdvancedScrollReveal
              key={index}
              animation="fade"
              delay={index * 0.1}
              duration={0.5}
            >
              <div className="group relative p-6 rounded-xl border border-gray-100 hover:border-orange-200 bg-white hover:bg-orange-50/30 transition-all duration-300 text-center">

                {/* Company Initial Icon */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300" style={{
                  background: 'linear-gradient(135deg, #d97757 0%, #ffd7b5 100%)',
                  color: 'white'
                }}>
                  {client.name[0]}
                </div>

                {/* Company Name */}
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {client.name}
                </p>

                {/* Category */}
                <p className="text-xs text-gray-500">
                  {client.category}
                </p>

              </div>
            </AdvancedScrollReveal>
          ))}
        </div>

        {/* Trust Badge */}
        <AdvancedScrollReveal animation="scaleUp" delay={0.4} duration={0.6}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-orange-500/20 bg-orange-50/30">
              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-orange-700">
                NDA Protected • Confidential Client Work
              </span>
            </div>
          </div>
        </AdvancedScrollReveal>

      </div>
    </section>
  );
}
