import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Contractors Burnaby BC | Trademark Flooring",
  description: "Trademark Flooring has served Burnaby, BC since 2007 with hardwood, laminate, vinyl, stairs, mouldings, self-levelling, sanding, refinishing, and flooring installation.",
  path: "/",
});

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trademark Flooring",
    "image": "/logo/logo-mark.svg",
    "description": "Professional flooring contractors in Burnaby providing installation, supply, sanding, and refinishing services since 2007",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Burnaby",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "telephone": "(604) 555-0142",
    "email": "contact@trademarflooring.ca",
    "foundingDate": "2007",
    "areaServed": ["Burnaby", "British Columbia", "Metro Vancouver"],
    "serviceType": ["Flooring Installation", "Hardwood Flooring", "Laminate Flooring", "Vinyl Flooring", "Carpet Installation", "Stairs Installation", "Mouldings Installation", "Self-Levelling Concrete"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#24140d] py-20 text-white md:flex md:min-h-[600px] md:items-center md:py-24">
        {/* Layered CSS grain and broad planks create a rich walnut surface. */}
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-flooring-background.png')" }}
        />
        <div className="absolute inset-0 -z-20 bg-[#251208]/38" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(28,12,5,.86)_0%,rgba(36,17,8,.66)_52%,rgba(26,11,5,.30)_100%)]" />

        <Container>
          <div className="relative z-10 max-w-[680px]">
            <h1 className="max-w-2xl text-4xl font-extrabold uppercase leading-[1.12] tracking-[0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,.45)] sm:text-5xl md:text-[3.4rem]">
              We make every floor<br className="hidden sm:block" /> look exceptional.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white drop-shadow-md md:text-lg">
              Trademark Flooring has served Burnaby, BC since 2007. We provide self-levelling, hardwood, laminate, vinyl, stairs, mouldings, sanding, refinishing, and professional flooring installation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center bg-[#f58216] px-8 font-serif text-base font-bold text-white transition-colors hover:bg-[#df6810]"
              >
                Free In-Home Estimate
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-14 items-center justify-center bg-white px-8 font-serif text-base font-bold text-[#683318] transition-colors hover:bg-[#f5e9df]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#e96920]" />
      </section>

      {/* Services Section */}
      <section className="heritage-grain py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-[#ca682b]">What we do</p>
            <h2 className="font-serif text-4xl font-bold text-[#713b1d] mb-2 relative inline-block">
              Burnaby flooring services
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-[#756b64] text-lg mt-4 max-w-3xl">Complete flooring supply, preparation, installation, restoration, and finishing for homes and businesses across Burnaby and Metro Vancouver.</p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <article key={service.slug} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center border-b border-[#7d4b2b]/15 pb-16 last:border-0`}>
                {/* Image Circle */}
                <div className="flex-shrink-0 w-64 h-64">
                  <PhotoPlaceholder
                    rounded="rounded-full"
                    className="w-full h-full shadow-lg ring-4 ring-white"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-3xl font-bold text-[#713b1d] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#6f6660] text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block text-[#c76227] font-bold hover:text-[#7b3b1b] transition-colors text-lg"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Heritage Message Section */}
      <section
        className="walnut-grain relative py-20 text-white text-center"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #5C3D2E 0px, #5C3D2E 10px, #7A5230 10px, #7A5230 20px),
            repeating-linear-gradient(-45deg, #7A5230 0px, #7A5230 10px, #5C3D2E 10px, #5C3D2E 20px)
          `,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 0 0'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Container>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Flooring craftsmanship established in 2007
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-amber-50">
              From floor preparation and self-levelling to hardwood refinishing and complete installation, our team brings proven care to every Burnaby flooring project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold text-lg rounded transition-colors"
            >
              Free In-Home, No-Obligation Estimate
            </Link>
          </div>
        </Container>
      </section>

      {/* Gallery Preview */}
      <section className="heritage-grain py-20">
        <Container>
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-amber-900 mb-2 relative inline-block">
              Flooring Project Gallery
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-600 text-lg mt-4">See our flooring work in action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/gallery#${service.slug}`}
                className="group"
              >
                <PhotoPlaceholder
                  rounded="rounded-lg"
                  className="aspect-square mb-4 transition-shadow group-hover:shadow-xl"
                />
                <h3 className="font-serif text-lg font-bold text-amber-900 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-bold transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
