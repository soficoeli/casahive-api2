
import React from 'react';
import { cn } from '@/lib/utils';

interface HexagonImageProps {
  src: string;
  alt: string;
  className?: string;
}

const HexagonImage = ({ src, alt, className }: HexagonImageProps) => {
  return (
    <div 
      className={cn(
        "hexagon-frame overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all", 
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
