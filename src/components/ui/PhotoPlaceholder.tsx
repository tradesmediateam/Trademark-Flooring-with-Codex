import { cn } from "@/lib/utils";
import { ImageIcon } from "@/components/ui/Icons";

/**
 * Branded stand-in shown wherever a real project photo will go. Warm,
 * intentional, and on-brand — reads as "photo coming soon" rather than a
 * broken image or a bare emoji.
 */
export function PhotoPlaceholder({
  label,
  className,
  rounded = "rounded-xl",
}: {
  label?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100",
        rounded,
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-amber-700/70">
        <ImageIcon className="h-10 w-10" strokeWidth={1.3} />
        {label ? (
          <span className="px-3 text-center text-xs font-medium uppercase tracking-wide">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
