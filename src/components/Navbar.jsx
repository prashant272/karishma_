import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ isAudioPlaying, toggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Invitation", href: "#invitation" },
    { label: "Our Families", href: "#family" },
    { label: "Ceremonies", href: "#events" },
    { label: "Venue", href: "#venue" },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2A050D]/95 backdrop-blur-md border-b border-[#D4AF37]/30 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.4)]'
          : 'bg-gradient-to-b from-[#180307]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#996515] to-[#FFE89E] p-[1.5px] shadow-md">
            <div className="w-full h-full rounded-full bg-[#3B0712] flex items-center justify-center">
              <span className="font-serif-royal italic font-bold text-sm tracking-normal text-[#FFE89E] pr-0.5">
                KaRa
              </span>
            </div>
          </div>
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FFE89E] group-hover:text-white transition-colors">
            Karishma & Raja
          </span>
        </a>

        {/* Desktop Navigation Links (matching the reference styling) */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="font-cinzel text-xs uppercase tracking-widest text-[#FAF5EB]/85 hover:text-[#FFE89E] transition-colors relative py-1 hover:border-b hover:border-[#D4AF37]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side controls: Audio Toggle & RSVP Now button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            title={isAudioPlaying ? "Mute Wedding Music" : "Play Wedding Music"}
            className="w-9 h-9 rounded-full bg-[#3B0712]/90 border border-[#D4AF37]/60 flex items-center justify-center text-[#FFE89E] hover:border-[#D4AF37] hover:scale-105 transition-all shadow cursor-pointer"
          >
            {isAudioPlaying ? (
              <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#D4AF37]/60" />
            )}
          </button>

          <a
            href="#rsvp"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#2A050D] font-cinzel font-bold text-[11px] tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2A050D]" />
            <span>RSVP Now</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-[#3B0712] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFE89E]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#24040B] border-b border-[#D4AF37]/40 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-cinzel text-sm uppercase tracking-widest text-[#FAF5EB]/90 hover:text-[#FFE89E] py-2 border-b border-[#D4AF37]/15"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rsvp"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#2A050D] font-cinzel font-bold text-xs tracking-widest uppercase"
          >
            RSVP Now
          </a>
        </div>
      )}
    </nav>
  );
}
