import React, { useState } from 'react';
import { Grid, LayoutList, Search, Layers } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, Category, ViewMode } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PortfolioGridProps {
  onSelectProject: (item: PortfolioItem) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const categories: { id: Category; label: string; count: number }[] = [
    { id: 'all', label: 'All Work', count: PORTFOLIO_ITEMS.length },
    { id: 'key-art', label: 'Theatrical Posters', count: PORTFOLIO_ITEMS.filter(i => i.category === 'key-art').length },
    { id: 'ott-series', label: 'OTT & Streaming', count: PORTFOLIO_ITEMS.filter(i => i.category === 'ott-series').length },
    { id: 'advertising', label: 'Advertising', count: PORTFOLIO_ITEMS.filter(i => i.category === 'advertising').length },
    { id: 'branding', label: 'Brand & Print', count: PORTFOLIO_ITEMS.filter(i => i.category === 'branding').length },
    { id: 'concept', label: 'Concept & Matte', count: PORTFOLIO_ITEMS.filter(i => i.category === 'concept').length }
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.studio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className={`py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-[#0d0d0d]' : 'bg-[#f8f9fa]'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b ${
          isDark ? 'border-white/5' : 'border-zinc-200'
        }`}>
          <div>
            <span className={`text-[9px] tracking-[0.3em] font-light uppercase block mb-2 ${
              isDark ? 'opacity-50 text-white' : 'text-zinc-500'
            }`}>
              Selected Work & Visual Campaigns
            </span>
            <h2 className={`text-4xl sm:text-6xl font-light tracking-tighter ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              SELECTED <span className={`italic font-serif pl-2 ${
                isDark ? 'opacity-80' : 'text-zinc-800'
              }`}>Work</span>
            </h2>
          </div>

          <p className={`text-xs leading-relaxed font-light max-w-md mt-4 md:mt-0 ${
            isDark ? 'opacity-50 text-white' : 'text-zinc-600'
          }`}>
            Curated film posters, streaming series visual identities, and entertainment campaigns created for Hollywood studios and global streaming platforms.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-200 flex items-center space-x-2 border ${
                  activeCategory === cat.id
                    ? (isDark ? 'bg-white text-black border-white font-medium' : 'bg-zinc-900 text-white border-zinc-900 font-medium')
                    : (isDark 
                        ? 'bg-[#151515] text-white/60 border-white/5 hover:text-white hover:border-white/20' 
                        : 'bg-white text-zinc-600 border-zinc-200 hover:text-zinc-900 hover:border-zinc-400')
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[9px] px-1.5 py-0.5 ${
                  activeCategory === cat.id 
                    ? (isDark ? 'bg-black/20 text-black' : 'bg-white/20 text-white') 
                    : (isDark ? 'bg-white/10 text-white/50' : 'bg-zinc-100 text-zinc-500')
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box & View Mode Toggle */}
          <div className="flex items-center space-x-4">
            
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className={`w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 ${
                isDark ? 'opacity-40 text-white' : 'text-zinc-400'
              }`} />
              <input
                type="text"
                placeholder="Filter title, studio, tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full border text-[11px] font-light tracking-wider pl-9 pr-4 py-2 focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-[#151515] border-white/5 text-white focus:border-white/30' 
                    : 'bg-white border-zinc-300 text-zinc-900 focus:border-zinc-500'
                }`}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${
                    isDark ? 'opacity-40 hover:opacity-100 text-white' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  ×
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div className={`flex items-center border p-1 ${
              isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200'
            }`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-colors ${
                  viewMode === 'grid' 
                    ? (isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white') 
                    : (isDark ? 'text-white/40 hover:text-white' : 'text-zinc-400 hover:text-zinc-800')
                }`}
                title="Poster Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('cinema')}
                className={`p-1.5 transition-colors ${
                  viewMode === 'cinema' 
                    ? (isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white') 
                    : (isDark ? 'text-white/40 hover:text-white' : 'text-zinc-400 hover:text-zinc-800')
                }`}
                title="Cinematic Wide View"
              >
                <Layers className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 transition-colors ${
                  viewMode === 'list' 
                    ? (isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white') 
                    : (isDark ? 'text-white/40 hover:text-white' : 'text-zinc-400 hover:text-zinc-800')
                }`}
                title="Directory List View"
              >
                <LayoutList className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* GRID VIEW (Poster Style) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className={`group relative border overflow-hidden cursor-pointer transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#151515] border-white/5 hover:border-white/20' 
                    : 'bg-white border-zinc-200 shadow-sm hover:border-zinc-400 hover:shadow-md'
                }`}
              >
                {/* Poster Image Container */}
                <div className={`relative aspect-[2/3] w-full overflow-hidden ${
                  isDark ? 'bg-[#0d0d0d]' : 'bg-zinc-100'
                }`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Decorative Corner Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 group-hover:border-white/50 transition-colors pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/80 text-white/80 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border border-white/10 font-light">
                      {item.studio}
                    </span>
                  </div>

                  {/* Bottom Info Block */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1">
                    <span className="text-[9px] tracking-[0.25em] uppercase opacity-50 text-white block">
                      {item.categoryLabel} / {item.year}
                    </span>
                    <h3 className="text-lg font-light text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* CINEMATIC WIDE VIEW */}
        {viewMode === 'cinema' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className={`group relative border overflow-hidden cursor-pointer transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#151515] border-white/5 hover:border-white/20' 
                    : 'bg-white border-zinc-200 shadow-sm hover:border-zinc-400'
                }`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={item.backdropUrl || item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-white/20 group-hover:border-white/50 transition-colors pointer-events-none" />

                  <div className="absolute top-6 left-6 z-10 flex items-center space-x-2">
                    <span className="bg-black/80 text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1 border border-white/10 font-light">
                      {item.studio}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-light text-white">
                        {item.title}
                      </h3>
                      <span className="text-[10px] tracking-widest opacity-50 text-white">{item.year}</span>
                    </div>
                    <p className="text-xs text-white/60 font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LIST DIRECTORY VIEW */}
        {viewMode === 'list' && (
          <div className={`border overflow-hidden ${
            isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`border-b text-[9px] tracking-[0.3em] uppercase ${
                    isDark ? 'border-white/5 bg-[#111111] text-white/50' : 'border-zinc-200 bg-zinc-50 text-zinc-500'
                  }`}>
                    <th className="py-4 px-6">Artwork</th>
                    <th className="py-4 px-6">Project Title</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Studio / Client</th>
                    <th className="py-4 px-6">Role</th>
                    <th className="py-4 px-6">Year</th>
                    <th className="py-4 px-6 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className={`divide-y text-xs font-light tracking-wider ${
                  isDark ? 'divide-white/5 text-white/80' : 'divide-zinc-200 text-zinc-800'
                }`}>
                  {filteredItems.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => onSelectProject(item)}
                      className={`cursor-pointer transition-colors group ${
                        isDark ? 'hover:bg-white/5 hover:text-white' : 'hover:bg-zinc-50 hover:text-zinc-900'
                      }`}
                    >
                      <td className="py-3 px-6">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className={`w-10 h-14 object-cover border ${
                            isDark ? 'border-white/10 group-hover:border-white/30' : 'border-zinc-200 group-hover:border-zinc-400'
                          }`}
                        />
                      </td>
                      <td className={`py-3 px-6 font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        {item.title}
                      </td>
                      <td className="py-3 px-6 opacity-60">{item.categoryLabel}</td>
                      <td className="py-3 px-6 opacity-80">{item.studio}</td>
                      <td className="py-3 px-6 opacity-60">{item.role}</td>
                      <td className="py-3 px-6 opacity-60">{item.year}</td>
                      <td className="py-3 px-6 text-right">
                        <button className={`border text-[9px] tracking-[0.2em] uppercase px-3 py-1 transition-colors ${
                          isDark 
                            ? 'border-white/10 hover:border-white text-white/60 hover:text-white' 
                            : 'border-zinc-300 hover:border-zinc-900 text-zinc-600 hover:text-zinc-900'
                        }`}>
                          VIEW
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
