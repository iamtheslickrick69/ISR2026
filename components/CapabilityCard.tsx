'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CapabilityCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  example: string;
}

export function CapabilityCard({
  number,
  icon,
  title,
  description,
  details,
  example,
}: CapabilityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div
        className={`bg-gradient-to-br from-gray-900 to-black border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
          isExpanded
            ? 'border-orange-500/50 shadow-[0_0_30px_rgba(255,107,53,0.3)]'
            : 'border-white/10 hover:border-orange-500/30'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Number */}
        <div className="text-3xl font-bold text-orange-500 mb-3">
          {number}
        </div>

        {/* Icon */}
        <div className="text-4xl mb-4">{icon}</div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center justify-between">
          {title}
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </h3>
        <div className="h-1 w-12 bg-orange-500 rounded-full mb-4"></div>

        {/* Description (always visible) */}
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-white/10"
            >
              {/* What We Build */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-orange-400 mb-3 uppercase tracking-wider">
                  What We Build
                </h4>
                <ul className="space-y-2">
                  {details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example Placeholder */}
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                <p className="text-xs text-orange-300 italic">
                  {example}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click indicator when collapsed */}
        {!isExpanded && (
          <div className="mt-4 text-xs text-gray-500 italic">
            Click to see details
          </div>
        )}
      </div>
    </motion.div>
  );
}
