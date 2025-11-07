import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VideoPlaceholder } from '../VideoPlaceholder';
import { FloatingOrb } from '../animations/FloatingOrb';
import s9Video from '../../img/s9.mp4';

export function Slide09() {
  const [hoveredSide, setHoveredSide] = useState<'classical' | 'quantum' | null>(null);

  return (
     <div className="relative w-full h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-teal-900 overflow-hidden p-20">
       <FloatingOrb size={160} color="from-teal-400 to-cyan-500" className="top-40 left-40" delay={0} />
      <FloatingOrb size={140} color="from-purple-400 to-pink-500" className="bottom-40 right-40" delay={2} />

       <div className="h-full flex flex-col pb-12">
         <motion.h2
          className="text-5xl mb-16 text-center bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          The Hybrid Future: Quantum + Classical
        </motion.h2>

         <div className="flex-1 flex items-center gap-12">
           <motion.div
            className="flex-1 bg-white/10 backdrop-blur-md border border-teal-400/30 rounded-3xl p-10"
            onHoverStart={() => setHoveredSide('classical')}
            onHoverEnd={() => setHoveredSide(null)}
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderColor: 'rgba(20, 184, 166, 0.5)'
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl mb-8 text-teal-200">The Best of Both Worlds</h3>
            
            <ul className="space-y-6">
              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></div>
                <p className="text-teal-100/80">
                  <span className="text-teal-300">Quantum processors</span> handle specific optimization and sampling tasks
                </p>
              </motion.li>
              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <p className="text-purple-100/80">
                  <span className="text-purple-300">Classical computers</span> manage workflow, pre/post-processing, and error mitigation
                </p>
              </motion.li>
              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <p className="text-cyan-100/80">
                  <span className="text-cyan-300">Cloud integration</span> enables seamless access to quantum resources
                </p>
              </motion.li>
              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                <p className="text-pink-100/80">
                  <span className="text-pink-300">Variational algorithms</span> optimize parameters through iterative quantum-classical loops
                </p>
              </motion.li>
            </ul>
           </motion.div>

           <motion.div
            className="w-96 flex flex-col items-center"
            onHoverStart={() => setHoveredSide('quantum')}
            onHoverEnd={() => setHoveredSide(null)}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.4 }}
            >
              <VideoPlaceholder
                label="Hybrid Cloud or Chip Diagram"
                className="w-full h-96"
                videoUrl={s9Video}
                autoPlay={true}
                muted={true}
                loop={true}
              />
             </motion.div>

             <div className="relative w-full h-20 mt-6">
              <svg className="w-full h-full" viewBox="0 0 300 80">
                <motion.path
                  d="M0,40 Q75,10 150,40 T300,40"
                  fill="none"
                  stroke="url(#hybridGradient)"
                  strokeWidth="2"
                  animate={{
                    strokeDashoffset: hoveredSide ? [0, 100] : 0
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  strokeDasharray={hoveredSide ? "10 5" : "0"}
                />
                <defs>
                  <linearGradient id="hybridGradient">
                    <stop offset="0%" stopColor={hoveredSide === 'classical' ? '#14b8a6' : '#14b8a6'} stopOpacity="0.8">
                      <animate
                        attributeName="stopColor"
                        values="#14b8a6;#a855f7;#14b8a6"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8">
                      <animate
                        attributeName="stopColor"
                        values="#a855f7;#14b8a6;#a855f7"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor={hoveredSide === 'quantum' ? '#a855f7' : '#14b8a6'} stopOpacity="0.8">
                      <animate
                        attributeName="stopColor"
                        values="#14b8a6;#a855f7;#14b8a6"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
         </div>

         <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl text-white/90 italic">
            "We're not replacing classical computing — we're expanding its universe."
          </p>
        </motion.div>
       </div>

     </div>
  );
}
