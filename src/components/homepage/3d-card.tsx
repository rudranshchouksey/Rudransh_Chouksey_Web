"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Optimization: Uses Next.js Image
import { Zeyada } from "next/font/google"; // Optimization: Uses built-in Next font

// Optimize font loading
const zeyada = Zeyada({ 
  weight: "400", 
  subsets: ["latin"],
  display: 'swap'
});

/* ---------------- TYPES ---------------- */
interface PhotoCardProps {
  src: string;
  alt: string;
  rotation: number;
  text: string;
  index: number;
  className?: string;
}

/* ---------------- PHOTO CARD ---------------- */
export const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  alt,
  rotation,
  text,
  index,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Staggered entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 200); // Faster stagger time
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`absolute w-[180px] md:w-[220px] bg-white p-2.5 rounded-md shadow-2xl cursor-pointer transition-all duration-500 ease-out ${className}`}
      style={{
        transform: isHovered
          ? `rotate(${rotation}deg) scale(1.1) translateY(-10px)`
          : `rotate(${rotation}deg) scale(1)`,
        zIndex: isHovered ? 50 : 10 - index, // Ensure hovered card is always top
        opacity: isVisible ? 1 : 0,
        top: index === 0 ? "0%" : "20%", // Offset cards vertically
        left: index === 0 ? "0%" : "20%", // Offset cards horizontally
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full aspect-[3/4] bg-neutral-100 relative overflow-hidden rounded-sm">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 180px, 220px"
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
      </div>

      <div className="h-12 flex items-center justify-center">
        <p className={`${zeyada.className} text-xl text-neutral-600 text-center leading-none mt-2`}>
          {text}
        </p>
      </div>
    </div>
  );
};

/* ---------------- CSS ANIMATED GRID (Performance Optimized) ---------------- */
export const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* CSS Animation defined locally to avoid tailwind config changes */}
      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
        .animate-grid {
          animation: gridMove 3s linear infinite;
        }
      `}</style>
      
      {/* The Grid Layer */}
      <div
        className="absolute inset-0 animate-grid opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Gradient Fade to Black (Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
    </div>
  );
};