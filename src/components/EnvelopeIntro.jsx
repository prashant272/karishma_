import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GaneshIcon } from './Ornaments';

/**
 * Entry Page (Royal Envelope Opening):
 * - Exactly matching the reference image:
 *   - Background: Custom royal palace background with red curtains, lanterns, and royal elephants (/envelope_entry_bg.jpg)
 *   - Top: "Shree Ganeshay Namah" flanked by ornamental arrows & Lord Ganesha golden crest
 *   - Subheading: "Together With Their Families" in flowing calligraphic script
 *   - Center: Luxury Envelope with deep red brocade flap, golden floral damask, wax seal (R&K) with golden rope loops & tassels
 *   - Interactive: Clicking the wax seal or button triggers golden confetti & unlocks the royal invitation
 *   - Top Right: "PLAY MUSIC" pill button
 *   - Action Button: Elegant burgundy button with gold border "OPEN INVITATION"
 */
export default function EnvelopeIntro({ onOpen, weddingData, isAudioPlaying, toggleAudio }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Fire golden celebration confetti
    try {
      const count = 220;
      const defaults = {
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#FFE89E', '#8B1E3F', '#C81D39', '#FFFFFF'],
        zIndex: 9999
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    } catch (e) {
      console.log('Confetti triggered', e);
    }

    setTimeout(() => {
      onOpen();
    }, 5200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4 select-none"
      style={{
        backgroundImage: `url('/envelope_entry_bg.jpg?v=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F5ECE0'
      }}
    >
      {/* Ultra-subtle overlay to preserve all intricate artwork, flowers, lamps, and elephants */}
      <div className="absolute inset-0 bg-[#FAF5EB]/10 pointer-events-none" />

      {/* Top Right Music Pill Button matching reference */}
      <button
        onClick={toggleAudio}
        aria-label="Toggle background instrumental music"
        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#520A17]/90 border border-[#D4AF37]/70 text-[#FFE89E] hover:bg-[#6A0E20] hover:border-[#FFE89E] shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all text-[11px] sm:text-xs tracking-wider cursor-pointer font-cinzel font-semibold"
      >
        {isAudioPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]/70" />
        )}
        <span className="uppercase tracking-widest">
          {isAudioPlaying ? "Playing" : "Play Music"}
        </span>
      </button>

      {/* Center Content Wrapper */}
      <div className="relative z-20 w-full max-w-[560px] mx-auto flex flex-col items-center justify-center text-center my-auto py-2">

        {/* Top Floating Crest Header */}
        <AnimatePresence>
          {!isOpening && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center mb-3 sm:mb-4"
            >
              {/* Golden Ganesha Crest using real transparent artwork */}
              <div className="mb-2 relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <img
                  src="/ganesh_exact_user.png"
                  alt="Lord Ganesha"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]"
                />
              </div>

              {/* Shree Ganeshay Namah flanked by arrows */}
              <div className="flex items-center justify-center gap-2 text-[#4A0E17]">
                <span className="text-[#C69234] text-xs">⟼</span>
                <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-[#4A0E17] font-bold uppercase">
                  Shree Ganeshay Namah
                </p>
                <span className="text-[#C69234] text-xs">⟻</span>
              </div>

              {/* Subheading: Together With Their Families in Calligraphic script */}
              <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#520A17] mt-1 font-normal tracking-wide">
                The wedding celebrations of
              </h2>

              {/* Golden delicate ornamental motif */}
              <div className="flex items-center justify-center gap-1.5 mt-1 text-[#C69234]">
                <span className="w-4 h-[1px] bg-[#C69234]/60" />
                <span className="text-[10px]">❖</span>
                <span className="w-4 h-[1px] bg-[#C69234]/60" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Royal Envelope (Exact Replica of Reference with Sliding Card inside) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: isOpening ? 1.02 : 1, y: isOpening ? 40 : 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-[16/10.8] mx-auto cursor-pointer group select-none"
          onClick={handleOpenClick}
        >
          {/* 1. Underlying Inner Envelope Body */}
          <div className="absolute inset-0 rounded-2xl bg-[#2A050D] border-2 border-[#D4AF37]/80 shadow-[0_20px_50px_rgba(74,14,23,0.35)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <div className="absolute inset-2 border border-[#D4AF37]/30 rounded-xl" />
          </div>

          {/* 2. INVITATION CARD (Starts hidden inside, slides up into comfortable view without exiting screen) */}
          <motion.div
            className="absolute inset-x-2 sm:inset-x-4 top-2 bottom-4 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5ECE0] text-[#2A050D] rounded-xl p-3 sm:p-5 shadow-[0_20px_50px_rgba(74,14,23,0.35)] flex flex-col items-center justify-between text-center border-2 border-[#D4AF37]"
            initial={{ y: 0, opacity: 0 }}
            animate={isOpening ? { y: -80, opacity: 1, scale: 1.02 } : { y: 0, opacity: 0 }}
            transition={{ delay: 0.35, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ zIndex: isOpening ? 45 : 5, pointerEvents: isOpening ? 'auto' : 'none' }}
          >
            {/* Card Filigree Corners */}
            <div className="w-full flex items-center justify-between">
              <span className="w-3.5 h-3.5 border-t-2 border-l-2 border-[#8B1E3F]" />
              <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] text-[#8B1E3F] uppercase font-bold">
                Invitation
              </span>
              <span className="w-3.5 h-3.5 border-t-2 border-r-2 border-[#8B1E3F]" />
            </div>

            {/* Card Names & Details */}
            <div className="my-auto py-2 space-y-1.5">
              <p className="font-serif-royal italic text-xs sm:text-sm text-[#8B1E3F] tracking-wide">
                The wedding celebrations of
              </p>

              <h1 className="font-cinzel-decorative font-bold text-2xl sm:text-3xl text-[#4A0E17] my-1 tracking-wide">
                {weddingData.bride.name} & {weddingData.groom.name}
              </h1>

              <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto my-2" />

              <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#671420] font-semibold uppercase max-w-xs mx-auto leading-relaxed">
                Request The Pleasure Of Your Company At Our Wedding Celebrations
              </p>
            </div>

            <div className="w-full flex items-center justify-between">
              <span className="w-3.5 h-3.5 border-b-2 border-l-2 border-[#8B1E3F]" />
              <span className="text-[10px] sm:text-xs tracking-wider text-[#671420] font-cinzel font-semibold uppercase">
                R.S.V.P. Awaited &bull; Shubh Vivah
              </span>
              <span className="w-3.5 h-3.5 border-b-2 border-r-2 border-[#8B1E3F]" />
            </div>
          </motion.div>

          {/* 3. Envelope Base Cream Face & Flaps */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
            style={{ zIndex: 10 }}
          >
            {/* Front Base Cream Face */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDF9EE] via-[#FBF5E6] to-[#F1E5CA] border-2 border-[#D4AF37]/80 rounded-2xl" />

            {/* Inner Gold Foil Filigree Border */}
            <div className="absolute inset-1.5 rounded-xl border border-[#D4AF37]/50 pointer-events-none" />

            {/* Subtle Damask floral watermark texture on lower envelope face */}
            <div className="absolute inset-0 bg-[radial-gradient(#C69234_1px,transparent_1px)] [background-size:18px_18px] opacity-15 pointer-events-none" />
          </div>

          {/* 4. Top Red Brocade Flap (Closed by default, flips open upwards on click) */}
          <motion.div
            className="absolute top-0 inset-x-0 h-[62%] origin-top rounded-t-2xl bg-gradient-to-b from-[#671420] via-[#520A17] to-[#3B0710] shadow-[0_8px_20px_rgba(0,0,0,0.35)] flex flex-col items-center justify-start pt-3 sm:pt-4 border-b border-[#D4AF37]/80"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              zIndex: isOpening ? 8 : 25,
              transformStyle: 'preserve-3d'
            }}
            animate={isOpening ? { rotateX: 180, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* Gold Floral Damask Motif inside red flap */}
            <div className="text-[#FFE89E] opacity-90 scale-90 sm:scale-100 mt-1 pointer-events-none">
              <svg className="w-12 h-12 text-[#FFE89E]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 6.5L18 8L13.5 9.5L12 14L10.5 9.5L6 8L10.5 6.5L12 2Z" />
                <path d="M12 14C10 16 8 18 5 18C7 19.5 9 19.5 12 18.5C15 19.5 17 19.5 19 18C16 18 14 16 12 14Z" />
                <circle cx="8" cy="12" r="1.5" />
                <circle cx="16" cy="12" r="1.5" />
              </svg>
            </div>
          </motion.div>

          {/* 5. Golden Rope loops under the wax seal */}
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 h-10 pointer-events-none flex items-center justify-center z-30"
              >
                <div className="w-16 sm:w-20 h-5 rounded-full border-2 border-[#D4AF37] transform -rotate-12 -translate-x-4 shadow-sm" />
                <div className="w-16 sm:w-20 h-5 rounded-full border-2 border-[#D4AF37] transform rotate-12 translate-x-4 shadow-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 6. Central Royal Wax Seal (R & K) with golden hanging tassels */}
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, rotate: 45 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
              >
                {/* Scalloped Red Wax Seal */}
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#420711] via-[#7B1832] to-[#420711] p-1.5 shadow-[0_10px_30px_rgba(74,14,23,0.65)] border-2 border-[#D4AF37] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {/* Inner Beaded Ring */}
                  <div className="w-full h-full rounded-full border border-dashed border-[#FFE89E]/70 bg-gradient-to-b from-[#651022] to-[#420711] flex flex-col items-center justify-center shadow-inner">
                    <span className="font-serif-royal italic font-bold text-lg sm:text-xl text-[#FFE89E] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pr-0.5">
                      KaRa
                    </span>
                    <span className="text-[#D4AF37] text-[9px] -mt-1 opacity-90">❧</span>
                  </div>
                </div>

                {/* Golden Hanging Tassels below seal */}
                <div className="flex gap-1.5 -mt-1 pointer-events-none">
                  <div className="w-2 h-5 bg-gradient-to-b from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] rounded-full shadow-sm" />
                  <div className="w-2.5 h-6 bg-gradient-to-b from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] rounded-full shadow-sm" />
                  <div className="w-2 h-5 bg-gradient-to-b from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] rounded-full shadow-sm" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Action Button: OPEN INVITATION (matching user reference button) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 sm:mt-7 flex flex-col items-center"
        >
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-2.5 sm:py-3 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(74,14,23,0.4)] bg-gradient-to-r from-[#520A17] via-[#6A0E20] to-[#520A17] text-[#FFE89E] border border-[#D4AF37]/80 font-cinzel font-bold text-xs sm:text-sm tracking-[0.25em] uppercase cursor-pointer"
          >
            <span className="text-[#D4AF37] text-xs">✤</span>
            <span>{isOpening ? "Opening..." : "Open Invitation"}</span>
            <span className="text-[#D4AF37] text-xs">✤</span>
          </button>

          {/* Subtitle helper prompt */}
          <p className="text-[10px] sm:text-xs text-[#520A17] tracking-wider mt-3 font-cinzel font-semibold uppercase">
            Click the wax seal or button to unfold the celebration
          </p>

          {/* Bottom floral accent */}
          <div className="flex items-center justify-center gap-2 mt-1.5 text-[#C69234]">
            <span className="w-6 h-[1px] bg-[#C69234]/50" />
            <span className="text-xs">❦</span>
            <span className="w-6 h-[1px] bg-[#C69234]/50" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

