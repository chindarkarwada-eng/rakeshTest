import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageSquare, Phone, Mail } from 'lucide-react';
import { Category, InquiryData } from '../types';

interface InquiryModalProps {
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'key-art',
    budgetRange: '$25,000 — $50,000',
    timeline: '1 — 2 Months',
    briefDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      
      <div className="relative w-full max-w-2xl bg-[#151515] border border-white/10 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#151515]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-white/80"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-light">
              COMMISSION BRIEF // RAKESH MANJREKAR STUDIO
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/50 hover:text-white"
            aria-label="Close Inquiry Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 border border-white/20 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 opacity-80" />
              </div>

              <div>
                <h3 className="text-2xl font-light text-white tracking-tight">BRIEF RECEIVED</h3>
                <p className="text-xs text-white/60 font-light mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. Rakesh Manjrekar will review your campaign brief and respond within 24 hours.
                </p>
              </div>

              <div className="p-4 bg-[#0d0d0d] border border-white/5 max-w-md mx-auto text-left text-xs font-light tracking-wider text-white/60 space-y-1">
                <p><strong className="text-white">DIRECT EMAIL:</strong> rakesh@rakeshmanjrekar.com</p>
                <p><strong className="text-white">WHATSAPP:</strong> +1 (310) 892-4751</p>
              </div>

              <button
                onClick={onClose}
                className="bg-white text-black font-medium text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 transition-colors hover:bg-white/90"
              >
                RETURN TO PORTFOLIO
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <h3 className="text-xl font-light text-white tracking-tight">START A KEY ART PROJECT</h3>
                <p className="text-xs text-white/50 font-light mt-1">
                  Fill in the project scope below to receive a custom proposal and campaign timeline.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1.5">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 text-white text-xs font-light px-3 py-2.5 focus:outline-none focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1.5">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 text-white text-xs font-light px-3 py-2.5 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1.5">STUDIO / COMPANY</label>
                  <input
                    type="text"
                    placeholder="Warner Bros / HBO / Agency"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 text-white text-xs font-light px-3 py-2.5 focus:outline-none focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1.5">PROJECT TYPE</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value as Category })}
                    className="w-full bg-[#0d0d0d] border border-white/10 text-white/90 text-xs font-light px-3 py-2.5 focus:outline-none focus:border-white/30"
                  >
                    <option value="key-art" className="bg-[#151515] text-white">Theatrical Key Art Poster</option>
                    <option value="ott-series" className="bg-[#151515] text-white">OTT / Streaming Series Identity</option>
                    <option value="advertising" className="bg-[#151515] text-white">Commercial Brand Campaign</option>
                    <option value="branding" className="bg-[#151515] text-white">Steelbook & Packaging Design</option>
                    <option value="concept" className="bg-[#151515] text-white">Matte Painting & Concept Art</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1.5">ESTIMATED BUDGET</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 text-white/90 text-xs font-light px-3 py-2.5 focus:outline-none focus:border-white/30"
                  >
                    <option value="$15,000 — $25,000" className="bg-[#151515] text-white">$15,000 — $25,000</option>
                    <option value="$25,000 — $50,000" className="bg-[#151515] text-white">$25,000 — $50,000</option>
                    <option value="$50,000 — $100,000" className="bg-[#151515] text-white">$50,000 — $100,000</option>
                    <option value="$100,000+" className="bg-[#151515] text-white">$100,000+ Full Studio Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1.5">TIMELINE</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 text-white/90 text-xs font-light px-3 py-2.5 focus:outline-none focus:border-white/30"
                  >
                    <option value="Immediate Rush (1-2 Weeks)" className="bg-[#151515] text-white">Immediate Rush (1-2 Weeks)</option>
                    <option value="1 — 2 Months" className="bg-[#151515] text-white">1 — 2 Months</option>
                    <option value="Q3 / Q4 Planning" className="bg-[#151515] text-white">Q3 / Q4 Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1.5">CREATIVE SCOPE / BRIEF DETAILS *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project narrative, target deliverables, key art references, or synopsis..."
                  value={formData.briefDetails}
                  onChange={(e) => setFormData({ ...formData, briefDetails: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 text-white text-xs font-light p-3 focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/5">
                <span className="text-[10px] tracking-wider text-white/40">
                  DIRECT: rakesh@rakeshmanjrekar.com
                </span>

                <button
                  type="submit"
                  className="bg-white hover:bg-white/90 text-black text-[10px] tracking-[0.2em] font-medium uppercase px-6 py-3 transition-colors flex items-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SUBMIT BRIEF</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
