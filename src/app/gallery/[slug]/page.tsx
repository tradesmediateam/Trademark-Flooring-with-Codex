import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectLightbox } from "@/components/gallery/ProjectLightbox";
import { EstimateCta } from "@/components/estimate/EstimateCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { getProject, projects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/gallery/${project.slug}`,
    keywords: [project.sector, project.location, ...project.services],
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
          { name: project.title, path: `/gallery/${project.slug}` },
        ])}
      />

      <Section className="bg-white">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-400">
          <Link href="/gallery" className="hover:text-ink-900">
            Gallery
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-600">{project.title}</span>
        </nav>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {project.sector}
          </span>
          <span className="text-sm text-ink-400">
            {project.location}
          </span>
        </div>

        <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-md bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <ProjectLightbox images={project.images} projectTitle={project.title} />
        </div>
      </Section>

      {more.length > 0 ? (
        <Section className="bg-ink-50/50">
          <h2 className="font-display text-2xl font-bold text-ink-950">
            More projects
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {more.map((p) => (
              <Button key={p.slug} href={`/gallery/${p.slug}`} variant="outline">
                {p.title}
              </Button>
            ))}
          </div>
        </Section>
      ) : null}

      <EstimateCta />
    </>
  );
}
