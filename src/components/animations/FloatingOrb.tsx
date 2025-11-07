import React from 'react';
import { motion } from 'motion/react';

interface FloatingOrbProps {
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
}

export function FloatingOrb({ size = 100, color = 'from-cyan-400 to-blue-500', className = '', delay = 0 }: FloatingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${color} blur-3xl opacity-30 ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [-12, 12, -12],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay
      }}
    />
  );
}
