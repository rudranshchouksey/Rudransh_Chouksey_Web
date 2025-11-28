"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projects from "@/data/projects";

// --- INTERFACES ---
interface ProjectProps {
    id: string;
    slug: string;
    number?: string;
    title: string;
    description: string;
    imageUrl: string;
    websiteHref: string;
    meta: {
      role: string;
      platform: string[];
      stack: string[];
    };
}

// --- MAIN COMPONENT ---
export default function ScrollProjectSlideshow() {
  return (
    <ReactLenis root>
      <section className="relative flex w-full flex-col items-center gap-[5vh] px-4 pt-[15vh] pb-[50vh] bg-[#E2E8ED]">
        
        {/* Intro / Scroll Indicator */}
        <div className="absolute left-1/2 top-10 grid -translate-x-1/2 content-start justify-items-center gap-4 text-center z-0">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 font-bold tracking-widest text-slate-900 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-slate-900 after:to-transparent after:content-[''] after:mt-2">
            scroll down
          </span>
        </div>

        {/* Title Section */}
        <div className="relative z-10 text-center mb-10 max-w-2xl px-6">
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-4">
                Selected Works
            </h2>
            <p className="text-lg text-slate-500">
                Crafted with precision and purpose.
            </p>
        </div>

        {/* Cards Loop */}
        {projects.map((project, idx) => (
          <StickyProjectCard key={project.id} project={project} index={idx} total={projects.length} />
        ))}

      </section>
    </ReactLenis>
  );
};


// --- STICKY CARD COMPONENT ---
const StickyProjectCard = ({ project, index, total }: { project: ProjectProps, index: number, total: number }) => {
  const container = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(Infinity);

  const filter = useMotionValue(0);
  const negateFilter = useTransform(filter, (value) => -value);

  const { scrollY } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  // Scale Animation Logic
  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 2000], [1, 0.8]);
  
  const isInView = useInView(container, {
    margin: `0px 0px -50% 0px`,
    once: true,
  });

  scrollY.on("change", (currentScrollY) => {
    let animationValue = 1;
    if (currentScrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (currentScrollY - maxScrollY) / 2000);
    }
    scale.set(animationValue);
    filter.set((1 - animationValue) * 5);
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView, scrollY]);

  return (
    <motion.div
      ref={container}
      className="sticky w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-white/60"
      style={{
        scale: scale,
        rotate: filter,
        // Mobile Height: 80vh to fit content. Desktop: dynamic calculation.
        height: `80vh`, 
        top: `calc(10vh + ${index * 15}px)`, 
        zIndex: index + 1,
      }}
    >
        <motion.div 
            className="relative flex flex-col md:flex-row h-full w-full"
            style={{ rotate: negateFilter }}
        >
            
            {/* --- IMAGE SECTION --- */}
            {/* Mobile: 30% Height | Desktop: 50% Width / Full Height */}
            <div className="relative w-full h-[30%] md:h-full md:w-1/2 bg-slate-100 overflow-hidden group">
                <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm z-10">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            {/* Mobile: 70% Height | Desktop: 50% Width / Full Height */}
            <div className="flex flex-col w-full h-[70%] md:h-full md:w-1/2 bg-white relative">
                
                {/* Scrollable Text Area */}
                <div className="flex-1 overflow-y-auto p-5 md:p-12 no-scrollbar">
                    
                    {/* Platform Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.meta.platform.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-slate-200">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-5xl font-serif text-slate-900 mb-2 leading-tight">
                        {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm md:text-lg leading-relaxed pb-4">
                        {project.description}
                    </p>

                    {/* Tech Stack (Ensured Visibility) */}
                    <div className="pt-3 border-t border-slate-100">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Built With</p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                            {project.meta.stack.map(tech => (
                                <span key={tech} className="text-xs md:text-sm font-medium text-slate-700 bg-slate-50 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- FIXED BUTTONS AREA --- */}
                <div className="p-4 md:p-8 pt-3 border-t border-slate-50 bg-white z-20 shrink-0">
                  <div className="flex gap-3">
                      {/* View Live Button - Kept same */}
                      <Link href={project.websiteHref || '#'} target="_blank" className="flex-1">
                          <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all text-sm active:scale-95 shadow-lg shadow-slate-900/10">
                              View Live <ArrowUpRight size={16} />
                          </button>
                      </Link>

                      {/* Case Study Button - UPDATED */}
                      <Link href={`/projects/${project.slug}`} className="flex-1">
                          <button className="w-full py-3 bg-white border border-slate-200 text-slate-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-all text-sm active:scale-95">
                              Case Study
                          </button>
                      </Link>
                  </div>
              </div>

            </div>
        </motion.div>
    </motion.div>
  );
};