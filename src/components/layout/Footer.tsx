import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 brand-gradient logo-container flex items-center justify-center text-white font-bold text-xl">IB</div>
            <span className="font-display font-bold text-2xl">IBAPP</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8">
            Empowering the global digital future, one project at a time. Professional web and mobile app development services based in Delhi, India.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#about" className="hover:text-brand-primary transition-colors">About Me</a></li>
            <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Location</h4>
          <div className="rounded-xl overflow-hidden h-40 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.0688975472!3d28.5272803431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b34766285%3A0x9da6930124705e61!2sDelhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} IBAPP Portfolio. All rights reserved. Designed with ❤️ in Delhi, India.</p>
      </div>
    </footer>
  );
};
