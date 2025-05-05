import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface HexagonImageProps {
  src: string;
  alt: string;
  className?: string;
  isRectangular?: boolean;
}

const HexagonImage = ({ src, alt, className, isRectangular = false }: HexagonImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const handleClose = () => {
    setIsModalOpen(false);
    setScale(1);
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
  };

  return (
    <>
      <div 
        className={cn(
          "overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer",
          isRectangular 
            ? "rectangular-frame aspect-[1.414/1] rounded-lg" 
            : "hexagon-frame aspect-square",
          className
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Fullscreen Modal with Zoom */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="absolute top-4 right-4 flex space-x-4 z-10">
            <button 
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleZoomIn}
              aria-label="Zoom in"
            >
              +
            </button>
            <button 
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleZoomOut}
              aria-label="Zoom out"
            >
              -
            </button>
            <button 
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleReset}
              aria-label="Reset zoom"
            >
              ↺
            </button>
            <button 
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="overflow-auto w-full h-full flex items-center justify-center">
            <img 
              src={src} 
              alt={alt} 
              className="object-contain transition-transform duration-300"
              style={{ transform: `scale(${scale})` }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HexagonImage;
