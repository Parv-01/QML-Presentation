import React, { useState } from 'react';
import { motion } from 'motion/react';

import { FloatingOrb } from '../animations/FloatingOrb';

// Import your images — ensure these files exist under src/img/
import s101Image from '../../img/s101.jpg';
import s102Image from '../../img/s102.jpg';
import s103Image from '../../img/sl103.png';

export function Slide10() {
  const [quoteExpanded, setQuoteExpanded] = useState(false);

  const logos = [
    { name: 'Qiskit', subtitle: 'IBM Quantum', image: s101Image },
    { name: 'PennyLane', subtitle: 'Xanadu', image: s102Image },
    { name: 'Cirq', subtitle: 'Google Quantum AI', image: s103Image },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden p-20">
      {/* Floating background visuals */}
      <FloatingOrb
        size={200}
        color="from-cyan-200 to-blue-200"
        className="top-20 left-20 opacity-20"
        delay={0}
      />
      <FloatingOrb
        size={180}
        color="from-indigo-200 to-purple-200"
        className="bottom-40 right-40 opacity-20"
        delay={3}
      />

      {/* Subtle dotted background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #0891b2 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center pb-12">
        {/* Title */}
        <motion.h2
          className="text-6xl mb-8 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Final Thoughts: Stay Curious
        </motion.h2>

        {/* Quote section */}
        <div className="max-w-5xl text-center mb-16 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '50%' }}
          />

          <motion.p
            className="text-3xl text-indigo-900 leading-relaxed relative z-10"
            animate={{
              opacity: quoteExpanded ? [1, 0.9, 1] : 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            "Quantum computing isn't about knowing everything — it's about embracing the unknown, mathematically."
          </motion.p>

          {quoteExpanded && (
            <motion.div
              className="absolute inset-0 bg-radial-gradient from-cyan-300/20 to-transparent rounded-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          )}
        </div>

        {/* Subtext */}
        <motion.p
          className="text-2xl text-cyan-700 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore. Learn. Imagine.
        </motion.p>

        {/* Framework logos */}
        <div className="flex gap-12 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1 + index * 0.3,
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-200/50 to-cyan-200/50 border border-indigo-300/50 flex items-center justify-center mb-3 cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(165, 180, 252, 0.3)',
                  borderColor: 'rgba(99, 102, 241, 0.6)',
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={logo.image}
                  alt={`${logo.name} Logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </motion.div>
              <div className="text-center">
                <p className="text-xl text-indigo-700 mb-1">{logo.name}</p>
                <p className="text-xs text-cyan-600">{logo.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated background glow effects */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-300/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>
    </div>
  );
}
