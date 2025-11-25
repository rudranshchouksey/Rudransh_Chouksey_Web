"use client"

import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

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
      title: "Let's Get In Touch",
      description: "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project",
      label: "step1"
    },
    {
      number: "02",
      title: "Grab Your Designs",
      description: "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals",
      label: "step2"
    },
    {
      number: "03",
      title: "Kickstart Development",
      description: "I expertly transform your designs into a powerful, scalable solution, fully ready to launch",
      label: "step3"
    },
    {
      number: "04",
      title: "And Hand Over",
      description: "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support",
      label: "step4"
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

          <h2 className="text-4xl md:text-6xl font-medium text-slate-900 mb-6">
            From Vision to Execution
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A refined design process that ensures consistency, creativity for every project
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step: ProcessStep, index: number) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // 2. THE CARD STYLE:
              // - bg-white: Pure white card
              // - rounded-[2.5rem]: Very soft corners
              // - shadow-[...]: The key to the "blur" look. A large, very soft shadow.
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col h-full hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-8 shadow-md">
                {step.number}
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>

              <p className="text-slate-500 text-lg leading-relaxed mb-8 flex-1">
                {step.description}
              </p>

              <div className="w-full border-b-2 border-dotted border-slate-100 mb-6"></div>

              <div className="text-right">
                <div className="inline-block bg-slate-50 px-4 py-2 rounded-xl">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {step.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}