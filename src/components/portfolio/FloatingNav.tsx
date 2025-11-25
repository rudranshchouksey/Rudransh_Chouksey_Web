"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Briefcase, Settings, Mail, User } from "lucide-react";

export default function FloatingNav() {
  const handleGetTemplate = (): void => {
    // Add your get template functionality here
    console.log("Get Template clicked");
  };

  const handleServicesClick = (): void => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-r from-gray-800/90 via-purple-800/90 to-pink-800/90 backdrop-blur-xl text-white rounded-full shadow-2xl flex items-center gap-2 p-2 border border-white/10"
      >
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 69, 19, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </motion.div>
        </Link>
        
        <Link href="/about">
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 69, 19, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors"
          >
            <User className="w-4 h-4" />
            <span>About</span>
          </motion.div>
        </Link>
        
        <Link href="/projects">
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 69, 19, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            <span>Projects</span>
          </motion.div>
        </Link>
        
        <button onClick={handleServicesClick}>
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 69, 19, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Services</span>
          </motion.div>
        </button>
        
        <Link href="/contact">
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 69, 19, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </motion.div>
        </Link>
        
        <motion.button 
          onClick={handleGetTemplate}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold transition-colors hover:from-purple-400 hover:to-pink-400"
        >
          Get Template
        </motion.button>
      </motion.div>
    </motion.nav>
  );
}
