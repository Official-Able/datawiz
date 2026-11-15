import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Vision, Mission & Culture | Datawizable",
  description: "What Datawizable is working toward, how we help organisations, and the principles that guide our work.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="page-intro px-5 py-16 text-white sm:px-8 sm:py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
            <div>
              <p className="page-intro-kicker mb-5">What guides us</p>
              <h1 className="page-intro-title">Better work, made possible by better systems.</h1>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-white/75 lg:pt-9">
              <p>We believe good technology starts with a clear understanding of people, operations, and the decisions an organisation needs to make.</p>
              <p>Datawizable brings discovery, product thinking, engineering, and data into the same conversation, so the solution fits the work it is meant to improve.</p>
            </div>
          </div>
        </section>
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
            <div>
              <p className="section-label mb-3">Our vision</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#171C28] sm:text-5xl">Organisations that can turn complexity into meaningful progress.</h2>
            </div>
            <div className="flex items-center lg:pt-8">
              <p className="text-lg leading-relaxed text-gray-600">We want a future where teams have the clarity, tools, and confidence to make their work better, without technology becoming another obstacle.</p>
            </div>
          </div>
        </section>
        <section className="bg-[#F4F7FC] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
            <div>
              <p className="section-label mb-3">Our mission</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#171C28] sm:text-5xl">Understand the work. Design what helps. Build it to last.</h2>
            </div>
            <div className="flex items-center lg:pt-8">
              <p className="text-lg leading-relaxed text-gray-600">We help organisations uncover what is getting in the way, shape a practical response, and create digital products, business systems, and data capabilities that make better work possible.</p>
            </div>
          </div>
        </section>
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
            <div>
              <p className="section-label mb-3">Our culture</p>
              <h2 className="font-display text-3xl font-bold text-[#171C28] sm:text-5xl">How we choose to work.</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <p className="py-5 text-lg leading-relaxed text-gray-700"><strong className="text-[#171C28]">Start with people.</strong> Listen to the people doing the work before deciding what needs to change.</p>
              <p className="py-5 text-lg leading-relaxed text-gray-700"><strong className="text-[#171C28]">Be honest about the evidence.</strong> Make assumptions visible, test what is uncertain, and explain trade-offs clearly.</p>
              <p className="py-5 text-lg leading-relaxed text-gray-700"><strong className="text-[#171C28]">Make useful things.</strong> Choose a response that solves the real problem, not one that merely looks impressive.</p>
              <p className="py-5 text-lg leading-relaxed text-gray-700"><strong className="text-[#171C28]">Build with care.</strong> Value reliability, accessibility, security, and maintainability from the start.</p>
              <p className="py-5 text-lg leading-relaxed text-gray-700"><strong className="text-[#171C28]">Learn as we go.</strong> Treat feedback as part of the work and improve the solution as understanding grows.</p>
            </div>
          </div>
        </section>
        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-7">
            <h2 className="max-w-xl font-display text-3xl font-bold text-[#171C28] sm:text-4xl">Have a problem worth understanding?</h2>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 py-3 font-semibold text-white">Talk with us <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
