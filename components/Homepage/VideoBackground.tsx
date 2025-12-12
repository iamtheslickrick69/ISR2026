'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate to 0.9x for cinematic effect
    video.playbackRate = 0.9;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {!videoError ? (
        <>
          {/* Full screen video at 100% size */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            className="pointer-events-none"
          >
            <source
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/worldvid.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : (
        /* Fallback gradient background when video fails */
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      )}
    </div>
  );
}
