"use client";
import { TimelineContent } from "@/components/timeline-animation";
import { VerticalCutReveal } from "@/components/vertical-cut-reveal";
import { ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation variants remain the same as your original code
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    // CHANGE 1: Main Section Background -> bg-black
    <section className="py-24 bg-black relative overflow-hidden" ref={heroRef} id="about">
      
      {/* CHANGE 2: Added Background Glow Effects (Purple/Pink blobs + Grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="flex items-center gap-3">
              {/* CHANGE 3: Asterisk color -> text-pink-500 */}
              <span className="text-pink-500 animate-pulse text-xl">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                // CHANGE 4: Badge Style -> Pink Pill Look
                className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20"
              >
                WHO I AM
              </TimelineContent>
            </div>

            {/* CHANGE 5: Replaced <img> with Lucide Icons for better styling control */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/rudranshchouksey" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rudransh-chouksey/" },
                { icon: Twitter, href: "https://x.com/RudraChouksey" },
                { icon: Instagram, href: "https://www.instagram.com/rudranshchouksey/" }
              ].map((social, idx) => (
                <TimelineContent
                  key={idx}
                  as="a"
                  animationNum={idx}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-pink-500/50 hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
                >
                  <social.icon size={18} />
                </TimelineContent>
              ))}
            </div>
          </div>

          {/* CHANGE 6: Main Image - Added Glow behind it & Dark Overlay inside SVG */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group w-full aspect-[2/1] md:aspect-[3/1] mb-12"
          >
            <div className="absolute inset-0 bg-pink-500/10 blur-[60px] rounded-full scale-90 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <svg
              className="w-full h-full drop-shadow-2xl"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z" />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                className="opacity-80"
              />
              {/* Added a dark rect overlay to ensure image isn't too bright */}
              <rect width="100%" height="100%" fill="black" opacity="0.2" clipPath="url(#clip-inverted)" />
            </svg>
          </TimelineContent>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-between items-center mb-16 border-b border-neutral-800 pb-8">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-8"
            >
              <div className="flex items-center gap-3">
                {/* CHANGE 7: Gradient Text for Numbers */}
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">4+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest leading-tight">Years of <br/> Experience</span>
              </div>
              <div className="w-px h-10 bg-neutral-800" />
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-white">25+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest leading-tight">Projects <br/> Delivered</span>
              </div>
            </TimelineContent>

            <div className="mt-6 md:mt-0">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-3"
              >
                <span className="text-4xl font-bold text-white">100%</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest leading-tight">Client <br/> Satisfaction</span>
              </TimelineContent>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Left: Bio */}
            <div className="md:col-span-2 space-y-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <VerticalCutReveal
                  splitBy="words"
                  staggerDuration={0.05}
                  staggerFrom="first"
                  reverse={true}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                >
                  Building Scalable Digital Solutions.
                </VerticalCutReveal>
              </h1>

              {/* CHANGE 8: Text Colors -> text-neutral-400 (for readability on dark bg) */}
              <TimelineContent
                as="div"
                animationNum={9}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="grid md:grid-cols-2 gap-8 text-neutral-400"
              >
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    My journey began with a curiosity for how things work on the web, which evolved into a passion for full-stack engineering. I specialize in building robust, scalable applications using Next.js, Node.js, and modern cloud infrastructure.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    I believe in code that is not just functional, but also clean, maintainable, and efficient. From crafting pixel-perfect UIs to architecting secure backend systems, I handle the entire lifecycle of digital product development.
                  </p>
                </div>
              </TimelineContent>
            </div>

            {/* Right: Sidebar */}
            <div className="md:col-span-1 flex flex-col justify-between h-full border-l border-neutral-800 pl-8 md:pl-12">
              <div>
                <TimelineContent
                  as="div"
                  animationNum={12}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  // CHANGE 9: Name Color -> Pink-500
                  className="text-pink-500 text-2xl font-bold mb-2 tracking-wide"
                >
                  RUDRANSH
                </TimelineContent>
                <TimelineContent
                  as="div"
                  animationNum={13}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="text-neutral-500 text-sm mb-12 uppercase tracking-wider"
                >
                  Full Stack Developer | UI/UX Designer
                </TimelineContent>

                <TimelineContent
                  as="div"
                  animationNum={14}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="mb-8"
                >
                  <p className="text-white font-medium text-lg leading-snug">
                    Ready to turn your complex ideas into elegant, working software?
                  </p>
                </TimelineContent>
              </div>

              {/* CHANGE 10: Button Style -> Dark Theme */}
              <TimelineContent
                as="a"
                href="/contact"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="group relative w-full bg-white text-black hover:bg-pink-50 text-center px-6 py-4 rounded-xl cursor-pointer font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <span>LET&apos;S COLLABORATE</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </TimelineContent>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}