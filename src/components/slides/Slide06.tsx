import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { FloatingOrb } from '../animations/FloatingOrb';
import sl61Image from '../../img/sl61.png';
import sl62Image from '../../img/sl62.png';

export function Slide06() {
  const [hoveredCallout, setHoveredCallout] = useState<'qnn' | 'variational' | null>(null);

  return (
     <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 overflow-hidden p-16">
       <FloatingOrb
        size={180}
        color="from-pink-400 to-purple-500"
        className="top-20 right-40"
        delay={0}
      />
      <FloatingOrb
        size={140}
        color="from-cyan-400 to-teal-500"
        className="bottom-40 left-40"
        delay={2}
      />

       <div className="h-full flex flex-col">
         <div className="mb-8 p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-pink-400/30 rounded-3xl shadow-lg">
          <h2 className="text-5xl text-center bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            The Rise of QML
          </h2>
          <p className="text-center text-pink-200/70 text-xl mt-3">
            When AI Meets Quantum Probability
          </p>
         </div>

         <div className="flex-1 flex gap-8 min-h-0">
           <div className="flex-1 flex flex-col gap-6">
             <motion.div
              className="bg-white/10 backdrop-blur-md border border-purple-400/30 rounded-3xl p-8 shadow-md flex-1"
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderColor: 'rgba(168, 85, 247, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            >
                 <p className="text-purple-100/80 leading-relaxed mb-6">
                     Quantum Machine Learning (QML) blends quantum computing’s ability to process multiple
                     states simultaneously with machine learning’s strength in recognizing patterns. A single
                     qubit can exist in a superposition state written as <strong>|ψ⟩ = α|0⟩ + β|1⟩</strong>, allowing QML models to
                     analyze many possibilities at once. This fusion enables exponential improvements in
                     optimization, classification, and generative modeling tasks.
                 </p>

                 <p className="text-purple-100/80 leading-relaxed mb-6">
                     By encoding classical data into quantum states through feature maps such as
                     <strong> φ(x) → |φ(x)⟩</strong>, QML algorithms operate inside exponentially large Hilbert spaces. A system
                     with <strong>n</strong> qubits spans <strong>2ⁿ</strong> basis states, giving QML the power to explore huge solution
                     spaces in parallel. Interference—captured mathematically as the sum of amplitudes—helps
                     reinforce correct answers and cancel out wrong ones.
                 </p>

                 <p className="text-purple-100/80 leading-relaxed mb-6">
                     This mathematical structure allows QML to uncover relationships and patterns that
                     classical systems may never reach. Quantum kernels compute similarity using inner products
                     like <strong> K(x, y) = |⟨φ(x)|φ(y)⟩|²</strong>, enabling richer learning. From financial modeling to molecular
                     simulation and neural pattern discovery, QML opens doors to new forms of intelligence
                     driven by quantum probability and high-dimensional computation.
                 </p>
                 <p className="text-purple-100/80 leading-relaxed mb-6">
                     Ultimately, the strength of QML lies in its ability to harness quantum operations—unitaries,
                     entanglement, and measurement—to create learning systems that evolve in complex spaces.
                     A variational quantum model updates parameters θ by minimizing a cost function such as
                     <strong> C(θ) = ⟨ψ(θ)| H |ψ(θ)⟩</strong>, where <em>H</em> encodes the task objective. These hybrid quantum-classical
                     loops transform noisy, near-term quantum devices into powerful learners capable of
                     capturing nonlinear structures far beyond classical limits.
                 </p>

             </motion.div>

             <div className="grid grid-cols-2 gap-6">
              <motion.div
                onHoverStart={() => setHoveredCallout('qnn')}
                onHoverEnd={() => setHoveredCallout(null)}
                animate={{
                  opacity: hoveredCallout === 'variational' ? 0.7 : 1,
                  scale: hoveredCallout === 'qnn' ? 1.03 : 1,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <GlassCard className="p-6 border-cyan-400/30 cursor-pointer rounded-3xl shadow-md h-full" children={undefined}>
                  <h4 className="text-lg text-cyan-300 mb-2">Quantum Neural Networks</h4>
                  <p className="text-sm text-cyan-100/70">
                    Parameterized quantum circuits as trainable models
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                onHoverStart={() => setHoveredCallout('variational')}
                onHoverEnd={() => setHoveredCallout(null)}
                animate={{
                  opacity: hoveredCallout === 'qnn' ? 0.7 : 1,
                  scale: hoveredCallout === 'variational' ? 1.03 : 1,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <GlassCard className="p-6 border-pink-400/30 cursor-pointer rounded-3xl shadow-md h-full" children={undefined}>
                  <h4 className="text-lg text-pink-300 mb-2">Variational Algorithms</h4>
                  <p className="text-sm text-pink-100/70">
                    Hybrid quantum-classical optimization loops
                  </p>
                </GlassCard>
              </motion.div>
             </div>

             <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-purple-400/30 rounded-3xl p-6 shadow-md"
            >
              <h4 className="text-base font-semibold text-white mb-4">Bibliography</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-white/80 mr-2">•</span>
                  <div>
                    <p className="text-white/80 text-sm mb-1">
                    <a
                      href="https://www.mdpi.com/1099-4300/26/8/649"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-sm"
                    >
                      mdpi.com/1099-4300/26/8/649
                    </a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white/80 mr-2">•</span>
                  <div>
                    <p className="text-white/80 text-sm mb-1">
                    <a
                      href="https://www.mdpi.com/2073-8994/13/5/773"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline text-sm"
                    >
                      mdpi.com/2073-8994/13/5/773
                    </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
           </div>

           <div className="w-96 flex flex-col gap-6 flex-shrink-0">
             <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }} className="flex-1">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-cyan-400/30 flex items-center justify-center shadow-md">
                <img
                  src={sl61Image}
                  alt="Quantum Neural Network Architecture"
                  className="max-w-full max-h-full object-contain p-6"
                />
              </div>
             </motion.div>

             <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }} className="flex-1">
              <motion.div
                animate={{
                  borderColor: [
                    'rgba(6, 182, 212, 0.3)',
                    'rgba(236, 72, 153, 0.3)',
                    'rgba(6, 182, 212, 0.3)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="rounded-3xl border h-full"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-cyan-400/30 flex items-center justify-center shadow-md">
                  <img
                    src={sl62Image}
                    alt="Quantum Neuron Diagram"
                    className="max-w-full max-h-full object-contain p-6"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
