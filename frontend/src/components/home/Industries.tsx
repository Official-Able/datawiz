"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, GraduationCap, Building2, Heart, Rocket } from "lucide-react";

const sectors = [
  {
    name: "Financial Services",
    items: ["Banks", "Microfinance", "Cooperatives"],
    icon: Landmark,
  },
  {
    name: "Education",
    items: ["Schools", "Universities", "Training Institutions"],
    icon: GraduationCap,
  },
  {
    name: "Government",
    items: ["Public Sector Digitalization", "Service Delivery Platforms"],
    icon: Building2,
  },
  {
    name: "NGOs",
    items: ["Reporting Systems", "Monitoring & Evaluation", "Impact Measurement"],
    icon: Heart,
  },
  {
    name: "SMEs",
    items: ["Growth & Automation", "Custom Enterprise Platforms"],
    icon: Rocket,
  },
];

export function Industries() {
  return (
    <section className="bg-primary py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Who We Serve</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Industry Expertise. <span className="text-accent">Global Reach.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <sector.icon className="h-10 w-10 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{sector.name}</h3>
              <ul className="space-y-2">
                {sector.items.map((item) => (
                  <li key={item} className="text-gray-400 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
