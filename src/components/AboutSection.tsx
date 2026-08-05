import React from 'react';
import { MapPin } from 'lucide-react';
import { ART_DIRECTOR_INFO, TESTIMONIALS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface AboutSectionProps {}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const services = [
    {
      title: "Theatrical Posters",
      description: "Explorative conceptual main sheet and pay-off poster designs for feature films and global theatrical releases."
    },
    {
      title: "OTT & Streaming Visuals",
      description: "High-impact campaign visual suites for Netflix, HBO Max, and Apple TV+ series, optimized for digital & outdoor OOH."
    },
    {
      title: "Title Treatments & Typography",
      description: "Bespoke logo marks, custom lettering, and metallic/3D title treatments tailored for cinematic branding."
    },
    {
      title: "Matte Painting & Compositing",
      description: "High-end photo compositing, environmental matte painting, procedural lighting, and 3D asset integration."
    },
    {
      title: "Campaign Creative Direction",
      description: "End-to-end creative direction guiding campaign strategy, photoshoot supervision, and agency team execution."
    },
    {
      title: "Gaming & Brand Steelbooks",
      description: "Collector's edition artwork, steelbook packaging design, and visual brand identity for AAA game releases."
    }
  ];

  return (
    <section id="about" className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0d0d0d] border-white/5' : 'bg-[#f8f9fa] border-zinc-200'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b ${
          isDark ? 'border-white/5' : 'border-zinc-200'
        }`}>
          <div>
            <span className={`text-[9px] tracking-[0.3em] font-light uppercase block mb-2 ${
              isDark ? 'opacity-50 text-white' : 'text-zinc-500'
            }`}>
              Art Direction & Design
            </span>
            <h2 className={`text-4xl sm:text-6xl font-light tracking-tighter ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              RAKESH <span className={`italic font-serif pl-2 ${
                isDark ? 'opacity-80' : 'text-zinc-800'
              }`}>Manjrekar</span>
            </h2>
          </div>
        </div>

        {/* Profile Grid: Portrait + Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Portrait Photo */}
          <div className="lg:col-span-5 relative group">
            <div className={`relative border overflow-hidden ${
              isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <img
                src={ART_DIRECTOR_INFO.portraitUrl}
                alt={ART_DIRECTOR_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full aspect-[3/4] object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] tracking-[0.3em] opacity-60 uppercase text-white block mb-1">
                  Art Director & Lead Designer
                </span>
                <h3 className="text-xl font-light text-white">
                  Rakesh Manjrekar
                </h3>
                <p className="text-[10px] tracking-wider text-white/50 mt-1 flex items-center space-x-2">
                  <MapPin className="w-3 h-3 opacity-40" />
                  <span> Mumbai • Global Commissions</span>
                </p>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-white/20 group-hover:border-white/50 transition-colors pointer-events-none" />
            </div>
          </div>

          {/* Bio Content & Statement */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className={`p-8 border-l-2 space-y-3 ${
              isDark 
                ? 'bg-[#151515] border-white/30 text-white/90' 
                : 'bg-white border-zinc-800 text-zinc-800 shadow-sm'
            }`}>
              <blockquote className={`text-xl sm:text-2xl font-light font-serif italic leading-relaxed ${
                isDark ? 'text-white/90' : 'text-zinc-800'
              }`}>
                "{ART_DIRECTOR_INFO.statement}"
              </blockquote>
              <span className={`text-[10px] tracking-[0.25em] block text-right uppercase ${
                isDark ? 'text-white/40' : 'text-zinc-500'
              }`}>— RAKESH MANJREKAR</span>
            </div>

            <p className={`text-sm font-light leading-relaxed ${
              isDark ? 'text-white/70' : 'text-zinc-700'
            }`}>
              {ART_DIRECTOR_INFO.bio}
            </p>

            <p className={`text-xs font-light leading-relaxed ${
              isDark ? 'text-white/50' : 'text-zinc-600'
            }`}>
              A graduate of the prestigious <strong className={isDark ? 'text-white font-medium' : 'text-zinc-900 font-medium'}>Sir J. J. School of Art, Mumbai</strong> (BFA in Painting, 2009), Rakesh combines classic fine-art composition, anatomy, and color theory with modern digital key art workflow. Having collaborated with leading entertainment brands and agencies, he handles projects from pencil thumbnails to photo shoot direction, high-end compositing, and custom typography.
            </p>

            {/* Key Statistics Bar */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t ${
              isDark ? 'border-white/5' : 'border-zinc-200'
            }`}>
              {ART_DIRECTOR_INFO.stats.map((stat, idx) => (
                <div key={idx} className={`p-4 border text-center ${
                  isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
                }`}>
                  <span className={`text-2xl font-light block ${isDark ? 'text-white' : 'text-zinc-900'}`}>{stat.value}</span>
                  <span className={`text-[9px] tracking-[0.2em] uppercase mt-1 block ${
                    isDark ? 'text-white/40' : 'text-zinc-500'
                  }`}>{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Core Services Matrix */}
        <div className="mb-24">
          <span className={`text-[9px] tracking-[0.3em] font-light uppercase block mb-2 ${
            isDark ? 'opacity-50 text-white' : 'text-zinc-500'
          }`}>Specializations & Disciplines</span>
          <h2 className={`text-3xl sm:text-4xl font-light mb-10 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            CAPABILITIES <span className={`italic font-serif pl-2 ${
              isDark ? 'opacity-80' : 'text-zinc-800'
            }`}>& Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className={`p-8 border transition-all space-y-4 group relative ${
                isDark 
                  ? 'bg-[#151515] border-white/5 hover:border-white/20' 
                  : 'bg-white border-zinc-200 shadow-sm hover:border-zinc-400'
              }`}>
                <div className={`text-[10px] tracking-[0.3em] font-mono ${
                  isDark ? 'text-white/40' : 'text-zinc-400'
                }`}>
                  0{idx + 1}
                </div>
                <h4 className={`text-lg font-light ${isDark ? 'text-white' : 'text-zinc-900'}`}>{service.title}</h4>
                <p className={`text-xs font-light leading-relaxed ${
                  isDark ? 'text-white/50' : 'text-zinc-600'
                }`}>{service.description}</p>
                <div className={`absolute top-6 right-6 w-8 h-8 border-t border-r transition-colors pointer-events-none ${
                  isDark ? 'border-white/10 group-hover:border-white/40' : 'border-zinc-200 group-hover:border-zinc-400'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className={`pt-16 border-t ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
          <span className={`text-[9px] tracking-[0.3em] font-light uppercase block mb-2 ${
            isDark ? 'opacity-50 text-white' : 'text-zinc-500'
          }`}>Industry Endorsements</span>
          <h2 className={`text-3xl sm:text-4xl font-light mb-10 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            EXECUTIVE <span className={`italic font-serif pl-2 ${
              isDark ? 'opacity-80' : 'text-zinc-800'
            }`}>Testimonials</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className={`p-8 border space-y-6 flex flex-col justify-between ${
                isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-zinc-200 shadow-sm'
              }`}>
                <p className={`text-xs font-light italic leading-relaxed font-serif ${
                  isDark ? 'text-white/70' : 'text-zinc-700'
                }`}>
                  "{t.quote}"
                </p>

                <div className={`pt-4 border-t ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
                  <h5 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.author}</h5>
                  <span className={`text-[10px] tracking-wider block mt-0.5 ${
                    isDark ? 'text-white/40' : 'text-zinc-500'
                  }`}>{t.title}</span>
                  <span className={`text-[10px] tracking-wider font-mono mt-0.5 block ${
                    isDark ? 'text-white/60' : 'text-zinc-700'
                  }`}>{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
