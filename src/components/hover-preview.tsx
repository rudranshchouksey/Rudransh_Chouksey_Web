"use client"

import React, { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// --- 1. YOUR STORY DATA ---
const previewData = {
  Rudransh: {
    image: "/rudransh-chouksey.jpg", 
    title: "Rudransh Chouksey",
    subtitle: "Full-Stack Engineer & DevOps enthusiast crafting systems with design at the core.",
  },
  ArtificialNeuralNetworks: {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    title: "Artificial Neural Networks",
    subtitle: "Where my journey began — researching intelligent systems back in 2019.",
  },
  Accenture: {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    title: "Accenture",
    subtitle: "Gained real-world engineering discipline and enterprise-scale development experience.",
  },
  TheSerifs: {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    title: "The Serif’s",
    subtitle: "Built creative digital experiences in a fast-moving design-driven environment.",
  },
  CICDDockerKubernetes: {
    image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0a29?q=80&w=2532&auto=format&fit=crop",
    title: "CI/CD & DevOps",
    subtitle: "Automating deployments and scaling infrastructure for resilient production systems.",
  },
  designExperiences: {
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
    title: "Design Experiences",
    subtitle: "Crafting interfaces and experiences that feel intuitive and human.",
  },
  createImpact: {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    title: "Create Impact",
    subtitle: "Building technology that solves real problems and moves people forward.",
  },
  storytelling: {
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop",
    title: "Storytelling",
    subtitle: "Bringing ideas to life visually and emotionally through narrative.",
  },
  content: {
    image: "https://images.unsplash.com/photo-1499750310159-52f8fdebafd3?q=80&w=2578&auto=format&fit=crop",
    title: "Content",
    subtitle: "Creating digital content that connects, educates, and engages.",
  },
  design: {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    title: "Design",
    subtitle: "Merging aesthetics with functionality to shape product identity.",
  },
}

// --- 2. SUB-COMPONENTS ---

const HoverLink = ({
  previewKey,
  children,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: {
  previewKey: string
  children: React.ReactNode
  onHoverStart: (key: string, e: React.MouseEvent) => void
  onHoverMove: (e: React.MouseEvent) => void
  onHoverEnd: () => void
}) => {
  return (
    <span
      className="relative inline-block cursor-pointer text-white font-bold transition-all duration-300 hover:text-pink-500 group"
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
      {/* Animated Underline */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
    </span>
  )
}

const PreviewCard = ({
  data,
  position,
}: {
  data: (typeof previewData)[keyof typeof previewData] | null
  position: { x: number; y: number }
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: position.x, 
        y: position.y 
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="fixed pointer-events-none z-50 top-0 left-0"
    >
      <div className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 p-3 rounded-2xl shadow-2xl overflow-hidden w-[300px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-3">
            {/* Safe Image Render */}
            {data?.image && (
                <>
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                </>
            )}
        </div>
        
        <div className="px-1">
            <h4 className="text-white font-bold text-base">{data?.title}</h4>
            <p className="text-neutral-400 text-xs mt-1 leading-snug">{data?.subtitle}</p>
        </div>
      </div>
    </motion.div>
  )
}

// --- 3. MAIN COMPONENT ---

export default function HoverPreview() {
  const [activePreview, setActivePreview] = useState<(typeof previewData)[keyof typeof previewData] | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Preload images safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Object.values(previewData).forEach((data) => {
        const img = new Image()
        img.src = data.image
      })
    }
  }, [])

  const updatePosition = useCallback((e: React.MouseEvent) => {
    const cardWidth = 300
    const cardHeight = 220 
    const offset = 20
    
    setPosition({ 
      x: e.clientX - (cardWidth / 2), 
      y: e.clientY - cardHeight - offset 
    })
  }, [])

  const handleHoverStart = useCallback(
    (key: string, e: React.MouseEvent) => {
      const data = previewData[key as keyof typeof previewData]
      if (data) {
        setActivePreview(data)
        setIsVisible(true)
        updatePosition(e)
      }
    },
    [updatePosition],
  )

  const handleHoverMove = useCallback(
    (e: React.MouseEvent) => {
      updatePosition(e)
    },
    [updatePosition],
  )

  const handleHoverEnd = useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center bg-black overflow-hidden py-6 px-6 select-none" id="story">
       
       {/* --- BACKGROUND GLOWS --- */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
       </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Pink Badge - Left Aligned */}
        <div className="mb-10 flex justify-start">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
            / My Journey
            </div>
        </div>

        {/* Story Text Block - Left Aligned & Responsive Font Size */}
        <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-neutral-600 tracking-tight text-left max-w-5xl">
          
          <p className="mb-8">
            Hey, I&apos;m{" "}
            <HoverLink
              previewKey="Rudransh"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              Rudransh Chouksey
            </HoverLink>
            , a Full-Stack Engineer & DevOps enthusiast who loves building products that scale.
          </p>
          
          <p className="mb-8">
            My journey started in 2019 researching{" "}
            <HoverLink
              previewKey="ArtificialNeuralNetworks"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              Artificial Neural Networks
            </HoverLink>
            . Today, I&apos;ve spent 4+ years engineering robust solutions for{" "}
            <HoverLink
              previewKey="Accenture"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              Accenture
            </HoverLink>
            {" "}and creative studios like{" "}
             <HoverLink
              previewKey="TheSerifs"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              The Serif&apos;s
            </HoverLink>
            .
          </p>

          <p className="mb-8">
             I specialize in automating deployments with{" "}
            <HoverLink
              previewKey="CICDDockerKubernetes"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              CI/CD, Docker, and Kubernetes
            </HoverLink>
             , but my true passion lies in blending tech with{" "}
             <HoverLink
              previewKey="design"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              design
            </HoverLink>
             {" "}and{" "}
             <HoverLink
              previewKey="storytelling"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              storytelling
            </HoverLink>
             .
          </p>

          <p>
            I don&apos;t just write code. I build systems,{" "}
            <HoverLink
              previewKey="designExperiences"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              design experiences
            </HoverLink>
            , and{" "}
            <HoverLink
              previewKey="createImpact"
              onHoverStart={handleHoverStart}
              onHoverMove={handleHoverMove}
              onHoverEnd={handleHoverEnd}
            >
              create impact
            </HoverLink>
            .
          </p>

        </div>
      </div>

      <AnimatePresence>
        {isVisible && activePreview && (
          <PreviewCard 
            data={activePreview} 
            position={position} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}