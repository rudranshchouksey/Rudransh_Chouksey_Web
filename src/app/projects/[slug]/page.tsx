import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  ArrowLeft, Globe, Calendar, User, Layers, 
  Target, AlertTriangle, CheckCircle2, TrendingUp, Quote, 
  Github
} from 'lucide-react';
import projects from '@/data/projects'; 
import { FadeIn } from '@/components/ui/Fadein';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Rudransh Chouksey`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// 1. UPDATE: params is now a Promise
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. UPDATE: Component must be 'async'
export default async function ProjectCaseStudy({ params }: Props) {
  // 3. UPDATE: Await the params before using them
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] w-full bg-slate-900 flex items-end">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover opacity-30"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-900/50 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-20">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light">
              {project.subtitle}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT CONTENT (8 cols) --- */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* 1. PROJECT OVERVIEW */}
            <section>
              <FadeIn>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">01. Overview</h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">The Hook</h3>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </FadeIn>
            </section>

            {/* 2. THE CHALLENGE */}
            <section>
              <FadeIn>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">02. The Challenge</h2>
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-8">
                  
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="text-amber-500 w-6 h-6" />
                      <h4 className="text-xl font-bold text-slate-900">The Problem</h4>
                    </div>
                    <p className="text-slate-600">{project.challenge.problemStatement}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
                    {/* Goals */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="text-blue-500 w-5 h-5" />
                        <h4 className="font-bold text-slate-900">Business Goals</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.challenge.businessGoals.map((goal, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <span className="mr-2 text-blue-400">•</span> {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Constraints */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Layers className="text-purple-500 w-5 h-5" />
                        <h4 className="font-bold text-slate-900">Constraints</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.challenge.constraints.map((c, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <span className="mr-2 text-purple-400">•</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* 3. PROCESS */}
            <section>
               <FadeIn>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8">03. The Process</h2>
                <div className="space-y-12 relative border-l-2 border-slate-100 ml-3 pl-8 md:pl-12">
                  {project.process.map((step, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[43px] md:-left-[59px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 border-2 border-blue-500 text-blue-600 text-xs font-bold">
                        {index + 1}
                      </span>
                      
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                        {step.image && (
                          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mt-6 shadow-sm border border-slate-100">
                            <Image src={step.image} alt={step.title} fill className="object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </section>

            {/* 4. RESULTS & METRICS */}
            <section>
              <FadeIn>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">04. Solution & Impact</h2>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {project.results.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-900 text-white p-6 rounded-2xl text-center">
                      <h4 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{metric.value}</h4>
                      <p className="font-bold text-sm md:text-base mb-2">{metric.label}</p>
                      {metric.description && (
                        <p className="text-xs text-slate-400 font-light">{metric.description}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* FIXED: Removed 'prose' class and added explicit text color styling */}
                <div className="mb-12">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    {project.results.finalSummary}
                  </p>
                </div>

                {/* Testimonial */}
                {project.results.testimonial && (
                  <div className="bg-blue-50 p-8 rounded-3xl relative">
                    <Quote className="text-blue-200 w-12 h-12 absolute top-6 left-6 -z-10" />
                    <blockquote className="text-xl font-medium text-slate-900 italic mb-6 relative z-10">
                      &quot;{project.results.testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
                        {project.results.testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{project.results.testimonial.author}</p>
                        <p className="text-slate-500 text-xs uppercase tracking-wide">{project.results.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </FadeIn>
            </section>

            {/* 5. REFLECTION */}
            <section>
              <FadeIn>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">05. Reflection</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-100 p-6 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3 text-green-700 font-bold">
                      <CheckCircle2 size={20} />
                      <h3>Key Takeaways</h3>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{project.reflection.learned}</p>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3 text-indigo-700 font-bold">
                      <TrendingUp size={20} />
                      <h3>Future Improvements</h3>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{project.reflection.future}</p>
                  </div>
                </div>
              </FadeIn>
            </section>

          </div>

          {/* --- RIGHT SIDEBAR (Sticky) --- */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 space-y-8">
              
              {/* Meta Card */}
              <FadeIn delay={0.2} className="p-8 border border-slate-200 rounded-3xl bg-white shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Project Info</h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <User className="w-4 h-4 mr-2" /> My Role
                    </span>
                    <p className="text-slate-900 font-semibold">{project.meta.role}</p>
                  </div>
                  
                  {project.meta.company && (
                    <div>
                      <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Globe className="w-4 h-4 mr-2" /> Client
                      </span>
                      <p className="text-slate-900 font-semibold">{project.meta.company}</p>
                    </div>
                  )}

                  <div>
                    <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <Calendar className="w-4 h-4 mr-2" /> Timeline
                    </span>
                    <p className="text-slate-900 font-semibold">{project.meta.timeline}</p>
                  </div>

                  <div>
                    <span className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <Layers className="w-4 h-4 mr-2" /> Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.meta.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  {project.websiteHref && (
                    <a 
                      href={project.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/20"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      View Live Project
                    </a>
                  )}

                  {/* GitHub Repository Button */}
                    {project.githubHref && (
                    <a 
                        href={project.githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-medium hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                    </a>
                    )}
                </div>
              </FadeIn>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}