import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PROJECTS } from '../../data/constants';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="A glimpse into the digital transformations We've delivered across India." 
      />
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
            <div className="relative h-56 overflow-hidden">
              <img src={p.img} alt={p.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold text-brand-primary flex items-center gap-1">
                <CheckCircle size={12} /> {p.location}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md">{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
