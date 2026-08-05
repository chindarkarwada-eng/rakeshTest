import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ArchiveDirectory } from './components/ArchiveDirectory';
import { AboutSection } from './components/AboutSection';
import { StudioWorkbench } from './components/StudioWorkbench';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PortfolioItem } from './types';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      isDark 
        ? 'bg-[#0d0d0d] text-white/90 selection:bg-white selection:text-black' 
        : 'bg-[#f8f9fa] text-zinc-900 selection:bg-zinc-900 selection:text-white'
    }`}>
      
      {/* Sticky Header Navigation */}
      <Header activeSection="work" />

      <main>
        {/* Cinematic Hero Entrance & Carousel */}
        <Hero
          onSelectProject={(item) => setSelectedProject(item)}
        />

        {/* Selected Portfolio Works Grid & View Modes */}
        <PortfolioGrid
          onSelectProject={(item) => setSelectedProject(item)}
        />

        {/* Searchable Key Art Archive Directory (IMP Awards Style) */}
        <ArchiveDirectory
          onSelectProject={(item) => setSelectedProject(item)}
        />

        {/* About Rakesh Manjrekar & Capabilities */}
        <AboutSection />

        {/* Interactive Studio Lighting & Color Grade Workbench */}
        <StudioWorkbench />
      </main>

      {/* Footer & Direct Contact Block */}
      <Footer />

      {/* Interactive Case Study & Artwork Lightbox Modal */}
      <CaseStudyModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(item) => setSelectedProject(item)}
      />

    </div>
  );
}

