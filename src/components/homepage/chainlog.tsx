import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { MoveRight, FolderCode, User } from "lucide-react";

export function ChainLog() {
  const data = [
    {
      title: "Current Focus",
      content: (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-2">Freelance Full-Stack & Projects</h3>
          <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
            Delivering high-impact projects ranging from e-commerce platforms to bespoke portfolio sites. 
            Merging technical robustness with aesthetic excellence to elevate unique brand identities.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025 - 2026",
      content: (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-2">Senior Full Stack Developer @ The Serif&apos;s</h3>
          <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
            Led full-stack initiatives for 15+ international clients. Optimized load speeds by 40% and established CI/CD pipelines using Docker and GitHub Actions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/prepos.png" alt="The Serif's Work 1" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop" alt="The Serif's Work 2" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="/foodos-cover.png" alt="The Serif's Work 3" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="/teamsync-ai.png" alt="The Serif's Work 4" width={500} height={500} className="rounded-xl object-xl h-32 md:h-64 w-full border border-white/10" />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2025",
      content: (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-2">Full Stack Web Developer @ Accenture</h3>
          <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
            Supported 50+ enterprise-grade applications, focusing on AWS fault-tolerant architectures and reducing downtime by 20%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop" alt="Accenture Project 1" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop" alt="Accenture Project 2" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="/archverse-board.png" alt="Accenture Project 3" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="/meet-ai.png" alt="Accenture Project 4" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
          </div>
        </div>
      ),
    },
    {
      title: "Foundations",
      content: (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-2">The Chainlog: Internships & AI</h3>
          <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
            Early journey engineering AI-powered resume parsers and ML models with 85% accuracy. Hands-on experience with Python, NLP, and Node.js.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" alt="Foundations 1" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop" alt="Foundations 2" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000&auto=format&fit=crop" alt="Foundations 3" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
            <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop" alt="Foundations 4" width={500} height={500} className="rounded-xl object-cover h-32 md:h-64 w-full border border-white/10" />
          </div>
        </div>
      ),
    },
    {
      title: "Next",
      content: (
        <div className="pt-10">
          <h3 className="text-2xl font-bold text-white mb-8 italic">Ready to see what&apos;s next?</h3>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link href="/projects" className="flex-1">
                <button className="w-full group px-6 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all">
                   <FolderCode size={18} /> 
                   Full Portfolio
                   <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
             </Link>
             <Link href="/about" className="flex-1">
                <button className="w-full group px-6 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                   <User size={18} /> 
                   My Story
                </button>
             </Link>
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