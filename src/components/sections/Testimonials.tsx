import React from 'react';
import { MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../../data/constants';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Global Client Stories</h2>
        <p className="text-slate-600 dark:text-slate-400">What clients worldwide say about working with IBAPP.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 italic relative">
            <MessageSquare className="absolute top-6 right-6 text-brand-primary/20" size={40} />
            <p className="text-slate-700 dark:text-slate-300 mb-8 relative z-10">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full border-2 border-brand-primary" />
              <div className="text-left">
                <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
