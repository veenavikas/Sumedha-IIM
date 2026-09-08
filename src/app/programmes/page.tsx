"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import CourseCard from "@/components/ui/CourseCard";
import CTAStrip from "@/components/ui/CTAStrip";
import AnimatedSection from "@/components/ui/AnimatedSection";
import coursesData from "@/data/courses.json";

const categories = [
  { id: "All", label: "All Courses" },
  { id: "Hospitality", label: "Hotel & Hospitality" },
  { id: "Aviation", label: "Aviation & Cabin Crew" },
  { id: "Bachelors", label: "Bachelors" },
  { id: "Management", label: "Management" },
] as const;

type CategoryType = typeof categories[number]["id"];

export default function Programmes() {
  const [activeTab, setActiveTab] = useState<CategoryType>("All");
  
  const filteredCourses = activeTab === "All" 
    ? coursesData 
    : coursesData.filter(c => c.category === activeTab);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Academic Programmes 2026" 
        subtitle="Industry-aligned Degree, Diploma & Vocational courses designed for immediate global employability." 
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection direction="up" className="text-center mb-16">
          <div className="inline-flex flex-wrap justify-center bg-white/80 backdrop-blur-md rounded-full p-1.5 shadow-md border border-sky-200 gap-1">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-[#0b2a68] text-white shadow-md scale-105" 
                    : "text-slate-600 hover:text-[#0b2a68] hover:bg-sky-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <AnimatedSection key={course.id} direction="up" delay={index * 0.05}>
              <CourseCard course={course} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
