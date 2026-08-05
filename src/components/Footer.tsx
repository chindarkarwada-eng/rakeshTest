import React, { useState } from 'react';
import { ArrowUp, Copy, Check } from 'lucide-react';
import { ART_DIRECTOR_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ART_DIRECTOR_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className={`border-t font-sans relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0d0d0d] border-white/5 text-white/70' : 'bg-[#f8f9fa] border-zinc-200 text-zinc-700'
    }`}>
      
      {/* Main Contact Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 pb-16 border-b ${
          isDark ? 'border-white/5' : 'border-zinc-200'
        }`}>
          
          {/* Big CTA */}
          <div className="lg:col-span-8 space-y-4">
            <span className={`text-[9px] tracking-[0.3em] uppercase block ${
              isDark ? 'opacity-50 text-white' : 'text-zinc-500'
            }`}>
              Direct Contact & Studio Inquiries
            </span>
            <h2 className={`text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              LET'S SHAPE YOUR NEXT <br />
              <span className={`italic font-serif ${isDark ? 'opacity-80 text-white' : 'text-zinc-800'}`}>Visual Legend.</span>
            </h2>
            <p className={`text-xs sm:text-sm font-light max-w-xl leading-relaxed ${
              isDark ? 'text-white/60' : 'text-zinc-600'
            }`}>
              Available for lead art direction, poster campaigns, streaming series visual identity, and strategic creative commissions globally.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-start lg:items-end">
            <button
              onClick={handleCopyEmail}
              className={`w-full sm:w-auto text-[10px] tracking-[0.2em] font-medium uppercase px-6 py-4 transition-colors flex items-center justify-center space-x-2 ${
                isDark ? 'bg-white hover:bg-white/90 text-black' : 'bg-zinc-900 hover:bg-zinc-800 text-white'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
              <span>{copied ? 'EMAIL COPIED' : 'COPY RAKESH@RAKESHMANJREKAR.COM'}</span>
            </button>
          </div>

        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs font-light mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <span className={`text-xs tracking-[0.4em] font-medium uppercase block ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              RAKESH MANJREKAR
            </span>
            <span className={`text-[10px] tracking-[0.2em] block uppercase ${
              isDark ? 'text-white/40' : 'text-zinc-500'
            }`}>
              ART DIRECTION & DESIGN
            </span>
            <p className={`font-light leading-relaxed text-xs ${
              isDark ? 'text-white/50' : 'text-zinc-600'
            }`}>
              Specialized in movie posters, brand identity, and visual design for cinema, OTT networks, and global entertainment clients.
            </p>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-3 space-y-2">
            <span className={`uppercase tracking-[0.2em] block text-[9px] ${
              isDark ? 'text-white/40' : 'text-zinc-500'
            }`}>DIRECT CONTACT</span>
            <p className={`hover:underline transition-colors ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              <a href="mailto:rakesh@rakeshmanjrekar.com">rakesh@rakeshmanjrekar.com</a>
            </p>
            <p className={isDark ? 'text-white/80' : 'text-zinc-700'}>
              <a href="tel:+13108924751">+1 (310) 892-4751</a>
            </p>
            <p className="text-emerald-500 text-[10px] tracking-wider uppercase flex items-center space-x-2 pt-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>MUMBAI STUDIO ACTIVE</span>
            </p>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-3 space-y-2">
            <span className={`uppercase tracking-[0.2em] block text-[9px] ${
              isDark ? 'text-white/40' : 'text-zinc-500'
            }`}>SOCIAL & NETWORKS</span>
            <div className={`space-y-1.5 ${isDark ? 'text-white/80' : 'text-zinc-800'}`}>
              <a href={ART_DIRECTOR_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className={`block transition-colors ${
                isDark ? 'hover:text-white' : 'hover:text-zinc-900'
              }`}>
                INSTAGRAM (@rakesh_artdir)
              </a>
              <a href={ART_DIRECTOR_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className={`block transition-colors ${
                isDark ? 'hover:text-white' : 'hover:text-zinc-900'
              }`}>
                LINKEDIN / RAKESHMANJREKAR
              </a>
              <a href={ART_DIRECTOR_INFO.socials.behance} target="_blank" rel="noopener noreferrer" className={`block transition-colors ${
                isDark ? 'hover:text-white' : 'hover:text-zinc-900'
              }`}>
                BEHANCE PORTFOLIO
              </a>
              <a href={ART_DIRECTOR_INFO.socials.imdb} target="_blank" rel="noopener noreferrer" className={`block transition-colors ${
                isDark ? 'hover:text-white' : 'hover:text-zinc-900'
              }`}>
                IMDb PRO CREDITS
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className={`p-3 border transition-colors flex items-center space-x-2 ${
                isDark 
                  ? 'bg-[#151515] hover:bg-white hover:text-black text-white border-white/10' 
                  : 'bg-white hover:bg-zinc-900 hover:text-white text-zinc-900 border-zinc-300 shadow-sm'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] tracking-widest font-mono">TOP</span>
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.2em] uppercase space-y-2 sm:space-y-0 ${
          isDark ? 'border-white/5 text-white/40' : 'border-zinc-200 text-zinc-500'
        }`}>
          <div>
            © 2026 RAKESH MANJREKAR (RAKESHMANJREKAR.COM). ALL RIGHTS RESERVED.
          </div>
          <div>
            CINEMATIC ART DIRECTION & DESIGN
          </div>
        </div>

      </div>

    </footer>
  );
};
