import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/Icons";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Client Feedback"
        title="What our clients say"
        description="Feedback from the developers, general contractors, and homeowners we've worked with."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="rounded-2xl border border-ink-100 bg-ink-50/50 p-7"
          >
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-brand-500" />
              ))}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed text-ink-700">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-ink-950">{t.author}</span>
              <span className="text-ink-400"> · {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
