"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TestimonialSlider } from "@/components/testimonial-slider-1";
import Image from "next/image";

const reviews = [
  {
    id: "testimonial-3",
    name: "James S.",
    affiliation: "Frontend Developer",
    quote:
      "Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "testimonial-1",
    name: "Jessica H.",
    affiliation: "Web Designer",
    quote:
      "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop",
    thumbnailSrc:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop",
  },
  {
    id: "testimonial-2",
    name: "Lisa M.",
    affiliation: "UX Designer",
    quote:
      "Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
  },
  {
    id: "testimonial-4",
    name: "Jane D.",
    affiliation: "UI/UX Designer",
    quote:
      "The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    // Section wrapper with matching Hero background
    <section className="w-full bg-black py-20 relative overflow-hidden" id="reviews">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          
          {/* Header to match other sections */}
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
              / Reviews
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
              What People Say
            </h2>
          </div>

          <TestimonialSlider reviews={reviews} />
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
        >
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F2F4F7] overflow-hidden bg-gray-300">
                <Image
                  src={`https://i.pravatar.cc/100?img=${i + 25}`}
                  alt="Innovator"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <p className="text-slate-500 font-medium text-sm">
            Trusted by 5,000+ innovators worldwide
          </p>
        </motion.div>
       </div>
    </section>
  );
}
// "use client";

// import React from "react";
// import {
//   CardTransformed,
//   CardsContainer,
//   ContainerScroll,
//   ReviewStars,
// } from "@/components/animated-cards-stack"; 
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const TESTIMONIALS = [
//   {
//     id: "testimonial-3",
//     name: "James S.",
//     profession: "Frontend Developer",
//     description: "Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!",
//     avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     id: "testimonial-1",
//     name: "Jessica H.",
//     profession: "Web Designer",
//     description: "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
//     avatarUrl: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop",
//   },
//   {
//     id: "testimonial-2",
//     name: "Lisa M.",
//     profession: "UX Designer",
//     description: "Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.",
//     avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
//   },
//   {
//     id: "testimonial-4",
//     name: "Jane D.",
//     profession: "UI/UX Designer",
//     description: "The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.",
//     avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="bg-black py-20 relative">
//       <div className="text-center mb-10 px-4">
//         <h3 className="text-4xl md:text-5xl font-bold text-white">
//           Testimonials
//         </h3>
//         <p className="mx-auto mt-4 max-w-lg text-neutral-400 text-sm md:text-base">
//           What others are saying about the digital experiences we craft together.
//         </p>
//       </div>

//       {/* 1. CONTAINER: Gives us 200vh of scroll space to drive the animation */}
//       <ContainerScroll className="h-[200vh] w-full">
        
//         {/* 2. STICKY WRAPPER: This is the missing piece! 
//             It pins the cards to the screen while the container scrolls behind it. */}
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          
//           <CardsContainer className="mx-auto h-[450px] w-[350px]">
//             {TESTIMONIALS.map((testimonial, index) => (
//               <CardTransformed
//                 key={testimonial.id}
//                 arrayLength={TESTIMONIALS.length}
//                 index={index}
//                 // 3. ROTATION FIX: Overrides the default vertical rotation
//                 incrementRotation={index * 6 - 15}
//                 variant="dark"
//                 className="bg-neutral-900 border-neutral-800"
//               >
//                 <div className="flex flex-col items-center space-y-4 text-center">
//                   <ReviewStars
//                     rating={testimonial.rating}
//                     className="text-pink-500"
//                   />
//                   <div className="mx-auto w-4/5 text-lg text-neutral-300">
//                     <blockquote>&quot;{testimonial.description}&quot;</blockquote>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4 mt-auto w-full pt-6 border-t border-neutral-800">
//                   <Avatar className="h-12 w-12 border border-neutral-700">
//                     <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
//                     <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
//                   </Avatar>
//                   <div className="text-left">
//                     <span className="block text-lg font-semibold tracking-tight text-white">
//                       {testimonial.name}
//                     </span>
//                     <span className="block text-sm text-neutral-500">
//                       {testimonial.profession}
//                     </span>
//                   </div>
//                 </div>
//               </CardTransformed>
//             ))}
//           </CardsContainer>

//         </div>
//       </ContainerScroll>
//     </section>
//   );
// }