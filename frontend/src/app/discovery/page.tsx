import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DiscoveryWalkthrough } from "@/components/discovery/DiscoveryWalkthrough";

export const metadata: Metadata = {
  title: "Discovery | Datawizable",
  description: "A structured way to understand your business before deciding what technology to build.",
};

export default function DiscoveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="discovery-hero flex min-h-[58svh] items-center px-5 py-16 text-white sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="page-intro-kicker mb-5">Datawizable / Discovery</p>
            <h1 className="max-w-5xl font-display text-4xl font-bold leading-tight sm:text-6xl">
              Business Discovery.<br />A better place to begin.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
              A structured conversation with your team about operations, challenges, and priorities before anyone recommends a system.
            </p>
            <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center gap-2 bg-white px-6 py-3 font-semibold text-[#171C28] transition-colors hover:bg-gray-100">
              Discuss Discovery <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="border-b border-gray-200 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <p className="text-sm font-bold uppercase text-primary">Why Discovery</p>
            <p className="font-display text-2xl font-semibold leading-snug text-[#171C28] sm:text-3xl">The best project brief is grounded in the work your people actually do, not a list of features guessed at the start.</p>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-primary">The process</p>
              <h2 className="font-display text-3xl font-bold text-[#171C28] sm:text-5xl">Questions first. Decisions with context.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-gray-600">We make space for different perspectives, then turn what we learn into a clear next step.</p>
            </div>
            <DiscoveryWalkthrough />
          </div>
        </section>

        <section className="bg-[#F4F7FC] px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-primary">What you leave with</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#171C28] sm:text-5xl">A shared view of the problem.</h2>
            </div>
            <div className="self-end border-l-4 border-accent pl-6 text-lg leading-relaxed text-gray-700 sm:pl-8">
              An account of how work happens now, where the friction sits, what is known, what needs validating, and which next step is worth taking.
            </div>
          </div>
        </section>

        <section className="bg-[#171C28] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-white/60">The first step</p>
              <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-5xl">Tell us where the work feels harder than it should.</h2>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-white px-6 py-3 font-semibold text-[#171C28] hover:bg-gray-100">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
