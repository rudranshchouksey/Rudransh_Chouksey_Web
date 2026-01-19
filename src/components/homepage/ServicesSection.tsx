"use client";

import React from "react";
import { 
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover 
} from "@/components/animated-slideshow";

const SLIDES = [
  {
    id: "slide-1",
    title: "frontend dev",
    imageUrl: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop",
  },
  {
    id: "slide-2",
    title: "backend dev",
    imageUrl: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-6",
    title: "UI UX design",
    imageUrl: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-3",
    title: "video editing",
    imageUrl: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-4",
    title: "SEO optimization",
    imageUrl: "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <HoverSlider className="w-full py-32 bg-black text-white relative overflow-hidden flex flex-col items-center">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,20,147,0.03),transparent)] pointer-events-none" />

      {/* THE 67% WIDTH CONTAINER - Everything stays inside this */}
      <div className="w-full md:w-[67%] relative z-10 px-6 md:px-0">
        
        {/* Fixed Badge Alignment */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-pink-500 uppercase bg-pink-500/5 rounded-full border border-pink-500/10">
            / our services
          </div>
        </div>

        {/* Main Content: Improved spacing and alignment */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          {/* Left Side: Service Titles with better contrast */}
          <div className="flex flex-col space-y-2 w-full lg:w-3/5">
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className="group border-b text-white border-white/5 py-4 last:border-0">
                <TextStaggerHover
                  index={index}
                  className="cursor-pointer text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter opacity-20 group-hover:opacity-100 transition-all duration-500 ease-out hover:text-pink-500"
                  text={slide.title}
                />
              </div>
            ))}
          </div>

          {/* Right Side: Premium Rounded Image Container */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <HoverSliderImageWrap>
                {SLIDES.map((slide, index) => (
                  <div key={slide.id} className="absolute inset-0 w-full h-full">
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                      loading="eager"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
              
              {/* Inner Glossy Ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </HoverSlider> 
  );
}