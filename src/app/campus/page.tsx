import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import { Plane, Building, MapPin, MonitorPlay, Coffee } from "lucide-react";

export default function Campus() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc]">
      <PageHero 
        title="Our Campus" 
        subtitle="State-of-the-art facilities designed to simulate real-world aviation and hospitality environments." 
      />

      {/* S1: Location Hero */}
      <section className="py-20 bg-white border-b border-border/50 text-center">
        <h2 className="font-serif text-3xl font-bold text-navy mb-4">Headquarters</h2>
        <p className="text-slate text-lg max-w-2xl mx-auto mb-12">
          4th Floor, Diamond Park, Dwaraka Nagar, Visakhapatnam
        </p>
        <div className="w-full h-[400px] bg-slate/10 relative">
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
      </section>

      {/* S2: Infrastructure */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-[0.2em] mb-4">Facilities</h2>
          <h3 className="font-serif text-4xl font-bold text-navy">World-Class Infrastructure</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Plane className="w-8 h-8" />, title: "Mock Aircraft Cabin", desc: "A fully equipped mock aircraft cabin for realistic in-flight service and safety training." },
            { icon: <Building className="w-8 h-8" />, title: "Hotel Front-Office Lab", desc: "Simulated front desk operations using latest property management software." },
            { icon: <Coffee className="w-8 h-8" />, title: "Food Production Lab", desc: "Advanced kitchen setups matching 5-star hotel standards for culinary arts." },
            { icon: <MonitorPlay className="w-8 h-8" />, title: "AV Classrooms", desc: "Digitally enabled classrooms for interactive learning and presentations." },
            { icon: <MapPin className="w-8 h-8" />, title: "Grooming Studio", desc: "Dedicated space for personality development and professional grooming standards." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="font-serif text-2xl font-bold text-navy mb-3">{item.title}</h4>
              <p className="text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S3 & S4: Vizag Pride & Branch Locations */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">Proud to train Vizag&apos;s next generation</h2>
              <p className="text-ivory/80 leading-relaxed text-lg mb-10">
                Visakhapatnam is a rapidly growing hub for commerce and tourism. We are proud to be headquartered in the City of Destiny, providing its youth with the wings to fly and the skills to host the world.
              </p>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-6 border-b border-blue-500/30 pb-2">Our Network</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Visakhapatnam</h4>
                    <p className="text-sm text-ivory/60">Headquarters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Tirupati</h4>
                    <p className="text-sm text-ivory/60">Branch Campus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Nellore</h4>
                    <p className="text-sm text-ivory/60">Branch Campus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Eluru</h4>
                    <p className="text-sm text-ivory/60">Branch Campus</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-blue-500/30">
              {/* Vizag Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate to-deep/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* S5: Campus Gallery Placeholder */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-navy mb-12">Life at Sumedha IIM</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 8 placeholders for masonry grid */}
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className={`bg-slate/20 rounded-lg overflow-hidden border border-border/50 ${i === 1 || i === 6 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}></div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
