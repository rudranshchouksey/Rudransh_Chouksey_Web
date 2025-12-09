import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import AboutContent from "@/components/about-content";
import AboutVisuals from "@/components/about-visuals"; // [!code highlight] Import the new wrapper

// These components don't use ssr: false, so they can stay here
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
      <AboutContent />

      <div className="flex flex-col gap-12 md:gap-24">
        
        {/* [!code highlight] Replaced individual components with the Client Wrapper */}
        <AboutVisuals />

        <ExperienceSection />
        <AwardComponent />
        <CTASection />
      </div>
    </main>
  );
}