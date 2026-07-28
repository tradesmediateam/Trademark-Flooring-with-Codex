import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/gallery/ProjectCard";
import { featuredProjects } from "@/lib/projects";

export function GalleryPreview() {
  return (
    <Section className="bg-ink-50/50">
      <SectionHeading
        eyebrow="Recent Work"
        title="A track record you can see"
        description="A sample of residential, commercial, and multi-family floors we've prepared across Metro Vancouver."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/gallery" variant="outline" size="lg">
          View Full Project Gallery
        </Button>
        <p className="mt-3 text-sm text-ink-500">
          <Link href="/gallery" className="underline-offset-4 hover:underline">
            Browse every project, filtered by sector
          </Link>
        </p>
      </div>
    </Section>
  );
}
