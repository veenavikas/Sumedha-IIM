"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import coursesData from "@/data/courses.json";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission goes here
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero 
        title="Application Form" 
        subtitle="Secure your seat for the upcoming 2026 batch." 
      />

      <section className="py-20 max-w-3xl mx-auto px-4 w-full">
        {submitted ? (
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-blue-500 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Application Submitted</h2>
            <p className="text-slate">Thank you for applying to Sumedha IIM. Our admissions counselor will contact you shortly.</p>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">First Name</label>
                  <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Last Name</label>
                  <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">City</label>
                <input type="text" id="city" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>

              <div>
                <label htmlFor="programme" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Programme Interested In</label>
                <select id="programme" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                  <option value="">Select a Programme</option>
                  {coursesData.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Message / Queries (Optional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none text-navy font-bold text-sm uppercase tracking-widest hover:bg-navy hover:text-ivory transition-colors duration-300 rounded-full mt-4">
                Submit Application
              </button>

            </form>
          </div>
        )}
      </section>
    </div>
  );
}
