import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PremiumCard } from "@/components/ui/Card";
import { Landmark, GraduationCap } from "lucide-react";

const industries = [
  {
    title: "Financial Services",
    icon: Landmark,
    problem: "Manual overhead and repayment disputes.",
    solution: "We built a fully digital Cooperative Management System. Operations are automated, members track their wallets in real-time, and loan repayments are integrated directly—eliminating arguments and manual tracking forever.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    problem: "Cheating and supervision costs in remote exams.",
    solution: "Our UTME-style examination platform allows students to test from anywhere. Through intelligent engineering, we eliminated the need for physical supervision while maintaining 100% integrity against cheating.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-48 pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-6xl font-extrabold text-primary mb-12">Deep Sector Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((i) => (
              <div key={i.title} className="space-y-8">
                <div className="flex items-center gap-4">
                  <i.icon className="h-10 w-10 text-accent" />
                  <h2 className="text-4xl font-bold text-primary">{i.title}</h2>
                </div>
                <PremiumCard className="bg-primary text-white border-none p-10">
                  <div className="mb-6">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm">The Challenge</span>
                    <p className="text-xl mt-2">{i.problem}</p>
                  </div>
                  <div>
                    <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Solution</span>
                    <p className="text-lg mt-2 text-gray-300 leading-relaxed">{i.solution}</p>
                  </div>
                </PremiumCard>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
