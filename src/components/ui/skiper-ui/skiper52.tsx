"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link"; // Import Link
import { ArrowUpRight } from "lucide-react"; // Import Icon

import { cn } from "@/lib/utils";
import Image from "next/image";

const Skiper52 = () => {
  // Added 'link' property to the data
  const images = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Project 1",
      code: "# 01",
      link: "https://google.com",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Project 2",
      code: "# 02",
      link: "https://google.com",
    },
    {
      src: "/images/x.com/20.jpeg",
      alt: "Project 3",
      code: "# 03",
      link: "https://google.com",
    },
    {
      src: "/images/x.com/21.jpeg",
      alt: "Project 4",
      code: "# 04",
      link: "https://google.com",
    },
    {
      src: "/images/x.com/19.jpeg",
      alt: "Project 5",
      code: "# 05",
      link: "https://google.com",
    },
    {
      src: "/images/x.com/1.jpeg",
      alt: "Project 6",
      code: "# 06",
      link: "https://google.com",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3] py-10">
      <HoverExpand_001 className="" images={images} />
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}: {
  // Updated Interface
  images: { src: string; alt: string; code: string; link?: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/40 shadow-sm"
              initial={{ width: "5rem", height: "24rem" }}
              animate={{
                width: activeImage === index ? "28rem" : "5rem", // Increased active width slightly for better button fit
                height: "24rem",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {activeImage === index ? (
                  // Active State: Text + Button
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-20 flex h-full w-full flex-col justify-end px-6 pb-6"
                  >
                     <div className="flex items-end justify-between w-full">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-5"
                          >
                          <p className="text-center text-xs text-white/50 pr-3">
                              {image.code}
                          </p>
                        </motion.div>

                        {/* Link Button */}
                        {image.link && (
                            <Link
                                href={image.link}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white hover:scale-110 transition-all duration-300 group"
                            >
                                <ArrowUpRight 
                                    className="h-5 w-5 text-white group-hover:text-slate-900 transition-colors" 
                                    strokeWidth={2.5}
                                />
                            </Link>
                        )}
                    </div>
                  </motion.div>
                ) : (
                    // Inactive State: Just the code number centered vertically
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-5"
                      >
                      <p className="text-left text-xs text-white/50">
                          {image.code}
                      </p>
                    </motion.div>
                )}
              </AnimatePresence>

              <Image
                src={image.src}
                className={cn(
                    "size-full object-cover transition-transform duration-500",
                    activeImage === index ? "scale-105" : "scale-100 grayscale-[0.3]"
                )}
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };