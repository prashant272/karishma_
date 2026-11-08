import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Flower2, Wine, Crown, X, ArrowRight } from 'lucide-react';
import { GoldenDivider } from './Ornaments';

const iconMap = {
  Sparkles: Sparkles,
  Flower: Flower2,
  Crown: Crown,
  GlassWater: Wine
};

/**
 * Section 5: Wedding Ceremonies
 * - Exact 3 cards matching the reference image:
 *   1. Haldi Ceremony (with user's custom floral/turmeric banner)
 *   2. Pool Party (with user's custom poolside banner)
 *   3. Muhuratham (with user's custom Vedic Mandap banner)
 * - Rounded gold borders, "View Details ->" button with interactive modal
 * - Warm Ivory / Cream backdrop with organic spacing
 */
export default function EventsSection({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section
      id="events"
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
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#8B1E3F] uppercase font-bold block mb-1">
            A Celebration of Love & Togetherness
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold maroon-text-gradient tracking-wide uppercase">
            Wedding Ceremonies
          </h2>
          <GoldenDivider className="mt-4" />
        </div>

        {/* Ceremonies Grid (Responsive for 3 or 4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {events.map((evt, idx) => {
            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-between bg-[#FFFDF9] border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 shadow-[0_12px_30px_rgba(74,14,23,0.08)] group hover:-translate-y-1.5"
              >
                {/* Event Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#FAF5EB]">
                  <img
                    src={evt.image}
                    alt={evt.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A050D]/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Event Details Content */}
                <div className="p-6 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#4A0E17] uppercase tracking-wider">
                      {evt.name}
                    </h3>
                    <p className="font-serif-royal italic text-xs text-[#8B1E3F]/80 mt-1 mb-5">
                      {evt.tagline}
                    </p>

                    <div className="space-y-2.5 text-xs text-[#2A050D]/80 border-t border-[#D4AF37]/25 pt-4 text-left">
                      {/* Date */}
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-3.5 h-3.5 text-[#8B1E3F] shrink-0" />
                        <span className="font-cinzel font-semibold text-[#4A0E17]">{evt.date}</span>
                      </div>
                      {/* Time */}
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-3.5 h-3.5 text-[#8B1E3F] shrink-0" />
                        <span>{evt.time}</span>
                      </div>
                      {/* Venue */}
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8B1E3F] shrink-0" />
                        <span className="truncate">{evt.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* "View Details ->" Button matching reference visual */}
                  <div className="mt-6 pt-3">
                    <button
                      onClick={() => setSelectedEvent(evt)}
                      className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#671420] via-[#8B1E3F] to-[#4A0E17] text-[#FAF5EB] font-cinzel font-semibold text-[11px] tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFE89E]" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF0E6] text-[#671420] flex items-center justify-center hover:bg-[#F3E5AB] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-44 rounded-2xl overflow-hidden mb-5">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-cinzel text-xs tracking-widest text-[#8B1E3F] uppercase font-bold">
                Royal Ceremony
              </span>
              <h3 className="font-cinzel-decorative text-2xl font-bold text-[#4A0E17] mt-1 mb-2">
                {selectedEvent.name}
              </h3>
              <p className="font-serif-royal italic text-sm text-[#4A0E17]/80 mb-5">
                {selectedEvent.tagline}
              </p>

              <div className="space-y-3 p-4 rounded-xl bg-[#FAF5EB] border border-[#D4AF37]/30 text-xs sm:text-sm text-[#2A050D]">
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Time:</strong> {selectedEvent.time}</p>
                <p><strong>Venue:</strong> {selectedEvent.venue}</p>
                <p><strong>Dress Code / Attire:</strong> {selectedEvent.dressCode}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
