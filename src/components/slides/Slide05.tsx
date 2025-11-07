import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { ImagePlaceholder } from '../ImagePlaceholder';

import sl5Gif from '../../img/sl5.gif';

interface Concept {
  title: string;
  description: string;
  icon: string;
  extendedInfo: string;
}

export function Slide05() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const concepts: Concept[] = [
    {
      title: 'Superposition',
      description: 'Quantum states exist in multiple configurations simultaneously',
      icon: '⟨ψ⟩',
      extendedInfo: 'A qubit can be in a linear combination of |0⟩ and |1⟩ states, representing all possible values at once. This enables parallel computation across multiple pathways.'
    },
    {
      title: 'Entanglement',
      description: 'Quantum particles remain connected regardless of distance',
      icon: '∞',
      extendedInfo: 'When qubits become entangled, measuring one instantly affects the other, no matter how far apart. This "spooky action at a distance" enables quantum teleportation and secure communication.'
    },
    {
      title: 'Interference',
      description: 'Probability amplitudes combine to enhance or cancel outcomes',
      icon: '∿',
      extendedInfo: 'Quantum algorithms use constructive and destructive interference to amplify correct answers and suppress wrong ones, creating a probabilistic advantage.'
    },
    {
      title: 'Measurement',
      description: 'Observation collapses superposition into definite state',
      icon: '⊕',
      extendedInfo: 'The act of measurement forces a quantum system to choose a definite state from its superposition. This collapse is probabilistic and irreversible.'
    }
  ];

  return (
     <div className="relative w-full h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 overflow-hidden p-20">
       <div className="h-full flex flex-col pb-12">
         <h2 className="text-5xl mb-12 text-center bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
           Quantum Weirdness Toolkit
         </h2>

         <div className="flex-1 flex gap-8">
           <div className="flex-1 grid grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                className="relative"
                layoutId={`card-${index}`}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
                  }}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer h-full"
                 >
                   <GlassCard className="p-8 flex flex-col h-full" children={undefined}>
                     <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-400/30 flex items-center justify-center">
                       <span className="text-4xl text-cyan-300">{concept.icon}</span>
                     </div>

                    <h3 className="text-2xl mb-4 text-cyan-200">{concept.title}</h3>
                     <p className="text-cyan-100/70 flex-1">{concept.description}</p>

                     {index < 3 && (
                      <svg className="absolute top-1/2 left-full w-6 h-0.5 -translate-y-1/2" viewBox="0 0 24 2">
                        <line x1="0" y1="1" x2="24" y2="1" stroke="url(#lineGradient)" strokeWidth="1" />
                        <defs>
                          <linearGradient id="lineGradient">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
           </div>

           <div className="w-96 flex flex-col justify-center">
            <div className="w-full h-96 rounded-full overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-cyan-400/30 flex items-center justify-center">
              <img 
                src={sl5Gif}
                alt="Bloch Sphere Animation"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-center mt-6 text-cyan-200/70">
              The Bloch Sphere visualizes qubit states in 3D space
            </p>
          </div>
        </div>
       </div>

       <AnimatePresence>
        {expandedCard !== null && (
          <>
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedCard(null)}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl w-full mx-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-gradient-to-br from-purple-900/95 to-indigo-900/95 backdrop-blur-2xl border border-cyan-400/50 rounded-3xl p-12 shadow-2xl">
                <div className="w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br from-cyan-500/40 to-purple-500/40 border border-cyan-400/40 flex items-center justify-center">
                  <span className="text-6xl text-cyan-300">{concepts[expandedCard].icon}</span>
                </div>
                <h3 className="text-4xl text-cyan-300 mb-6">{concepts[expandedCard].title}</h3>
                <p className="text-xl text-cyan-100/80 mb-6">{concepts[expandedCard].description}</p>
                <p className="text-cyan-100/70 leading-relaxed">{concepts[expandedCard].extendedInfo}</p>
                <motion.button
                  className="mt-8 px-6 py-3 bg-cyan-500/20 border border-cyan-400/50 rounded-xl text-cyan-300"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.3)' }}
                  onClick={() => setExpandedCard(null)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
       </AnimatePresence>

     </div>
  );
}
