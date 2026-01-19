"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TestimonialSlider } from "@/components/homepage/testimonial-slider-1";
import Image from "next/image";

const reviews = [
  {
    id: "testimonial-3",
    name: "Shivani Rawat",
    affiliation: "UI/UX Designer",
    quote:
      "Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!",
    imageSrc:
      "/Shivani-rawat.JPG",
    thumbnailSrc:
      "/Shivani-rawat.JPG",
  },
  {
    id: "testimonial-1",
    name: "Vaibhav Kirar",
    affiliation: "Founder of Archverse",
    quote:
      "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
    imageSrc:
      "/rudransh-chouksey-removebg-preview.png",
    thumbnailSrc:
      "/rudransh-chouksey-removebg-preview.png",
  },
  {
    id: "testimonial-2",
    name: "Deepak Sapra",
    affiliation: "CEO API & Services at Dr. Reddy's.",
    quote:
      "Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.",
    imageSrc:
      "https://cdn.theorg.com/cfe55bac-ffa4-4a26-8670-143ee7357642_medium.jpg",
    thumbnailSrc:
      "https://cdn.theorg.com/cfe55bac-ffa4-4a26-8670-143ee7357642_medium.jpg",
  },
  {
    id: "testimonial-4",
    name: "Divyani J.",
    affiliation: "UI/UX Designer",
    quote:
      "The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.",
    imageSrc:
      "/divyani.JPG",
    thumbnailSrc:
      "/divyani.JPG",
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
              What Clients Say
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