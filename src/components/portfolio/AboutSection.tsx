"use client";

import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, Instagram, Twitter, Send, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ExperienceItem {
  role: string;
  company: string;
  year: string;
}

export default function AboutSection() {
  const skills: string[] = [
    "Full-Stack Development", "React", "JavaScript", "DevOps Engineering",
    "Node.js", "TypeScript", "UI/UX Design", "Google Cloud", "Docker"
  ];

  const experience: ExperienceItem[] = [
    { role: "Full Stack Developer", company: "TheSerifs", year: "May 2025 - present" },
    { role: "Full Stack Developer", company: "Accenture", year: "Sep 2021 - May 2025" },
    { role: "Trainee (MERN Stack)", company: "Robotronix Ind", year: "Aug 2020 - May 2021" },
    { role: "Intern (MERN Stack)", company: "BiteByte", year: "Feb 2020 - Aug 2020" }
  ];

  const handleContactClick = (): void => {
    console.log("Contact button clicked");
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 min-h-screen bg-[#eff2f5]">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Stacks on mobile (1 col), split on Desktop (12 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT COLUMN: PROFILE CARD --- */}
          {/* isMobile logic: On mobile, this is full width but centered. On Desktop, it spans 4 cols. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-8 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="bg-white rounded-[32px] p-4 shadow-sm border border-white/50">
              
              {/* Image Container - Responsive Aspect Ratio */}
              {/* CHANGED: Removed fixed w-[364px]. Now it fills the card width. */}
              <div className="w-full aspect-[0.9] relative rounded-[24px] overflow-hidden mb-6 bg-gray-100">
                <Image
                  src="/rudransh-chouksey.jpg"
                  alt="Rudransh Chouksey"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Card Content */}
              <div className="text-center px-2 pb-2">
                
                {/* Status Dot */}
                <div className="flex items-center justify-center gap-2.5 mb-5">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="text-sm font-medium text-gray-500 tracking-wide">available for work</span>
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl md:text-2xl font-serif text-slate-900 mb-2.5 tracking-tight">
                  Rudransh Chouksey
                </h3>
                <p className="text-sm font-sans text-gray-500 mb-8 leading-relaxed max-w-[80%] mx-auto">
                  Full Stack Web Developer Based in India.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-8">
                  {[
                    { icon: <GithubIcon size={20} />, href: "https://github.com/rudranshchouksey" },
                    { icon: <Instagram size={20} />, href: "https://www.instagram.com/rudranshchouksey/" },
                    { icon: <Twitter size={20} />, href: "https://x.com/RudraChouksey" },
                    { icon: <LinkedinIcon size={20} />, href: "https://www.linkedin.com/in/rudransh-chouksey/" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:scale-110 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Contact Button */}
                <Link href="/contact" className="w-full">
                  <button
                    // You can remove onClick if it was just for logging
                    className="w-full bg-[#1C2333] text-white py-4 rounded-2xl font-semibold text-base hover:bg-[#2a344a] transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group active:scale-95"
                  >
                    <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: DETAILS --- */}
          <div className="lg:col-span-8 space-y-8 lg:mt-2">
            
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-white/50"
            >
              <h3 className="text-xl font-serif text-slate-900 mb-4">About Me</h3>
              <p className="text-base md:text-lg text-slate-600 font-sans leading-relaxed">
                I&apos;m Rudransh Chouksey, a passionate Full-Stack Developer & DevOps Engineer with over 4 years of experience crafting exceptional digital solutions. I blend innovative development with robust technical infrastructure to deliver outstanding web experiences that drive real business results.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-white/50"
            >
              <h3 className="text-xl font-serif text-slate-900 mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-[#F3F5F8] text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-white/50 space-y-6"
            >
              <h3 className="text-xl font-serif text-slate-900 mb-2">Experience</h3>
              <div className="space-y-4">
                {experience.map((job, index) => (
                  <div 
                    key={index} 
                    // isMobile Logic: Stacks vertically on mobile (flex-col), horizontal on desktop (md:flex-row)
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl hover:bg-[#F3F5F8] transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex flex-col md:flex-row md:gap-3 md:items-center">
                      <h4 className="text-slate-800 font-semibold text-base">{job.role}</h4>
                      <span className="hidden md:block text-slate-300">•</span>
                      <p className="text-slate-500 text-sm font-medium">{job.company}</p>
                    </div>
                    
                    <span className="mt-2 md:mt-0 px-3 py-1 bg-[#F3F5F8] text-slate-600 text-xs font-semibold rounded-lg w-fit">
                      {job.year}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}