"use client"

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";

interface CaseStudy {
  id: number;
  client: string;
  category: string;
  description: string;
  image: string;
  cols: string;
}

export default function WorkSection() {
  const cases: CaseStudy[] = [
    {
      id: 1,
      client: "NeuroScope™",
      category: "Product Design",
      description: "Exceptional craftsmanship transformed our ideas into reality",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-2"
    },
    {
      id: 2,
      client: "NovaWorks®",
      category: "Digital Branding",
      description: "Impeccable design and precision turned our ideas into stunning reality",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-4"
    },
    {
      id: 3,
      client: "CosmoVision™",
      category: "UI/UX Design",
      description: "A perfect blend of creativity and functionality exceeded expectations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-3"
    },
    {
      id: 4,
      client: "LumiSphere®",
      category: "Interface Design",
      description: "Brilliant design and meticulous execution effortlessly made our ideas shine",
      image: "https://images.unsplash.com/photo-1532328018366-261543da6586?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-3"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">

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
              <Users className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">Happy Clients</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium text-slate-900 mb-6">
            Hear from Satisfied Clients
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Discover how clients have elevated their digital presence through expert designs
          </p>
        </motion.div>

        {/* 6-COLUMN GRID LAYOUT */}
        <div className="grid md:grid-cols-6 gap-6 mb-20">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.cols}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* BLUR MASK LAYER */}
              <div
                className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent backdrop-blur-sm"
                style={{
                  maskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)'
                }}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-start text-white z-10">
                <div className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wide text-white shadow-lg">
                  {item.category}
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold mb-3 tracking-tight group-hover:text-blue-100 transition-colors drop-shadow-sm">
                  {item.client}
                </h3>

                <div className="flex items-end justify-between w-full gap-4">
                  <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-md line-clamp-2 drop-shadow-sm">
                    {item.description}
                  </p>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === NEW: TRUSTED BY SECTION (BOTTOM) === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F2F4F7] overflow-hidden bg-gray-300">
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 25}`}
                  alt="Innovator"
                  className="w-full h-full object-cover"
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