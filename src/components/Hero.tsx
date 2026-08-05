import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, CLIENTS_LIST } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onSelectProject: (item: PortfolioItem) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject }) => {
  const featuredWorks = PORTFOLIO_ITEMS.filter(item => item.featured).slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredWorks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, featuredWorks.length]);

  const currentWork = featuredWorks[activeSlide];

  return (
    <section className={`relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0d0d0d] film-grain' : 'bg-[#f8f9fa]'
    }`}>
      
      {/* Background Subtle Accent Glows */}
      <div className={`absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'
      }`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 flex-1 flex flex-col justify-center">
        
        {/* Top Tagline / Eyebrow */}
        <div className="flex items-center space-x-4 mb-8">
          <div className={`h-[1px] w-8 ${isDark ? 'bg-white/20' : 'bg-zinc-300'}`}></div>
          <span className={`text-[10px] tracking-[0.4em] uppercase font-light ${
            isDark ? 'opacity-60 text-white' : 'text-zinc-600'
          }`}>
            Cinematic Posters & Art Direction • Mumbai
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Editorial Headline & Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tighter ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              ART <br />
              <span className={`italic font-serif pl-4 ${
                isDark ? 'opacity-80 text-white/90' : 'opacity-80 text-zinc-800'
              }`}>Director</span>
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed font-light max-w-xl ${
              isDark ? 'opacity-60 text-white' : 'text-zinc-600'
            }`}>
              Specializing in cinematic posters, high-impact entertainment branding, and experimental motion for Bollywood Movies,  UTV Bindass, UTV Action, Times of India, NFDC(Cannes film festival) ,9Xm.
            </p>

            {/* CTA Group with Line Accents */}
            <div className="pt-4 flex flex-col gap-4">
              <a
                href="#work"
                className="flex items-center gap-4 group cursor-pointer w-max"
              >
                <div className={`h-[1px] w-8 transition-all ${
                  isDark 
                    ? 'bg-white/20 group-hover:w-12 group-hover:bg-white' 
                    : 'bg-zinc-300 group-hover:w-12 group-hover:bg-zinc-900'
                }`}></div>
                <span className={`text-[10px] tracking-[0.25em] uppercase transition-opacity ${
                  isDark ? 'opacity-60 group-hover:opacity-100 text-white' : 'text-zinc-600 group-hover:text-zinc-900'
                }`}>
                  Explore Selected Work
                </span>
              </a>
            </div>

            {/* Quick Industry Accolades Badge */}
            <div className={`pt-8 border-t flex items-center space-x-8 text-[10px] tracking-[0.2em] uppercase font-light ${
              isDark ? 'border-white/5 opacity-50 text-white' : 'border-zinc-200 text-zinc-500'
            }`}>
              <div>18+ CLIO & GOLDEN TRAILERS</div>
              <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-zinc-300'}`}></div>
              <div>140+ THEATRICAL POSTERS</div>
            </div>

          </div>

          {/* Right Column: Interactive Featured Key Art Card */}
          <div className="lg:col-span-6 relative">
            
            <div 
              className={`relative group overflow-hidden shadow-2xl transition-all duration-500 border ${
                isDark 
                  ? 'bg-[#151515] border-white/10 hover:border-white/30' 
                  : 'bg-white border-zinc-200 hover:border-zinc-400'
              }`}
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            >
              
              {/* Aspect Ratio Box for Key Art Poster */}
              <div className={`relative aspect-[2/3] max-h-[560px] w-full mx-auto overflow-hidden ${
                isDark ? 'bg-[#0d0d0d]' : 'bg-zinc-100'
              }`}>
                
                {/* Image */}
                <img
                  src={currentWork.imageUrl}
                  alt={currentWork.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                {/* Corner Decorative Element */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/20 group-hover:border-white/50 transition-colors pointer-events-none" />

                {/* Top Badge: Studio & Category */}
                <div className="absolute top-6 left-6 flex items-center space-x-3 z-10">
                  <span className="text-[9px] tracking-[0.3em] uppercase opacity-70 bg-black/60 px-3 py-1 border border-white/10 text-white">
                    {currentWork.studio}
                  </span>
                </div>

                {/* Bottom Overlay Info & Action */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-3">
                  <span className="text-[9px] tracking-[0.3em] uppercase opacity-60 text-white block">
                    {currentWork.categoryLabel} / {currentWork.year}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                    {currentWork.title}
                  </h2>

                  <p className="text-xs text-white/60 line-clamp-2 font-light">
                    {currentWork.description}
                  </p>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(currentWork)}
                      className="text-[10px] tracking-[0.25em] font-medium uppercase text-white border-b border-white/40 hover:border-white pb-1 transition-colors flex items-center space-x-2"
                    >
                      <span>INSPECT CASE STUDY</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>

                    {/* Carousel Navigation */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setActiveSlide((prev) => (prev === 0 ? featuredWorks.length - 1 : prev - 1))}
                        className="p-2 bg-black/60 hover:bg-white/10 text-white border border-white/10 transition-colors"
                        aria-label="Previous Slide"
                      >
                        <ChevronLeft className="w-3.5 h-3.5 opacity-70" />
                      </button>
                      <button
                        onClick={() => setActiveSlide((prev) => (prev + 1) % featuredWorks.length)}
                        className="p-2 bg-black/60 hover:bg-white/10 text-white border border-white/10 transition-colors"
                        aria-label="Next Slide"
                      >
                        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Progress Line Bar */}
              <div className={`flex w-full h-[2px] ${isDark ? 'bg-[#111111]' : 'bg-zinc-200'}`}>
                {featuredWorks.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`flex-1 h-full transition-all duration-500 ${
                      idx === activeSlide 
                        ? (isDark ? 'bg-white' : 'bg-zinc-900') 
                        : (isDark ? 'bg-white/10 hover:bg-white/30' : 'bg-zinc-300 hover:bg-zinc-400')
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Studio & Client Marquee Strip */}
      <div className={`mt-20 border-y py-5 overflow-hidden relative transition-colors ${
        isDark ? 'border-white/5 bg-[#0d0d0d]' : 'border-zinc-200 bg-white'
      }`}>
        <div className="animate-marquee space-x-16 flex items-center whitespace-nowrap">
          {CLIENTS_LIST.concat(CLIENTS_LIST).map((client, idx) => (
            <div key={idx} className={`flex items-center space-x-4 transition-opacity cursor-default ${
              isDark ? 'opacity-40 hover:opacity-90' : 'opacity-60 hover:opacity-100'
            }`}>
              <span className={`text-xs tracking-[0.3em] font-light uppercase ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                {client.logoText}
              </span>
              <span className={`text-[9px] tracking-[0.2em] opacity-50 uppercase ${
                isDark ? 'text-white' : 'text-zinc-600'
              }`}>({client.category})</span>
              <span className="opacity-30">•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
