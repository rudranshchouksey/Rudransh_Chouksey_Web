"use client"

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function WorkSection() {
  const testimonials = [
    {
      quote:
        "Rudransh delivered beyond expectations. The product performance and UX improved dramatically.",
      name: "Sarah Chen",
      designation: "Product Manager • TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
      quote:
        "The development quality and scalability truly stand out. Smooth collaboration throughout.",
      name: "Michael Rodriguez",
      designation: "CTO • InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      quote:
        "Flawless execution from design to deployment — the experience has been incredible.",
      name: "Emily Watson",
      designation: "Operations Director • CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f",
    },
    {
      quote:
        "Exceptional craftsmanship transformed our ideas into reality. Truly impressed with the clarity and precision of execution.",
      name: "Meet Ai™",
      designation: "Product Design",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote:
        "Impeccable design and precision turned our ideas into stunning reality. The brand identity feels powerful and premium.",
      name: "The Archverse®",
      designation: "Digital Branding",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote:
        "A perfect blend of creativity and functionality exceeded expectations. Loved the clean workflow and attention to detail.",
      name: "Variable Designer",
      designation: "UI/UX Design",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    // 1. Responsive Padding: py-16 on mobile, py-24 on desktop
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-white p-2 text-gray-600 border border-gray-100 shadow-sm rounded-full pr-4 gap-3 hover:bg-white">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center"
              >
                <Users className="size-4 text-slate-600" />
              </motion.div>
              <span className="text-xs font-semibold text-slate-800 tracking-wide">Happy Clients</span>
            </Badge>
          </div>

          {/* FIXED: Responsive Text Sizing */}
          {/* text-4xl on mobile -> text-5xl on tablet -> text-6xl on desktop */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-sans text-slate-900 mb-4 tracking-tight leading-tight">
            Hear from <br className="block sm:hidden" /> Satisfied Clients
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto px-4">
            Discover how clients have elevated their digital presence through expert designs
          </p>
        </motion.div>

        <AnimatedTestimonials autoplay testimonials={testimonials} className="pt-0.5"/>

        {/* === TRUSTED BY SECTION (BOTTOM) === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
        >
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F2F4F7] overflow-hidden bg-gray-300">
                <Image
                  src={`https://i.pravatar.cc/100?img=${i + 25}`}
                  alt="Innovator"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <p className="text-slate-500 font-medium text-sm">
            Trusted by 5,000+ innovators worldwide
          </p>
        </motion.div>

      </div>
    </section>
  );
}