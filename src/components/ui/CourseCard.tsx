"use client";

import Link from "next/link";
import { ArrowRight, Clock, GraduationCap, Sparkles } from "lucide-react";

interface CourseCardProps {
  id?: string;
  title?: string;
  duration?: string;
  eligibility?: string;
  description?: string;
  category?: string;
  course?: {
    id: string;
    title: string;
    duration: string;
    eligibility: string;
    description?: string;
    category?: string;
  };
}

export default function CourseCard(props: CourseCardProps) {
  const c = props.course || props;
  const { id = '', title = '', duration = '', eligibility = '', description = '', category = '' } = c;

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-sky-100 shadow-md hover:shadow-2xl hover:border-sky-300 transition-all duration-300 group flex flex-col h-full border-t-4 border-t-sky-500">
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-sky-50 text-sky-700 font-extrabold text-[10px] uppercase tracking-wider rounded-full border border-sky-200">
            {category || "Admissions 2026"}
          </span>
          <Sparkles className="w-4 h-4 text-sky-400 group-hover:scale-125 transition-transform" />
        </div>

        <h3 className="font-sans text-xl font-bold text-[#0b2a68] mb-4 group-hover:text-sky-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-2.5 mb-6 flex-grow">
          <div className="flex items-center text-xs text-slate-600 bg-sky-50/60 p-2.5 rounded-xl border border-sky-100">
            <Clock className="w-4 h-4 mr-2.5 text-sky-600 shrink-0" />
            <span className="font-bold text-[#0b2a68] mr-2">Duration:</span>
            {duration}
          </div>
          <div className="flex items-center text-xs text-slate-600 bg-sky-50/60 p-2.5 rounded-xl border border-sky-100">
            <GraduationCap className="w-4 h-4 mr-2.5 text-sky-600 shrink-0" />
            <span className="font-bold text-[#0b2a68] mr-2">Eligibility:</span>
            {eligibility}
          </div>
          {description && (
            <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-sky-100 mt-auto">
          <Link 
            href={`/programmes/${id}`}
            className="inline-flex items-center text-[#0b2a68] font-extrabold text-xs uppercase tracking-wider group-hover:text-sky-600 transition-colors"
          >
            Course Details 
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/admissions/apply"
            className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold text-[11px] uppercase tracking-wider shadow-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
