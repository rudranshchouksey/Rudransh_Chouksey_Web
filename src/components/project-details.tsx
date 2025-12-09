"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Settings2, 
  Command, 
  Zap, 
  BarChart3, 
  Users, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

// --- Utility for Tailwind classes ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

// --- Styled UI Components (Inline for portability) ---
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn(
    "relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-md shadow-sm transition-all hover:bg-neutral-900/80 hover:border-white/20", 
    className
  )}>
    {children}
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400">
    {children}
  </span>
);

// --- Content Cards (Adapted for Project Details) ---

const TechStackCard = () => (
  <Card className="flex h-full flex-col justify-between p-6">
    <div>
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
        <Layers className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
      <p className="mt-2 text-sm text-neutral-400">
        Built using a modern component-based architecture for maximum performance and scalability.
      </p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <Badge>Next.js 14</Badge>
      <Badge>TypeScript</Badge>
      <Badge>Tailwind</Badge>
      <Badge>Framer Motion</Badge>
    </div>
  </Card>
);

const TeamCard = () => (
  <Card className="h-full p-6 flex flex-col justify-between">
    <div>
      <h3 className="text-base font-medium text-white">Collaborators</h3>
      <p className="text-xs text-neutral-500">Core Design & Dev Team</p>
    </div>
    <div className="flex -space-x-3 overflow-hidden mt-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0a0a0a] bg-neutral-800 flex items-center justify-center text-xs text-neutral-400">
           U{i}
        </div>
      ))}
      <div className="h-10 w-10 rounded-full border-2 border-[#0a0a0a] bg-neutral-800 flex items-center justify-center text-xs text-white">
        +2
      </div>
    </div>
  </Card>
);

const ImpactCard = () => (
  <Card className="h-full p-6 flex flex-col justify-between">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-base font-medium text-white">Performance</h3>
        <p className="text-xs text-neutral-500">Lighthouse Score</p>
      </div>
      <BarChart3 className="h-4 w-4 text-green-400" />
    </div>
    <div className="mt-2">
      <span className="text-5xl font-bold text-white tracking-tighter">98<span className="text-2xl text-neutral-500">/100</span></span>
    </div>
  </Card>
);

const HighlightCard = () => (
  <Card className="relative h-full w-full overflow-hidden p-6 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
    <div className="relative z-10 text-center">
      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
        <Zap className="h-6 w-6 text-yellow-400" />
      </div>
      <h3 className="text-xl font-bold text-white">Zero Latency</h3>
      <p className="text-xs text-neutral-400 mt-1">Real-time Data Sync</p>
    </div>
  </Card>
);

const OutcomesCard = () => (
  <Card className="h-full p-6 flex flex-col justify-end bg-neutral-900">
    <h3 className="text-lg font-semibold text-white mb-2">Project Outcome</h3>
    <p className="text-sm text-neutral-400 leading-relaxed">
      Reduced user onboarding time by 40% and improved data visualization clarity across all dashboards.
    </p>
  </Card>
);

const LinksCard = () => (
  <Card className="h-full p-6 flex items-center justify-between group cursor-pointer hover:bg-neutral-800/50">
    <div>
      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">View Live Deployment</h3>
      <p className="text-sm text-neutral-500">Experience the application in production.</p>
    </div>
    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-transform group-hover:rotate-45">
      <ArrowUpRight className="h-5 w-5 text-white" />
    </div>
  </Card>
);

// --- Main Layout Component ---

interface BentoGridProps {
  tech: React.ReactNode;
  team: React.ReactNode;
  impact: React.ReactNode;
  highlight: React.ReactNode;
  outcome: React.ReactNode;
  links: React.ReactNode;
}

const BentoGrid = ({ tech, team, impact, highlight, outcome, links }: BentoGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animates when scrolled into view
      viewport={{ once: true, margin: "-100px" }}
      className="grid w-full grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3 auto-rows-[minmax(140px,auto)]"
    >
      {/* 1. Tech Stack: Tall (Left) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-3">
        {tech}
      </motion.div>

      {/* 2. Team: Small (Top Middle) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {team}
      </motion.div>

      {/* 3. Impact: Small (Top Right) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {impact}
      </motion.div>
      
       {/* 4. Highlight: Medium (Right Column vertical) */}
       <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
        {highlight}
      </motion.div>

      {/* 5. Outcome: Wide (Middle Row) */}
      <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
        {outcome}
      </motion.div>

      {/* 6. Links: Wide (Bottom Row) */}
      <motion.div variants={itemVariants} className="md:col-span-3 md:row-span-1">
        {links}
      </motion.div>
    </motion.div>
  );
};

export default function ProjectDetails() {
  return (
    <section className="w-full bg-[#0a0a0a] px-4 py-20 md:px-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Omni-Task AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl"
          >
            A closer look at the technical implementation and design decisions behind the platform.
          </motion.p>
        </div>

        <BentoGrid
          tech={<TechStackCard />}
          team={<TeamCard />}
          impact={<ImpactCard />}
          highlight={<HighlightCard />}
          outcome={<OutcomesCard />}
          links={<LinksCard />}
        />
      </div>
    </section>
  );
}