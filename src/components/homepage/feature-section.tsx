"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12 bg-black", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {/* HERO STYLE TITLE */}
        <div className="text-center mb-16">
           <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
              Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 pb-2">
              {title}
            </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          
          {/* LEFT: Steps List */}
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8 group cursor-pointer"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                {/* Step Indicator */}
                <div className="relative flex flex-col items-center">
                    <motion.div
                    className={cn(
                        "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 z-10",
                        index === currentFeature
                        ? "bg-pink-600 border-pink-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] scale-110"
                        : "bg-neutral-900 border-neutral-800 text-neutral-500 group-hover:border-neutral-700 transition-colors"
                    )}
                    >
                    {index <= currentFeature ? (
                        <span className="text-lg font-bold">
                             {index === currentFeature ? index + 1 : "✓"}
                        </span>
                    ) : (
                        <span className="text-lg font-semibold">{index + 1}</span>
                    )}
                    </motion.div>
                    {/* Vertical Line for timeline effect (optional) */}
                    {index !== features.length - 1 && (
                        <div className="w-px h-full absolute top-12 bg-neutral-800 -z-0" style={{ height: 'calc(100% + 2rem)' }} />
                    )}
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1">
                  <h3 className={cn(
                      "text-xl md:text-2xl font-bold transition-colors duration-300",
                      index === currentFeature ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-neutral-500 mt-2 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Image Display with Glow */}
          <div
            className={cn(
              "order-1 md:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
            )}
          >
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-500/20 blur-[100px] rounded-full" />
             
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      initial={{ y: 50, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -50, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={500}
                      />
                      {/* Gradient Overlay for Text Readability/Style */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}