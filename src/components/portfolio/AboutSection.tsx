"use client"

import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

interface ExperienceItem {
  role: string;
  company: string;
  year: string;
}

export default function AboutSection() {
  const skills: string[] = [
    "Full-Stack Development", "React", "JavaScript", "DevOps Engineering",
    "Node.js", "TypeScript", "UI/UX Design", "Google Cloud", "Docker"
  ];

  const experience: ExperienceItem[] = [
    { role: "Full Stack Developer", company: "TheSerifs", year: "2025" },
    { role: "Full Stack Developer", company: "Accenture", year: "2021" },
    { role: "Traniee( MERN Stack )", company: "Robotronix Ind", year: "2021" },
    { role: "Intern( MERN Stack )", company: "BiteByte", year: "2020" }
  ];

  const handleContactClick = (): void => {
    console.log("Contact button clicked");
  };

  return (
    <section className="py-20 px-6 min-h-screen" style={{ backgroundColor: '#eff2f5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white rounded-3xl pt-2 p-3 mt-0 shadow-sm h-fit w-[386px]"
          >
            <div className="text-center mb-6 p-0">
              <div className="w-[364px] h-[380px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl m-0 p-0 relative overflow-hidden">
                <Image
                  src="/rudransh-chouksey.jpg"
                  alt="Rudransh Chouksey"
                  width={364}
                  height={380}
                  className="object-cover w-[364px] h-[380px]"
                  priority
                />
              </div>
              <div className="flex items-center justify-center pt-5 gap-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">available for work</span>
              </div>
            </div>

            <h3 className="text-4xl text-center font-serif font-light bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 items-center justify-center mb-2 "
              style={{ backgroundImage: "linear-gradient(180deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) 34%, var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)) 124%)" }}
            >
              Rudransh Chouksey
            </h3>
            <p className="text-sm text-center font-sans text-gray-600 items-center justify-center max-w-2xl mx-auto mb-4 leading-relaxed">
              Full Stack Web Developer Based in India.
            </p>

            <div className="flex justify-center gap-4 mb-8">

              {/* GitHub */}
              <a
                href="https://github.com/rudranshchouksey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <GithubIcon className="text-gray-600" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rudranshchouksey/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <Instagram className="text-gray-600" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/RudraChouksey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <Twitter className="text-gray-600" />
              </a>

            </div>


            <button
              onClick={handleContactClick}
              className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>✈</span>
              Contact Me
            </button>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm" style={{ backgroundColor: '#eff2f5' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-s text-gray-700 font-sans leading-relaxed">
                I&apos;m Rudransh Chouksey, a passionate Full-Stack Developer & DevOps Engineer with over 4 years of experience crafting exceptional digital solutions. I blend innovative development with robust technical infrastructure to deliver outstanding web experiences that drive real business results.
              </p>

              <hr className="border-gray-200" />

              {/* Skills */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill: string, index: number) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-6 py-3 bg-[#D8DFE5] text-gray-500 rounded-full text-s font-medium font-sans hover:bg-[#D8DFE5] transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {experience.map((job: ExperienceItem, index: number) => (
                  <div key={index} className="flex items-center rounded-2xl justify-between px-6 py-4 bg-[#D8DFE5] hover:bg-[#D8DFE5]" >
                    <h4 className=" text-gray-600 font-sans text-s">{job.role}</h4>
                    <p className="text-gray-600 font-sans text-s">{job.company}</p>
                    <span className="text-gray-600 font-semibold font-sans text-s ml-8">{job.year}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  );
}