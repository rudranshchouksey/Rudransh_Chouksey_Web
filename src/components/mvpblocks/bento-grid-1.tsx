'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  image,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  // Logic: If it's a large card (3 cols), use the split layout
  const isWide = size === 'large';

  return (
    <motion.div
      variants={variants}
      className={cn(
        // 1. Height set to exactly 268px
        // 2. Padding set to p-5 (20px)
        // 3. Rounded corners preserved
        'group relative flex h-[268px] cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:shadow-xl transition-all duration-500',
        className
      )}
    >
      {/* === LAYOUT LOGIC === */}

      {isWide && image ? (
        // OPTION 1: WIDE CARD (705px) - Split Layout
        <div className="flex flex-col md:flex-row h-full gap-6 items-center">
          {/* Image Container - Adjusted width ratio slightly for the new size */}
          <div className="w-full md:w-[45%] h-full rounded-[1.2rem] overflow-hidden relative bg-gray-100 order-1">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Text Container */}
          <div className="w-full md:w-[55%] flex flex-col justify-center items-start order-2">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-colors duration-500 group-hover:bg-slate-900">
              <div className="text-slate-900 group-hover:text-white transition-colors duration-500">
                <div className="size-6">
                  {icon}
                </div>
              </div>
            </div>
            <h3 className="pt-[20px] mb-2 text-2xl font-serif font-bold text-slate-900">{title}</h3>
            <p className="text-slate-500 font-sans leading-relaxed text-md line-clamp-3">{description}</p>
          </div>
        </div>
      ) : (
        // OPTION 2: NARROW CARD (470px) - Vertical Layout
        <div className="pt-[20px] flex h-full flex-col justify-between">
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-colors duration-500 group-hover:bg-slate-900">
              <div className="text-slate-900 group-hover:text-white transition-colors duration-500">
                <div className="size-6">
                  {icon}
                </div>
              </div>
            </div>
            <h3 className="pt-[20px] mb-2 text-2xl font-serif font-bold text-slate-900">{title}</h3>
            <p className="text-slate-500 font-sans leading-relaxed text-md">{description}</p>
          </div>

          
        </div>
      )}
    </motion.div>
  );
};

export default BentoGridItem;