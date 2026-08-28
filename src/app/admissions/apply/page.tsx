"use client";

import { useState, useRef, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import coursesData from "@/data/courses.json";
import emailjs from '@emailjs/browser';

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_5idndue',
        'template_et5of67',
        form.current,
        'TdpD25IKOoMCpPrze'
      );
      router.push('/thank-you');
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero
        title="Online Application Form 2026"
        subtitle="Reserve your seat for the upcoming academic batch at Sumedha IIM Visakhapatnam."
      />

      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0b2a68]/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full relative animate-in fade-in zoom-in duration-300 border border-sky-200">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[3/4] w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0b2a68] via-[#0284c7] to-[#0369a1] p-8 text-center text-white">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sky-200 font-extrabold text-[10px] uppercase tracking-widest mb-3 border border-white/20">
                <Sparkles className="w-3 h-3 inline mr-1" /> Limited Seats Available
              </span>
              <h3 className="text-3xl font-black text-white mb-1">Admissions Open 2026</h3>
              <p className="text-sky-300 font-extrabold tracking-widest uppercase text-xs mb-6">Sumedha IIM Visakhapatnam</p>
              
              <div className="space-y-3 mb-6 text-sky-100 text-sm font-semibold">
                <p>🎓 BBA Aviation Management</p>
                <p>🏨 Degree in Hotel Management (BHM)</p>
                <p>✈️ Diplomas in Aviation & Hotel Operations</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl mb-6 w-full border border-white/20">
                <p className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">Admission Helpline</p>
                <p className="text-sky-200 font-black text-base">+91 8886 197 778</p>
              </div>

              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-3.5 bg-white text-[#0b2a68] font-black uppercase text-xs tracking-widest rounded-full hover:bg-sky-100 transition-all shadow-lg"
              >
                Continue To Application Form
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 max-w-3xl mx-auto px-4 w-full">
        <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-sky-100">
          <div className="mb-8 border-b border-sky-100 pb-4">
            <span className="text-xs font-black text-sky-600 uppercase tracking-widest">Step 1 of 1</span>
            <h2 className="text-2xl font-black text-[#0b2a68]">Student Admission Application</h2>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xs font-bold text-[#0b2a68] mb-2 uppercase tracking-wider">First Name</label>
                <input type="text" name="firstName" id="firstName" required className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 focus:outline-none focus:border-sky-500 text-sm" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-bold text-[#0b2a68] mb-2 uppercase tracking-wider">Last Name</label>
                <input type="text" name="lastName" id="lastName" required className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 focus:outline-none focus:border-sky-500 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#0b2a68] mb-2 uppercase tracking-wider">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 focus:outline-none focus:border-sky-500 text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-[#0b2a68] mb-2 uppercase tracking-wider">Mobile Phone</label>
                <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 focus:outline-none focus:border-sky-500 text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="course" className="block text-xs font-bold text-[#0b2a68] mb-2 uppercase tracking-wider">Programme Selection</label>
              <select name="course" id="course" required className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 focus:outline-none focus:border-sky-500 text-sm">
                <option value="">Select Programme</option>
                {coursesData.map((course) => (
                  <option key={course.id} value={course.title}>{course.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="qualification" className="block text-xs font-bold text-[#0b2a68] mb-2 uppercase tracking-wider">Highest Qualification</label>
              <input type="text" name="qualification" id="qualification" placeholder="e.g. 10+2 Intermediate (MPC / BiPC / CEC / HEC)" required className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 focus:outline-none focus:border-sky-500 text-sm" />
            </div>

            <div>
              <label htmlFor="notes" className="block text-xs font-bold text-[#0b2a68] mb-2 uppercase tracking-wider">Additional Notes / Preferred Term Schedule</label>
              <textarea name="notes" id="notes" rows={3} placeholder="Mention any preferred term payment option..." className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-200 focus:outline-none focus:border-sky-500 text-sm"></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#0b2a68] to-[#0284c7] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:shadow-sky-glow transition-all"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Online Application"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
