"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // Import the new component

interface LayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-sans relative overflow-x-hidden" style={{ backgroundColor: '#eff2f5' }}>
      
      {/* 3D Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-64 -right-64 w-96 h-96 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-64 -left-64 w-80 h-80 bg-gradient-to-tr from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/8 via-orange-400/8 to-red-400/8 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [40, -40, 40],
            x: [30, -30, 30],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-l from-indigo-400/8 via-purple-400/8 to-pink-400/8 rounded-full blur-2xl"
        />
      </div>

      {/* Insert the separate Navbar component here */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 "> 
        {/* pt-20 added to push content below fixed navbar */}
        {children}
      </main>
    </div>
  );
}