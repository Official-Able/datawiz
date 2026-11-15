"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", company: "", message: "" };

export function ChatForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Submission failed");
      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  }

  return (
    <form onSubmit={submit} className="space-y-5" aria-label="Project enquiry">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-gray-800">
          Your name <span aria-hidden="true">*</span>
          <input required maxLength={200} autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} className="mt-2 block w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base font-normal text-gray-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </label>
        <label className="block text-sm font-semibold text-gray-800">
          Email address <span aria-hidden="true">*</span>
          <input required type="email" maxLength={254} autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} className="mt-2 block w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base font-normal text-gray-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </label>
      </div>
      <label className="block text-sm font-semibold text-gray-800">
        Organization
        <input maxLength={200} autoComplete="organization" value={form.company} onChange={(event) => update("company", event.target.value)} className="mt-2 block w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base font-normal text-gray-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </label>
      <label className="block text-sm font-semibold text-gray-800">
        What are you trying to improve? <span aria-hidden="true">*</span>
        <textarea required minLength={10} maxLength={5000} rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} className="mt-2 block w-full resize-y rounded-sm border border-gray-300 bg-white px-4 py-3 text-base font-normal text-gray-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </label>
      <div aria-live="polite" className="min-h-6 text-sm">
        {status === "success" && <p className="text-green-800">Your enquiry was received. We will reply to the email address you provided.</p>}
        {status === "error" && <p className="text-red-700">We could not submit your enquiry. Please try again or use WhatsApp.</p>}
      </div>
      <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 items-center justify-center bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-[#0E3480] disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
