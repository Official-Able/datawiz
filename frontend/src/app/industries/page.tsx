import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { loadCaseStudies } from "@/lib/portfolio";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Industries | Datawizable",
  description: "Explore the sectors represented in Datawizable's published work.",
};

export default async function IndustriesPage() {
  const studies = await loadCaseStudies();
  const sectors = [...new Set(studies?.map((study) => study.sector) ?? [])];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageIntro tone="blue" eyebrow="Industries / Context matters" title="The sector changes. The need to understand the work does not." description="We learn each setting's processes, constraints, and people before shaping a digital response." />
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 font-display text-2xl font-bold text-[#171C28] sm:text-3xl">Sectors in our published work</h2>
            {studies === null ? (
              <p role="status" className="border-t border-gray-200 py-9 text-gray-600">Sector information is temporarily unavailable.</p>
            ) : sectors.length === 0 ? (
              <p className="border-t border-gray-200 py-9 text-gray-600">Our project profiles are being reviewed. Contact us to discuss your sector.</p>
            ) : (
              <div className="border-t border-gray-200">
                {sectors.map((sector, index) => (
                  <div key={sector} className="grid gap-3 border-b border-gray-200 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-8">
                    <span className="text-sm font-bold text-primary">0{index + 1}</span>
                    <h3 className="font-display text-xl font-bold text-[#171C28] sm:text-2xl">{sector}</h3>
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">See work <ArrowRight size={17} /></Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
