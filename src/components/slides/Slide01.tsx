import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VideoPlaceholder } from '../VideoPlaceholder';

import { RotatingRing } from '../animations/RotatingRing';
import { FloatingOrb } from '../animations/FloatingOrb';
import sl1Video from '../../img/sl1.mp4';
export function Slide01() {
  const [titleHovered, setTitleHovered] = useState(false);
  const [subtitleClicked, setSubtitleClicked] = useState(false);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 overflow-hidden">
      <FloatingOrb size={200} color="from-cyan-400 to-blue-500" className="top-20 left-20" delay={0} />
      <FloatingOrb size={150} color="from-purple-400 to-pink-500" className="bottom-40 right-40" delay={2} />
      <FloatingOrb size={180} color="from-indigo-400 to-cyan-500" className="top-1/3 right-20" delay={4} />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/20 via-transparent to-pink-400/20 animate-pulse"></div>
      </div>

      <RotatingRing size={700} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" rpm={0.08} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-20 pb-12">
        <div className="text-center mb-8">
          <motion.h1
            className="text-7xl mb-6 bg-gradient-to-r from-cyan-300 via-blue-200 to-pink-300 bg-clip-text text-transparent cursor-pointer"
            onHoverStart={() => setTitleHovered(true)}
            onHoverEnd={() => setTitleHovered(false)}
            animate={{
              filter: titleHovered ? 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))' : 'drop-shadow(0 0 0px rgba(6, 182, 212, 0))'
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            Welcome to the Quantum Wonderland
          </motion.h1>
          
          <motion.p
            className="text-2xl text-cyan-200/80 max-w-4xl mx-auto cursor-pointer"
            onClick={() => {
              setSubtitleClicked(true);
              setTimeout(() => setSubtitleClicked(false), 1000);
            }}
            animate={{
              scale: subtitleClicked ? [1, 1.05, 1] : 1
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            Exploring the Quantum Entangled Path of Future through QML
          </motion.p>

          {subtitleClicked && (
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-400/10 -z-10"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          )}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <VideoPlaceholder
            label="Quantum Swirl Video"
            className="w-80 h-80 my-12"
            shape="circle"
            videoUrl={sl1Video}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-20 bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl px-8 py-4"
          whileHover={{
            scale: 1.03,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderColor: 'rgba(6, 182, 212, 0.5)'
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <p className="text-cyan-100">
            By <span className="text-pink-300">Er.Parv Agarwal</span>, M.Tech @ IIT Patna
          </p>
        </motion.div>
      </div>


    </div>
  );
}
