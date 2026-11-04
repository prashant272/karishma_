import React from 'react';
import { motion } from 'framer-motion';

/**
 * Section 6: Wedding Day Timeline (Wedding Day Celebrations)
 * - Exact replica of the reference design provided by user:
 *   - "10 December 2026 • Celebrations Throughout the Day" in elegant italic serif
 *   - "WEDDING DAY CELEBRATIONS" in bold royal burgundy Cinzel
 *   - Long horizontal banner badge with soft cream fill and fine double gold notch border
 *   - Three scalloped floral medallions with custom gold icons:
 *     1. Lotus / Kalash crest -> Manglik Haldi Ceremony | 10:00 AM – 12:00 PM
 *     2. Musical note -> Coastal Pool Party & Music | 03:00 PM – 06:00 PM
 *     3. Wedding rings -> Wedding Ceremony & Muhuratham (Saat Phere) | 06:00 PM Onwards
 *   - Dotted arching gold connection curves with diamond separators between milestones
 */
export default function StorySection() {
  const timelineItems = [
    {
      title: "Manglik Haldi Ceremony",
      time: "10:00 AM – 12:00 PM",
      icon: (
        // Lotus / Diya / Kalash floral icon
        <svg className="w-5 h-5 text-[#9E6514]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-.8 2.2-2.5 5.5-5 7 1.8.3 3.5-.4 5-2 1.5 1.6 3.2 2.3 5 2-2.5-1.5-4.2-4.8-5-7z"/>
          <path d="M12 9c-2 2.5-5.2 4.2-8.5 4.5 2.2 1.3 5 1.5 7.5.3-1.2 2.3-1.5 4.5-.5 6.2 1.2-2 3.2-3.5 5.5-4 1.2 1.5 2 3.2 2 5.5 1.5-1.8 1.8-4.2.8-6.5 2.5 1.2 5.3 1 7.5-.3-3.3-.3-6.5-2-8.5-4.5-.4 1.4-1.2 2.8-2.3 3.8-1.1-1-1.9-2.4-2.3-3.8z"/>
          <path d="M5 20c2.5 1 5.5 1.5 7 1.5s4.5-.5 7-1.5c-1.5-.8-3.5-1.2-7-1.2s-5.5.4-7 1.2z"/>
        </svg>
      )
    },
    {
      title: "Coastal Pool Party & Music",
      time: "03:00 PM – 06:00 PM",
      icon: (
        // Music note icon
        <svg className="w-5 h-5 text-[#9E6514]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      )
    },
    {
      title: "Wedding Ceremony &\nMuhuratham (Saat Phere)",
      time: "06:00 PM Onwards",
      icon: (
        // Interlocking Wedding Rings icon
        <svg className="w-5 h-5 text-[#9E6514]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 4c-3.31 0-6 2.69-6 6 0 2.97 2.16 5.43 5 5.91V14c-1.72-.45-3-2.02-3-3.9 0-2.21 1.79-4 4-4 1.88 0 3.45 1.28 3.9 3h2.09C14.43 6.16 11.97 4 9 4z"/>
          <path d="M15 8c-3.31 0-6 2.69-6 6 0 2.97 2.16 5.43 5 5.91v-1.99c-1.72-.45-3-2.02-3-3.92 0-2.21 1.79-4 4-4 1.88 0 3.45 1.28 3.9 3h2.09c-.56-2.84-3.02-5-5.99-5z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      id="story"
      className="relative py-6 sm:py-8 px-4 text-[#2A050D] overflow-hidden"
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

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header matching exact typography and styling */}
        <div className="text-center mb-6">
          <p className="font-serif-royal italic text-sm sm:text-base text-[#4A0E17] font-medium tracking-wide mb-1">
            10 December 2026 &nbsp;&bull;&nbsp; Celebrations Throughout the Day
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#B37B24]" />
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.18em] text-[#671420] uppercase">
              Wedding Day Celebrations
            </h2>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#B37B24]" />
          </div>
        </div>

        {/* Long Horizontal Badge (exact match with user reference) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Main Card Shape with Gold Borders and Soft Radial Glow */}
          <div className="relative rounded-[28px] sm:rounded-full bg-gradient-to-r from-[#FAF3E3]/95 via-[#FFFDF9]/95 to-[#FAF3E3]/95 border-2 border-[#D4AF37]/70 shadow-[0_12px_35px_rgba(74,14,23,0.08)] px-4 py-8 sm:px-12 sm:py-8">
            
            {/* Inner delicate gold line */}
            <div className="absolute inset-1.5 rounded-[22px] sm:rounded-full border border-[#D4AF37]/35 pointer-events-none" />

            {/* Desktop Arching Connecting Dotted Lines */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 120"
            >
              {/* Arch 1: Haldi to Pool Party */}
              <path
                d="M 230 45 Q 365 20 500 45"
                fill="none"
                stroke="#C69234"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                opacity="0.75"
              />
              {/* Diamond midpoint 1 */}
              <polygon points="365,30 369,34 365,38 361,34" fill="#9E6514" />

              {/* Arch 2: Pool Party to Muhuratham */}
              <path
                d="M 500 45 Q 635 20 770 45"
                fill="none"
                stroke="#C69234"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                opacity="0.75"
              />
              {/* Diamond midpoint 2 */}
              <polygon points="635,30 639,34 635,38 631,34" fill="#9E6514" />
            </svg>

            {/* 3 Milestone Events */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10 items-start">
              {timelineItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-2">
                  
                  {/* Scalloped Floral Circle with Gold Icon */}
                  <div className="relative mb-3 flex items-center justify-center">
                    {/* Scalloped Medallion Background */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#F5E8CB] border-2 border-[#D4AF37] shadow-sm flex items-center justify-center p-2.5">
                      <div className="w-full h-full rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-serif-royal font-bold text-sm sm:text-base text-[#2A050D] leading-snug whitespace-pre-line">
                    {item.title}
                  </h3>

                  {/* Time */}
                  <p className="font-serif-royal text-xs sm:text-sm text-[#4A0E17]/85 font-medium mt-1">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
