import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  ShieldAlert, 
  Wrench, 
  Terminal, 
  CheckCircle, 
  Sparkles,
  Server,
  Lock,
  Cpu
} from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Competencies', icon: Sparkles },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'web', name: 'Web & Backend', icon: Server },
    { id: 'security', name: 'Security & Core', icon: Lock },
    { id: 'tools', name: 'Tools & Platforms', icon: Wrench },
  ];

  const skillData = [
    // Languages
    { name: 'Java', cat: 'languages', tag: 'Core & OOP', desc: 'Enterprise backend, Spring Boot, OOP design patterns.' },
    { name: 'Python', cat: 'languages', tag: 'AI & Scripting', desc: 'Security automation, zxcvbn integration, Gemini API, Flask.' },
    { name: 'C', cat: 'languages', tag: 'System & Kernel', desc: 'Low-level USB URB request handling, system programming.' },
    
    // Web & Backend
    { name: 'Spring Boot', cat: 'web', tag: 'Framework', desc: 'REST API design, microservices, enterprise Java backend.' },
    { name: 'Flask', cat: 'web', tag: 'Framework', desc: 'Lightweight Web APIs, video streaming, HoloLearn platform.' },
    { name: 'JavaScript', cat: 'web', tag: 'Frontend/Logic', desc: 'Dynamic web interfaces, React applications, async state.' },
    { name: 'HTML & CSS', cat: 'web', tag: 'Web Core', desc: 'Modern responsive styling, cybersecurity UI dashboards.' },

    // Security & Core Concepts
    { name: 'Networking', cat: 'security', tag: 'Protocols', desc: 'TCP/IP, OSI model, packet flow, Cisco Networking Certified.' },
    { name: 'Cryptography', cat: 'security', tag: 'Encryption', desc: 'AES, RSA, hash algorithms, password entropy evaluation.' },
    { name: 'Data Structures & Algorithms', cat: 'security', tag: 'Problem Solving', desc: 'DSA problems solved on GeeksforGeeks & LeetCode.' },
    { name: 'Operating Systems', cat: 'security', tag: 'Kernel & Process', desc: 'Process management, memory safety, Linux system calls.' },
    { name: 'DBMS & SQL', cat: 'security', tag: 'Database', desc: 'Relational data modeling, SQL queries, index optimization.' },
    { name: 'System Design', cat: 'security', tag: 'Architecture', desc: 'Scalable service decoupling, stream pipelines, security controls.' },
    { name: 'Object-Oriented Programming', cat: 'security', tag: 'OOP Design', desc: 'Clean architecture, encapsulation, polymorphism, design patterns.' },

    // Tools & Platforms
    { name: 'Git & GitHub', cat: 'tools', tag: 'VCS', desc: 'Version control, repository management, collaborative workflows.' },
    { name: 'Firebase', cat: 'tools', tag: 'BaaS / Database', desc: 'Realtime database, authentication, cloud integration.' },
    { name: 'Google Cloud Platform', cat: 'tools', tag: 'Cloud Infra', desc: 'Cloud deployment, Gemini API integration, hosting.' },
    { name: 'John the Ripper & zxcvbn', cat: 'tools', tag: 'Sec Tools', desc: 'Password security testing, attack simulation engines.' },
    { name: 'USB Protocols & URB', cat: 'tools', tag: 'Hardware Sec', desc: 'USB request block interceptors, device descriptor filtering.' },
    { name: 'OBS & Streaming Tech', cat: 'tools', tag: 'Multimedia', desc: 'Multi-camera WebRTC streaming, holographic projection setup.' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillData 
    : skillData.filter(s => s.cat === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#080c14] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>// TECHNICAL_COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Skills &amp; <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm transition-all duration-300 ${
                  isActive 
                    ? 'bg-cyan-950/80 border border-cyan-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]' 
                    : 'bg-[#0b0f19] border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-5 rounded-2xl bg-[#0b0f19] border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all group font-sans"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping"></span>
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-400 font-bold">
                    {skill.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[36px]">
                  {skill.desc}
                </p>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
