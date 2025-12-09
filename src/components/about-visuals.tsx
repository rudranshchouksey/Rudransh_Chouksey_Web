"use client";

import React from "react";
import dynamic from 'next/dynamic';

// 1. Move the lazy loading with 'ssr: false' here
// Since this file has "use client", ssr: false is allowed.
const HoverPreview = dynamic(() => import("@/components/hover-preview"));

// Check your filename: if it is "orbiting-skills.tsx" (one 't'), change the import below.
// I kept 'orbitting' to match your error log.
const OrbitingSkills = dynamic(() => import("@/components/orbitting-skills"), { ssr: false });

const ImageReveal = dynamic(() => import("@/components/image-reveal"), { 
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-neutral-900/20 animate-pulse rounded-xl" />
});

export default function AboutVisuals() {
  return (
    <>
      <HoverPreview />
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-12 max-w-7xl mx-auto w-full">
        <div className="w-full md:w-1/2">
             <OrbitingSkills />
        </div>
        <div className="w-full md:w-1/2">
             <ImageReveal />
          </div>
      </div>
    </>
  );
}