import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Datawizable Logo"
                width={180}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              We help organizations identify operational bottlenecks, redesign processes,
              and build intelligent digital systems that improve performance, efficiency, and growth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">Process Automation</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">Decision Intelligence</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">AI Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/academy" className="text-gray-400 hover:text-white transition-colors">DatawizAcademy</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Datawizable Limited. All rights reserved.
          </p>
          <div className="flex gap-8">
             <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
             <Link href="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
