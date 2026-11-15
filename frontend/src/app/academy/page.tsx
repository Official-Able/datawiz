import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, Code2, Users, Workflow } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Academy | Datawizable",
  description: "Explore Datawizable's areas of digital skills and organizational learning.",
};

const areas = [
  { title: "Data and analytics", text: "Build the confidence to interpret information and ask better questions of the numbers.", icon: ChartNoAxesCombined },
  { title: "AI and automation", text: "Understand where automation helps, where human judgment matters, and how to work responsibly with AI.", icon: Workflow },
  { title: "Software and digital systems", text: "Connect product thinking and technical skills to the problems teams actually face.", icon: Code2 },
  { title: "Workplace capability", text: "Strengthen the communication, collaboration, and decision habits that make technology useful.", icon: Users },
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageIntro tone="blue" eyebrow="DatawizAcademy / Learn by doing" title="Learn the skills behind better systems." description="Learning should connect to real work. We bring digital skills, practical judgment, and organisational needs together." />
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <h2 className="font-display text-3xl font-bold text-[#171C28] sm:text-4xl">Areas of focus</h2>
              <p className="max-w-lg text-gray-600">We shape learning around the audience, its current capabilities, and the change it needs to make.</p>
            </div>
            <div className="grid border-t border-gray-200 md:grid-cols-2">
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={area.title} className="border-b border-gray-200 py-9 md:pr-12">
                    <div className="mb-7 flex items-center justify-between text-primary"><Icon size={30} strokeWidth={1.7} aria-hidden="true" /><span className="text-sm font-bold">0{index + 1}</span></div>
                    <h3 className="font-display text-xl font-bold text-[#171C28] sm:text-2xl">{area.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-gray-600">{area.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-[#171C28] px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-8">
            <div><p className="mb-4 text-sm font-bold uppercase text-white/60">For teams and individuals</p><h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">Tell us what your people need to learn.</h2></div>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-white px-6 py-3 font-semibold text-[#171C28]">Discuss training <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
