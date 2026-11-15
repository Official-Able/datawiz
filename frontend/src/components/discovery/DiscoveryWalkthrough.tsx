"use client";

import { useState } from "react";
import { ArrowUpRight, ClipboardList, FileCheck2, MessagesSquare } from "lucide-react";

const steps = [
  {
    label: "Share",
    title: "Begin with your reality.",
    detail: "Tell us what the business does, who is involved, and where you want a clearer view. The assessment is tailored to your organization, not a generic checklist.",
    client: "Describe the work in your own words.",
    team: "Prepare questions around your actual context.",
    icon: MessagesSquare,
  },
  {
    label: "Explore",
    title: "Take it one question at a time.",
    detail: "A private guided assessment makes room for detail without asking you to complete one long form in a sitting. Progress is saved so you can return.",
    client: "Answer at a pace that works for you.",
    team: "Listen for handoffs, constraints, and unanswered questions.",
    icon: ClipboardList,
  },
  {
    label: "Decide",
    title: "Turn answers into direction.",
    detail: "We review your responses, separate confirmed needs from assumptions, and agree on a sensible next step before proposing what to build.",
    client: "Review the priorities together with us.",
    team: "Define a grounded path to action.",
    icon: FileCheck2,
  },
];

export function DiscoveryWalkthrough() {
  const [selected, setSelected] = useState(0);
  const step = steps[selected];
  const Icon = step.icon;

  return <div>
    <div role="group" aria-label="Discovery process" className="grid grid-cols-3 border-y border-gray-200">
      {steps.map((item, index) => <button key={item.label} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`flex min-h-20 items-center justify-center gap-2 border-r border-gray-200 px-2 text-sm font-semibold last:border-r-0 sm:gap-4 sm:text-base ${selected === index ? "bg-primary text-white" : "text-gray-600 hover:bg-[#F4F7FC]"}`}><span className="hidden text-xs opacity-70 sm:inline">0{index + 1}</span>{item.label}</button>)}
    </div>
    <div className="grid min-h-80 gap-8 border-b border-gray-200 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" aria-live="polite">
      <div>
        <Icon size={32} strokeWidth={1.6} className="text-primary" aria-hidden="true" />
        <h3 className="mt-6 font-display text-2xl font-bold leading-tight sm:text-3xl">{step.title}</h3>
        <p className="mt-5 max-w-xl leading-relaxed text-gray-600">{step.detail}</p>
      </div>
      <div className="self-end border-l-2 border-accent pl-6">
        <p className="text-xs font-bold uppercase text-primary">Your part</p>
        <p className="mt-2 font-semibold">{step.client}</p>
        <p className="mt-7 text-xs font-bold uppercase text-primary">Our part</p>
        <p className="mt-2 font-semibold">{step.team}</p>
      </div>
    </div>
    <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">A practical route from first conversation to next decision <ArrowUpRight size={16} aria-hidden="true" /></p>
  </div>;
}
