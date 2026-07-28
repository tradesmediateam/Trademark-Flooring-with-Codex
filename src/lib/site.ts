/**
 * Central site configuration — the single source of truth for company
 * details, contact info, and the service areas used across the UI, metadata,
 * and JSON-LD structured data.
 *
 * NOTE: Placeholder-but-realistic contact details are used below. Replace the
 * phone number, email, and street address with the real business information
 * before going live. Everything downstream (nav, footer, click-to-call,
 * mailto, LocalBusiness schema) reads from here, so one edit updates the site.
 */

export const site = {
  name: "Trademark Flooring",
  legalName: "Trademark Flooring Ltd.",
  tagline: "Professional Flooring Contractors",
  description:
    "Trademark Flooring — professional flooring contractors in Burnaby since 2007. We supply and install, or install only: hardwood, laminate, vinyl, carpet, stairs, mouldings, and self-levelling across Metro Vancouver and British Columbia.",
  // Update to your real production domain before deploying.
  url: "https://www.trademarkflooring.ca",
  locale: "en_CA",

  // --- Contact ---------------------------------------------------------------
  phone: {
    display: "(604) 555-0142",
    // E.164 format for tel: links.
    href: "+16045550142",
  },
  email: "info@trademarkflooring.ca",

  address: {
    street: "",
    city: "Burnaby",
    region: "BC",
    regionName: "British Columbia",
    postalCode: "",
    country: "CA",
  },

  // Approximate geo-centre of the primary service area (Metro Vancouver).
  geo: {
    latitude: 49.2606,
    longitude: -123.114,
  },

  hours: [
    { days: "Monday – Friday", open: "7:00 AM", close: "5:00 PM" },
    { days: "Saturday", open: "8:00 AM", close: "2:00 PM" },
    { days: "Sunday", open: "Closed", close: "" },
  ],

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },

  foundedYear: 2007,
} as const;

/** Cities Trademark Flooring actively serves — used for local SEO + copy. */
export const serviceAreas = [
  "Vancouver",
  "Burnaby",
  "Richmond",
  "Surrey",
  "Coquitlam",
  "Delta",
  "Langley",
] as const;

export type ServiceArea = (typeof serviceAreas)[number];

/** Pre-filled subject line for the "Free In-Home Estimate" mailto CTA. */
export const ESTIMATE_EMAIL_SUBJECT = "Free In-Home Estimate Request";

export const estimateMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  ESTIMATE_EMAIL_SUBJECT
)}`;

export const telHref = `tel:${site.phone.href}`;
