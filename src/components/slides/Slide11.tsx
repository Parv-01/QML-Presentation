import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Globe, Twitter, Github } from 'lucide-react';
import ParvAgarwalImage from '../../img/ParvAgarwal.jpg';

export function Slide11() {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 overflow-hidden p-12">
      <div className="h-full flex flex-col">
        <motion.h2
          className="text-4xl mb-6 text-center bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Speaker
        </motion.h2>

        <div className="flex-1 flex items-start gap-8 min-h-0">
          {/* Profile section */}
          <div className="w-80 flex flex-col items-center flex-shrink-0">
            <motion.div
              className="relative"
              onHoverStart={() => setShowSocialLinks(true)}
              onHoverEnd={() => setShowSocialLinks(false)}
              animate={{ rotate: [2, -2, 2] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="w-64 h-64 mb-4 rounded-full overflow-hidden border-2 border-teal-400/30 shadow-lg">
                <img
                  src={ParvAgarwalImage}
                  alt="Parv Agarwal"
                  className="w-full h-full object-cover"
                />
              </div>

              <AnimatePresence>
                {showSocialLinks && (
                  <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href="mailto:parvaggarwal9759@gmail.com"
                      className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.3)' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="w-6 h-6 text-cyan-300" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/parvagarwal/"
                      className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(20, 184, 166, 0.3)' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-6 h-6 text-teal-300" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/parv001"
                      className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-6 h-6 text-blue-300" />
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl text-cyan-200 mb-1">Er. Parv Agarwal</h3>
              <p className="text-cyan-300/70 text-sm">M.Tech Student (IIT Patna)</p>
            </motion.div>
          </div>

          {/* Bio & details */}
          <div className="flex-1 flex flex-col gap-4 min-h-0">
            <motion.div
              className="bg-white/10 backdrop-blur-md border border-teal-400/30 rounded-3xl p-8 cursor-pointer"
              onClick={() => setBioExpanded(!bioExpanded)}
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(20, 184, 166, 0.5)',
                y: -4
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-xl text-teal-300 mb-4">Short Bio</h4>
              <p className="text-teal-100/80 leading-relaxed mb-4">
                Er. Parv Agarwal is a researcher in Quantum Machine Learning and Quantum Algorithms, currently pursuing his Master’s in Technology in Artificial Intelligence and Data Science at IIT Patna.
              </p>
              <p className="text-teal-100/80 leading-relaxed">
                He won third place worldwide at the NYU Abu Dhabi Hackathon for Social Good in Quantum Computing (2022) and has been a fellow at the Womanium Quantum Program, the WISER Quantum Program, a QWorld Scholar, and an IBM Summer School Fellow.
              </p>

              <AnimatePresence>
                {bioExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <p className="text-teal-100/70 text-sm border-t border-teal-400/20 pt-6">
                      His work bridges the gap between quantum theory and practical applications in areas such as finance, neuroscience, and human–computer interaction, aiming to democratize access to emerging quantum technologies through education and collaboration.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Research Interests */}
            <motion.div
              className="bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8"
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(6, 182, 212, 0.5)'
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-xl text-cyan-300 mb-4">Research Interests</h4>
              <ul className="space-y-3">
                {[
                  'QML & Its Applications in Finance, Neuroscience, and HCI',
                  'Brain-Computer Interfaces (BCI) and Neural Signal Processing',
                  'Quantum–Classical Hybrid Systems'
                ].map((interest, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        index === 0
                          ? 'bg-cyan-400'
                          : index === 1
                          ? 'bg-teal-400'
                          : 'bg-purple-400'
                      }`}
                    ></div>
                    <p
                      className={`${
                        index === 0
                          ? 'text-cyan-100/80'
                          : index === 1
                          ? 'text-teal-100/80'
                          : 'text-purple-100/80'
                      }`}
                    >
                      {interest}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="bg-gradient-to-r from-indigo-500/20 to-teal-500/20 backdrop-blur-md border border-indigo-400/30 rounded-3xl p-6"
              whileHover={{
                backgroundColor: 'rgba(99, 102, 241, 0.25)',
                borderColor: 'rgba(99, 102, 241, 0.5)'
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h4 className="text-lg text-indigo-300 mb-3">Contact Information</h4>
              <div className="space-y-2">
                <motion.a
                  href="mailto:parvaggarwal9759@gmail.com"
                  className="text-indigo-100/70 text-sm flex items-center gap-2 cursor-pointer hover:text-indigo-300 transition-colors"
                  whileHover={{ x: 4 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-4 h-4" /> parvaggarwal9759@gmail.com
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/parvagarwal/"
                  className="text-indigo-100/70 text-sm flex items-center gap-2 cursor-pointer hover:text-indigo-300 transition-colors"
                  whileHover={{ x: 4 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4" /> LinkedIn Profile
                </motion.a>
                <motion.a
                  href="https://twitter.com/parv001"
                  className="text-indigo-100/70 text-sm flex items-center gap-2 cursor-pointer hover:text-indigo-300 transition-colors"
                  whileHover={{ x: 4 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4" /> @parv001
                </motion.a>
                <motion.a
                  href="https://github.com/parvagarwal"
                  className="text-indigo-100/70 text-sm flex items-center gap-2 cursor-pointer hover:text-indigo-300 transition-colors"
                  whileHover={{ x: 4 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" /> parvagarwal
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
