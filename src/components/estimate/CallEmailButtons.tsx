import { cn } from "@/lib/utils";
import { site, telHref, estimateMailto } from "@/lib/site";
import { PhoneIcon, MailIcon } from "@/components/ui/Icons";

/**
 * The two always-available lead actions:
 *  - Click-to-call (one-tap on mobile via tel:)
 *  - Email, which opens the visitor's default mail app with the subject
 *    pre-filled as "Free In-Home Estimate Request".
 *
 * `tone` switches styling for light vs. dark backgrounds.
 */
export function CallEmailButtons({
  className,
  tone = "onLight",
  size = "md",
}: {
  className?: string;
  tone?: "onLight" | "onDark" | "onBrand";
  size?: "md" | "lg";
}) {
  const sizeCls =
    size === "lg" ? "h-14 px-7 text-base" : "h-12 px-6 text-sm sm:text-base";

  const callCls =
    tone === "onLight"
      ? "bg-brand-600 text-white hover:bg-brand-700"
      : tone === "onBrand"
        ? "bg-ink-950 text-white hover:bg-ink-800"
        : "bg-brand-600 text-white hover:bg-brand-700";

  const emailCls =
    tone === "onLight"
      ? "border border-ink-200 bg-white text-ink-900 hover:bg-ink-50"
      : tone === "onBrand"
        ? "border border-white/40 bg-white/10 text-white hover:bg-white/20"
        : "border border-ink-700 bg-transparent text-white hover:bg-ink-800";

  const btn =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <a href={telHref} className={cn(btn, sizeCls, callCls)}>
        <PhoneIcon className="h-5 w-5" />
        Call {site.phone.display}
      </a>
      <a href={estimateMailto} className={cn(btn, sizeCls, emailCls)}>
        <MailIcon className="h-5 w-5" />
        Email Us
      </a>
    </div>
  );
}
