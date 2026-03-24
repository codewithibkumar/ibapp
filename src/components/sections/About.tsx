import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ExternalLink } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative">
              <img src="/developer-photo.png" alt="IBAPP Developer" referrerPolicy="no-referrer" className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[3/4]" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 brand-gradient rounded-3xl -z-0 opacity-20"></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Passionate Developer Based in <span className="text-brand-primary">Delhi, India</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              With over 15 years of experience in the tech industry, I've dedicated my career to bringing world-class digital solutions to clients globally. Based in the heart of Delhi, I combine local expertise with a global perspective to build products that scale.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-primary" />
                <span className="font-semibold dark:text-white">15+ Years Exp.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-primary" />
                <span className="font-semibold dark:text-white">20+ Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-primary" />
                <span className="font-semibold dark:text-white">Delhi Based</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-primary" />
                <span className="font-semibold dark:text-white">Global Reach</span>
              </div>
            </div>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 text-brand-primary font-bold text-lg hover:underline">
              Download My Resume <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
