import React from 'react';
import { ImageWithFallback } from './animations/ImageWithFallback';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  imageUrl?: string;
  shape?: 'rectangle' | 'circle';
}

export function ImagePlaceholder({ label, className = '', imageUrl, shape = 'rectangle' }: ImagePlaceholderProps) {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl';
  
  return (
    <div className={`relative ${shapeClass} overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-cyan-400/30 ${className}`}>
      {imageUrl ? (
        <ImageWithFallback 
          src={imageUrl} 
          alt={label}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <p className="text-center text-cyan-300/70 text-sm">{label}</p>
        </div>
      )}
    </div>
  );
}
