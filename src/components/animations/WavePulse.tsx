import React from 'react';
import { motion } from 'motion/react';

interface WavePulseProps {
  fromIndex: number;
  toIndex: number;
  visible: boolean;
}

export function WavePulse({ fromIndex, toIndex, visible }: WavePulseProps) {
  if (!visible) return null;

  // Corrected positions for 3 orbs with proper spacing
  // Left orb (0) at ~23%, Center orb (1) at 50%, Right orb (2) at ~77%
  const positions = [23, 50, 77];
  const startX = positions[fromIndex];
  const startY = 50;
  const endX = positions[toIndex];
  const endY = 50;
  const controlX = (startX + endX) / 2;
  const controlY = fromIndex < toIndex ? 35 : 65;

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`waveGradient-${fromIndex}-${toIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
          <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
        <filter id={`waveGlow-${fromIndex}-${toIndex}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background wave line */}
      <path
        d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
        fill="none"
        stroke="rgba(20, 184, 166, 0.4)"
        strokeWidth="0.8"
      />
      
      {/* Traveling light pulse */}
      <motion.circle
        r="1.5"
        fill={`url(#waveGradient-${fromIndex}-${toIndex})`}
        filter={`url(#waveGlow-${fromIndex}-${toIndex})`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: [0.45, 0, 0.55, 1], // easeInOutSine
          repeat: Infinity
        }}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
        />
      </motion.circle>
      
      {/* Secondary pulse for depth */}
      <motion.circle
        r="0.8"
        fill="#ec4899"
        opacity="0.8"
        filter={`url(#waveGlow-${fromIndex}-${toIndex})`}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          begin="0.3s"
          path={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
        />
      </motion.circle>
      
      {/* Tertiary pulse for more depth */}
      <motion.circle
        r="0.5"
        fill="#8b5cf6"
        opacity="0.6"
        filter={`url(#waveGlow-${fromIndex}-${toIndex})`}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          begin="0.6s"
          path={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
        />
      </motion.circle>
    </svg>
  );
}
