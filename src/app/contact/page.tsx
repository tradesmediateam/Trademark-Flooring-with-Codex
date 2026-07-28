import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CallEmailButtons } from "@/components/estimate/CallEmailButtons";
import { EstimateForm } from "@/components/estimate/EstimateForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { faqs } from "@/lib/content";
import { site, serviceAreas } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Flooring Estimate Burnaby BC | Trademark Flooring",
  description:
    "Get in touch with Trademark Flooring for a free, no-obligation estimate. Call, email, or send your project details online — serving Metro Vancouver and BC.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <Section className="heritage-grain border-b border-[#8a5b3b]/10 text-[#3a322d]" contained={false}>
        <div className="container py-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c96527]">
            Contact Us
          </p>
          <h1 className="mx-auto mt-3 max-w-2xl font-serif text-4xl font-bold tracking-tight text-[#633318] sm:text-5xl">
            Free In-Home Estimate — No Obligation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#746b64]">
            Call now for a one-tap connection, email us, or send your project
            details below and we&apos;ll get back to you quickly.
          </p>
          <CallEmailButtons className="mt-8 justify-center" size="lg" />
        </div>
      </Section>

      <Section className="heritage-grain">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div id="estimate-form" className="scroll-mt-24 border border-[#8a5b3b]/15 bg-white/90 p-6 shadow-card sm:p-8">
              <h2 className="font-display text-2xl font-bold text-ink-950">
                Request your free estimate
              </h2>
              <p className="mt-2 text-ink-500">
                Prefer not to call? Fill out the form and include a few
                photos if you have them — we&apos;ll follow up by phone or email.
              </p>
              <div className="mt-6">
                <EstimateForm />
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6">
              <h2 className="font-display text-lg font-bold text-ink-950">
                Contact information
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink-900">Phone</p>
                    <a
                      href={`tel:${site.phone.href}`}
                      className="text-ink-500 hover:text-brand-700"
                    >
                      {site.phone.display}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink-900">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink-500 hover:text-brand-700"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink-900">Address</p>
                    <p className="text-ink-500">
                      {site.address.street}, {site.address.city},{" "}
                      {site.address.region} {site.address.postalCode}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink-900">Hours</p>
                    <ul className="text-ink-500">
                      {site.hours.map((h) => (
                        <li key={h.days}>
                          {h.days}: {h.open === "Closed" ? "Closed" : `${h.open} – ${h.close}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6">
              <h2 className="font-display text-lg font-bold text-ink-950">
                Service area
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                {serviceAreas.join(", ")}, and throughout{" "}
                {site.address.regionName}.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="heritage-grain">
        <h2 className="text-center font-display text-2xl font-bold text-ink-950 sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink-900 marker:content-none">
                {faq.question}
                <span className="shrink-0 text-brand-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
