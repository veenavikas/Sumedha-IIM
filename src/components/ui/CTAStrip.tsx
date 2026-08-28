"use client";

import Link from "next/link";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50 to-blue-50/60 text-center border-t border-sky-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest mb-4 border border-sky-200">
          <Sparkles className="w-3.5 h-3.5" /> Admissions 2026-27 Open
        </span>
        <h2 className="font-sans text-3xl md:text-5xl font-black text-[#0b2a68] mb-6 tracking-tight">
          Begin Your Journey at Sumedha IIM Today
        </h2>
        <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl mx-auto font-medium">
          Get direct personalized admission & fee guidance from our career counselors.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="/admissions/apply" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0b2a68] to-[#0284c7] text-white font-extrabold text-xs uppercase tracking-widest hover:shadow-sky-glow hover:-translate-y-0.5 transition-all rounded-full text-center shadow-lg"
          >
            Apply Online Now <ArrowRight className="ml-2 w-4 h-4 inline" />
          </Link>
          <a 
            href="https://wa.me/919966199883" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#0b2a68] border-2 border-sky-300 font-extrabold text-xs uppercase tracking-widest hover:bg-sky-50 transition-colors rounded-full text-center shadow-md flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
