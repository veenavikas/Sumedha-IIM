"use client";

import Link from "next/link";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  duration: string;
  eligibility: string;
  fee: string;
}

export default function CourseCard({ id, title, duration, eligibility, fee }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 group flex flex-col h-full border-t-4 border-t-blue-500">
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-bold text-navy mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-3 mb-8 flex-grow">
          <div className="flex items-center text-sm text-slate">
            <Clock className="w-4 h-4 mr-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" />
            <span className="font-semibold uppercase tracking-wider text-xs mr-2 text-navy">Duration:</span>
            {duration}
          </div>
          <div className="flex items-center text-sm text-slate">
            <GraduationCap className="w-4 h-4 mr-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" />
            <span className="font-semibold uppercase tracking-wider text-xs mr-2 text-navy">Eligibility:</span>
            {eligibility}
          </div>
          <div className="flex items-center text-sm text-slate">
            <span className="w-4 h-4 mr-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-bold flex items-center justify-center">₹</span>
            <span className="font-semibold uppercase tracking-wider text-xs mr-2 text-navy">Fee:</span>
            {fee}
          </div>
        </div>
        
        <Link 
          href={`/programmes/${id}`}
          className="inline-flex items-center text-navy font-bold text-sm uppercase tracking-widest group-hover:text-blue-600 transition-colors mt-auto"
        >
          View Details 
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
