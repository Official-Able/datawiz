"use client";

import React from "react";
import { PremiumCard } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { BarChart3, Cpu, Globe, Layers, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Digital Transformation",
    description: "Modernize outdated processes and redesign workflows for efficiency and scale.",
    icon: Globe,
    color: "text-blue-500",
  },
  {
    title: "Business Automation",
    description: "Eliminate repetitive manual operations and introduce consistency into your daily workflows.",
    icon: Settings,
    color: "text-accent",
  },
  {
    title: "AI-Powered Operations",
    description: "Integrate intelligence into everyday processes to make faster, data-driven decisions.",
    icon: Cpu,
    color: "text-purple-500",
  },
  {
    title: "Custom Platforms",
    description: "Enterprise-grade web and mobile applications built specifically around your business operations.",
    icon: Layers,
    color: "text-blue-600",
  },
  {
    title: "Decision Intelligence",
    description: "Transform raw data into actionable insights through interactive dashboards and advanced analytics.",
    icon: BarChart3,
    color: "text-green-500",
  },
  {
    title: "Capacity Building",
    description: "Professional technology training and digital skills development for a future-ready workforce.",
    icon: Users,
    color: "text-orange-500",
  },
];

export function Solutions() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold uppercase tracking-widest text-accent"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            Solutions We Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            We don't just build software; we engineer operational excellence through
            strategic technology application.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PremiumCard className="h-full border-gray-100 bg-white shadow-sm hover:border-accent/20">
                <item.icon className={cn("h-12 w-12 mb-6", item.color)} />
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
