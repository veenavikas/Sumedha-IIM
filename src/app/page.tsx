"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import CTAStrip from "@/components/ui/CTAStrip";
import RecruiterStrip from "@/components/ui/RecruiterStrip";
import CourseCard from "@/components/ui/CourseCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroSlider from "@/components/ui/HeroSlider";
import courses from "@/data/courses.json";
import testimonials from "@/data/testimonials.json";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"All" | "Aviation" | "Hospitality">("Aviation");
  
  const filteredCourses = activeTab === "All" 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  return (
    <div className="flex flex-col w-full">
      {/* S2 Hero */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-[#fcfcfc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[64px] font-bold text-navy leading-[1.1] mb-6">
              Visakhapatnam&apos;s Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic font-light">Aviation & Hospitality</span> Careers
            </h1>
            <p className="text-lg text-slate mb-10 font-sans max-w-xl leading-relaxed">
              Transform your passion into a global career. Join Sumedha IIM for world-class, employability-linked skill training and guaranteed placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/programmes"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none font-semibold text-sm uppercase tracking-widest hover:bg-navy transition-colors duration-300 rounded-full text-center w-full sm:w-auto"
              >
                Explore Programmes
              </Link>
              <Link
                href="/admissions"
                className="px-8 py-4 bg-transparent border border-navy text-navy font-semibold text-sm uppercase tracking-widest hover:bg-navy hover:text-white transition-colors duration-300 rounded-full text-center w-full sm:w-auto"
              >
                Download Prospectus
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.2} className="hidden lg:block relative w-full">
            <HeroSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* S3 Trust bar */}
      <AnimatedSection direction="up" className="py-8 bg-[#fcfcfc] border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          <div className="flex items-center space-x-2">
            <span className="font-serif font-bold text-navy text-xl">NSDC</span>
            <span className="text-sm font-medium tracking-wide text-slate">Approved</span>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="flex items-center space-x-2">
            <span className="font-serif font-bold text-navy text-xl">Skill India</span>
            <span className="text-sm font-medium tracking-wide text-slate">Partner</span>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <span className="font-serif font-bold text-navy text-xl">100% Placement Assistance</span>
        </div>
      </AnimatedSection>

      {/* S4 About snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">About Sumedha IIM</h2>
              <h3 className="font-serif text-4xl font-bold text-navy mb-6 leading-tight">Forging Visionary Leaders Since 2010</h3>
              <p className="text-slate leading-relaxed mb-6">
                Sumedha IIM Visakhapatnam is an institution of eminence, forging visionary leaders through rigorous academics and immersive, real-world strategy. For over a decade, we have been the premier destination for students aiming to build careers in Aviation and Hospitality.
              </p>
              <p className="text-slate leading-relaxed mb-8">
                Our NSDC-approved curriculum ensures that every student graduates with industry-relevant skills, professional grooming, and the confidence to succeed globally.
              </p>
              <Link href="/about" className="inline-flex items-center text-navy font-bold text-sm uppercase tracking-widest hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 transition-colors group">
                Know More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#fcfcfc] p-8 rounded-xl border border-border/50 text-center">
                <div className="font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">14+</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-navy">Years of Excellence</div>
              </div>
              <div className="bg-[#fcfcfc] p-8 rounded-xl border border-border/50 text-center">
                <div className="font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">3</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-navy">Campuses</div>
              </div>
              <div className="bg-[#fcfcfc] p-8 rounded-xl border border-border/50 text-center">
                <div className="font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">500+</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-navy">Alumni Placed</div>
              </div>
              <div className="bg-[#fcfcfc] p-8 rounded-xl border border-border/50 text-center">
                <div className="font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">50+</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-navy">Recruiters</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S5 Featured Programmes */}
      <AnimatedSection direction="up" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 block">Our Programmes</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy">Launch Your Career With Industry-Ready Skills</h2>
            </div>
            <Link href="/programmes" className="hidden md:flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-80 transition-opacity">
              View All Programmes <ArrowRight className="ml-2 w-4 h-4 text-cyan-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, index) => (
              <AnimatedSection key={course.id} direction="up" delay={index * 0.1}>
                <CourseCard course={course} />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/programmes" className="inline-flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              View All Programmes <ArrowRight className="ml-2 w-4 h-4 text-cyan-500" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* S7 Placements */}
      <section className="pt-24 bg-white overflow-hidden text-center">
        <h2 className="font-serif text-4xl font-bold text-navy mb-4">Our graduates work here</h2>
        <p className="text-slate mb-12">Top airlines and 5-star hotel chains recruit from Sumedha IIM.</p>
        <RecruiterStrip />
        <div className="pb-24 pt-12">
          <Link href="/placements" className="inline-flex items-center text-navy font-bold text-sm uppercase tracking-widest hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 transition-colors group">
            View Placement Report <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* S7 Testimonials Overview */}
      <AnimatedSection direction="up" className="py-24 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 block">Success Stories</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Hear From Our Placed Students</h2>
            <p className="text-slate text-lg">Join hundreds of successful alumni working in top airlines and luxury hotels worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} direction="up" delay={index * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* S9 CTA Strip */}
      <CTAStrip />
    </div>
  );
}
