"use client";

import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="py-20 bg-[#fcfcfc] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold text-navy mb-8">Begin your journey at Sumedha IIM</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            href="/admissions/apply" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none text-navy font-semibold text-sm uppercase tracking-widest hover:bg-navy hover:text-ivory transition-colors duration-300 rounded-full text-center"
          >
            Apply Now
          </Link>
          <a 
            href="https://wa.me/919966319916" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-navy text-navy font-semibold text-sm uppercase tracking-widest hover:bg-navy hover:text-ivory transition-colors duration-300 rounded-full text-center"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
