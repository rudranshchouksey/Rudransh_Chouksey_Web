import React from "react";
import Link from "next/link";
import { Button } from "../ui/button"; // Assuming standard shadcn path
import { AnimatedGrid, PhotoCard } from "./3d-card"; 

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:h-[900px] bg-black overflow-hidden flex flex-col justify-center">
      
      {/* 1. Background Grid (Absolute) */}
      <AnimatedGrid />

      {/* 2. Main Layout Container */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20 md:pt-0">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col items-start text-left order-2 md:order-1">
            
            {/* Tagline */}
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-pink-400 uppercase bg-pink-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm">
              Full Stack Developer
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
                Experiences.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed mb-10">
              I&apos;m Rudransh Chouksey. I build immersive, high-performance web
              applications that merge creative 3D design with robust engineering.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-black hover:bg-neutral-200 rounded-full font-medium text-base transition-transform hover:scale-105 active:scale-95"
                >
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 bg-transparent border-neutral-700 text-white hover:bg-white/10 hover:border-white rounded-full font-medium text-base transition-all hover:scale-105"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Cards */}
          <div className="relative h-[400px] w-full flex items-center justify-center order-1 md:order-2">
            <div className="relative w-[300px] h-[300px]"> 
              {/* Card 1 */}
              <PhotoCard
                src="/frontend.jpg"
                alt="Frontend Mastery"
                rotation={-6}
                text="Frontend Mastery"
                index={0}
                className="left-0 top-0"
              />
              
              {/* Card 2 */}
              <PhotoCard
                src="/bankend.jpg"
                alt="Scalable Backends"
                rotation={12}
                text="Scalable Backends"
                index={1}
                className="right-0 top-8"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}