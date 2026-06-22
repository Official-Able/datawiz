import { cn } from "@/lib/utils";
import React from "react";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function PremiumCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-primary/5 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-primary/10",
        className
      )}
      {...props}
    >
      {/* Subtle background glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px] transition-all duration-500 group-hover:bg-accent/20" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
