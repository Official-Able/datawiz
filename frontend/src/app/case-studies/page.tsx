import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { loadCaseStudies } from "@/lib/portfolio";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Selected Work | Datawizable",
  description: "Published Datawizable projects and the work behind them.",
};

export default async function CaseStudiesPage() {
  const studies = await loadCaseStudies();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageIntro eyebrow="Selected work / In context" title="Work shaped by the problem at hand." description="Explore the products and systems we have contributed to. We share scope and outcomes as each project profile is reviewed." />
        <section className="px-5 py-12 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            {studies === null ? (
              <p role="status" className="border-t border-gray-200 py-12 text-lg text-gray-600">Work is temporarily unavailable. Please try again shortly.</p>
            ) : studies.length === 0 ? (
              <div className="border-t border-gray-200 py-12">
                <h2 className="font-display text-2xl font-bold text-[#171C28]">Our project profiles are being reviewed.</h2>
                <p className="mt-3 max-w-xl text-gray-600">We can discuss relevant experience and scope directly.</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">Start a conversation <ArrowRight size={18} /></Link>
              </div>
            ) : (
              <div className="space-y-20">
                {studies.map((study, index) => (
                  <article key={study.slug} className="grid min-w-0 gap-8 border-t border-gray-200 pt-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
                    <div className="aspect-[16/10] overflow-hidden bg-[#E7ECF5]">
                      {study.cover_image_url ? (
                        <img src={study.cover_image_url} alt={`${study.title} project`} className="h-full w-full object-contain" />
                      ) : (
                        <div className="flex h-full items-end p-6 sm:p-8"><span className="font-display text-xl font-bold text-primary sm:text-2xl">Project 0{index + 1}</span></div>
                      )}
                    </div>
                    <div className="flex min-w-0 flex-col justify-center">
                      <p className="mb-4 text-sm font-bold uppercase text-primary">0{index + 1} / {study.sector}</p>
                      <h2 className="font-display text-3xl font-bold text-[#171C28] sm:text-4xl">{study.title}</h2>
                      <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">{study.summary}</p>
                      <Link href={`/case-studies/${study.slug}`} className="mt-7 inline-flex items-center gap-2 self-start font-semibold text-primary hover:underline">Explore project <ArrowRight size={18} /></Link>
                    </div>
                  </article>
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
