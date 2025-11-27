"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Define the interface for the project data
interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  websiteHref: string;
  caseStudyHref: string;
  meta: {
    year: string;
    role: string;
    platform: string[];
    stack: string[];
  };
}

interface StickyProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

export default function StickyProjectCard({ project, index, total }: StickyProjectCardProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Animation: Scale down slightly as the next card comes up
  // The 'range' ensures the effect only happens when the card is sticking at the top
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
      // Dynamic top offset so cards stack with a slight visual "peek" (optional)
      style={{ top: `calc(5vh + ${index * 20}px)` }} 
    >
      <motion.div
        style={{ 
            scale: index === total - 1 ? 1 : scale, // Don't scale the last card
            opacity: index === total - 1 ? 1 : opacity // Don't fade the last card
        }} 
        className="relative flex h-[80vh] w-full max-w-6xl origin-top flex-col overflow-hidden rounded-[3rem] border border-white/60 bg-white shadow-2xl md:flex-row"
      >
        
        {/* --- IMAGE SECTION (Left/Top) --- */}
        <div className="relative h-1/2 w-full overflow-hidden bg-slate-100 md:h-full md:w-1/2 group">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={index === 0} // Prioritize loading the first image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
          
          {/* Number Badge */}
          <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-900 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* --- CONTENT SECTION (Right/Bottom) --- */}
        <div className="flex h-1/2 w-full flex-col justify-between bg-white p-6 md:h-full md:w-1/2 md:p-12">
          
          {/* Top Info */}
          <div>
            <div className="mb-4 flex flex-wrap gap-2 md:mb-6">
              {project.meta.platform.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-4 font-serif text-3xl font-medium leading-tight text-slate-900 md:text-5xl">
              {project.title}
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-slate-500 md:text-lg">
              {project.description}
            </p>
          </div>

          {/* Middle: Tech Stack */}
          <div className="mt-6 border-t border-slate-100 py-6">
            <p className="mb-3 text-xs uppercase tracking-widest text-slate-400">
              Technologies
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-700">
              {project.meta.stack.map((tech) => (
                <span key={tech}>• {tech}</span>
              ))}
            </div>
          </div>

          {/* Bottom: Links */}
          <div className="mt-auto flex gap-4">
            <Link href={project.websiteHref} target="_blank" className="flex-1">
              <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 font-medium text-white transition-all hover:bg-slate-800">
                View Live
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link href={project.caseStudyHref} className="flex-1">
              <button className="w-full rounded-xl border border-slate-200 bg-white py-4 font-medium text-slate-900 transition-all hover:bg-slate-50">
                Case Study
              </button>
            </Link>
          </div>
        </div>

      </motion.div>
    </div>
  );
}