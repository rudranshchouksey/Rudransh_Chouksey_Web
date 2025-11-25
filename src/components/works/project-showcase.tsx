"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Scroll, MonitorSmartphone, Layers2, Scale3d, Columns3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string; // Unsplash only
  caseStudyHref?: string; // e.g., /case-studies/slug
  websiteHref?: string; // external url
  meta?: {
    role?: string;
    year?: string;
    platform?: string[]; // e.g., ["Web","iOS"]
    stack?: string[];
  };
};

type ProjectShowcaseProps = {
  projects: Project[];
  initialIndex?: number;
  className?: string;
  style?: React.CSSProperties;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function pad3(i: number) {
  return String(i).padStart(3, "0");
}

export default function ProjectShowcase({
  projects,
  initialIndex = 0,
  className,
  style,
}: ProjectShowcaseProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(clamp(initialIndex, 0, Math.max(0, projects.length - 1)));
  const [sectionProgress, setSectionProgress] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const [isPrepping, setIsPrepping] = useState(true);
  const [weights, setWeights] = useState<number[]>([]);
  const [alphas, setAlphas] = useState<number[]>([]);
  const [barProgress, setBarProgress] = useState(0);

  // Prepare refs
  sectionRefs.current = projects.map((_, i) => sectionRefs.current[i] ?? null);

  // Hydration + initial preloading
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || projects.length === 0) return;

    // Preload initial + adjacent
    const ids = [active, active - 1, active + 1].filter((i) => i >= 0 && i < projects.length);
    ids.forEach((i) => {
      const src = projects[i].imageUrl;
      const img = new window.Image();
      img.src = src;
      img.onload = () =>
        setImagesLoaded((s) => {
          if (s[src]) return s;
          return { ...s, [src]: true };
        });
    });

    const t = window.setTimeout(() => setIsPrepping(false), 400);
    return () => window.clearTimeout(t);
  }, [isHydrated, projects, active]);

  // Scroll orchestration (rAF for performance)
  useEffect(() => {
    if (!isHydrated) return;
    let running = true;
    let raf = 0;

    const compute = () => {
      if (!running) return;

      const viewportH = window.innerHeight || 1;
      const containerEl = containerRef.current;
      const containerTop = containerEl
        ? window.scrollY + containerEl.getBoundingClientRect().top
        : 0;
      const totalSlides = Math.max(1, projects.length);
      const scrollY = window.scrollY;
      const local = clamp((scrollY - containerTop) / viewportH, 0, totalSlides - 0.0001);
      const baseIndex = Math.floor(local);
      const t = clamp(local - baseIndex, 0, 1); // 0..1 progress within current 100vh step

      // Crossfade alphas
      const a: number[] = new Array(totalSlides).fill(0);
      a[baseIndex] = 1 - t;
      if (baseIndex + 1 < totalSlides) a[baseIndex + 1] = t;

      setActive(baseIndex);
      setSectionProgress(t);
      setWeights(a); // keep for backward style usage
      setAlphas(a);

      // Progress bar across total scroll (from first reveal to last fully shown)
      const totalScrollable = viewportH * totalSlides - viewportH; // last slide fully in view
      const bar = clamp((scrollY - containerTop) / Math.max(1, totalScrollable), 0, 1);
      setBarProgress(bar);

      raf = requestAnimationFrame(compute);
    };

    raf = requestAnimationFrame(compute);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, [isHydrated]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard navigation
  useEffect(() => {
    if (!isHydrated) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goTo(active + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goTo(active - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(projects.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, projects.length, isHydrated]); // eslint-disable-line react-hooks/exhaustive-deps

  // Touch gesture navigation (vertical swipe)
  useEffect(() => {
    if (!isHydrated) return;
    let startY = 0;
    let startTime = 0;
    const threshold = 48; // px
    const timeLimit = 400; // ms

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0]?.clientY ?? 0;
      startTime = Date.now();
    };
    const onTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0]?.clientY ?? 0;
      const dy = endY - startY;
      const dt = Date.now() - startTime;
      if (Math.abs(dy) > threshold && dt < timeLimit) {
        if (dy < 0) {
          goTo(active + 1);
        } else {
          goTo(active - 1);
        }
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, isHydrated]); // eslint-disable-line react-hooks/exhaustive-deps

  const goTo = useCallback(
    (index: number) => {
      const target = clamp(index, 0, projects.length - 1);
      const viewportH = window.innerHeight || 1;
      const containerEl = containerRef.current;
      const containerTop = containerEl
        ? window.scrollY + containerEl.getBoundingClientRect().top
        : 0;
      const top = containerTop + target * viewportH + 1; // +1 to ensure section engages
      window.scrollTo({ top, behavior: "smooth" });
    },
    [projects.length]
  );

  // Overall scroll progress for indicator (computed in rAF)
  const scrollProgress = barProgress;

  // derived animation values for active section
  const imgParallaxY = useMemo(() => {
    // subtle parallax: -24px .. 24px centered around progress 0.5
    return (sectionProgress - 0.5) * 48;
  }, [sectionProgress]);

  const imgScale = useMemo(() => {
    // scale from 0.96 to 1.02 with easeInOut feel
    const p = easeInOutCubic(sectionProgress);
    return 0.96 + p * 0.06;
  }, [sectionProgress]);

  const textSlideY = useMemo(() => {
    // text slides up from 16px to 0
    return (1 - easeInOutCubic(sectionProgress)) * 16;
  }, [sectionProgress]);

  const textOpacity = useMemo(() => clamp(sectionProgress * 1.2, 0, 1), [sectionProgress]);

  // Handlers
  const onCase = (href?: string) => {
    if (href) {
      router.push(href);
      return;
    }
    toast.info("Case study unavailable");
  };
  const onVisit = (href?: string) => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    toast.info("Website unavailable");
  };

  // Skeleton loading when prepping or critical image not yet loaded
  const activeImg = projects[active]?.imageUrl;
  const isImgReady = !!imagesLoaded[activeImg];

  return (
    <section
      ref={containerRef}
      className={[
        "relative w-full max-w-full",
        "bg-background text-foreground",
        "select-none",
        className ?? "",
      ].join(" ")}
      style={style}
      aria-label="Project showcase"
    >
      {/* Top progress indicator */}
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-1 bg-muted/30"
        aria-hidden="true"
      >
        <div
          className="h-full bg-primary transition-[width] duration-200 ease-linear"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Minimalist left scroll hint */}
      <div className="fixed bottom-6 left-6 z-40 hidden gap-2 rounded-full bg-card/70 px-3 py-2 backdrop-blur sm:flex">
        <Scroll className="h-4 w-4 text-foreground/70" aria-hidden="true" />
        <span className="text-xs text-foreground/70">Scroll • Space • Arrows</span>
      </div>

      {/* Navigation dots */}
      <nav
        className="fixed right-4 top-1/2 z-40 -translate-y-1/2"
        aria-label="Project navigation"
      >
        <ul className="flex flex-col items-center gap-3">
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  aria-label={`Go to project ${pad3(i + 1)}: ${p.title}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={[
                    "relative h-3 w-3 rounded-full",
                    "outline-none ring-offset-0 transition-all",
                    isActive
                      ? "bg-primary shadow-[0_0_0_4px_rgba(155,140,255,0.15)]"
                      : "bg-foreground/30 hover:bg-foreground/50",
                  ].join(" ")}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sticky slideshow stack */}
      <div
        className="relative w-full max-w-full"
        style={{ height: `calc(${projects.length} * 100svh)` }}
      >
        <div className="sticky top-0 h-[100svh] w-full">
          {projects.map((project, idx) => {
            const alpha = alphas[idx] ?? (idx === active ? 1 : 0);
            const isCurrent = alpha >= (alphas[active] ?? 0);
            const showSkeleton = isPrepping && idx === active && !isImgReady;
            return (
              <div
                key={project.id}
                className="absolute inset-0 w-full max-w-full bg-background"
                style={{
                  opacity: alpha,
                  transition: "opacity 400ms linear",
                  pointerEvents: alpha > 0.01 ? "auto" : "none",
                }}
                aria-hidden={alpha <= 0.01}
              >
                <div className="mx-auto flex h-full w-full max-w-full flex-col md:flex-row">
                  {/* Left: Visual 60% */}
                  <div className="relative min-h-0 min-w-0 flex-1 md:basis-3/5">
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        className="relative h-full w-full"
                        style={{
                          transform: `translateY(${isCurrent ? imgParallaxY : 0}px) scale(${
                            isCurrent ? imgScale : 1
                          })`,
                          transition: "transform 0.8s ease-in-out",
                          willChange: "transform",
                        }}
                      >
                        <div className="absolute inset-6 rounded-2xl bg-card shadow-[0_10px_40px_rgba(0,0,0,0.5)] md:inset-10">
                          {showSkeleton && (
                            <div className="absolute inset-0 overflow-hidden rounded-2xl bg-muted">
                              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-[shimmer_1.2s_infinite_linear]" />
                            </div>
                          )}
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            priority={idx === 0}
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="rounded-2xl object-cover"
                            onLoad={() =>
                              setImagesLoaded((s) => ({ ...s, [project.imageUrl]: true }))
                            }
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content 40% */}
                  <aside className="relative z-10 flex min-h-0 min-w-0 flex-1 items-center md:basis-2/5">
                    <div className="flex w-full max-w-full flex-col gap-6 px-6 py-10 md:px-10 md:py-16">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Project</span>
                        <Typewriter key={idx === active ? `counter-${idx}` : `counter-idle-${idx}`}>{pad3(idx + 1)}</Typewriter>
                      </div>
                      <h2
                        className="break-words font-heading text-3xl leading-tight sm:text-4xl md:text-5xl"
                        aria-live={isCurrent ? "polite" : "off"}
                      >
                        <StaggeredChars active={isCurrent} text={project.title} />
                      </h2>
                      {project.subtitle ? (
                        <p
                          className="text-base text-foreground/80 sm:text-lg"
                          style={{
                            opacity: isCurrent ? clamp(sectionProgress * 1.2, 0, 1) : 0.4,
                            transform: `translateY(${isCurrent ? (1 - sectionProgress) * 16 : 8}px)`,
                            transition: "all 0.8s ease-in-out",
                          }}
                        >
                          {project.subtitle}
                        </p>
                      ) : null}
                      <p
                        className="max-w-prose text-sm leading-relaxed text-foreground/80 sm:text-base"
                        style={{
                          opacity: isCurrent ? clamp(sectionProgress * 1.2, 0, 1) : 0.35,
                          transform: `translateY(${isCurrent ? (1 - sectionProgress) * 16 : 12}px)`,
                          transition: "all 0.8s ease-in-out 80ms",
                        }}
                      >
                        {project.description}
                      </p>
                      <div
                        className="flex flex-wrap items-center gap-3"
                        style={{
                          opacity: isCurrent ? clamp(sectionProgress * 1.4, 0, 1) : 0.3,
                          transform: `translateY(${isCurrent ? Math.max(0, 16 - sectionProgress * 16) : 10}px)`,
                          transition: "all 0.8s ease-in-out 120ms",
                        }}
                      >
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => onCase(project.caseStudyHref)}
                          aria-label={
                            project.caseStudyHref
                              ? `Open case study for ${project.title}`
                              : `Case study unavailable for ${project.title}`
                          }
                          className="bg-primary text-primary-foreground hover:opacity-90"
                        >
                          <Layers2 className="mr-2 h-4 w-4" aria-hidden="true" />
                          Case Study
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => onVisit(project.websiteHref)}
                          aria-label={
                            project.websiteHref
                              ? `Visit website for ${project.title}`
                              : `Website unavailable for ${project.title}`
                          }
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                          <MonitorSmartphone className="mr-2 h-4 w-4" aria-hidden="true" />
                          Visit Website
                        </Button>
                      </div>
                      <div
                        className="mt-2 grid grid-cols-1 gap-4 rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur sm:grid-cols-2"
                        style={{
                          opacity: isCurrent ? clamp(sectionProgress * 1.6, 0, 1) : 0.25,
                          transform: `translateY(${isCurrent ? Math.max(0, 18 - sectionProgress * 18) : 12}px)`,
                          transition: "all 0.8s ease-in-out 160ms",
                        }}
                      >
                        {project.meta?.role && (
                          <MetaItem
                            icon={<Columns3 className="h-4 w-4 text-primary" aria-hidden="true" />}
                            label="Role"
                            value={project.meta.role}
                          />
                        )}
                        {project.meta?.year && (
                          <MetaItem
                            icon={<Scale3d className="h-4 w-4 text-primary" aria-hidden="true" />}
                            label="Year"
                            value={project.meta.year}
                          />
                        )}
                        {project.meta?.platform && project.meta.platform.length > 0 && (
                          <MetaItem
                            icon={<MonitorSmartphone className="h-4 w-4 text-primary" aria-hidden="true" />}
                            label="Platform"
                            value={project.meta.platform.join(" • ")}
                          />
                        )}
                        {project.meta?.stack && project.meta.stack.length > 0 && (
                          <MetaItem
                            icon={<Layers2 className="h-4 w-4 text-primary" aria-hidden="true" />}
                            label="Stack"
                            value={project.meta.stack.join(", ")}
                          />
                        )}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponents ---------- */

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="mt-0.5 rounded-md bg-secondary/60 p-2">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="min-w-0 break-words text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}

function StaggeredChars({ text, active }: { text: string; active: boolean }) {
  const chars = Array.from(text);
  return (
    <span aria-hidden="true" className="inline-block">
      {chars.map((c, i) => {
        const delay = i * 30; // ms
        return (
          <span
            key={`${c}-${i}`}
            className="inline-block will-change-transform"
            style={{
              transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
              transitionDelay: `${delay}ms`,
              transform: `translateY(${active ? 0 : 16}px)`,
              opacity: active ? 1 : 0,
            }}
          >
            {c === " " ? "\u00A0" : c}
          </span>
        );
      })}
    </span>
  );
}

function Typewriter({ children }: { children: string }) {
  // CSS-driven typewriter effect for small counters
  return (
    <span
      aria-live="polite"
      className="relative inline-block overflow-hidden rounded-sm px-1 font-mono text-sm"
      style={{
        // typewriter look
        borderRight: "2px solid var(--color-foreground)",
        animation: "caret 1s step-end infinite",
      }}
    >
      <span
        className="inline-block"
        style={{
          animation: `type 800ms steps(${Math.max(1, children.length)}, end) 1 both`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

/* ---------- Hooks / Utils ---------- */

function useScrollProgress(sections: Array<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let running = true;
    const compute = () => {
      if (!running) return;
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = (doc && doc.scrollTop) || body.scrollTop || 0;

      // total scrollable height considering our sections only
      const first = sections[0];
      const last = sections[sections.length - 1];
      let total = 1;
      let topStart = 0;
      let topEnd = 0;

      if (first && last) {
        const rectFirst = first.getBoundingClientRect();
        const rectLast = last.getBoundingClientRect();
        const pageTop = window.scrollY;
        topStart = pageTop + rectFirst.top;
        topEnd = pageTop + rectLast.bottom - window.innerHeight;
        total = Math.max(1, topEnd - topStart);
      } else {
        const scrollHeight = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          doc.clientHeight,
          doc.scrollHeight,
          doc.offsetHeight
        );
        total = Math.max(1, scrollHeight - window.innerHeight);
        topStart = 0;
      }

      const pct = clamp((scrollTop - topStart) / total, 0, 1);
      setProgress(pct);
      raf = requestAnimationFrame(compute);
    };
    raf = requestAnimationFrame(compute);
    return () => {
      cancelAnimationFrame(raf);
      running = false;
    };
  }, [sections]);

  return progress;
}

function easeInOutCubic(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}