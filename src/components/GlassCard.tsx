import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'light' | 'medium' | 'heavy';
}

export function GlassCard({ children, className = '', blur = 'medium' }: GlassCardProps) {
  const blurClasses = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    heavy: 'backdrop-blur-xl'
  };

  return (
    <div className={`bg-white/10 ${blurClasses[blur]} border border-white/20 rounded-3xl ${className}`}>
      {children}
    </div>
  );
}
