import React from 'react';
import { STATS } from '../../data/constants';

export const Stats = () => {
  return (
    <section className="py-20 brand-gradient">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat, i) => (
          <div key={i} className="text-white">
            <div className="flex justify-center mb-4 opacity-80">{stat.icon}</div>
            <div className="text-4xl font-extrabold mb-2">{stat.value}</div>
            <div className="text-sm font-medium opacity-90 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
