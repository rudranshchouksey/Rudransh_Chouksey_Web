"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, Github, Globe, Layers, Zap, CheckCircle2, 
  AlertTriangle, Terminal, ArrowUpRight, BarChart3, 
  Cpu, Code2, Rocket, Search, FileCode, FileJson, FileWarning
} from 'lucide-react';
import { Project } from '@/data/projects';

// --- Animated Counter Component ---
const Counter = ({ value, label, suffix = "" }: { value: string, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const isDecimal = value.includes('.');
  
  const springValue = useSpring(0, { stiffness: 50, damping: 20, duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) springValue.set(numericValue);
  }, [isInView, numericValue, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  return (
    <div ref={ref} className="relative group">
      <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-4 md:p-6 bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
        <div className="text-2xl md:text-5xl font-bold text-white mb-2 font-mono">
          {displayValue.toFixed(isDecimal ? 1 : 0)}
          <span className="text-purple-400 text-lg md:text-2xl">{suffix || value.replace(/[0-9.]/g, '')}</span>
        </div>
        <p className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">{label}</p>
      </div>
    </div>
  );
};

// --- 3D Tilt Card Component ---
const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 20); // Rotation intensity
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: y, rotateY: x, transformStyle: "preserve-3d" }}
      className={`relative transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
};

// --- Typewriter Text Component ---
const TypewriterText = ({ text, className = "" }: { text: string, className?: string }) => {
  const lines = text.split('\n');
  return (
    <div className={`font-mono text-xs md:text-base leading-relaxed ${className}`}>
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: lineIndex * 0.05, duration: 0.3 }}
          className="min-h-[1.5em]"
        >
          {line || '\u00A0'}
        </motion.div>
      ))}
    </div>
  );
};

// --- Interactive Terminal Component ---
const DeepDiveTerminal = ({ deepDive }: { deepDive: NonNullable<Project['challenges']>['deepDive'] }) => {
    // FIX: Moved hooks to the top level, before the early return
    const [activeTab, setActiveTab] = useState<'problem' | 'investigation' | 'solution' | 'result'>('problem');

    const tabs = [
        { id: 'problem', label: 'problem.log', icon: FileWarning, color: 'text-red-400' },
        { id: 'investigation', label: 'investigation.trace', icon: Search, color: 'text-blue-400' },
        { id: 'solution', label: 'solution.ts', icon: FileCode, color: 'text-purple-400' },
        { id: 'result', label: 'result.json', icon: FileJson, color: 'text-green-400' },
    ] as const;

    // FIX: Moved the early return here, after hooks are declared
    if (!deepDive) return null;

    const contentMap = {
        problem: deepDive.problem,
        investigation: deepDive.investigation,
        solution: deepDive.solutionImplemented,
        result: deepDive.result,
    };

    return (
        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col h-[500px] md:h-[600px]">
            <div className="flex items-center bg-[#151515] border-b border-white/5 overflow-x-auto no-scrollbar">
                <div className="flex items-center px-4 gap-2 border-r border-white/5 py-4 shrink-0">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/50" />
                </div>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-sm font-mono transition-all border-r border-white/5 whitespace-nowrap
                            ${activeTab === tab.id 
                                ? 'bg-[#1e1e1e] text-white border-b-2 border-b-purple-500' 
                                : 'text-neutral-500 hover:text-neutral-300 hover:bg-[#1a1a1a]'
                            }`}
                    >
                        <tab.icon className={`w-3 h-3 md:w-4 md:h-4 ${activeTab === tab.id ? tab.color : 'opacity-50'}`} />
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="flex-1 p-4 md:p-8 overflow-y-auto font-mono bg-[#0f0f0f] relative custom-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                    >
                        <div className="flex gap-4">
                           <div className="hidden md:flex flex-col text-neutral-700 select-none text-right min-w-[2rem] text-sm">
                              {Array.from({ length: 20 }).map((_, i) => (
                                <span key={i} className="leading-relaxed">{i + 1}</span>
                              ))}
                           </div>
                           <div className="flex-1">
                              <div className="mb-4 text-[10px] md:text-xs text-neutral-500">
                                {"// "}{deepDive.title}
                                <br />
                                {"// Mode: "}{activeTab.toUpperCase()}
                              </div>
                              <TypewriterText 
                                text={contentMap[activeTab]} 
                                className={
                                    activeTab === 'problem' ? 'text-red-300/90' :
                                    activeTab === 'investigation' ? 'text-blue-300/90' :
                                    activeTab === 'solution' ? 'text-purple-300/90' :
                                    'text-green-300/90'
                                }
                              />
                              <motion.span 
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-purple-500 ml-1 align-middle"
                              />
                           </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// --- Main Page Component ---
