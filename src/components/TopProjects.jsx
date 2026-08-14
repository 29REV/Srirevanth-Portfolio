import React from 'react';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ title, impact, tech, problem, contribution, outcome, github }) {
  return (
    <div className="rounded-2xl bg-[#0b0f19] border border-slate-800 p-6 shadow-md">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-mono font-bold text-white">{title}</h3>
          <p className="text-slate-400 text-sm mt-1">{impact}</p>
        </div>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      <div className="text-sm text-slate-300 space-y-2">
        <div>
          <strong className="text-slate-400">Tech:</strong> <span className="text-emerald-300">{tech.join(' · ')}</span>
        </div>
        <div>
          <strong className="text-slate-400">Problem:</strong> {problem}
        </div>
        <div>
          <strong className="text-slate-400">Contribution:</strong> {contribution}
        </div>
        <div>
          <strong className="text-slate-400">Outcome:</strong> {outcome}
        </div>
      </div>
    </div>
  );
}

export default function TopProjects() {
  const projects = [
    {
      id: 'usb-forensics',
      title: 'USB Forensics Tool (Kernel-Level USB Defense)',
      impact: 'Blocks hardware-level payload injection by validating URB/HID descriptors before kernel init.',
      tech: ['C (kernel module)', 'Linux USB stack', 'eBPF', 'Python telemetry'],
      problem: 'BadUSB/RubberDucky style devices exploit descriptor/URB sequences to inject payloads at device init, bypassing userland protections.',
      contribution: 'Implemented URB interception & validation, real-time HID descriptor blocking, and forensic telemetry ingestion.',
      outcome: 'PoC lab tests prevented unauthorized HID initialization and produced audit-grade telemetry for incident response.',
      github: 'https://github.com/29REV/USBForensicsTool'
    },
    {
      id: 'hololearn',
      title: 'HoloLearn (IEEE Finalist)',
      impact: 'Delivers low-latency 3D instructor projection on commodity hardware for remote classrooms.',
      tech: ['Flask', 'OBS Studio', 'WebRTC/RTMP', 'Adaptive Bitrate'],
      problem: 'Expensive immersive hardware and high-latency pipelines block scalable remote holographic teaching.',
      contribution: 'Designed multi-camera sync, low-latency encoding pipeline, and control plane for remote projection; led demo deployment.',
      outcome: 'Finalist at IEEE Project Expo; validated interactive demo under constrained bandwidth.',
      github: '#'
    },
    {
      id: 'election-navigator',
      title: 'ElectionNavigatorAI',
      impact: 'Provides accurate, localized voter guidance via an AI query pipeline with structured rule mapping.',
      tech: ['Python', 'LLM API', 'Firebase', 'GCP'],
      problem: 'Voter instructions are fragmented and inconsistent; citizens need accurate, localized guidance in real time.',
      contribution: 'Built NLU query pipeline, rule-mapping DB, multi-lingual response handling, and cloud deployment.',
      outcome: 'Pilot deployment served live queries with improved response consistency and reduced manual follow-ups.',
      github: 'https://github.com/29REV/ElectionNavigatorAI'
    }
  ];

  return (
    <section id="top-projects" className="py-20 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <span>// TOP_PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white">Top Projects — High-impact Security & Systems Work</h2>
          <p className="text-slate-400 mt-2">Three production-grade projects demonstrating kernel-level defense, systems engineering, and secure AI pipelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
