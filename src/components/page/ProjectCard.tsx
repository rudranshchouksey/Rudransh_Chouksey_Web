"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Define the Project type based on your data
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  websiteHref: string;
  caseStudyHref: string;
  meta: {
    role: string;
    stack: string[];
  };
}

interface CardProps {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const ProjectCard = ({ i, project, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  
  // Controls the animation of the card scaling down as you scroll past it
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`, // Creates the stacking "deck" offset
        }}
        className="relative flex flex-col h-[70vh] w-full max-w-5xl rounded-[2rem] border border-neutral-200 bg-white shadow-2xl origin-top overflow-hidden"
      >
        <div className="flex h-full w-full flex-col md:flex-row">
          
          {/* --- IMAGE SECTION --- */}
          <div className="relative h-1/2 w-full md:h-full md:w-[60%] overflow-hidden bg-gray-100 group">
            <Image
              fill
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Number Badge */}
            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-900 backdrop-blur-md z-10">
                {String(i + 1).padStart(2, "0")}
            </div>
          </div>

          {/* --- CONTENT SECTION --- */}
          <div className="flex h-1/2 w-full md:h-full md:w-[40%] flex-col justify-between p-6 md:p-10 bg-white">
            
            <div>
              <h2 className="mb-4 text-3xl font-serif font-medium text-slate-900 md:text-4xl">
                {project.title}
              </h2>
              <p className="text-base text-slate-500 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.meta.stack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full uppercase">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <Link href={project.websiteHref} target="_blank" className="flex-1">
                        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800">
                            Visit Site <ArrowUpRight size={16} />
                        </button>
                    </Link>
                    <Link href={project.caseStudyHref} className="flex-1">
                        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-900 transition-all hover:bg-slate-50">
                            Case Study
                        </button>
                    </Link>
                </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};