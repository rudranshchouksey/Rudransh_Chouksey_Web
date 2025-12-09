"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { MinimalistHero } from "@/components/minimalist-hero";

// --- 1. Lazy Load Heavy Interactive Elements (SSR Disabled) ---
// These are the heaviest items. Loading them dynamically stops them from blocking the initial paint.
const SplineScene = dynamic(() => import("@/components/ui/splite").then(mod => mod.SplineScene), {
  ssr: false,
  // Lightweight placeholder while the 3D scene loads
  loading: () => <div className="w-full h-full bg-black/50 animate-pulse" />,
});

const SpotlightCursor = dynamic(() => import("@/components/spotlight-cursor").then(mod => mod.Component), {
  ssr: false,
});

const IntroAnimation = dynamic(() => import('../components/scroll-morph-hero'), { 
  ssr: false 
});

// --- 2. Lazy Load Below-the-Fold Sections ---
// These don't need to load immediately. This reduces the initial JavaScript bundle size significantly.
const ChainLog = dynamic(() => import("@/components/portfolio/chainlog").then(mod => mod.ChainLog));
const ServicesSection = dynamic(() => import("@/components/portfolio/ServicesSection"));
const ProcessSection = dynamic(() => import("@/components/portfolio/ProcessSection"));
const ComparisonSection = dynamic(() => import("@/components/portfolio/ComparisonSection"));
const FAQSection = dynamic(() => import("@/components/portfolio/FAQSection"));
const TestimonialsVariant = dynamic(() => import("@/components/portfolio/TestimonialsSection"));
const CTASection = dynamic(() => import("@/components/portfolio/CTASection"));

export default function HomePage() {
  const navLinks = [{ label: '', href: '#' }];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rudranshchouksey' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rudransh-chouksey/' },
    { icon: Twitter, href: 'https://x.com/RudraChouksey' },
    { icon: Instagram, href: 'https://www.instagram.com/rudranshchouksey/' },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black selection:bg-pink-500/30">
      
      {/* Dynamic Background Cursor */}
      <div className="absolute inset-0 z-0">
         <SpotlightCursor />
         
         <Card className="w-full h-[100dvh] bg-black relative overflow-hidden border-0 rounded-none">
            {/* 3D Scene Container */}
            <div className="absolute right-0 top-0 h-full w-full lg:w-[75%] z-10 pointer-events-none lg:pointer-events-auto">
               <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
               />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent lg:w-[60%]" />
            
            {/* Hero Text Content (Static for SEO & Speed) */}
            <div className="relative z-20 flex h-full flex-col justify-center px-4 sm:px-6 md:px-12 pointer-events-none">
               <div className="max-w-2xl pointer-events-auto pt-20">
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
                     Full Stack Developer
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                     Crafting Digital <br /> Experiences.
                  </h1>
                  <p className="mt-6 text-neutral-300 max-w-lg text-lg md:text-xl leading-relaxed">
                     I&apos;m Rudransh Chouksey. I build immersive, high-performance web applications that merge creative 3D design with robust engineering.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                     <Link href="/#projects">
                        <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold px-8 rounded-full transition-transform hover:scale-105">
                           View My Work
                        </Button>
                     </Link>
                     <Link href="/#contact">
                        <Button variant="outline" size="lg" className="border-neutral-700 text-white hover:bg-neutral-800 hover:text-white rounded-full bg-transparent transition-transform hover:scale-105">
                           Contact Me
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </Card>

         {/* 4. MinimalistHero - Loaded immediately as it's likely visible on larger screens */}
         <MinimalistHero
            logoText=""
            navLinks={navLinks}
            mainText="I specialize in bridging the gap between design and development. By combining modern tech stacks like Next.js and TypeScript with creative 3D elements, I turn complex ideas into seamless, interactive realities."
            readMoreLink="/about"
            imageSrc="/rudransh-chouksey-removebg-preview.png"
            imageAlt="Portrait of Rudransh Chouksey"
            overlayText={{ part1: 'Clean', part2: 'Code.' }}
            socialLinks={socialLinks}
            locationText="Remote, India"
         />

         {/* 5. Suspense Wrapper for all secondary content */}
         <Suspense fallback={<div className="h-20 w-full bg-black" />}>
            <ChainLog />
            <IntroAnimation />
            <ServicesSection />
            <ProcessSection />
            <ComparisonSection />
            <FAQSection />
            <TestimonialsVariant />
            <CTASection />
         </Suspense>
      </div>
    </div>
  );
}