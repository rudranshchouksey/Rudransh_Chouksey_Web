"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, LayoutTemplate, PenTool } from "lucide-react";
import Link from "next/link";
import BentoGridItem from "../mvpblocks/bento-grid-1"; // Assuming this path is correct
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Full-Stack Architecture",
    description: "Building robust, production-ready applications with Next.js 14, TypeScript, and secure backend integrations.",
    icon: <Code className="size-6 text-slate-800" />,
    size: 'large' as const,
    image: "/web.avif",
  },
  {
    title: "AI & ML Integration",
    description: "Embedding intelligent features like computer vision and predictive models directly into modern web interfaces.",
    icon: <Sparkles className="size-6 text-slate-800" />,
    size: 'small' as const,
  },
  {
    title: "Scalable Systems",
    description: "Designing efficient database schemas and APIs that ensure performance, security, and ease of maintenance.",
    icon: <LayoutTemplate className="size-6 text-slate-800" />,
    size: 'small' as const,
  },
  {
    title: "Interactive UI/UX",
    description: "Crafting pixel-perfect, accessible designs with Tailwind CSS and smooth Framer Motion animations.",
    icon: <PenTool className="size-6 text-slate-800" />,
    size: 'large' as const,
    image: "/des.avif",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#DCE3E8] overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* --- Header Section --- */}
        <div className="text-center mb-12 md:mb-16">
          
          {/* Service Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-white/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">Services</span>
            </div>
          </div>

          {/* Heading - FIXED SIZE FOR MOBILE */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-sans text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Crafting Digital <br className="hidden sm:block" /> Excellence
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-500 max-w-lg md:max-w-2xl mx-auto leading-relaxed">
            Building smooth and engaging digital interactions that elevate user satisfaction
          </p>
        </div>

        {/* --- Grid Section --- */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              image={item.image}
              size={item.size}
              // Logic: On mobile (default) 1 col. On Desktop: 3/5 split.
              className={cn(
                item.size === 'large'
                  ? 'md:col-span-3' 
                  : 'md:col-span-2'
              )}
            />
          ))}
        </motion.div>

        {/* --- Bottom Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
        >
          {/* Black Button */}
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#0E1C29] text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-95">
              <span className="text-lg">Get In Touch</span>
            </button>
          </Link>

          {/* White Button */}
          <Link href="/projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white transition-all border border-white/60 shadow-sm active:scale-95">
              <span className="text-lg">See Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}