import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Sparkles, Heart } from 'lucide-react';
import { GaneshIcon, MandalaCorner } from './Ornaments';

/**
 * Highly responsive Hero Section following fluid, breakpoint-perfect scaling
 * (mobile 320px/375px/425px -> tablet 768px -> laptop 1024px -> desktop 1440px)
 * Matches the responsive container & typography proportions of modern production hero layouts.
 */
export default function HeroSection({ weddingData }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(weddingData.weddingDetails.targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [weddingData]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-screen flex flex-col justify-center items-center pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-14 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#180307]"
    >
      {/* Background Image - perfectly positioned and scaled on mobile & desktop */}
      <div className="absolute inset-0 z-0">
        <img
          src={weddingData.weddingDetails.heroImage}
          alt="Royal Beachfront Mandap Sunset"
          className="w-full h-full object-cover object-[70%_center] sm:object-[center_35%] md:object-center filter brightness-[0.78] contrast-[1.05]"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Subtle Dark Vignette & Burgundy Gradient for maximum text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#180307]/80 via-[#2A050D]/40 to-[#180307]/85" />
        <div className="absolute inset-0 mandala-pattern opacity-15 pointer-events-none" />
      </div>

      {/* Ornate corner mandalas with responsive sizing & placement */}
      <MandalaCorner className="absolute top-3 left-2 sm:top-6 sm:left-4 md:left-6 w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 text-[#D4AF37]/25 pointer-events-none" />
      <MandalaCorner className="absolute top-3 right-2 sm:top-6 sm:right-4 md:right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 text-[#D4AF37]/25 transform scale-x-[-1] pointer-events-none" />

      {/* Main Content Box - Fluid responsive container */}
      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center my-auto py-1 sm:py-2">
        
        {/* Lord Ganesha auspicious blessing with user's clean cropped golden artwork */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center mb-2 sm:mb-3"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src="/ganesh_perfect_gold.png"
              alt="Lord Ganesha"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.75)]"
            />
          </div>
          <p className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-[0.32em] sm:tracking-[0.38em] text-[#FFE89E] mt-1 sm:mt-1.5 uppercase font-semibold">
            Shree Ganeshay Namah
          </p>
        </motion.div>

        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-2 sm:mb-3"
        >
          <span className="inline-block font-cinzel text-xs sm:text-sm md:text-base tracking-[0.24em] sm:tracking-[0.3em] text-[#FFE89E] uppercase font-medium">
            Two Families, One Promise
          </span>
        </motion.div>

        {/* Couple Names & KaRa Royal Crest Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="my-2 sm:my-3 md:my-5 w-full overflow-visible py-1 flex flex-col items-center"
        >
          {/* KaRa Royal Monogram Badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-2 sm:mb-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#420711]/90 via-[#651022]/80 to-[#420711]/90 border border-[#D4AF37]/70 shadow-[0_4px_18px_rgba(212,175,55,0.35)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="font-serif-royal italic font-bold text-lg sm:text-xl md:text-2xl tracking-[0.15em] text-[#FFE89E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              #KaRa
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
          </div>

          {/* <h1 className="font-cinzel-decorative font-bold leading-tight flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-5 px-2">
            <span className="text-[30px] xs:text-[36px] sm:text-5xl md:text-6xl lg:text-7xl gold-text-shimmer drop-shadow-md tracking-wide">
              {weddingData.bride.name}
            </span>
            <span className="font-script text-[30px] xs:text-[36px] sm:text-5xl md:text-6xl text-[#FFE89E] font-normal px-1">
              &
            </span>
            <span className="text-[30px] xs:text-[36px] sm:text-5xl md:text-6xl lg:text-7xl gold-text-shimmer drop-shadow-md tracking-wide">
              {weddingData.groom.name}
            </span>
          </h1> */}
        </motion.div>

        {/* Subheading Invitation Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="max-w-xl mx-auto font-serif-royal italic text-xs sm:text-sm md:text-base text-[#FAF5EB]/90 leading-relaxed px-4 my-2 sm:my-3"
        >
          "{weddingData.weddingDetails.subheading}"
        </motion.p>

        {/* Countdown Timer - Mobile fluid grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="w-full max-w-[320px] sm:max-w-md mx-auto mt-3 sm:mt-5"
        >
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#2A050D]/85 border border-[#D4AF37]/45 shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
            {[
              { label: "Days", val: timeLeft.days },
              { label: "Hours", val: timeLeft.hours },
              { label: "Minutes", val: timeLeft.minutes },
              { label: "Seconds", val: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <span className="font-cinzel text-base sm:text-2xl md:text-3xl font-bold gold-text-gradient leading-tight">
                  {String(item.val).padStart(2, '0')}
                </span>
                <span className="font-cinzel text-[8px] sm:text-[10px] md:text-[11px] tracking-widest text-[#F3E5AB]/80 uppercase mt-0.5 sm:mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
