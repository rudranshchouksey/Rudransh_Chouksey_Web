"use client";

import { 
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover 
} from "@/components/animated-slideshow";

const SLIDES = [
  {
    id: "slide-1",
    title: "frontend dev",
    description: "Building responsive, high-performance, and pixel-perfect user interfaces using modern frameworks like React, Next.js, and Tailwind CSS.",
    imageUrl: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop",
  },
  {
    id: "slide-2",
    title: "backend dev",
    description: "Architecting robust server-side logic, scalable APIs, and secure database schemas to ensure your application runs smoothly under load.",
    imageUrl: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-6",
    title: "UI UX design",
    description: "Crafting intuitive, accessible, and visually stunning digital experiences that align user needs with business goals.",
    imageUrl: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-3",
    title: "video editing",
    description: "Transforming raw footage into compelling visual narratives with professional cutting, color grading, and dynamic motion graphics.",
    imageUrl: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-4",
    title: "SEO optimization",
    description: "Enhancing your digital presence through technical audits, keyword strategies, and performance tuning to maximize organic reach.",
    imageUrl: "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    // DARK THEME: bg-black and text-white
    <HoverSlider className="min-h-screen place-content-center py-20 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      
      {/* Background Gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Pink Badge to match Hero */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
            / our services
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* Left Side: Text List */}
          <div className="flex flex-col space-y-6 w-full lg:w-1/2">
            {SLIDES.map((slide, index) => (
              <div key={slide.title} className="group relative border-l-2 border-neutral-800 hover:border-pink-500 transition-colors duration-300 pl-6">
                {/* Title Trigger */}
                <TextStaggerHover
                  index={index}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter cursor-pointer"
                  text={slide.title}
                />
                
                {/* Description Reveal */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="mt-2 text-lg text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image Display */}
          <div className="w-full lg:w-1/2 aspect-video relative mt-8 lg:mt-0">
             {/* Decorative Glow */}
             <div className="absolute inset-0 bg-pink-600/20 blur-[80px] rounded-full scale-75" />
             
            <HoverSliderImageWrap className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl h-[400px] w-full">
              {SLIDES.map((slide, index) => (
                <div key={slide.id} className="w-full h-full relative">
                  <HoverSliderImage
                    index={index}
                    // FIXED: Removed 'imageUrl' prop as it's not in the interface. 'src' is used instead.
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Overlay to ensure text readability if needed, plus style */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </div>
      </div>
    </HoverSlider>
  );
}