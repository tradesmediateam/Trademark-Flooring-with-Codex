/**
 * Service catalogue for Trademark Flooring
 */

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const serviceImages: Record<string, string> = {
  "self-levelling": "/images/home-services/self-levelling.jpg",
  hardwood: "/images/home-services/hardwood.png",
  carpet: "/images/home-services/carpet.jpg",
  laminate: "/images/home-services/laminate.jpg",
  vinyl: "/images/gallery/vinyl-flooring-vancouver-office/vinyl-flooring-vancouver-office-17.jpg",
  stairs: "/images/home-services/stairs.jpg",
  mouldings: "/images/services/mouldings.png",
};

export const services: Service[] = [
  {
    slug: "self-levelling",
    title: "Self-Levelling",
    description: "Professional self-levelling and substrate preparation for exceptional flooring results.",
    icon: "level",
  },
  {
    slug: "hardwood",
    title: "Hardwood Flooring",
    description: "Beautiful hardwood flooring installation.",
    icon: "hardwood",
  },
  {
    slug: "carpet",
    title: "Carpet Installation",
    description: "Premium carpet installation.",
    icon: "carpet",
  },
  {
    slug: "laminate",
    title: "Laminate Flooring",
    description: "Professional laminate flooring installation.",
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
    description: "Custom stair installation only.",
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
