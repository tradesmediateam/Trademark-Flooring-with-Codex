import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Logo Concepts | Trademark Flooring",
  robots: { index: false, follow: false },
};

const concepts = [
  { file: "heritage-tree-seal.svg", name: "Heritage Tree Seal", note: "Established, grounded, and traditional" },
  { file: "parquet-compass.svg", name: "Parquet Compass", note: "Precise, directional, and architectural" },
  { file: "oak-ring.svg", name: "Oak Ring", note: "Natural material and enduring craft" },
  { file: "craftsman-arch.svg", name: "Craftsman Arch", note: "Refined joinery and heritage architecture" },
  { file: "joinery-shield.svg", name: "Joinery Shield", note: "Assurance, structure, and workmanship" },
];

export default function LogoConceptsPage() {
  return (
    <main className="min-h-screen bg-[#171816] px-5 py-16 text-[#f0e6d3] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b68652]">Trademark Flooring</p>
          <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">Logo mark concepts</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#aaa89f] sm:text-base">
            Five text-free directions designed for clarity at navbar scale, with a restrained heritage palette and simple, durable forms.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept, index) => (
            <article key={concept.file} className="overflow-hidden rounded-sm border border-white/10 bg-[#22231f]">
              <div className="flex min-h-64 items-center justify-center bg-[#e9dfcb] p-10">
                <Image src={`/logo-concepts/${concept.file}`} alt="" width={160} height={160} className="h-40 w-40" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-medium">{concept.name}</h2>
                    <p className="mt-1 text-sm text-[#9c9a92]">{concept.note}</p>
                  </div>
                  <span className="text-xs tabular-nums text-[#b68652]">0{index + 1}</span>
                </div>
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#777970]">Navbar test</span>
                  <span className="flex h-12 flex-1 items-center rounded-sm bg-[#11120f] px-4">
                    <Image src={`/logo-concepts/${concept.file}`} alt={`${concept.name} at navbar size`} width={32} height={32} className="h-8 w-8" />
                  </span>
                  <span className="flex h-12 w-16 items-center justify-center rounded-sm bg-[#f7f2e8]">
                    <Image src={`/logo-concepts/${concept.file}`} alt="" width={28} height={28} className="h-7 w-7" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
