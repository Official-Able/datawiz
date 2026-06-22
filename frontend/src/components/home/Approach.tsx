"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Discover", desc: "Understand business realities." },
  { title: "Diagnose", desc: "Identify bottlenecks." },
  { title: "Design", desc: "Create tailored solutions." },
  { title: "Deliver", desc: "Build and deploy." },
  { title: "Optimize", desc: "Measure and improve outcomes." },
];

export function Approach() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">The Datawizable Method</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Understanding Before Building.
          </h2>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 h-0.5 w-full bg-gray-100 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-xl relative">
                  {index + 1}
                  <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-ping" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
