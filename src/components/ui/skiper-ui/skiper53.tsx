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

const Skiper53 = () => {
  // Added 'link' property
  const images = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Project 1",
      code: "# 01",
      link: "https://google.com",
    },
    {
      src: "/images/x.com/9.jpeg",
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
      src: "/images/x.com/25.jpeg",
      alt: "Project 5",
      code: "# 05",
      link: "https://google.com",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Project 6",
      code: "# 06",
      link: "https://google.com",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3] py-10">
      <HoverExpand_002 className="" images={images} />
    </div>
  );
};

export { Skiper53 };

export const HoverExpand_002 = ({
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
      // Changed max-w-6xl to max-w-md because this is a vertical mobile stack
      className={cn("relative w-full max-w-md mx-auto px-4", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full flex-col items-center justify-center gap-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/50 shadow-sm"
              // CHANGED: Width to 100% for mobile responsiveness
              initial={{ height: "3.5rem", width: "100%" }}
              animate={{
                height: activeImage === index ? "24rem" : "3.5rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
            >
              {/* Dark Overlay when active */}
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

              {/* Text and Button Layer */}
              <AnimatePresence>
                {activeImage === index ? (
                  // Active State: Text + Button
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute z-20 flex h-full w-full flex-col justify-end px-6 pb-6"
                  >
                    <div className="flex items-end justify-between w-full">
                        {/* Text Info */}
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
                        

                        {/* Redirect Button */}
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
                   // Inactive State: Centered Label
                   <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute z-20 flex h-full w-full items-center px-6 justify-between"
                   >
                       <p className="text-center text-xs text-white/50 pr-3">
                              {image.code}
                          </p>
                   </motion.div>
                )}
              </AnimatePresence>

              <Image
                height={800}
                width={800}
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};