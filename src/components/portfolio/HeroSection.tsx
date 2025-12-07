"use client"

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import Link from "next/link";
import { HoverExpand_001 } from "@/components/ui/skiper-ui/skiper52";
import Image from "next/image";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { HoverExpand_002 } from "../ui/skiper-ui/skiper53";

export default function HeroSection() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const images = [
    { src: "/Dr-reedys.png", alt: "Description 1", code: "# 01", link: "https://www.drreddys.com/" },
    { src: "/archverse-board.png", alt: "Description 2", code: "# 02", link: "https://archverse-board.vercel.app/" },
    { src: "/teamsync-ai.png", alt: "Description 3", code: "# 03", link: "https://github.com/rudranshchouksey/meetai" },
    { src: "/meet-ai.png", alt: "Description 4", code: "# 04", link: "https://www.drreddys.com/" },
    { src: "/foodos-cover.png", alt: "Description 5", code: "# 05", link: "https://github.com/rudranshchouksey/food_delivery_app" },
  ];

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    const geometries: THREE.BufferGeometry[] = [
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7),
    ];

    const materials: THREE.MeshPhongMaterial[] = [
      new THREE.MeshPhongMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.8, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xEC4899, transparent: true, opacity: 0.7, shininess: 150 }),
      new THREE.MeshPhongMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.6, shininess: 200 })
    ];

    const meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const mesh = new THREE.Mesh(geometries[i], materials[i]);
      mesh.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2
      );
      scene.add(mesh);
      meshes.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    const pointLight = new THREE.PointLight(0x8B5CF6, 1, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    camera.position.z = 6;

    const animate = (): void => {
      requestAnimationFrame(animate);
      meshes.forEach((mesh: THREE.Mesh, index: number) => {
        mesh.rotation.x += 0.01 + index * 0.002;
        mesh.rotation.y += 0.01 + index * 0.003;
        mesh.rotation.z += 0.005;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.003;
        mesh.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.002;
      });
      renderer.render(scene, camera);
    };

    animate();

    return (): void => {
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 pb-12"
          >
            <div className="flex flex-col items-center justify-center w-full px-4">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shrink-0"
                >
                  <Image
                    src="/rudransh-chouksey.jpg"
                    alt="Rudransh Chouksey"
                    width={100}
                    height={100}
                    className="object-cover rounded-xl h-full w-full"
                  />
                </motion.div>

                {/* "I'm Rudransh" Text */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  // Typography Tweak: text-4xl (mobile) -> text-6xl (laptop) -> text-7xl (large screens)
                  // This prevents it from looking too massive on standard laptops
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-700 to-pink-600"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) 34%, var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)) 124%)",
                  }}
                >
                  I&apos;m Rudransh
                </motion.h1>
              </div>

              {/* --- ROW 2: "Web Developer" + Icons --- */}
              <div className="flex items-center justify-center gap-3 flex-wrap mt-2 sm:mt-3">
                {/* "Web Developer" Text */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  // Matches Row 1 sizing for balance
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) 34%, var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)) 124%)",
                  }}
                >
                  Remote Web Developer
                </motion.h2>

                {/* Icons Container */}
                <div className="flex gap-2 items-center">
                  {/* Cloud Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    // Icons: sized to match the text height naturally
                    className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl"
                  >
                    <Image
                      src="/clouds.avif"
                      alt="Clouds"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </motion.div>

                  {/* Moon Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-xl"
                  >
                    <Image
                      src="/moon.avif"
                      alt="Moon"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-sm sm:text-base font-serif text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4"
            >
              I specialize in creating thoughtful and impactful web solutions,
              <br className="hidden sm:block" />
              collaborating with startups and leading brands
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center justify-center gap-4 flex-wrap mt-8"
            >
              <Link
                href="https://drive.google.com/file/d/1n-440fHBHOlmWhfXQGFwZuYXNS36Ds6O/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-300 font-medium"
                >
                  Get Resume
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/70 backdrop-blur-sm text-gray-800 px-8 py-3 rounded-full border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 font-medium"
              >
                See Projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* --- HYDRATION FIX --- */}
          {/* Only render this part if mounted to avoid "text content does not match" errors */}
          {isMounted && (
            <>
              {isMobile ? (
                <HoverExpand_002 className="w-full" images={images} />
              ) : (
                <HoverExpand_001 className="w-full" images={images} />
              )}
            </>
          )}
          
        </div>
      </section>
    </main>
  );
}