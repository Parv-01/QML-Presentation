import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide01 } from './components/slides/Slide01';
import { Slide02 } from './components/slides/Slide02';
import { Slide03 } from './components/slides/Slide03';
import { Slide04 } from './components/slides/Slide04';
import { Slide05 } from './components/slides/Slide05';
import { Slide06 } from './components/slides/Slide06';
import { Slide07 } from './components/slides/Slide07';
import { Slide08 } from './components/slides/Slide08';
import { Slide09 } from './components/slides/Slide09';
import { Slide10 } from './components/slides/Slide10';
import { Slide11 } from './components/slides/Slide11';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide01 key="slide-01" />,
    <Slide02 key="slide-02" />,
    <Slide03 key="slide-03" />,
    <Slide04 key="slide-04" />,
    <Slide05 key="slide-05" />,
    <Slide06 key="slide-06" />,
    <Slide07 key="slide-07" />,
    <Slide08 key="slide-08" />,
    <Slide09 key="slide-09" />,
    <Slide10 key="slide-10" />,
    <Slide11 key="slide-11" />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Slide Container with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] // ease-in-out-expo
          }}
          className="w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-50">
        {/* Slide Counter */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
          <p className="text-white text-sm">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>

        {/* Previous Button */}
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div> */}

      {/* Slide Thumbnails / Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-cyan-400 w-8' 
                : 'bg-white/30 w-2'
            }`}
            whileHover={{ 
              backgroundColor: index === currentSlide ? 'rgba(6, 182, 212, 1)' : 'rgba(255, 255, 255, 0.5)',
              scale: 1.2
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}