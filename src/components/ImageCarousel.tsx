import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  titles?: string[];
}

const ImageCarousel = ({ images, titles = [] }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg h-[500px] bg-gray-100">
        {images.map((src, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-in-out transform",
              index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            )}
          >
            <img 
              src={src} 
              alt={`Project image ${index + 1}`} 
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
            {titles[index] && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg font-medium">{titles[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-hive-gold scale-110" : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
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
              src={images[currentIndex]} 
              alt={titles[currentIndex] || `Project image ${currentIndex + 1}`} 
              className="object-contain transition-transform duration-300"
              style={{ transform: `scale(${scale})` }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
