"use client"

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

export default function FloatingActions() {
  const handleGetPortfoy = (): void => {
    // Add your download/get portfoy functionality here
    console.log("Get Portfoy clicked");
  };

  const handleFramerClick = (): void => {
    // Add your Framer link functionality here
    window.open("https://framer.com", "_blank");
  };

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <Link
          href="https://drive.google.com/file/d/1n-440fHBHOlmWhfXQGFwZuYXNS36Ds6O/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button 
            onClick={handleGetPortfoy}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl flex items-center gap-2 px-4 py-3 hover:shadow-2xl transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            <span className="font-semibold">Get Resume</span>
          </motion.button>
      </Link>    
    </motion.div>
  );
}
