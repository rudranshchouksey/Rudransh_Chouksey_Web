"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FloatingNav from "@/components/portfolio/FloatingNav";
import FloatingActions from "@/components/portfolio/FloatingActions";

interface LayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactScroll = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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

      {/* Top Navigation */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-light text-gray-900 italic">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-700 to-pink-600"
                  >
                    Rudransh Chouksey
                  </motion.span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                  <Link
                    href="/about"
                    className={`text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium ${pathname?.includes('/about') ? 'text-purple-600' : ''
                      }`}
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className={`text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium ${pathname?.includes('/projects') ? 'text-purple-600' : ''
                      }`}
                  >
                    Projects
                  </Link>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
                  >
                    Services
                  </a>
                  <Link
                    href="/contact"
                    className={`text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium ${pathname?.includes('/contact') ? 'text-purple-600' : ''
                      }`}
                  >
                    Contact
                  </Link>
                  <motion.button
                    onClick={handleContactScroll}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    Get In Touch
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {children}
      </main>

      {/* Floating Bottom Navigation */}
      <FloatingNav />
      <FloatingActions />
    </div>
  );
}
