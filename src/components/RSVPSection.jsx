import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Phone, Users, MessageSquare, Mail, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoldenDivider } from './Ornaments';
import { sendRSVPEmail } from '../api';

/**
 * Section 8: RSVP Section
 * - Matching reference image:
 *   "Grace Us With Your Presence"
 *   "R. S. V. P."
 *   "Please let us know if you can join us for the celebrations."
 *   Rounded burgundy card with gold border and "Confirm Your RSVP ->" button
 */
export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    joiningDate: '10 December 2026',
    attending: 'yes',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // 1. Dispatch email in background immediately (non-blocking)
    sendRSVPEmail(formData);

    // 2. Instant smooth transition for guest (no waiting or loading delay)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 140,
          spread: 85,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#FFE89E', '#8B1E3F', '#671420', '#FFFFFF']
        });
      } catch (err) {}
    }, 400);
  };

  return (
    <section
      id="rsvp"
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

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="font-cinzel text-xs tracking-[0.25em] text-[#8B1E3F] uppercase font-bold block mb-1">
            Grace Us With Your Presence
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold maroon-text-gradient tracking-wide uppercase">
            R. S. V. P.
          </h2>
          <GoldenDivider className="mt-4" />
          <p className="max-w-lg mx-auto font-serif-royal italic text-xs sm:text-sm text-[#2A050D]/75 mt-2">
            Please let us know if you can join us for the celebrations.
          </p>
        </div>

        {/* RSVP Card Form Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(74,14,23,0.08)] ornate-corner-card">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Guest Name */}
                <div>
                  <label className="block font-cinzel text-xs uppercase tracking-widest text-[#8B1E3F] mb-2 font-semibold">
                    Guest Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar & Family"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF5EB]/60 border border-[#D4AF37]/40 text-[#2A050D] placeholder-[#2A050D]/40 focus:outline-none focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F] transition-all text-sm font-serif-royal"
                    />
                  </div>
                </div>

                {/* Mobile Number, Guests Count & Date of Joining Event in responsive grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Mobile Number */}
                  <div>
                    <label className="block font-cinzel text-xs uppercase tracking-widest text-[#8B1E3F] mb-2 font-semibold">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF5EB]/60 border border-[#D4AF37]/40 text-[#2A050D] placeholder-[#2A050D]/40 focus:outline-none focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F] transition-all text-sm font-serif-royal"
                      />
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block font-cinzel text-xs uppercase tracking-widest text-[#8B1E3F] mb-2 font-semibold">
                      Number of Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF5EB]/60 border border-[#D4AF37]/40 text-[#2A050D] focus:outline-none focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F] transition-all text-sm font-serif-royal cursor-pointer"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5+ Guests">5+ Guests (Family)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date of Joining Event */}
                  <div>
                    <label className="block font-cinzel text-xs uppercase tracking-widest text-[#8B1E3F] mb-2 font-semibold">
                      Date of Joining Event *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                      <select
                        name="joiningDate"
                        value={formData.joiningDate}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF5EB]/60 border border-[#D4AF37]/40 text-[#2A050D] focus:outline-none focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F] transition-all text-sm font-serif-royal cursor-pointer"
                      >
                        <option value="10 December 2026 (All Events)">10 Dec 2026 (All Events)</option>
                        <option value="10 Dec - Haldi Ceremony (Morning)">10 Dec - Haldi (11 AM)</option>
                        <option value="10 Dec - Pool Party (Afternoon)">10 Dec - Pool Party (4 PM)</option>
                        <option value="10 Dec - Muhuratham (Evening)">10 Dec - Muhuratham (7 PM)</option>
                        <option value="09 December 2026 (Early Arrival)">09 Dec 2026 (Early Arrival)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Will you attend radio group */}
                <div>
                  <label className="block font-cinzel text-xs uppercase tracking-widest text-[#8B1E3F] mb-2 font-semibold">
                    Will you attend? *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.attending === 'yes'
                          ? 'bg-[#4A0E17] border-[#8B1E3F] text-[#FAF5EB] shadow-sm'
                          : 'bg-[#FAF5EB]/50 border-[#D4AF37]/40 text-[#2A050D]/70 hover:border-[#8B1E3F]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider">
                        Joyfully Accept
                      </span>
                    </label>

                    <label
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.attending === 'no'
                          ? 'bg-[#4A0E17] border-[#8B1E3F] text-[#FAF5EB] shadow-sm'
                          : 'bg-[#FAF5EB]/50 border-[#D4AF37]/40 text-[#2A050D]/70 hover:border-[#8B1E3F]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider">
                        Regretfully Decline
                      </span>
                    </label>
                  </div>
                </div>

                {/* Message for the Couple */}
                <div>
                  <label className="block font-cinzel text-xs uppercase tracking-widest text-[#8B1E3F] mb-2 font-semibold">
                    Warm Blessings / Message for Karishma & Raja
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#D4AF37]" />
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Wishing you a lifetime of timeless happiness and love..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF5EB]/60 border border-[#D4AF37]/40 text-[#2A050D] placeholder-[#2A050D]/40 focus:outline-none focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F] transition-all text-sm font-serif-royal resize-none"
                    />
                  </div>
                </div>

                {/* Confirm RSVP Button (Matching reference burgundy pill with mail icon) */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#671420] via-[#8B1E3F] to-[#4A0E17] text-[#FAF5EB] font-cinzel font-semibold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_6px_20px_rgba(103,20,32,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#FFE89E]" />
                  <span>{submitting ? "Confirming RSVP..." : "Confirm Your RSVP \u2192"}</span>
                </button>
              </motion.form>
            ) : (
              /* Success Confirmation */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4 space-y-4"
              >
                <div className="w-16 h-16 rounded-full mx-auto bg-[#4A0E17] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-[#FFE89E]" />
                </div>

                <span className="font-cinzel text-xs tracking-[0.25em] text-[#8B1E3F] uppercase font-bold">
                  RSVP Received With Honor
                </span>

                <h3 className="font-cinzel-decorative text-2xl sm:text-3xl font-bold text-[#4A0E17]">
                  Thank You, {formData.name || "Esteemed Guest"}!
                </h3>

                <p className="font-serif-royal italic text-sm text-[#2A050D]/80 max-w-md mx-auto">
                  {formData.attending === 'yes'
                    ? "Your royal presence has been confirmed. We eagerly look forward to celebrating with you at Sai Priya Beach Resort, Visakhapatnam!"
                    : "We will miss your presence dearly, but we carry your heartfelt blessings in our hearts."}
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-full border border-[#8B1E3F]/40 text-xs font-cinzel text-[#8B1E3F] hover:bg-[#FAF0E6] transition-all"
                  >
                    Send Another Response
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
