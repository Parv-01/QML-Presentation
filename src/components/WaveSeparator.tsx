import React from 'react';

interface WaveSeparatorProps {
  className?: string;
  vertical?: boolean;
}

export function WaveSeparator({ className = '', vertical = false }: WaveSeparatorProps) {
  if (vertical) {
    return (
      <svg className={`w-1 ${className}`} viewBox="0 0 2 100" preserveAspectRatio="none">
        <path
          d="M1,0 Q1.5,25 1,50 T1,100"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg className={`w-full h-0.5 ${className}`} viewBox="0 0 100 2" preserveAspectRatio="none">
      <path
        d="M0,1 Q25,0.5 50,1 T100,1"
        fill="none"
        stroke="url(#waveGradientH)"
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient id="waveGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
