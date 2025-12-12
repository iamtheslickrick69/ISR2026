'use client';

import HeroSection from './HeroSection';
import TrilogySlider from './TrilogySlider';

export default function Homepage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <HeroSection />
        <TrilogySlider />
      </div>
    </main>
  );
}
