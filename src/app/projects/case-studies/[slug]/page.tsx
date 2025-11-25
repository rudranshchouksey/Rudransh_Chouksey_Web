import CaseStudyClassic from "@/components/works/case-study-classic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Supported slugs mapped from homepage caseStudyHref
const CASE_STUDIES = {
  "aurora-banking-suite": {
    title: "Aurora Banking Suite",
    subtitle:
      "Next-gen digital banking experience focused on clarity, security, and velocity.",
    hero: {
      src: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1974&auto=format&fit=crop",
      alt: "Aurora Banking Suite hero image",
      width: 1974,
      height: 1316,
    },
    meta: {
      title: "Aurora Banking Suite — Case Study",
      description:
        "Reimagining money movement, PFM insights, and card controls with cinematic interactions across platforms.",
      keywords: ["banking", "PFM", "fintech", "nextjs", "design system"],
      image:
        "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1974&auto=format&fit=crop",
      url: "https://example.com/aurora",
    },
    overview: {
      role: "Product Design, Frontend Architecture",
      timeline: "Q1–Q3 2024",
      industry: "Fintech",
      tools: ["Figma", "Next.js", "TypeScript", "Framer Motion"],
      metrics: [
        { label: "NPS", value: "+18" },
        { label: "Task Success", value: "92%" },
        { label: "Perf", value: "99 LCP" },
        { label: "Platforms", value: "Web • iOS • Android" },
      ],
    },
    content: {
      challenge:
        "Legacy mobile and web experiences fragmented core banking tasks and undermined trust. We needed a unified system with cinematic clarity and rigorous security.",
      approach:
        "We built a split-screen framework with adaptive density, card controls as first-class primitives, and streaming PFM insights. Design tokens bridged platforms for visual parity.",
      results:
        "Higher task success, faster perceived performance, and increased digital engagement across key money movement funnels.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop",
        alt: "Payments flow UI",
        width: 1600,
        height: 1067,
      },
      {
        src: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1400&auto=format&fit=crop",
        alt: "Card controls",
        width: 1400,
        height: 933,
      },
      {
        src: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
        alt: "PFM insights dashboard",
        width: 1200,
        height: 800,
      },
    ],
    prev: null,
    next: "/case-studies/voyage-travel-os",
  },
  "voyage-travel-os": {
    title: "Voyage Travel OS",
    subtitle:
      "All-in-one travel planning and concierge platform with adaptive AI.",
    hero: {
      src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1974&auto=format&fit=crop",
      alt: "Voyage Travel OS hero image",
      width: 1974,
      height: 1316,
    },
    meta: {
      title: "Voyage Travel OS — Case Study",
      description:
        "Unified itineraries, live rebooking, and collaborative planning built for reliability on the move.",
      keywords: ["travel", "concierge", "itinerary", "ai", "nextjs"],
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1974&auto=format&fit=crop",
      url: "https://example.com/voyage",
    },
    overview: {
      role: "Design Systems, Lead Frontend",
      timeline: "2023",
      industry: "Travel",
      tools: ["Figma", "Next.js", "Radix UI", "Zustand"],
      metrics: [
        { label: "Rebooking Time", value: "-43%" },
        { label: "Mobile Perf", value: "98 LCP" },
        { label: "Platforms", value: "Web • iOS" },
      ],
    },
    content: {
      challenge:
        "Travel changes often break plans. Users needed resilience and clarity in chaotic conditions.",
      approach:
        "We built itinerary primitives, live operations hooks, and collaborative planning with optimistic updates for zero-downtime UX.",
      results:
        "Significant reduction in rebooking time and higher retention for frequent travelers.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop",
        alt: "Itinerary builder",
        width: 1600,
        height: 1067,
      },
      {
        src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1400&auto=format&fit=crop",
        alt: "AI concierge",
        width: 1400,
        height: 933,
      },
    ],
    prev: "/case-studies/aurora-banking-suite",
    next: "/case-studies/nebula-analytics",
  },
  "nebula-analytics": {
    title: "Nebula Analytics",
    subtitle:
      "High-fidelity insights for product-led teams with streaming dashboards.",
    hero: {
      src: "https://images.unsplash.com/photo-1551281044-8b89a2fd9043?q=80&w=1974&auto=format&fit=crop",
      alt: "Nebula Analytics hero image",
      width: 1974,
      height: 1316,
    },
    meta: {
      title: "Nebula Analytics — Case Study",
      description:
        "Real-time analytics with cohort exploration and storytelling exports at enterprise scale.",
      keywords: ["analytics", "realtime", "cohorts", "d3", "nextjs"],
      image:
        "https://images.unsplash.com/photo-1551281044-8b89a2fd9043?q=80&w=1974&auto=format&fit=crop",
      url: "https://example.com/nebula",
    },
    overview: {
      role: "Design, Data Viz, Frontend",
      timeline: "2024",
      industry: "SaaS",
      tools: ["Figma", "Next.js", "TypeScript", "D3"],
      metrics: [
        { label: "Query Latency", value: "-31%" },
        { label: "Export Time", value: "-26%" },
      ],
    },
    content: {
      challenge:
        "Decision velocity is limited by legibility and feedback loops. Teams needed precision at speed.",
      approach:
        "We designed a high-contrast visual language, streaming tiles, and stable zoom/pan primitives for analysis.",
      results:
        "Faster insight cycles and better adoption with enterprise stakeholders.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1551281044-8b89a2fd9043?q=80&w=1600&auto=format&fit=crop",
        alt: "Realtime dashboard",
        width: 1600,
        height: 1067,
      },
      {
        src: "https://images.unsplash.com/photo-1551281044-8b89a2fd9043?q=80&w=1400&auto=format&fit=crop",
        alt: "Cohort analysis",
        width: 1400,
        height: 933,
      },
    ],
    prev: "/case-studies/voyage-travel-os",
    next: "/case-studies/atlas-commerce",
  },
  "atlas-commerce": {
    title: "Atlas Commerce",
    subtitle:
      "Composable storefronts with dynamic product narratives and secure checkout.",
    hero: {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1974&auto=format&fit=crop",
      alt: "Atlas Commerce hero image",
      width: 1974,
      height: 1316,
    },
    meta: {
      title: "Atlas Commerce — Case Study",
      description:
        "A composable commerce foundation optimized for performance and motion richness.",
      keywords: ["commerce", "storefront", "stripe", "nextjs"],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1974&auto=format&fit=crop",
      url: "https://example.com/atlas",
    },
    overview: {
      role: "UX Engineering, Motion Design",
      timeline: "2022",
      industry: "E‑commerce",
      tools: ["Figma", "Next.js", "Stripe", "TypeScript"],
      metrics: [
        { label: "Checkout Conv.", value: "+9%" },
        { label: "CLS", value: "0.02" },
      ],
    },
    content: {
      challenge:
        "Static storefronts fail to communicate value density. We needed narrative motion without hurting core web vitals.",
      approach:
        "We built motion-safe components, progressive hydration, and edge-cached product narratives.",
      results:
        "Higher conversion with improved stability and perceived speed.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        alt: "Product narrative",
        width: 1600,
        height: 1067,
      },
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
        alt: "Checkout UI",
        width: 1400,
        height: 933,
      },
    ],
    prev: "/case-studies/nebula-analytics",
    next: "/case-studies/zenith-health",
  },
  "zenith-health": {
    title: "Zenith Health",
    subtitle:
      "Telehealth redefined for hybrid care with HIPAA-ready infrastructure.",
    hero: {
      src: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1974&auto=format&fit=crop",
      alt: "Zenith Health hero image",
      width: 1974,
      height: 1316,
    },
    meta: {
      title: "Zenith Health — Case Study",
      description:
        "Appointments, care plans, and remote monitoring designed for clinical fidelity and warmth.",
      keywords: ["telehealth", "hipaa", "health", "nextjs"],
      image:
        "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1974&auto=format&fit=crop",
      url: "https://example.com/zenith",
    },
    overview: {
      role: "Product Design, Frontend",
      timeline: "2023",
      industry: "Healthcare",
      tools: ["Figma", "Next.js", "tRPC", "TypeScript"],
      metrics: [
        { label: "Appt. No‑shows", value: "-12%" },
        { label: "CSAT", value: "4.7/5" },
      ],
    },
    content: {
      challenge:
        "Hybrid care must balance compliance, reliability, and empathy across contexts.",
      approach:
        "We created a trust‑centric UI with clear states, robust scheduling, and remote monitoring primitives.",
      results:
        "Improved satisfaction and lower no‑show rate while maintaining security posture.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1600&auto=format&fit=crop",
        alt: "Care plan overview",
        width: 1600,
        height: 1067,
      },
      {
        src: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1400&auto=format&fit=crop",
        alt: "Appointment scheduling",
        width: 1400,
        height: 933,
      },
    ],
    prev: "/case-studies/atlas-commerce",
    next: null,
  },
} as const;

