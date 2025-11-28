import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import projects from '@/data/projects'; 
// Import the new Client Component
import CaseStudyView from '@/components/page/CaseStudyView';

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

  // Pass the data to the client component for animation
  return <CaseStudyView project={project} />;
}