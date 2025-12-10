import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-neutral-400 transition-colors hover:text-pink-500"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition-colors hover:text-pink-500">
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        // CHANGED: bg-background -> bg-black, text-white
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-black text-white p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Gradient Overlay for smooth transition from previous section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black to-transparent z-10 pointer-events-none" />


      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 z-20">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left mt-10 md:mt-0"
        >
          {/* CHANGED: text-foreground -> text-neutral-400 */}
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-neutral-400 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-pink-500 hover:text-pink-400 transition-colors underline decoration-pink-500/50 underline-offset-4">
            Read More
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[400px]">
           <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              // CHANGED: Yellow circle -> Pink Glow/Blur
              className="absolute z-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-3xl md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            ></motion.div>
             {/* Added: A subtle border ring for structure */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute z-0 h-[280px] w-[280px] rounded-full border border-pink-500/20 md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]"
            ></motion.div>

            <motion.img
              src={imageSrc}
              alt={imageAlt}
              // Added: grayscale to make it blend better with dark theme
              className="relative z-10 h-auto w-56 object-cover md:w-64 scale-150 lg:w-72 grayscale hover:grayscale-0 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/400x600/000000/ffffff?text=Image+Not+Found`;
              }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start mt-10 md:mt-0"
        >
          {/* CHANGED: Text sizing and Gradients */}
          <h1 className="text-6xl font-extrabold md:text-7xl lg:text-8xl tracking-tight leading-none">
            <span className="block text-white">{overlayText.part1}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                {overlayText.part2}
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-neutral-500"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};