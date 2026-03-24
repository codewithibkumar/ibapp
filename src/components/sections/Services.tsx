import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { SERVICES } from '../../data/constants';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <SectionHeader 
        title="My Expert Services" 
        subtitle="Comprehensive digital solutions designed to help your business grow in the modern era." 
      />
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {SERVICES.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 card-hover">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
              {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{s.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
