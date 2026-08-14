import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Terminal, 
  Download, 
  ChevronRight, 
  Code2, 
  Cpu, 
  Lock,
  ExternalLink,
  Sparkles,
  Play
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function HeroSection() {
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'Security Software Engineer';
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'INIT SRIREVANTH_SEC_KERNEL v4.2.0-release' },
    { type: 'sys', text: 'AUTHENTICATED USER: SRIREVANTH ARAMUTHAKANNAN' },
    { type: 'sys', text: 'TYPE "help" TO SEE AVAILABLE COMMANDS.' }
  ]);

  // Typing effect for title
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, []);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${commandInput}` }];

    if (cmd === 'help') {
      newLogs.push({ type: 'res', text: 'Available commands: projects, skills, resume, contact, clear, whoami' });
    } else if (cmd === 'whoami') {
      newLogs.push({ type: 'res', text: 'Sri Revanth A - Security Software Engineer (B.E @ Dr.NGPIT, CGPA: 8.25)' });
    } else if (cmd === 'projects') {
      newLogs.push({ type: 'res', text: 'Loading projects: 1. USB Forensic Tool, 2. Enhanced Password Analyzer, 3. HoloLearn, 4. Election Navigator AI' });
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'skills') {
      newLogs.push({ type: 'res', text: 'Core Stack: Java, Python, C, Spring Boot, Cryptography, Networking, OS, URB Filtering, Gemini API' });
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'resume') {
      newLogs.push({ type: 'res', text: 'Downloading resume PDF...' });
      window.open('/Srirevanth_Resume.pdf', '_blank');
    } else if (cmd === 'contact') {
      newLogs.push({ type: 'res', text: 'Email: srirevanth2908@gmail.com | Location: Coimbatore, TN' });
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setCommandInput('');
      return;
    } else {
      newLogs.push({ type: 'err', text: `Command not recognized: "${cmd}". Type "help" for options.` });
    }

    setTerminalLogs(newLogs);
    setCommandInput('');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-500/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 text-[11px] font-mono mb-6 tracking-[0.12em] uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <ShieldAlert className="w-3.5 h-3.5 text-teal-400" />
              <span>SECURE SOFTWARE ENGINEERING</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-white tracking-tight leading-tight mb-3">
              Srirevanth Aramuthakannan
            </h1>

            {/* Role */}
            <div className="text-slate-100 font-mono text-lg sm:text-xl font-semibold mb-4">
              Security Software Engineer
            </div>

            {/* Positioning (single powerful line) */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-6 font-sans">
              I build security-focused tools, AI applications, and reliable software systems with an emphasis on practical problem solving.
            </p>

            {/* CTA Buttons: Resume, GitHub, Contact */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="/Srirevanth_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-mono text-sm font-bold bg-emerald-500 text-black shadow-[0_0_18px_rgba(0,255,102,0.28)] hover:bg-emerald-400 transition-all"
              >
                <Download className="w-4 h-4 text-black" />
                <span>RESUME</span>
              </a>

              <a
                href="https://github.com/29REV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-sm font-semibold bg-[#0b0f19] text-emerald-400 border border-slate-800 hover:text-emerald-300 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB</span>
              </a>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-sm font-medium bg-transparent text-slate-300 border border-slate-800 hover:border-emerald-400 hover:text-emerald-400 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>CONTACT</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full font-sans">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">Connect:</span>
              
              <a 
                href="https://github.com/29REV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0b0f19] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(0,255,102,0.2)] transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a 
                href="https://www.linkedin.com/in/srirevanth-aramuthakannan-430383316" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0b0f19] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a 
                href="https://www.geeksforgeeks.org/profile/srirevanth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-[#0b0f19] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all font-mono text-xs flex items-center gap-1.5"
                title="GeeksforGeeks Profile"
              >
                <span className="font-bold text-emerald-400">GFG</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">DSA Problems</span>
              </a>

              <a 
                href="https://leetcode.com/u/SRIREVANTHA/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-[#0b0f19] border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all font-mono text-xs font-bold"
                title="LeetCode Profile"
              >
                LeetCode
              </a>
            </div>

          </motion.div>

          {/* Right Image + Cyber HUD Frame Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Outer Glow Container */}
            <div className="relative group w-72 sm:w-80 lg:w-88">
              
              {/* Rotating cyber ring effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-slate-500/15 via-cyan-500/10 to-teal-400/15 opacity-40 blur-lg group-hover:opacity-55 transition-opacity"></div>
              
              {/* HUD Card Container */}
              <div className="relative rounded-2xl bg-[#0b0f19] border border-slate-800 p-4 shadow-xl overflow-hidden backdrop-blur-xl">
                
                {/* Profile Photo Wrapper */}
                <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
                  <img 
                    src="/srirevanth.jpg" 
                    alt="Srirevanth Aramuthakannan" 
                    className="w-full h-80 object-cover object-top filter saturate-105 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Scanline overlay over photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Photo HUD Overlay Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[11px] bg-[#030712]/90 border border-slate-700 backdrop-blur-md px-3 py-2 rounded-lg">
                    <span className="text-white font-medium">Coimbatore, TN</span>
                    <span className="text-teal-400 flex items-center gap-1 font-bold">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      ACTIVE NODE
                    </span>
                  </div>
                </div>

                {/* HUD Bottom Stats */}
                <div className="grid grid-cols-2 gap-2 mt-4 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-[#030712] border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400">FOCUS</span>
                    <span className="text-teal-300 font-bold">SECURITY SOFTWARE</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#030712] border border-slate-800 text-center">
                    <span className="block text-[10px] text-slate-400">DEGREE</span>
                    <span className="text-cyan-400 font-bold">B.E CYBER SEC</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Interactive CLI Terminal Window (Collapsible) */}
        {terminalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 max-w-4xl mx-auto rounded-xl bg-[#080c14] border border-emerald-500/40 overflow-hidden shadow-2xl font-mono"
          >
            {/* Terminal Header Bar */}
            <div className="bg-[#0f172a] px-4 py-2.5 border-b border-emerald-500/30 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={() => setTerminalOpen(false)}></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 font-bold text-emerald-400">bash - sri-sec-shell ~ (v4.2)</span>
              </div>
              <span className="text-[10px] text-slate-500">PRESS ESC OR CLICK CIRCLE TO CLOSE</span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-64 overflow-y-auto text-xs space-y-2 bg-[#030712]/90">
              {terminalLogs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  {log.type === 'sys' && <span className="text-slate-400">{log.text}</span>}
                  {log.type === 'user' && <span className="text-emerald-400 font-bold">{log.text}</span>}
                  {log.type === 'res' && <span className="text-cyan-300">{log.text}</span>}
                  {log.type === 'err' && <span className="text-red-400">{log.text}</span>}
                </div>
              ))}

              {/* Interactive Input Line */}
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-bold">srirevanth@sec-node:~$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder="type command (e.g. help, projects, skills)..."
                  className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs focus:ring-0"
                  autoFocus
                />
              </form>
            </div>

            {/* Quick Command Pills */}
            <div className="bg-[#0b0f19] px-4 py-2 border-t border-slate-800 flex items-center gap-2 flex-wrap text-[11px]">
              <span className="text-slate-400">Quick commands:</span>
              {['help', 'whoami', 'projects', 'skills', 'contact'].map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => {
                    setCommandInput(pill);
                  }}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-400 hover:border-emerald-500 transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
