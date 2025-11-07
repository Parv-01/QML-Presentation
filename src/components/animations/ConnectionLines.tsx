import React from 'react';
import { motion } from 'motion/react';

interface ConnectionLinesProps {
  visible: boolean;
  fromIndex: number;
  totalNodes: number;
}

export function ConnectionLines({ visible, fromIndex, totalNodes }: ConnectionLinesProps) {
  if (!visible) return null;

  const lines = [];
  for (let i = 0; i < totalNodes; i++) {
    if (i !== fromIndex) {
      lines.push({ to: i, id: `line-${fromIndex}-${i}` });
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`connectionGradient-${fromIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {lines.map((line, idx) => {
          const startX = 33.33 * fromIndex + 16.66;
          const startY = 50;
          const endX = 33.33 * line.to + 16.66;
          const endY = 50;
          const controlX = (startX + endX) / 2;
          const controlY = fromIndex < line.to ? 30 : 70;

          return (
            <motion.path
              key={line.id}
              d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
              fill="none"
              stroke={`url(#connectionGradient-${fromIndex})`}
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0.5, 1, 0.5]
              }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{
                pathLength: { duration: 0.6, ease: 'easeOut', delay: idx * 0.1 },
                opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
