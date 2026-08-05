import React, { useState } from 'react';
import { X, Award, Maximize2 } from 'lucide-react';
import { PortfolioItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectProject: (item: PortfolioItem) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, onClose, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'retouch'>('overview');
  const [sliderPos, setSliderPos] = useState(50);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  if (!item) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto ${
      isDark ? 'bg-black/90' : 'bg-black/60'
    }`}>
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-6xl border shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col transition-colors duration-300 ${
        isDark ? 'bg-[#151515] border-white/10 text-white' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        
        {/* Top Sticky Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b sticky top-0 z-30 ${
          isDark ? 'border-white/10 bg-[#151515]/95' : 'border-zinc-200 bg-white/95'
        }`}>
          <div className="flex items-center space-x-3">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-white/80' : 'bg-zinc-800'}`}></span>
            <span className={`text-[10px] tracking-[0.2em] uppercase font-light ${
              isDark ? 'text-white/50' : 'text-zinc-500'
            }`}>
              CAMPAIGN CASE STUDY // {item.studio}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsFullscreenImage(true)}
              className={`text-[10px] tracking-[0.15em] px-3 py-1.5 border transition-colors flex items-center space-x-1.5 uppercase ${
                isDark 
                  ? 'text-white/70 hover:text-white border-white/10 hover:border-white/30' 
                  : 'text-zinc-700 hover:text-zinc-900 border-zinc-300 hover:border-zinc-500'
              }`}
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden sm:inline">FULLSCREEN ART</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 transition-colors ${
                isDark ? 'text-white/50 hover:text-white hover:bg-white/5' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-10">
          
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: High-Res Key Art Poster Display */}
            <div className="lg:col-span-5 relative group">
              <div className={`relative aspect-[2/3] w-full overflow-hidden border shadow-2xl ${
                isDark ? 'border-white/10 bg-[#0d0d0d]' : 'border-zinc-200 bg-zinc-100'
              }`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center cursor-zoom-in"
                  onClick={() => setIsFullscreenImage(true)}
                />

                {item.awards && item.awards.length > 0 && (
                  <div className="absolute top-3 left-3 bg-white text-black text-[9px] tracking-[0.2em] uppercase font-medium px-3 py-1 flex items-center space-x-1.5 shadow-lg">
                    <Award className="w-3 h-3" />
                    <span>{item.awards[0]}</span>
                  </div>
                )}
              </div>

              <div className="mt-2 text-center">
                <span className={`text-[9px] tracking-[0.2em] uppercase ${
                  isDark ? 'text-white/30' : 'text-zinc-400'
                }`}>
                  CLICK ARTWORK TO ZOOM FULL RESOLUTION
                </span>
              </div>
            </div>

            {/* Right Column: Title, Metadata, Tabs & Synopsis */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className={`flex items-center space-x-2 text-[10px] tracking-[0.25em] mb-2 uppercase font-light ${
                  isDark ? 'text-white/40' : 'text-zinc-500'
                }`}>
                  <span>{item.categoryLabel}</span>
                  <span>•</span>
                  <span>RELEASE YEAR: {item.year}</span>
                </div>

                <h1 className={`text-3xl sm:text-5xl font-light tracking-tighter leading-tight ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  {item.title}
                </h1>

                <p className={`text-sm font-light mt-1 ${
                  isDark ? 'text-white/60' : 'text-zinc-600'
                }`}>
                  {item.subtitle}
                </p>
              </div>

              {/* Quick Spec Matrix */}
              <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 border text-xs font-light tracking-wider ${
                isDark ? 'bg-[#0d0d0d] border-white/5' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div>
                  <span className={`block text-[9px] tracking-widest uppercase ${
                    isDark ? 'text-white/30' : 'text-zinc-400'
                  }`}>STUDIO / CLIENT</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.studio}</span>
                </div>
                <div>
                  <span className={`block text-[9px] tracking-widest uppercase ${
                    isDark ? 'text-white/30' : 'text-zinc-400'
                  }`}>CREATIVE AGENCY</span>
                  <span className={isDark ? 'text-white/80' : 'text-zinc-700'}>{item.agency || 'Rakesh Manjrekar Studio'}</span>
                </div>
                <div>
                  <span className={`block text-[9px] tracking-widest uppercase ${
                    isDark ? 'text-white/30' : 'text-zinc-400'
                  }`}>MY ROLE</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.role}</span>
                </div>
              </div>

              {/* Navigation Tabs (Overview / Process / Retouching) */}
              <div className={`flex items-center space-x-2 border-b pb-2 ${
                isDark ? 'border-white/5' : 'border-zinc-200'
              }`}>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    activeTab === 'overview'
                      ? (isDark ? 'bg-white text-black font-medium' : 'bg-zinc-900 text-white font-medium')
                      : (isDark ? 'text-white/40 hover:text-white' : 'text-zinc-500 hover:text-zinc-900')
                  }`}
                >
                  CAMPAIGN OVERVIEW
                </button>
                <button
                  onClick={() => setActiveTab('process')}
                  className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    activeTab === 'process'
                      ? (isDark ? 'bg-white text-black font-medium' : 'bg-zinc-900 text-white font-medium')
                      : (isDark ? 'text-white/40 hover:text-white' : 'text-zinc-500 hover:text-zinc-900')
                  }`}
                >
                  PROCESS & EXPLORATION
                </button>
                <button
                  onClick={() => setActiveTab('retouch')}
                  className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    activeTab === 'retouch'
                      ? (isDark ? 'bg-white text-black font-medium' : 'bg-zinc-900 text-white font-medium')
                      : (isDark ? 'text-white/40 hover:text-white' : 'text-zinc-500 hover:text-zinc-900')
                  }`}
                >
                  COMPOSITING COMPARISON
                </button>
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-2">
                    <h3 className={`text-[10px] tracking-[0.25em] uppercase ${
                      isDark ? 'text-white/40' : 'text-zinc-500'
                    }`}>CREATIVE DIRECTION & CONTEXT</h3>
                    <p className={`text-sm leading-relaxed font-light ${
                      isDark ? 'text-white/80' : 'text-zinc-700'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {item.synopsis && (
                    <div className={`p-4 border-l-2 text-xs space-y-1 ${
                      isDark ? 'bg-[#0d0d0d] border-white/40' : 'bg-zinc-50 border-zinc-800'
                    }`}>
                      <span className={`tracking-widest uppercase text-[9px] block ${
                        isDark ? 'text-white/40' : 'text-zinc-500'
                      }`}>NARRATIVE SYNOPSIS</span>
                      <p className={`italic font-light leading-relaxed ${
                        isDark ? 'text-white/80' : 'text-zinc-700'
                      }`}>{item.synopsis}</p>
                    </div>
                  )}

                  {/* Impact Stats */}
                  {item.impactStats && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                      {item.impactStats.map((stat, i) => (
                        <div key={i} className={`p-3 border text-center ${
                          isDark ? 'bg-[#0d0d0d] border-white/5' : 'bg-zinc-50 border-zinc-200'
                        }`}>
                          <span className={`text-xl font-light block tracking-tight ${
                            isDark ? 'text-white' : 'text-zinc-900'
                          }`}>{stat.value}</span>
                          <span className={`text-[9px] tracking-widest uppercase ${
                            isDark ? 'text-white/40' : 'text-zinc-500'
                          }`}>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Accolades & Tags */}
                  <div className="pt-2 space-y-3">
                    <span className={`text-[10px] tracking-[0.25em] block uppercase ${
                      isDark ? 'text-white/40' : 'text-zinc-500'
                    }`}>TAGS & DISCIPLINES</span>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className={`text-[10px] tracking-wider px-3 py-1 border ${
                          isDark 
                            ? 'bg-[#0d0d0d] text-white/70 border-white/5' 
                            : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                        }`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PROCESS & STAGES */}
              {activeTab === 'process' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {item.processNotes && item.processNotes.length > 0 ? (
                    item.processNotes.map((note, idx) => (
                      <div key={idx} className={`p-4 border space-y-1 ${
                        isDark ? 'bg-[#0d0d0d] border-white/5' : 'bg-zinc-50 border-zinc-200'
                      }`}>
                        <span className={`text-[10px] tracking-[0.2em] font-medium block uppercase ${
                          isDark ? 'text-white' : 'text-zinc-900'
                        }`}>{note.stage}</span>
                        <p className={`text-xs font-light leading-relaxed ${
                          isDark ? 'text-white/70' : 'text-zinc-600'
                        }`}>{note.description}</p>
                      </div>
                    ))
                  ) : (
                    <div className={`p-6 border text-center text-xs font-light tracking-wider ${
                      isDark ? 'bg-[#0d0d0d] border-white/5 text-white/40' : 'bg-zinc-50 border-zinc-200 text-zinc-500'
                    }`}>
                      Standard multi-pass compositing, custom typography kerning, and color grading executed in Adobe Photoshop & Cinema 4D.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: RETOUCHING / BEFORE AFTER SLIDER */}
              {activeTab === 'retouch' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <span className={`text-[10px] tracking-[0.25em] block uppercase ${
                    isDark ? 'text-white/40' : 'text-zinc-500'
                  }`}>
                    BEFORE (RAW PLATE) VS AFTER (FINAL COMPOSITE)
                  </span>

                  <div className={`relative aspect-[16/9] w-full border overflow-hidden select-none ${
                    isDark ? 'border-white/10 bg-[#0d0d0d]' : 'border-zinc-200 bg-zinc-100'
                  }`}>
                    {/* After Image (Full Composite) */}
                    <img
                      src={item.imageUrl}
                      alt="Final Composite"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Before Image (Unprocessed / Monochromatic Base) */}
                    <div
                      className={`absolute inset-y-0 left-0 overflow-hidden border-r-2 ${
                        isDark ? 'border-white' : 'border-zinc-900'
                      }`}
                      style={{ width: `${sliderPos}%` }}
                    >
                      <img
                        src={item.backdropUrl || item.imageUrl}
                        alt="Raw Shoot Plate"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                        style={{ width: '100%', maxWidth: 'none' }}
                      />
                      <span className="absolute top-2 left-2 bg-black/80 text-white text-[9px] tracking-widest uppercase px-2 py-0.5 border border-white/10">
                        RAW PLATE PASS
                      </span>
                    </div>

                    <span className="absolute top-2 right-2 bg-white text-black text-[9px] tracking-widest uppercase font-medium px-2 py-0.5">
                      FINAL COMPOSITE
                    </span>

                    {/* Slider Range Control */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPos}
                      onChange={(e) => setSliderPos(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />
                  </div>

                  <p className={`text-[10px] tracking-wider text-center uppercase ${
                    isDark ? 'text-white/40' : 'text-zinc-500'
                  }`}>
                    ← Drag slider left/right to compare raw photography pass with final color grade →
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-between text-xs tracking-wider font-light ${
          isDark ? 'border-white/10 bg-[#151515]' : 'border-zinc-200 bg-zinc-50'
        }`}>
          <span className={`uppercase text-[10px] ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>CLIENT: {item.client}</span>

          <button
            onClick={onClose}
            className={`text-[10px] tracking-[0.2em] font-medium uppercase px-5 py-2 transition-colors ${
              isDark ? 'bg-white hover:bg-white/90 text-black' : 'bg-zinc-900 hover:bg-zinc-800 text-white'
            }`}
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>

      {/* Fullscreen Image Lightbox Overlay */}
      {isFullscreenImage && (
        <div className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreenImage(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-colors z-50"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
          />
          <div className="mt-4 text-center">
            <span className="text-white font-light text-lg tracking-tight">{item.title} — High Resolution Key Art</span>
            <span className="block text-xs font-mono text-white/40">{item.studio} • {item.year}</span>
          </div>
        </div>
      )}

    </div>
  );
};
