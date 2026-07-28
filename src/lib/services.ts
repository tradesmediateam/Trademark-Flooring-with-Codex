/**
 * Service catalogue for Trademark Flooring
 */

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "self-levelling",
    title: "Self-Levelling",
    description: "Professional self-levelling concrete and substrate preparation for flawless flooring installation.",
    icon: "level",
  },
  {
    slug: "hardwood",
    title: "Hardwood Flooring",
    description: "Beautiful hardwood flooring installation, sanding, refinishing, and restoration.",
    icon: "hardwood",
  },
  {
    slug: "carpet",
    title: "Carpet Installation",
    description: "Premium carpet installation and removal services for homes and commercial spaces.",
    icon: "carpet",
  },
  {
    slug: "laminate",
    title: "Laminate Flooring",
    description: "Durable laminate flooring installation and replacement.",
    icon: "laminate",
  },
  {
    slug: "vinyl",
    title: "Vinyl Flooring",
    description: "Modern vinyl plank and sheet flooring installation.",
    icon: "vinyl",
  },
  {
    slug: "stairs",
    title: "Stairs & Treads",
    description: "Custom stair installation, refinishing, and tread replacement.",
    icon: "stairs",
  },
  {
    slug: "mouldings",
    title: "Mouldings & Trim",
    description: "Professional moulding, baseboard, and trim installation.",
    icon: "mouldings",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
