"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEnquiry } from "@/lib/emailjs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedPhone = formData.phone.trim();
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(trimmedPhone)) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      await sendContactEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: trimmedPhone,
        title: formData.title,
        message: formData.message.trim(),
      });

      setStatus("success");
      setPhoneError("");
      setFormData({
        name: "",
        phone: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Unable to send your enquiry right now. Please call +91 8886 197 778 or reach us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <p className="space-y-1">
                    <a href="mailto:info@sumedhaiim.com" className="block text-slate-700 hover:text-sky-600 transition-colors font-semibold text-sm">info@sumedhaiim.com</a>
                  </p>
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

              {status === "success" && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Enquiry Submitted Successfully!</p>
                    <p className="text-xs text-emerald-700 mt-0.5">Thank you for reaching out. Our admissions counselor will review your details and contact you shortly.</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl flex items-start gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Unable to Send Enquiry</p>
                    <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500 disabled:opacity-60" 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Mobile number" 
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData(prev => ({ ...prev, phone: val }));
                        if (phoneError && /^[6-9]\d{9}$/.test(val.trim())) {
                          setPhoneError("");
                        }
                      }}
                      onBlur={() => {
                        const val = formData.phone.trim();
                        if (val && !/^[6-9]\d{9}$/.test(val)) {
                          setPhoneError("Please enter a valid 10-digit mobile number.");
                        } else if (!val) {
                          setPhoneError("");
                        }
                      }}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-sky-50/50 rounded-xl border ${phoneError ? "border-rose-400 focus:border-rose-500" : "border-sky-200 focus:border-sky-500"} text-sm focus:outline-none disabled:opacity-60 transition-colors`} 
                    />
                    {phoneError && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{phoneError}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="Email address" 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500 disabled:opacity-60" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Course Interested In</label>
                  <select 
                    required 
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500 disabled:opacity-60"
                  >
                    <option value="">Select Programme</option>
                    <option value="SDHM">Sumedha Diploma in Hotel Management (SDHM)</option>
                    <option value="SVTPHM">Sumedha Vocational Training in Hotel Mgmt (SVTPHM)</option>
                    <option value="SCTPHM">Sumedha Certificate on Hotel Mgmt (SCTPHM)</option>
                    <option value="SDAM">Sumedha Diploma in Aviation Management (SDAM)</option>
                    <option value="SVTP">Sumedha Vocational Training Programme (SVTP)</option>
                    <option value="SCTP">Sumedha Certificate Training Programme (SCTP)</option>
                    <option value="BHM">Degree in Hotel Management (BHM)</option>
                    <option value="BBA Aviation">BBA Aviation Management</option>
                    <option value="MBA">MBA Aviation & Hospitality</option>
                    <option value="BCA">BCA - Data Science & AI</option>
                    <option value="BSC">BSC - Data Science / MPC</option>
                    <option value="BCOM">B.Com - Computers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0b2a68] uppercase tracking-wider mb-1">Message</label>
                  <textarea 
                    rows={3} 
                    placeholder="Ask a question..." 
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-sky-50/50 rounded-xl border border-sky-200 text-sm focus:outline-none focus:border-sky-500 disabled:opacity-60"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#0b2a68] to-[#0284c7] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:shadow-sky-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
