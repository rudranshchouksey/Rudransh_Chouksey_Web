"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "The Serif's",
      role: "Lead Full Stack Developer",
      duration: "May 2025 - Present",
      description: "Leading full-stack initiatives for 15+ international clients. Improved page load speeds by 40% and reduced deployment times via CI/CD automation.",
      // Make sure this file exists in your 'public' folder
      logo: "/theserifs_logo.jpg" 
    },
    {
      company: "TwinPix",
      role: "Freelance Full-Stack & Branding",
      duration: "Jan 2025 - Present",
      description: "Delivered 25+ projects with 99.9% uptime. Specialized in AI-driven analytics modules and Web Branding.",
      logo: "/twinpix-logo.png"
    },
    {
      company: "Accenture",
      role: "Security Delivery Analyst / SE",
      duration: "Sep 2021 - May 2025",
      description: "Supported 50+ applications and reduced server downtime by 20% using AWS fault-tolerant architectures.",
      logo: "/accenture_logo.jpg"
    },
    {
      company: "Robotronix India",
      role: "AI/ML Development Intern",
      duration: "Aug 2020 - May 2021",
      description: "Built predictive ML models achieving 85% accuracy. Deployed lightweight inference services using Python & Flask.",
      logo: "/Robotronix-india.jpg"
    },
    {
      company: "BitByte Software Technology",
      role: "Full Stack Developer Intern",
      duration: "Feb 2020 - Aug 2020",
      description: "Engineered an AI-powered Resume Parser with 85% accuracy. Optimized Node.js APIs to improve retrieval efficiency by 40%.",
      logo: "/Bit-byte.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-2xl mb-4">
            <Briefcase className="w-6 h-6 text-gray-900" />
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            Work Experience
          </h2>
          <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto">
            A timeline of my professional journey and key contributions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-200 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp: Experience, index: number) => (
              <div
                key={index}
                className={cn(
                  "relative flex items-center md:justify-between w-full",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-slate-900 rounded-full z-10 shadow-[0_0_0_4px_white]" />

                {/* Content Card Wrapper */}
                <div className={cn(
                  "w-full pl-12 md:w-[calc(50%-2rem)] md:pl-0", 
                )}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 md:p-8 rounded-[24px] shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    
                    {/* Job Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      {/* Logo Container - UPDATED FOR VISIBILITY */}
                      <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-xl overflow-hidden border border-gray-100 p-2 shadow-sm">
                        {/* Make sure your images are in the /public folder.
                           Example: /public/theserifs_logo.jpg
                        */}
                        <Image
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          width={56} // Explicit width
                          height={56} // Explicit height
                          className="object-contain w-full h-full"
                        />
                      </div>
                      
                      {/* Title & Company */}
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg md:text-xl leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-gray-500 font-medium text-sm md:text-base">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-600 mb-4">
                      {exp.duration}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty Spacer for Desktop Layout Balance */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}