import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

const serviceThumbnails: Record<string, string> = {
  "self-levelling": "/images/home-services/self-levelling.jpg",
  hardwood: "/images/home-services/hardwood.png",
  carpet: "/images/home-services/carpet.jpg",
  laminate: "/images/home-services/laminate.jpg",
  vinyl: "/images/home-services/vinyl.jpg",
  stairs: "/images/home-services/stairs.jpg",
  mouldings: "/images/services/mouldings.png",
};

const galleryPreviewCovers = [
  {
    service: "Self-Levelling",
    src: "/images/gallery/self-levelling-richmond-warehouse/self-levelling-richmond-warehouse-1.jpg",
    alt: "Self-levelling underlayment poured across a Richmond warehouse floor",
  },
  {
    service: "Hardwood",
    src: "/images/gallery/acacia-prefinished-hardwood-vancouver/acacia-prefinished-hardwood-vancouver-1.jpg",
    alt: "Acacia prefinished hardwood flooring in a Metro Vancouver home",
  },
  {
    service: "Laminate",
    src: "/images/gallery/laminate-flooring-coquitlam/laminate-flooring-coquitlam-1.jpg",
    alt: "Laminate flooring installed in a Coquitlam home",
  },
  {
    service: "Vinyl",
    src: "/images/gallery/vinyl-flooring-vancouver-office/vinyl-flooring-vancouver-office-1.jpg",
    alt: "Commercial vinyl flooring in a Vancouver office",
  },
  {
    service: "Carpet",
    src: "/images/gallery/commercial-carpet-vancouver-renfrew-corridor/commercial-carpet-vancouver-renfrew-corridor-1.jpg",
    alt: "Commercial corridor carpet in a Renfrew, Vancouver building",
  },
  {
    service: "Stairs",
    src: "/images/gallery/hardwood-stairs-west-vancouver/hardwood-stairs-west-vancouver-1.jpg",
    alt: "Hardwood stairs installed in a West Vancouver home",
  },
];

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
              Craftsmanship is<br className="hidden sm:block" /> our trademark.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white drop-shadow-md md:text-lg">
              Serving Burnaby, Vancouver and the Lower Mainland since 2007. Every project is personally overseen by the owner, with craftsmanship and attention to detail from start to finish.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 flex-col items-center justify-center bg-[#f58216] px-8 font-serif font-bold text-white transition-colors hover:bg-[#df6810]"
              >
                <span className="text-base">Free In-Home Estimate</span>
                <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em]">
                  No Obligation
                </span>
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
              Vancouver flooring services
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-[#756b64] text-lg mt-4 max-w-3xl">Complete flooring supply, preparation, installation, restoration, and finishing for homes and businesses across Burnaby and Metro Vancouver.</p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <article key={service.slug} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center border-b border-[#7d4b2b]/15 pb-16 last:border-0`}>
                {/* Image Circle */}
                <div className="flex-shrink-0 w-64 h-64">
                  {serviceThumbnails[service.slug] ? (
                    <div className="relative h-full w-full overflow-hidden rounded-full shadow-lg ring-4 ring-white">
                      <Image
                        src={serviceThumbnails[service.slug]}
                        alt={`${service.title} service`}
                        fill
                        sizes="256px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <PhotoPlaceholder
                      rounded="rounded-full"
                      className="w-full h-full shadow-lg ring-4 ring-white"
                    />
                  )}
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
            <p className="mt-4 text-[9px] font-medium tracking-wide text-gray-600">See our work in action</p>
            <p className="mt-1 text-[8px] tracking-wide text-gray-500">Click below to view images</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {galleryPreviewCovers.map((cover) => (
              <Link
                key={cover.service}
                href={`/gallery?service=${encodeURIComponent(cover.service)}`}
                className="group"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg transition-shadow group-hover:shadow-xl">
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-900 group-hover:text-orange-500 transition-colors">
                  {cover.service}
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
