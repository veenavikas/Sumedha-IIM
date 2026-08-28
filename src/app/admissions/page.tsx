import { CheckCircle2, ArrowRight } from "lucide-react";
import CTAStrip from "@/components/ui/CTAStrip";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions Process 2026 | Sumedha IIM Vizag",
  description: "Learn about the admission process, eligibility criteria, required documents, and flexible term fee options at Sumedha IIM Vizag.",
  keywords: "sumedha iim admissions, hotel management admission vizag, aviation admission vizag, term fee options"
};

export default function Admissions() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Admissions Open 2026-27" 
        subtitle="Take the first step towards a global career in Aviation & Hotel Management with Sumedha IIM." 
      />

      {/* S2: Timeline */}
      <section className="py-24 max-w-5xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
            Step-by-Step Roadmap
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-black text-[#0b2a68] mt-3">Simple Admission Process</h2>
        </div>
        
        <div className="space-y-6 relative">
          {[
            { step: "01", title: "Choose Programme", desc: "Select from BHM, BBA Aviation, DHM, DAM, or PG Diplomas based on your career interest." },
            { step: "02", title: "Fill Online Application", desc: "Complete the quick online application form with basic educational details." },
            { step: "03", title: "Personal Counseling", desc: "Meet or call our admissions desk for personalized course guidance & term payment plan setup." },
            { step: "04", title: "Document Submission", desc: "Submit 10th/12th marksheets, transfer certificate, and passport size photos." },
            { step: "05", title: "Seat Confirmation", desc: "Clear term 1 installment fee to confirm your seat and receive official orientation kit." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-sky-100 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0b2a68] to-[#0284c7] text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-[#0b2a68] text-lg mb-1">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S3 & S4: Checklist & Apply CTA */}
      <section className="py-24 bg-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Checklist */}
            <div className="bg-sky-50/50 p-8 sm:p-10 rounded-3xl border border-sky-100 shadow-sm">
              <h3 className="font-sans text-2xl font-black text-[#0b2a68] mb-6">Required Documents Checklist</h3>
              <ul className="space-y-3.5 text-sm text-slate-700 font-semibold">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-sky-600 mr-3 shrink-0" /> 10th Standard Marksheet & Certificate</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-sky-600 mr-3 shrink-0" /> 12th / Intermediate (10+2) Marksheet</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-sky-600 mr-3 shrink-0" /> Transfer Certificate (TC) & Conduct Certificate</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-sky-600 mr-3 shrink-0" /> Aadhar Card / Valid ID Proof</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-sky-600 mr-3 shrink-0" /> 4 Passport Size Photographs</li>
              </ul>
            </div>

            {/* Apply Online Box */}
            <div className="bg-gradient-to-br from-[#0b2a68] via-[#071d47] to-[#04122d] text-white p-8 sm:p-10 rounded-3xl border border-sky-400/20 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-sky-300 uppercase tracking-widest block mb-2">Direct Application</span>
                <h3 className="font-sans text-3xl font-black text-white mb-4">Apply Online for 2026 Batch</h3>
                <p className="text-sky-100 text-sm leading-relaxed mb-8">
                  Submit your online application in less than 2 minutes to reserve your seat and get instant counseling support.
                </p>
              </div>
              <Link 
                href="/admissions/apply" 
                className="w-full text-center py-4 bg-sky-500 hover:bg-sky-600 text-white font-black text-xs uppercase tracking-widest rounded-full shadow-lg transition-all"
              >
                Start Online Application <ArrowRight className="w-4 h-4 inline ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
