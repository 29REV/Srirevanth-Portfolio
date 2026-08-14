import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Terminal, 
  Brain, 
  Cpu, 
  GraduationCap, 
  Award, 
  Layers, 
  Binary,
  CheckCircle2
} from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      title: 'USB Forensic Tool',
      desc: 'Intercepts & blocks malicious USB payloads before kernel access using URB filtering.',
      icon: Terminal,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    },
    {
      title: 'Password Vulnerability Analyzer',
      desc: 'Simulates GPU dictionary attacks with zxcvbn + John the Ripper engines.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      title: 'AI Security Applications',
      desc: 'Integrates LLM models (Gemini API) with Firebase for intelligent threat interaction.',
      icon: Brain,
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      title: 'System & Backend Design',
      desc: 'Proficient in Java Spring Boot, C system APIs, Data Structures & Algorithms.',
      icon: Cpu,
      color: 'text-amber-400',
      border: 'border-amber-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030712]">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// SYSTEM_SPECIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio & Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 backdrop-blur-xl relative overflow-hidden shadow-xl font-sans">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>
              
              <h3 className="text-xl font-mono font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Cybersecurity &amp; Backend Engineer
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                I am a dedicated Computer Science student specializing in <strong className="text-emerald-400">Cybersecurity</strong> and <strong className="text-cyan-400">Backend System Engineering</strong> at Dr. N.G.P. Institute of Technology. My technical journey is driven by a deep fascination with how security protocols interact with low-level kernel boundaries and intelligent automation.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                From developing kernel-level USB request filtering tools to building AI-assisted security analyzers, I focus on constructing resilient defense mechanisms, optimizing system architectures, and applying artificial intelligence to eliminate real-world security blind spots.
              </p>

              {/* Education Box */}
              <div className="p-4 rounded-xl bg-[#030712] border border-emerald-500/30 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-white">
                    B.E Computer Science &amp; Engineering (Cyber Security)
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Dr. N.G.P. Institute of Technology, Tamil Nadu, India
                  </p>
                  <div className="flex items-center gap-3 mt-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                      CGPA: 8.25
                    </span>
                    <span className="text-slate-400">Expected: 2028</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights & Competency Matrix */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-xl bg-[#0b0f19] border ${item.border} hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 group shadow-lg`}
                >
                  <div className={`p-3 rounded-lg bg-[#030712] border border-slate-800 w-fit mb-3 ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-mono text-sm font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
