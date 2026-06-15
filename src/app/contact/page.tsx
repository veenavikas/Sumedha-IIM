"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with our admissions team. We are here to help you navigate your career choices." 
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="font-serif text-4xl font-bold text-navy mb-8">Get in Touch</h2>
            <p className="text-slate leading-relaxed mb-12">
              Whether you have a question about our programmes, admissions, or campus facilities, our team is ready to answer all your queries.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full border border-border/50 flex items-center justify-center shrink-0 mr-6 shadow-sm">
                  <Phone className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Phone</h3>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+918886197778" className="text-slate hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 transition-colors font-medium">+91 8886 197 778</a>
                    <a href="tel:+919966319916" className="text-slate hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 transition-colors font-medium">+91 9966 319 916</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full border border-border/50 flex items-center justify-center shrink-0 mr-6 shadow-sm">
                  <Mail className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Email</h3>
                  <a href="mailto:info@mysumedha.com" className="text-slate hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 transition-colors font-medium">info@mysumedha.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full border border-border/50 flex items-center justify-center shrink-0 mr-6 shadow-sm">
                  <MapPin className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Campus Address</h3>
                  <p className="text-slate leading-relaxed">
                    4th Floor, 2nd Line, Diamond Park,<br />
                    Dwarakanagar, Visakhapatnam,<br />
                    Andhra Pradesh 530016
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full border border-border/50 flex items-center justify-center shrink-0 mr-6 shadow-sm">
                  <Clock className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Operating Hours</h3>
                  <p className="text-slate font-medium">Monday &ndash; Sunday: 9:00 AM &ndash; 8:00 PM</p>
                  <p className="text-xs text-slate mt-1 italic">We are open all 7 days of the week.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/919966319916" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#128C7E] transition-colors duration-300 rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-3" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form & Map */}
          <div className="space-y-12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-border/50">
              <h3 className="font-serif text-3xl font-bold text-navy mb-8">Send an Enquiry</h3>
              {submitted ? (
                <div className="bg-[#fcfcfc] p-6 rounded-xl border border-border/50 text-center">
                  <h4 className="font-bold text-navy text-xl mb-2">Message Sent!</h4>
                  <p className="text-slate text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Full Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Phone</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Email</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Programme Interest</label>
                    <input type="text" id="interest" className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wider">Message</label>
                    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-navy text-white font-bold text-sm uppercase tracking-widest hover:bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none hover:text-navy transition-colors duration-300 rounded-full mt-2">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="w-full h-[300px] bg-slate/10 relative rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.126485066928!2d83.3054523153526!3d17.734005187870984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433878b277d3%3A0x63ce9515bd18f2!2sSumedha%20IIM!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sumedha IIM Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
