"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export type ServiceCover = { service: string; src: string; alt: string };

/**
 * Gallery browser: premium image cards act as service filters. Selecting a
 * card filters the project grid below; selecting it again clears the filter.
 * Filtering is a cheap in-memory operation that scales to hundreds of projects.
 */
export function GalleryGrid({
  projects,
  serviceCovers,
}: {
  projects: Project[];
  serviceCovers: ServiceCover[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get("service");
    if (requestedService && serviceCovers.some((cover) => cover.service === requestedService)) {
      setActive(requestedService);
    }
  }, [serviceCovers]);

  const filtered = useMemo(() => {
    const serviceOrder = new Map(
      serviceCovers.map((cover, index) => [cover.service, index])
    );
    const featuredProjectOrder = new Map([
      ["self-levelling-richmond-warehouse", 0],
      ["self-levelling-vancouver-corridor", 1],
      ["self-levelling-vancouver-west-broadway-highrise", 2],
    ]);
    const orderedProjects = projects
      .map((project, index) => ({ project, index }))
      .sort((a, b) => {
        const rank = (project: Project) =>
          Math.min(
            ...project.services.map(
              (service) => serviceOrder.get(service) ?? serviceCovers.length
            )
          );

        const serviceRank = rank(a.project) - rank(b.project);
        if (serviceRank !== 0) return serviceRank;

        const featuredRank =
          (featuredProjectOrder.get(a.project.slug) ?? Number.MAX_SAFE_INTEGER) -
          (featuredProjectOrder.get(b.project.slug) ?? Number.MAX_SAFE_INTEGER);

        return featuredRank || a.index - b.index;
      })
      .map(({ project }) => project);

    return active
      ? orderedProjects.filter((project) => project.services.includes(active))
      : orderedProjects;
  }, [projects, serviceCovers, active]);

  return (
    <div>
      {/* Service filter cards */}
      <p className="mb-5 text-center text-sm text-ink-400">
        Tap a service to view projects
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {serviceCovers.map((c) => {
          const selected = active === c.service;
          return (
            <button
              key={c.service}
              type="button"
              onClick={() => {
                const nextService = selected ? null : c.service;
                setActive(nextService);
                window.history.replaceState(
                  window.history.state,
                  "",
                  nextService
                    ? `/gallery?service=${encodeURIComponent(nextService)}`
                    : "/gallery"
                );
              }}
              aria-pressed={selected}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-900 shadow-card transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 lg:aspect-[3/4]",
                selected
                  ? "ring-2 ring-brand-600 ring-offset-2"
                  : "hover:-translate-y-1 hover:shadow-card-hover"
              )}
            >
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t transition-colors",
                  selected
                    ? "from-brand-950/85 via-brand-900/30 to-transparent"
                    : "from-ink-950/80 via-ink-950/20 to-transparent"
                )}
              />
              <div className="absolute inset-x-0 bottom-0 p-3 text-left sm:p-4">
                <span className="font-serif text-base font-bold text-white drop-shadow sm:text-lg">
                  {c.service}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-ink-400">
        Tap a project to view images
      </p>

      {/* Filter status / reset */}
      {active && (
        <div className="mt-3 flex items-center justify-center gap-3 text-sm">
            <span className="text-ink-500">
              Showing <span className="font-semibold text-ink-800">{active}</span> projects
            </span>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Show all
            </button>
        </div>
      )}

      {/* Project grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} activeService={active} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-500">
          No projects in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
