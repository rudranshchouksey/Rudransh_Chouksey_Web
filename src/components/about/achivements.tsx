"use client";

import { AwardCard } from "@/components/about/achievement-cards";
import { motion, Variants } from "framer-motion"; // Added Variants import
import { Rocket, Trophy, ScrollText, Palette } from "lucide-react";

const awardsData = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "DevOps Excellence (2024)",
    description: "Reduced deployment times from 2 hours to 15 minutes (85% reduction) via CI/CD automation & Infrastructure Optimization.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Full Stack Certification",
    description: "100xDevs Bootcamp Graduate. Advanced mastery in MERN stack, Docker, and scalable backend architectures.",
  },
  {
    icon: <ScrollText className="h-6 w-6" />,
    title: "Research Publication",
    description: "Published research on 'Analytical Problem Solving using Artificial Neural Networks' in IJTRM (2019).",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Beyond Code",
    description: "Photography 📸, Video Editing 🎬, Digital Marketing 📈, Web3 🔗, AI/ML 🤖, & Mentoring 📚.",
  },
];

// Framer Motion animation variants
// FIXED: Added ': Variants' type annotation to fix TS error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// FIXED: Added ': Variants' type annotation
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AwardComponent() {
  return (
    <section className="w-full bg-black py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
                    / Achievements
                </div>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                    Key Highlights
                </h2>
            </div>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {awardsData.map((award, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                    <AwardCard
                        icon={award.icon}
                        title={award.title}
                        description={award.description}
                        className="h-full" // Ensure equal height
                    />
                </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}