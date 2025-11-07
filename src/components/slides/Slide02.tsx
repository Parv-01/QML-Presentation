import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { ImagePlaceholder } from '../ImagePlaceholder';

import { FloatingOrb } from '../animations/FloatingOrb';
import sl21Image from '../../img/sl21.jpg';
import sl22Image from '../../img/sl22.jpg';

export function Slide02() {
  const [hoveredSide, setHoveredSide] = React.useState<'classical' | 'quantum' | null>(null);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden p-20">

      <FloatingOrb size={120} color="from-blue-400 to-cyan-500" className="top-20 left-40" delay={0} />
      <FloatingOrb size={140} color="from-pink-400 to-purple-500" className="bottom-40 right-40" delay={3} />

      <div className="h-full flex flex-col pb-12">
        <h2 className="text-5xl mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          The Great Divide: Classical vs Quantum
        </h2>

        <div className="flex-1 flex items-center gap-8">

          <motion.div
            className="flex-1 h-full flex flex-col gap-6"
            onHoverStart={() => setHoveredSide('classical')}
            onHoverEnd={() => setHoveredSide(null)}
            animate={{
              opacity: hoveredSide === 'quantum' ? 0.5 : 1
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="flex-1 p-8 border-blue-400/30" children={undefined}>
                <h3 className="text-3xl mb-4 text-blue-300">Classical Computing</h3>
                <p className="text-blue-100/80 mb-6">
                  Deterministic processing using bits (0 or 1). Sequential computation following Boolean logic.
                </p>
                <div className="w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-cyan-400/30">
                <img 
                  src={sl21Image}
                  alt="Classical Computer"
                  className="w-full h-full object-cover"
                />
              </div>
                <div className="mt-6 p-4 bg-blue-500/20 rounded-xl border border-blue-400/20">
                  <p className="text-sm text-blue-200">
                    <span className="text-blue-300">Bit:</span> A definite state - either 0 or 1
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          <div className="relative flex items-center justify-center w-1">
            <motion.div
              className="h-full w-1"
              animate={{
                x: [-8, 8, -8]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <svg className="w-1 h-full" viewBox="0 0 2 100" preserveAspectRatio="none">
                <path
                  d="M1,0 Q1.5,25 1,50 T1,100"
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent blur-sm"></div>
          </div>

          <motion.div
            className="flex-1 h-full flex flex-col gap-6"
            onHoverStart={() => setHoveredSide('quantum')}
            onHoverEnd={() => setHoveredSide(null)}
            animate={{
              opacity: hoveredSide === 'classical' ? 0.5 : 1
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(236, 72, 153, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="flex-1 p-8 border-pink-400/30" children={undefined}>
                <h3 className="text-3xl mb-4 text-pink-300">Quantum Computing</h3>
                <p className="text-pink-100/80 mb-6">
                  Probabilistic processing using qubits. Parallel computation through superposition and entanglement.
                </p>
                <div className="w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-cyan-400/30 flex items-center justify-center">
                <img 
                  src={sl22Image}
                  alt="Quantum Chip"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
                <div className="mt-6 p-4 bg-pink-500/20 rounded-xl border border-pink-400/20">
                  <p className="text-sm text-pink-200">
                    <span className="text-pink-300">Qubit:</span> Superposition - 0 and 1 simultaneously
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
       </div>
    </div>
  );
}
