"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link";
import projects from "@/data/projects"

interface Project {
  id: string
  number: string
  title: string
  description: string
  image: string
  year: string
  tags: string[]
  websiteUrl?: string
  caseStudy: {
    challenge: string
    solution: string
    results: string[]
  }
  backgroundImage: string
  imageUrl: string
  websiteHref: string
  caseStudyHref: string
  meta: {
    year: string
    role: string
    platform: string[]
    stack: string[]
  }
}

const clients = [
  { name: "LOGOIPSUM", logo: "LOGOIPSUM" },
  { name: "LOAN", logo: "LOAN" },
  { name: "Framer", logo: "Fr" },
  { name: "LOAN", logo: "LOAN" },
  { name: "Framer", logo: "Fr" },
]

const stats = [
  { label: "Client Outcomes", value: "42+", description: "Products launched" },
  { label: "User engagement", value: "6.9x", description: "" },
  { label: "Brand visibility", value: "+266%", description: "" },
]

export function ScrollProjectSlideshow() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeProject, setActiveProject] = useState(0)
  const [showIntro, setShowIntro] = useState(true)
  const [showClients, setShowClients] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight

      const progress = Math.min(scrollTop / documentHeight, 1)
      setScrollProgress(progress)

      // Hide intro after first scroll
      if (scrollTop > windowHeight * 0.5) {
        setShowIntro(false)
      } else {
        setShowIntro(true)
      }

      // Calculate active project (starting after intro section)
      const projectScrollStart = windowHeight
      const projectScrollEnd = windowHeight + projects.length * windowHeight
      const clientsScrollStart = projectScrollEnd
      const contactScrollStart = clientsScrollStart + windowHeight

      if (scrollTop >= projectScrollStart && scrollTop < projectScrollEnd) {
        const projectIndex = Math.min(Math.floor((scrollTop - projectScrollStart) / windowHeight), projects.length - 1)
        setActiveProject(Math.max(0, projectIndex))
        setShowClients(false)
        setShowContact(false)
      } else if (scrollTop >= clientsScrollStart && scrollTop < contactScrollStart) {
        setShowClients(true)
        setShowContact(false)
      } else if (scrollTop >= contactScrollStart) {
        setShowClients(false)
        setShowContact(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getProjectOpacity = (index: number) => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight

    // Projects start after intro section
    const projectScrollStart = windowHeight + index * windowHeight
    const projectScrollEnd = projectScrollStart + windowHeight

    const opacity =
      scrollTop < projectScrollStart ? 0 : scrollTop >= projectScrollStart && scrollTop < projectScrollEnd ? 1 : 0

    return opacity
  }

  return (
    <div className="relative text-white min-h-screen" style={{ backgroundColor: "#E2E8ED" }}>
      <div style={{ height: `${(projects.length + 3) * 100}vh` }} />

      {/* Intro Section */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: showIntro ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: showIntro ? "auto" : "none" }}
      >
        <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              The Design Of Success
            </h2>
            <p className="text-s text-gray-600 max-w-3xl mx-auto">
              Transforming ideas into powerful, scalable applications with cutting-edge technology and best practices
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Slideshow */}
      {projects.map((project, index) => {
        const opacity = getProjectOpacity(index)
        return (
          <motion.div
            key={project.id}
            className="fixed inset-0 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ duration: 0.5 }}
            style={{ pointerEvents: opacity > 0 ? "auto" : "none" }}
          >
            <div className="absolute inset-0"
            style={{
                  backgroundImage: `url(${project.imageUrl || "/placeholder.svg"})`,
                  }}
            >
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt=""
                className="w-full h-full object-cover blur-3xl opacity-10"
              />
              <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="relative h-full flex items-center z-30">
              <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="relative"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative transform perspective-1000 rotate-y-12">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-8 bg-black/50 p-6 rounded-lg backdrop-blur-sm"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="space-y-4">
                    <div className="text-gray-400 text-lg">{String(index + 1).padStart(3, "0")}</div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent blur-xl"></div>
                      <h2 className="relative text-4xl lg:text-5xl font-bold text-white">{project.title}</h2>
                    </div>
                    <p className="text-gray-300 text-xl font-medium">{project.subtitle}</p>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">{project.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <a
                        href={project.websiteHref}
                        className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                      >
                        Visit Website →
                      </a>
                      <a
                        href={project.caseStudyHref}
                        className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
                      >
                        Case Study →
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-gray-400 text-sm mb-2">Year</div>
                        <div className="text-white">{project.meta.year}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-2">Role</div>
                        <div className="text-gray-300 text-sm">{project.meta.role}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-gray-400 text-sm mb-2">Platform</div>
                        <div className="space-y-1">
                          {project.meta.platform.map((platform, platformIndex) => (
                            <div
                              key={platformIndex}
                              className="text-white text-sm border border-gray-600 bg-gray-800 px-3 py-1 rounded-md font-medium"
                              style={{ backgroundColor: "#374151", color: "#ffffff" }}
                            >
                              {platform}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-2">Stack</div>
                        <div className="space-y-1">
                          {project.meta.stack.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="text-white text-sm border border-gray-600 bg-gray-800 px-3 py-1 rounded-md font-medium"
                              style={{ backgroundColor: "#374151", color: "#ffffff" }}
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Contact Section */}
      <motion.div
        className="fixed inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContact ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-full relative overflow-hidden">
          <Link href="/contact">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2sS1Rsr3108WwY3qCo2TjXCfNvaQqv.png"
              alt="Get in touch"
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
