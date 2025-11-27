import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  size?: 'large' | 'small';
}

export default function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  image,
  size = 'small',
}: BentoGridItemProps) {
  
  const isLarge = size === 'large';

  return (
    <div
      className={cn(
        // Base: Softer shadow, rounded-3xl (smoother corners), clean white bg
        "row-span-1 rounded-[32px] group/bento hover:shadow-2xl transition duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/60 bg-white overflow-hidden",
        "flex flex-col", 
        // Desktop Layout Logic
        isLarge ? "md:flex-row" : "md:flex-col",
        className
      )}
    >
      {/* --- IMAGE SECTION --- */}
      {image ? (
        <div 
          className={cn(
            "relative overflow-hidden shrink-0",
            // Mobile: Fixed height
            "w-full h-52",
            // Desktop:
            isLarge 
              ? "md:h-full md:w-[55%]"   // Give image slightly more width (55%) for impact
              : "md:h-64 md:w-full"      // Taller image for small cards
          )}
        >
          <Image
            src={image}
            alt={typeof title === "string" ? title : "Project Image"}
            fill
            className="object-cover p-5 rounded-[32px] transition duration-500 group-hover/bento:scale-105"
          />
        </div>
      ) : header}

      {/* --- TEXT SECTION --- */}
      <div 
        className={cn(
          "flex flex-col transition duration-200 p-8", // Increased padding to p-8 for premium feel
          "justify-between h-full relative",
          isLarge ? "md:justify-center md:w-[45%]" : ""
        )}
      >
        {/* Floating Icon - THE KEY VISUAL FIX */}
        {icon && (
          <div className="mb-6 w-12 h-12 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center border border-slate-50">
            {icon}
          </div>
        )}
        
        <div>
          <h3 className="font-serif font-bold text-slate-900 mb-3 text-2xl tracking-tight">
            {title}
          </h3>
          
          <p className="font-sans font-medium text-slate-500 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}