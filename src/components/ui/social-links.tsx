"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Social {
  name: string;
  image: string;
  href: string; // Added href for navigation
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[];
}

export function SocialLinks({ socials, className, ...props }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);
  const [rotation, setRotation] = React.useState<number>(0);
  const [clicked, setClicked] = React.useState<boolean>(false);

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  };

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 200);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [clicked]);

  return (
    <div
      className={cn("flex items-center justify-center gap-4 sm:gap-8", className)}
      {...props}
    >
      {socials.map((social, index) => (
        <Link
          href={social.href}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer px-2 py-2 transition-opacity duration-200",
            hoveredSocial && hoveredSocial !== social.name
              ? "opacity-50"
              : "opacity-100"
          )}
          onMouseEnter={() => {
            setHoveredSocial(social.name);
            setRotation(Math.random() * 20 - 10);
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={() => {
            setClicked(true);
          }}
        >
          <span className="block text-base sm:text-lg font-medium text-white tracking-tight">{social.name}</span>
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center -z-10"
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="w-24 h-24 max-w-none object-contain drop-shadow-2xl" // Increased size for visibility
                  initial={{
                    y: -20,
                    rotate: rotation,
                    opacity: 0,
                    filter: "blur(2px)",
                    scale: 0.8
                  }}
                  animate={{ 
                    y: -50, 
                    opacity: 1, 
                    filter: "blur(0px)",
                    scale: 1.2
                  }}
                  exit={{ y: -20, opacity: 0, filter: "blur(2px)", scale: 0.8 }}
                  transition={{ duration: 0.2, ease: "backOut" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  );
}