type Slug = keyof typeof CASE_STUDIES;

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: Slug } }): Promise<Metadata> {
  const data = CASE_STUDIES[params.slug];
  if (!data) return {};
  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      images: [{ url: data.meta.image || data.hero.src }],
      type: "website",
      url: data.meta.url,
    },
    twitter: {
      card: "summary_large_image",
      title: data.meta.title,
      description: data.meta.description,
      images: [data.meta.image || data.hero.src],
    },
  };
}

export default function Page({ params }: { params: { slug: Slug } }) {
  const data = CASE_STUDIES[params.slug];
  if (!data) return notFound();

  const backHref = "/";

  const getTitleByHref = (href?: string | null) => {
    if (!href) return undefined;
    const slug = href.replace("/case-studies/", "");
    const entry = (CASE_STUDIES as Record<string, any>)[slug];
    return entry?.title as string | undefined;
  };

  const prev = data.prev
    ? { href: data.prev, title: getTitleByHref(data.prev) || "Previous" }
    : null;
  const next = data.next
    ? { href: data.next, title: getTitleByHref(data.next) || "Next" }
    : null;

  const gallery = (data.gallery || []).map((g) => ({ src: g.src, alt: g.alt }));

  return (
    <CaseStudyClassic
      backHref={backHref}
      prev={prev}
      next={next}
      project={{
        id: params.slug,
        title: data.title,
        category: undefined,
        year: undefined,
        image: data.hero.src,
        overview: data.meta.description || data.subtitle,
        process: undefined,
        gallery,
        techStack: data.overview?.tools,
        results: data.content?.results,
      }}
    />
  );
}