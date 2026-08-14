import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  ShieldAlert, 
  KeyRound, 
  Video, 
  Bot, 
  ArrowUpRight,
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'usb-forensics',
      title: 'USB Forensics Tool (Kernel-Level URB Filtering)',
      category: 'security',
      badge: 'KERNEL / FORENSICS',
      icon: ShieldAlert,
      iconColor: 'text-red-400',
      borderColor: 'hover:border-red-500/50',
      problem: 'Attack surface: USB descriptor and URB sequences enable payload injection at device initialization, bypassing userland controls.',
      tech: ['C (kernel module)', 'Linux USB stack', 'URB filtering', 'eBPF tracing', 'Python telemetry'],
      features: [
        'Kernel-level interception and validation of URB requests',
        'Real-time HID descriptor blocking before device binding',
        'Audit-grade telemetry for forensic reconstruction',
        'Prototype eBPF tracing for detection and analysis'
      ],
      outcome: 'Blocked malicious descriptor PoCs in lab tests and produced structured telemetry for incident response; reduced attack surface for USB-origin payloads.',
      github: 'https://github.com/29REV/USBForensicsTool',
      demo: null
    },
    {
      id: 'password-analyzer',
      title: 'Enhanced Password Vulnerability Analyzer',
      category: 'security',
      badge: 'SECURITY / CRYPTO',
      icon: KeyRound,
      iconColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      problem: 'Attack surface: naive strength meters fail to account for GPU-accelerated permutations and targeted dictionary attacks.',
      tech: ['Python', 'zxcvbn', 'John the Ripper', 'Flask'],
      features: [
        'Hybrid entropy + attack-model analysis combining zxcvbn and JtR-style permutations',
        'GPU-aware crack-time estimation and policy recommendation engine',
        'Flask API for integrations and automated scans'
      ],
      outcome: 'Delivered realistic crack-time estimates and policy recommendations; integrated into demos to reduce weak-credential acceptance.',
      github: 'https://github.com/29REV',
      demo: null
    },
    {
      id: 'hololearn',
      title: 'HoloLearn — Low-latency Holographic Teaching (IEEE Finalist)',
      category: 'ai-system',
      badge: 'IEEE FINALIST / STREAMING',
      icon: Video,
      iconColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      problem: 'High-cost immersive hardware and high-latency pipelines prevent scalable remote holographic instruction.',
      tech: ['Flask', 'OBS Studio', 'WebRTC/RTMP', 'Adaptive bitrate'],
      features: [
        'Multi-camera synchronization and projection transform pipeline',
        'Low-latency encoding & bandwidth-adaptive streaming',
        'Control plane for instructor interaction and session management'
      ],
      outcome: 'IEEE Project Expo finalist; prototype validated sub-300ms interactive latency in constrained-network demos.',
      github: 'https://github.com/29REV',
      demo: null
    },
    {
      id: 'election-navigator',
      title: 'ElectionNavigatorAI — Real-time Voter Guidance',
      category: 'ai-system',
      badge: 'AI / CLOUD',
      icon: Bot,
      iconColor: 'text-purple-400',
      borderColor: 'hover:border-purple-500/50',
      problem: 'Attack surface: fragmented voter rules and inconsistent guidance create friction and misinformation during registration and polling.',
      tech: ['Python', 'LLM API', 'Firebase Realtime DB', 'GCP Cloud Run'],
      features: [
        'NLU pipeline mapping free-text queries to structured polling rules',
        'Multilingual response pipeline with verification and caching to reduce hallucinations',
        'Cloud deployment for availability and low-latency responses'
      ],
      outcome: 'Pilot deployment served live queries with structured, verified responses and reduced manual follow-ups in the pilot.',
      github: 'https://github.com/29REV/ElectionNavigatorAI',
      demo: 'https://election-navigator-963587030858.asia-south1.run.app/'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-[#030712] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>// FEATURED_SYSTEM_PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Security &amp; Development <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            High-impact software tools engineered for threat detection, low-level hardware filtering, and AI-driven automation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'security', label: 'Security & Forensics' },
            { id: 'ai-system', label: 'AI & Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id);
              }}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
                filter === tab.id
                  ? 'bg-emerald-950/80 border border-emerald-400 text-emerald-300 font-bold shadow-[0_0_15px_rgba(0,255,102,0.2)]'
                  : 'bg-[#0b0f19] border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group rounded-2xl bg-[#0b0f19] border border-slate-800 ${project.borderColor} p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* Header Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-[#030712] border border-slate-800 ${project.iconColor} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-300 font-bold">
                        {project.badge}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProject(project);
                      }}
                      className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 group-hover:text-emerald-300"
                    >
                      <span>INSPECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-emerald-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Problem summary */}
                  <div className="mb-4">
                    <span className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Problem Statement:</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
                      {project.problem}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#030712] border border-slate-800 text-emerald-400/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Features list */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    <span className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Key Features:</span>
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold font-mono">›</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#030712] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#030712] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/60 font-mono text-xs font-bold transition-all"
                  >
                    View Details
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Inspection Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
