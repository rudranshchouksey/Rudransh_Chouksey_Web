"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex"; 
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";

// Social Media Data with Icons
const socials = [
  {
    name: "LinkedIn",
    image: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png", // LinkedIn 3D Icon
    href: "https://www.linkedin.com/in/rudransh-chouksey/",
  },
  {
    name: "Github",
    image: "https://cdn-icons-png.flaticon.com/128/733/733553.png", // GitHub Icon
    href: "https://github.com/rudranshchouksey",
  },
  {
    name: "Twitter",
    image: "https://cdn-icons-png.flaticon.com/128/5969/5969020.png", // X/Twitter Icon
    href: "https://x.com/RudraChouksey",
  },
  {
    name: "Instagram",
    image: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png", // Instagram Icon
    href: "https://www.instagram.com/rudranshchouksey/",
  },
];

export default function CTASection() {
  return (
    <section className="w-full bg-black py-20 relative overflow-hidden min-h-[800px]" id="contact">
      <div className="absolute inset-0 w-full h-full">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={300} // Pink/Magenta range to match hero
          className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-full h-full"
        >
          {/* Content Container */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-10">
            
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-pink-400 uppercase bg-pink-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm">
              Ready to Scale?
            </div>

            {/* Main Headline */}
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight leading-tight">
              Let&apos;s Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Extraordinary.
              </span>
            </h2>

            {/* Description */}
            <p className="text-neutral-300 text-base md:text-xl max-w-2xl text-center leading-relaxed">
              From high-performance web applications to scalable backend systems. 
              Let&apos;s turn your ambitious ideas into production-ready reality using the latest tech stack.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-white hover:bg-neutral-200 text-black font-bold rounded-full transition duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  Start Your Project
                  <MoveRight className="w-4 h-4" />
                </button>
              </Link>
              
              <Link href="/projects">
                <button className="px-8 py-4 bg-transparent border border-neutral-700 hover:bg-neutral-900 text-white font-medium rounded-full transition duration-200 backdrop-blur-md">
                  View My Work
                </button>
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8" />

            {/* Social Links Component */}
            <div className="flex flex-col items-center gap-4">
                <p className="text-neutral-500 text-sm uppercase tracking-widest font-semibold">Connect with me</p>
                <SocialLinks socials={socials} />
            </div>

          </div>
        </Vortex>
      </div>
    </section>
  );
}