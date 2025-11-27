"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, ArrowUpRight, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/lib/hooks/use-mobile";

export default function CTASection() {
  const isMobile = useIsMobile()
  return (
    // Padding adjusted to match the breathing room in the image
    <section className="py-20 px-4 bg-[#DCE3E8] rounded-t-[40px] md:rounded-t-[56px] relative overflow-hidden">

      <div className="max-w-xl mx-auto text-center relative z-10 mb-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 1. ICON: Dark Navy Circle (Matches Image) */}
          <div className="w-20 h-20 bg-gradient-to-b from-[#243447] to-[#141b25] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-slate-900/20 ring-1 ring-white/10">
            <Handshake className="w-10 h-10 text-white stroke-[1.5]" />
          </div>

          {/* 2. HEADING: Tuned to break exactly like the image on mobile */}
          {isMobile ? (
            <h2 className="text-[40px] leading-[1.15] sm:text-5xl md:text-6xl font-normal font-sans text-slate-900 mb-6 tracking-tight">
            Tell Me About Your<br />
            Next Creative<br />
            Project
          </h2>
          ) : (
            <h2 className="text-[40px] leading-[1.15] text-6xl font-normal font-sans text-slate-900 mb-6 tracking-tight">
            Tell Me About Your Next <br />
            Creative Project
          </h2>
          )}

          {/* 3. SUBTEXT */}
          <p className="text-[15px] sm:text-lg text-slate-500 max-w-xs sm:max-w-md mx-auto mb-10 leading-relaxed font-medium">
            Let&apos;s create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms
          </p>

          {/* 4. BUTTONS: Forced Row Layout for Mobile (Side-by-Side) */}
          <div className="flex flex-row items-center justify-center gap-3 w-full">
            
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

        </motion.div>
      </div>

      {/* Footer / Credits Section (Optional, kept from previous) */}
      <div className="max-w-6xl mx-auto border-t border-slate-300/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">
        <div>© 2025 Rudransh Chouksey</div>
        <div className="hidden md:block md:flex-1"></div>
        <div className="flex gap-4">
          <span>Made by <span className="text-slate-700">Me</span></span>
          <span>Built in <span className="text-slate-700">2025</span></span>
        </div>
      </div>
    </section>
  );
}