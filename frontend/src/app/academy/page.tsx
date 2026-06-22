"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PremiumCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const courses = [
  { title: "Data Analytics", desc: "Master the art of decision intelligence through data." },
  { title: "AI & Automation", desc: "Learn to engineer intelligent workflows." },
  { title: "Software Engineering", desc: "Build enterprise-grade digital systems." },
  { title: "Digital Transformation", desc: "Strategic technology leadership for the modern era." },
  { title: "Workplace Toolkit", desc: "Master the essential soft skills for the modern professional environment." },
];

export default function AcademyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-48 pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4 block"
            >
              Capacity Building
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-8 tracking-tight">DatawizAcademy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building Africa's Next Generation of Digital Professionals through
              industry-first training and masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <PremiumCard className="border-gray-100 h-full flex flex-col justify-between group hover:border-accent/20 transition-all">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{course.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{course.desc}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-2 hover:bg-primary hover:text-white transition-all font-bold"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Learn More
                  </Button>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2.5rem] p-12 max-w-lg w-full relative shadow-2xl text-center border border-gray-100"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-8 top-8 text-gray-400 hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Sparkles className="text-accent" size={40} />
              </div>

              <h2 className="text-4xl font-bold text-primary mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We are currently engineering a world-class learning experience for this track.
                Stay tuned for our official launch.
              </p>

              <Button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-6 text-lg font-bold rounded-2xl"
              >
                Notify Me
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
