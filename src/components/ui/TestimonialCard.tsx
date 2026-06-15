"use client";

interface TestimonialCardProps {
  name: string;
  batch: string;
  program: string;
  company: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({ name, batch, program, company, role, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg border border-border/50 relative">
      <div className="absolute -top-6 left-10 text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 leading-none">&quot;</div>
      
      <p className="font-serif italic text-lg text-slate mb-8 pt-4 leading-relaxed">
        {quote}
      </p>
      
      <div className="border-t border-border/50 pt-6 mt-auto">
        <h4 className="font-bold text-navy text-lg">{name}</h4>
        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold uppercase tracking-wider mb-2">{role} at {company}</p>
        <p className="text-xs text-slate">{program} • {batch}</p>
      </div>
    </div>
  );
}
