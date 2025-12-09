import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import AboutContent from "@/components/about-content"; // Keep this static for SEO and LCP (Largest Contentful Paint)

// --- Lazy Load Heavy & Below-the-Fold Components ---

// Interactive/Visual components often rely on browser APIs (window/document), so ssr: false helps performance and prevents hydration errors.
const HoverPreview = dynamic(() => import("@/components/hover-preview"));
const OrbitingSkills = dynamic(() => import("@/components/orbitting-skills"), { ssr: false });
const ImageReveal = dynamic(() => import("@/components/image-reveal").then(mod => mod.default), { 
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-neutral-900/20 animate-pulse rounded-xl" /> // Placeholder
});

// Content sections below the fold
const ExperienceSection = dynamic(() => import("@/components/portfolio/ExperienceSection"));
const AwardComponent = dynamic(() => import("@/components/achivements"));
const CTASection = dynamic(() => import("@/components/portfolio/CTASection"));

export const metadata: Metadata = {
  title: "About | Rudransh Chouksey",
  description: "Full-Stack Developer and DevOps specialist based in India. 4+ years of experience building scalable systems.",
  openGraph: {
    title: "About | Rudransh Chouksey",
    description: "Bridging the gap between backend architecture and pixel-perfect design.",
    images: ["/rudransh-chouksey.jpg"], 
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-black min-h-screen">
      {/* 1. Load immediately for SEO and fast initial paint */}
      <AboutContent />

      {/* 2. Load the rest in the background */}
      <div className="flex flex-col gap-12 md:gap-24 pb-20">
        <HoverPreview />
        
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-12 max-w-7xl mx-auto w-full">
          <div className="w-full md:w-1/2">
             <OrbitingSkills />
          </div>
          <div className="w-full md:w-1/2">
             <ImageReveal />
          </div>
        </div>

        <ExperienceSection />
        <AwardComponent />
        <CTASection />
      </div>
    </main>
  );
}