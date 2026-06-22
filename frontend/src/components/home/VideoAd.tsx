"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, VolumeX } from "lucide-react";

export function VideoAd() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Show the video ad overlay after a short delay on first load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-xl"
      >
        <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute left-6 bottom-6 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </button>

          {/* Video Player */}
          <div className="aspect-video w-full">
            <video
              autoPlay
              muted={isMuted}
              playsInline
              onEnded={() => setIsOpen(false)}
              className="h-full w-full object-cover"
            >
              <source src="/datawizable.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Call to Action Overlay (Fade in after 3 seconds) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center pointer-events-none"
          >
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Future is Engineered.</h2>
             <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 px-6">Watch how we transform organizational bottlenecks into digital growth engines.</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
