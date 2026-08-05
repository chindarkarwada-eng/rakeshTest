import React from 'react';
import { X, Download, Printer, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ART_DIRECTOR_INFO, EXPERIENCES, AWARDS_LIST } from '../data/portfolioData';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      
      <div className="relative w-full max-w-4xl bg-[#151515] border border-white/10 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#151515] sticky top-0 z-20">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-white/80"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">
              OFFICIAL CV & CREDITS FILMOGRAPHY // RAKESH MANJREKAR
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="bg-[#0d0d0d] hover:bg-white/10 text-white text-[10px] tracking-[0.15em] px-3 py-1.5 border border-white/10 flex items-center space-x-2 uppercase"
            >
              <Printer className="w-3.5 h-3.5 opacity-60" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-white/50 hover:text-white"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-8 md:p-12 overflow-y-auto flex-1 space-y-10 bg-[#0d0d0d] text-white/80 font-sans print:bg-white print:text-black">
          
          {/* Header CV Block */}
          <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                RAKESH MANJREKAR
              </h1>
              <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-medium mt-1">
                LEAD ART DIRECTOR & KEY ART SPECIALIST
              </p>
              <p className="text-xs text-white/60 font-light mt-2 max-w-md leading-relaxed">
                12+ years specializing in theatrical movie posters, OTT series visual identities, and entertainment marketing campaigns.
              </p>
            </div>

            <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-[#E50914]" />
                <span className="text-white font-semibold">rakeshmanjrekar.com</span>
              </p>
              <p className="flex items-center sm:justify-end space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>rakesh@rakeshmanjrekar.com</span>
              </p>
              <p className="flex items-center sm:justify-end space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>+1 (310) 892-4751</span>
              </p>
              <p className="flex items-center sm:justify-end space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Mumbai, India</span>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E50914] font-bold">
              01. EXECUTIVE SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              Born and raised in Mumbai, India (Y.O.B. 1987), Rakesh Manjrekar is a Lead Art Director and Key Art Specialist with 15+ years of experience leading visual storytelling, concept design, and key art for film studios, TV networks, and brand campaigns. BFA Painting graduate from Sir J. J. School of Art, Mumbai (2009). Proven track record designing movie publicity campaigns for top Bollywood movies, UTV, Times of India, NFDC (Cannes Film Festival showcase), 9XM, ABELSOFTCON, and major international key art releases.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E50914] font-bold">
              02. ACADEMIC EDUCATION & FINE ART FOUNDATION
            </h3>
            <div className="p-4 bg-zinc-950 border border-zinc-900 rounded space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <span className="text-white font-bold text-sm">Bachelor in Fine Arts (BFA) — Majored in Painting</span>
                <span className="text-zinc-500">2005 — 2009 | Mumbai, India</span>
              </div>
              <p className="text-xs text-zinc-400 font-light">
                Sir J. J. School of Art, Mumbai (Graduated 2009). Awarded Lord Harding Prize (2008), Dolly Casetjee Prize (2009), 3rd Prize at Kaladeep Monsoon Show (2009), and Special Merit Certificate (2008).
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E50914] font-bold">
              03. WORK EXPERIENCE & INDUSTRY ROLES
            </h3>

            <div className="space-y-6 divide-y divide-zinc-900">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="pt-4 first:pt-0 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold text-sm font-display">{exp.role} — <span className="text-[#E50914]">{exp.company}</span></span>
                    <span className="text-zinc-500">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-zinc-400 font-light space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Accolades */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E50914] font-bold">
              04. HONORS, AWARDS & EXHIBITIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AWARDS_LIST.map((award) => (
                <div key={award.id} className="p-3 bg-zinc-950 rounded border border-zinc-900 text-xs font-mono">
                  <span className="text-amber-400 font-bold block">{award.title} ({award.year})</span>
                  <span className="text-white block">{award.project}</span>
                  <span className="text-zinc-500 text-[10px]">{award.festival}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Proficiency */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E50914] font-bold">
              05. TECHNICAL PROFICIENCY & SOFTWARE
            </h3>
            <p className="text-xs text-zinc-300 font-mono">
              Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects), Cinema 4D, Octane Render, ZBrush, Midjourney Studio Concepting, High-Resolution Color Grading, Print Pre-press.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
