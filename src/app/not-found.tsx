import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="bg-white py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink-950">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink-500">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
    </Section>
  );
}
