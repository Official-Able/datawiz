import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, ClipboardList, Code2, Workflow } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Services | Datawizable",
  description: "Business discovery, product engineering, data, and automation services from Datawizable.",
};

const services = [
  { title: "Business discovery", text: "Understand processes, stakeholders, pain points, and priorities before committing to a solution.", outcome: "A grounded scope and clear next steps.", icon: ClipboardList },
  { title: "Product engineering", text: "Design and build software around the work people need to do, from internal tools to customer-facing products.", outcome: "A maintainable system with a defined purpose.", icon: Code2 },
  { title: "Workflow automation", text: "Identify repetitive handoffs and connect the systems and people involved in getting work done.", outcome: "Less manual friction and better visibility.", icon: Workflow },
  { title: "Data and decision support", text: "Organize operational information into reporting and analysis that leaders can use with confidence.", outcome: "Useful information at the point of decision.", icon: ChartNoAxesCombined },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageIntro eyebrow="Services / What we do" title="Work that connects business needs to useful technology." description="We help define the problem, design a practical response, and build the systems needed to support it." />
        <section className="px-5 py-12 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="grid gap-6 border-b border-gray-200 py-10 md:grid-cols-[0.25fr_1fr_1fr] md:gap-12">
                  <div className="flex items-center gap-5 text-primary md:items-start"><span className="text-sm font-bold">0{index + 1}</span><Icon size={28} strokeWidth={1.7} aria-hidden="true" /></div>
                  <h2 className="font-display text-2xl font-bold text-[#171C28] sm:text-3xl">{service.title}</h2>
                  <div><p className="leading-relaxed text-gray-600">{service.text}</p><p className="mt-4 font-semibold text-primary">{service.outcome}</p></div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="bg-[#171C28] px-5 py-16 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-2xl font-bold sm:text-4xl">Start with the challenge in front of you.</h2>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-white px-6 py-3 font-semibold text-[#171C28]">Discuss a project <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
