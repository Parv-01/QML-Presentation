import React from 'react';
import { motion } from 'motion/react';

export function OrbitingShapes() {
  const triangles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    radius: 200 + i * 40,
    angle: (i * 60) * (Math.PI / 180),
    duration: 10 + i * 2,
    rotation: Math.random() * 90 - 45,
    size: 20 + Math.random() * 15,
    delay: i * 0.5
  }));

  const circles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    radius: 180 + i * 35,
    angle: (i * 45) * (Math.PI / 180),
    duration: 6 + i * 1.5,
    size: 8 + Math.random() * 10,
    delay: i * 0.3
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Orbiting Triangles */}
      {triangles.map((triangle) => {
        const x = Math.cos(triangle.angle) * triangle.radius;
        const y = Math.sin(triangle.angle) * triangle.radius;
        
        return (
          <motion.div
            key={`triangle-${triangle.id}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [x, -x, x],
              y: [y, -y, y],
              rotate: [triangle.rotation, triangle.rotation + 45, triangle.rotation],
            }}
            transition={{
              duration: triangle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: triangle.delay
            }}
          >
            <svg 
              width={triangle.size} 
              height={triangle.size} 
              viewBox="0 0 100 100"
              className="opacity-15"
            >
              <defs>
                <linearGradient id={`triangleGradient-${triangle.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
                <filter id={`triangleGlow-${triangle.id}`}>
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <motion.polygon
                points="50,10 90,90 10,90"
                fill="none"
                stroke={`url(#triangleGradient-${triangle.id})`}
                strokeWidth="2"
                filter={`url(#triangleGlow-${triangle.id})`}
                animate={{
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: triangle.delay
                }}
              />
            </svg>
          </motion.div>
        );
      })}

      {/* Orbiting Circles */}
      {circles.map((circle) => {
        const x = Math.cos(circle.angle) * circle.radius;
        const y = Math.sin(circle.angle) * circle.radius;
        
        return (
          <motion.div
            key={`circle-${circle.id}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [x, -x, x],
              y: [y + 12, y - 12, y + 12],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: circle.delay
            }}
          >
            <motion.div
              className="rounded-full border-2"
              style={{
                width: circle.size,
                height: circle.size,
                borderColor: '#14b8a6',
                boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: circle.delay
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
