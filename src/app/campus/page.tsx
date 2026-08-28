import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import { Plane, Building, MapPin, MonitorPlay, Coffee, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Campus Gallery & Facilities | Sumedha IIM Vizag",
  description: "Explore Sumedha IIM's state-of-the-art campus, commercial kitchens, mock bar, and aircraft cabin simulation in Dwaraka Nagar, Vizag.",
  keywords: "sumedha iim campus, hotel management institute vizag, hospitality training institute near me, aviation mock cabin vizag"
};

export default function Campus() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Our Campus & Practical Labs" 
        subtitle="State-of-the-art practical training infrastructure designed to simulate real-world aviation and luxury hospitality environments." 
      />

      {/* S1: Location Hero */}
      <section className="py-20 bg-white border-b border-sky-100 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/20 rounded-full blur-[80px] pointer-events-none" />
        <AnimatedSection direction="up" className="max-w-6xl mx-auto px-4 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
            Central Vizag Campus
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-[#0b2a68] mt-3 mb-10">Visit Our Campus in Dwaraka Nagar</h3>
          
          <div className="bg-white p-3 rounded-[32px] shadow-xl border border-sky-200">
            <div className="w-full h-[450px] relative rounded-[24px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3375812555983!2d83.3049957!3d17.728725999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394356da8e53bd%3A0xe549dfff2f7bfec2!2sSumedha%20International%20Institute%20of%20Aviation%20%26%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1787935302028!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Sumedha IIM Location"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* S2: Infrastructure Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <AnimatedSection direction="up">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
              60%+ Practical Focus
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-[#0b2a68] mt-3">World-Class Training Infrastructure</h3>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Plane className="w-7 h-7 text-sky-600" />, title: "Mock Aircraft Cabin", desc: "A fully equipped mock aircraft cabin for realistic in-flight passenger service and safety training." },
            { icon: <Building className="w-7 h-7 text-sky-600" />, title: "Hotel Front-Office PMS Lab", desc: "Simulated front desk operations using industry-standard Property Management Systems (PMS)." },
            { icon: <Coffee className="w-7 h-7 text-sky-600" />, title: "Commercial Culinary & Bakery Lab", desc: "Advanced stainless steel kitchen setups matching 5-star hotel standards for culinary arts & baking." },
            { icon: <MonitorPlay className="w-7 h-7 text-sky-600" />, title: "AV Smart Classrooms", desc: "Digitally enabled classrooms for interactive hospitality presentations and airline flight operations." },
            { icon: <MapPin className="w-7 h-7 text-sky-600" />, title: "Grooming & Personality Studio", desc: "Dedicated studio for professional grooming, cabin crew etiquette, and communication training." },
            { icon: <ShieldCheck className="w-7 h-7 text-sky-600" />, title: "Mock Bar & Beverage Lounge", desc: "Fine-dining restaurant and mock bar setup for table service and beverage management practice." },
          ].map((item, idx) => (
            <AnimatedSection key={idx} direction="up" delay={idx * 0.08}>
              <HoverCard className="p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-sky-100 shadow-md hover:shadow-2xl hover:border-sky-300 transition-all h-full flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 border border-sky-200">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0b2a68] mb-3">{item.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.desc}</p>
              </HoverCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* S3: Branch Highlight */}
      <section className="py-24 bg-gradient-to-r from-[#0b2a68] via-[#0284c7] to-[#0369a1] text-white relative overflow-hidden shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/10 text-sky-200 font-extrabold text-xs uppercase tracking-widest mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" /> Visakhapatnam Hub
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Central Location Advantage</h3>
          <p className="max-w-3xl mx-auto text-sky-100 text-base md:text-lg leading-relaxed mb-8">
            Located at Diamond Park, Dwaraka Nagar, Sumedha IIM is easily accessible from all parts of Visakhapatnam with direct RTC connectivity and close proximity to premier city hotels.
          </p>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
