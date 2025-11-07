import React from 'react';
import { motion } from 'motion/react';

interface RotatingRingProps {
  size?: number;
  className?: string;
  rpm?: number;
}

export function RotatingRing({ size = 600, className = '', rpm = 0.08 }: RotatingRingProps) {
  const rotationDuration = 60 / rpm; // Convert RPM to seconds per rotation

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: rotationDuration,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="0.3"
          opacity="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="0.3"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}
