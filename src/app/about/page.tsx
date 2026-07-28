import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Trademark Flooring | Burnaby Flooring Contractors Since 2007",
  description: "Learn about Trademark Flooring, Burnaby BC flooring contractors established in 2007 and specializing in floor preparation, hardwood, laminate, vinyl, stairs, mouldings, and self-levelling.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <section className="heritage-grain border-b border-[#8a5b3b]/10 py-16 text-center md:py-20">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-[#cf692a]">Established {site.foundedYear}</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-[#633318] md:text-5xl">About Trademark Flooring</h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#776e67]">Burnaby flooring contractors built on careful preparation, skilled installation, and lasting finishes.</p>
      </section>

      <section className="heritage-grain py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="walnut-grain flex aspect-[16/10] items-center justify-center overflow-hidden border-8 border-white shadow-lg">
                <div className="text-center text-[#f4ddcb]">
                  <p className="font-serif text-5xl font-bold">2007</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[.24em]">Burnaby, British Columbia</p>
                </div>
              </div>
              <h2 className="mt-8 font-serif text-3xl font-bold text-[#713b1d]">Who we are</h2>
              <span className="mt-3 block h-1 w-12 bg-[#d36b2b]" />
              <p className="mt-7 text-lg leading-8 text-[#756d67]">Trademark Flooring provides professional flooring preparation, supply, installation, sanding, and refinishing for Burnaby homeowners, property managers, and builders. We take pride in clean work, dependable scheduling, and floors that perform beautifully for years.</p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-[#713b1d]">Our history</h2>
              <span className="mt-3 block h-1 w-12 bg-[#d36b2b]" />
              <div className="mt-7 space-y-5 text-lg leading-8 text-[#756d67]">
                <p>Founded in Burnaby in {site.foundedYear}, Trademark Flooring grew from a commitment to doing the unseen work properly: assessing substrates, correcting uneven floors, and preparing every surface before installation begins.</p>
                <p>Today we handle self-levelling, hardwood flooring, laminate, vinyl, stairs, mouldings, sanding, refinishing, and installation. Whether a client is restoring existing hardwood or selecting a practical new floor, we bring the same measured approach to every detail.</p>
                <p>Our service area includes Burnaby and communities throughout Metro Vancouver. Every project begins with straightforward advice and a free in-home, no-obligation estimate.</p>
              </div>
              <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center bg-[#cf6728] px-7 text-sm font-bold uppercase tracking-[.12em] text-white hover:bg-[#a94e1d]">Request an estimate</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="walnut-grain relative py-20 text-center text-white">
        <div className="absolute inset-0 bg-black/35" />
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl font-bold">A better floor starts below the surface.</h2>
            <p className="mt-5 text-lg leading-8 text-[#f1e3d7]">Our experience in self-levelling and preparation helps hardwood, laminate, and vinyl installations look better and last longer.</p>
            <Link href="/services" className="mt-8 inline-flex min-h-12 items-center bg-[#d66c2b] px-8 text-sm font-bold uppercase tracking-[.12em] text-white">Explore our services</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
