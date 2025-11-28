import type { Metadata } from "next";
import AboutContent from "@/components/page/AboutContent"; // Adjust path to where your component is

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
  return <AboutContent />;
}