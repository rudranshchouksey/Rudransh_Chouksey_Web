import dynamic from "next/dynamic";
import React from "react";

// 1. Lazy Load the Menu
// By using dynamic import, we split the GradientMenu's code from the initial page bundle.
// Since menus are often interactive (hooks, event listeners), isolating them helps performance.
const GradientMenu = dynamic(() => import("../gradient-menu"));

interface LayoutProps {
  children: React.ReactNode;
}

// 2. Server Component (Removed "use client")
// This file now sends 0KB of JavaScript to the browser. 
// It renders the <main> tag as static HTML on the server.
export default function PortfolioLayout({ children }: LayoutProps) {
  return (
      <main className="relative bg-black z-10 overflow-x-hidden"> 
        {/* pt-20 added to push content below fixed navbar */}
        <GradientMenu />
        {children}
      </main>
  );
}