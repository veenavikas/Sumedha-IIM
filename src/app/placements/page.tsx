"use client";

import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import testimonialsData from "@/data/testimonials.json";
import recruitersData from "@/data/recruiters.json";
import { Briefcase, Building2 } from "lucide-react";

export default function Placements() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Placements & Alumni Success" 
        subtitle="100% Placement Assistance. Over 1500+ graduates placed across leading airlines & 5-star hotel chains." 
      />

      {/* S1: Hero Stat */}
      <section className="py-20 text-center bg-white/90 backdrop-blur-md border-b border-sky-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />
        <AnimatedSection direction="up" className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
            PROVEN TRACK RECORD
          </span>
          <h2 className="font-sans text-[80px] sm:text-[120px] md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0b2a68] via-[#0284c7] to-[#0369a1] my-2 leading-none">
            1500+
          </h2>
          <p className="text-xl md:text-2xl text-[#0b2a68] font-black uppercase tracking-wider">Students Placed Successfully</p>
        </AnimatedSection>
      </section>

      {/* S2: Sector breakdown */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HoverCard className="p-10 text-center bg-white/90 backdrop-blur-md border border-sky-100 rounded-[32px] shadow-lg shadow-sky-100/50">
            <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="font-sans text-3xl font-black text-[#0b2a68] mb-3">Aviation Sector</h3>
            <p className="text-slate-600 mb-6 text-sm font-medium">Airports, Airlines, Ground Handling, Cargo & Flight Ops</p>
            <div className="font-sans text-5xl font-black text-sky-600">~60%</div>
          </HoverCard>
          
          <HoverCard className="p-10 text-center bg-white/90 backdrop-blur-md border border-sky-100 rounded-[32px] shadow-lg shadow-sky-100/50">
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="font-sans text-3xl font-black text-[#0b2a68] mb-3">Hospitality Sector</h3>
            <p className="text-slate-600 mb-6 text-sm font-medium">5-Star Luxury Hotels, F&B, Cruise Lines, Resorts</p>
            <div className="font-sans text-5xl font-black text-sky-600">~40%</div>
          </HoverCard>
        </AnimatedSection>
      </section>

      {/* S3: Recruiter Logos Grid */}
      <section className="py-24 bg-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
              Top Corporate Partners
            </span>
            <h3 className="font-sans text-3xl md:text-5xl font-black text-[#0b2a68] mt-3 mb-16">
              Our Active Recruiting Partners
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recruitersData.map((r, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.02}>
                <HoverCard className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex items-center justify-center h-32 group relative overflow-hidden">
                  <img 
                    src={r.logo} 
                    alt={r.name} 
                    title={r.name}
                    className={`w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                      r.name.includes('Jet Airways') ? 'max-h-20 max-w-[92%]' : 'max-h-16 max-w-[85%]'
                    } ${
                      r.name === 'JetLite' ? 'brightness-0' : ''
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement && !target.parentElement.querySelector('span')) {
                        const span = document.createElement('span');
                        span.className = 'font-sans font-bold text-base text-[#0b2a68] text-center tracking-wide';
                        span.innerText = r.name;
                        target.parentElement.appendChild(span);
                      }
                    }}
                  />
                </HoverCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* S4: Alumni Spotlight */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
            Success Stories
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-[#0b2a68] mt-3">What Our Alumni Say</h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <AnimatedSection key={t.id} direction="up" delay={idx * 0.1}>
              <HoverCard className="p-8 h-full bg-white/90 backdrop-blur-md rounded-3xl border border-sky-100 shadow-md">
                <TestimonialCard {...t} />
              </HoverCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
