import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImagePlaceholder } from '../ImagePlaceholder';

import { Tesseract } from '../animations/Tesseract';
import { OrbitingShapes } from '../animations/OrbitingShapes';
import { Starfield } from '../animations/Starfield';
import { WavePulse } from '../animations/WavePulse';

interface Application {
  title: string;
  description: string;
  color: string;
  glowColor: string;
  details: string;
}

export function Slide07() {
  const [expandedOrb, setExpandedOrb] = useState<number | null>(null);
  const [hoveredOrb, setHoveredOrb] = useState<number | null>(null);

  const applications: Application[] = [
    {
      title: 'Finance',
      description: 'Portfolio optimization, risk analysis, and fraud detection using quantum advantage',
      color: 'from-green-400 to-teal-400',
      glowColor: 'rgba(20, 184, 166, 0.6)',
      details:
        'Quantum algorithms can optimize complex portfolios with thousands of assets, calculate risk scenarios exponentially faster, and detect fraud patterns in real-time using quantum pattern recognition.',
    },
    {
      title: 'AI',
      description: 'Enhanced pattern recognition, generative models, and quantum-accelerated training',
      color: 'from-purple-400 to-pink-400',
      glowColor: 'rgba(168, 85, 247, 0.6)',
      details:
        'QML enables training neural networks on quantum processors, creating generative models that explore exponentially larger creative spaces, and accelerating optimization in deep learning.',
    },
    {
      title: 'Neuroscience',
      description: 'Brain simulation, protein folding, and molecular dynamics at quantum scale',
      color: 'from-cyan-400 to-blue-400',
      glowColor: 'rgba(6, 182, 212, 0.6)',
      details:
        'Quantum computers can simulate neural networks at the molecular level, predict protein structures for drug discovery, and model brain chemistry with unprecedented accuracy.',
    },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-950 via-violet-950 to-slate-900 overflow-hidden p-20">
      <Starfield />

      <div className="absolute inset-0 z-0">
        <Tesseract rpm={0.05} accelerate={hoveredOrb !== null} className="opacity-40" />
      </div>

      <div className="absolute inset-0 z-0">
        <OrbitingShapes />
      </div>

      {/* Floating glowing backgrounds */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-3xl z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-3xl z-0"
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* WavePulse connections */}
      <div className="absolute inset-0 z-5 flex items-center justify-center">
        <div className="relative w-full max-w-7xl h-full">
          {hoveredOrb !== null &&
            applications.map((_, index) => {
              if (index !== hoveredOrb) {
                return (
                  <React.Fragment key={`wave-${hoveredOrb}-${index}`}>
                    <WavePulse fromIndex={hoveredOrb} toIndex={index} visible={true} />
                  </React.Fragment>
                );
              }
              return null;
            })}
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col pb-12">
        <motion.h2
          className="text-5xl mb-16 text-center bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          QML in Finance, AI, and Neuroscience
        </motion.h2>

        <div className="flex-1 flex items-center justify-evenly gap-12 relative max-w-7xl mx-auto w-full">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-80 relative z-10"
              onHoverStart={() => setHoveredOrb(index)}
              onHoverEnd={() => setHoveredOrb(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <motion.div
                className={`relative w-64 h-64 rounded-full bg-gradient-to-br ${app.color} opacity-20 mb-8 flex items-center justify-center backdrop-blur-xl cursor-pointer`}
                onClick={() => setExpandedOrb(expandedOrb === index ? null : index)}
                animate={{
                  scale: hoveredOrb === index ? 1.06 : 1,
                  opacity: hoveredOrb === index ? 0.35 : 0.2,
                }}
                whileHover={{ boxShadow: `0 0 60px ${app.glowColor}` }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                style={{
                  border: `2px solid ${
                    hoveredOrb === index ? app.glowColor : 'rgba(255, 255, 255, 0.3)'
                  }`,
                }}
              >
                <div className="absolute inset-4 rounded-full bg-slate-950/90 backdrop-blur-lg flex items-center justify-center">
                  <div className="relative">
                    <h3
                      className={`text-5xl bg-gradient-to-br ${app.color} bg-clip-text text-transparent absolute top-0 left-0 blur-sm opacity-90`}
                    >
                      {app.title}
                    </h3>
                    <h3
                      className={`text-5xl font-bold bg-gradient-to-br ${app.color} bg-clip-text text-transparent relative z-10`}
                      style={{
                        filter:
                          'drop-shadow(0 0 20px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 40px rgba(6, 182, 212, 0.8)) brightness(1.2)',
                        textShadow: '0 0 30px currentColor',
                      }}
                    >
                      {app.title}
                    </h3>
                  </div>
                </div>

                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${app.color}`}
                  animate={{
                    scale: hoveredOrb === index ? [1, 1.2, 1] : [1, 1.1, 1],
                    opacity: hoveredOrb === index ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: hoveredOrb === index ? 2 : 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 1,
                  }}
                  style={{ filter: 'blur(40px)' }}
                />

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white z-10"
                  animate={{
                    opacity: hoveredOrb !== null ? [0.6, 1, 0.6] : 0.4,
                    scale: hoveredOrb === index ? [1, 1.5, 1] : 1,
                    boxShadow:
                      hoveredOrb === index
                        ? [
                            `0 0 10px ${app.glowColor}`,
                            `0 0 30px ${app.glowColor}`,
                            `0 0 10px ${app.glowColor}`,
                          ]
                        : `0 0 5px rgba(255, 255, 255, 0.5)`,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                {hoveredOrb === index && (
                  <>
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${app.color}`}
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 1.6, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <motion.div
                      className={`absolute inset-0 rounded-full border-4`}
                      style={{ borderColor: app.glowColor }}
                      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                    />
                  </>
                )}
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center mb-6"
                animate={{
                  borderColor:
                    hoveredOrb === index ? app.glowColor : 'rgba(255, 255, 255, 0.2)',
                  backgroundColor:
                    hoveredOrb === index
                      ? 'rgba(255, 255, 255, 0.15)'
                      : 'rgba(255, 255, 255, 0.1)',
                  boxShadow:
                    hoveredOrb === index ? `0 0 30px ${app.glowColor}` : '0 0 0px transparent',
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-white/80 leading-relaxed">{app.description}</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <ImagePlaceholder
                  label={`Insert ${app.title} Application Image`}
                  className="w-full h-32"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedOrb !== null && (
          <>
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedOrb(null)}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl w-full mx-4"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            >
              <div
                className="bg-gradient-to-br from-slate-900/95 to-indigo-900/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl relative overflow-hidden"
                style={{
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: applications[expandedOrb].glowColor,
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-20 blur-3xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${applications[expandedOrb].glowColor}, transparent 70%)`,
                  }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative z-10">
                  <h3 className="text-4xl text-cyan-300 mb-6">
                    {applications[expandedOrb].title}
                  </h3>
                  <p className="text-cyan-100/70 leading-relaxed mb-6">
                    {applications[expandedOrb].details}
                  </p>
                  <motion.button
                    className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/50 rounded-xl text-cyan-300"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.3)' }}
                    onClick={() => setExpandedOrb(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
