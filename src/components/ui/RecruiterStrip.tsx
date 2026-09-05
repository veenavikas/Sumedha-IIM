"use client";

import recruitersData from "@/data/recruiters.json";

export default function RecruiterStrip() {
  return (
    <section className="py-8 bg-slate-900 border-y border-slate-800 overflow-hidden relative z-20">
      <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center px-4">
        {[...recruitersData, ...recruitersData].map((recruiter, idx) => (
          <div 
            key={idx} 
            className="flex items-center space-x-3 bg-slate-800/80 hover:bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700/60 shadow-md transition-all duration-300 transform hover:scale-105 shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              <img 
                src={recruiter.logo} 
                alt={recruiter.name} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white font-serif font-bold tracking-wide">{recruiter.name}</span>
              <span className="text-[10px] text-[#d9a441] font-extrabold uppercase tracking-wider">{recruiter.sector}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
