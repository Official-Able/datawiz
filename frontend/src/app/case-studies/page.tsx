import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PremiumCard } from "@/components/ui/Card";
import Image from "next/image";

const cases = [
  {
    title: "RISEN: On-Chain Utility Ecosystem",
    before: "Fragmented blockchain tools with limited interoperability.",
    after: "A unified 7-utility ecosystem for decentralized growth.",
    metric: "7 Live Utilities",
    desc: "We engineered the technical foundation for RISEN, transforming a low-market-cap token into a power-house of decentralized utility. The ecosystem now features 7 functional tools that drive on-chain value and community governance.",
  },
  {
    title: "GAhto: Global Anti Human Trafficking",
    before: "A dormant platform with limited reporting capabilities.",
    after: "A real-time, global reporting ecosystem.",
    metric: "Real-Time Tracking",
    desc: "We transformed GAhto from a static website into a dynamic operational tool. Now, human trafficking cases can be reported and tracked in real-time by stakeholders globally, enabling immediate response.",
  },
  {
    title: "SUG SCC: Remote Examination Platform",
    before: "Physical supervision required for every test.",
    after: "Anywhere, unsupervised, cheat-proof exams.",
    metric: "0% Cheating Rate",
    desc: "By engineering an intelligent assessment environment, we allowed students to take high-stakes exams from home without compromising integrity, drastically reducing administration costs.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-48 pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-6xl font-extrabold text-primary mb-20 text-center">Transformations in Action</h1>
          <div className="space-y-24">
            {cases.map((c, idx) => (
              <div key={c.title} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-bold text-sm uppercase">
                    Case Study
                  </div>
                  <h2 className="text-4xl font-bold text-primary">{c.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">{c.desc}</p>
                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                      <div className="text-sm font-bold text-gray-400 uppercase">Status Before</div>
                      <div className="text-gray-900 font-medium">{c.before}</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent uppercase">Outcome After</div>
                      <div className="text-gray-900 font-bold">{c.after}</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <PremiumCard className="aspect-video flex items-center justify-center bg-gray-50 border-gray-100">
                    <div className="text-center">
                       <div className="text-6xl font-black text-primary/5 mb-2">{c.metric}</div>
                       <div className="text-2xl font-bold text-primary">Success Metric</div>
                    </div>
                  </PremiumCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
