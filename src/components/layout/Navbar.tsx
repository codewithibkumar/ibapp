import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 brand-gradient logo-container flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/20">IB</div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-950 dark:text-white' : 'text-white'}`}>
            IB<span className={scrolled ? 'text-brand-primary' : 'text-brand-secondary'}>APP</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`font-semibold transition-colors hover:text-brand-primary ${scrolled ? 'text-slate-800 dark:text-slate-100' : 'text-white'}`}>
              {link.name}
            </a>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300' : 'bg-white/10 text-white'}`}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="bg-brand-primary hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30">
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-white'}`}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden glass-nav absolute top-full left-0 w-full p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-900 dark:text-white font-bold text-lg py-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                {link.name}
                <ExternalLink size={16} className="text-brand-primary" />
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-primary text-white text-center py-3 rounded-xl font-bold">
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
