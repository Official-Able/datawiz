"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare, Phone as WhatsApp, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
}

export function ChatForm() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hi! I'm your Datawizable Strategy Assistant. What's your name?", sender: "bot" },
  ]);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({ name: "", org: "", challenge: "" });
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    { field: "name", question: (name: string) => `Nice to meet you, ${name}! Which organization are you representing?` },
    { field: "org", question: () => "And finally, what is the primary bottleneck slowing your organization down?" },
    { field: "challenge", question: () => "Understood. We're ready to help you engineer a solution. How would you like to proceed?" },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const currentField = step === 0 ? "name" : step === 1 ? "org" : "challenge";
    const updatedFormData = { ...formData, [currentField]: inputValue };
    setFormData(updatedFormData);
    setInputValue("");

    if (step < steps.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: steps[step].question(inputValue),
          sender: "bot"
        };
        setMessages((prev) => [...prev, botMsg]);
        setStep(step + 1);
      }, 1000);
    } else {
      setStep(steps.length); // Final step
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello Datawizable, my name is ${formData.name} from ${formData.org}. We are facing this challenge: ${formData.challenge}`;
    window.open(`https://wa.me/2349160143190?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleEmailSubmit = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/leads/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.org,
          message: formData.challenge,
          email: "chat-user@datawizable.com" // Placeholder for chat users
        }),
      });
      alert("Strategy request submitted via email! We will contact you shortly.");
    } catch (error) {
      console.error("Error submitting:", error);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-primary p-6 flex items-center gap-4 text-white">
        <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
          <MessageSquare size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg">Strategy Assistant</h3>
          <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Always Active</p>
        </div>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth bg-gray-50/50">
        <AnimatePresence>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.sender === "bot" ? "justify-start" : "justify-end"}`}
            >
              <div className={cn(
                "max-w-[80%] p-5 rounded-2xl text-[15px] leading-relaxed shadow-sm",
                m.sender === "bot"
                  ? "bg-white text-primary border border-gray-100 rounded-tl-none"
                  : "bg-accent text-white rounded-tr-none font-medium shadow-accent/20"
              )}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input / Action area */}
      <div className="p-6 bg-white border-t border-gray-100">
        {step < steps.length ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your answer..."
              className="flex-1 px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-accent outline-none transition-all"
            />
            <Button onClick={handleSend} className="rounded-2xl w-14 h-14 p-0">
              <Send size={20} />
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-2xl flex gap-2 font-bold">
              <WhatsApp size={20} />
              Chat on WhatsApp
            </Button>
            <Button onClick={handleEmailSubmit} className="py-6 rounded-2xl font-bold">
              Schedule via Email
            </Button>
            <button
              onClick={() => { setStep(0); setMessages([{ id: "1", text: "Hi! I'm your Datawizable Strategy Assistant. What's your name?", sender: "bot" }]); }}
              className="col-span-full text-center text-xs text-gray-400 flex items-center justify-center gap-2 mt-2"
            >
              <RefreshCw size={12} /> Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper for cn
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
