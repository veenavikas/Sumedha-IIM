import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hotel Management Institute in Vizag | Sumedha IIM",
  description: "Sumedha IIM is Visakhapatnam's trusted institute for hotel management & aviation education, known for strong placements since 2010.",
  keywords: "hotel management colleges in vizag, sumedha iim about us, hospitality courses in vizag, aviation institute vizag"
};

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="About Sumedha IIM" 
        subtitle="Visakhapatnam's Gateway to Aviation & Hotel Management Excellence Since 2010" 
      />

      {/* S2: Founding Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-10" />
        <AnimatedSection direction="up" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
              WE ARE SUMEDHA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b2a68] mt-4 mb-6 leading-tight">
              A Decade of Academic Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-base md:text-lg">
              Established in 2010, Sumedha International Institute of Hospitality & Management began with a clear mission: to bridge the gap between academic education and real-world industry requirements. Located centrally in Dwaraka Nagar, Visakhapatnam, we provide industry-aligned training in Hospitality, Aviation, and Airport Operations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10 text-base md:text-lg">
              Equipped with over 60%+ practical lab training, commercial kitchens, mock bar setups, and flight handling simulation, our alumni are placed globally across major airports, international airlines, and luxury 5-star hotel chains.
            </p>
            
            <div className="space-y-4">
              {[
                { year: "2010", text: "Founded in Visakhapatnam, Andhra Pradesh" },
                { year: "2013", text: "State Board & Industry Training Accreditation" },
                { year: "2026", text: "Over 2000+ Alumni Successfully Placed Globally" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-sky-100 shadow-sm">
                  <div className="font-black text-[#0b2a68] text-xl px-3 py-1 bg-sky-100 rounded-xl text-sky-800 shrink-0">{item.year}</div>
                  <div className="text-slate-700 text-sm font-semibold">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[450px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-xl border border-sky-200 group">
             <img src="/images/front.jpeg" alt="Sumedha IIM Campus Building" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a68]/60 via-transparent to-transparent z-10"></div>
             <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg">
               <p className="font-black text-[#0b2a68] text-sm">Diamond Park Campus • Dwaraka Nagar</p>
               <p className="text-xs text-sky-700 font-bold">Visakhapatnam, Andhra Pradesh</p>
             </div>
          </div>
        </AnimatedSection>
      </section>

      {/* S3: Vision & Mission */}
      <section className="py-24 bg-gradient-to-r from-[#0b2a68] via-[#0284c7] to-[#0369a1] text-white text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-300/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px] h-full text-white shadow-lg">
                <span className="text-xs font-black uppercase tracking-widest text-sky-200 block mb-3">Our Core Vision</span>
                <h3 className="text-3xl font-black text-white mb-4">Transforming Lives Through Skill</h3>
                <p className="text-sky-100 leading-relaxed text-lg font-medium">
                  &quot;Transforming India through world-class employability-linked skill training and global career acceleration.&quot;
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px] h-full text-white shadow-lg">
                <span className="text-xs font-black uppercase tracking-widest text-sky-200 block mb-3">Our Core Mission</span>
                <h3 className="text-3xl font-black text-white mb-4">Quality & Accountability</h3>
                <p className="text-sky-100 leading-relaxed text-lg font-medium">
                  &quot;Creating success stories through practical lab mastery, transparent fee options, and 100% placement support.&quot;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* S4: Chairman's Message */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="bg-white/90 backdrop-blur-md rounded-[32px] shadow-xl overflow-hidden flex flex-col md:flex-row border border-sky-100">
          <div className="w-full md:w-2/5 min-h-[350px] relative bg-sky-100">
            <img src="/images/IMG_9194.JPG" alt="Chairman Naga Sundar V" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
            <span className="text-xs font-black text-sky-600 uppercase tracking-widest mb-2">Leadership Message</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#0b2a68] mb-6">Shaping Careers for the Global Industry</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed font-medium italic">
              &quot;We&apos;re delighted that you&apos;re considering Sumedha for your post-secondary education. With a long and proud history in international education, our degree, graduate, diploma, and certificate programs will prepare you for a rewarding career across India and globally. You&apos;ll find Sumedha has a distinctly welcoming environment waiting for you. We are privileged to have students from across the region who come to Sumedha for high quality teaching, outstanding practical facilities and dedicated student placement support.&quot;
            </p>
            <div>
              <h4 className="font-black text-[#0b2a68] text-xl">Naga Sundar V</h4>
              <p className="text-xs text-sky-600 font-extrabold uppercase tracking-widest mt-1">Chairman, Sumedha IIM</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTAStrip />
    </div>
  );
}
