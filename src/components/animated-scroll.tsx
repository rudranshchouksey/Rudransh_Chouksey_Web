"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowUp, ArrowLeft } from 'lucide-react'; 
import Link from 'next/link'; // [!code highlight]

// --- Types ---
type PageType = 'intro' | 'project' | 'outro';

interface PageData {
  id: number | string;
  type: PageType;
  title: string;
  category?: string;
  description: React.ReactNode;
  stack?: string[];
  image: string;
  layout: 'left-image' | 'right-image';
  slug?: string; // [!code highlight] Added slug property
}

// --- Content Data (Matched with projects.ts) ---
const pages: PageData[] = [
  // 1. INTRO
  {
    id: 'intro',
    type: 'intro',
    title: "Welcome Aboard",
    category: "Portfolio 2025",
    description: "Entering the digital archive of Rudransh Chouksey. Hold on to your mouse—we're about to dive into a collection of pixel-perfect interfaces and scalable logic.",
    image: 'https://images.unsplash.com/photo-1748968218568-a5eac621e65c?w=900&auto=format&fit=crop&q=60',
    layout: 'left-image',
  },
  
  // 2. Dr. Reddy's
  {
    id: 1,
    type: 'project',
    title: "Dr. Reddy’s Laboratories",
    category: "Web • Mobile Responsive",
    description: "Modernized the digital ecosystem by redesigning the product experience and enhancing patient-centric workflows. A clean, trustworthy interface for healthcare professionals.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2670",
    layout: 'right-image',
    slug: 'dr-reddys', // [!code highlight] Matches projects.ts
  },

  // 3. ArchVerse
  {
    id: 2,
    type: 'project',
    title: "The ArchVerse OS",
    category: "Web Application",
    description: "An end-to-end workspace operating system for planning and tracking projects. Features sprint planning, real-time updates, and structured documentation.",
    stack: ["Next.js", "Supabase", "Prisma", "Zustand"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    layout: 'left-image',
    slug: 'archverse-os', // [!code highlight] Matches projects.ts
  },

  // 4. Meet AI
  {
    id: 3,
    type: 'project',
    title: "Meet Ai™",
    category: "Web • Mobile Web",
    description: "Bridging video conferencing with active AI agents. This platform listens in real-time, provides context, and processes multi-modal inputs via OpenAI's Realtime API.",
    stack: ["Next.js", "WebRTC", "OpenAI Realtime", "Tailwind"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2532",
    layout: 'right-image',
    slug: 'meet-ai', // [!code highlight] Matches projects.ts
  },

  // 5. TeamSync
  {
    id: 4,
    type: 'project',
    title: "TeamSync AI",
    category: "Web • Desktop App",
    description: "A B2B communication platform for fast, structured collaboration. Features threaded conversations and infinite-scroll messaging with remarkable fluidity.",
    stack: ["Next.js", "Cloudflare DO", "OpenAI", "Stripe"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670",
    layout: 'left-image',
    slug: 'teamsync-ai', // [!code highlight] Matches projects.ts
  },

  // 6. Foodied
  {
    id: 5,
    type: 'project',
    title: "Foodied",
    category: "Web • PWA",
    description: "A complete multi-store food delivery system. Users can browse restaurants and track real-time deliveries. Includes dashboards for restaurants and delivery partners.",
    stack: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1981",
    layout: 'right-image',
    slug: 'foodied', // [!code highlight] Matches projects.ts
  },

  // 7. OUTRO
  {
    id: 'outro',
    type: 'outro',
    title: "The Epic Finale",
    category: "End of Showcase",
    description: "You've reached the end of the line (for now). Like what you see? Let's build something scalable, beautiful, and impactful together.",
    image: 'https://images.unsplash.com/photo-1742626157052-f5a373a727ef?w=900&auto=format&fit=crop&q=60',
    layout: 'left-image', 
  },
];

export default function ScrollAdventure() {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  // --- Navigation Logic ---
  const navigateUp = () => { if (currentPage > 1) setCurrentPage(p => p - 1); };
  const navigateDown = () => { if (currentPage < numOfPages) setCurrentPage(p => p + 1); };
  const handleBackToHome = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleRestart = () => { setCurrentPage(1); };

  // --- Scroll Event Listener ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      const atLastPage = currentPage === numOfPages;
      const atFirstPage = currentPage === 1;

      // Release scroll to main page at boundaries
      if (atLastPage && isScrollingDown) return;
      if (atFirstPage && isScrollingUp) return;

      e.preventDefault();
      if (scrolling.current) return;
      scrolling.current = true;
      isScrollingDown ? navigateDown() : navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentPage, numOfPages]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full bg-[#0a0a0a] group text-white">
      
      {/* --- Responsive: Global Back Button --- */}
      <button 
        onClick={handleBackToHome}
        className="absolute top-6 left-6 md:top-8 md:left-8 z-[60] flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all hover:scale-105 group/back"
      >
        <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
        <span className="text-xs md:text-sm font-medium tracking-wide">Back to Home</span>
      </button>

      {/* --- Progress Indicator --- */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pointer-events-none">
        {pages.map((_, i) => (
            <div 
                key={i} 
                className={`w-1 transition-all duration-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] ${currentPage === i + 1 ? 'h-6 md:h-8 bg-purple-500' : 'h-1.5 md:h-2 bg-neutral-800'}`}
            />
        ))}
      </div>

      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        
        // --- Split Screen Logic ---
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        const isLeftImage = page.layout === 'left-image';

        // --- 1. IMAGE PANEL ---
        const ImagePanel = (
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${page.image})` }}
          >
             <div className="absolute inset-0 bg-[#0a0a0a]/80 md:bg-black/20" />
             <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />
          </div>
        );

        // --- 2. CONTENT PANEL ---
        const ContentPanel = (
          <div className="w-full h-full relative flex flex-col justify-center px-6 md:px-20 border-r border-white/5 bg-[#0a0a0a]/90 md:bg-[#0a0a0a]">
             
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase border px-3 py-1 rounded-full backdrop-blur-sm ${
                        page.type === 'project' 
                        ? 'text-pink-400 border-pink-500/20 bg-pink-500/10'
                        : 'text-purple-400 border-purple-500/20 bg-purple-500/10'
                    }`}>
                        {page.category}
                    </span>
                    <span className="text-[10px] md:text-xs font-mono text-neutral-500">
                        {idx.toString().padStart(2, '0')} / {numOfPages.toString().padStart(2, '0')}
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
                    {page.title}
                </h2>
                
                <div className="text-sm md:text-lg text-neutral-400 mb-6 md:mb-8 leading-relaxed max-w-lg">
                    {page.description}
                </div>

                {/* --- Project Links --- */}
                {page.type === 'project' && page.stack && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                         <p className="text-[10px] md:text-xs font-bold text-neutral-600 uppercase tracking-wider mb-3">Built With</p>
                         <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                            {page.stack.map(tech => (
                                <span key={tech} className="text-[10px] md:text-xs font-medium text-neutral-300 bg-neutral-900 border border-white/10 px-2.5 py-1 rounded-md hover:border-purple-500/50 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                                <span className="text-sm font-medium">View Live</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </button>
                            
                            {/* [!code highlight:start] Updated Case Study Link */}
                            {page.slug ? (
                                <Link 
                                    href={`/projects/${page.slug}`}
                                    className="text-neutral-500 text-sm font-medium hover:text-white transition-colors"
                                >
                                    Case Study
                                </Link>
                            ) : (
                                <span className="text-neutral-700 text-sm font-medium cursor-not-allowed">
                                    Coming Soon
                                </span>
                            )}
                            {/* [!code highlight:end] */}
                        </div>
                    </div>
                )}

                {page.type === 'intro' && (
                    <button 
                        onClick={navigateDown}
                        className="mt-2 px-6 md:px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2 w-fit shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Start Exploring
                        <span className="text-lg">↓</span>
                    </button>
                )}

                {page.type === 'outro' && (
                    <button 
                        onClick={handleRestart}
                        className="mt-2 px-6 md:px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2 w-fit shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <ArrowUp className="w-4 h-4" />
                        Back to Start
                    </button>
                )}
            </div>
          </div>
        );

        return (
          <div key={idx} className="absolute inset-0 pointer-events-none">
            {/* PANEL A */}
            <div
              className={`absolute top-0 w-full h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-auto 
                ${isLeftImage ? 'left-0 md:w-1/2' : 'left-0 md:left-1/2 md:w-1/2'}`}
              style={{ transform: isActive ? 'translateY(0)' : downOff, zIndex: isLeftImage ? 0 : 10 }}
            >
               <div className="w-full h-full">
                 {isLeftImage ? ImagePanel : ContentPanel}
               </div>
            </div>

            {/* PANEL B */}
            <div
              className={`absolute top-0 w-full h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-auto 
                ${isLeftImage ? 'left-0 md:left-1/2 md:w-1/2' : 'left-0 md:w-1/2'}`}
              style={{ transform: isActive ? 'translateY(0)' : upOff, zIndex: isLeftImage ? 10 : 0 }}
            >
               <div className="w-full h-full">
                 {isLeftImage ? ContentPanel : ImagePanel}
               </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}