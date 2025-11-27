"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, LayoutTemplate, PenTool, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BentoGridItem from "../mvpblocks/bento-grid-1";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { Badge } from "../ui/badge";

const items = [
  {
    title: "Full-Stack Architecture",
    description: "Building robust, production-ready applications with Next.js 14, TypeScript, and secure backend integrations.",
    icon: <Code className="size-5 text-blue-500" />, // Slightly smaller icon inside the circle looks cleaner
    size: 'large' as const,
    image: "/web.avif",
  },
  {
    title: "AI & ML Integration",
    description: "Embedding intelligent features like computer vision and predictive models directly into modern web interfaces.",
    icon: <Sparkles className="size-5 text-blue-500" />,
    size: 'small' as const,
  },
  {
    title: "Scalable Systems",
    description: "Designing efficient database schemas and APIs that ensure performance, security, and ease of maintenance.",
    icon: <LayoutTemplate className="size-5 text-blue-500" />,
    size: 'small' as const,
  },
  {
    title: "Interactive UI/UX",
    description: "Crafting pixel-perfect, accessible designs with Tailwind CSS and smooth Framer Motion animations.",
    icon: <PenTool className="size-5 text-blue-500" />,
    size: 'large' as const,
    image: "/des.avif",
  },
];

export default function ServicesSection() {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    // refined background color to match the "cool grey" reference
    <section className="py-20 md:py-32 px-4 rounded-[56px] md:px-6 bg-[#E3E9F0] overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-white p-2 text-gray-600 border border-gray-100 shadow-sm rounded-full pr-4 gap-3 hover:bg-white">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center"
              >
                <Sparkles className="size-4 text-slate-600" />
              </motion.div>
              <span className="text-xs font-semibold text-slate-800 tracking-wide">Services</span>
            </Badge>
          </div>

          <>
              {isMobile ? (
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium font-sans text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Crafting Digital <br className="hidden sm:block" /> Excellence
                </h2>
              ) : (
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium font-sans text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Crafting Digital Excellence
                </h2>
              )}
            </>
          

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Building smooth and engaging digital interactions that elevate user satisfaction
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-5"
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
              className={cn(
                item.size === 'large' ? 'md:col-span-3' : 'md:col-span-2'
              )}
            />
          ))}
        </motion.div>

        {/* Bottom Buttons */}
         {/* 4. BUTTONS: Forced Row Layout for Mobile (Side-by-Side) */}
          <div className="flex flex-row items-center justify-center gap-3 w-full pt-5">
            
            {/* Dark Button */}
            <Link href="/contact" className="flex-1 sm:flex-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto bg-[#1C2333] text-white px-4 py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 hover:bg-[#2a344a] transition-all"
              >
                <ArrowUpRight className="w-5 h-5" /> Contact Me
              </motion.button>
            </Link>

            {/* Light Button */}
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
