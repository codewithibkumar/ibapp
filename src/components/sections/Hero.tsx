import React from 'react';
import { motion } from 'motion/react';

import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-brand-secondary font-semibold text-sm mb-6 border border-white/20">
            #1 Global Developer in Delhi, India
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Crafting Digital Success <br /> Stories <span className="text-brand-primary">Worldwide</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
            Expert Web & Mobile App Developer based in Delhi, helping businesses globally scale with cutting-edge technology and premium design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">View My Work</Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">Get Free Consultation</Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
