'use client';

import { useState } from 'react';

export default function ChatOrb() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Orb - Fixed Bottom Right */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        {/* Orb Video - Pure with White Glow */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-40 h-40 bg-transparent border-0 p-0 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.15))',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-full"
            style={{
              display: 'block',
              width: '140%',
              height: '140%',
              objectFit: 'cover',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <source
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/haestusorb.mp4"
              type="video/mp4"
            />
          </video>
        </button>
      </div>

      {/* Chat Window - Appears when orb is clicked */}
      {isOpen && (
        <div className="fixed bottom-52 right-8 w-96 h-[500px] md:w-96 max-md:w-[calc(100vw-2rem)] max-md:right-4 max-md:left-4 max-md:bottom-48 z-[9998] animate-in slide-in-from-bottom-4 duration-300">
          {/* Chat Container - Glassmorphism */}
          <div className="relative w-full h-full rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-orange-500/10 to-transparent">
              <div className="flex items-center gap-3">
                {/* Mini Orb */}
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-full"
                    style={{
                      display: 'block',
                      width: '140%',
                      height: '140%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <source
                      src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/haestusorb.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Haestus AI</h3>
                  <p className="text-white/60 text-xs">Online now</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 h-[calc(100%-140px)] overflow-y-auto px-6 py-4 space-y-4">
              {/* Initial Message from Bot */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-full"
                    style={{
                      display: 'block',
                      width: '140%',
                      height: '140%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <source
                      src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/haestusorb.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl rounded-tl-sm px-4 py-3">
                    <p className="text-white text-sm leading-relaxed">
                      Hey, how&apos;s it going? 👋
                    </p>
                  </div>
                  <p className="text-white/40 text-xs mt-1 ml-1">Just now</p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-white/10 bg-black/60 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/15 transition-all"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl px-5 py-2.5 font-medium text-sm transition-all hover:scale-105 shadow-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
