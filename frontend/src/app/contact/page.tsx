"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatForm } from "@/components/contact/ChatForm";
import { motion } from "framer-motion";
import { Phone as WhatsApp } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/30">
      <Navbar />
      <main className="pt-48 pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Let's Talk Strategy</span>
              <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-[1.1]">
                Every Challenge Has a <span className="text-accent underline underline-offset-8 decoration-accent/20">System.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Tell us what is slowing your organization down. Our strategy assistant
                is ready to collect your details and connect you with our engineering team.
              </p>

              <div className="pt-10 flex gap-12">
                <div>
                   <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Direct Channel</div>
                   <a
                    href="https://wa.me/2349160143190"
                    target="_blank"
                    className="text-2xl font-bold text-primary hover:text-accent transition-colors flex items-center gap-3"
                   >
                     <WhatsApp className="text-[#25D366]" />
                     +234 916 014 3190
                   </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ChatForm />
            </motion.div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2349160143190"
        target="_blank"
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all"
      >
        <WhatsApp size={32} />
      </a>

      <Footer />
    </div>
  );
}
