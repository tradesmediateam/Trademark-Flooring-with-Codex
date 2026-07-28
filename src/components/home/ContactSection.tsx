import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallEmailButtons } from "@/components/estimate/CallEmailButtons";
import { site, serviceAreas } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const infoCards = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: site.phone.display,
  },
  {
    icon: MailIcon,
    label: "Email Us",
    value: site.email,
  },
  {
    icon: MapPinIcon,
    label: "Service Area",
    value: `${serviceAreas.slice(0, 3).join(", ")} & more`,
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: "Mon–Fri 7am–5pm",
  },
];

export function ContactSection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's talk about your project"
            align="left"
            description="Reach out for a free, no-obligation quote. We respond quickly and can usually schedule an on-site visit within days."
          />
          <div className="mt-8">
            <CallEmailButtons />
          </div>
          <div className="mt-6">
            <Button href="/contact" variant="outline">
              Go to Contact Page &amp; Estimate Form
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-950">{label}</p>
                <p className="mt-1 text-sm text-ink-500">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
