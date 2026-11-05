import React from 'react';
import { GaneshIcon, GoldenDivider } from './Ornaments';

export default function Footer({ weddingData }) {
  return (
    <footer className="relative py-8 px-4 bg-[#20040A] text-[#FAF5EB] border-t border-[#D4AF37]/30 text-center overflow-hidden w-full">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Sacred blessing */}
        <div className="flex justify-center mb-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img
              src="/ganesh_perfect_gold.png"
              alt="Lord Ganesha"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]"
            />
          </div>
        </div>
        
        <p className="font-cinzel text-xs tracking-[0.3em] text-[#FFE89E] uppercase mb-3 font-semibold">
          Shubh Vivah &bull; Royal Wedding
        </p>

        {/* Monogram */}
        <h3 className="font-cinzel-decorative font-bold text-3xl md:text-4xl text-[#FFE89E] mb-2">
          {weddingData.bride.name} & {weddingData.groom.name}
        </h3>

        <p className="font-serif-royal italic text-sm text-[#FAF5EB]/80 max-w-md mx-auto mb-6">
          "Two families, two hearts, joined together in friendship, united forever in love."
        </p>

        <GoldenDivider className="my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-serif-royal text-[#FAF5EB]/80 tracking-wider">
          <span className="font-bold text-[#FFE89E] tracking-widest text-sm">#KaRa</span>
          <span className="hidden sm:inline text-[#D4AF37]">&bull;</span>
          <span className="font-cinzel">{weddingData.weddingDetails.dateText}</span>
          <span className="hidden sm:inline text-[#D4AF37]">&bull;</span>
          <span className="font-cinzel">{weddingData.weddingDetails.venueName}</span>
        </div>

        {/* Royal Families Signature Badge */}
        <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2A050D] via-[#4A0E17] to-[#2A050D] border border-[#D4AF37]/45 shadow-[0_6px_20px_rgba(0,0,0,0.4)]">
            <span className="text-[#D4AF37] text-xs">❦</span>
            <span className="font-serif-royal italic text-xs sm:text-sm text-[#FFE89E] tracking-wider font-medium">
              With Love from <span className="font-semibold text-white">Jha</span> &amp; <span className="font-semibold text-white">Jyothula</span> Families
            </span>
            <span className="text-[#D4AF37] text-xs">❦</span>
          </div>

          <p className="mt-2.5 font-cinzel text-[10px] tracking-[0.3em] text-[#FAF5EB]/50 uppercase font-semibold">
            Wedding Invitation
          </p>
        </div>
      </div>
    </footer>
  );
}
