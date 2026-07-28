import Link from "next/link";
import { serviceAreas } from "@/lib/site";
import { CallEmailButtons } from "@/components/estimate/CallEmailButtons";
import { CheckIcon, StarIcon } from "@/components/ui/Icons";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-slate opacity-[0.12]"
        style={{ backgroundSize: "48px 48px" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-ink-100">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5 text-brand-400" />
                ))}
              </span>
              Trusted by GCs, developers &amp; homeowners across BC
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Dead-Flat Floors,
              <span className="text-brand-500"> Built to Last.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
              Trademark Flooring delivers precision self-levelling, concrete
              grinding, and floor preparation for residential, commercial,
              and high-rise projects across{" "}
              <span className="text-white">
                {serviceAreas.slice(0, 4).join(", ")}
              </span>{" "}
              and the rest of Metro Vancouver.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
              >
                Get Your Free In-Home Estimate
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-6">
              <CallEmailButtons tone="onDark" size="md" />
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-300">
              {["No obligation", "Free on-site quotes", "Fully insured crews"].map(
                (item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-brand-400" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 shadow-2xl">
              <div
                className="absolute inset-0 bg-grid-slate opacity-25"
                style={{ backgroundSize: "24px 24px" }}
                aria-hidden="true"
              />
              <div className="relative flex aspect-[4/3] items-center justify-center p-10">
                <svg
                  viewBox="0 0 200 150"
                  className="h-full w-full text-brand-500/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  aria-hidden="true"
                >
                  <path d="M10 120h180" strokeOpacity="0.5" />
                  <path d="M20 120V70l80-35 80 35v50" />
                  <path d="M60 120V90h80v30" />
                  <path d="M20 105h160M20 90h160" strokeOpacity="0.35" />
                  <circle cx="100" cy="30" r="10" strokeOpacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent p-6">
                <p className="text-sm font-medium text-ink-200">
                  Project photography coming soon — real job-site photos will
                  replace this space.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-ink-100 bg-white p-5 shadow-xl sm:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-ink-950">
                      {stat.value}
                    </p>
                    <p className="text-xs text-ink-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
