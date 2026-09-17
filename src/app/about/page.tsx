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

      {/* S2: Founding Story & Our Campuses */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-10" />
        <AnimatedSection direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founding Story & 2010 Timeline */}
          <div className="lg:col-span-5">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
              WE ARE SUMEDHA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b2a68] mt-4 mb-6 leading-tight">
              A Decade of Academic Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-base md:text-lg">
              Established in 2010, Sumedha International Institute of Hospitality & Management began with a clear mission: to bridge the gap between academic education and real-world industry requirements. Located centrally in Dwaraka Nagar Campus, Visakhapatnam, we provide industry-aligned training in Hospitality, Aviation, and Airport Operations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10 text-base md:text-lg">
              Equipped with over 60%+ practical lab training, commercial kitchens, mock bar setups, and flight handling simulation, our alumni are placed globally across major airports, international airlines, and luxury 5-star hotel chains.
            </p>
            
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-sky-100 shadow-sm">
              <div className="font-black text-[#0b2a68] text-xl px-3 py-1 bg-sky-100 rounded-xl text-sky-800 shrink-0">2010</div>
              <div className="text-slate-700 text-sm font-semibold">Founded in Visakhapatnam, Andhra Pradesh</div>
            </div>
          </div>

          {/* Right Column: Two Campus Photos Side-by-Side (Fully Zoomed Out) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              
              {/* Campus 1: Diamond Park Campus */}
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-sky-200 bg-white flex flex-col">
                <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] bg-slate-950 flex items-center justify-center p-2">
                  <img 
                    src="/images/diamond-park-campus-building.jpg" 
                    alt="Diamond Park Campus Building" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="p-4 bg-white border-t border-sky-100">
                  <p className="font-black text-[#0b2a68] text-sm">Diamond Park Campus</p>
                  <p className="text-xs text-sky-700 font-bold">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>

              {/* Campus 2: Dwaraka Nagar Campus */}
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-sky-200 bg-white flex flex-col">
                <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] bg-slate-950 flex items-center justify-center p-2">
                  <img 
                    src="/images/diamond-park-campus.jpg" 
                    alt="Dwaraka Nagar Campus Building" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="p-4 bg-white border-t border-sky-100">
                  <p className="font-black text-[#0b2a68] text-sm">Dwaraka Nagar Campus</p>
                  <p className="text-xs text-sky-700 font-bold">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>

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
                  &quot;Creating success stories through practical lab mastery, dedicated career mentorship, and 100% placement support.&quot;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* S4: Leadership Messages */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedSection direction="up" className="bg-white/90 backdrop-blur-md rounded-[32px] shadow-xl overflow-hidden flex flex-col md:flex-row border border-sky-100">
          
          {/* Chairman Photo on the Left (Unchanged) */}
          <div className="w-full md:w-2/5 min-h-[350px] relative bg-sky-100">
            <img 
              src="/images/IMG_9194.JPG" 
              alt="Chairman &amp; Managing Director Naga Sundar Viswanathapalli" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Right-Side Leadership Message with Clean Alignment */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
            <span className="text-xs font-black text-sky-600 uppercase tracking-widest mb-2">Leadership Message</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#0b2a68] mb-6">Shaping Careers for the Global Industry</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed font-medium italic text-justify">
              &quot;Welcome to Sumedha International Institute of Hospitality and Management (SIIHM). At Sumedha, our vision is to build an institution where education creates confidence, skills create opportunities, and values create responsible professionals. Through our programmes in Hotel Management, Aviation, BBA, B.Com (Computers), BSc Computers, and MBA, we strive to provide students with the knowledge, practical exposure, professional skills, and industry orientation required to succeed in a rapidly changing world. We believe that every student carries immense potential, and our responsibility is to provide the right environment, guidance, opportunities, and inspiration to transform that potential into achievement. Our commitment is to nurture professionals who are competent, confident, ethical, and future-ready. At SIIHM, we don&apos;t just prepare students for careers—we prepare them for a successful future. I warmly welcome you to the Sumedha family and wish every student a rewarding journey of learning, growth, and excellence.&quot;
            </p>
            <div>
              <h4 className="font-black text-[#0b2a68] text-xl">Naga Sundar Viswanathapalli</h4>
              <p className="text-xs text-sky-600 font-extrabold uppercase tracking-widest mt-1">Chairman &amp; Managing Director, SIIHM</p>
            </div>
          </div>

        </AnimatedSection>

        {/* CEO Message Card */}
        <AnimatedSection direction="up" delay={0.1} className="bg-white/90 backdrop-blur-md rounded-[32px] shadow-xl overflow-hidden flex flex-col md:flex-row border border-sky-100">
          
          {/* CEO Photo on the Left */}
          <div className="w-full md:w-2/5 min-h-[350px] relative bg-sky-100">
            <img 
              src="/images/dr-m-govinda-raju-ceo.jpg" 
              alt="CEO Dr. M. Govinda Raju" 
              className="absolute inset-0 w-full h-full object-cover object-top" 
            />
          </div>

          {/* Right-Side Leadership Message with Clean Alignment */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
            <span className="text-xs font-black text-sky-600 uppercase tracking-widest mb-2">Leadership Message</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#0b2a68] mb-6">Transforming Aspirations into Successful Careers</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed font-medium italic text-justify">
              &quot;Welcome to SIIHM — a place where aspirations are transformed into capabilities and successful careers. At SIIHM, we are dedicated to nurturing industry-ready professionals, confident leaders, and responsible global citizens through quality education, practical learning, professional discipline, and continuous skill development. Our programmes in Hotel Management, Aviation, BBA, B.Com (Computers), and MBA are thoughtfully designed to connect academic knowledge with real-world industry expectations, empowering students to build strong skills and face the future with confidence. We believe that true education extends beyond the classroom by developing competence, character, communication, leadership, creativity, and the courage to innovate. With a commitment to excellence and holistic development, our vision is to inspire excellence, unlock potential, and create successful futures for every student. I warmly welcome you to the Sumedha family and wish you a rewarding and successful journey ahead.&quot;
            </p>
            <div>
              <h4 className="font-black text-[#0b2a68] text-xl">Dr. M. Govinda Raju</h4>
              <p className="text-xs text-sky-600 font-extrabold uppercase tracking-widest mt-1">CEO, SIIHM</p>
            </div>
          </div>

        </AnimatedSection>
      </section>

      <CTAStrip />
    </div>
  );
}
