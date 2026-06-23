"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071C3F] pt-48 pb-20 px-6 flex items-center">
      {/* Premium Subtle Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Slow Drifting Gradient Orb 1 */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]"
        />

        {/* Slow Drifting Gradient Orb 2 */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[140px]"
        />

        {/* Slow Drifting Gradient Orb 3 */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/3 bottom-0 h-[450px] w-[450px] rounded-full bg-accent/5 blur-[100px]"
        />

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold leading-[1.1] text-white sm:text-7xl">
              Every Organization Has <span className="text-accent">Bottlenecks.</span>
              <br />
              We Engineer Systems That <span className="underline decoration-accent/50 underline-offset-8">Remove Them.</span>
            </h1>
            <p className="mt-8 text-xl text-white/70 max-w-xl leading-relaxed">
              Datawizable helps businesses, institutions, and governments streamline operations,
              automate workflows, unlock insights, and scale through intelligent digital transformation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="rounded-full px-8 py-7 text-lg font-bold">
                  Book a Strategic Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#071C3F] rounded-full px-8 py-7 text-lg font-bold transition-all">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract ecosystem diagram using CSS */}
            <div className="relative flex h-[500px] w-full items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full border border-white/20 animate-spin-slow" />
              <div className="absolute h-80 w-80 rounded-full border border-white/10 animate-reverse-spin-slow" />

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                   <CardItem icon="?" label="Problem" color="bg-gray-500" />
                   <div className="h-px w-8 bg-white/20" />
                   <CardItem icon="A" label="Analysis" color="bg-blue-500" />
                </div>
                <div className="h-8 w-px bg-white/20" />
                <CardItem icon="S" label="Strategy" color="bg-accent" isMain />
                <div className="h-8 w-px bg-white/20" />
                <div className="flex items-center gap-4">
                   <CardItem icon="T" label="Technology" color="bg-blue-600" />
                   <div className="h-px w-8 bg-white/20" />
                   <CardItem icon="G" label="Growth" color="bg-green-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CardItem({ icon, label, color, isMain = false }: { icon: string, label: string, color: string, isMain?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md",
        isMain && "border-accent/50 bg-accent/10 p-6"
      )}
    >
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg font-bold text-white shadow-lg", color)}>
        {icon}
      </div>
      <span className={cn("font-medium text-white", isMain ? "text-lg" : "text-sm")}>{label}</span>
    </motion.div>
  );
}
