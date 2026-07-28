import { Section } from "@/components/ui/Section";
import { stats } from "@/lib/content";
import { site } from "@/lib/site";

export function CompanyOverview() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
            About {site.name}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            The floor prep specialists trades trust to get it right.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-500">
            <p>
              Since {site.foundedYear}, Trademark Flooring has focused on one
              thing: preparing concrete substrates so the flooring that goes
              on top performs the way it&apos;s supposed to. No shortcuts, no
              guesswork — just tested, documented, finish-ready floors.
            </p>
            <p>
              Our crews run self-levelling, grinding, patching, and skim
              coating on everything from single-family renovations to
              200-suite high-rise towers, with the dust control and
              scheduling discipline that occupied buildings and tight
              construction timelines demand.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:col-span-5 lg:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-ink-100 bg-ink-50/60 p-6"
            >
              <p className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-ink-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
