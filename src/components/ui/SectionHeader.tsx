import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, className = '', light = false }: SectionHeaderProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 text-center mb-16 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-display text-3xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900 dark:text-white'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
