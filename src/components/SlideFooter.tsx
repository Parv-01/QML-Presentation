import React from 'react';

interface SlideFooterProps {
  title?: string;
}

export function SlideFooter({ title = "The Quantum Entangled Path of the Future through QML" }: SlideFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border-t border-white/10 flex items-center px-20">
      <p className="text-xs text-cyan-300/60">{title}</p>
    </div>
  );
}
