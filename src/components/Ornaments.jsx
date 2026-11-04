import React from 'react';

// Ganesh / Divine Motif SVG
export const GaneshIcon = ({ className = "w-12 h-12 text-[#D4AF37]" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 8C43 8 38 12 36 17C33 15 28 15 24 18C20 21 18 26 19 31C16 33 14 36 14 40C14 46 18 51 23 53C22 56 22 60 24 64C26 69 31 73 37 75C41 81 48 85 55 85C60 85 64 83 67 80C72 82 78 81 82 77C86 73 87 67 85 62C88 59 89 54 88 50C87 45 83 41 78 39C80 34 79 28 75 23C71 18 64 16 58 17C56 11 51 8 50 8ZM50 14C53 14 56 17 56 21V28H52V21C52 19.9 51.1 19 50 19C48.9 19 48 19.9 48 21V28H44V21C44 17 47 14 50 14ZM42 33H58C62.4 33 66 36.6 66 41C66 45.4 62.4 49 58 49H54V60C54 62.2 52.2 64 50 64C47.8 64 46 62.2 46 60V37C46 34.8 44.2 33 42 33ZM50 70C54 70 57 73 57 77C53 79 48 77 47 74C47.5 71.5 48.7 70 50 70Z" opacity="0.9"/>
    <circle cx="50" cy="25" r="2.5" fill="#FFE89E" />
    <circle cx="43" cy="40" r="1.5" fill="#FFE89E" />
    <circle cx="57" cy="40" r="1.5" fill="#FFE89E" />
  </svg>
);

// Traditional Royal Indian Elephant Motif SVG (as seen in luxury invitation cards)
export const RoyalElephant = ({ className = "w-20 h-20 text-[#D4AF37]", flip = false }) => (
  <svg
    className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}
    viewBox="0 0 120 100"
    fill="currentColor"
  >
    {/* Body & decorative cloth */}
    <path d="M78 28C72 20 62 16 50 16C36 16 24 24 18 36C12 48 10 65 14 82L22 82C24 74 24 66 26 58C30 58 34 58 38 58C40 66 42 74 44 82L52 82C50 70 50 62 52 54C56 54 60 54 64 54C64 63 65 72 67 82L76 82C74 72 74 62 76 52C82 50 88 46 92 40C94 37 96 32 95 28C92 28 88 32 84 34C82 30 80 28 78 28Z" fill="url(#goldElephantGrad)" />
    {/* Trunk raised with lotus/blessing */}
    <path d="M92 40C95 44 98 50 99 56C100 62 97 68 93 72C89 76 82 78 78 76C75 74 76 70 80 70C84 70 88 68 90 64C92 60 90 54 88 48C86 44 85 41 84 38" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Howdah / Saddle throne */}
    <path d="M40 22L62 22C64 22 66 20 66 18L36 18C36 20 38 22 40 22Z" fill="#AA7C11" />
    <path d="M42 22L60 22L64 42L38 42Z" fill="url(#maroonJhool)" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="51" cy="32" r="3.5" fill="#FFE89E" />
    <circle cx="78" cy="34" r="2" fill="#2A050D" />
    {/* Tusks */}
    <path d="M84 46C88 47 92 48 95 47C96 46 95 45 92 44C88 43 85 44 84 46Z" fill="#FAF5EB" />
    <defs>
      <linearGradient id="goldElephantGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5D77F" />
        <stop offset="0.5" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#996515" />
      </linearGradient>
      <linearGradient id="maroonJhool" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#671420" />
        <stop offset="1" stopColor="#3A0811" />
      </linearGradient>
    </defs>
  </svg>
);

// Traditional Golden Mandala Motif
export const MandalaCorner = ({ className = "w-24 h-24 text-[#D4AF37]" }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" stroke="currentColor">
    <path d="M0 0 L120 0 C120 40 100 80 80 100 C60 115 20 120 0 120 Z" fill="url(#goldGradTrans)" opacity="0.12" />
    <path d="M0 0 C40 0 80 20 100 50 C110 65 115 85 120 120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
    <path d="M0 0 C30 0 60 15 75 40 C85 55 90 70 95 100" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1" />
    <circle cx="20" cy="20" r="3" fill="currentColor" />
    <path d="M5 45 C15 35 25 35 35 45" stroke="currentColor" strokeWidth="1"/>
    <path d="M45 5 C35 15 35 25 45 35" stroke="currentColor" strokeWidth="1"/>
    <defs>
      <linearGradient id="goldGradTrans" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37" stopOpacity="0.4"/>
        <stop offset="1" stopColor="#D4AF37" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

// Ornamental Divider
export const GoldenDivider = ({ className = "my-6", text = null }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]/80"></div>
    {text ? (
      <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] text-[#8B1E3F] uppercase px-2 font-semibold">
        {text}
      </span>
    ) : (
      <div className="flex items-center gap-1.5 text-[#D4AF37]">
        <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#FFE89E]/40"></div>
        <div className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37]"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#FFE89E]/40"></div>
      </div>
    )}
    <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]/80"></div>
  </div>
);

// Organic Curved SVG Wave Dividers for Seamless Royal Transitions
export const CurvedTopWave = ({ fill = "#FAF5EB", className = "" }) => (
  <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`}>
    <svg
      className="relative block w-full h-12 md:h-20 lg:h-28"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C150,95 350,120 600,105 C850,90 1050,40 1200,80 L1200,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  </div>
);

export const CurvedBottomWave = ({ fill = "#FAF5EB", className = "" }) => (
  <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`}>
    <svg
      className="relative block w-full h-12 md:h-20 lg:h-28"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 L1200,0 L1200,40 C1050,100 850,120 600,95 C350,70 150,110 0,60 Z"
        fill={fill}
      />
    </svg>
  </div>
);

// Arch / Curved Inverted Header Separator
export const ArchSeparator = ({ bg = "#FAF5EB", className = "" }) => (
  <div className={`w-full overflow-hidden flex justify-center pointer-events-none -mb-1 ${className}`}>
    <svg className="w-full max-w-5xl h-8 md:h-12 text-[#D4AF37]/40" viewBox="0 0 1000 60" fill="none">
      <path d="M0 60 C300 0 700 0 1000 60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M150 60 C350 15 650 15 850 60" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="500" cy="20" r="4" fill="#D4AF37" />
    </svg>
  </div>
);

// Floating Rose Petals / Flower particles component
export const FloatingPetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden w-full max-w-full">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${(i * 8 + 5) % 90}%`,
            animationDelay: `${(i * 1.3) % 8}s`,
            animationDuration: `${12 + (i % 6) * 2}s`,
          }}
        />
      ))}
      <style>{`
        .petal {
          position: absolute;
          top: -30px;
          width: 14px;
          height: 18px;
          background: radial-gradient(circle at 30% 30%, #ff8da1, #c81d39);
          border-radius: 50% 50% 50% 10%;
          opacity: 0.65;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.75;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) rotate(540deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
