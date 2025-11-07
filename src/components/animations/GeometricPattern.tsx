import React from 'react';
import { motion } from 'motion/react';

interface GeometricPatternProps {
  shape?: 'hexagon' | 'triangle' | 'square';
  className?: string;
  rpm?: number;
}

export function GeometricPattern({ shape = 'hexagon', className = '', rpm = 0.1 }: GeometricPatternProps) {
  const rotationDuration = 60 / rpm;

  const shapes = {
    hexagon: 'M50,5 L90,30 L90,70 L50,95 L10,70 L10,30 Z',
    triangle: 'M50,10 L90,80 L10,80 Z',
    square: 'M20,20 L80,20 L80,80 L20,80 Z'
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: rotationDuration,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d={shapes[shape]}
          fill="none"
          stroke="url(#shapeGradient)"
          strokeWidth="0.5"
        />
      </svg>
    </motion.div>
  );
}
