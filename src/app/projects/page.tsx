import dynamic from 'next/dynamic';

// 1. Lazy Load the Hero Section
// We separate the heavy slideshow logic from the initial HTML response.
const ProjectSlideshowWrapper = dynamic(() => import('./project-slideshow-wrapper'), {
  // A dark placeholder prevents layout shift (CLS) while the slideshow loads
  loading: () => <div className="w-full h-screen bg-[#0a0a0a] animate-pulse" />,
});

// 2. Lazy Load the CTA (Below the fold)
const CTASection = dynamic(() => import('@/components/portfolio/CTASection'));

export default function Page() {
  return (
    // 'main' tag handles the layout. Since this is a Server Component, 
    // it sends 0KB of JS itself, rendering the black background instantly.
    <main className="min-h-screen w-full bg-[#0a0a0a] overflow-hidden text-white antialiased">
      <ProjectSlideshowWrapper />
      <CTASection />
    </main>
  );
}