import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImagePlaceholder } from '../ImagePlaceholder';

import { ParticleField } from '../animations/ParticleField';
import sl3Image from '../../img/sl3.png';
export function Slide03() {
  const [quoteExpanded, setQuoteExpanded] = useState(false);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 overflow-hidden p-20">
       <ParticleField />

       <div className="relative z-10 h-full flex flex-col pb-12">
        <motion.h2
          className="text-5xl mb-12 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Schrödinger's Cat
        </motion.h2>

         <div className="flex-1 flex items-center gap-12">
           <div className="flex-1 flex flex-col gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-md border border-purple-400/30 rounded-3xl p-10"
              whileHover={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(168, 85, 247, 0.5)'
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl mb-6 text-purple-200">The Paradox of Quantum Superposition</h3>
              <p className="text-purple-100/80 mb-6 leading-relaxed">
                Schrödinger's famous thought experiment illustrates the bizarre nature of quantum mechanics. 
                A cat in a sealed box with a quantum mechanism is simultaneously alive and dead until observed.
              </p>
              <p className="text-purple-100/80 leading-relaxed">
                This counterintuitive concept demonstrates superposition: a quantum system exists in all 
                possible states at once until measurement collapses it into a single outcome.
              </p>
             </motion.div>

             <motion.div
              className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-pink-400/40 rounded-3xl p-8 cursor-pointer overflow-hidden"
              onClick={() => setQuoteExpanded(!quoteExpanded)}
              animate={{
                height: quoteExpanded ? 'auto' : 'auto'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl text-pink-300 opacity-50">"</span>
                <p className="text-xl text-pink-100 italic">
                  The cat is both alive and dead — until observed.
                </p>
                <span className="text-5xl text-pink-300 opacity-50">"</span>
              </div>

              <AnimatePresence>
                {quoteExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <p className="text-sm text-pink-200/80 border-t border-pink-400/20 pt-6">
                      This thought experiment demonstrates the quantum measurement problem: before observation, 
                      the system exists in a superposition of states. The act of measurement forces the quantum 
                      system to "choose" one outcome, collapsing the wave function.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
           </div>

           <div className="w-96">
            <motion.div
              animate={{
                rotate: [2, -2, 2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <ImagePlaceholder
                label="Schrödinger's Cat Illustration"
                className="w-96 h-96"
                shape="circle"
                imageUrl={sl3Image}
              />
            </motion.div>
          </div>
        </div>
       </div>

     </div>
  );
}
