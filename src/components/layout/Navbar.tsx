"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <>
      <AnimatePresence>
        <motion.nav
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-2xl font-light text-gray-900 italic z-50">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-700 to-pink-600"
                >
                  Rudransh Chouksey
                </motion.span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <NavLink href="/about" label="About" pathname={pathname} />
                <NavLink href="/projects" label="Projects" pathname={pathname} />
                <a
                  href="https://www.linkedin.com/in/rudransh-chouksey/" // Updated to work across pages
                  className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium cursor-pointer"
                >
                  Linkedin
                </a>
                <NavLink href="/contact" label="Contact" pathname={pathname} />
                
                <Link
                    href="https://drive.google.com/file/d/1n-440fHBHOlmWhfXQGFwZuYXNS36Ds6O/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                    >
                    Get Resume
                    </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-2 text-gray-600 z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100vh" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute top-0 left-0 w-full bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-medium border-b border-gray-200"
              >
                <MobileNavLink href="/about" label="About" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink href="/projects" label="Projects" onClick={() => setIsMobileMenuOpen(false)} />
                <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800">Services</a>
                <MobileNavLink href="/contact" label="Contact" onClick={() => setIsMobileMenuOpen(false)} />
                <Link
                    href="https://drive.google.com/file/d/1n-440fHBHOlmWhfXQGFwZuYXNS36Ds6O/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button 
                        
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg"
                    >
                        Get In Touch
                    </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}

// Sub-components for cleaner code
function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string | null }) {
    const isActive = pathname?.includes(href);
    return (
        <Link
            href={href}
            className={`transition-all duration-300 font-medium ${
                isActive 
                ? 'text-purple-600' 
                : 'text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
            }`}
        >
            {label}
        </Link>
    );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
    return (
        <Link href={href} onClick={onClick} className="text-gray-800 hover:text-purple-600 transition-colors">
            {label}
        </Link>
    );
}