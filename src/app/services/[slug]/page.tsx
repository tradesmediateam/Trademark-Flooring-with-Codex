import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getService, getServiceSlugs, serviceImages } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
        <Container>
          <Link href="/services" className="text-amber-100 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-5xl font-bold">{service.title}</h1>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl">
            {serviceImages[service.slug] ? (
              <div
                className={
                  service.slug === "stairs"
                    ? "relative mx-auto mb-8 aspect-[2/3] w-full max-w-lg overflow-hidden rounded-xl bg-stone-100"
                    : "relative mb-8 h-96 overflow-hidden rounded-xl"
                }
              >
                <Image
                  src={serviceImages[service.slug]}
                  alt={`${service.title} flooring service`}
                  fill
                  sizes="768px"
                  className={service.slug === "stairs" ? "object-contain" : "object-cover"}
                />
              </div>
            ) : null}


            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-amber-950 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {service.description}
              </p>

              <h3 className="font-serif text-2xl font-bold text-amber-950 mt-8 mb-4">
                About This Service
              </h3>
              {service.slug === "carpet" ? (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We provide professional installation for residential carpet, commercial carpet, and carpet tiles, including residential homes, retail, commercial spaces, stairs, and condos.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our work focuses on clean floor prep, smart seam placement, quality underpad, precise stretching, proper carpet kicking, and glue-down methods for commercial applications, giving each installation a clean, comfortable, longer-lasting finish.
                  </p>
                </>
              ) : service.slug === "stairs" ? (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A staircase is often the centerpiece of a home, setting the tone the moment you walk through the door. Whether in hardwood, laminate, vinyl, or carpet, a beautifully crafted staircase brings character, elegance, and lasting value to your space.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Every staircase is unique. Each one requires careful planning, precision, and uncompromising attention to detail, where every cut, angle and transition works together to create a flawless result. The finished staircase becomes more than a functional feature. It becomes a defining architectural element that elevates the beauty and sophistication of the entire home.
                  </p>
                </>
              ) : service.slug === "vinyl" ? (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Vinyl flooring blends modern style with exceptional durability and 100% waterproof performance. Available in SPC, LVT, loose lay, and more, it offers outstanding versatility with a wide range of colours, textures, and wood looks to complement virtually any space.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Because it's thinner and more flexible, a smooth, flat, properly prepped subfloor is key to a flawless finish. With precise layout and expert installation, the result is a beautiful floor that feels solid underfoot and performs for years.
                  </p>
                </>
              ) : (
                <p className="text-gray-600 mb-6">
                  {service.slug === "self-levelling"
                    ? "Precision prep, a rock-solid primed bond, and perfectly timed pours. That's how we deliver flat, smooth, durable floors. Pouring is a craft of consistency, timing, and control. Knowing exactly where and how to pour is the key to a smooth, flat, leveled finish. That's the Trademark standard, poured into every floor."
                    : service.slug === "hardwood"
                    ? "We provide professional hardwood flooring installation for engineered and solid hardwood, including floating, glue-down, nail-down, unfinished, and pre-finished options, with proper preparation and lasting craftsmanship."
                    : service.slug === "laminate"
                    ? "Laminate flooring delivers the warmth and character of hardwood without the high maintenance. A beautiful finish starts with proper floor prep, precise layout, tight locking joints, and careful attention to every detail, creating a floor that looks beautiful, feels solid underfoot, and is built to perform for years."
                    : service.slug === "mouldings"
                    ? "It's the finishing touch that brings the whole room together. From baseboards and casings to moldings, every detail is carefully fitted, smoothly caulked, professionally painted, and finished with precision, creating clean lines and a polished look."
                    : `Add detailed information about ${service.title.toLowerCase()} here. Describe the process, benefits, and why this service is important for your flooring needs. Include pricing information, timelines, and any special considerations.`}
                </p>
              )}

              <h3 className="font-serif text-2xl font-bold text-amber-950 mt-8 mb-4">
                Why Choose Trademark Flooring?
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {service.slug === "self-levelling" ? (
                  <li>Professional levelling and pouring expertise</li>
                ) : null}
                <li>Professional installation and expertise</li>
                <li>Quality materials and workmanship</li>
                <li>Attention to detail on every project</li>
                <li>Competitive pricing and transparent quotes</li>
              </ul>

              <div className="mt-12 p-8 bg-amber-50 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-4">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free consultation and personalized quote for your {service.title.toLowerCase()} project.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-amber-950 text-white px-8 py-3 rounded font-semibold hover:bg-amber-900 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
