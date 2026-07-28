import Link from "next/link";
import { cn } from "@/lib/utils";
import { CallEmailButtons } from "./CallEmailButtons";
import { CheckIcon } from "@/components/ui/Icons";

/**
 * The recurring "Free In-Home Estimate — No Obligation" call to action.
 * Rendered in the hero, after the services grid, before the footer, and on
 * every service page. `variant` controls the surrounding treatment.
 */
export function EstimateCta({
  className,
  variant = "band",
  heading = "Free In-Home Estimate — No Obligation",
  subheading = "Get a fast, honest quote for your flooring project. Call now for a one-tap connection, email us, or send your details and photos — we'll get right back to you.",
  showForm = true,
}: {
  className?: string;
  variant?: "band" | "card";
  heading?: string;
  subheading?: string;
  showForm?: boolean;
}) {
  const perks = [
    "No-obligation quote",
    "Fast response",
    "Serving all of Metro Vancouver",
  ];

  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-ink-100 bg-white p-8 shadow-card sm:p-10",
          className
        )}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
          Ready to start?
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-3 max-w-xl text-ink-500">{subheading}</p>
        <CallEmailButtons className="mt-6" tone="onLight" />
        {showForm ? (
          <Link
            href="/contact#estimate-form"
            className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Or fill out the quick estimate form →
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ink-950 text-white",
        className
      )}
    >
      {/* Subtle grid + brand glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-slate opacity-[0.15]"
        style={{ backgroundSize: "44px 44px" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-400">
            Book your free estimate
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            {subheading}
          </p>

          <CallEmailButtons
            className="mt-8 justify-center"
            tone="onDark"
            size="lg"
          />

          {showForm ? (
            <p className="mt-5 text-sm text-ink-300">
              Prefer to type it out?{" "}
              <Link
                href="/contact#estimate-form"
                className="font-semibold text-brand-400 underline-offset-4 hover:underline"
              >
                Send your project details and photos →
              </Link>
            </p>
          ) : null}

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ink-200">
            {perks.map((perk) => (
              <li key={perk} className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-brand-400" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
