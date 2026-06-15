"use client";

import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import TestimonialCard from "@/components/ui/TestimonialCard";
import testimonialsData from "@/data/testimonials.json";
import recruitersData from "@/data/recruiters.json";

export default function Placements() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc]">
      <PageHero 
        title="Placements & Alumni" 
        subtitle="100% placement assistance. Our graduates are highly sought after by top global recruiters." 
      />

      {/* S1: Hero Stat */}
      <section className="py-20 text-center bg-white border-b border-border/50">
        <h2 className="font-serif text-6xl md:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">500+</h2>
        <p className="text-xl text-navy font-semibold uppercase tracking-widest">Students Placed Successfully</p>
      </section>

      {/* S2: Sector breakdown */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#fcfcfc] p-10 rounded-2xl border border-border/50 shadow-md text-center">
            <h3 className="font-serif text-3xl font-bold text-navy mb-6">Aviation Sector</h3>
            <p className="text-slate mb-6">Airlines, Airports, Ground Handling, Cargo</p>
            <div className="font-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">~60%</div>
          </div>
          <div className="bg-[#fcfcfc] p-10 rounded-2xl border border-border/50 shadow-md text-center">
            <h3 className="font-serif text-3xl font-bold text-navy mb-6">Hospitality Sector</h3>
            <p className="text-slate mb-6">5-Star Hotels, F&B, Cruises, Resorts</p>
            <div className="font-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">~40%</div>
          </div>
        </div>
      </section>

      {/* S3: Recruiter Logos Grid */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-navy mb-16">Our Recruiting Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recruitersData.map((r, idx) => (
              <div key={idx} className="bg-white aspect-video flex items-center justify-center p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                <span className="font-serif font-bold text-xl text-navy">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4: Alumni spotlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">Alumni Stories</h2>
            <h3 className="font-serif text-4xl font-bold text-navy">Hear from our graduates</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
