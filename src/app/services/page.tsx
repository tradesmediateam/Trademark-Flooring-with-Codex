import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

const serviceImages: Record<string, string> = {
  "self-levelling": "/images/services/self-levelling.jpg",
  hardwood: "/images/services/hardwood.jpg",
  carpet: "/images/services/carpet.jpg",
  laminate: "/images/services/laminate.jpg",
  vinyl: "/images/services/vinyl.jpg",
  stairs: "/images/services/stairs.jpg",
};

export const metadata: Metadata = buildMetadata({
  title: "Flooring Services Burnaby BC | Trademark Flooring",
  description: "Burnaby flooring services including self-levelling, hardwood, laminate, vinyl, carpet, stairs, mouldings, sanding, refinishing, supply, and installation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="heritage-grain border-b border-[#8a5b3b]/10 py-16 text-center md:py-20">
        <Container>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#cf692a]">What we do</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#633318] md:text-5xl">Burnaby Flooring Services</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#776e67]">
              Complete flooring preparation, supply, installation, restoration, and finishing since 2007.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="heritage-grain py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex flex-col border border-[#8a5b3b]/15 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {serviceImages[service.slug] ? (
                  <div className="relative mb-6 h-48 overflow-hidden">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={`${service.title} flooring service`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PhotoPlaceholder rounded="rounded-none" className="mb-6 h-48" />
                )}
                <h3 className="font-serif text-2xl font-bold text-[#713b1d] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block text-[#c76227] font-semibold hover:text-[#7b3b1b] transition-colors"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="walnut-grain relative py-20 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-bold mb-6">
              Free In-Home, No-Obligation Estimate
            </h2>
            <p className="text-lg text-amber-100 mb-10 leading-relaxed">
              Tell us about your Burnaby flooring project and we&apos;ll provide clear recommendations for the right materials, preparation, and installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16045550142"
                className="inline-block bg-white text-amber-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Call Us Now
              </a>
              <Link
                href="/contact"
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Request an Estimate
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
