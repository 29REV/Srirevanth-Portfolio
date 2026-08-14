import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export default function ExperienceSection() {
  const experienceData = [
    {
      role: 'Cybersecurity Intern',
      company: 'Elysium Technologies',
      duration: '15 Days Intensive Program',
      location: 'Tamil Nadu, India',
      description: 'Hands-on internship focusing on vulnerability assessment workflows, real-world security tool usage, and industry-standard defensive methodologies.',
      points: [
        'Gained hands-on exposure to vulnerability assessment workflows and automated security scanning tools.',
        'Analysed real-world security practices and defensive configurations in corporate IT environments.',
        'Explored industry-level cybersecurity methodologies, risk assessment frameworks, and threat auditing routines.',
        'Evaluated penetration testing report structures and remediation guidelines for system administrators.'
      ],
      skills: ['Vulnerability Assessment', 'Security Auditing', 'Threat Workflows', 'Defensive Security']
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#030712] overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>// WORK_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Industry <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent -translate-x-1/2 hidden sm:block"></div>

          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              {/* Timeline Node Ring */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-6 h-6 rounded-full bg-[#030712] border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.5)] z-10 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              {/* Experience Card */}
              <div 
                className="rounded-2xl bg-[#0b0f19] border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition-all group"
              >
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-6">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold inline-block mb-2">
                      INTERNSHIP
                    </span>
                    <h3 className="text-xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 font-mono mt-1">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#030712] border border-slate-800 text-cyan-300">
                      #{s}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
