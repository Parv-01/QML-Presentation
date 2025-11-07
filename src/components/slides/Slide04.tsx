import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VideoPlaceholder } from '../VideoPlaceholder';

import sl41Video from '../../img/sl41.mp4';
import sl42Video from '../../img/sl42.mp4';
import sl43Video from '../../img/sl43.mp4';

interface TimelineNode {
  year: string;
  title: string;
  description: string;
  details: string;
  videoUrl: string;
}

export function Slide04() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const timelineNodes: TimelineNode[] = [
    {
      year: '1994',
      title: "Shor's Algorithm",
      description: 'Factoring large numbers exponentially faster',
      details: 'Peter Shor developed this algorithm that can factor large numbers in polynomial time on a quantum computer, threatening RSA encryption and demonstrating quantum supremacy in cryptography.',
      videoUrl: sl41Video
    },
    {
      year: '1996',
      title: "Grover's Algorithm",
      description: 'Quadratic speedup for database search',
      details: 'Lov Grover created an algorithm providing quadratic speedup for searching unsorted databases, reducing search time from O(N) to O(√N) and proving quantum advantage in search problems.',
      videoUrl: sl42Video
    },
    {
      year: 'Future',
      title: 'Quantum ML',
      description: 'AI-powered quantum advantage',
      details: 'Quantum machine learning promises to revolutionize AI by leveraging quantum phenomena for pattern recognition, optimization, and generative modeling at unprecedented scales.',
      videoUrl: sl43Video
    }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden p-20">
       <div className="h-full flex flex-col pb-12">
         <h2 className="text-5xl mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
           The Birth of Quantum Algorithms
         </h2>
        <p className="text-center text-cyan-200/70 text-xl mb-16">
          Mathematics that changed encryption and search forever
        </p>

         <div className="flex-1 flex items-center justify-center">
           <div className="w-full max-w-6xl relative">
             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/60 to-pink-500/30 -translate-y-1/2"></div>
            <div className="relative flex justify-between items-center">
              {timelineNodes.map((node, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center w-72 cursor-pointer"
                   onClick={() => setSelectedNode(selectedNode === index ? null : index)}
                 >
                   <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VideoPlaceholder
                      label={`${node.title} Video`}
                      className="w-32 h-32 mb-6"
                      shape="circle"
                      videoUrl={node.videoUrl}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                    />
                   </motion.div>

                   <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-slate-950 shadow-lg shadow-cyan-500/50 mb-6 z-10"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 1.3
                    }}
                  />
                  <motion.div
                    className="bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 text-center"
                    whileHover={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderColor: 'rgba(6, 182, 212, 0.5)',
                      y: -6
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-2xl text-cyan-300 mb-2">{node.year}</p>
                    <h3 className="text-xl text-white mb-3">{node.title}</h3>
                    <p className="text-sm text-blue-200/70">{node.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
       </div>

       <AnimatePresence>
        {selectedNode !== null && (
          <>
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl w-full mx-4"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="bg-gradient-to-br from-indigo-900/95 to-blue-900/95 backdrop-blur-xl border border-cyan-400/50 rounded-3xl p-10 shadow-2xl">
                <div className="flex gap-8 mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl text-cyan-300 mb-4">{timelineNodes[selectedNode].title}</h3>
                    <p className="text-xl text-blue-200/80 mb-6">{timelineNodes[selectedNode].year}</p>
                    <p className="text-blue-100/90 leading-relaxed">{timelineNodes[selectedNode].details}</p>
                  </div>
                  <div className="w-48 h-48 flex-shrink-0">
                    <VideoPlaceholder
                      label={`${timelineNodes[selectedNode].title} Video`}
                      className="w-full h-full"
                      shape="circle"
                      videoUrl={timelineNodes[selectedNode].videoUrl}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                    />
                  </div>
                </div>
                <motion.button
                  className="mt-8 px-6 py-3 bg-cyan-500/20 border border-cyan-400/50 rounded-xl text-cyan-300 hover:bg-cyan-500/30"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedNode(null)}
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
