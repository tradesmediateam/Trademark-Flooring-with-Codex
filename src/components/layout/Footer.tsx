import Link from "next/link";
import { site, serviceAreas, telHref, estimateMailto } from "@/lib/site";
import { mainNav } from "@/lib/navigation";
import { services } from "@/lib/services";
import { Logo } from "@/components/ui/Logo";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[#c9692c] bg-[#713b1d] text-[#f8ede4]">
      <div className="container py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Burnaby flooring craftsmanship since {site.foundedYear}. Hardwood, laminate, vinyl, stairs, mouldings, and self-levelling throughout Metro Vancouver.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-3 text-ink-100 transition-colors hover:text-brand-400"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-500" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 text-ink-100 transition-colors hover:text-brand-400"
                >
                  <MailIcon className="h-4 w-4 text-brand-500" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-ink-300">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  {site.address.street}, {site.address.city},{" "}
                  {site.address.region} {site.address.postalCode}
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-300 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-ink-300 transition-colors hover:text-brand-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas + CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              {serviceAreas.join(" · ")} and throughout {site.address.regionName}.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={estimateMailto}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <MailIcon className="h-4 w-4" />
                Free In-Home Estimate
              </a>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                <PhoneIcon className="h-4 w-4 text-brand-500" />
                Call {site.phone.display}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-[#d9baa5] sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Concrete Floor Preparation Specialists · Serving Metro Vancouver &amp;
            BC
          </p>
        </div>
      </div>
    </footer>
  );
}
