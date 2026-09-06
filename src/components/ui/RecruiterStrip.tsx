"use client";

import recruitersData from "@/data/recruiters.json";

export default function RecruiterStrip() {
  return (
    <section className="py-8 bg-slate-900 border-y border-slate-800 overflow-hidden relative z-20">
      <div className="flex space-x-6 animate-marquee whitespace-nowrap items-center px-4">
        {[...recruitersData, ...recruitersData].map((recruiter, idx) => (
          <div 
            key={idx} 
            className="h-20 w-44 bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl flex items-center justify-center p-4 transition-all duration-300 transform hover:scale-105 shrink-0 group"
          >
            <img 
              src={recruiter.logo} 
              alt={recruiter.name} 
              title={recruiter.name}
              className={`w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                recruiter.name.includes('Jet Airways') ? 'max-h-16 max-w-[145px]' : 'max-h-12 max-w-[130px]'
              } ${
                recruiter.name === 'JetLite' ? 'brightness-0' : ''
              }`}
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                if (target.parentElement && !target.parentElement.querySelector('span')) {
                  const span = document.createElement('span');
                  span.className = 'font-bold text-slate-800 text-sm tracking-wide text-center';
                  span.innerText = recruiter.name;
                  target.parentElement.appendChild(span);
                }
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
