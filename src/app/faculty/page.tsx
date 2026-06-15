import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import facultyData from "@/data/faculty.json";

export default function Faculty() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero 
        title="Our Faculty" 
        subtitle="Learn directly from industry veterans and experienced professionals." 
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">Leadership</h2>
          <h3 className="font-serif text-4xl font-bold text-navy">Meet the Mentors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((f) => (
            <div key={f.id} className="bg-white rounded-xl shadow-lg border border-border/50 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-64 w-full bg-slate/20 relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-slate/50"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-serif text-xl font-bold text-navy mb-1">{f.name}</h4>
                <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-bold uppercase tracking-wider mb-4">{f.designation}</p>
                
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest text-slate mb-1">Expertise</p>
                  <p className="text-sm font-semibold text-navy">{f.expertise}</p>
                </div>
                
                <p className="text-sm text-slate mt-auto line-clamp-3 border-t border-border/50 pt-4">
                  {f.background}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
