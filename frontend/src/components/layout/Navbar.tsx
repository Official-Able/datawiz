"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Academy", href: "/academy" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 z-50 -translate-x-1/2",
        "w-[92%] max-w-7xl",
        "h-[78px]",
        "rounded-full",
        "bg-[#071C3F]/85",
        "backdrop-blur-xl",
        "border border-white/10",
        "shadow-[0_20px_60px_rgba(0,0,0,0.25)]",
        "transition-all duration-300",
        isScrolled && "top-4 bg-[#071C3F]/95"
      )}
    >
      <div className="flex h-full items-center justify-between px-2">
        <Link href="/" className="flex items-center group h-full">
          <div className="h-[58px] px-6 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/[0.12] group-hover:border-white/20">
            <img
              src="/logo.png"
              alt="Datawizable"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ minWidth: '120px' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden flex-1 justify-center lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[15px] font-semibold text-white/85 hover:text-white transition-all duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Section - CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact">
            <Button
              className="h-11 px-8 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold transition-all shadow-lg shadow-accent/20 border-none whitespace-nowrap"
            >
              Schedule Strategy Call
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-full bg-white/5 p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="absolute left-0 right-0 top-[calc(100%+12px)] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071C3F] p-8 shadow-2xl backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold text-white/90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-6">
                 <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full h-14 text-lg font-bold rounded-2xl bg-[#E11D48] border-none">
                      Schedule Strategy Call
                    </Button>
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
