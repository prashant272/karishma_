import React, { useState, useEffect } from 'react';
import { GaneshIcon } from './Ornaments';

const CRITICAL_IMAGES = [
  '/envelope_entry_bg.jpg',
  '/invitation_floral_bg.jpg',
  '/resort_venue_real.jpg',
  '/events/haldi_banner.jpg',
  '/events/pool_party_banner.jpg',
  '/events/muhuratham_banner.jpg'
];

/**
 * Preloader component that blocks website display until all critical images
 * are completely fetched and decoded by the browser.
 */
export default function RoyalPreloader({ onLoaded }) {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    let loadedCount = 0;
    const total = CRITICAL_IMAGES.length;

    const updateProgress = () => {
      loadedCount++;
      const current = Math.min(100, Math.round((loadedCount / total) * 100));
      setProgress(current);
      if (loadedCount >= total) {
        setTimeout(() => {
          onLoaded();
        }, 500);
      }
    };

    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // gracefully continue even if one fails
    });

    // Safety fallback: if network hangs, unlock after 5 seconds
    const timeout = setTimeout(() => {
      onLoaded();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#150205] text-[#FAF5EB] select-none">
      {/* Golden Mandala Ambient Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm w-full">
        {/* Lord Ganesha Icon */}
        <div className="mb-4 relative w-16 h-16 flex items-center justify-center">
          <img
            src="/ganesh_exact_user.png"
            alt="Lord Ganesha"
            className="w-full h-full object-contain animate-pulse filter drop-shadow-[0_4px_15px_rgba(212,175,55,0.7)]"
          />
        </div>

        <p className="font-cinzel text-xs tracking-[0.35em] text-[#FFE89E] uppercase font-bold mb-2">
          Shubh Vivah &bull; Invitation
        </p>

        <h1 className="font-cinzel-decorative font-bold text-2xl sm:text-3xl gold-text-shimmer mb-6 tracking-wide">
          Karishma & Raja
        </h1>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#2A050D] border border-[#D4AF37]/50 rounded-full h-2.5 p-0.5 overflow-hidden shadow-inner mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-serif-royal italic text-xs text-[#FAF5EB]/70">
          Preparing your  experience... ({progress}%)
        </p>
      </div>
    </div>
  );
}

