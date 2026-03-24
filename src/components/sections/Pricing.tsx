import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Plus } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PRICING_PACKAGES, ADD_ONS } from '../../data/constants';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader 
        title="Transparent Pricing" 
        subtitle="Affordable digital solutions tailored for local businesses, schools, and shops. No hidden costs." 
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PRICING_PACKAGES.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-white dark:bg-slate-800 border-brand-primary shadow-xl scale-105 z-10' 
                  : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-brand-primary/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Flame size={14} /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">{pkg.description}</p>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-brand-primary">{pkg.price}</span>
                  {pkg.subPrice && (
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                      {pkg.subPrice}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Check size={18} className="text-brand-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs italic text-slate-500 dark:text-slate-400 leading-relaxed">
                  {pkg.footer}
                </p>
              </div>
              
              <button className={`w-full mt-8 py-4 rounded-2xl font-bold transition-all ${
                pkg.popular
                  ? 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-primary hover:text-white'
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}

          {/* Add-ons Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-transparent flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                <Plus size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{ADD_ONS.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{ADD_ONS.description}</p>
              <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">{ADD_ONS.price}</span>
              
              <ul className="space-y-3 mt-8">
                {ADD_ONS.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm font-medium text-brand-primary">
                {ADD_ONS.footer}
              </p>
              <button className="w-full mt-6 py-4 rounded-2xl border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all">
                Contact for Custom Quote
              </button>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 dark:text-slate-400">
            Need a custom package? <a href="#contact" className="text-brand-primary font-bold hover:underline">Let's talk</a>
          </p>
        </div>
      </div>
    </section>
  );
};
