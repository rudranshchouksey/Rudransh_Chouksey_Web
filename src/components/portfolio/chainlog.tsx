import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ChainLog() {
  const data = [
    {
      title: "Technical Arsenal",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            My continuously evolving stack of tools and technologies that power scalable, high-performance applications. 
            I focus on selecting the right tool for the job, balancing developer experience with end-user performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm md:text-base">Core Stack</h4>
              <div className="flex flex-col gap-2">
                {["Next.js & React", "TypeScript", "Node.js & Express", "PostgreSQL & Prisma", "Tailwind CSS"].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-neutral-400 text-xs md:text-sm">
                    <span className="text-pink-500">▹</span> {item}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm md:text-base">DevOps & Cloud</h4>
              <div className="flex flex-col gap-2">
                {["AWS & GCP", "Docker & Kubernetes", "CI/CD (GitHub Actions)", "System Design", "Web3 & Solidity"].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-neutral-400 text-xs md:text-sm">
                    <span className="text-purple-500">▹</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop"
              alt="coding setup"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
              alt="code screen"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2025 - Present",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Lead Full Stack Developer</h3>
          <p className="text-pink-500 text-sm font-medium mb-4">The Serif&apos;s</p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Leading full-stack initiatives for 15+ international clients, focusing on scalability and user experience. 
            Successfully improved page load speeds by 40% through advanced caching strategies and code splitting. 
            Reduced deployment times significantly by implementing robust CI/CD automation pipelines using GitHub Actions and Docker.
            Mentoring a team of junior developers, conducting code reviews, and overseeing Agile delivery processes to ensure timely product launches.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
              alt="team collaboration"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
              alt="agile meeting"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2025 - Present",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Freelance Full-Stack & Branding</h3>
          <p className="text-pink-500 text-sm font-medium mb-4">TwinPix</p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Delivered 25+ diverse projects ranging from e-commerce platforms to portfolio sites with a 99.9% uptime record. 
            Specialized in integrating AI-driven analytics modules to provide clients with actionable insights. 
            Crafted unique brand identities and high-converting web interfaces, merging technical robustness with aesthetic excellence to elevate client brands.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop"
              alt="freelance design"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
              alt="analytics dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2021 - May 2025",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Security Delivery Analyst / SE</h3>
          <p className="text-pink-500 text-sm font-medium mb-4">Accenture</p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Supported 50+ enterprise-grade applications, focusing on security and availability. 
            Reduced server downtime by 20% by implementing AWS fault-tolerant architectures and auto-scaling groups. 
            Conducted regular vulnerability assessments and ensured strict adherence to security compliance standards across all delivered software modules.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1558494949-efc025793ad0?q=80&w=2000&auto=format&fit=crop"
              alt="server room"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop"
              alt="security monitoring"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2020 - May 2021",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white mb-1">AI/ML Development Intern</h3>
          <p className="text-pink-500 text-sm font-medium mb-4">Robotronix India</p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Built predictive Machine Learning models for data analysis, achieving an 85% accuracy rate on test datasets. 
            Deployed lightweight inference services using Python & Flask to integrate models into web applications. 
            Gained extensive hands-on experience with data preprocessing, feature engineering, and neural network architectures.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
              alt="ai brain"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
              alt="data visualization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2020 - Aug 2020",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Full Stack Developer Intern</h3>
          <p className="text-pink-500 text-sm font-medium mb-4">BitByte Software Technology</p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Engineered an AI-powered Resume Parser utilizing NLP techniques, achieving 85% accuracy in data extraction. 
            Optimized Node.js backend APIs to improve data retrieval efficiency by 40%. 
            Collaborated with the frontend team to integrate parsed data into a user-friendly dashboard for HR professionals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop"
              alt="coding laptop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
              alt="software planning"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-black">
      <Timeline data={data} />
    </div>
  );
}