'use client';

import { MoveUpRight } from 'lucide-react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

// --- YOUR CONTENT ---
const images: ImageData[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop",
    alt: "Frontend Dev",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop",
    alt: "Backend Dev",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop",
    alt: "UI/UX Design",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop",
    alt: "DevOps & Cloud",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop",
    alt: "Video Editing",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop",
    alt: "SEO Optimization",
  },
];

// Helper Hook
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue-theme' | 'green-theme';
  size?: 'default' | 'compact' | 'expanded';
  asChild?: boolean;
}

const ImageReveal = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', size = 'default', asChild, className, children, ...props }, ref) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [activeImage, setActiveImage] = useState<ImageData | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.5);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const requestRef = useRef<number | null>(null);
    const prevCursorPosition = useRef({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dx = clientX - prevCursorPosition.current.x;
      const dy = clientY - prevCursorPosition.current.y;

      const easeAmount = 0.2;
      const newX = prevCursorPosition.current.x + dx * easeAmount;
      const newY = prevCursorPosition.current.y + dy * easeAmount;

      setCursorPosition({ x: newX, y: newY });
      prevCursorPosition.current = { x: newX, y: newY };
    }, []);

    useEffect(() => {
      const updateCursorPosition = (e: MouseEvent) => {
        if (requestRef.current) return;
        requestRef.current = requestAnimationFrame(() => {
          handleMouseMove(e);
          requestRef.current = null;
        });
      };

      window.addEventListener('mousemove', updateCursorPosition);
      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, [handleMouseMove]);

    const handleImageHover = useCallback(
      (image: ImageData) => {
        if (activeImage !== image) {
          setActiveImage(image);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setOpacity(1);
            setScale(1);
          }, 50);
        } else {
          setOpacity(1);
          setScale(1);
        }
      },
      [activeImage]
    );

    const handleMouseLeave = useCallback(() => {
      setOpacity(0);
      setScale(0.5);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveImage(null);
      }, 300);
    }, []);

    // Simplified styles for Dark Theme
    const sizeClasses = {
      default: 'p-6 text-xl sm:text-2xl md:text-4xl',
      compact: 'p-4 text-lg sm:text-xl md:text-3xl',
      expanded: 'p-8 text-2xl sm:text-3xl md:text-5xl',
    };

    const commonClasses = cn(
      'relative w-full min-h-fit overflow-hidden bg-black', // Force Black Background
      className
    );

    return (
      <div
        ref={ref}
        className={commonClasses}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="max-w-6xl mx-auto border-t border-neutral-800">
            {images.map((image) => (
            <div
                key={image.id}
                className={cn(
                `cursor-pointer relative flex items-center justify-between border-b border-neutral-800 transition-colors duration-300 hover:bg-neutral-900/50 group`,
                sizeClasses[size]
                )}
                onMouseEnter={() => handleImageHover(image)}
            >
                <div className="flex items-center gap-4 z-10">
                    <span className="text-neutral-600 text-sm font-mono opacity-50 group-hover:text-pink-500 group-hover:opacity-100 transition-all">
                        0{image.id}
                    </span>
                    <h2
                    className={cn(
                        `uppercase font-bold tracking-tight transition-all duration-300`,
                        activeImage?.id === image.id
                        ? 'text-white translate-x-2'
                        : 'text-neutral-500 group-hover:text-neutral-300'
                    )}
                    >
                    {image.alt}
                    </h2>
                </div>
                
                {/* Arrow Icon */}
                <div
                    className={cn(
                        `p-3 rounded-full transition-all duration-300 ease-out border border-neutral-800 bg-black z-10`,
                        activeImage?.id === image.id
                        ? 'bg-white text-black rotate-45 scale-110 border-white'
                        : 'text-neutral-500'
                    )}
                >
                    <MoveUpRight className='w-6 h-6' />
                </div>

                {/* Mobile Image Fallback */}
                {!isDesktop && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={120}
                  height={80}
                  className="absolute right-16 top-1/2 -translate-y-1/2 object-cover rounded-md opacity-20"
                  sizes="100vw"
                />
                )}
            </div>
            ))}
        </div>

        {/* Floating Hover Image */}
        {isDesktop && activeImage && (
          <div
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
            }}
            className="fixed pointer-events-none z-50 rounded-xl shadow-2xl border border-white/10 w-[350px] h-[450px] overflow-hidden"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover"
              sizes="350px"
          />
          </div>
        )}
      </div>
    );
  }
);

ImageReveal.displayName = 'ImageReveal';

export default ImageReveal;