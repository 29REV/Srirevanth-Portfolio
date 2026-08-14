import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  ShieldAlert, 
  ShieldCheck, 
  Usb, 
  KeyRound, 
  Radio, 
  Cpu, 
  Lock, 
  Zap, 
  Terminal,
  Play,
  CheckCircle2,
  XCircle,
  AlertOctagon,
  RefreshCw
} from 'lucide-react';
import { playUiSound } from '../utils/audio';

export default function SocDashboardSection({ soundEnabled }) {
  const [securityMode, setSecurityMode] = useState('normal'); // normal, audit, alert
  const [usbDeviceState, setUsbDeviceState] = useState('idle'); // idle, inserted, blocked, allowed
  const [testPassword, setTestPassword] = useState('Secur1ty#2026!');
  const [passStrength, setPassStrength] = useState({ score: 4, crackTime: '3 centuries', entropy: '84 bits', status: 'Very Strong' });

  // Simulated live log stream
  const [logs, setLogs] = useState([
    { id: 1, time: '14:36:01', level: 'INFO', msg: 'Kernel URB module initialized on /dev/bus/usb/001' },
    { id: 2, time: '14:36:05', level: 'WARN', msg: 'Port 443 TCP SYN rate spike detected from 192.168.1.104' },
    { id: 3, time: '14:36:12', level: 'SUCCESS', msg: 'zxcvbn attack simulation engine verified rulesets' },
    { id: 4, time: '14:36:19', level: 'INFO', msg: 'Gemini API AI security gateway active [Status: 200 OK]' },
  ]);

  // Periodic log stream updater
  useEffect(() => {
    const logMessages = [
      { level: 'INFO', msg: 'URB filter verified endpoint descriptor class 0x03 (HID Device)' },
      { level: 'WARN', msg: 'High entropy password payload hash submitted to audit queue' },
      { level: 'SUCCESS', msg: 'Kernel memory protection check passed [Control Flow Integrity]' },
      { level: 'INFO', msg: 'Firebase realtime sync complete (Latency: 18ms)' },
      { level: 'ALERT', msg: 'Unusual USB bulk request payload detected — blocking request block #4091' }
    ];

    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)];

      setLogs(prev => [
        { id: Date.now(), time: timeStr, level: randomLog.level, msg: randomLog.msg },
        ...prev.slice(0, 7)
      ]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Password analysis logic (interactive simulated zxcvbn)
  const evaluatePassword = (pass) => {
    setTestPassword(pass);
    if (!pass) {
      setPassStrength({ score: 0, crackTime: '0 seconds', entropy: '0 bits', status: 'Empty' });
      return;
    }

    const len = pass.length;
    let score = 1;
    let crackTime = '3 seconds';
    let entropy = `${Math.floor(len * 3.5)} bits`;
    let status = 'Weak';

    if (len >= 14 && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass)) {
      score = 4;
      crackTime = '340 centuries';
      entropy = `${len * 6.2} bits`;
      status = 'Extremely Strong';
    } else if (len >= 10 && (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass))) {
      score = 3;
      crackTime = '2.4 years';
      entropy = `${len * 4.8} bits`;
      status = 'Strong';
    } else if (len >= 7) {
      score = 2;
      crackTime = '45 minutes';
      entropy = `${len * 3.9} bits`;
      status = 'Moderate';
    }

    setPassStrength({ score, crackTime, entropy, status });
  };

  // USB simulation logic
  const handleUsbInsert = () => {
    playUiSound('alert', soundEnabled);
    setUsbDeviceState('inserted');
    const now = new Date().toTimeString().split(' ')[0];

    setLogs(prev => [
      { id: Date.now(), time: now, level: 'ALERT', msg: 'NEW USB DEVICE CONNECTED: VendorID: 0x18d1, ProdID: 0x4ee1 [BadUSB Signature Match]' },
      ...prev
    ]);
  };

  const handleUsbAction = (action) => {
    playUiSound(action === 'blocked' ? 'alert' : 'success', soundEnabled);
    setUsbDeviceState(action);
    const now = new Date().toTimeString().split(' ')[0];

    if (action === 'blocked') {
      setLogs(prev => [
        { id: Date.now(), time: now, level: 'SUCCESS', msg: 'URB REQUEST BLOCKED: Intercepted kernel descriptor before driver attachment!' },
        ...prev
      ]);
    } else {
      setLogs(prev => [
        { id: Date.now(), time: now, level: 'WARN', msg: 'USB DEVICE ALLOWED: Kernel drivers assigned to device node /dev/ttyUSB0' },
        ...prev
      ]);
    }
  };

  return (
    <section id="soc" className="py-24 relative bg-[#080c14] overflow-hidden">
      
      {/* Background Accent */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 ${
        securityMode === 'alert' ? 'bg-red-500/15' : securityMode === 'audit' ? 'bg-cyan-500/15' : 'bg-emerald-500/10'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>// LIVE_SECURITY_OPERATIONS_CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
            Interactive <span className="text-emerald-400">SOC Dashboard</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 font-sans">
            Real-time visual telemetry, live threat event logs, interactive USB kernel interception simulation, and zxcvbn password analyzer.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Dashboard Frame Container */}
        <div className={`rounded-2xl bg-[#0b0f19] border transition-all duration-500 p-6 sm:p-8 shadow-2xl backdrop-blur-xl ${
          securityMode === 'alert' 
            ? 'border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.2)]' 
            : securityMode === 'audit' 
            ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]' 
            : 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
        }`}>
          
          {/* Dashboard Header Status Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8 font-mono">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full animate-ping ${
                securityMode === 'alert' ? 'bg-red-500' : securityMode === 'audit' ? 'bg-cyan-400' : 'bg-emerald-400'
              }`}></div>
              <div>
                <span className="text-xs text-slate-400 block">SYSTEM OPERATIONAL STATUS:</span>
                <span className={`text-base font-bold uppercase tracking-wider ${
                  securityMode === 'alert' ? 'text-red-400' : securityMode === 'audit' ? 'text-cyan-400' : 'text-emerald-400'
                }`}>
                  {securityMode === 'alert' ? '🚨 DEFENSE BREACH ALERT ACTIVE' : securityMode === 'audit' ? '🛡️ SYSTEM AUDIT MODE' : '🟢 NORMAL THREAT DETECTION'}
                </span>
              </div>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="flex items-center gap-2 bg-[#030712] p-1.5 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => {
                  setSecurityMode('normal');
                  playUiSound('click', soundEnabled);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  securityMode === 'normal' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Normal (Green)
              </button>

              <button
                onClick={() => {
                  setSecurityMode('audit');
                  playUiSound('click', soundEnabled);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  securityMode === 'audit' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Audit (Cyan)
              </button>

              <button
                onClick={() => {
                  setSecurityMode('alert');
                  playUiSound('alert', soundEnabled);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  securityMode === 'alert' ? 'bg-red-950 text-red-400 border border-red-500/40 font-bold animate-pulse' : 'text-slate-400 hover:text-white'
                }`}
              >
                Alert (Red)
              </button>
            </div>
          </div>

          {/* Metric Counter Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 font-mono">
            
            <div className="p-4 rounded-xl bg-[#030712] border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> THREATS INTERCEPTED
              </span>
              <span className="text-2xl font-bold text-emerald-400 mt-1 block">
                1,492 <span className="text-xs text-slate-500 font-normal">req/hr</span>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#030712] border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Usb className="w-3.5 h-3.5 text-cyan-400" /> URB KERNEL FILTERS
              </span>
              <span className="text-2xl font-bold text-cyan-400 mt-1 block">
                ACTIVE <span className="text-xs text-slate-500 font-normal">[C-Driver]</span>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#030712] border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-purple-400" /> GEMINI AI MODEL
              </span>
              <span className="text-2xl font-bold text-purple-400 mt-1 block">
                ONLINE <span className="text-xs text-slate-500 font-normal">v1.5-flash</span>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#030712] border border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-amber-400" /> LATENCY / ENGINE
              </span>
              <span className="text-2xl font-bold text-amber-400 mt-1 block">
                1.4 ms <span className="text-xs text-slate-500 font-normal">99.9% uptime</span>
              </span>
            </div>

          </div>

          {/* 2-Column Main Widget Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Live Security Log Terminal Stream */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-[#030712] border border-slate-800 p-5 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>SYSTEM LOG TELEMETRY STREAM</span>
                </div>
                <span className="text-[10px] text-emerald-400 animate-pulse font-bold">
                  ● REALTIME LOGGING
                </span>
              </div>

              {/* Log Messages List */}
              <div className="space-y-2.5 h-64 overflow-y-auto pr-2 text-xs">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-start gap-2 border-b border-slate-900/60 pb-2">
                    <span className="text-slate-500 text-[10px] shrink-0 mt-0.5">{log.time}</span>
                    
                    {log.level === 'INFO' && <span className="px-1.5 py-0.5 text-[9px] bg-blue-500/20 text-blue-400 rounded font-bold shrink-0">INFO</span>}
                    {log.level === 'WARN' && <span className="px-1.5 py-0.5 text-[9px] bg-amber-500/20 text-amber-400 rounded font-bold shrink-0">WARN</span>}
                    {log.level === 'SUCCESS' && <span className="px-1.5 py-0.5 text-[9px] bg-emerald-500/20 text-emerald-400 rounded font-bold shrink-0">SUCCESS</span>}
                    {log.level === 'ALERT' && <span className="px-1.5 py-0.5 text-[9px] bg-red-500/20 text-red-400 rounded font-bold shrink-0 animate-pulse">ALERT</span>}

                    <span className="text-slate-300 font-sans text-xs leading-tight">{log.msg}</span>
                  </div>
                ))}
              </div>

              {/* USB Activity Monitor Interactive Simulation Widget */}
              <div className="mt-4 pt-4 border-t border-slate-800 bg-[#090d16] p-4 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-2">
                    <Usb className="w-4 h-4" /> USB FORENSIC INTERCEPTOR SIMULATOR
                  </span>
                  <span className="text-[10px] text-slate-400">URB Request Block Demo</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  {usbDeviceState === 'idle' && (
                    <button
                      onClick={handleUsbInsert}
                      className="w-full sm:w-auto px-4 py-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-900 transition-all flex items-center justify-center gap-2"
                    >
                      <Usb className="w-4 h-4" /> SIMULATE MALICIOUS USB INSERTION
                    </button>
                  )}

                  {usbDeviceState === 'inserted' && (
                    <div className="w-full flex items-center justify-between gap-2 p-2 rounded bg-red-950/40 border border-red-500/40">
                      <span className="text-xs text-red-400 font-bold animate-pulse flex items-center gap-1">
                        <AlertOctagon className="w-4 h-4" /> UNTRUSTED USB DETECTED!
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUsbAction('blocked')}
                          className="px-3 py-1 bg-red-600 text-white font-mono text-xs font-bold rounded hover:bg-red-500 shadow-md"
                        >
                          BLOCK URB
                        </button>
                        <button
                          onClick={() => handleUsbAction('allowed')}
                          className="px-3 py-1 bg-slate-800 text-slate-300 font-mono text-xs rounded hover:bg-slate-700"
                        >
                          ALLOW
                        </button>
                      </div>
                    </div>
                  )}

                  {usbDeviceState === 'blocked' && (
                    <div className="w-full flex items-center justify-between p-2 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-mono text-xs">
                      <span className="flex items-center gap-1.5 font-bold">
                        <CheckCircle2 className="w-4 h-4" /> URB BLOCKED BEFORE KERNEL ACCESS
                      </span>
                      <button
                        onClick={() => setUsbDeviceState('idle')}
                        className="p-1 rounded hover:bg-emerald-900/50 text-slate-300"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {usbDeviceState === 'allowed' && (
                    <div className="w-full flex items-center justify-between p-2 rounded bg-amber-950/40 border border-amber-500/40 text-amber-400 font-mono text-xs">
                      <span className="flex items-center gap-1.5">
                        <AlertOctagon className="w-4 h-4" /> DEVICE PASSED TO DRIVER LAYER
                      </span>
                      <button
                        onClick={() => setUsbDeviceState('idle')}
                        className="p-1 rounded hover:bg-amber-900/50 text-slate-300"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Password Vulnerability Analyzer Widget */}
            <div className="lg:col-span-5 rounded-xl bg-[#030712] border border-slate-800 p-5 font-mono flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                    <KeyRound className="w-4 h-4 text-cyan-400" />
                    <span>PASSWORD VULNERABILITY ANALYZER</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono">zxcvbn Engine</span>
                </div>

                <p className="text-xs text-slate-400 font-sans mb-4">
                  Test a sample password below to observe real-time attack simulation entropy scoring &amp; crack-time estimation:
                </p>

                {/* Password Input */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    value={testPassword}
                    onChange={(e) => evaluatePassword(e.target.value)}
                    placeholder="Type password to test..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700 text-slate-100 outline-none font-mono text-sm focus:border-cyan-400 transition-colors"
                  />
                  <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5" />
                </div>

                {/* Score Indicators */}
                <div className="space-y-3 p-4 rounded-xl bg-[#090d16] border border-slate-800/80 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">VERDICT STRENGTH:</span>
                    <span className={`font-bold ${
                      passStrength.score >= 4 ? 'text-emerald-400' : passStrength.score >= 3 ? 'text-cyan-400' : passStrength.score >= 2 ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {passStrength.status}
                    </span>
                  </div>

                  {/* Rating Meter */}
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          step <= passStrength.score
                            ? passStrength.score >= 4 ? 'bg-emerald-400 shadow-[0_0_10px_rgba(0,255,102,0.5)]'
                              : passStrength.score >= 3 ? 'bg-cyan-400'
                              : passStrength.score >= 2 ? 'bg-amber-400'
                              : 'bg-red-400'
                            : 'bg-slate-800'
                        }`}
                      ></div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-500">EST. GPU CRACK TIME:</span>
                      <span className="font-bold text-slate-200">{passStrength.crackTime}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500">ENTROPY RATING:</span>
                      <span className="font-bold text-cyan-400">{passStrength.entropy}</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-slate-300 font-sans leading-relaxed">
                💡 <strong className="text-emerald-400">Security Recommendation:</strong> Use passwords with &gt; 14 characters combining uppercase, numbers, and special symbols to prevent dictionary attack matching.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
