"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Campaign = {
  title: string;
  eyebrow: string;
  message: string;
  image_url: string;
  cta_label: string;
  cta_url: string;
  placement: "site_banner" | "home_feature";
};

type Placement = Campaign["placement"];

export function CampaignSlot({ placement }: { placement: Placement }) {
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/campaigns", { cache: "no-store" })
      .then((response) => response.ok ? response.json() as Promise<Campaign[]> : [])
      .then((items) => {
        if (active) setCampaign(items.find((item) => item.placement === placement) ?? null);
      })
      .catch(() => {
        if (active) setCampaign(null);
      });
    return () => { active = false; };
  }, [placement]);

  if (!campaign) return null;
  const isInternal = campaign.cta_url.startsWith("/");
  const action = campaign.cta_label && campaign.cta_url
    ? isInternal
      ? <Link href={campaign.cta_url} className="inline-flex min-h-10 items-center border border-current px-4 py-2 text-sm font-semibold">{campaign.cta_label}</Link>
      : <a href={campaign.cta_url} rel="noopener noreferrer" target="_blank" className="inline-flex min-h-10 items-center border border-current px-4 py-2 text-sm font-semibold">{campaign.cta_label}</a>
    : null;

  if (placement === "site_banner") {
    return (
      <aside className="bg-[#173F8A] px-4 py-3 text-white" aria-label={campaign.title}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center sm:justify-between sm:text-left">
          <p className="text-sm leading-relaxed"><span className="font-bold">{campaign.eyebrow || campaign.title}</span><span className="mx-2 hidden sm:inline">|</span> {campaign.message}</p>
          {action}
        </div>
      </aside>
    );
  }

  return (
    <section className="border-y border-gray-200 bg-[#F4F7FC] px-5 py-10 sm:px-8 sm:py-14" aria-label={campaign.title}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)]">
        <div>
          {campaign.eyebrow && <p className="mb-3 text-xs font-bold uppercase text-primary">{campaign.eyebrow}</p>}
          <h2 className="font-display text-2xl font-bold text-[#171C28] sm:text-3xl">{campaign.title}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-700">{campaign.message}</p>
          {action && <div className="mt-5">{action}</div>}
        </div>
        {campaign.image_url && <img src={campaign.image_url} alt="" className="max-h-72 w-full object-cover" loading="lazy" />}
      </div>
    </section>
  );
}
