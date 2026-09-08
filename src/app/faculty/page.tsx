import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import facultyData from "@/data/faculty.json";
import { GraduationCap, Award, Briefcase, BookOpen } from "lucide-react";

export const metadata = {
  title: "Expert Faculty & Mentors | Sumedha IIM Vizag",
  description: "Learn from industry experts, former cabin crew, 5-star hotel executive chefs, and senior hospitality professors at Sumedha IIM.",
};

const facultyPhotos: { [key: string]: string } = {
  "f1": "/images/IMG_9194.JPG",
  "f2": "/images/IMG_9009.JPG",
  "f3": "/images/www.mysumedha (1004).JPG",
  "f4": "/images/WhatsApp Image 2026-05-06 at 9.58.28 AM.jpeg",
};

export default function Faculty() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Our Expert Faculty" 
        subtitle="Learn directly from industry veterans, former airline cabin crew, and 5-star executive chefs." 
      />

      {/* Leadership & Faculty Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
            THE STRENGTH BEHIND OUR SUCCESS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-[#0B2A68] mt-3">
            Meet Our Industry Mentors
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-medium">
            Our professors bring decades of real-world operational experience from international airlines and 5-star luxury hotel chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((f, idx) => {
            const photoSrc = facultyPhotos[f.id] || "/images/hotel-management-content-1.jpg";
            return (
              <AnimatedSection key={f.id} direction="up" delay={idx * 0.08}>
                <HoverCard className="bg-white/95 backdrop-blur-xl rounded-[32px] border border-slate-200/80 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
                  
                  {/* Photo Container */}
                  <div className="h-64 w-full relative overflow-hidden bg-slate-100">
                    <img 
                      src={photoSrc} 
                      alt={f.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A68]/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#0B2A68]/90 text-[#d9a441] text-[10px] font-black uppercase rounded-full shadow-md backdrop-blur-sm border border-white/20">
                      {f.expertise}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 flex flex-col flex-grow text-left justify-between">
                    <div>
                      <h3 className="font-serif font-black text-xl text-[#0B2A68] mb-1 group-hover:text-sky-600 transition-colors">
                        {f.name}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#d9a441] mb-4">
                        {f.designation}
                      </p>

                      <div className="w-10 h-[2px] bg-[#d9a441] mb-4" />

                      <p className="text-slate-600 text-xs leading-relaxed font-normal mb-6">
                        {f.background}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                      <span className="flex items-center gap-1.5 text-sky-700">
                        <Award className="w-4 h-4 text-[#d9a441]" /> Certified Trainer
                      </span>
                      <span className="text-[#0B2A68] font-black">Sumedha IIM</span>
                    </div>

                  </div>

                </HoverCard>
              </AnimatedSection>
            );
          })}
        </div>

      </section>

      {/* Faculty Credentials Banner */}
      <section className="py-20 bg-[#0B2A68] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#d9a441] flex items-center justify-center mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="font-serif font-black text-3xl text-white">15+</div>
              <div className="text-xs text-sky-200 font-bold uppercase mt-1">Full-Time Mentors</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#d9a441] flex items-center justify-center mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="font-serif font-black text-3xl text-white">20+ Yrs</div>
              <div className="text-xs text-sky-200 font-bold uppercase mt-1">Combined Experience</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#d9a441] flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="font-serif font-black text-3xl text-white">100%</div>
              <div className="text-xs text-sky-200 font-bold uppercase mt-1">Industry Certified</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#d9a441] flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="font-serif font-black text-3xl text-white">6</div>
              <div className="text-xs text-sky-200 font-bold uppercase mt-1">Academic Wings</div>
            </div>

          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
