import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Star } from 'lucide-react';
import { GoldenDivider } from './Ornaments';

/**
 * Section 7: Wedding Venue
 * - Replicating reference layout:
 *   Left side: Resort pool & night illumination image
 *   Right side: 5 Stars rating, Venue Name, Address, Scenic Ocean description & Get Directions ->
 */
export default function VenueSection({ weddingDetails }) {
  return (
    <section
      id="venue"
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

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#8B1E3F] uppercase font-bold block mb-1">
            Destinations of Our Celebration
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold maroon-text-gradient tracking-wide uppercase">
            Wedding & Reception Venues
          </h2>
          <GoldenDivider className="mt-4" />
        </div>

        <div className="space-y-10">
          {/* Card 1: Wedding Venue Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden bg-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(74,14,23,0.08)] grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            {/* Left Column: Venue Picture with Rounded Corner Frame */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-[#FAF5EB]">
              <img
                src="/resort_venue_real.jpg"
                alt="Sai Priya Beach Resort Visakhapatnam"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4 bg-[#2A050D]/85 border border-[#D4AF37] px-3.5 py-1.5 rounded-full text-[11px] font-cinzel text-[#FFE89E] backdrop-blur-sm shadow">
                Wedding Venue
              </div>
            </div>

            {/* Right Column: Venue Info, Address & Directions Button */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A0E17] uppercase tracking-wide">
                  {weddingDetails.venueName}
                </h3>
                
                <p className="font-cinzel text-xs tracking-widest text-[#8B1E3F] uppercase font-semibold mt-1 mb-5">
                  {weddingDetails.city}
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-[#2A050D]/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                    <p className="font-serif-royal leading-relaxed">
                      {weddingDetails.fullAddress}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                    <p className="font-serif-royal leading-relaxed text-xs text-[#2A050D]/70">
                      Scenic Beach views with luxury stay, pristine beachfront lawns, and grand Vedic mandapam setup.
                    </p>
                  </div>
                </div>
              </div>

              {/* "Get Directions ->" Button */}
              <div className="pt-6 border-t border-[#D4AF37]/25 mt-6">
                <a
                  href={weddingDetails.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#671420] via-[#8B1E3F] to-[#4A0E17] text-[#FAF5EB] font-cinzel font-semibold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_15px_rgba(103,20,32,0.3)] cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#FFE89E]" />
                  <span>Get Wedding Directions &rarr;</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Reception Venue Container */}
          {weddingDetails.receptionVenue && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl overflow-hidden bg-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(74,14,23,0.08)] grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Reception Venue Picture */}
              <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-[#FAF5EB]">
                <img
                  src={weddingDetails.receptionVenue.image}
                  alt={weddingDetails.receptionVenue.venueName}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 bg-[#2A050D]/85 border border-[#D4AF37] px-3.5 py-1.5 rounded-full text-[11px] font-cinzel text-[#FFE89E] backdrop-blur-sm shadow">
                  Reception Venue
                </div>
              </div>

              {/* Right Column: Reception Venue Info & Directions */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A0E17] uppercase tracking-wide">
                    {weddingDetails.receptionVenue.venueName}
                  </h3>
                  
                  <p className="font-cinzel text-xs tracking-widest text-[#8B1E3F] uppercase font-semibold mt-1 mb-5">
                    {weddingDetails.receptionVenue.city}
                  </p>

                  <div className="space-y-4 text-xs sm:text-sm text-[#2A050D]/80">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                      <p className="font-serif-royal leading-relaxed">
                        {weddingDetails.receptionVenue.fullAddress}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Compass className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                      <p className="font-serif-royal leading-relaxed text-xs text-[#2A050D]/70">
                        {weddingDetails.receptionVenue.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* "Get Directions ->" Button */}
                <div className="pt-6 border-t border-[#D4AF37]/25 mt-6">
                  <a
                    href={weddingDetails.receptionVenue.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#671420] via-[#8B1E3F] to-[#4A0E17] text-[#FAF5EB] font-cinzel font-semibold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_15px_rgba(103,20,32,0.3)] cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-[#FFE89E]" />
                    <span>Get Reception Directions &rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
