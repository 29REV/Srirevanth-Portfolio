import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, CheckCircle2, Star, Sparkles, ExternalLink, Code2, Users } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: 'IEEE Project Expo 2025 Finalist',
      desc: 'Finalist position for "HoloLearn" — Holographic remote teaching system designed for rural education.',
      icon: Trophy,
      color: 'text-amber-400',
      badge: 'NATIONAL FINALIST',
      border: 'border-amber-500/30'
    },
    {
      title: 'Top 20 – KICTF Cyber Konclave',
      desc: 'Ranked in Top 20 out of nationwide participants in competitive Capture The Flag (CTF) cybersecurity challenge.',
      icon: Medal,
      color: 'text-emerald-400',
      badge: 'TOP 20 CTF',
      border: 'border-emerald-500/30'
    },
    {
      title: 'Solved 150+ DSA Problems',
      desc: 'Demonstrated algorithmic mastery across Data Structures, Algorithms, Dynamic Programming on GeeksforGeeks & LeetCode.',
      icon: Code2,
      color: 'text-cyan-400',
      badge: 'ALGORITHMS',
      border: 'border-cyan-500/30'
    },
    {
      title: 'Presented Startup at TNGSS 2025',
      desc: 'Showcased innovative holographic remote teaching hardware & software solution at TN Global Startup Summit 2025.',
      icon: Star,
      color: 'text-purple-400',
      badge: 'STARTUP SHOWCASE',
      border: 'border-purple-500/30'
    }
  ];

  const certs = [
    {
      title: 'NPTEL: Human Computer Interaction',
      issuer: 'NPTEL / IIT',
      detail: 'Gold Medalist — Top Performer (94% Score)',
      icon: Award,
      badge: 'GOLD MEDAL (94%)',
      color: 'text-amber-400'
    },
    {
      title: 'Cisco Networking Basics Certification',
      issuer: 'Cisco Networking Academy',
      detail: 'Verified credentials in TCP/IP, Routing, Switching & Network Security Concepts',
      icon: Award,
      badge: 'CISCO CERTIFIED',
      color: 'text-cyan-400'
    }
  ];

  const extracurricular = [
    'Assisted in organizing technical & non-technical cybersecurity events as part of the ISEA Club.',
    'Explored full-stack development using Java Spring Boot to build scalable web applications.',
    'Actively participated in competitive coding practice and security skill development beyond coursework.'
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#080c14] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>// RECOGNITION_&amp;_HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Achievements &amp; <span className="text-amber-400">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full mt-3"></div>
        </div>

        {/* 2-Grid Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Achievements Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl font-mono font-bold text-white mb-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Key Honors &amp; CTF Ranking
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`p-5 rounded-2xl bg-[#0b0f19] border ${item.border} hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 group shadow-xl`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl bg-[#030712] border border-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 border border-slate-800 text-amber-300 font-bold">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-mono text-sm font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certifications & Extracurricular */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Box */}
            <h3 className="text-xl font-mono font-bold text-white mb-2 flex items-center gap-2">
              <Medal className="w-5 h-5 text-cyan-400" />
              Verified Certifications
            </h3>

            <div className="space-y-4 font-sans">
              {certs.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0b0f19] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl bg-[#030712] border border-slate-800 ${cert.color} shrink-0 mt-1`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {cert.title}
                          </h4>
                        </div>
                        <span className="text-xs text-slate-400 font-mono block mb-2">{cert.issuer}</span>
                        <div className="inline-block px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-bold">
                          {cert.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extracurricular Activities */}
            <div className="p-5 rounded-2xl bg-[#0b0f19] border border-slate-800 mt-2 font-sans">
              <h4 className="font-mono text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                Leadership &amp; Extracurriculars
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                {extracurricular.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
