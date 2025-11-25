"use client"

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, Check, ArrowUpRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Adjust path if needed

export default function ComparisonSection() {
  const myFeatures: string[] = [
    "Full-Stack Architecture (Next.js & TypeScript)",
    "Custom AI & Machine Learning Model Integration",
    "Scalable Backend, Database & API Design",
    "Pixel-Perfect UI with Framer Motion Animations",
    "SEO-Optimized, Blazing-Fast Performance",
    "4+ Years of Production-Ready Code Quality",
    "Secure Authentication & Cloud Deployment",
  ];

  const othersFeatures: string[] = [
    "Basic Template-Based or Copied Designs",
    "Limited Frontend Skills (No Backend Logic)",
    "Static Websites with No Intelligent Features",
    "Poor Optimization & Slow Load Times",
    "Unscalable Architecture & Spaghetti Code",
    "Generic UI with Basic or Jittery Interactions",
  ];

  return (
    // 1. Same cool gray background
    <section className="py-24 px-6 bg-[#DCE3E8] relative overflow-hidden">

      {/* Optional subtle background blur markers */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-white p-2 text-gray-600 border border-gray-100 shadow-sm rounded-full pr-4 gap-3 hover:bg-white">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center"
              >
                <ArrowRightLeft className="size-4 text-slate-600" />
              </motion.div>
              <span className="text-xs font-semibold text-slate-800 tracking-wide">Comparison</span>
            </Badge>
          </div>

          <h2 className="text-5xl md:text-6xl font-sans font-normal text-slate-900 mb-4 mt-1">
            Precision vs Basic
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Precision-driven design and animations, surpassing static and unengaging layouts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start mt-5">

          {/* ME CARD (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // 2. Premium soft shadow style
            className="bg-white rounded-[3rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-white/50 flex flex-col h-full relative z-10"
          >
            <div className="text-center">
              <h3 className="text-3xl font-sans font-normal text-slate-900 mb-3">Me</h3>
              <div className="w-full border-b-2 border-dotted border-slate-100 mb-2" />
            </div>

            <div className="space-y-6 flex-1 mb-10">
              {myFeatures.map((feature: string, index: number) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  {/* Changed to a subtle blue/slate checkmark */}
                  <div className="w-7 h-7 mt-0.5 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-slate-700" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium leading-relaxed p-0">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <button className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-900/20">
                Contact Me <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* OTHERS CARD (Subtle) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // Slightly softer shadow for the secondary card
            className="bg-white rounded-[3rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-white/50 md:scale-95 md:opacity-80 hover:opacity-100 transition-all duration-500"
          >
            <div className="text-center">
              <h3 className="text-3xl font-sans font-normal text-slate-900 mb-2">Others</h3>
              <div className="w-full border-b-2 border-dotted border-slate-100 mb-2" />
            </div>

            <div className="space-y-6">
              {othersFeatures.map((feature: string, index: number) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start "
                >
                  {/* Subtle gray X icon */}
                  <div className="w-7 h-7 mt-0.5 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-gray-500 text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}