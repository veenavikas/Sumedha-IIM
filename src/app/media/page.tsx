import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import { Play } from "lucide-react";

export default function Media() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero 
        title="Media Gallery" 
        subtitle="Explore life at Sumedha IIM through our photo gallery and videos." 
      />

      {/* Videos Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-border/50">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">Sumedha on YouTube</h2>
          <h3 className="font-serif text-4xl font-bold text-navy">Campus Tour & Highlights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map((v) => (
            <div key={v} className="bg-white rounded-xl shadow-md border border-border/50 overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative aspect-video bg-slate/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none/90 text-navy rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-bold text-navy mb-2 group-hover:text-blue-600 transition-colors">Campus Tour 2024</h4>
                <p className="text-sm text-slate">Experience the state-of-the-art facilities at our Visakhapatnam headquarters.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">Photo Gallery</h2>
          <h3 className="font-serif text-4xl font-bold text-navy">Moments Captured</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            "aspect-square", "aspect-video", "aspect-[3/4]", "aspect-[4/3]", 
            "aspect-square", "aspect-[3/4]", "aspect-video", "aspect-[4/3]", "aspect-square"
          ].map((aspect, i) => (
            <div key={i} className={`relative bg-slate/20 rounded-xl overflow-hidden shadow-sm border border-border/50 break-inside-avoid ${aspect} group`}>
               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
