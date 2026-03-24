import React from 'react';
import { Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-12 text-white flex flex-col justify-between bg-slate-950">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Build Something <span className="text-brand-primary">Amazing</span></h2>
              <p className="text-white/70 mb-10">Ready to start your digital journey? Get a free quote or consultation today.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"><Phone size={24} /></div>
                  <div>
                    <div className="text-sm text-white/50">Call/WhatsApp</div>
                    <div className="font-bold">+91 62038 25934</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"><Send size={24} /></div>
                  <div>
                    <div className="text-sm text-white/50">Email Me</div>
                    <div className="font-bold">hello@ibapp.co.in</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="p-12">
            <form action="https://formsubmit.co/nprojectsteam@gmail.com" method="POST" className="space-y-6">
              {/* FormSubmit Configuration - Bot Protection Enabled */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - IBAPP" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_blacklist" value="spam, casino, crypto, gambling, lottery, win, free, money" />

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-none focus:ring-2 focus:ring-brand-primary dark:text-white" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone</label>
                  <input type="text" name="phone" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-none focus:ring-2 focus:ring-brand-primary dark:text-white" placeholder="+91..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-none focus:ring-2 focus:ring-brand-primary dark:text-white" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border-none focus:ring-2 focus:ring-brand-primary dark:text-white" placeholder="Tell me about your project..."></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
