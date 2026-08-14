import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  ShieldCheck, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const emailAddress = 'srirevanth2908@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const toEmail = 'srirevanth2908@gmail.com';
    const subject = formData.subject && formData.subject.trim().length ? formData.subject : 'Portfolio Contact';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    setIsSending(true);
    try {
      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(url, '_blank');

      // update UI to reflect user must send in Gmail
      setSendSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // keep success message visible for a short time
      setTimeout(() => setSendSuccess(false), 8000);
    } catch (err) {
      console.error('Failed to open Gmail compose', err);
      alert('Unable to open Gmail compose window. You can copy the email address instead.');
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/srirevanth-aramuthakannan-430383316',
      icon: LinkedinIcon,
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/50'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/29REV',
      icon: GithubIcon,
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/50'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/srirevanth',
      badge: 'GFG DSA Profile',
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/50'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/SRIREVANTHA/',
      badge: 'LeetCode',
      color: 'text-amber-400',
      border: 'hover:border-amber-500/50'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@SrirevanthA',
      icon: BookOpen,
      color: 'text-purple-400',
      border: 'hover:border-purple-500/50'
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#030712] overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>// TRANSMIT_SECURE_MESSAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Open to cybersecurity roles, backend engineering opportunities, security tool development, and technical collaboration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-mono font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Contact Telemetry
              </h3>

              <div className="space-y-5 font-mono text-xs">
                
                {/* Email Box with Copy Action */}
                <div className="p-4 rounded-xl bg-[#030712] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">PRIMARY EMAIL</span>
                      <a href={`mailto:${emailAddress}`} className="text-slate-200 hover:text-emerald-400 font-bold">
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-[#030712] border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">PHONE / WHATSAPP</span>
                    <a href="tel:+919566544696" className="text-slate-200 hover:text-cyan-400 font-bold">
                      +91 95665 44696
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-[#030712] border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">BASE LOCATION</span>
                    <span className="text-slate-200 font-bold">Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>

              </div>

              {/* Social Channels List */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="block text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider">Verified Profiles &amp; Technical Outlets:</span>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3.5 py-2 rounded-xl bg-[#030712] border border-slate-800 ${link.border} text-xs font-mono transition-all flex items-center gap-2 group shadow-sm`}
                      >
                        {Icon ? (
                          <Icon className={`w-4 h-4 ${link.color}`} />
                        ) : (
                          <span className={`font-bold ${link.color}`}>{link.badge}</span>
                        )}
                        <span className="text-slate-300 group-hover:text-white">{link.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Encrypted Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-mono font-bold text-white mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-emerald-400" />
                Transmit Encrypted Message
              </h3>
              <p className="text-xs text-slate-400 font-sans mb-6">
                Direct communication channel for hiring inquiries, technical discussions, or collaboration requests.
              </p>

              {sendSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center font-mono space-y-2">
                  <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">GMAIL COMPOSE WINDOW OPENED</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    Your message has been prepared in Gmail. Review it and press <strong>Send</strong> inside Gmail to complete delivery.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 uppercase">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-slate-800 text-slate-100 outline-none text-xs focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 uppercase">YOUR EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-slate-800 text-slate-100 outline-none text-xs focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 uppercase">SUBJECT / PURPOSE</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Cybersecurity Engineering Role Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-slate-800 text-slate-100 outline-none text-xs focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 uppercase">MESSAGE TRANSMISSION *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query or proposition details here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-slate-800 text-slate-100 outline-none text-xs focus:border-emerald-400 transition-colors resize-none font-sans"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-emerald-500 text-black font-mono text-sm font-bold shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(0,255,102,0.5)] transition-all flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <span>ENCRYPTING &amp; SENDING...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH ENCRYPTED MESSAGE</span>
                      </>
                    )}
                  </button>

                  <div className="mt-3 text-center text-xs text-slate-400">
                    <span>Prefer another mail client? </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="ml-1 text-emerald-400 underline font-mono"
                    >
                      Copy my email
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
