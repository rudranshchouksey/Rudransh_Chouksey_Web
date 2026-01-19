"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the AwardCard component.
 */
export interface AwardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AwardCard = React.forwardRef<HTMLDivElement, AwardCardProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base Layout
          "flex min-w-[280px] flex-col items-start gap-4 rounded-2xl p-6 relative overflow-hidden group",
          // Dark Theme Styles
          "bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm",
          // Hover Effects
          "transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)] hover:border-pink-500/30 hover:bg-neutral-900/80",
          className
        )}
        {...props}
      >
        {/* Glow Background on Hover */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 blur-[40px] rounded-full group-hover:bg-pink-500/20 transition-all duration-500" />

        {/* Icon Slot */}
        <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-pink-500 group-hover:text-white group-hover:bg-pink-500 group-hover:border-pink-500 transition-colors duration-300">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left space-y-2 relative z-10">
          <p className="text-xs font-bold text-pink-500 uppercase tracking-widest">
            {title}
          </p>
          <p className="font-medium text-neutral-300 leading-relaxed text-sm group-hover:text-white transition-colors">
            {description}
          </p>
        </div>
      </div>
    );
  }
);
AwardCard.displayName = "AwardCard";

export { AwardCard };