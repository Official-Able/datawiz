import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PremiumCard } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Zap, Target, TrendingUp } from "lucide-react";

const solutions = [
  {
    title: "Digital Transformation",
    impact: "From 100 Enrolments/Day to 100/Hour",
    desc: "We engineer systems that eliminate manual friction. We transformed a bank's enrolment process from a full-day manual operation into an automated digital workflow that scales 10x faster.",
    icon: Zap,
  },
  {
    title: "AI & Intelligent Automation",
    impact: "100% Supervisory Accuracy",
    desc: "Our AI systems solve the 'human factor' problem. We built an examination platform that allows thousands of students to test remotely without supervision, yet ensures 0% cheating through intelligent monitoring.",
    icon: Target,
  },
  {
    title: "Decision Intelligence",
    impact: "Real-Time Executive Visibility",
    desc: "Stop managing through guesswork. We build dashboards that centralize data chaos, giving CEOs and stakeholders a single source of truth for every operational metric.",
    icon: TrendingUp,
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-48 pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <h1 className="text-6xl font-extrabold text-primary mb-6">Engineered Outcomes</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              We don't just build apps; we engineer business scaling. Our solutions are defined by the bottlenecks they remove.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <PremiumCard key={s.title} className="p-10">
                <s.icon className="h-12 w-12 text-accent mb-6" />
                <div className="text-sm font-bold text-accent uppercase tracking-widest mb-2">{s.impact}</div>
                <h3 className="text-3xl font-bold text-primary mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
