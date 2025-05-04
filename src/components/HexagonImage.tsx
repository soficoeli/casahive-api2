
import React from 'react';
import { cn } from '@/lib/utils';

interface HexagonImageProps {
  src: string;
  alt: string;
  className?: string;
  isRectangular?: boolean;
}

const HexagonImage = ({ src, alt, className, isRectangular = false }: HexagonImageProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden shadow-md hover:shadow-lg transition-all",
        isRectangular 
          ? "rectangular-frame aspect-[1.414/1] rounded-lg" 
          : "hexagon-frame aspect-square",
        className
      )}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default HexagonImage;
