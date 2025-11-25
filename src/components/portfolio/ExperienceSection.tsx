"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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
      description: "Leading full-stack initiatives for 15+ international clients. Improved page load speeds by 40% and reduced deployment times from 2 hours to 15 minutes via CI/CD automation. Mentored junior devs and standardized Git workflows.",
      logo: "/theserifs_logo.jpg"
    },
    {
      company: "TwinPix",
      role: "Freelance Full-Stack & Branding",
      duration: "Jan 2025 - Present",
      description: "Delivered 25+ projects with 99.9% uptime. Specialized in AI-driven analytics modules and Web Branding, combining technical dev with creative marketing strategies.",
      logo: "/twinpix-logo.png"
    },
    {
      company: "Accenture",
      role: "Security Delivery Analyst / SE",
      duration: "Sep 2021 - May 2025",
      description: "Supported 50+ applications and reduced server downtime by 20% using AWS fault-tolerant architectures. Authored 150+ automated tests to cut production defects by 35%.",
      logo: "/accenture_logo.jpg"
    },
    {
      company: "Robotronix India",
      role: "AI/ML Development Intern",
      duration: "Aug 2020 - May 2021",
      description: "Built predictive ML models achieving 85% accuracy. Deployed lightweight inference services using Python & Flask, accelerating data-driven decision-making.",
      logo: "/Robotronix-india.jpg"
    },
    {
      company: "BitByte Software Technology",
      role: "Full Stack Developer Intern",
      duration: "Feb 2020 - Aug 2020",
      description: "Engineered an AI-powered Resume Parser with 85% accuracy, reducing HR effort by 60%. Optimized Node.js APIs to improve retrieval efficiency by 40% and increased mobile retention by 20% via React/Tailwind UI refinements.",
      logo: "/Bit-byte.jpg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Briefcase className="w-10 h-10 text-gray-500 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional journey and key contributions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-16">
            {experiences.map((exp: Experience, index: number) => (
              <div
                key={index}
                className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{exp.role}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}