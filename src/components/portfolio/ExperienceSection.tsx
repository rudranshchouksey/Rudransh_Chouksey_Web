"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Download } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[]; // Changed to array for bullet points
  logo: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "The Serif's",
      role: "Full Stack Developer",
      duration: "May 2025 - Present",
      achievements: [
        "Leading full-stack initiatives for 15+ international clients, improving page load speeds by 40%.",
        "Built LMS platform supporting 500+ users with role-based access and Stripe payments.",
        "Reduced deployment time from 2h to 15m via Docker & GitHub Actions CI/CD pipelines.",
        "Mentoring junior developers and overseeing Agile delivery for timely product launches."
      ],
      logo: "/theserifs_logo.jpg" 
    },
    {
      company: "TwinPix",
      role: "Freelance Full-Stack & Branding",
      duration: "Jan 2025 - Present",
      achievements: [
        "Delivered 25+ projects with 99.9% uptime, ranging from e-commerce to portfolios.",
        "Specialized in AI-driven analytics modules and Web Branding strategies.",
        "Crafted unique brand identities and high-converting web interfaces."
      ],
      logo: "/twinpix-logo.png"
    },
    {
      company: "Accenture",
      role: "Full Stack Developer",
      duration: "Sep 2021 - May 2025",
      achievements: [
        "Supported 50+ enterprise apps, reducing server downtime by 20% via AWS fault-tolerant architectures.",
        "Expanded backend microservices using Node.js, Express, and Prisma.",
        "Enforced OAuth 2.0/JWT security and automated deployments using GitHub Actions.",
        "Optimized frontend load times by 30% through code splitting and caching."
      ],
      logo: "/accenture_logo.jpg"
    },
    {
      company: "Robotronix India",
      role: "AI/ML Development Intern",
      duration: "Aug 2020 - May 2021",
      achievements: [
        "Built predictive ML models achieving 85% accuracy on test datasets.",
        "Deployed lightweight inference services using Python & Flask.",
        "Gained hands-on experience with data preprocessing and neural network architectures."
      ],
      logo: "/Robotronix-india.jpg"
    },
    {
      company: "BitByte Software Technology",
      role: "Full Stack Developer Intern",
      duration: "Feb 2020 - Aug 2020",
      achievements: [
        "Engineered an AI-powered Resume Parser (NLP) with 85% accuracy.",
        "Optimized Node.js backend APIs to improve data retrieval efficiency by 40%.",
        "Collaborated with frontend teams to integrate parsed data into user-friendly dashboards."
      ],
      logo: "/Bit-byte.jpg"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-black relative overflow-hidden" id="experience">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
             / Career Path
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-6">
            Work Experience
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
            A timeline of my professional journey, key contributions, and technical milestones.
          </p>

          {/* Resume Download Button */}
          <a 
            href="https://drive.google.com/file/d/1n-440fHBHOlmWhfXQGFwZuYXNS36Ds6O/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-pink-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Line (Gradient) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500/50 to-transparent md:-translate-x-1/2 opacity-30" />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp: Experience, index: number) => (
              <div
                key={index}
                className={cn(
                  "relative flex items-center md:justify-between w-full",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                
                {/* Timeline Dot (Glowing) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-pink-500 rounded-full z-10 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />

                {/* Content Card Wrapper */}
                <div className={cn(
                  "w-full pl-12 md:w-[calc(50%-2rem)] md:pl-0", 
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8" 
                )}>
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-neutral-800 hover:border-pink-500/30 transition-all duration-300 hover:bg-neutral-900/80 hover:shadow-[0_0_30px_rgba(236,72,153,0.05)] group"
                  >
                    
                    {/* Job Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                      {/* Logo Container */}
                      <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-xl overflow-hidden border border-neutral-700 p-1 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        {exp.logo ? (
                          <Image
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full rounded-lg"
                          />
                        ) : (
                          <Briefcase className="w-5 h-5 text-black" />
                        )}
                      </div>
                      
                      {/* Title & Company */}
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-lg md:text-xl leading-tight mb-1 group-hover:text-pink-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-neutral-400 font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>

                      {/* Duration Badge */}
                      <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-800/50 rounded-lg border border-neutral-700/50 text-[10px] uppercase font-bold tracking-wider text-neutral-400 whitespace-nowrap">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </div>
                    </div>

                    {/* Mobile Duration */}
                    <div className="sm:hidden inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-800/50 rounded-lg border border-neutral-700/50 text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-4">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                    </div>

                    {/* Description Points */}
                    <ul className="space-y-3 border-t border-neutral-800/50 pt-4">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 shadow-[0_0_5px_rgba(236,72,153,0.5)]" />
                            <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </motion.div>
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}