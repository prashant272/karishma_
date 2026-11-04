import React from 'react';
import { GaneshIcon, GoldenDivider } from './Ornaments';

export default function Footer({ weddingData }) {
  return (
    <footer className="relative py-8 px-4 bg-[#20040A] text-[#FAF5EB] border-t border-[#D4AF37]/30 text-center overflow-hidden w-full">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Sacred blessing */}
        <div className="flex justify-center mb-3">
          <GaneshIcon className="w-10 h-10 text-[#D4AF37]" />
        </div>
        
        <p className="font-cinzel text-xs tracking-[0.3em] text-[#FFE89E] uppercase mb-3 font-semibold">
          Shubh Vivah &bull; Royal Wedding
        </p>

        {/* Monogram */}
        <h3 className="font-cinzel-decorative font-bold text-3xl md:text-4xl text-[#FFE89E] mb-2">
          {weddingData.groom.name} & {weddingData.bride.name}
        </h3>

        <p className="font-serif-royal italic text-sm text-[#FAF5EB]/80 max-w-md mx-auto mb-6">
          "Two families, two hearts, joined together in friendship, united forever in love."
        </p>

        <GoldenDivider className="my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-cinzel text-[#FAF5EB]/70 tracking-wider">
          <span>#RajaWedsKarishma</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>{weddingData.weddingDetails.dateText}</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>{weddingData.weddingDetails.venueName}</span>
        </div>

        <p className="mt-8 text-[11px] text-[#FAF5EB]/50 font-serif-royal">
          With Love from Jyothula & Jha Families &bull; Royal Wedding Invitation
        </p>
      </div>
    </footer>
  );
}
