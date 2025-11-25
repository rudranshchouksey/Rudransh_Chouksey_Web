"use client"

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Monitor, Code, LayoutTemplate, PenTool } from "lucide-react";
import Link from "next/link";
import BentoGridItem from "../mvpblocks/bento-grid-1";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Full-Stack Architecture",
    description: "Building robust, production-ready applications with Next.js 14, TypeScript, and secure backend integrations.",
    icon: <Code className="size-7" />,
    size: 'large' as const,
    image: "/web.avif", // Kept your image
  },
  {
    title: "AI & ML Integration",
    description: "Embedding intelligent features like computer vision and predictive models directly into modern web interfaces.",
    icon: <Sparkles className="size-7" />, // Changed to Sparkles to represent AI magic
    size: 'small' as const,
    // No image
  },
  {
    title: "Scalable Systems",
    description: "Designing efficient database schemas and APIs that ensure performance, security, and ease of maintenance.",
    icon: <LayoutTemplate className="size-7" />, // Represents Structure/Layout
    size: 'small' as const,
    // No image
  },
  {
    title: "Interactive UI/UX",
    description: "Crafting pixel-perfect, accessible designs with Tailwind CSS and smooth Framer Motion animations.",
    icon: <PenTool className="size-7" />,
    size: 'large' as const,
    image: "/des.avif", // Kept your image
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
    <section className="py-24 px-6 bg-[#DCE3E8]">
      {/* Increased max-width slightly to accommodate the 1175px (705+470) layout */}
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-gray-100">
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">Services</span>
            </div>
          </div>
          <h2 className="text-[56px] md:text-5xl font-normal font-sans text-slate-900 mb-4">
            Crafting Digital Excellence
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-3">
            Building smooth and engaging digital interactions that elevate user satisfaction
          </p>
        </div>

        <motion.div
          // CHANGED: grid-cols-5 allows for the 3/5 (60%) and 2/5 (40%) split
          className="grid grid-cols-1 gap-6 md:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              image={item.image}
              size={item.size}
              className={cn(
                item.size === 'large'
                  ? 'md:col-span-3' // 3 cols out of 5 = ~60% width (approx 705px)
                  : 'md:col-span-2' // 2 cols out of 5 = ~40% width (approx 470px)
              )}
            />
          ))}
        </motion.div>

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