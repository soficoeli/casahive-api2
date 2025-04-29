
import React from 'react';

interface HexagonPatternProps {
  className?: string;
}

const HexagonPattern = ({ className = "" }: HexagonPatternProps) => {
  return (
    <div className={`absolute inset-0 opacity-10 pointer-events-none hexagon-bg ${className}`}></div>
  );
};

export default HexagonPattern;
