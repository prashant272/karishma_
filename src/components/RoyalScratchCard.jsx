import React, { useRef, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

/**
 * Royal Scratch Card Component:
 * - Canvas overlay covering the invitation card with a luxurious gold leaf / royal wax texture.
 * - Allows scratching with mouse or finger (touch on mobile).
 * - When scratched > 45%, clears automatically with a celebratory confetti burst and reveals the formal invitation!
 */
export default function RoyalScratchCard({ onScratched, children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isScratching, setIsScratching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isCompleted) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Draw luxury golden royal parchment texture
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#D4AF37');
    grad.addColorStop(0.3, '#F3E5AB');
    grad.addColorStop(0.6, '#AA7C11');
    grad.addColorStop(1, '#8B1E3F');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Decorative inner border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.strokeRect(12, 12, width - 24, height - 24);

    // Pattern dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let x = 20; x < width - 20; x += 30) {
      for (let y = 20; y < height - 20; y += 30) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Calligraphic instruction text on canvas
    ctx.fillStyle = '#2A050D';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = 'bold 13px Cinzel, serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('✨ SCRATCH HERE TO REVEAL ✨', width / 2, height / 2 - 20);

    ctx.font = 'italic 15px "Playfair Display", serif';
    ctx.fillText('Touch & scratch to unfold the royal invitation', width / 2, height / 2 + 15);

    let totalPixels = 0;
    let scratchedPixels = 0;

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const scratch = (pos) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 32, 0, Math.PI * 2);
      ctx.fill();
    };

    const checkProgress = () => {
      try {
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        let transparent = 0;
        const total = data.length / 4;

        // Sample every 16th pixel for high performance
        for (let i = 3; i < data.length; i += 64) {
          if (data[i] === 0) transparent++;
        }

        const percentage = transparent / (total / 16);
        if (percentage > 0.42 && !isCompleted) {
          setIsCompleted(true);
          if (onScratched) onScratched();

          try {
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.65 },
              colors: ['#D4AF37', '#FFE89E', '#8B1E3F', '#FFFFFF'],
            });
          } catch (err) {}
        }
      } catch (e) {}
    };

    const handleMouseDown = (e) => {
      setIsScratching(true);
      scratch(getPos(e));
    };

    const handleMouseMove = (e) => {
      if (!isScratching) return;
      scratch(getPos(e));
    };

    const handleMouseUp = () => {
      setIsScratching(false);
      checkProgress();
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('touchstart', handleMouseDown, { passive: true });
    canvas.addEventListener('touchmove', handleMouseMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleMouseDown);
      canvas.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isScratching, isCompleted, onScratched]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Underlying revealed content */}
      <div className="w-full">{children}</div>

      {/* Golden Scratch Overlay Canvas */}
      {!isCompleted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-20 rounded-3xl transition-opacity duration-700"
          style={{ touchAction: 'none' }}
        />
      )}
    </div>
  );
}

