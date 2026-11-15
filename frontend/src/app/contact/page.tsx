import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatForm } from "@/components/contact/ChatForm";

export const metadata: Metadata = {
  title: "Contact | Datawizable",
  description: "Tell Datawizable about the business problem or digital project you are considering.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-[#101B32] px-5 py-14 text-white sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="page-intro-kicker mb-5">Contact / Start with the real problem</p>
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight sm:text-6xl">Tell us what you are working through.</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Share a little about your organization and the challenge you want to address. We will read your enquiry and reply by email.
            </p>
            <div className="mt-12 border-t border-white/20 pt-7">
              <p className="mb-3 text-sm font-bold uppercase text-white/55">Prefer a direct conversation?</p>
              <a href="https://wa.me/2349160143190" className="inline-flex min-h-11 items-center gap-3 font-semibold text-white hover:text-[#A8C1FF]">
                <MessageCircle size={20} aria-hidden="true" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t-4 border-[#D62839] bg-white p-6 text-[#171C28] shadow-2xl shadow-black/15 sm:p-10">
            <p className="mb-2 text-xs font-bold uppercase text-primary">A good first step</p>
            <h2 className="mb-7 font-display text-2xl font-bold">Project enquiry</h2>
            <ChatForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
