import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, ClipboardList, Workflow } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { loadCaseStudies } from "@/lib/portfolio";
import { PathSelector } from "@/components/home/PathSelector";
import { VideoAd } from "@/components/home/VideoAd";
import { CampaignSlot } from "@/components/campaigns/CampaignSlot";

const services = [
  {
    number: "01",
    title: "Understand the operation",
    text: "Map the work, the handoffs, and the information people rely on before deciding what to build.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design the right system",
    text: "Turn what we learn into clear requirements, practical workflows, and an implementation plan.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Make data useful",
    text: "Connect operational data to decisions through thoughtful automation, reporting, and software.",
    icon: ChartNoAxesCombined,
  },
];

export default async function Home() {
  const studies = await loadCaseStudies();
  const featured = studies?.filter((study) => study.is_featured) ?? [];
  const selectedWork = featured.length > 0 ? featured.slice(0, 3) : studies?.slice(0, 3) ?? [];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main>
        <section className="home-hero px-5 py-16 text-white sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.88fr] lg:gap-20">
            <div>
              <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-[#A8C1FF]"><span className="h-px w-8 bg-[#D62839]" /> Business systems & digital products</p>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.03] sm:text-7xl">Datawizable<span className="text-[#D62839]">.</span></h1>
              <p className="mt-7 max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-4xl">Understand the work.<br />Design what helps.<br /><span className="text-[#A8C1FF]">Build what moves it forward.</span></p>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">We turn complex operations into clear decisions, useful digital products, and data people can act on.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-white px-6 py-3 font-semibold text-[#171C28] transition-colors hover:bg-gray-100">Discuss a project <ArrowRight size={18} /></Link>
                <Link href="/case-studies" className="inline-flex min-h-12 items-center border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">See our work</Link>
              </div>
            </div>
            <PathSelector />
          </div>
        </section>

        <CampaignSlot placement="home_feature" />

        <div className="bg-primary px-5 py-5 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-2 text-sm font-semibold sm:text-base">
            <span>Business discovery</span><span>Product engineering</span><span>Data & automation</span><span>Private client assessments</span>
          </div>
        </div>

        <section className="border-b border-gray-200 px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-primary">What we do</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#171C28] sm:text-5xl">Clarity before complexity.</h2>
            </div>
            <p className="self-end text-lg leading-relaxed text-gray-600">
              A useful system begins with a clear view of the work, the constraints, and the decisions that matter. We connect discovery, design, engineering, and data to make that view actionable.
            </p>
          </div>
        </section>

        <VideoAd />

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-4 text-sm font-bold uppercase text-primary">Our approach</p>
                <h2 className="font-display text-3xl font-bold text-[#171C28] sm:text-5xl">From uncertainty to action.</h2>
              </div>
              <Link href="/solutions" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                See our services <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid gap-10 border-t border-gray-200 pt-10 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.number}>
                    <div className="mb-8 flex items-center justify-between text-primary">
                      <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
                      <span className="text-sm font-semibold">{service.number}</span>
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold text-[#171C28]">{service.title}</h3>
                    <p className="leading-relaxed text-gray-600">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {selectedWork.length > 0 && <section className="border-t border-gray-200 px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-4 text-sm font-bold uppercase text-primary">Selected work</p>
                <h2 className="font-display text-3xl font-bold text-[#171C28] sm:text-5xl">Built for different realities.</h2>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">View our work <ArrowRight size={18} /></Link>
            </div>
            <div className="border-t border-gray-200">
              {selectedWork.map((item, index) => (
                <Link key={item.slug} href={`/case-studies/${item.slug}`} className="grid gap-2 border-b border-gray-200 py-6 transition-colors hover:bg-[#F4F7FC] sm:grid-cols-[3rem_1fr_1fr] sm:items-center sm:gap-8">
                  <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                  <span className="font-display text-xl font-bold text-[#171C28] sm:text-2xl">{item.title}</span>
                  <span className="text-gray-600">{item.sector}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>}

        <section className="bg-[#F4F7FC] px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-primary">Datawizable Discovery</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#171C28] sm:text-5xl">
                A clearer starting point for every project.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                Discovery is our guided way to learn how a business operates, hear from the people doing the work, and turn evidence into a useful project brief.
              </p>
              <Link href="/discovery" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Learn about Discovery <ArrowRight size={18} />
              </Link>
            </div>
            <div className="border-l-4 border-primary bg-white p-7 shadow-sm sm:p-10">
              <p className="text-sm font-bold uppercase text-primary">The outcome</p>
              <p className="mt-5 font-display text-2xl font-semibold leading-snug text-[#171C28] sm:text-3xl">
                A shared understanding of today, a clear view of what needs to change, and a sensible next step.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#171C28] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-white/60">Start a conversation</p>
              <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-5xl">Tell us what you are trying to improve.</h2>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-white px-6 py-3 font-semibold text-[#171C28] hover:bg-gray-100">
              Discuss a project <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
