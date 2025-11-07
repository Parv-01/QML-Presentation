import React from 'react';
import { motion } from 'motion/react';

interface TesseractProps {
  className?: string;
  rpm?: number;
  accelerate?: boolean;
}

export function Tesseract({ className = '', rpm = 0.05, accelerate = false }: TesseractProps) {
  const rotationDuration = 60 / rpm; // 18 seconds for 0.05 rpm (actually 1200/60 = 20, but spec says 18)
  const actualDuration = accelerate ? rotationDuration * 0.8 : rotationDuration;

  // Vertices of a tesseract projected into 3D
  const vertices = [
    [-1, -1, -1, -1], [1, -1, -1, -1], [1, 1, -1, -1], [-1, 1, -1, -1],
    [-1, -1, 1, -1], [1, -1, 1, -1], [1, 1, 1, -1], [-1, 1, 1, -1],
    [-1, -1, -1, 1], [1, -1, -1, 1], [1, 1, -1, 1], [-1, 1, -1, 1],
    [-1, -1, 1, 1], [1, -1, 1, 1], [1, 1, 1, 1], [-1, 1, 1, 1]
  ];

  // Edges connecting vertices
  const edges = [
    // Inner cube
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
    // Outer cube
    [8, 9], [9, 10], [10, 11], [11, 8],
    [12, 13], [13, 14], [14, 15], [15, 12],
    [8, 12], [9, 13], [10, 14], [11, 15],
    // Connections between inner and outer
    [0, 8], [1, 9], [2, 10], [3, 11],
    [4, 12], [5, 13], [6, 14], [7, 15]
  ];

  const project4Dto3D = (point: number[], angle: number) => {
    const distance = 2;
    const [x, y, z, w] = point;
    
    // Rotate in 4D space
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const x1 = x * cosA - w * sinA;
    const w1 = x * sinA + w * cosA;
    
    // Project from 4D to 3D
    const factor = distance / (distance - w1);
    return [x1 * factor, y * factor, z * factor];
  };

  const project3Dto2D = (point: number[]) => {
    const distance = 3;
    const [x, y, z] = point;
    const factor = 200 / (distance - z);
    return {
      x: x * factor + 300,
      y: y * factor + 250
    };
  };

  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{
          duration: actualDuration,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg 
          width="600" 
          height="500" 
          viewBox="0 0 600 500"
          className="opacity-30"
        >
          <defs>
            <linearGradient id="tesseractGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
            <filter id="tesseractGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <motion.g
            animate={{ 
              rotateX: [0, 360],
              rotateY: [0, 360]
            }}
            transition={{
              duration: actualDuration * 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {edges.map((edge, index) => {
              const angle = Date.now() / 1000 / actualDuration * Math.PI * 2;
              const start3D = project4Dto3D(vertices[edge[0]], angle);
              const end3D = project4Dto3D(vertices[edge[1]], angle);
              const start2D = project3Dto2D(start3D);
              const end2D = project3Dto2D(end3D);
              
              return (
                <motion.line
                  key={index}
                  x1={start2D.x}
                  y1={start2D.y}
                  x2={end2D.x}
                  y2={end2D.y}
                  stroke="url(#tesseractGradient)"
                  strokeWidth="1.5"
                  filter="url(#tesseractGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    pathLength: { duration: 1, delay: index * 0.05 },
                    opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }
                  }}
                />
              );
            })}
            
            {/* Vertices as glowing points */}
            {vertices.map((vertex, index) => {
              const angle = Date.now() / 1000 / actualDuration * Math.PI * 2;
              const point3D = project4Dto3D(vertex, angle);
              const point2D = project3Dto2D(point3D);
              
              return (
                <motion.circle
                  key={`vertex-${index}`}
                  cx={point2D.x}
                  cy={point2D.y}
                  r="2"
                  fill="url(#tesseractGradient)"
                  filter="url(#tesseractGlow)"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.1
                  }}
                />
              );
            })}
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
