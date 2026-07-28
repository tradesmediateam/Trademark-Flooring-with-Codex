import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { getService, getServiceSlugs } from "@/lib/services";
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
            <PhotoPlaceholder className="h-96 mb-8" />


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
              <p className="text-gray-600 mb-6">
                Add detailed information about {service.title.toLowerCase()} here. Describe the process,
                benefits, and why this service is important for your flooring needs. Include pricing
                information, timelines, and any special considerations.
              </p>

              <h3 className="font-serif text-2xl font-bold text-amber-950 mt-8 mb-4">
                Why Choose Trademark Flooring?
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
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
