"use client";

import recruitersData from "@/data/recruiters.json";

export default function RecruiterStrip() {
  return (
    <section className="py-12 bg-white border-y border-border/50 overflow-hidden relative z-20">
      <div className="flex space-x-16 animate-marquee whitespace-nowrap items-center px-4">
        {/* We double the array to ensure smooth infinite marquee */}
        {[...recruitersData, ...recruitersData].map((recruiter, idx) => (
          <div key={idx} className="flex items-center space-x-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            {/* If we had actual logos, we'd use Image. For now, text fallback */}
            <span className="text-2xl text-navy font-serif font-bold tracking-[0.05em]">{recruiter.name}</span>
            <span className="text-primary mx-8 text-xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
