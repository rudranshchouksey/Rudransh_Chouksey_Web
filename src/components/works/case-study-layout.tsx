"use client"

import * as React from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import {
  LayoutGrid,
  GalleryVertical,
  TableOfContents,
  PanelsLeftBottom,
  LaptopMinimal,
  LayoutPanelTop,
} from "lucide-react"

type GalleryImage = {
  src: string
  alt?: string
  width?: number
  height?: number
  caption?: string
}

type Meta = {
  title: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

type CaseStudyLayoutProps = {
  className?: string
  style?: React.CSSProperties
  meta: Meta
  title: string
  subtitle?: string
  heroImage?: GalleryImage
  overview?: {
    role?: string
    timeline?: string
    industry?: string
    tools?: string[]
    metrics?: { label: string; value: string }[]
  }
  content?: {
    challenge?: string
    approach?: string
    results?: string
  }
  gallery?: GalleryImage[]
  backHref?: string
  prevHref?: string
  nextHref?: string
}

export default function CaseStudyLayout({
  className,
  style,
  meta,
  title,
  subtitle,
  heroImage,
  overview,
  content,
  gallery = [],
  backHref,
  prevHref,
  nextHref,
}: CaseStudyLayoutProps) {
  const [heroLoaded, setHeroLoaded] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const hasGallery = gallery && gallery.length > 0

  const hero: GalleryImage =
    heroImage ?? {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop",
      alt: "Project hero image",
      width: 1974,
      height: 1316,
    }

  const seoTitle = meta?.title || title
  const seoDesc =
    meta?.description ||
    subtitle ||
    "Detailed case study highlighting challenges, approach, and results."
  const seoImage =
    meta?.image || hero?.src || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seoTitle,
    description: seoDesc,
    image: seoImage,
    url: meta?.url,
    about: [
      content?.challenge ? { "@type": "Thing", name: "Challenge", description: content.challenge } : undefined,
      content?.approach ? { "@type": "Thing", name: "Approach", description: content.approach } : undefined,
      content?.results ? { "@type": "Thing", name: "Results", description: content.results } : undefined,
    ].filter(Boolean),
  }

  function openLightbox(index: number) {
    setActiveIndex(index)
  }

  function closeLightbox() {
    setActiveIndex(null)
  }

  function goPrev() {
    if (!hasGallery || activeIndex === null) return
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return (prev - 1 + gallery.length) % gallery.length
    })
  }

  function goNext() {
    if (!hasGallery || activeIndex === null) return
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return (prev + 1) % gallery.length
    })
  }

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (activeIndex === null) return
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        goPrev()
      } else if (e.key === "ArrowRight") {
        goNext()
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }
  }, [activeIndex, hasGallery])

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        {seoDesc ? <meta name="description" content={seoDesc} /> : null}
        {meta?.keywords ? <meta name="keywords" content={meta.keywords.join(", ")} /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        {seoDesc ? <meta property="og:description" content={seoDesc} /> : null}
        <meta property="og:image" content={seoImage} />
        {meta?.url ? <meta property="og:url" content={meta.url} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        {seoDesc ? <meta name="twitter:description" content={seoDesc} /> : null}
        <meta name="twitter:image" content={seoImage} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <motion.section
        className={cn(
          "w-full max-w-full bg-background text-foreground",
          "rounded-none",
          className
        )}
        style={style}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full max-w-full">
          {/* Top Nav */}
          <div className="w-full max-w-full px-4 sm:px-6 md:px-8 pt-6 md:pt-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <PanelsLeftBottom className="size-5 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">Case Study</span>
              </div>
              <div className="flex items-center gap-2">
                {backHref ? (
                  <Button asChild size="sm" variant="ghost" className="bg-secondary/30 hover:bg-secondary text-foreground">
                    <Link href={backHref} aria-label="Back to showcase">Back</Link>
                  </Button>
                ) : null}
                {prevHref ? (
                  <Button asChild size="sm" variant="ghost" className="bg-secondary/30 hover:bg-secondary text-foreground">
                    <Link href={prevHref} aria-label="Previous case study">Prev</Link>
                  </Button>
                ) : null}
                {nextHref ? (
                  <Button asChild size="sm" variant="default" className="bg-primary text-primary-foreground hover:brightness-110">
                    <Link href={nextHref} aria-label="Next case study">Next</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="w-full max-w-full px-4 sm:px-6 md:px-8 mt-6 md:mt-8">
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    <LaptopMinimal className="mr-1 size-3.5" />
                    Project
                  </Badge>
                  <span className="text-xs sm:text-sm text-muted-foreground">Cinematic Detail</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading leading-tight break-words">
                  {title}
                </h1>
                {subtitle ? (
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
                    {subtitle}
                  </p>
                ) : null}
              </div>

              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-xl md:rounded-2xl",
                  "bg-card ring-1 ring-border"
                )}
              >
                {!heroLoaded && (
                  <Skeleton className="absolute inset-0 h-full w-full rounded-xl md:rounded-2xl" />
                )}
                <motion.div
                  initial={{ scale: 1.02, opacity: 0.6 }}
                  animate={heroLoaded && mounted ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={hero.src}
                    alt={hero.alt || "Case study hero image"}
                    width={hero.width || 1920}
                    height={hero.height || 1080}
                    priority
                    onLoad={() => setHeroLoaded(true)}
                    className={cn(
                      "w-full h-auto max-w-full",
                      "select-none",
                      "transition-transform duration-700 ease-out",
                      "hover:scale-[1.01]"
                    )}
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="w-full max-w-full px-4 sm:px-6 md:px-8 mt-8 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <TableOfContents className="size-5 text-muted-foreground" aria-hidden="true" />
                  <h2 className="text-xl sm:text-2xl font-heading">Overview</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {subtitle ||
                    "An in-depth look at the project objectives, constraints, and the narrative from challenge to measurable outcomes."}
                </p>
              </div>
              <div className="rounded-xl bg-card ring-1 ring-border p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <LayoutPanelTop className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Project Details</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {overview?.role ? (
                    <DetailItem label="Role" value={overview.role} />
                  ) : null}
                  {overview?.timeline ? (
                    <DetailItem label="Timeline" value={overview.timeline} />
                  ) : null}
                  {overview?.industry ? (
                    <DetailItem label="Industry" value={overview.industry} />
                  ) : null}
                  {overview?.tools && overview.tools.length ? (
                    <DetailItem label="Tools" value={overview.tools.join(", ")} />
                  ) : null}
                </div>
                {overview?.metrics && overview.metrics.length ? (
                  <>
                    <Separator className="my-4 bg-border/60" />
                    <div className="grid grid-cols-2 gap-3">
                      {overview.metrics.map((m, i) => (
                        <div key={i} className="rounded-lg bg-secondary/40 p-3">
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                          <div className="text-lg font-semibold">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="w-full max-w-full px-4 sm:px-6 md:px-8 mt-10 md:mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <ArticleSection
                icon={<LayoutGrid className="size-5 text-muted-foreground" aria-hidden="true" />}
                title="Challenge"
                body={
                  content?.challenge ||
                  "Define the core product problem, technical constraints, and user expectations that set the stage for innovation."
                }
              />
              <ArticleSection
                icon={<GalleryVertical className="size-5 text-muted-foreground" aria-hidden="true" />}
                title="Approach"
                body={
                  content?.approach ||
                  "Outline the research, design explorations, and architectural decisions that shaped the solution."
                }
              />
              <ArticleSection
                icon={<PanelsLeftBottom className="size-5 text-muted-foreground" aria-hidden="true" />}
                title="Results"
                body={
                  content?.results ||
                  "Summarize the measurable impact across performance, engagement, and business outcomes."
                }
              />
            </div>
          </div>

          {/* Gallery */}
          <div className="w-full max-w-full px-4 sm:px-6 md:px-8 mt-10 md:mt-16 mb-10 md:mb-16">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <GalleryVertical className="size-5 text-muted-foreground" aria-hidden="true" />
                <h3 className="text-lg sm:text-xl font-heading">Image Gallery</h3>
              </div>
              {hasGallery ? (
                <span className="text-xs text-muted-foreground">{gallery.length} images</span>
              ) : null}
            </div>
            {hasGallery ? (
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {gallery.map((img, i) => (
                  <li key={i} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => openLightbox(i)}
                      className={cn(
                        "group relative block w-full overflow-hidden rounded-lg",
                        "ring-1 ring-border bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      )}
                      aria-label={img.alt || `Open image ${i + 1}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || `Gallery image ${i + 1}`}
                        width={img.width || 800}
                        height={img.height || 600}
                        className={cn(
                          "h-auto w-full max-w-full object-cover",
                          "transition-transform duration-500 group-hover:scale-105 select-none"
                        )}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0",
                          "bg-gradient-to-t from-background/40 to-transparent",
                          "opacity-0 group-hover:opacity-100 transition-opacity"
                        )}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-xl border border-dashed border-border/60 p-6 text-center">
                <p className="text-sm text-muted-foreground">No gallery images provided.</p>
              </div>
            )}
          </div>

          {/* Footer Nav */}
          <div className="w-full max-w-full px-4 sm:px-6 md:px-8 pb-10 md:pb-16">
            <Separator className="mb-6 bg-border/60" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {backHref ? (
                <Button asChild variant="ghost" className="bg-secondary/30 hover:bg-secondary text-foreground">
                  <Link href={backHref} aria-label="Back to showcase">Back to Showcase</Link>
                </Button>
              ) : <div />}
              <div className="flex items-center gap-2">
                {prevHref ? (
                  <Button asChild variant="outline" className="border-border bg-card hover:bg-secondary">
                    <Link href={prevHref} aria-label="Previous case study">Previous</Link>
                  </Button>
                ) : null}
                {nextHref ? (
                  <Button asChild variant="default" className="bg-primary text-primary-foreground hover:brightness-110">
                    <Link href={nextHref} aria-label="Next case study">Next</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {activeIndex !== null && hasGallery ? (
            <Dialog open onOpenChange={closeLightbox}>
              <DialogContent
                className={cn(
                  "max-w-5xl w-[92vw] bg-popover text-popover-foreground p-0 overflow-hidden",
                  "border-border"
                )}
              >
                <DialogHeader className="px-4 sm:px-6 pt-4 pb-2">
                  <DialogTitle className="text-base sm:text-lg">
                    {gallery[activeIndex]?.alt || `Image ${activeIndex + 1}`}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    Use arrow keys to navigate. Press Esc to close.
                  </DialogDescription>
                </DialogHeader>
                <div className="relative w-full">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative"
                  >
                    <Image
                      src={gallery[activeIndex].src}
                      alt={gallery[activeIndex].alt || `Gallery image ${activeIndex + 1}`}
                      width={gallery[activeIndex].width || 1600}
                      height={gallery[activeIndex].height || 1200}
                      className="w-full h-auto max-w-full select-none"
                      sizes="90vw"
                      priority
                    />
                    {gallery[activeIndex]?.caption ? (
                      <div className="px-4 sm:px-6 py-3 text-sm text-muted-foreground">
                        {gallery[activeIndex].caption}
                      </div>
                    ) : null}
                  </motion.div>

                  <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3">
                    <Button onClick={goPrev} variant="secondary" className="bg-secondary hover:bg-secondary/90">
                      Prev
                    </Button>
                    <div className="text-xs text-muted-foreground">
                      {activeIndex + 1} / {gallery.length}
                    </div>
                    <Button onClick={goNext} variant="default" className="bg-primary text-primary-foreground hover:brightness-110">
                      Next
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ) : null}
        </AnimatePresence>
      </motion.section>
    </>
  )
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="text-sm truncate">{value}</div>
    </div>
  )
}

function ArticleSection({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <article
      className={cn(
        "rounded-xl bg-card ring-1 ring-border p-4 sm:p-6",
        "transition-colors"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-md bg-secondary/50 p-2">{icon}</div>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-heading">{title}</h3>
          <p className="mt-1.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </article>
  )
}