import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const StudioWorkbench: React.FC = () => {
  const samplePosters = PORTFOLIO_ITEMS.slice(0, 4);
  const [selectedPoster, setSelectedPoster] = useState(samplePosters[0]);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  // Lighting & Grade parameters
  const [exposure, setExposure] = useState(100);
  const [contrast, setContrast] = useState(120);
  const [saturate, setSaturate] = useState(110);
  const [hueRotate, setHueRotate] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [activePreset, setActivePreset] = useState<string>('default');

  const presets = [
    {
      id: 'default',
      name: 'Original Master Grade',
      exposure: 100,
      contrast: 110,
      saturate: 105,
      hueRotate: 0,
      sepia: 0
    },
    {
      id: 'blockbuster',
      name: 'Teal & Orange Blockbuster',
      exposure: 105,
      contrast: 135,
      saturate: 130,
      hueRotate: 180,
      sepia: 10
    },
    {
      id: 'noir',
      name: 'High-Contrast Noir',
      exposure: 95,
      contrast: 160,
      saturate: 0,
      hueRotate: 0,
      sepia: 0
    },
    {
      id: 'neon',
      name: 'Cyberpunk Neon Glow',
      exposure: 110,
      contrast: 140,
      saturate: 180,
      hueRotate: 280,
      sepia: 0
    },
    {
      id: 'vintage',
      name: 'Ember Golden Hour',
      exposure: 105,
      contrast: 115,
      saturate: 120,
      hueRotate: 15,
      sepia: 35
    }
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setActivePreset(preset.id);
    setExposure(preset.exposure);
    setContrast(preset.contrast);
    setSaturate(preset.saturate);
    setHueRotate(preset.hueRotate);
    setSepia(preset.sepia);
  };

  const resetGrade = () => {
    applyPreset(presets[0]);
  };

  return (
    <section id="workbench" className={`py-24 border-t relative transition-colors duration-300 ${
      isDark ? 'bg-[#0d0d0d] border-white/5' : 'bg-[#f8f9fa] border-zinc-200'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`mb-12 pb-8 border-b flex flex-col md:flex-row md:items-end justify-between ${
          isDark ? 'border-white/5' : 'border-zinc-200'
        }`}>
          <div>
            <span className={`text-[9px] tracking-[0.3em] font-light uppercase block mb-2 ${
              isDark ? 'opacity-50 text-white' : 'text-zinc-500'
            }`}>
              Interactive Color & Atmosphere Tool
            </span>
            <h2 className={`text-4xl sm:text-6xl font-light tracking-tighter ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              STUDIO <span className={`italic font-serif pl-2 ${
                isDark ? 'opacity-80' : 'text-zinc-800'
              }`}>Workbench</span>
            </h2>
          </div>

          <p className={`text-xs leading-relaxed font-light max-w-md mt-4 md:mt-0 ${
            isDark ? 'opacity-50 text-white' : 'text-zinc-600'
          }`}>
            Test how lighting, color temperature, and atmospheric color grading transform the emotional resonance of key art posters in real time.
          </p>
        </div>

        {/* Workbench Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className={`border p-8 space-y-8 lg:col-span-5 ${
            isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            
            {/* Select Poster Sample */}
            <div className="space-y-3">
              <span className={`text-[10px] tracking-[0.25em] uppercase block ${
                isDark ? 'text-white/40' : 'text-zinc-500'
              }`}>
                01. SELECT KEY ARTWORK SAMPLE
              </span>
              <div className="grid grid-cols-4 gap-3">
                {samplePosters.map((poster) => (
                  <button
                    key={poster.id}
                    onClick={() => setSelectedPoster(poster)}
                    className={`relative aspect-[2/3] overflow-hidden border transition-all ${
                      selectedPoster.id === poster.id 
                        ? (isDark ? 'border-white scale-105 opacity-100' : 'border-zinc-900 scale-105 opacity-100')
                        : (isDark ? 'border-white/10 opacity-50 hover:opacity-100' : 'border-zinc-200 opacity-60 hover:opacity-100')
                    }`}
                  >
                    <img
                      src={poster.imageUrl}
                      alt={poster.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Presets Row */}
            <div className="space-y-3">
              <span className={`text-[10px] tracking-[0.25em] uppercase block ${
                isDark ? 'text-white/40' : 'text-zinc-500'
              }`}>
                02. ATMOSPHERE GRADE PRESETS
              </span>
              <div className="flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => applyPreset(p)}
                    className={`px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase border transition-colors ${
                      activePreset === p.id
                        ? (isDark ? 'bg-white text-black border-white font-medium' : 'bg-zinc-900 text-white border-zinc-900 font-medium')
                        : (isDark 
                            ? 'bg-[#111111] text-white/60 border-white/5 hover:text-white hover:border-white/20' 
                            : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:text-zinc-900 hover:border-zinc-400')
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Fine Tuning Sliders */}
            <div className={`space-y-5 pt-4 border-t ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
              <div className="flex items-center justify-between text-xs font-light tracking-wider">
                <span className={isDark ? 'text-white/70' : 'text-zinc-700'}>EXPOSURE & BRIGHTNESS</span>
                <span className={`font-mono ${isDark ? 'text-white' : 'text-zinc-900'}`}>{exposure}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="150"
                value={exposure}
                onChange={(e) => {
                  setExposure(Number(e.target.value));
                  setActivePreset('custom');
                }}
                className="w-full accent-zinc-800 bg-zinc-200 h-1 cursor-pointer"
              />

              <div className="flex items-center justify-between text-xs font-light tracking-wider">
                <span className={isDark ? 'text-white/70' : 'text-zinc-700'}>TONAL CONTRAST</span>
                <span className={`font-mono ${isDark ? 'text-white' : 'text-zinc-900'}`}>{contrast}%</span>
              </div>
              <input
                type="range"
                min="80"
                max="180"
                value={contrast}
                onChange={(e) => {
                  setContrast(Number(e.target.value));
                  setActivePreset('custom');
                }}
                className="w-full accent-zinc-800 bg-zinc-200 h-1 cursor-pointer"
              />

              <div className="flex items-center justify-between text-xs font-light tracking-wider">
                <span className={isDark ? 'text-white/70' : 'text-zinc-700'}>COLOR SATURATION</span>
                <span className={`font-mono ${isDark ? 'text-white' : 'text-zinc-900'}`}>{saturate}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={saturate}
                onChange={(e) => {
                  setSaturate(Number(e.target.value));
                  setActivePreset('custom');
                }}
                className="w-full accent-zinc-800 bg-zinc-200 h-1 cursor-pointer"
              />

              <div className="flex items-center justify-between text-xs font-light tracking-wider">
                <span className={isDark ? 'text-white/70' : 'text-zinc-700'}>CHROMATIC SHIFT (HUE)</span>
                <span className={`font-mono ${isDark ? 'text-white' : 'text-zinc-900'}`}>{hueRotate}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={hueRotate}
                onChange={(e) => {
                  setHueRotate(Number(e.target.value));
                  setActivePreset('custom');
                }}
                className="w-full accent-zinc-800 bg-zinc-200 h-1 cursor-pointer"
              />
            </div>

            <div className={`pt-2 flex items-center justify-between border-t ${
              isDark ? 'border-white/5' : 'border-zinc-200'
            }`}>
              <button
                onClick={resetGrade}
                className={`text-[10px] tracking-[0.2em] uppercase flex items-center space-x-2 ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5 opacity-60" />
                <span>RESET GRADE</span>
              </button>

              <span className={`text-[9px] tracking-[0.2em] uppercase ${
                isDark ? 'text-white/40' : 'text-zinc-500'
              }`}>
                ACTIVE: {activePreset.toUpperCase()}
              </span>
            </div>

          </div>

          {/* Interactive Live Preview Canvas Display */}
          <div className={`border p-8 space-y-6 lg:col-span-7 ${
            isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            
            <div className={`flex items-center justify-between text-[10px] tracking-[0.25em] uppercase ${
              isDark ? 'text-white/50' : 'text-zinc-500'
            }`}>
              <span>CANVAS PREVIEW // {selectedPoster.title}</span>
              <span className={`font-light ${isDark ? 'text-white/80' : 'text-zinc-800'}`}>REAL-TIME COLOR ENGINE</span>
            </div>

            <div className={`relative aspect-[2/3] max-h-[520px] w-full mx-auto overflow-hidden border shadow-2xl ${
              isDark ? 'border-white/10 bg-[#0d0d0d]' : 'border-zinc-200 bg-zinc-100'
            }`}>
              <img
                src={selectedPoster.imageUrl}
                alt={selectedPoster.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
                style={{
                  filter: `brightness(${exposure}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hueRotate}deg) sepia(${sepia}%)`
                }}
              />

              <div className="absolute top-6 left-6 bg-black/80 text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1 border border-white/10 font-light">
                {selectedPoster.studio} • GRADE: {activePreset.toUpperCase()}
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-white/20 pointer-events-none" />
            </div>

            <div className={`p-4 border text-[10px] font-mono flex items-center justify-between ${
              isDark ? 'bg-[#111111] border-white/5 text-white/40' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
            }`}>
              <span className="truncate">filter: brightness({exposure}%) contrast({contrast}%) saturate({saturate}%) hue-rotate({hueRotate}deg)</span>
              <span className={`uppercase text-[9px] tracking-widest pl-2 ${
                isDark ? 'text-white/60' : 'text-zinc-800'
              }`}>RENDERED</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
