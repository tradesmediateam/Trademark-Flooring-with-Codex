/**
 * Reusable marketing content — testimonials, FAQs, stats, and the "why choose
 * us" points. Kept as data so it can be reused across pages and fed into
 * JSON-LD (FAQ schema) without duplicating copy.
 */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Trademark levelled 200+ suites in our tower without ever slowing the schedule. Every floor came back flat and finish-ready — our hardwood installers had zero complaints.",
    author: "Daniel R.",
    role: "Project Manager, High-Rise Developer",
  },
  {
    quote:
      "We sub all our floor prep to Trademark now. Dust control in occupied homes is spotless and the substrates pass every time. They make our tile look effortless.",
    author: "Priya S.",
    role: "Owner, Residential Renovation Company",
  },
  {
    quote:
      "22,000 square feet pumped and level in one mobilization, moisture documented, warranty protected. Exactly the kind of trade partner a fast-track TI needs.",
    author: "Marcus L.",
    role: "Superintendent, Commercial GC",
  },
  {
    quote:
      "Consistent quality across 180 units and every corridor. Their standardized process kept our multi-family build on budget and on time.",
    author: "Jennifer T.",
    role: "Construction Manager, Multi-Family Builder",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What areas does Trademark Flooring serve?",
    answer:
      "We serve Metro Vancouver and the Lower Mainland, including Vancouver, Burnaby, Surrey, Richmond, Langley, Coquitlam, North Vancouver, and West Vancouver, and take on larger projects throughout British Columbia.",
  },
  {
    question: "Do you only do floor preparation, or do you install flooring too?",
    answer:
      "We specialize in concrete floor preparation — self-levelling, grinding, patching, and skim coating — which is the substrate work that happens before flooring goes down. We partner with flooring installers and general contractors and hand off a flat, sound, finish-ready surface for tile, hardwood, vinyl, and coatings.",
  },
  {
    question: "Is your grinding dust-controlled? We have an occupied building.",
    answer:
      "Yes. All of our grinding runs under HEPA-filtered dust extraction, which lets us work in occupied offices, retail, and residential towers with minimal mess and disruption.",
  },
  {
    question: "How flat can you get a floor?",
    answer:
      "We routinely hit tolerances of 1/8\" over 10 feet, and can prepare to specified FF/FL numbers for commercial projects. The right approach — grinding down high spots versus building up with self-levelling underlayment — depends on your slab and finished-flooring requirements.",
  },
  {
    question: "Do you test for moisture before flooring goes down?",
    answer:
      "Yes. We perform relative humidity (RH) and pH testing per ASTM standards and provide moisture mitigation when needed. Documented substrate conditions protect your flooring warranty.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Book a free, no-obligation in-home or on-site estimate. Call us, email us, or send your project details through the estimate form on our contact page and we'll get back to you quickly.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "15+", label: "Years preparing floors in BC" },
  { value: "2M+", label: "Square feet levelled & ground" },
  { value: "500+", label: "Projects completed" },
  { value: "100%", label: "Dust-controlled grinding" },
];

export type ValueProp = {
  title: string;
  description: string;
  icon: "shield" | "clock" | "sparkles" | "users" | "gauge" | "leaf";
};

export const whyChooseUs: ValueProp[] = [
  {
    title: "Specialists, not generalists",
    description:
      "Floor prep is all we do. That focus means faster work, tighter tolerances, and substrates that pass inspection the first time.",
    icon: "gauge",
  },
  {
    title: "Warranty-protecting process",
    description:
      "We test, document, and prepare to manufacturer and spec requirements so your flooring warranty stays intact.",
    icon: "shield",
  },
  {
    title: "Dust-controlled & clean",
    description:
      "HEPA extraction and daily cleanup let us work in occupied homes and buildings without the mess grinding usually brings.",
    icon: "leaf",
  },
  {
    title: "Built to scale",
    description:
      "From a single custom home to a 200-suite tower, we scale crews and equipment to hit your schedule.",
    icon: "users",
  },
  {
    title: "On-time, every time",
    description:
      "Fast-setting materials and repeatable workflows let us commit to dates your finishing trades can build around.",
    icon: "clock",
  },
  {
    title: "Finish-ready results",
    description:
      "Flat, smooth, sound, and bondable — we hand off a floor your installers will love to work on.",
    icon: "sparkles",
  },
];
