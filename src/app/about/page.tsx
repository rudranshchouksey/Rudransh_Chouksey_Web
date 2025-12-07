import type { Metadata } from "next";
import AboutContent from "@/components/about-content"; // Adjust path to where your component is
import HoverPreview  from "@/components/hover-preview";
import CTASection from "@/components/portfolio/CTASection";
import OrbitingSkills from "@/components/orbitting-skills";
import Component from "@/components/image-reveal";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import AwardComponent from "@/components/achivements";

export const metadata: Metadata = {
  title: "About | Rudransh Chouksey",
  description: "Full-Stack Developer and DevOps specialist based in India. 4+ years of experience building scalable systems.",
  openGraph: {
    title: "About | Rudransh Chouksey",
    description: "Bridging the gap between backend architecture and pixel-perfect design.",
    images: ["/rudransh-chouksey.jpg"], // Recommended to add an OG image
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutContent />;
      <HoverPreview />
      <div className="flex flex-col md:flex-row gap-6">
        <OrbitingSkills />
        <Component />
      </div>
      <ExperienceSection />
      <AwardComponent />
      <CTASection />
    </main>
  )
}