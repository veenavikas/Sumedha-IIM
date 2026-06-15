import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc]">
      <PageHero 
        title="About Sumedha IIM" 
        subtitle="Forging Visionary Leaders Since 2010" 
      />

      {/* S2: Founding Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">Our Legacy</h2>
            <h3 className="font-serif text-4xl font-bold text-navy mb-6">A Decade of Excellence</h3>
            <p className="text-slate leading-relaxed mb-8">
              Established in 2010, Sumedha IIM Visakhapatnam began with a single vision: to bridge the gap between academic education and industry requirements in the fast-growing sectors of Aviation and Hospitality. Over the years, we have grown from a single campus in Vizag to multiple training centres across Andhra Pradesh.
            </p>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded border border-border/50 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-navy">2010</div>
                  </div>
                  <div className="text-slate text-sm">Founded in Visakhapatnam</div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded border border-border/50 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-navy">2013</div>
                  </div>
                  <div className="text-slate text-sm">NSDC Approved</div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded border border-border/50 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-navy">2018</div>
                  </div>
                  <div className="text-slate text-sm">Expanded to Tirupati & Nellore</div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded border border-border/50 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-navy">2025</div>
                  </div>
                  <div className="text-slate text-sm">500+ Alumni successfully placed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-border/50">
             <div className="absolute inset-0 bg-navy/10 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-bl from-cream/80 to-slate/20"></div>
          </div>
        </div>
      </section>

      {/* S3: Vision & Mission */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-xl shadow-2xl relative border-t-4 border-blue-500">
              <h3 className="font-serif text-3xl font-bold text-navy mb-6">Our Vision</h3>
              <p className="text-slate leading-relaxed text-lg">
                &quot;Transforming India through world-class employability-linked skill training.&quot;
              </p>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-2xl relative border-t-4 border-blue-500">
              <h3 className="font-serif text-3xl font-bold text-navy mb-6">Our Mission</h3>
              <p className="text-slate leading-relaxed text-lg">
                &quot;Creating success stories through skill and quality training across our network of institutes.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Chairman&apos;s Message */}
      <section className="py-24 bg-[#fcfcfc] border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 bg-slate/20 min-h-[400px] relative">
              {/* Chairman Photo Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy to-slate/50"></div>
            </div>
            <div className="w-full md:w-3/5 p-10 md:p-14 flex flex-col justify-center relative">
              <div className="absolute top-10 left-10 text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500/30 leading-none">&quot;</div>
              <h3 className="font-serif text-3xl font-bold text-navy mb-6 relative z-10">Chairman&apos;s Message</h3>
              <p className="font-serif italic text-lg text-slate mb-8 leading-relaxed relative z-10">
                At Sumedha IIM, we don&apos;t just teach syllabus; we shape careers. In an era where the aviation and hospitality sectors are expanding rapidly, our goal is to ensure that our students are not just employable, but are the first choice for global recruiters.
              </p>
              <div>
                <h4 className="font-bold text-navy text-lg">Mr. P. V. Ramana</h4>
                <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold uppercase tracking-wider">Chairman, Sumedha IIM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S5: NSDC */}
      <section className="py-20 bg-[#fcfcfc] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">Accreditations</h2>
          <h3 className="font-serif text-3xl font-bold text-navy mb-12">Approved & Recognized</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="p-6 bg-white border border-border/50 rounded-xl shadow-sm">
              <p className="font-bold text-navy text-xl">NSDC Approved</p>
            </div>
            <div className="p-6 bg-white border border-border/50 rounded-xl shadow-sm">
              <p className="font-bold text-navy text-xl">Skill India Partner</p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
