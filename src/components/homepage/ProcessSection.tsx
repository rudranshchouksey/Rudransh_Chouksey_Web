"use client"

import { FeatureSteps } from "@/components/homepage/feature-section"

const features = [
  {
    step: 'Step 1',
    title: 'Connect & Discuss',
    content: 'Reach out via the contact page and share your project details. We’ll hop on a call to understand your goals, challenges, and vision clearly.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop'
  },
  {
    step: 'Step 2',
    title: 'Design & Validate',
    content: 'I craft clean, modern, and experience-driven UI/UX designs. Together, we refine concepts until the direction aligns perfectly with your ambition.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2670&auto=format&fit=crop'
  },
  {
    step: 'Step 3',
    title: 'Build & Develop',
    content: 'I turn approved designs into a scalable, production-ready application with high performance, strong security, and smooth interactions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    step: 'Step 4',
    title: 'Launch & Support',
    content: 'After thorough testing and deployment, your product goes live. Enjoy continuous support, improvements, and guidance whenever needed.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
  },
];

export default function ProcessSection() {
  return (
      <FeatureSteps 
        features={features}
        title="From Vision to Execution"
        autoPlayInterval={2500}
        imageHeight="h-[500px]"
      />
  )
}
/*
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Layers } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

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
    },
  ];

  return (
    // 1. Responsive Padding: py-16 on mobile, py-24 on desktop
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F3F5F8] relative overflow-hidden">

      <div className="absolute top-0 -left-64 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 -right-64 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-white p-2 text-gray-600 border border-gray-100 shadow-sm rounded-full pr-4 gap-3 hover:bg-white">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center"
              >
                <Layers className="size-4 text-slate-600" />
              </motion.div>
              <span className="text-xs font-semibold text-slate-800 tracking-wide">Process</span>
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-sans text-slate-900 mb-4 tracking-tight leading-tight">
            From Vision <br className="block sm:hidden" /> to Execution
          </h2>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto pb-2 mt-0 px-4">
            A refined design process that ensures consistency, creativity for every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-5">
          {steps.map((step: ProcessStep, index: number) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // Responsive Padding: p-8 on mobile, p-10 on desktop
              // h-auto on mobile to fit content, fixed height on desktop for alignment
              className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col h-auto md:h-[292px] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4 flex-1">
                {step.description}
              </p>

              <div className="w-full border-b-2 border-dotted border-slate-100 mb-4 md:mb-6"></div>

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

          <div className="flex flex-row items-center justify-center gap-3 w-full">
            
            <Link href="/contact" className="flex-1 sm:flex-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto bg-[#1C2333] text-white px-4 py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 hover:bg-[#2a344a] transition-all"
              >
                <ArrowUpRight className="w-5 h-5" /> Contact Me
              </motion.button>
            </Link>

            <Link href="/projects" className="flex-1 sm:flex-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto bg-gradient-to-b from-white to-slate-50 text-slate-700 px-4 py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 border border-white/60 shadow-sm hover:bg-white transition-all"
              >
                <ArrowRight className="w-5 h-5" /> See Projects
              </motion.button>
            </Link>
          </div>

      </div>
    </section>
  );
}
*/