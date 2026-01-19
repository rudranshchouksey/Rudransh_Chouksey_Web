"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const brands = [
  { id: 1, name: "UpskillValley", logo: "https://placehold.co/200x80/1a1a1a/00f2fe/png?text=UpskillValley", url: "#" },
  { id: 2, name: "LnW", logo: "https://placehold.co/200x80/1a1a1a/f53803/png?text=LnW", url: "#" },
  { id: 3, name: "Paudha", logo: "https://placehold.co/200x80/1a1a1a/a2ff00/png?text=Paudha", url: "#" },
  { id: 4, name: "MR Furniture", logo: "https://placehold.co/200x80/1a1a1a/f40076/png?text=MR+Furniture", url: "#" },
  { id: 5, name: "GMAT GRE", logo: "/accenture_logo.jpg", url: "#" },
  { id: 6, name: "Twin Pix", logo: "/twinpix-logo.png", url: "#" },
];

const BrandSection = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      {/* 1. Centering Container (67% Width) */}
      <div className="w-full md:w-[67%] mx-auto relative px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-2">
            Brands I've Worked With
          </p>
          <div className="w-10 h-[1px] bg-lime-400/50" />
        </div>

        {/* 2. Marquee Mask: This creates the fade-in/out effect at the edges of the 67% */}
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-black after:to-transparent">
          
          <div className="flex w-max">
            {/* We render the content twice for a seamless infinite loop */}
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

const MarqueeGroup = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 30, // Adjust for speed (higher = slower)
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex items-center gap-12 pr-12"
    >
      {brands.map((brand) => (
        <Link 
          key={brand.id} 
          href={brand.url} 
          className="group relative w-40 h-20 flex-shrink-0 flex items-center justify-center rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:border-lime-400/40 transition-all duration-300"
        >
          {/* Neon Glow on Hover */}
          <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          
          <img
            src={brand.logo}
            alt={brand.name}
            className="object-contain w-[70%] h-[70%] transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      ))}
    </motion.div>
  );
};

export default BrandSection;