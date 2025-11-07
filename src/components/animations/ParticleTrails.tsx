import React from 'react';
import { motion } from 'motion/react';

export function ParticleTrails() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 20
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [-15, 15, -15],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay
          }}
        >
          <div className="relative">
            <div 
              className="rounded-full bg-cyan-400 blur-sm"
              style={{
                width: particle.size,
                height: particle.size,
                opacity: 0.4
              }}
            />
            {/* Trail effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-transparent"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle.delay
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
