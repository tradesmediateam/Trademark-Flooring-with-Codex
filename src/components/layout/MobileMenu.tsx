"use client";

import Link from "next/link";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/navigation";
import { site, telHref, estimateMailto } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import {
  CloseIcon,
  PhoneIcon,
  MailIcon,
  ChevronRightIcon,
} from "@/components/ui/Icons";

export function MobileMenu({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-ink-950/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          <ul className="space-y-1">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-800 hover:bg-ink-50"
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                  <ChevronRightIcon className="h-5 w-5 text-ink-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-ink-100 p-5">
          <Button href="/contact" className="w-full" onClick={onClose}>
            Free In-Home Estimate
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-200 px-3 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ink-50"
            >
              <PhoneIcon className="h-4 w-4 text-brand-600" />
              Call
            </a>
            <a
              href={estimateMailto}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-200 px-3 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ink-50"
            >
              <MailIcon className="h-4 w-4 text-brand-600" />
              Email
            </a>
          </div>
          <p className="pt-1 text-center text-sm text-ink-500">
            {site.phone.display}
          </p>
        </div>
      </div>
    </div>
  );
}
