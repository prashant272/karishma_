import React from 'react';
import { motion } from 'framer-motion';

/**
 * Section 4: Family Introduction (Our Families)
 * - Uses exact custom floral mandap arch background: /family_bg.jpg
 * - Matching the 2nd reference image:
 *   - "WITH GURUJI'S BLESSINGS"
 *   - "OUR FAMILIES" with golden ornamental divider
 *   - Two ornate gold notched plaques:
 *     - "ROYAL LINEAGE / GROOM'S FAMILY"
 *     - "NOBLE HERITAGE / BRIDE'S FAMILY"
 *   - Flanked by royal crown/kalash crests on top of each plaque
 *   - Clean balanced typography displaying the exact user family names
 */
export default function FamilySection({ groom, bride }) {
  return (
    <section
      id="family"
      className="relative py-6 sm:py-8 px-4 sm:px-6 flex items-center justify-center text-[#2A050D] overflow-hidden"
      style={{
        backgroundImage: `url('/invitation_floral_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FAF5EB'
      }}
    >
      {/* Light subtle overlay so the floral & palace background stays clear and vivid */}
      <div className="absolute inset-0 bg-[#FAF5EB]/10 pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header (exact match with 2nd reference image) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-8"
        >
          <span className="font-cinzel text-xs md:text-sm tracking-[0.3em] text-[#8B1E3F] uppercase font-bold block mb-1">
            With Guruji's Blessings
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold maroon-text-gradient tracking-wider uppercase">
            Our Families
          </h2>
          
          {/* Subtle horizontal ornamental divider line */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* 2 Column Family Notched Plaques (exact replica of 2nd image design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-4xl">
          
          {/* Groom's Family Plaque */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Top Golden Crown / Kalash Motif Emblem */}
            <div className="flex justify-center -mb-3 z-10">
              <div className="w-10 h-7 text-[#D4AF37] flex items-center justify-center">
                <svg viewBox="0 0 40 30" fill="currentColor" className="w-8 h-8 filter drop-shadow-sm">
                  <path d="M20 2L23 10L30 6L26 16L34 20L20 26L6 20L14 16L10 6L17 10L20 2Z" fill="#D4AF37"/>
                  <circle cx="20" cy="14" r="2" fill="#FFE89E"/>
                </svg>
              </div>
            </div>

            {/* Notched Classic Gold Border Plaque */}
            <div className="w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#FFFDF9]/95 border-2 border-[#D4AF37]/60 shadow-[0_12px_30px_rgba(74,14,23,0.08)] text-center relative">
              {/* Ornate corner notch accents */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

              <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#8B1E3F] uppercase font-bold block mb-1">
                Royal Lineage
              </span>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#4A0E17] uppercase tracking-wider mb-4">
                Groom's Family
              </h3>

              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-4 opacity-70" />

              {/* Exact user groom family details */}
              <p className="font-serif-royal text-sm sm:text-base text-[#2A050D] font-medium leading-relaxed">
                Smt. Chakra Lakshmi Jyothula
              </p>
              <p className="font-serif-royal italic text-xs text-[#8B1E3F]/80 my-1">&</p>
              <p className="font-serif-royal text-sm sm:text-base text-[#2A050D] font-medium leading-relaxed">
                Shri Rambabu Jyothula
              </p>
            </div>
          </motion.div>

          {/* Bride's Family Plaque */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            {/* Top Golden Crown / Kalash Motif Emblem */}
            <div className="flex justify-center -mb-3 z-10">
              <div className="w-10 h-7 text-[#D4AF37] flex items-center justify-center">
                <svg viewBox="0 0 40 30" fill="currentColor" className="w-8 h-8 filter drop-shadow-sm">
                  <path d="M20 2L23 10L30 6L26 16L34 20L20 26L6 20L14 16L10 6L17 10L20 2Z" fill="#D4AF37"/>
                  <circle cx="20" cy="14" r="2" fill="#FFE89E"/>
                </svg>
              </div>
            </div>

            {/* Notched Classic Gold Border Plaque */}
            <div className="w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#FFFDF9]/95 border-2 border-[#D4AF37]/60 shadow-[0_12px_30px_rgba(74,14,23,0.08)] text-center relative">
              {/* Ornate corner notch accents */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

              <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#8B1E3F] uppercase font-bold block mb-1">
                Noble Heritage
              </span>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#4A0E17] uppercase tracking-wider mb-4">
                Bride's Family
              </h3>

              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-4 opacity-70" />

              {/* Exact user bride family details - only Mother & Father as requested */}
              <p className="font-serif-royal text-sm sm:text-base text-[#2A050D] font-medium leading-relaxed">
                Smt. Sanjula Devi
              </p>
              <p className="font-serif-royal italic text-xs text-[#8B1E3F]/80 my-1">&</p>
              <p className="font-serif-royal text-sm sm:text-base text-[#2A050D] font-medium leading-relaxed">
                Shri Debki Nandan Kumar
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
