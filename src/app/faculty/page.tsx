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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facultyData.map((f, idx) => {
            return (
              <AnimatedSection key={f.id} direction="up" delay={idx * 0.05}>
                <HoverCard className="bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] border border-slate-200/80 shadow-md hover:shadow-xl p-7 flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    {/* Header Avatar / Icon */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0B2A68] flex items-center justify-center font-bold text-lg font-serif shadow-sm group-hover:bg-[#0B2A68] group-hover:text-white transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 text-[#d9a441]" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70 text-[10px] font-black uppercase tracking-wider">
                        Faculty
                      </span>
                    </div>

                    {/* Faculty Name */}
                    <h3 className="font-serif font-black text-xl text-[#0B2A68] group-hover:text-sky-600 transition-colors leading-snug mb-2">
                      {f.name}
                    </h3>

                    <div className="w-8 h-[2px] bg-[#d9a441] mb-3" />

                    {/* Qualification directly below name */}
                    <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                      {f.qualification}
                    </p>
                  </div>

                  {/* Footer Strip */}
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span className="flex items-center gap-1.5 text-sky-700">
                      <Award className="w-4 h-4 text-[#d9a441]" /> Faculty Mentor
                    </span>
                    <span className="text-[#0B2A68] font-black">Sumedha IIM</span>
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