export default function CaseStudyView({ project }: { project: Project }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax transforms
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  return (
    <div ref={containerRef} className="bg-[#0a0a0a] min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden font-sans">
      
      {/* --- Dynamic Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* --- Floating Navigation (Mobile Optimized) --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 py-20 md:py-0 flex justify-between items-center pointer-events-none max-w-[100vw] overflow-hidden"
      >
        <Link href="/" className="pointer-events-auto flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all hover:scale-105 group shadow-2xl shrink-0">
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-xs md:text-sm">Portfolio</span>
        </Link>
        
        <div className="flex gap-2 md:gap-3 pointer-events-auto shrink-0">
          {project.githubHref && (
            <a href={project.githubHref} target="_blank" rel="noreferrer" className="p-2 md:p-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:text-purple-400 transition-all hover:scale-110 hover:rotate-6 shadow-2xl">
              <Github className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
          {project.websiteHref && (
            <a href={project.websiteHref} target="_blank" rel="noreferrer" className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-purple-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <span className="text-xs md:text-sm whitespace-nowrap">Live Demo</span> <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          )}
        </div>
      </motion.nav>

      {/* --- 1. HERO SECTION (Redesigned) --- */}
      <header className="relative h-screen w-full flex flex-col justify-end pb-24 md:pb-32 overflow-hidden">
        {/* Background Image Parallax */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          
          {/* Top Gradient Mask for Navigation Visibility */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10" />

          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Hero Content - Bottom Aligned */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Meta Pill */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8 shadow-lg">
                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] md:text-sm font-mono text-neutral-300 uppercase tracking-widest font-semibold">{project.meta.timeline}</span>
            </div>

            {/* Title - Responsive Text Size */}
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-4 md:mb-6 tracking-tighter leading-[0.9] drop-shadow-sm max-w-5xl">
                {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-2xl text-neutral-300 max-w-xl md:max-w-2xl leading-relaxed font-light drop-shadow-md">
                {project.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* --- Main Content Wrapper --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
        
        {/* --- 2. BENTO GRID META --- */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 -mt-16 md:-mt-20 mb-20 md:mb-32 relative z-30"
        >
          {[
            { label: "Role", value: project.meta.role, icon: <Code2 className="w-4 h-4 md:w-5 md:h-5 text-purple-400" /> },
            { label: "Team", value: project.meta.teamSize || "Solo", icon: <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-400" /> },
            { label: "Platform", value: project.meta.platform[0], icon: <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-400" /> },
            { label: "Stack", value: `${project.meta.stack.length} Technologies`, icon: <Layers className="w-4 h-4 md:w-5 md:h-5 text-pink-400" /> },
          ].map((item, i) => (
            <TiltCard key={i} className="bg-[#111]/90 backdrop-blur-xl border border-white/10 p-4 md:p-8 rounded-2xl md:rounded-3xl group hover:bg-[#151515] transition-all hover:border-white/20 shadow-2xl">
              <div className="flex justify-between items-start mb-3 md:mb-6">
                <div className="p-2 md:p-3 bg-white/5 rounded-xl md:rounded-2xl group-hover:bg-white/10 transition-colors border border-white/5">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">{item.label}</h3>
                <p className="text-white font-bold text-xs md:text-lg leading-tight line-clamp-2">{item.value}</p>
              </div>
            </TiltCard>
          ))}
        </motion.section>

        {/* --- 3. OVERVIEW & CHALLENGE --- */}
        <section className="grid md:grid-cols-12 gap-8 md:gap-24 mb-20 md:mb-32 items-start">
          <div className="md:col-span-5 md:sticky md:top-32">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Reimagining the <span className="text-purple-500">Problem Space</span>
            </h2>
            <div className="prose prose-invert prose-sm md:prose-lg text-neutral-400 leading-relaxed">
               {project.description}
            </div>
            
            <div className="mt-8 md:mt-12">
               <h3 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                 <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" /> The Challenge
               </h3>
               <p className="text-xs md:text-sm text-neutral-300 leading-relaxed p-4 md:p-6 border-l-2 border-yellow-500/30 bg-gradient-to-r from-yellow-500/5 to-transparent rounded-r-xl">
                 {project.challenge.problemStatement}
               </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 md:space-y-8">
             {/* Tech Stack Cloud */}
             <div className="bg-[#111] border border-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-colors" />
                <h3 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                   <Cpu className="w-4 h-4 md:w-5 md:h-5 text-purple-400" /> Technical Arsenal
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                   {project.meta.stack.map((tech, i) => (
                      <motion.span 
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-xs md:text-sm font-medium text-neutral-300 cursor-default hover:border-purple-500/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                   ))}
                </div>
             </div>

             {/* Business Goals */}
             <div className="bg-[#111] border border-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                   <Rocket className="w-4 h-4 md:w-5 md:h-5 text-green-400" /> Mission Objectives
                </h3>
                <ul className="space-y-3 md:space-y-4">
                   {project.challenge.businessGoals.map((goal, i) => (
                      <motion.li 
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 md:gap-4 items-start"
                      >
                         <div className="mt-1 min-w-[16px] md:min-w-[20px]">
                           <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-green-500/30 flex items-center justify-center bg-green-500/10">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500" />
                           </div>
                         </div>
                         <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{goal}</p>
                      </motion.li>
                   ))}
                </ul>
             </div>
          </div>
        </section>

        {/* --- 4. DEEP DIVE (Interactive Tabs) --- */}
        {project.challenges?.deepDive && (
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-100px" }}
              className="mb-20 md:mb-32"
            >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                   <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
                   <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                      <Terminal className="text-purple-500" /> Engineering Deep Dive
                   </h2>
                   <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
                </div>

                <DeepDiveTerminal deepDive={project.challenges.deepDive} />
            </motion.section>
        )}

        {/* --- 5. METRICS (Count Up) --- */}
        {project.performance && (
            <section className="mb-20 md:mb-32">
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                   <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
                   <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                      <BarChart3 className="text-green-500" /> Impact Metrics
                   </h2>
                   <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {project.performance.benchmarks.map((metric, i) => (
                        <Counter key={i} value={metric.value} label={metric.metric} />
                    ))}
                </div>
            </section>
        )}

        {/* --- 6. ARCHITECTURE DECISIONS --- */}
        {project.architecture && (
            <section className="mb-20 md:mb-32">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 text-center">System Architecture</h2>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {project.architecture.techStackDecisions.map((decision, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-neutral-900/30 border border-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:border-purple-500/30 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{decision.technology}</h3>
                                    <span className="text-[10px] md:text-xs text-neutral-500 font-mono uppercase tracking-wider">{decision.layer}</span>
                                </div>
                                <div className="p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                   <Layers className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                                </div>
                            </div>
                            
                            <div className="space-y-3 md:space-y-4">
                                <div>
                                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                                      <span className="text-green-400 font-bold text-[10px] md:text-xs uppercase block mb-1">Why?</span>
                                      {decision.whyChosen}
                                    </p>
                                </div>
                                <div className="pt-3 md:pt-4 border-t border-white/5">
                                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                                      <span className="text-red-400 font-bold text-[10px] md:text-xs uppercase block mb-1">Trade-off</span>
                                      {decision.tradeoff}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        )}

        {/* --- 7. FINAL RESULTS --- */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-16 border-t border-white/10 pt-12 md:pt-20">
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Reflections</h2>
               {project.reflection && (
                 <div className="space-y-6 md:space-y-8">
                    <div className="bg-[#111] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5">
                        <h4 className="text-purple-400 font-bold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                           <Zap className="w-4 h-4" /> Key Learnings
                        </h4>
                        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{project.reflection.learned}</p>
                    </div>
                    {project.reflection.technicalDebt && (
                        <div className="bg-[#111] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                            <h4 className="text-neutral-300 font-bold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                               <AlertTriangle className="w-4 h-4 text-yellow-500" /> Technical Debt
                            </h4>
                            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">{project.reflection.technicalDebt}</p>
                        </div>
                    )}
                 </div>
               )}
            </div>

            <div>
               <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">The Verdict</h2>
               <p className="text-sm md:text-lg text-neutral-300 leading-relaxed mb-6 md:mb-8">
                  {project.results.finalSummary}
               </p>
               
               {project.results.testimonial && (
                   <div className="relative p-6 md:p-8 bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl md:rounded-3xl border border-purple-500/20">
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 text-4xl md:text-6xl text-purple-500/20 font-serif">&quot;</div>
                      <p className="relative z-10 text-neutral-200 italic mb-4 md:mb-6 text-sm md:text-lg leading-relaxed">
                        {project.results.testimonial.quote}
                      </p>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm md:text-base">
                            {project.results.testimonial.author[0]}
                         </div>
                         <div>
                            <div className="text-white font-bold text-xs md:text-sm">{project.results.testimonial.author}</div>
                            <div className="text-neutral-500 text-[10px] md:text-xs">{project.results.testimonial.role}</div>
                         </div>
                      </div>
                   </div>
               )}
            </div>
        </section>

      </div>
    </div>
  );
}