import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import projects from '@/data/projects'; 
import dynamic from 'next/dynamic';

// 1. Lazy Load the Client Component
// This splits the heavy interaction logic (Framer Motion, 3D cards) from the main bundle.
const CaseStudyView = dynamic(() => import('@/components/projects/CaseStudyView'), {
  // A dark placeholder ensures smooth visual transition during client-side navigation
  loading: () => <div className="min-h-screen w-full bg-[#0a0a0a]" />,
});

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// 2. Static Site Generation (SSG)
// This ensures the HTML is pre-built at build time, serving instantly (TTFB ~50ms).
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Rudransh Chouksey`,
    description: project.description,
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) notFound();

  // 3. Render
  // The Server Component passes the data; the Client Component handles the animation.
  return <CaseStudyView project={project} />;
}