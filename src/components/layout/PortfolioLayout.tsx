"use client";

import React from "react";
import GradientMenu from "../gradient-menu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: LayoutProps) {
  return (
      <main className="relative bg-black z-10 overflow-x-hidden"> 
        {/* pt-20 added to push content below fixed navbar */}
        <GradientMenu />
        {children}
      </main>
  );
}