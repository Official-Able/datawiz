"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const comparisons = [
  { challenge: "Slow manual processes", solution: "Workflow automation" },
  { challenge: "Poor visibility", solution: "Decision dashboards" },
  { challenge: "Disconnected systems", solution: "Integrated platforms" },
  { challenge: "Low productivity", solution: "Intelligent automation" },
  { challenge: "Data chaos", solution: "Centralized information systems" },
];

export function ProblemSolution() {
  return (
    <section className="bg-gray-50 py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Our Value Proposition</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              We Don't Sell Websites.<br />
              <span className="text-accent">We Solve Problems.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Most tech companies start with "how". We start with "why".
              By understanding your operational bottlenecks first, we ensure
              the technology we build delivers measurable business outcomes.
            </p>

            <div className="mt-10 space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex-1 text-gray-500 font-medium">{item.challenge}</div>
                  <ArrowRight className="text-accent h-5 w-5" />
                  <div className="flex-1 text-primary font-bold flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 h-5 w-5 shrink-0" />
                    {item.solution}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square rounded-3xl bg-primary flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                   <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>
                <div className="text-center relative z-10">
                   <h3 className="text-3xl font-bold text-white mb-6">The Datawizable Impact</h3>
                   <div className="grid grid-cols-2 gap-8">
                      <MetricCard label="Efficiency" value="+65%" />
                      <MetricCard label="Visibility" value="100%" />
                      <MetricCard label="Automation" value="4.0x" />
                      <MetricCard label="Growth" value="Scalable" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
      <div className="text-2xl font-bold text-accent mb-1">{value}</div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}
