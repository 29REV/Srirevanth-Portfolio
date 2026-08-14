import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);

  if (!project) return null;

  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    // Focus the modal container
    modalRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        // Simple focus trap: keep focus inside modal
        const focusable = modalRef.current.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      // return focus
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md" role="presentation">
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`Project details: ${project.title}`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-3xl rounded-2xl bg-[#0b0f19] border border-emerald-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden font-sans my-8"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-emerald-400 font-bold tracking-wide">
                PROJECT_SPECIFICATION // #{project.id}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-red-500/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Problem Statement Box */}
        <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold mb-1">
            <AlertTriangle className="w-4 h-4" /> PROBLEM STATEMENT
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <span className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Tech Architecture Stack:</span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <span className="block text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">Key Technical Features:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#030712] border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome & Impact */}
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 mb-6">
          <span className="block text-xs font-mono text-emerald-400 font-bold mb-1 uppercase tracking-wider">Outcome &amp; Security Impact:</span>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.outcome}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-emerald-400 hover:border-emerald-400 font-mono text-xs transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>SOURCE REPOSITORY</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold hover:bg-emerald-400 transition-all shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>

      </motion.div>
    </div>
  );
}
