"use client";

import React from "react";
import Link from "next/link";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import ComparisonSection from "@/components/portfolio/ComparisonSection";
import FAQSection from "@/components/portfolio/FAQSection";
import TestimonialsVariant from "@/components/portfolio/TestimonialsSection";
import CTASection  from "@/components/portfolio/CTASection";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Component } from "@/components/spotlight-cursor";
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { MinimalistHero } from "@/components/minimalist-hero";
import { ChainLog } from "@/components/portfolio/chainlog";


export default function HomePage() {
  const navLinks = [
    { label: '', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rudranshchouksey' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rudransh-chouksey/' },
    { icon: Twitter, href: 'https://x.com/RudraChouksey' },
    { icon: Instagram, href: 'https://www.instagram.com/rudranshchouksey/' },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      
        <div className="absolute inset-0 z-0">
           <Component />
      {/* FIX 2: Changed bg-black/[0.96] to bg-black (Pure Black) */}
      <Card className="w-full h-[100dvh] bg-black relative overflow-hidden border-0 rounded-none">
        <div className="absolute right-0 top-0 h-full w-full lg:w-[75%] z-10 pointer-events-none lg:pointer-events-auto">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* FIX 3: Adjusted gradient to ensure it fades to pure black */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent lg:w-[60%]" />
        
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
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-neutral-200 font-semibold px-8 rounded-full"
                >
                  View My Work
                </Button>
              </Link>
              <Link href="/#contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-neutral-700 text-white hover:bg-neutral-800 hover:text-white rounded-full bg-transparent"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      
      <MinimalistHero
        logoText=""
        navLinks={navLinks}
        // UPDATED: Professional Bio
        mainText="I specialize in bridging the gap between design and development. By combining modern tech stacks like Next.js and TypeScript with creative 3D elements, I turn complex ideas into seamless, interactive realities."
        readMoreLink="/about"
        imageSrc="/rudransh-chouksey-removebg-preview.png"
        imageAlt="Portrait of Rudransh Chouksey"
        overlayText={{
          part1: 'Clean',
          part2: 'Code.',
        }}
        socialLinks={socialLinks}
        locationText="Remote, India"
      />
      <ChainLog />
      <ServicesSection />
      <ProcessSection />
      <ComparisonSection />
      <FAQSection />
      <TestimonialsVariant />
      <CTASection />
      </div>
    </div>
  );
}