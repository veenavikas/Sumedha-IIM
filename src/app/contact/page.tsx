"use client";

import { useRouter } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/thank-you');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Contact Sumedha IIM" 
        subtitle="Get in touch with our admissions & counseling team. We are here to guide your career path." 
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          {/* Contact Details */}
          <AnimatedSection direction="up" className="flex flex-col h-full">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200 w-fit mb-4">
              Get In Touch
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-[#0b2a68] mb-6">Connect With Our Counselors</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
              Whether you have questions about our Hotel Management, Aviation, BBA, or Diploma programmes, our counselors are ready to help.
            </p>
            
            <div className="space-y-4 flex-grow">
              <HoverCard className="p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-sky-100 shadow-sm flex items-start text-left">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-sky-200">
                  <Phone className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b2a68] text-base mb-1">Phone Counseling</h3>
                  <div className="flex flex-col space-y-1 text-slate-700 font-semibold text-sm">
                    <a href="tel:+918886197778" className="hover:text-sky-600 transition-colors">+91 8886 197 778</a>
                    <a href="tel:+918886197779" className="hover:text-sky-600 transition-colors">+91 8886 197 779</a>
                  </div>
                </div>
              </HoverCard>

              <HoverCard className="p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-sky-100 shadow-sm flex items-start text-left">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-sky-200">
                  <Mail className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b2a68] text-base mb-1">Email Enquiry</h3>
                  <a href="mailto:admissions@mysumedha.com" className="text-slate-700 hover:text-sky-600 transition-colors font-semibold text-sm">admissions@mysumedha.com</a>
                </div>
              </HoverCard>

              <HoverCard className="p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-sky-100 shadow-sm flex items-start text-left">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-sky-200">
                  <MapPin className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b2a68] text-base mb-1">Campus Address</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    5th Ln, behind Pawan showroom,<br />
                    Dwaraka Nagar, Visakhapatnam,<br />
                    Andhra Pradesh 530016
                  </p>
                </div>
              </HoverCard>

              <HoverCard className="p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-sky-100 shadow-sm flex items-start text-left">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-sky-200">
                  <Clock className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b2a68] text-base mb-1">Operating Hours</h3>
                  <p className="text-slate-700 font-semibold text-sm">Mon &ndash; Sun: 9:00 AM &ndash; 8:00 PM</p>
                  <p className="text-xs text-slate-500 italic mt-0.5">Open all 7 days for campus visits.</p>
                </div>
              </HoverCard>
            </div>

            <div className="mt-8">
              <a 
                href="https://wa.me/919966199883" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-[#128C7E] transition-all rounded-full shadow-md"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Admission Help
              </a>
            </div>
          </AnimatedSection>

          {/* Form & Map */}
          <AnimatedSection direction="up" delay={0.2} className="space-y-8 h-full flex flex-col">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-sky-100 shadow-lg">
              <h3 className="text-2xl font-black text-[#0b2a68] mb-6">Send an Online Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Full Name</label>
                  <input type="text" required placeholder="Enter your name" className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Mobile Number</label>
                    <input type="tel" required placeholder="Mobile number" className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Email Address</label>
                    <input type="email" required placeholder="Email address" className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Course Interested In</label>
                  <select required className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500">
                    <option value="">Select Programme</option>
                    <option value="DHM">Diploma in Hotel Management (DHM)</option>
                    <option value="DAM">Diploma in Aviation Management (DAM)</option>
                    <option value="BHM">Degree in Hotel Management (BHM)</option>
                    <option value="BBA Aviation">BBA Aviation Management</option>
                    <option value="PGDHM">PG Diploma Hospitality</option>
                    <option value="MBA">MBA Aviation & Hospitality</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Message</label>
                  <textarea rows={3} placeholder="Ask a question..." className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#0b2a68] to-[#0284c7] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:shadow-sky-glow transition-all">
                  Submit Enquiry <Send className="w-4 h-4 inline ml-2" />
                </button>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
