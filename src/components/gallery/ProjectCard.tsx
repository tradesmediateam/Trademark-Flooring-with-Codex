import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";

export function ProjectCard({
  project,
  activeService,
}: {
  project: Project;
  activeService?: string | null;
}) {
  const cover = project.images[0];
  const href = activeService
    ? `/gallery/${project.slug}?service=${encodeURIComponent(activeService)}`
    : `/gallery/${project.slug}`;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900">
        {cover?.src ? (
          <Image
            src={cover.src}
            alt={project.coverAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProjectImagePlaceholder label={project.title} />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-sm font-semibold text-white">
            View project →
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          {project.location}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold text-ink-950">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-500">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.services.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
