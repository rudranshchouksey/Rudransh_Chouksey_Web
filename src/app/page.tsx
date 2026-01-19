"use client";

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';

// Dynamic Imports for Performance
const SpotlightCursor = dynamic(() => import("@/components/homepage/spotlight-cursor").then(mod => mod.Component), {
  ssr: false,
});

const MainComponent = dynamic(() => import("@/components/homepage/portfolio-hero"));
const BrandSection = dynamic(() => import("@/components/homepage/brand-section"));
const HeroSection = dynamic(() => import("@/components/homepage/Hero-section"));

const ChainLog = dynamic(() => import("@/components/homepage/chainlog").then(mod => mod.ChainLog));
const ServicesSection = dynamic(() => import("@/components/homepage/ServicesSection"));
const ProcessSection = dynamic(() => import("@/components/homepage/ProcessSection"));
const ComparisonSection = dynamic(() => import("@/components/homepage/ComparisonSection"));
const FAQSection = dynamic(() => import("@/components/homepage/FAQSection"));
const TestimonialsVariant = dynamic(() => import("@/components/homepage/TestimonialsSection"));
const CTASection = dynamic(() => import("@/components/portfolio/CTASection"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black selection:bg-pink-500/30">
      
      {/* Background FX */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <SpotlightCursor />
      </div>

      {/* Main Scrollable Content */}
      <div className="relative z-10">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
        />
        
        {/* Header / Hero Area */}
        <div className="w-full bg-black">
          <MainComponent />
          <BrandSection />
          <HeroSection />
        </div>

        {/* Secondary Content - Lazy Loaded */}
        <Suspense fallback={<div className="h-40 w-full bg-black flex items-center justify-center text-neutral-800">Loading...</div>}>
          <ChainLog />
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