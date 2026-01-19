"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Code,
  Palette,
  Users,
  Award,
  Terminal,
} from "lucide-react";
import ExperienceSection from "@/components/about/ExperienceSection";

export default function AboutContent() {
  // Data tailored to Rudransh Chouksey
  const skills: string[] = [
    "Next.js & React",
    "TypeScript",
    "Node.js & Express",
    "AWS & GCP",
    "Docker & Kubernetes",
    "CI/CD (GitHub Actions)",
    "PostgreSQL & Prisma",
    "Tailwind CSS",
    "System Design",
    "Web3 & Solidity",
  ];

  const achievements = [
    {
      year: "2024",
      title: "DevOps Excellence",
      organization: "Infrastructure Optimization",
      description:
        "Reduced deployment times from 2 hours to 15 minutes (85% reduction) via CI/CD automation.",
    },
    {
      year: "2024",
      title: "Full Stack Certification",
      organization: "100xDevs Bootcamp",
      description:
        "Advanced mastery in MERN stack, Docker, and scalable backend architectures.",
    },
    {
      year: "2019",
      title: "Research Publication",
      organization: "IJTRM",
      description:
        "Published research on 'Analytical Problem Solving using Artificial Neural Networks'.",
    },
  ];

  // Updated Interests with Photography, Video Editing, and Marketing
  const interests: string[] = [
    "📸 Photography",
    "🎬 Video Editing",
    "📈 Digital Marketing",
    "☁️ Cloud Architecture",
    "🔗 Web3 & Blockchain",
    "🤖 AI & Machine Learning",
    "🚀 Open Source",
    "📚 Mentoring Developers",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I&apos;m <span className="font-semibold text-gray-900">Rudransh Chouksey</span>,
                a Full-Stack Developer and DevOps specialist based in India.
                I bridge the gap between complex backend architecture and pixel-perfect
                frontend design, building scalable systems that solve real business problems.
              </p>

              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Indore, India (Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>4+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
                {/* Ensure you have a photo at this path or use the placeholder */}
                <Image
                  src="/rudransh-chouksey.jpg" // Replace with your actual image path
                  alt="Rudransh Chouksey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* My Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/50">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">My Story</h2>
            {/* CHANGED: text-gray-600 -> text-gray-800 and added font-medium */}
            <div className="text-gray-800 font-medium leading-relaxed space-y-6 text-lg">
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                My journey in technology started with a fascination for data and logic,
                leading me to publish research on Artificial Neural Networks back in 2019.
                Since then, I&apos;ve evolved into a <strong>Full-Stack Engineer</strong> who cares deeply
                about the entire product lifecycle—from the first line of code to the final
                cloud deployment.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Over the last 4+ years, I&apos;ve worked with global enterprises like <strong>Accenture</strong> and
                dynamic studios like <strong>The Serif&apos;s</strong>. I specialize in the <strong>MERN stack
                  and Next.js</strong>, but my secret weapon is <strong>DevOps</strong>. I don&apos;t just build apps;
                I architect the pipelines (CI/CD, Docker, Kubernetes) that ensure they run reliably
                at scale.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Beyond coding, I am deeply passionate about <strong>content creation and marketing</strong>.
                I believe that building a great product is only half the battle; telling its story through
                engaging video and visuals is what truly connects it to users. Whether it&apos;s optimizing database
                queries or editing a launch video, I thrive on solving complex challenges creatively.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Code, color: "text-blue-600", title: "Full Stack", desc: "React, Next.js, Node.js, MERN" },
              { icon: Terminal, color: "text-purple-600", title: "DevOps & Cloud", desc: "AWS, GCP, Docker, CI/CD" },
              { icon: Palette, color: "text-pink-600", title: "Creative", desc: "Video Editing & UI Design" },
              { icon: Users, color: "text-green-600", title: "Leadership", desc: "Mentoring & Agile Delivery" }
            ].map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:scale-105 transition-transform duration-300">
                <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Highlights
          </h2>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <ExperienceSection />

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Beyond Code
          </h2>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/50">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-default"
                >
                  <span className="text-2xl">{interest.split(" ")[0]}</span>
                  <span className="text-gray-700 font-medium">
                    {interest.split(" ").slice(1).join(" ")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/50"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Scale Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From architecture to deployment, I bring 4+ years of expertise to help you build reliable,
            high-performance applications. Let&apos;s talk.
          </p>
          <Link href="/contact">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all font-medium text-lg shadow-xl">
              Get In Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

// SEO Metadata (optional if using Next.js App Router)
export const metadata = {
  title: "About | Rudransh Chouksey",
  description:
    "Learn about Rudransh Chouksey, a passionate web developer and designer based in Mumbai, India. 5+ years of experience in creating exceptional digital experiences.",
  keywords:
    "web developer, UI/UX designer, Mumbai, India, React, Next.js, portfolio",
};