"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PremiumCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, BookOpen, Users, Brain, Workflow, Terminal } from "lucide-react";

const courses = [
  {
    title: "Data Analytics",
    desc: "Master the art of decision intelligence through data.",
    icon: Brain,
    impact: "Industry Standard"
  },
  {
    title: "AI & Automation",
    desc: "Learn to engineer intelligent workflows.",
    icon: Workflow,
    impact: "Future Ready"
  },
  {
    title: "Software Engineering",
    desc: "Build enterprise-grade digital systems.",
    icon: Terminal,
    impact: "Full Stack"
  },
  {
    title: "Digital Transformation",
    desc: "Strategic technology leadership for the modern era.",
    icon: Sparkles,
    impact: "Executive"
  },
  {
    title: "Workplace Toolkit",
    desc: "Master the essential soft skills for the modern professional environment.",
    icon: Users,
    impact: "Essential"
  },
];

export default function AcademyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="pt-48 pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest mb-6"
            >
              <BookOpen size={16} />
              Capacity Building
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-extrabold text-[#071C3F] mb-8 tracking-tighter">
              Datawiz<span className="text-accent">Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Building Africa's Next Generation of Digital Professionals through
              industry-first training and engineering masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <div className="group h-full relative p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col justify-between hover:bg-[#071C3F] transition-all duration-500 hover:-translate-y-2">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-accent transition-colors duration-500">
                        <course.icon className="text-[#071C3F] group-hover:text-white transition-colors duration-500" size={32} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent py-1 px-3 bg-accent/10 rounded-full group-hover:bg-white/10 group-hover:text-white">
                        {course.impact}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-[#071C3F] mb-4 group-hover:text-white transition-colors duration-500">
                      {course.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                      {course.desc}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full h-16 rounded-2xl border-2 border-[#071C3F]/10 text-[#071C3F] font-black text-lg group-hover:border-white/20 group-hover:text-white group-hover:bg-white/5 transition-all duration-500"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Learn More
                  </Button>
                </div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#071C3F]/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[3rem] p-10 md:p-16 max-w-xl w-full relative shadow-[0_32px_80_rgba(0,0,0,0.3)] text-center border border-gray-100"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-8 top-8 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#071C3F] hover:text-white transition-all"
              >
                <X size={24} />
              </button>

              <div className="w-24 h-24 bg-accent/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10">
                <Sparkles className="text-accent" size={48} />
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-[#071C3F] mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We are currently engineering a world-class learning experience for this track.
                Our team is finalizing the curriculum to meet global industry standards.
              </p>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full h-18 text-xl font-bold rounded-2xl bg-accent hover:bg-accent/90 shadow-xl shadow-accent/20"
                >
                  Notify Me
                </Button>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                  Launch Q3 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
