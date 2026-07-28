import { cn } from "@/lib/utils";

/**
 * Branded placeholder rendered whenever a ProjectImage has no `src` yet.
 * Keeps the gallery grid, lightbox, and aspect ratios production-ready before
 * real photography is dropped in — just add `src` to the image data later.
 */
export function ProjectImagePlaceholder({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-grid-slate opacity-20"
        style={{ backgroundSize: "28px 28px" }}
        aria-hidden="true"
      />
      <svg
        width="64"
        height="64"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="relative text-brand-500/70"
        aria-hidden="true"
      >
        <path d="M4 22h24" />
        <path d="M7 22V10l9-4 9 4v12" />
        <path d="M12 22v-6h8v6" />
      </svg>
      {label ? (
        <span className="absolute bottom-3 left-3 right-3 truncate text-center text-xs font-medium text-ink-300">
          {label}
        </span>
      ) : null}
    </div>
  );
}
