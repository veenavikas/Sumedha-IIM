"use client";

import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export default function ThankYou() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-[80vh]">
      <PageHero 
        title="Thank You" 
        subtitle="We have received your submission." 
      />

      <section className="flex-grow flex items-center justify-center py-20 px-4 w-full">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-border/50 text-center max-w-2xl w-full">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="font-serif text-4xl font-bold text-navy mb-4">Submission Successful!</h2>
          
          <p className="text-slate text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Thank you for reaching out to Sumedha Institute of Innovation & Management. Our admissions counselor will review your details and contact you shortly.
          </p>

          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all duration-300 rounded-full shadow-lg hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5 mr-3" /> Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
