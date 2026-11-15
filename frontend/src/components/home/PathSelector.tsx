"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined, ClipboardList, Workflow } from "lucide-react";

const paths = [
  { label: "I need clarity", heading: "Start with the work, not the software.", detail: "Map the people, decisions, handoffs, and friction before committing to a solution.", action: "Explore Discovery", href: "/discovery", icon: ClipboardList },
  { label: "I need a product", heading: "Build for how your business actually runs.", detail: "Turn validated needs into useful digital products and dependable workflows.", action: "Explore our services", href: "/solutions", icon: Workflow },
  { label: "I need better data", heading: "Make information easier to act on.", detail: "Bring reporting, automation, and operational data closer to daily decisions.", action: "Explore our services", href: "/solutions", icon: ChartNoAxesCombined },
];

export function PathSelector() {
  const [selected, setSelected] = useState(0);
  const path = paths[selected];
  const Icon = path.icon;

  return (
    <div className="path-selector">
      <div className="path-selector-top">
        <span className="text-xs font-bold uppercase text-white/60">Find your starting point</span>
        <span className="text-xs font-semibold text-white/60">0{selected + 1} / 03</span>
      </div>
      <div className="path-options" role="group" aria-label="Choose your challenge">
        {paths.map((item, index) => (
          <button key={item.label} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`path-option ${selected === index ? "path-option-active" : ""}`}>
            <span className="path-option-number">0{index + 1}</span><span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="path-result" aria-live="polite">
        <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
        <h2 className="mt-6 font-display text-2xl font-bold leading-tight sm:text-3xl">{path.heading}</h2>
        <p className="mt-4 max-w-md leading-relaxed text-white/70">{path.detail}</p>
        <Link href={path.href} className="mt-7 inline-flex items-center gap-2 border-b border-white pb-1 font-semibold text-white transition-colors hover:text-[#9AB7FF]">{path.action} <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
