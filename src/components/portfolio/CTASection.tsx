"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, ArrowUpRight, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="pt-24 pb-8 px-6 bg-[#DCE3E8] relative overflow-hidden">

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-4xl mx-auto text-center relative z-10 mb-28">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 1. HANDSHAKE ICON with PULSING ANIMATION & NEW GRADIENT */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }} // Zoom in to 1.1, then back to 1
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            // CHANGED: Replaced bg-slate-900 with bg-gradient-to-br from-purple-600 to-pink-600
            // CHANGED: Updated shadow color to match the gradient
            className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-purple-500/30"
          >
            <Handshake className="w-10 h-10 text-white" />
          </motion.div>

          {/* 2. Typography */}
          <h2 className="text-[48px] md:text-7xl font-normal font-sans text-slate-900 mb-4 tracking-tight">
            Tell Me About Your Next
            <br />
            Creative Project
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed">
            Let&apos;s create captivating digital experiences that engage audiences and drive
            meaningful brand interactions across diverse platforms
          </p>

          {/* 3. BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Dark Contact Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" /> Contact Me
              </motion.button>
            </Link>

            {/* Light Projects Button */}
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ArrowRight className="w-5 h-5" /> See Projects
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </div>

      {/* 4. FOOTER LINKS SECTION */}
      <div className="max-w-6xl mx-auto border-t border-slate-300/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">

        {/* Left: Copyright */}
        <div>
          © 2025 Rudransh Chouksey
        </div>

        {/* Center Spacer */}
        <div className="md:flex-1"></div>

        {/* Right: Credits */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center">
          <span>
            Made by <a href="#" className="text-slate-700 hover:text-slate-900 underline underline-offset-4 decoration-slate-300 transition-colors">Me</a>
          </span>
          <span>
            Built in <a href="#" className="text-slate-700 hover:text-slate-900 underline underline-offset-4 decoration-slate-300 transition-colors">2025</a>
          </span>
        </div>
      </div>
    </section>
  );
}