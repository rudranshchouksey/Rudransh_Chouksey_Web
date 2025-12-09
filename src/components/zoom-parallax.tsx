'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];

          // Positioning logic for each image
          const positions = [
            "top-[5vh] left-[10vw] h-[35vh] w-[30vw]",
            "top-[10vh] left-[50vw] h-[25vh] w-[20vw]",
            "top-[40vh] left-[20vw] h-[30vh] w-[25vw]",
            "top-[28vh] left-[60vw] h-[28vh] w-[28vw]",
            "top-[60vh] left-[10vw] h-[25vh] w-[20vw]",
            "top-[65vh] left-[45vw] h-[25vh] w-[30vw]",
            "top-[30vh] left-[35vw] h-[20vh] w-[18vw]",
          ];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute flex h-full w-full items-center justify-center"
            >
              <div
                className={`absolute ${positions[index]} rounded-xl overflow-hidden shadow-2xl`}
                style={{ zIndex: images.length - index }}
              >
                <img
                  src={src}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
