"use client"

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  label: string;
}

export default function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Connect & Discuss",
      description: "Reach out via the contact page and share your project details. We’ll hop on a call to understand your goals, challenges, and vision clearly.",
      label: "step1",
    },
    {
      number: "02",
      title: "Design & Validate",
      description: "I craft clean, modern, and experience-driven UI/UX designs. Together, we refine concepts until the direction aligns perfectly with your ambition.",
      label: "step2",
    },
    {
      number: "03",
      title: "Build & Develop",
      description: "I turn approved designs into a scalable, production-ready application with high performance, strong security, and smooth interactions.",
      label: "step3",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "After thorough testing and deployment, your product goes live. Enjoy continuous support, improvements, and guidance whenever needed.",
      label: "step4",
    }
  ];

  return (
    // 1. Background Color: A clean, cool gray to make white pop
    <section className="py-24 px-6 bg-[#F3F5F8] relative overflow-hidden">

      {/* Optional: Subtle ambient blur blobs behind the content for extra depth */}
      <div className="absolute top-0 -left-64 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 -right-64 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <Layers className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">Process</span>
            </div>
          </div>

          <h2 className="text-[56px] md:text-6xl font-normal font-sans text-slate-900 mb-4">
            From Vision to Execution
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto pb-2 mt-0">
            A refined design process that ensures consistency, creativity for every project
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {steps.map((step: ProcessStep, index: number) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col h-[292px] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-slate-500 text-base leading-relaxed mb-2 flex-1">
                {step.description}
              </p>

              <div className="w-full border-b-2 border-dotted border-slate-100 mb-6"></div>

              <div className="text-right pb-0">
                <div className="inline-block bg-slate-50 px-4 py-2 rounded-xl">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {step.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Link href="/contact">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
              <ArrowRight className="w-5 h-5 -rotate-45" />
              Contact Me
            </button>
          </Link>

          <Link href="/projects">
            <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors border border-gray-200 shadow-sm">
              <ArrowRight className="w-5 h-5" />
              See Projects
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}