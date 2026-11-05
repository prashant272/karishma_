import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { GoldenDivider } from './Ornaments';
import RoyalScratchCard from './RoyalScratchCard';

/**
 * Section 3: Invitation Section (Immediately below Hero)
 * - Uses user-provided floral palace backdrop: /invitation_floral_bg.jpg
 * - Elegant Envelope-style unfolding card
 * - Interactive Royal Scratch Card feature to reveal the invitation
 * - Calligraphic names in Great Vibes
 * - Wax seal with R&K initials and golden tassels
 */
export default function InvitationCardSection({ weddingData }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="invitation"
      className="relative py-6 sm:py-8 px-4 sm:px-6 flex items-center justify-center text-[#2A050D] overflow-hidden"
      style={{
        backgroundImage: `url('/invitation_floral_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FAF5EB'
      }}
    >
      {/* Minimal clean overlay to keep the backdrop sharp and vivid */}
      <div className="absolute inset-0 bg-[#FAF5EB]/10 pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Entrance motion wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full relative max-w-2xl mx-auto pb-10"
        >
          {/* Interactive Royal Scratch to Reveal Wrap */}
          <RoyalScratchCard onScratched={() => setRevealed(true)}>
            {/* Envelope Card Body with full proportions */}
            <div className="relative w-full rounded-3xl pt-10 pb-16 px-6 sm:px-14 bg-gradient-to-b from-[#FFFDF9] via-[#FBF5EA] to-[#F5ECE0] border-2 border-[#D4AF37]/60 shadow-[0_25px_60px_rgba(74,14,23,0.15)] flex flex-col items-center text-center">
              
              {/* Ornate Gold Filigree Corners inside Card */}
              <div className="absolute top-4 left-4 w-7 h-7 sm:w-9 sm:h-9 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-4 right-4 w-7 h-7 sm:w-9 sm:h-9 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-4 left-4 w-7 h-7 sm:w-9 sm:h-9 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-4 right-4 w-7 h-7 sm:w-9 sm:h-9 border-b-2 border-r-2 border-[#D4AF37]" />

              {/* Top Ornamental Header */}
              <div className="mb-4">
                <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] text-[#8B1E3F] uppercase font-bold">
                  Together With Their Families
                </span>
              </div>

              {/* Couple Calligraphy Names: Bride first, then Groom */}
              <div className="my-2 py-1 w-full overflow-visible">
                <h2 className="font-script text-4xl sm:text-6xl md:text-7xl maroon-text-gradient drop-shadow-sm font-normal leading-tight">
                  {weddingData.bride.name} & {weddingData.groom.name}
                </h2>
              </div>

              <GoldenDivider className="my-4 w-3/4 max-w-sm" />

              {/* Formal Invitation Text */}
              <div className="space-y-2.5 max-w-xl mx-auto font-cinzel">
                <p className="text-xs sm:text-sm tracking-[0.25em] text-[#4A0E17] font-semibold uppercase leading-relaxed">
                  Request The Pleasure Of Your Company At Their
                </p>
                <p className="text-sm sm:text-base tracking-[0.3em] font-bold text-[#8B1E3F] uppercase">
                  Wedding Celebrations
                </p>
                <div className="pt-3 space-y-1">
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0E6]/80 border border-[#D4AF37]/50 shadow-sm">
                    <span className="font-cinzel font-bold text-xs sm:text-sm text-[#8B1E3F] tracking-widest uppercase">
                      {weddingData.weddingDetails.dateText}
                    </span>
                  </div>
                  <p className="font-serif-royal italic text-xs sm:text-sm text-[#4A0E17] font-medium pt-1 max-w-md mx-auto leading-relaxed">
                    {weddingData.weddingDetails.venueName}, {weddingData.weddingDetails.city}
                  </p>
                </div>
              </div>

              {/* Wax Seal Badge with Royal Initials & Golden Tassels (positioned comfortably inside base) */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#420711] via-[#7B1832] to-[#420711] p-1.5 shadow-[0_8px_25px_rgba(74,14,23,0.5)] border-2 border-[#D4AF37] flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-dashed border-[#FFE89E]/70 bg-gradient-to-b from-[#651022] to-[#420711] flex flex-col items-center justify-center shadow-inner">
                    <span className="font-serif-royal italic font-bold text-base sm:text-lg text-[#FFE89E] tracking-wider drop-shadow pr-0.5">
                      KaRa
                    </span>
                  </div>
                  {/* Golden Hanging Tassels */}
                  <div className="absolute -bottom-4 flex gap-1 pointer-events-none">
                    <div className="w-1.5 h-3.5 bg-gradient-to-b from-[#D4AF37] to-[#AA7C11] rounded-full shadow-sm" />
                    <div className="w-1.5 h-4.5 bg-gradient-to-b from-[#D4AF37] to-[#AA7C11] rounded-full shadow-sm" />
                    <div className="w-1.5 h-3.5 bg-gradient-to-b from-[#D4AF37] to-[#AA7C11] rounded-full shadow-sm" />
                  </div>
                </div>
              </div>

            </div>
          </RoyalScratchCard>
        </motion.div>

      </div>
    </section>
  );
}
