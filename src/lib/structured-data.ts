/**
 * JSON-LD structured data generators.
 *
 * These emit schema.org objects consumed by the <JsonLd> component. Rich,
 * accurate structured data helps Google understand the business (LocalBusiness),
 * the services offered, breadcrumbs, and FAQs — improving local search
 * visibility and rich-result eligibility.
 */

import { site, serviceAreas } from "./site";
import { services } from "./services";

const areaServed = serviceAreas.map((name) => ({
  "@type": "City",
  name,
}));

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone.href,
    email: site.email,
    foundingDate: String(site.foundedYear),
    priceRange: "$$",
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/logo/logo-mark.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed,
    openingHoursSpecification: site.hours
      .filter((h) => h.open !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        description: h.days,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: "en-CA",
  };
}

export function serviceSchema(service: {
  slug: string;
  title: string;
  summary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.title,
    provider: { "@id": `${site.url}/#business` },
    areaServed,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
