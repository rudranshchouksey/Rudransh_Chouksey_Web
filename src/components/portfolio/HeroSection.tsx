"use client"

import React, { useRef, useEffect } from "react";
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

  const images = [
    {
      src: "/meet-ai.png",
      alt: "Description 1",
      code: "# 01",
    },
    {
      src: "/foodos-cover.png",
      alt: "Description 2",
      code: "# 02",
    },
    {
      src: "/rudransh-chouksey.jpg",
      alt: "Description 2",
      code: "# 02",
    },
  ];

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    // Create floating 3D elements with more dynamic geometry
    const geometries: THREE.BufferGeometry[] = [
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7),
    ];

    const materials: THREE.MeshPhongMaterial[] = [
      new THREE.MeshPhongMaterial({
        color: 0x8B5CF6,
        transparent: true,
        opacity: 0.8,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({
        color: 0xEC4899,
        transparent: true,
        opacity: 0.7,
        shininess: 150
      }),
      new THREE.MeshPhongMaterial({
        color: 0x06B6D4,
        transparent: true,
        opacity: 0.6,
        shininess: 200
      })
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

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 1, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    camera.position.z = 6;

    // Animation loop with more dynamic movement
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
      {/* Enhanced 3D Background */}
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

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 pb-10"
        >
          {/* Profile Image and Icons */}
          <div className="flex items-center justify-center gap-6 sm:gap-0.5 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className=" h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <Image
                src="/rudransh-chouksey.jpg"
                alt="Rudransh Chouksey"
                width={1200}          // or any safe large width
                height={800}         // height ratio will follow object-cover
                className="object-cover rounded-2xl h-16 w-16 sm:h-10 sm:w-10"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl sm:text-xs font-serif md:text-8xl font-light bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-700 to-pink-600"
              style={{ backgroundImage: "linear-gradient(180deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) 34%, var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)) 124%)" }}
            >
              I&apos;m Rudransh
            </motion.h1>

          </div>
          <div className="flex font-serif items-center justify-center gap-6 sm:gap-0.5 mb-12 flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl sm:text-xs font-serif md:text-8xl font-light bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 mb-8"
              style={{ backgroundImage: "linear-gradient(180deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) 34%, var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)) 124%)" }}
            >
              Web Developer
            </motion.h2>
            <div className="flex gap-4 items-center">
              <motion.div
                whileHover={{ scale: 1.15, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Image
                  src="/clouds.avif"
                  alt="Background Clouds"
                  width={1200}      // safe width
                  height={800}      // safe height (aspect won't matter because of w-full h-full)
                  className="wh-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Image
                  src="/moon.avif"
                  alt="Moon Illustration"
                  width={1200}      // safe width
                  height={800}      // safe height, aspect controlled by CSS
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-s sm:tact-xs font-serif text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            I specialize in creating thoughtful and impactful web solutions,
            <br />
            collaborating with startups and leading brands
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center gap-4 flex-wrap"
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
            <>
              {isMobile ? (
                <HoverExpand_002 images={images} />
              ) : (
                <HoverExpand_001 images={images} />
              )}
            </>
      </div>
      
    </section>
    
    </main>

  );
}
