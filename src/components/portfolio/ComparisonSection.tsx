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

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRightLeft, Check, ArrowUpRight, Code2, Database, Layout, Server, Smartphone, Globe, Cpu, Cloud, Terminal } from "lucide-react";
// import { Badge } from "@/components/ui/badge"; 
// import { InfiniteSlider } from "../ui/infinite-slider";
// import Link from "next/link";
// import { Button } from "../ui/button";

// export default function ComparisonSection() {
//   const sliderItems = [
//     { label: "React & Next.js", icon: <Code2 size={18} /> },
//     { label: "Motion Graphics", icon: <Layout size={18} /> },
//     { label: "Backend Systems", icon: <Server size={18} /> },
//     { label: "Mobile Apps", icon: <Smartphone size={18} /> },
//     { label: "SEO Optimization", icon: <Globe size={18} /> },
//     { label: "AI Integration", icon: <Cpu size={18} /> },
//     { label: "Cloud Arch", icon: <Cloud size={18} /> },
//     { label: "DevOps", icon: <Terminal size={18} /> },
//     { label: "Database Design", icon: <Database size={18} /> },
//   ];

//   const myFeatures: string[] = [
//     "Full-Stack Architecture (Next.js & TypeScript)",
//     "Custom AI & Machine Learning Model Integration",
//     "Scalable Backend, Database & API Design",
//     "Pixel-Perfect UI with Framer Motion Animations",
//     "SEO-Optimized, Blazing-Fast Performance",
//     "4+ Years of Production-Ready Code Quality",
//     "Secure Authentication & Cloud Deployment",
//   ];

//   const othersFeatures: string[] = [
//     "Basic Template-Based or Copied Designs",
//     "Limited Frontend Skills (No Backend Logic)",
//     "Static Websites with No Intelligent Features",
//     "Poor Optimization & Slow Load Times",
//     "Unscalable Architecture & Spaghetti Code",
//     "Generic UI with Basic or Jittery Interactions",
//   ];

//   return (
//     // 1. Adjusted padding: py-16 for mobile, py-24 for desktop
//     <section className="py-16 md:py-24 px-4 md:px-6 bg-[#DCE3E8] rounded-[40px] md:rounded-[56px] relative overflow-hidden">

//       {/* Background Blur */}
//       <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

//       <div className="max-w-5xl mx-auto relative z-10">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 md:mb-12"
//         >
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <Badge className="bg-white p-2 text-gray-600 border border-gray-100 shadow-sm rounded-full pr-4 gap-3 hover:bg-white">
//               <motion.div
//                 animate={{ rotate: [0, 10, -10, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center"
//               >
//                 <ArrowRightLeft className="size-4 text-slate-600" />
//               </motion.div>
//               <span className="text-xs font-semibold text-slate-800 tracking-wide">Comparison</span>
//             </Badge>
//           </div>

//           {/* FIXED: Responsive Text Size (4xl on mobile -> 6xl on desktop) */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-normal text-slate-900 mb-4 mt-1 tracking-tight">
//             Precision vs Basic
//           </h2>
          
//           <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto px-2">
//             Precision-driven design and animations, surpassing static and unengaging layouts.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start mt-5">

//           {/* ME CARD (Highlighted) */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-white/50 flex flex-col h-full relative z-10"
//           >
//             <div className="text-center">
//               <h3 className="text-2xl md:text-3xl font-sans font-normal text-slate-900 mb-3">Me</h3>
//               <div className="w-full border-b-2 border-dotted border-slate-100 mb-2" />
//             </div>

//             <div className="space-y-5 md:space-y-6 flex-1 mb-8 md:mb-10 mt-4">
//               {myFeatures.map((feature: string, index: number) => (
//                 <motion.div
//                   key={feature}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex items-start gap-3"
//                 >
//                   <div className="w-6 h-6 md:w-7 md:h-7 mt-0.5 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-700" />
//                   </div>
//                   <span className="text-slate-700 text-sm font-medium leading-relaxed pt-0.5">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-auto">
//               <Link href="/contact" className="w-full block"> 
//                 <Button className="w-full py-4 md:py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-900/20 active:scale-95">
//                   Contact Me <ArrowUpRight className="w-5 h-5" />
//                 </Button>
//                </Link>
//             </div>
//           </motion.div>

//           {/* OTHERS CARD */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-white/50 md:scale-95 md:opacity-80 hover:opacity-100 transition-all duration-500"
//           >
//             <div className="text-center">
//               <h3 className="text-2xl md:text-3xl font-sans font-normal text-slate-900 mb-2">Others</h3>
//               <div className="w-full border-b-2 border-dotted border-slate-100 mb-2" />
//             </div>

//             <div className="space-y-5 md:space-y-6 mt-4">
//               {othersFeatures.map((feature: string, index: number) => (
//                 <motion.div
//                   key={feature}
//                   initial={{ opacity: 0, x: 10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex items-start gap-3"
//                 >
//                   <div className="w-6 h-6 md:w-7 md:h-7 mt-0.5 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
//                   </div>
//                   <span className="text-gray-500 text-sm leading-relaxed pt-0.5">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//         </div>

//         {/* --- INFINITE SLIDER SECTION --- */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="w-full overflow-hidden pt-10"
//         >
//           <div
//             className="relative"
//             style={{
//               maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
//               WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
//             }}
//           >
//             <InfiniteSlider gap={24} duration={30}>
//               {sliderItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 px-6 py-3 bg-[#E8F0F5] text-slate-600 rounded-full whitespace-nowrap"
//                 >
//                   {item.icon}
//                   <span className="font-medium text-sm md:text-base font-sans">{item.label}</span>
//                 </div>
//               ))}
//             </InfiniteSlider>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }