import React, { useState } from 'react';
import { Search, ArrowUpDown, Award } from 'lucide-react';
import { PORTFOLIO_ITEMS, AWARDS_LIST } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ArchiveDirectoryProps {
  onSelectProject: (item: PortfolioItem) => void;
}

export const ArchiveDirectory: React.FC<ArchiveDirectoryProps> = ({ onSelectProject }) => {
  const [search, setSearch] = useState('');
  const [selectedStudio, setSelectedStudio] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year-desc' | 'year-asc' | 'title' | 'awards'>('year-desc');
  const [hoveredItem, setHoveredItem] = useState<PortfolioItem | null>(null);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const studios = ['all', ...Array.from(new Set(PORTFOLIO_ITEMS.map(i => i.studio)))];

  const processedItems = PORTFOLIO_ITEMS.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

    const matchesStudio = selectedStudio === 'all' || item.studio === selectedStudio;

    return matchesSearch && matchesStudio;
  }).sort((a, b) => {
    if (sortBy === 'year-desc') return b.year - a.year;
    if (sortBy === 'year-asc') return a.year - b.year;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    if (sortBy === 'awards') return (b.awards?.length || 0) - (a.awards?.length || 0);
    return 0;
  });

  return (
    <section id="archive" className={`py-24 border-t relative transition-colors duration-300 ${
      isDark ? 'bg-[#0d0d0d] border-white/5' : 'bg-[#f8f9fa] border-zinc-200'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b ${
          isDark ? 'border-white/5' : 'border-zinc-200'
        }`}>
          <div>
            <span className={`text-[9px] tracking-[0.3em] font-light uppercase block mb-2 ${
              isDark ? 'opacity-50 text-white' : 'text-zinc-500'
            }`}>
              Complete Campaign Index
            </span>
            <h2 className={`text-4xl sm:text-6xl font-light tracking-tighter ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              CAMPAIGN <span className={`italic font-serif pl-2 ${
                isDark ? 'opacity-80' : 'text-zinc-800'
              }`}>Directory</span>
            </h2>
          </div>

          <p className={`text-xs leading-relaxed font-light max-w-md mt-4 md:mt-0 ${
            isDark ? 'opacity-50 text-white' : 'text-zinc-600'
          }`}>
            A comprehensive, searchable index of movie posters, theatrical sheets, and campaign titles designed by Rakesh Manjrekar.
          </p>
        </div>

        {/* Directory Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className={`w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 ${
              isDark ? 'opacity-40 text-white' : 'text-zinc-400'
            }`} />
            <input
              type="text"
              placeholder="Search by title, genre, tag, studio..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full border text-xs font-light tracking-wider pl-9 pr-4 py-2.5 focus:outline-none transition-colors ${
                isDark 
                  ? 'bg-[#151515] border-white/5 text-white focus:border-white/30' 
                  : 'bg-white border-zinc-300 text-zinc-900 focus:border-zinc-500'
              }`}
            />
          </div>

          {/* Studio Dropdown Filter */}
          <div className="md:col-span-4 flex items-center space-x-2">
            <span className={`text-[10px] tracking-[0.2em] uppercase whitespace-nowrap ${
              isDark ? 'opacity-40 text-white' : 'text-zinc-500'
            }`}>STUDIO:</span>
            <select
              value={selectedStudio}
              onChange={(e) => setSelectedStudio(e.target.value)}
              className={`w-full border text-xs font-light tracking-wider px-3 py-2.5 focus:outline-none ${
                isDark 
                  ? 'bg-[#151515] border-white/5 text-white/80 focus:border-white/30' 
                  : 'bg-white border-zinc-300 text-zinc-800 focus:border-zinc-500'
              }`}
            >
              <option value="all">ALL STUDIOS & CLIENTS</option>
              {studios.filter(s => s !== 'all').map((st) => (
                <option key={st} value={st}>{st.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* Sort By Selector */}
          <div className="md:col-span-3 flex items-center space-x-2">
            <ArrowUpDown className={`w-3.5 h-3.5 ${
              isDark ? 'opacity-40 text-white' : 'text-zinc-400'
            }`} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className={`w-full border text-xs font-light tracking-wider px-3 py-2.5 focus:outline-none ${
                isDark 
                  ? 'bg-[#151515] border-white/5 text-white/80 focus:border-white/30' 
                  : 'bg-white border-zinc-300 text-zinc-800 focus:border-zinc-500'
              }`}
            >
              <option value="year-desc">SORT: NEWEST FIRST</option>
              <option value="year-asc">SORT: OLDEST FIRST</option>
              <option value="title">SORT: ALPHABETICAL</option>
              <option value="awards">SORT: AWARD WINNERS</option>
            </select>
          </div>

        </div>

        {/* Directory Table Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Table */}
          <div className={`border overflow-hidden lg:col-span-8 ${
            isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`border-b text-[9px] tracking-[0.3em] uppercase ${
                    isDark ? 'border-white/5 bg-[#111111] text-white/50' : 'border-zinc-200 bg-zinc-50 text-zinc-500'
                  }`}>
                    <th className="py-3.5 px-4">Thumb</th>
                    <th className="py-3.5 px-4">Title & Subtitle</th>
                    <th className="py-3.5 px-4">Studio</th>
                    <th className="py-3.5 px-4">Year</th>
                    <th className="py-3.5 px-4">Status / Award</th>
                    <th className="py-3.5 px-4 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className={`divide-y text-xs font-light tracking-wider ${
                  isDark ? 'divide-white/5 text-white/80' : 'divide-zinc-200 text-zinc-800'
                }`}>
                  {processedItems.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => onSelectProject(item)}
                      onMouseEnter={() => setHoveredItem(item)}
                      className={`cursor-pointer transition-colors group ${
                        isDark ? 'hover:bg-white/5 hover:text-white' : 'hover:bg-zinc-50 hover:text-zinc-900'
                      }`}
                    >
                      <td className="py-3 px-4">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className={`w-9 h-12 object-cover border transition-colors ${
                            isDark ? 'border-white/10 group-hover:border-white/40' : 'border-zinc-200 group-hover:border-zinc-400'
                          }`}
                        />
                      </td>

                      <td className="py-3 px-4">
                        <div className={`font-medium text-sm ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                          {item.title}
                        </div>
                        <div className={`text-[10px] font-light truncate max-w-[200px] ${
                          isDark ? 'text-white/40' : 'text-zinc-500'
                        }`}>
                          {item.subtitle}
                        </div>
                      </td>

                      <td className="py-3 px-4 opacity-80">
                        {item.studio}
                      </td>

                      <td className="py-3 px-4 font-mono text-[11px] opacity-60">
                        {item.year}
                      </td>

                      <td className="py-3 px-4">
                        {item.awards && item.awards.length > 0 ? (
                          <span className={`text-[9px] tracking-wider uppercase border px-2 py-0.5 ${
                            isDark ? 'bg-white/5 border-white/10 text-white/90' : 'bg-zinc-100 border-zinc-300 text-zinc-900 font-medium'
                          }`}>
                            {item.awards[0]}
                          </span>
                        ) : (
                          <span className={`text-[10px] ${isDark ? 'text-white/30' : 'text-zinc-400'}`}>Official Release</span>
                        )}
                      </td>

                      <td className="py-3 px-4 text-right">
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

          {/* Right Column: Live Poster Preview Hover Card & Major Industry Awards List */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Hover Card */}
            <div className={`border p-6 ${
              isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <span className={`text-[9px] tracking-[0.3em] uppercase block mb-4 ${
                isDark ? 'text-white/40' : 'text-zinc-500'
              }`}>
                Directory Inspector
              </span>

              {hoveredItem ? (
                <div className="space-y-4">
                  <div className={`relative aspect-[2/3] w-full overflow-hidden border ${
                    isDark ? 'border-white/10 bg-[#0d0d0d]' : 'border-zinc-200 bg-zinc-100'
                  }`}>
                    <img
                      src={hoveredItem.imageUrl}
                      alt={hoveredItem.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className={`text-lg font-light ${isDark ? 'text-white' : 'text-zinc-900'}`}>{hoveredItem.title}</h4>
                    <p className={`text-[10px] tracking-wider uppercase ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>{hoveredItem.categoryLabel} • {hoveredItem.year}</p>
                    <p className={`text-xs font-light mt-2 line-clamp-2 ${isDark ? 'text-white/60' : 'text-zinc-600'}`}>{hoveredItem.description}</p>
                  </div>

                  <button
                    onClick={() => onSelectProject(hoveredItem)}
                    className={`w-full text-[10px] tracking-[0.25em] font-medium py-2.5 uppercase transition-colors ${
                      isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    INSPECT CASE STUDY
                  </button>
                </div>
              ) : (
                <div className={`py-12 text-center text-xs font-light border border-dashed ${
                  isDark ? 'text-white/30 border-white/10' : 'text-zinc-400 border-zinc-300'
                }`}>
                  Hover over any row in the directory to inspect artwork
                </div>
              )}
            </div>

            {/* Major Awards Recognition Box */}
            <div className={`border p-6 space-y-4 ${
              isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <div className={`flex items-center space-x-2 ${isDark ? 'text-white/80' : 'text-zinc-800'}`}>
                <Award className="w-4 h-4 opacity-60" />
                <h4 className={`text-[10px] tracking-[0.25em] font-medium uppercase ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  INDUSTRY RECOGNITION
                </h4>
              </div>

              <div className={`space-y-3 divide-y ${isDark ? 'divide-white/5' : 'divide-zinc-200'}`}>
                {AWARDS_LIST.map((award) => (
                  <div key={award.id} className="pt-2.5 first:pt-0 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>{award.title}</span>
                      <span className={`text-[10px] font-mono ${isDark ? 'opacity-50' : 'text-zinc-500'}`}>{award.year}</span>
                    </div>
                    <div className={`flex items-center justify-between text-[11px] font-light ${
                      isDark ? 'text-white/50' : 'text-zinc-600'
                    }`}>
                      <span>{award.project}</span>
                      <span className="opacity-40">{award.festival}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
