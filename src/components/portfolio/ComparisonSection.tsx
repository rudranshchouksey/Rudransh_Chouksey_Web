"use client";

import React from "react";
import Link from "next/link";
// We import the component. If it's named 'Component' in your file, we alias it to 'ElectricSplit' here.
// If your IDE complains, just ensure the file 'components/lightning-split.tsx' exists.
import { ElectricSplit } from "@/components/lightning-split"; 
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

// --- 1. YOUR DATA ---
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

// --- 2. LEFT SIDE CONTENT (Yours - Premium/Hero Style) ---
const MyContent = (
  <div className="h-full w-full flex items-center justify-center bg-black relative overflow-y-auto scrollbar-hide">
    {/* Subtle Grid Background for texture */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    
    {/* Ambient Glow Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

    <div className="max-w-xl w-full px-8 py-12 relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
        <Sparkles className="w-3 h-3" />
        The Difference
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500 uppercase tracking-tighter leading-tight">
        Premium <br /> Value
      </h2>
      
      <ul className="space-y-5 mb-10">
        {myFeatures.map((feat, i) => (
          <li key={i} className="group flex items-start gap-4 text-base md:text-lg font-medium text-neutral-300 hover:text-white transition-colors duration-300">
            <div className="mt-1 bg-pink-500/10 p-1 rounded-full border border-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-shadow duration-300">
              <Check className="text-pink-500 w-3 h-3 flex-shrink-0" />
            </div>
            <span className="leading-snug">{feat}</span>
          </li>
        ))}
      </ul>

      {/* Call to Action Button */}
      <Link href="/contact">
        <button className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full flex items-center gap-3 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          <span className="relative z-10">Start Your Transformation</span>
          <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </Link>
    </div>
  </div>
);

// --- 3. RIGHT SIDE CONTENT (Others - Generic Style) ---
const OthersContent = (
  <div className="h-full w-full flex items-center justify-center bg-neutral-900 text-neutral-500 overflow-y-auto scrollbar-hide">
    <div className="max-w-xl w-full px-8 py-12 opacity-50 hover:opacity-60 transition-opacity duration-500 grayscale-[0.8]">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-700 uppercase tracking-tighter leading-tight">
        Generic <br /> Solutions
      </h2>
      <ul className="space-y-6">
        {othersFeatures.map((feat, i) => (
          <li key={i} className="flex items-start gap-4 text-base md:text-lg font-medium">
            <X className="mt-1 text-red-900/50 w-5 h-5 flex-shrink-0" />
            <span className="decoration-neutral-700 line-through decoration-2 leading-snug">{feat}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- 4. MAIN EXPORT ---
export default function ComparisonSection() {
  // We pass the contents to the split component
  return (
    <ElectricSplit 
      leftComponent={MyContent} 
      rightComponent={OthersContent} 
    />
  );
}
