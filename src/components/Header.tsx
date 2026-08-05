import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#work' },
    { name: 'Archive & Directory', href: '#archive' },
    { name: 'About & Studio', href: '#about' },
    { name: 'Lighting Lab', href: '#workbench' },
    { name: 'Contact', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? (isDark 
              ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' 
              : 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-4 shadow-md') 
          : (isDark 
              ? 'bg-gradient-to-b from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent py-6' 
              : 'bg-gradient-to-b from-white via-white/80 to-transparent py-6')
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <a href="#" className="group flex items-center space-x-3">
            <div className="flex flex-col">
              <h1 className={`text-xs tracking-[0.4em] font-medium uppercase group-hover:opacity-100 transition-opacity ${
                isDark ? 'text-white opacity-90' : 'text-zinc-900 opacity-90'
              }`}>
                RAKESH MANJREKAR
              </h1>
              <span className={`text-[10px] tracking-[0.2em] uppercase mt-0.5 ${
                isDark ? 'text-white/40' : 'text-zinc-500'
              }`}>
                Art Direction
              </span>
            </div>
          </a>

          {/* Right Navigation & Theme Switcher */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8 text-[10px] tracking-[0.3em] font-light uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-opacity relative py-1 hover:border-b pb-1 ${
                    isDark 
                      ? 'text-white/80 hover:text-white hover:border-white/40' 
                      : 'text-zinc-700 hover:text-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Theme Toggle Button Desktop */}
            <button
              onClick={toggleTheme}
              className={`p-2 border rounded-full transition-all flex items-center justify-center ${
                isDark 
                  ? 'border-white/15 bg-white/5 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/10' 
                  : 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-200'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 border rounded-full transition-all flex items-center justify-center ${
                isDark 
                  ? 'border-white/15 bg-white/5 text-white/80 hover:text-white' 
                  : 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:text-zinc-900'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 border transition-colors ${
                isDark 
                  ? 'border-white/10 text-white/80 hover:text-white' 
                  : 'border-zinc-300 text-zinc-700 hover:text-zinc-900'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300 ${
          isDark 
            ? 'bg-[#0d0d0d] border-white/10' 
            : 'bg-white border-zinc-200 shadow-lg'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-xs font-light tracking-[0.2em] uppercase py-2 border-b ${
                isDark 
                  ? 'text-white/80 hover:text-white border-white/5' 
                  : 'text-zinc-700 hover:text-zinc-900 border-zinc-100'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
