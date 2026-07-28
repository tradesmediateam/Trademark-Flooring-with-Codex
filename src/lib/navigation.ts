export type NavLink = {
  label: string;
  href: string;
};

/** Primary navigation shown in the sticky header and footer. */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
