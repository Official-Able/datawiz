"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CampaignSlot } from "@/components/campaigns/CampaignSlot";

const links = [
  { label: "Services", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Discovery", href: "/discovery" },
  { label: "Work", href: "/case-studies" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <CampaignSlot placement="site_banner" />
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8" aria-label="Main navigation">
          <Link href="/" className="logo-frame" aria-label="Datawizable home">
            <img src="/logo.png" alt="Datawizable" className="logo-frame-image" />
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined} className={`border-b-2 py-2 text-sm font-semibold transition-colors hover:text-primary ${pathname === link.href || pathname.startsWith(`${link.href}/`) ? "border-primary text-primary" : "border-transparent text-gray-700"}`}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="hidden bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E3480] lg:inline-flex">
            Discuss a project
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-primary lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {open && (
          <div id="mobile-navigation" className="border-t border-gray-200 bg-white px-5 pb-6 pt-3 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {links.map((link) => (
                <Link key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined} onClick={() => setOpen(false)} className={`border-b border-gray-100 py-4 font-semibold ${pathname === link.href || pathname.startsWith(`${link.href}/`) ? "text-primary" : "text-gray-800"}`}>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-5 bg-primary px-5 py-3 text-center font-semibold text-white">
                Discuss a project
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
