"use client";

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { SocialLinks } from "@/components/contact/social-links";

const socials = [
  {
    name: "LinkedIn",
    image: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    href: "https://www.linkedin.com/in/rudransh-chouksey/",
  },
  {
    name: "Github",
    image: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
    href: "https://github.com/rudranshchouksey",
  },
  {
    name: "Twitter",
    image: "https://cdn-icons-png.flaticon.com/128/5969/5969020.png",
    href: "https://x.com/RudraChouksey",
  },
  {
    name: "Instagram",
    image: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    href: "https://www.instagram.com/rudranshchouksey/",
  },
];

export default function CTASection() {
  return (
    <section 
      className="w-full bg-[#030014] relative overflow-hidden flex flex-col items-center justify-center py-24 min-h-[700px]" 
      id="contact"
    >
      {/* 1. SEAMLESS TRANSITION: Fades from the black section above into this one */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* 2. CUSTOM CSS STARS: Replaces the missing components */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50" />
        {/* Subtle glowing dots to mimic stars */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse blur-[1px]" />
        <div className="absolute top-3/4 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-3/4 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse delay-300" />
      </div>

      {/* 3. NEBULA GLOW: The purple/pink swirl from your screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/10 to-blue-600/20 blur-[120px] rounded-full animate-spin-slow" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
        
        {/* Badge matching your screenshot style */}
        <div className="inline-block px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] text-pink-500 uppercase bg-pink-500/5 rounded-full border border-pink-500/20 backdrop-blur-sm">
          Ready to Scale?
        </div>

        <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Let&apos;s Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Extraordinary.
          </span>
        </h2>

        <p className="text-neutral-400 text-base md:text-lg max-w-xl mb-12 font-light leading-relaxed">
          From high-performance web applications to scalable backend systems. 
          Let&apos;s turn your ideas into reality using a modern tech stack.
        </p>

        {/* Buttons with subtle shadow glow */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-16">
          <Link href="/contact">
            <button className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Start Your Project
              <MoveRight className="w-4 h-4" />
            </button>
          </Link>
          
          <Link href="/projects">
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
              View My Work
            </button>
          </Link>
        </div>

        {/* Minimal Divider */}
        <div className="w-full max-w-[100px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-10" />

        {/* Socials section */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] font-semibold">Connect with me</p>
          <SocialLinks socials={socials} />
        </div>
      </div>

      {/* Tailwind config requirement for spin-slow: 
          Add "animation: { 'spin-slow': 'spin 20s linear infinite' }" to your tailwind.config.js 
          OR use the inline style below for the nebula swirl: */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}