import { Shield, ArrowUp, Mail } from 'lucide-react';
import { playUiSound } from '../utils/audio';

export default function Footer({ soundEnabled }) {
  const scrollToTop = () => {
    playUiSound('click', soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0f19] border-t border-slate-800/80 py-12 relative font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white tracking-wider">SRIREVANTH ARAMUTHAKANNAN</span>
              <span className="block text-[10px] text-emerald-400">CYBERSECURITY ENGINEER // BACKEND DEVELOPER</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#soc" className="hover:text-emerald-400 transition-colors">SOC Live</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#030712] border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all flex items-center gap-2"
            title="Back to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Srirevanth Aramuthakannan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-emerald-400 font-bold">React + Vite + Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
