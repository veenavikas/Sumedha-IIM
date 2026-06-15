"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import CourseCard from "@/components/ui/CourseCard";
import CTAStrip from "@/components/ui/CTAStrip";
import coursesData from "@/data/courses.json";

export default function Programmes() {
  const [activeTab, setActiveTab] = useState<"All" | "Aviation" | "Hospitality">("All");
  
  const filteredCourses = activeTab === "All" 
    ? coursesData 
    : coursesData.filter(c => c.category === activeTab);

  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero 
        title="Our Programmes" 
        subtitle="Industry-aligned curriculum designed for immediate global employability." 
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex bg-white rounded-full p-1 border border-border/50 shadow-sm">
            {["All", "Aviation", "Hospitality"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "All" | "Aviation" | "Hospitality")}
                className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest transition-colors ${
                  activeTab === tab ? "bg-navy text-ivory" : "text-slate hover:text-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
