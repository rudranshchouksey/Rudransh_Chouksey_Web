'use client'; 

import dynamic from 'next/dynamic';

const ScrollProjectSlideshow = dynamic(() => import('../../components/page/scroll-project-slideshow'),
  { ssr: false }
);

export default function ProjectSlideshowWrapper() {
  return <ScrollProjectSlideshow />;
}