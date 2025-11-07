import React from 'react';
import { motion } from 'motion/react';

interface HexagonalGridProps {
  className?: string;
  rpm?: number;
}

export function HexagonalGrid({ className = '', rpm = 0.05 }: HexagonalGridProps) {
  const rotationDuration = 60 / rpm; // 20 minutes for 0.05 rpm

  // Generate hexagonal grid pattern
  const hexagons = [];
  const rows = 6;
  const cols = 8;
  const hexSize = 60;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexSize * 1.5;
      const y = row * hexSize * Math.sqrt(3) + (col % 2) * (hexSize * Math.sqrt(3) / 2);
      hexagons.push({ x, y, id: `hex-${row}-${col}` });
    }
  }

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: rotationDuration,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{ opacity: 0.1 }}
    >
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
          <pattern id="hexPattern" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
            <path
              d="M30,0 L60,17.32 L60,51.96 L30,69.28 L0,51.96 L0,17.32 Z"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>
    </motion.div>
  );
}
