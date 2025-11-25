"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Interface defining the structure of each project object
interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  icon: string;
}

export default function ProjectsCarousel() {
  // Reference to the scrollable container element
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // State to track if the user is hovering over the carousel (pauses auto-scroll)
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Array of project data to be displayed in the carousel
  const projects: Project[] = [
    {
      id: 1,
      title: "Alter",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
      description: "Automate. Engage. Convert. Powered by AI.",
      icon: "https://cdn-icons-png.flaticon.com/512/9950/9950211.png",
    },
    {
      id: 2,
      title: "Portfoy",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
      description: "Designer Builder tools for modern creators.",
      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    },
    {
      id: 3,
      title: "CourseSite",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
      description: "Online learning made simple and engaging.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135729.png",
    },
    {
      id: 4,
      title: "LOS",
      image:
        "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&q=80",
      description: "Modern banking solutions for digital natives.",
      icon: "https://cdn-icons-png.flaticon.com/512/879/879808.png",
    },
    {
      id: 5,
      title: "Fintech App",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      description: "Revolutionizing personal finance.",
      icon: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png",
    },
  ];

  // Duplicate projects array to create seamless infinite scroll effect
  const duplicatedProjects: Project[] = [...projects, ...projects];

  // Auto-scroll effect using useEffect hook
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    const scrollWidth: number = scrollContainer.scrollWidth;
    let scrollPosition: number = 0;
    const speed: number = 2; // Increased speed (pixels per frame)

    const autoScroll = (): void => {
      if (!isHovered) {
        scrollPosition += speed;

        if (scrollPosition >= scrollWidth / 2) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPosition;
        }
      }
    };

    const interval: NodeJS.Timeout = setInterval(autoScroll, 16); // ~60fps
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="py-20 px-6 overflow-hidden relative"
      style={{ backgroundColor: "v" }}
    >
      {/* 3D Background Effects */}
      

      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10 pr-0 pl-0 m-0">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden pb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          } as React.CSSProperties}
        >
          {duplicatedProjects.map((project: Project, index: number) => (
            <motion.div
              key={`${project.id}-${index}`}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: (index % projects.length) * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-shrink-0 w-80 group"
            >
              <Link href={`/case-study/${project.id}`} className="block">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: 2, z: 50 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-xl border border-[#cfd8de] hover:shadow-2xl transition-all duration-500 transform-gpu"
                  style={{
                    backgroundColor: "#dee5ea",
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Project image */}
                  <div className="h-64 relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Project info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-purple-700">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-6 h-6 text-purple-500 group-hover:text-pink-500 transition-colors" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
