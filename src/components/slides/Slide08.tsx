import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { ImagePlaceholder } from '../ImagePlaceholder';

import { MovingGrid } from '../animations/MovingGrid';
import { RotatingRing } from '../animations/RotatingRing';
import sl8Image from '../../img/sl8.png';
interface Limitation {
  title: string;
  description: string;
  icon: string;
  backContent: string;
}

export function Slide08() {
  const [flippedPanel, setFlippedPanel] = useState<number | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const limitations: Limitation[] = [
    {
      title: 'Noise',
      description: 'Environmental interference degrades quantum states rapidly',
      icon: '≈',
      backContent: 'Quantum systems are incredibly sensitive to thermal fluctuations, electromagnetic interference, and cosmic rays. Even minor disturbances cause decoherence, destroying quantum information within microseconds.'
    },
    {
      title: 'Error Correction',
      description: 'Requires massive overhead — thousands of physical qubits per logical qubit',
      icon: '⚠',
      backContent: 'Current quantum error correction codes need ~1000 physical qubits to create one reliable logical qubit. This massive overhead makes large-scale quantum computation extremely challenging.'
    },
    {
      title: 'Hardware Complexity',
      description: 'Extreme cooling requirements (near absolute zero) and isolation',
      icon: '❄',
      backContent: 'Quantum processors must operate at temperatures colder than outer space (~15 millikelvin). This requires complex dilution refrigerators and electromagnetic shielding, making systems house-sized.'
    },
    {
      title: 'Cost & Scalability',
      description: 'Billion-dollar infrastructure with limited qubit counts today',
      icon: '💰',
      backContent: 'Building and maintaining quantum computers costs hundreds of millions. Current systems have only hundreds of qubits, while useful applications may require millions. Scaling remains the grand challenge.'
    }
  ];

  const handleFlip = (index: number) => {
    setIsFlipping(true);
    setFlippedPanel(flippedPanel === index ? null : index);
    setTimeout(() => setIsFlipping(false), 600);
  };

  return (
     <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-900 overflow-hidden p-20">
       <MovingGrid />

       <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-cyan-400/5"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-purple-400/5"
        animate={{ rotate: -360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear'
        }}
       />

       <AnimatePresence>
        {isFlipping && (
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

       <div className="relative z-10 h-full flex flex-col pb-12">
         <motion.h2
          className="text-4xl mb-4 text-center bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Limitations: The Fragile Beauty of Quantum Computing
        </motion.h2>
        <p className="text-center text-blue-200/60 text-xl mb-12">Not All That Glitters Is Quantum Gold</p>

         <div className="flex-1 flex gap-8">
           <div className="flex-1 grid grid-cols-2 gap-6">
            {limitations.map((limit, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  ease: 'easeOut'
                }}
              >
                <div 
                  className="relative w-full h-full cursor-pointer"
                  style={{ perspective: '1000px' }}
                  onClick={() => handleFlip(index)}
                   >
                     <motion.div
                    className="relative w-full h-full"
                    animate={{
                      rotateY: flippedPanel === index ? 180 : 0
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.25, 0.46, 0.45, 0.94] // ease-in-out-expo
                     }}
                     style={{ 
                       transformStyle: 'preserve-3d',
                     }}
                   >
                     <div
                      className="absolute inset-0 w-full h-full"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <motion.div
                        className="w-full h-full"
                        animate={{
                          opacity: flippedPanel === index ? 0 : 1
                        }}
                        transition={{ duration: 0.3, delay: flippedPanel === index ? 0 : 0.3 }}
                       >
                         <GlassCard className="p-8 bg-blue-900/10 border-blue-400/20 h-full relative overflow-hidden" children={undefined}>
                           <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-blue-400/50 blur-sm" />
                          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-400/50 blur-sm" />
                          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-blue-400/50 blur-sm" />
                          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-400/50 blur-sm" />

                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-2xl">{limit.icon}</span>
                            </div>
                            <h3 className="text-xl text-blue-200 mt-2">{limit.title}</h3>
                          </div>
                          <p className="text-sm text-blue-100/70 leading-relaxed">{limit.description}</p>
                          <p className="text-xs text-blue-300/50 mt-4 italic">Click to learn more</p>
                        </GlassCard>
                      </motion.div>
                     </div>

                     <div
                      className="absolute inset-0 w-full h-full"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <motion.div
                        className="w-full h-full"
                        animate={{
                          opacity: flippedPanel === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: flippedPanel === index ? 0.3 : 0 }}
                       >
                         <GlassCard className="p-8 bg-blue-800/20 border-cyan-400/40 h-full relative overflow-hidden" children={undefined}>
                           <motion.div
                            className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-cyan-400/70 blur-sm"
                            animate={{
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut'
                            }}
                          />
                          <motion.div
                            className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400/70 blur-sm"
                            animate={{
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: 0.5
                            }}
                          />
                          <motion.div
                            className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-cyan-400/70 blur-sm"
                            animate={{
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: 1
                            }}
                          />
                          <motion.div
                            className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400/70 blur-sm"
                            animate={{
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: 1.5
                            }}
                           />

                           <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-cyan-400/0"
                            animate={{
                              borderColor: ['rgba(6, 182, 212, 0)', 'rgba(6, 182, 212, 0.5)', 'rgba(6, 182, 212, 0)']
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [0.22, 1, 0.36, 1] // ease-out-sine
                            }}
                          />

                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/30 border border-cyan-400/40 flex items-center justify-center flex-shrink-0">
                              <span className="text-2xl">{limit.icon}</span>
                            </div>
                            <h3 className="text-xl text-cyan-200 mt-2">{limit.title}</h3>
                          </div>
                          <p className="text-sm text-cyan-100/80 leading-relaxed">{limit.backContent}</p>
                          <p className="text-xs text-cyan-300/50 mt-4 italic">Click to flip back</p>
                        </GlassCard>
                      </motion.div>
                    </div>
                   </motion.div>

                   <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    whileHover={{
                      boxShadow: 'inset 0 0 30px rgba(59, 130, 246, 0.3)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
           </div>

           <div className="w-96 flex items-center relative">
             <RotatingRing
              size={450} 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" 
              rpm={0.08} 
            />

            <motion.div
              className="w-full relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-blue-400/30 flex items-center justify-center"
              >
                <img
                  src={sl8Image}
                  alt="Quantum Computer Hardware"
                  className="max-w-full max-h-full object-contain p-6"
                />
              </motion.div>
              <p className="text-center mt-6 text-blue-200/60 text-sm">
                Quantum computers require extreme conditions to operate
              </p>
            </motion.div>
          </div>
        </div>
       </div>

     </div>
  );
}
