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
        
        {/* Section Header matching exact reference */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-8"
        >
          <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] text-[#671420] uppercase font-semibold block mb-1">
            TWO FAMILIES, ONE PROMISE
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-medium text-[#2A050D] tracking-[0.08em] uppercase">
            Our Families
          </h2>
          
          {/* Subtle horizontal ornamental divider line with diamond */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* 2 Column Family Notched Plaques */}
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

              {/* Groom's Name in exact Calligraphic Italic Signature Font */}
              <h3 className="font-signature text-5xl sm:text-6xl text-[#3A141A] font-normal tracking-wide mb-3 leading-none py-1">
                {groom?.name || "Raja"}
              </h3>

              {/* Groom Family details with exact typography from image */}
              <div className="space-y-4">
                <div>
                  <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.25em] text-[#671420] uppercase font-bold block mb-1">
                    SON OF
                  </span>
                  <p className="font-cormorant text-base sm:text-lg text-[#2A050D] font-medium leading-snug">
                    Smt. Chakra Lakshmi Jyothula &amp; Shri Rambabu Jyothula
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-[#D4AF37]/50 mx-auto my-1.5" />

                <div>
                  <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.25em] text-[#671420] uppercase font-bold block mb-1">
                    GRANDSON OF
                  </span>
                  <p className="font-cormorant text-base sm:text-lg text-[#2A050D] font-medium leading-snug">
                    Lt. Nukaratnam &amp; Lt. Venkata Rama Raju
                  </p>
                </div>
              </div>
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

              {/* Bride's Name in exact Calligraphic Italic Signature Font */}
              <h3 className="font-signature text-5xl sm:text-6xl text-[#3A141A] font-normal tracking-wide mb-3 leading-none py-1">
                {bride?.name || "Karishma"}
              </h3>

              {/* Bride Family details with exact typography from image */}
              <div className="space-y-4">
                <div>
                  <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.25em] text-[#671420] uppercase font-bold block mb-1">
                    DAUGHTER OF
                  </span>
                  <p className="font-cormorant text-base sm:text-lg text-[#2A050D] font-medium leading-snug">
                    Smt. Sanjula Devi &amp; Shri Debki Nandan Kumar
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-[#D4AF37]/50 mx-auto my-1.5" />

                <div>
                  <span className="font-cormorant text-[12px] sm:text-[13px] tracking-[0.25em] text-[#671420] uppercase font-bold block mb-1">
                    GRANDDAUGHTER OF
                  </span>
                  <p className="font-cormorant text-base sm:text-lg text-[#2A050D] font-medium leading-snug">
                    Lt. Annupurna Devi &amp; Shri Ganga Prasad Kumar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
