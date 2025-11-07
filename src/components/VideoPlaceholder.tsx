import React from 'react';

interface VideoPlaceholderProps {
  label: string;
  className?: string;
  videoUrl?: string;
  shape?: 'rectangle' | 'circle';
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export function VideoPlaceholder({ 
  label, 
  className = '', 
  videoUrl, 
  shape = 'rectangle',
  autoPlay = true,
  muted = true,
  loop = true
}: VideoPlaceholderProps) {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl';
  
  return (
    <div className={`relative ${shapeClass} overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-cyan-400/30 ${className}`}>
      {videoUrl ? (
        <video
          src={videoUrl}
          alt={label}
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          style={{ borderRadius: shape === 'circle' ? '50%' : '1rem' }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <p className="text-center text-cyan-300/70 text-sm">{label}</p>
        </div>
      )}
    </div>
  );
}