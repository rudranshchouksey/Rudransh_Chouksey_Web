"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image"; // FIXED: Added Image component

// Define the type for a single review
export type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Get next 3 reviews for thumbnails (cycling)
  // FIXED: This variable was previously unused in the map below. Now we will use it.
  const thumbnailReviews = reviews
    .map((review, i) => ({ review, originalIndex: i })) // Keep track of original index
    .filter((_, i) => i !== currentIndex) // Filter out current to show others
    .slice(0, 3); // Take 3

  // Animation variants
  // FIXED: Renamed arg 'direction' to 'dir' to avoid shadowing state variable
  const imageVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -50 : 50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const textVariants = {
    enter: (dir: "left" | "right") => ({
      y: 20,
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      y: -20,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[700px] md:min-h-[600px] overflow-hidden bg-black text-white p-8 md:p-12 rounded-3xl border border-neutral-900",
        className
      )}
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full relative z-10">
        
        {/* === Left Column: Meta & Thumbnails === */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1 border-r border-neutral-900/50 pr-4">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-8">
            
            {/* Pagination with Pink Accent */}
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-pink-500 font-mono">
                {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-neutral-600 font-mono">
                / {String(reviews.length).padStart(2, "0")}
                </span>
            </div>

            {/* Vertical Text */}
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 opacity-80 h-full max-h-[200px]">
              Client Stories
            </h2>
          </div>

          {/* Thumbnails - FIXED: Used thumbnailReviews to fix unused var warning */}
          <div className="flex space-x-3 mt-8 md:mt-0">
            {thumbnailReviews.map(({ review, originalIndex }) => (
              <button
                key={review.id}
                onClick={() => handleThumbnailClick(originalIndex)}
                className={cn(
                    "relative overflow-hidden rounded-lg w-12 h-16 md:w-16 md:h-20 transition-all duration-300 border border-neutral-800",
                    "opacity-40 hover:opacity-70 hover:scale-105 grayscale"
                )}
                aria-label={`View review from ${review.name}`}
              >
                {/* FIXED: Using Next.js Image */}
                <Image
                  src={review.thumbnailSrc}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* === Center Column: Main Image === */}
        <div className="md:col-span-5 relative h-[300px] md:h-auto min-h-[400px] order-1 md:order-2 group">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute inset-0 w-full h-full"
            >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
                    {/* FIXED: Using Next.js Image */}
                    <Image
                        src={activeReview.imageSrc}
                        alt={activeReview.name}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* === Right Column: Content === */}
        <div className="md:col-span-4 flex flex-col justify-center md:pl-6 order-3 md:order-3">
          <div className="relative overflow-hidden min-h-[250px] flex flex-col justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-pink-500/20 mb-4 fill-pink-500/10" />
                
                {/* FIXED: Escaped quotes */}
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-200">
                  &quot;{activeReview.quote}&quot;
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                    <div className="h-px w-12 bg-pink-500/50" />
                    <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                        {activeReview.name}
                        </h3>
                        <p className="text-sm font-medium text-pink-500 uppercase tracking-wider text-[10px]">
                        {activeReview.affiliation}
                        </p>
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-800 bg-black hover:bg-neutral-900 text-white transition-all duration-200 group active:scale-95"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-200 group active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};