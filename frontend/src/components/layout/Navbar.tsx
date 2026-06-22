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
        "fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-500 ease-in-out",
        "w-[88%] max-w-6xl rounded-2xl border border-white/10 px-8 py-3",
        "bg-[#071C3F]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]",
        isScrolled && "top-4 py-2 w-[85%] border-white/20 bg-[#071C3F]/95 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="Datawizable Logo"
            className={cn(
              "block w-auto transition-all duration-500",
              isScrolled ? "h-16" : "h-20"
            )}
            style={{ minHeight: isScrolled ? '64px' : '80px' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-[14px] font-bold tracking-wide text-white/90 transition-all duration-300 hover:text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link href="/contact">
            <Button
              variant="secondary"
              size="md"
              className={cn(
                "rounded-xl px-7 py-5 text-[14px] font-bold tracking-tight shadow-2xl transition-all duration-300",
                "bg-accent hover:bg-accent/90 hover:-translate-y-0.5 active:scale-95 shadow-accent/20"
              )}
            >
              Schedule Strategy Call
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-xl bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+16px)] overflow-hidden rounded-2xl border border-white/10 bg-[#071C3F] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-bold tracking-tight text-white/90 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 pt-6 border-t border-white/10">
                <Button
                  className="w-full py-7 text-lg font-bold rounded-xl bg-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
