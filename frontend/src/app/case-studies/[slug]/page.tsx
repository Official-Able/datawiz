import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { loadCaseStudy } from "@/lib/portfolio";

export const metadata: Metadata = { title: "Project | Datawizable" };

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await loadCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="page-intro px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <Link href="/case-studies" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"><ArrowLeft size={17} /> All work</Link>
            <p className="page-intro-kicker mb-5">{study.sector} / Project profile</p>
            <h1 className="page-intro-title">{study.title}</h1>
            <p className="page-intro-copy mt-6">{study.summary}</p>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          {study.cover_image_url && <img src={study.cover_image_url} alt={`${study.title} project`} className="max-h-[620px] w-full bg-[#F4F7FC] object-contain" />}
          <div className="mt-12 grid gap-12 border-t border-gray-200 pt-10 lg:grid-cols-[0.5fr_1fr]">
            <h2 className="font-display text-2xl font-bold text-[#171C28]">The work</h2>
            <div className="space-y-8 text-lg leading-relaxed text-gray-600">
              {study.work_done ? <p className="whitespace-pre-line">{study.work_done}</p> : <p>Contact us to discuss the scope of this work.</p>}
              {study.outcome && <div className="border-t border-gray-200 pt-8"><h3 className="mb-3 font-display text-xl font-bold text-[#171C28]">Outcome</h3><p className="whitespace-pre-line">{study.outcome}</p></div>}
              {study.project_url && <a href={study.project_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">Visit project <ArrowUpRight size={18} /></a>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
