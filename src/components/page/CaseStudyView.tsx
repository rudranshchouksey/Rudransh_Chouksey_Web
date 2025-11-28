"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// 1. ADDED 'Variants' to imports
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { 
  ArrowLeft, Globe, Calendar, User, Layers, 
  Target, AlertTriangle, CheckCircle2, TrendingUp, Quote, Github 
} from "lucide-react";
import { Project } from "@/data/projects";

// --- ANIMATION VARIANTS (Fixed Types) ---

// 2. Added explicit ': Variants' type annotation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } }
};

export default function CaseStudyView({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, 250]);
  const opacityRange = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[70vh] w-full overflow-hidden bg-slate-900 flex items-end">
        {project.imageUrl && (
          <motion.div 
            style={{ y: yRange, opacity: opacityRange }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover opacity-40"
              priority
            />
          </motion.div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-900/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT CONTENT --- */}
          <div className="lg:col-span-8 space-y-32">
            
            {/* 1. PROJECT OVERVIEW */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">01. Overview</motion.h2>
              <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Hook</motion.h3>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed whitespace-pre-line font-light">
                {project.description}
              </motion.p>
            </motion.section>

            {/* 2. THE CHALLENGE */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">02. The Challenge</motion.h2>
              
              <motion.div variants={itemVariants} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-10 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-200/50 transition-colors duration-700" />
                
                <div className="relative z-10 space-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">The Problem</h4>
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed">{project.challenge.problemStatement}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 pt-8 border-t border-slate-200/60">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          <Target className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Business Goals</h4>
                      </div>
                      <ul className="space-y-3">
                        {project.challenge.businessGoals.map((goal, i) => (
                          <li key={i} className="flex items-start text-slate-600">
                            <span className="mr-3 text-blue-400 mt-1.5">•</span> 
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Constraints</h4>
                      </div>
                      <ul className="space-y-3">
                        {project.challenge.constraints.map((c, i) => (
                          <li key={i} className="flex items-start text-slate-600">
                            <span className="mr-3 text-purple-400 mt-1.5">•</span> 
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* 3. PROCESS */}
            <section className="relative">
               <motion.h2 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-12"
               >
                 03. The Process
               </motion.h2>

               <div className="space-y-24 border-l-2 border-slate-100 ml-4 md:ml-0 md:border-none">
                  {project.process.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={containerVariants}
                      className="relative md:grid md:grid-cols-12 md:gap-8 items-start"
                    >
                      <motion.div variants={itemVariants} className="hidden md:flex md:col-span-2 flex-col items-center sticky top-32">
                        <span className="text-6xl font-black text-slate-100 select-none">
                          0{index + 1}
                        </span>
                      </motion.div>

                      <div className="pl-8 md:pl-0 md:col-span-10 space-y-6">
                        <motion.div variants={itemVariants} className="flex items-center gap-4 md:hidden mb-4">
                           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                            {index + 1}
                           </span>
                           <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        </motion.div>
                        
                        <motion.h3 variants={itemVariants} className="hidden md:block text-3xl font-bold text-slate-900">
                          {step.title}
                        </motion.h3>

                        <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed">
                          {step.description}
                        </motion.p>
                        
                        {step.image && (
                          <motion.div 
                            variants={itemVariants}
                            whileHover="hover"
                            initial="rest"
                            className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 mt-8"
                          >
                            <motion.div variants={scaleOnHover} className="w-full h-full relative">
                              <Image 
                                src={step.image} 
                                alt={step.title} 
                                fill 
                                className="object-cover" 
                              />
                            </motion.div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
               </div>
            </section>

            {/* 4. RESULTS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8">04. Solution & Impact</motion.h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {project.results.metrics.map((metric, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl text-center shadow-xl shadow-slate-900/10 cursor-default"
                  >
                    <h4 className="text-2xl md:text-4xl font-bold text-blue-400 mb-2">{metric.value}</h4>
                    <p className="font-bold text-sm md:text-base mb-2">{metric.label}</p>
                    {metric.description && (
                      <p className="text-xs text-slate-400 font-light opacity-80">{metric.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="mb-16">
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                  {project.results.finalSummary}
                </p>
              </motion.div>

              {project.results.testimonial && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 to-white p-10 md:p-12 rounded-[2.5rem] relative border border-blue-100"
                >
                  <Quote className="text-blue-200 w-16 h-16 absolute top-8 left-8 -z-0 rotate-180" />
                  <blockquote className="text-xl md:text-2xl font-medium text-slate-900 italic mb-8 relative z-10 leading-relaxed">
                    &quot;{project.results.testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20">
                      {project.results.testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{project.results.testimonial.author}</p>
                      <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">{project.results.testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.section>

            {/* 5. REFLECTION */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8">05. Reflection</motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="bg-green-50/50 border border-green-100 p-8 rounded-3xl hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-green-700 font-bold text-lg">
                    <CheckCircle2 size={24} />
                    <h3>Key Takeaways</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{project.reflection.learned}</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-purple-50/50 border border-purple-100 p-8 rounded-3xl hover:bg-purple-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-purple-700 font-bold text-lg">
                    <TrendingUp size={24} />
                    <h3>Future Improvements</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{project.reflection.future}</p>
                </motion.div>
              </div>
            </motion.section>

          </div>

          {/* --- RIGHT SIDEBAR --- */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="p-8 border border-slate-200 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Project Info</h3>
                
                <div className="space-y-8">
                  <div>
                    <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <User className="w-4 h-4 mr-2" /> My Role
                    </span>
                    <p className="text-slate-900 font-bold text-lg">{project.meta.role}</p>
                  </div>
                  
                  {project.meta.company && (
                    <div>
                      <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Globe className="w-4 h-4 mr-2" /> Client
                      </span>
                      <p className="text-slate-900 font-bold text-lg">{project.meta.company}</p>
                    </div>
                  )}

                  <div>
                    <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <Calendar className="w-4 h-4 mr-2" /> Timeline
                    </span>
                    <p className="text-slate-900 font-bold text-lg">{project.meta.timeline}</p>
                  </div>

                  <div>
                    <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <Layers className="w-4 h-4 mr-2" /> Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.meta.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs rounded-lg font-bold border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col gap-4">
                  {project.websiteHref && (
                    <a 
                      href={project.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/20"
                    >
                      <Globe className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      View Live Project
                    </a>
                  )}

                  {project.githubHref && (
                    <a 
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-full py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl font-bold hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}