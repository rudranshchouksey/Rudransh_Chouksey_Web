'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Layers, Palette, Zap, Monitor } from 'lucide-react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string; // Added image prop
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

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        // Conditional styling: if image exists, use white text, otherwise default styles
        image
          ? 'border-transparent text-white'
          : 'border-primary/10 bg-background hover:border-primary/30',
        className
      )}
    >
      {/* 1. BACKGROUND LOGIC */}
      {image ? (
        // If image is provided: Render Image + Overlay
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/50" />
          </div>
        </>
      ) : (
        // If no image: Render the abstract pattern
        <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>
      )}

      {/* 2. DECORATIVE ICON (Background Watermark) */}
      <div
        className={cn(
          "absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]",
          image ? "text-white/10" : "text-primary/5 group-hover:text-primary/10"
        )}
      >
        {icon}
      </div>

      {/* 3. CONTENT */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500",
              image
                ? "bg-white/20 text-white backdrop-blur-sm"
                : "bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20"
            )}
          >
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className={cn("text-sm", image ? "text-gray-300" : "text-muted-foreground")}>
            {description}
          </p>
        </div>

        <div className={cn("mt-4 flex items-center text-sm", image ? "text-white" : "text-primary")}>
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>

      {/* 4. BOTTOM GLOW LINE */}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg",
          image ? "from-white/50 to-white/10" : "from-primary to-primary/30"
        )}
      />
    </motion.div>
  );
};

const items = [
  {
    title: 'Developer Experience',
    description: 'Built with developers in mind, making implementation a breeze.',
    icon: <Code className="size-6" />,
    size: 'large' as const,
    // No image for this one
  },
  {
    title: 'Accessibility',
    description: 'Built with a11y best practices to ensure your app is usable by everyone.',
    icon: <Layers className="size-6" />,
    size: 'small' as const,
    // Example with Image
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: 'Responsive Design',
    description: 'Create layouts that adapt to any screen size with ease.',
    icon: <Monitor className="size-6" />,
    size: 'medium' as const,
    // Example with Image
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: 'Customizable',
    description: "Tailor components to match your brand's unique style.",
    icon: <Palette className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Performance',
    description: 'Optimized for speed and efficiency across all devices.',
    icon: <Zap className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Documentation',
    description: 'Comprehensive guides and examples to help you get started quickly.',
    icon: <FileText className="size-6" />,
    size: 'large' as const,
    // Example with Image
    image: "https://images.unsplash.com/photo-1456324504439-367cee13d421?q=80&w=2070&auto=format&fit=crop"
  },
];

export default function BentoGrid1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            size={item.size}
            image={item.image} // Pass the image here
            className={cn(
              item.size === 'large'
                ? 'col-span-4'
                : item.size === 'medium'
                  ? 'col-span-3'
                  : 'col-span-2',
              'h-full',
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}