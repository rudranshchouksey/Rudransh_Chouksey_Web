"use client"

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles, Monitor, Code, Cloud, Server } from "lucide-react";
import Link from "next/link";
import BentoGrid1 from "../mvpblocks/bento-grid-1";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  image: string;
  cols: string; // Controls grid width
  layout: "row" | "col"; // Controls internal layout (image side-by-side or top-bottom)
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      id: 1,
      title: "UX & UI Design",
      description: "Crafting seamless, user-friendly interfaces that enhance engagement and usability.",
      icon: Monitor,
      // Abstract Glass/Water 3D Image
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-2",
      layout: "row"
    },
    {
      id: 2,
      title: "Framer Development",
      description: "Building high-performance, interactive websites using Framer's powerful tools.",
      icon: Code,
      // Minimalist 3D Shape
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-1",
      layout: "col"
    },
    {
      id: 3,
      title: "Interactive Web",
      description: "Advanced animations and development tools to deliver smooth user experiences.",
      icon: Server,
      // Abstract Dark Tech Image
      image: "https://images.unsplash.com/photo-1614728853975-69c9607722eb?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-1",
      layout: "col"
    },
    {
      id: 4,
      title: "Design & Creativity",
      description: "Creating visually compelling designs that truly resonate with your target audience.",
      icon: Sparkles,
      // Abstract Landscape/Creative Image
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
      cols: "md:col-span-2",
      layout: "row"
    }
  ];

  return (
    // Background matches other sections
    <section className="py-24 px-6 bg-[#F2F4F7]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-gray-100">
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">Services</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium text-slate-900 mb-6">
            Crafting Digital Excellence
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Building smooth and engaging digital interactions that elevate user satisfaction
          </p>
        </motion.div>

        {/*  
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:shadow-xl transition-all duration-300 ${service.cols} overflow-hidden relative`}
            >
              <div className={`flex h-[560px] gap-8 ${service.layout === 'row' ? 'flex-col md:flex-row items-center' : 'flex-col'}`}>

                <div className={`${service.layout === 'row' ? 'w-full md:w-1/2 h-64 md:h-full' : 'w-full h-48'} rounded-3xl overflow-hidden relative order-1`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className={`${service.layout === 'row' ? 'w-full md:w-1/2 order-2' : 'w-full order-2'}`}>
              
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        */}

        <BentoGrid1 />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
              <ArrowUpRight className="w-5 h-5" />
              Contact Me
            </button>
          </Link>

          <Link href="/projects">
            <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors border border-gray-200 shadow-sm">
              <ArrowRight className="w-5 h-5" />
              See Projects
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}