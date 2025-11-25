import React from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import ComparisonSection from "@/components/portfolio/ComparisonSection";
import FAQSection from "@/components/portfolio/FAQSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import CTASection from "@/components/portfolio/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ComparisonSection />
      <ProcessSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
