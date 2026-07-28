import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueIcon } from "@/components/ui/Icons";
import { whyChooseUs } from "@/lib/content";
import { site } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Why Choose Us"
        title={`Why contractors and homeowners choose ${site.name}`}
        description="We're specialists — every crew, every truck, and every process is built around one job: getting concrete floors ready."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-ink-100 p-6 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-brand-400">
              <ValueIcon name={item.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
