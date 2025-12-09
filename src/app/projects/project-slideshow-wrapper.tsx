'use client'; 

import AnoAI from '@/components/ano-ui';
import dynamic from 'next/dynamic';

// Import your shader component
// Make sure the path matches where you saved AnoAI.tsx


const ScrollAdventure = dynamic(() => import('../../components/animated-scroll'),
  { ssr: false }
);

export default function ProjectSlideshowWrapper() {
  return (
     <section className="relative w-full min-h-screen py-24 px-4 md:px-8 overflow-hidden bg-black">
        
        {/* --- 1. BACKGROUND LAYER (The Shader) --- */}
        {/* 'absolute inset-0' makes it fill the parent section */}
        <div className="absolute inset-0 z-0 w-full h-full">
            <AnoAI />
        </div>
        
        {/* Optional: Dark Overlay to ensure text readability if the shader is too bright */}
        <div className="absolute inset-0 z-0 bg-black/30 pointer-events-none" />

        {/* --- 2. CONTENT LAYER (Sits on top) --- */}
        <div className="relative z-10 flex flex-col items-center">
            
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                
                {/* Scroll Indicator */}
                <div className="flex flex-col items-center gap-3 mb-2 opacity-80">
                    <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-neutral-300 uppercase drop-shadow-md">
                        Scroll Down
                    </span>
                    <div className="h-16 w-[1px] bg-gradient-to-b from-white to-transparent"></div>
                </div>

                {/* Main Title */}
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-xl">
                    Selected Works
                </h2>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl text-neutral-200 font-light tracking-wide max-w-lg drop-shadow-md">
                    Crafted with precision and purpose.
                </p>
            </div>

            {/* The Animated Scroll Window */}
            {/* Using backdrop-blur to blend nicely with the shader behind it */}
            <div className="w-full max-w-[1600px] mx-auto h-[800px] md:h-[900px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 backdrop-blur-md relative">
                <ScrollAdventure />
            </div>

        </div>
      </section>
  )
}