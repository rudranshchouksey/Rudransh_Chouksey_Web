"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers, PenTool, GitBranch, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export type ClassicCaseStudyProps = {
  backHref?: string;
  prev?: { href: string; title: string } | null;
  next?: { href: string; title: string } | null;
  project: {
    id: string | number;
    title: string;
    category?: string;
    year?: string | number;
    image: string;
    overview?: string;
    process?: string[];
    gallery?: { src: string; alt?: string }[] | string[];
    techStack?: string[];
    results?: string;
  };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const processIcons = [PenTool, GitBranch, Layers, Zap];

export function CaseStudyClassic({
  backHref = "/",
  prev,
  next,
  project,
}: ClassicCaseStudyProps) {
  const gallery = (project.gallery || []).map((g) =>
    typeof g === "string" ? { src: g } : g
  );

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={project.id} // important for AnimatePresence
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="min-h-screen bg-[#0a0a0a] text-[#ffffff] font-sans"
      >
        {/* Hero */}
        <motion.section
          className="h-screen flex flex-col justify-center items-center relative overflow-hidden"
          variants={itemVariants}
        >
          {backHref && (
            <Link
              href={backHref}
              className="absolute top-8 left-8 z-20 text-[#ffffff] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          )}

          <motion.div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title || "Project image"}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center z-10 px-4"
          >
            {project.category && (
              <p className="text-[#3b82f6] font-medium mb-4 tracking-wide">
                {project.category}
              </p>
            )}
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#ffffff] leading-tight tracking-tight">
              {project.title}
            </h1>
          </motion.div>
        </motion.section>

        {/* Body */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6 py-24"
        >
          {/* Overview */}
          {project.overview && (
            <motion.section variants={itemVariants} className="mb-24">
              <h2 className="text-4xl font-heading font-bold text-[#ffffff] mb-8">
                Project Overview
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                {project.overview}
              </p>
            </motion.section>
          )}

          {/* Process */}
          {project.process?.length > 0 && (
            <motion.section variants={itemVariants} className="mb-24">
              <h2 className="text-4xl font-heading font-bold text-[#ffffff] mb-16 text-center">
                Design & Development Process
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.process.map((step, idx) => {
                  const Icon = processIcons[idx % processIcons.length];
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl hover:border-[#3b82f6]/30 transition-all duration-300"
                    >
                      <div className="text-[#3b82f6] bg-[#3b82f6]/20 p-4 rounded-full">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-gray-200 text-lg leading-relaxed">
                        {step}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* Gallery */}
          {gallery.length > 0 && (
            <motion.section variants={itemVariants} className="mb-24">
              <h2 className="text-4xl font-heading font-bold text-[#ffffff] mb-16 text-center">
                Project Gallery
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className={cn(
                      "rounded-2xl overflow-hidden shadow-2xl border border-white/10",
                      index === 0 ? "col-span-2" : ""
                    )}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || `Project image ${index + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                      sizes={
                        index === 0
                          ? "(max-width:768px) 100vw, 800px"
                          : "(max-width:768px) 50vw, 400px"
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Tech & Results */}
          {(project.techStack?.length || project.results) && (
            <motion.section
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-16 mb-24"
            >
              {project.techStack?.length > 0 && (
                <div>
                  <h2 className="text-3xl font-heading font-bold text-[#ffffff] mb-8">
                    Technical Stack
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="bg-white/10 text-gray-200 px-4 py-2 rounded-full text-sm font-medium border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.results && (
                <div>
                  <h2 className="text-3xl font-heading font-bold text-[#ffffff] mb-8">
                    Results
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {project.results}
                  </p>
                </div>
              )}
            </motion.section>
          )}

          {/* Nav */}
          {(prev || next) && (
            <motion.section
              variants={itemVariants}
              className="flex justify-between items-center border-t border-white/20 pt-16"
            >
              {prev ? (
                <Link href={prev.href} className="group">
                  <p className="text-sm text-gray-400">Previous Project</p>
                  <div className="flex items-center gap-2 text-[#ffffff] font-semibold group-hover:text-[#3b82f6] transition-colors">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>{prev.title}</span>
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={next.href} className="text-right group">
                  <p className="text-sm text-gray-400">Next Project</p>
                  <div className="flex items-center gap-2 text-[#ffffff] font-semibold group-hover:text-[#3b82f6] transition-colors">
                    <span>{next.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ) : (
                <span />
              )}
            </motion.section>
          )}
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}

export default CaseStudyClassic;