import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GoldenDivider } from './Ornaments';

export default function GallerySection({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(gallery[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % gallery.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(gallery[nextIdx]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(gallery[prevIdx]);
  };

  return (
    <section id="gallery" className="relative py-24 px-4 bg-[#120307] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-script text-3xl md:text-4xl text-[#F3E5AB] mb-1">
            Glimpses of Grandeur
          </p>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold gold-text-gradient tracking-wide uppercase">
            Photo Gallery
          </h2>
          <GoldenDivider className="mt-4" />
          <p className="max-w-xl mx-auto font-serif-royal italic text-sm md:text-base text-[#FAF5EB]/80 mt-2">
            Cherished candid moments, royal portraits, and radiant memories frozen in time.
          </p>
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">
          {gallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-xl ${
                img.span || 'col-span-1'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#180307]/90 via-[#180307]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-cinzel text-[11px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                  {img.category}
                </span>
                <h4 className="font-cinzel text-lg md:text-xl font-bold text-white mt-1">
                  {img.title}
                </h4>
                <p className="font-serif-royal italic text-xs md:text-sm text-[#FAF5EB]/80">
                  {img.caption}
                </p>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#180307]/80 border border-[#D4AF37] flex items-center justify-center text-[#FFE89E] shadow">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-[#2A050D] border border-[#D4AF37] text-[#FFE89E] flex items-center justify-center hover:bg-[#671420] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#2A050D]/80 border border-[#D4AF37] text-[#FFE89E] flex items-center justify-center hover:bg-[#4A0E17] transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#2A050D]/80 border border-[#D4AF37] text-[#FFE89E] flex items-center justify-center hover:bg-[#4A0E17] transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#180307] shadow-2xl flex flex-col"
            >
              <div className="flex-1 overflow-hidden max-h-[70vh]">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>

              <div className="p-4 md:p-6 bg-[#25050C] border-t border-[#D4AF37]/30 text-center">
                <span className="font-cinzel text-xs tracking-widest text-[#D4AF37] uppercase">
                  {selectedImage.category}
                </span>
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#FFE89E] mt-1">
                  {selectedImage.title}
                </h3>
                <p className="font-serif-royal italic text-sm text-[#FAF5EB]/80 mt-1">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

