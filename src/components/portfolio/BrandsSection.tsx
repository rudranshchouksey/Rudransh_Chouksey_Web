"use client"

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Handshake } from "lucide-react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// 1. Helper Component for Counting Up Animation (Restored for professionalism)
const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toFixed(0) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

export default function BrandsSection() {
  const brands: Brand[] = [
    { name: "TechFlow", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&q=80" },
    { name: "StartupLab", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&q=80" },
    { name: "BrandCorp", logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=120&q=80" },
    { name: "DesignStudio", logo: "https://images.unsplash.com/photo-1611162617263-4ec3f0b8721e?w=120&q=80" },
    { name: "InnovateCo", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&q=80" },
    { name: "CreativeHub", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&q=80" },
    { name: "FutureTech", logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=120&q=80" },
    { name: "PixelPerfect", logo: "https://images.unsplash.com/photo-1611162617263-4ec3f0b8721e?w=120&q=80" },
  ];

  const duplicatedBrands: Brand[] = [...brands, ...brands];

  const stats: Stat[] = [
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 100, suffix: "+", label: "Projects Delivered" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 99, suffix: "%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-24 px-6 bg-[#DCE3E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-gray-100">
              <Handshake className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">Trusted By</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium text-slate-900 mb-6">
            Brands I Work With
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Collaborating with innovative companies to create exceptional digital experiences
          </p>
        </motion.div>

        {/* SCROLLING LOGOS */}
        <div className="relative mb-24">
          <div className="flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
            <motion.div
              animate={{ x: "-50%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8 items-center pr-8"
            >
              {duplicatedBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex-shrink-0 group">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={60}
                    height={60}
                    // Added 'rounded-full' to the class list below
                    className="rounded-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-slate-500 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}