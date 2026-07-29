"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/navigation";
import { site, telHref } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, MenuIcon } from "@/components/ui/Icons";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "relative z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[#eadfd3] bg-white/97 shadow-sm"
          : "border-b border-[#eee7df] bg-white"
      )}
    >
      <nav
        className="container flex h-20 items-center justify-between lg:h-28"
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-3 lg:flex">
          {mainNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "border-b-2 px-2 py-3 text-sm font-semibold transition-colors",
                  isActive(link.href)
                    ? "border-[#cf6d28] text-[#4b2a1a]"
                    : "border-transparent text-[#403a35] hover:text-[#9a4e21]"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-brand-700"
          >
            <PhoneIcon className="h-4 w-4 text-brand-600" />
            {site.phone.display}
          </a>
          <Button href="/contact" size="sm">
            Free Estimate
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-800 hover:bg-ink-100 lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        isActive={isActive}
      />
    </header>
  );
}
