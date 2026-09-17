"use client";

import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import testimonialsData from "@/data/testimonials.json";
import recruitersData from "@/data/recruiters.json";
import { Briefcase, Building2, Plane, Hotel, MapPin, CheckCircle2, Video } from "lucide-react";

export default function Placements() {
  const aviationPlacements = [
    { name: "M.Ramadevi", company: "M S F", role: "Passanger Service Associate", location: "Bangalore Airport", batch: "2025" },
    { name: "Y.S.Babu", company: "Air India", role: "Ramp Agent", location: "Bangalore airport", batch: "2025" },
    { name: "Sri Lakshmi Durga", company: "M G S", role: "Passanger service associate", location: "Bangalore airport", batch: "2025" },
    { name: "SK Sehanaz", company: "M G S", role: "Passanger service associate", location: "Bangalore airport", batch: "2025" },
    { name: "Ch.Sumith", company: "M G S", role: "Passanger service associate", location: "Bangalore airport", batch: "2025" },
    { name: "V Dhanush", company: "M G S", role: "Passanger service associate", location: "Bangalore airport", batch: "2025" },
    { name: "Mani shankar", company: "Beumer", role: "Baggage Jam Helper", location: "Hyderabad", batch: "2025" },
    { name: "Vijaya Lakshmi", company: "G M R ommullane", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "K.Vandana", company: "G M R ommullane", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "M.Manasa", company: "G M R ommullane", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "M.Bhargavi", company: "G M R ommullane", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "Bonu Gowriswar", company: "creative", role: "Airport security service", location: "Bangalore airport", batch: "2025" },
    { name: "Pydiraju Allam", company: "creative", role: "Airport security service", location: "Bangalore airport", batch: "2025" },
    { name: "Sujan Bavirisetty", company: "creative", role: "Airport security service", location: "Bangalore airport", batch: "2025" },
    { name: "Kiran Sodasi", company: "creative", role: "Airport security service", location: "Bangalore airport", batch: "2025" },
    { name: "Chinnam Deepak", company: "creative", role: "Airport security service", location: "Bangalore airport", batch: "2025" },
    { name: "G.Laharika", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "Ch.Harshini", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "T.pushpanjali", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "Shivaranjani", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "Mercy", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "M.Prema latha", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "K.jyothi", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "S.Neeraja", company: "Tenaga", role: "Cashier", location: "Hyderabad", batch: "2025" },
    { name: "M.Mythri", company: "Tenaga", role: "Cashier", location: "Hyderabad", batch: "2025" },
    { name: "S.Sruthi", company: "G M R", role: "Passanger service associate", location: "Alluri Sita Rama Raju International Airport, Bhogapuram", batch: "2025" },
    { name: "Sindu", company: "G M R", role: "Passanger service associate", location: "Alluri Sita Rama Raju International Airport, Bhogapuram", batch: "2025" },
    { name: "D.Supriya", company: "G M R", role: "Passanger service associate", location: "Hyderabad", batch: "2025" },
    { name: "A.Bhavya sri", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "P.Satya suguna", company: "Tenaga", role: "Cashier", location: "Hyderabad", batch: "2025" },
    { name: "P.Ram sai", company: "Beumer", role: "Baggage Jam Helper", location: "Hyderabad", batch: "2025" },
    { name: "M.Swaroopa", company: "G M R OMMULLANE", role: "Customer service associate", location: "Hyderabad", batch: "2025" },
    { name: "D.Raju", company: "Indigo", role: "Baggage Jam Helper", location: "Bangalore", batch: "2025" },
    { name: "G.pavan", company: "Indigo", role: "Baggage Jam Helper", location: "Bangalore", batch: "2025" },
    { name: "M Ashish", company: "Indigo", role: "Baggage Jam Helper", location: "Bangalore", batch: "2025" },
    { name: "S.Ganesh", company: "Indigo", role: "Baggage Jam Helper", location: "Bangalore", batch: "2025" },
    { name: "D.Nikhil Sai", company: "Indigo", role: "Baggage Jam Helper", location: "Bangalore", batch: "2025" },
    { name: "A.Venkatesh", company: "Indigo", role: "Baggage Jam Helper", location: "Bangalore", batch: "2025" },
    { name: "M.Narendra Kumar", company: "Indigo", role: "Baggage Jam Helper", location: "Bangalore", batch: "2025" }
  ];

  const hotelPlacements = [
    { name: "Abhishek", company: "Radisson Blu", role: "Assistant chef", location: "Visakhapatnam", batch: "2025" },
    { name: "M.Moseh Kumar", company: "Niloufer", role: "service department", location: "Hyderabad", batch: "2025" },
    { name: "P.Krishna Vamsi", company: "Niloufer", role: "service department", location: "Hyderabad", batch: "2025" },
    { name: "Lakshmi Naga Durga", company: "Radisson Blu", role: "Front Office", location: "Visakhapatnam", batch: "2025" },
    { name: "M.Sajeeva Rao", company: "Niloufer", role: "service department", location: "Hyderabad", batch: "2025" },
    { name: "S.Pavan Kalyan", company: "Novotel hotel", role: "Service department", location: "Vijayawada", batch: "2025" },
    { name: "M.Jaswanth Sai Ram", company: "Novotel hotel", role: "Service department", location: "Vijayawada", batch: "2025" },
    { name: "Raj Kumar", company: "Radisson Blu", role: "Kitchen department", location: "Visakhapatnam", batch: "2025" },
    { name: "Durga Anil", company: "Hotel Lemon Tree", role: "Chef", location: "Hyderabad", batch: "2025" },
    { name: "Chinni Tarun Sai", company: "Novotel", role: "service department", location: "vijayawada", batch: "2025" },
    { name: "T Sagar Babu", company: "Radisson Blu", role: "service department", location: "Visakhapatnam", batch: "2025" },
    { name: "K.Poojitha", company: "Novotel", role: "Chef", location: "Vijayawada", batch: "2025" },
    { name: "Lakshmi Devi Bhavani", company: "Radisson Blu", role: "Front Office", location: "Visakhapatnam", batch: "2025" },
    { name: "J Jyoshna", company: "Radisson Blu", role: "F&B Service", location: "Visakhapatnam", batch: "2025" },
    { name: "K Sravani", company: "Radisson Blu", role: "F&B Service", location: "Visakhapatnam", batch: "2025" },
    { name: "G.Uma Sri", company: "Green Park", role: "Service department", location: "Visakhapatnam", batch: "2025" },
    { name: "N Gangadhar", company: "Fairfield by Marriott", role: "Service department", location: "Bangalore", batch: "2025" },
    { name: "Shaik sayeed", company: "Radisson Blu", role: "F&B Service", location: "Visakhapatnam", batch: "2025" },
    { name: "S.Venkateswar Rao", company: "Novotel", role: "F&B Service", location: "vijayawada", batch: "2025" },
    { name: "S.Hari Krishna", company: "Fairfield by Marriott", role: "F&B Service", location: "Bangalore", batch: "2025" }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Placements & Alumni Success" 
        subtitle="100% Placement Assistance. Over 1500+ graduates placed across leading airlines & 5-star hotel chains." 
      />

      {/* S1: Hero Stat */}
      <section className="py-20 text-center bg-white/90 backdrop-blur-md border-b border-sky-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />
        <AnimatedSection direction="up" className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
            PROVEN TRACK RECORD
          </span>
          <h2 className="font-sans text-[80px] sm:text-[120px] md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0b2a68] via-[#0284c7] to-[#0369a1] my-2 leading-none">
            1500+
          </h2>
          <p className="text-xl md:text-2xl text-[#0b2a68] font-black uppercase tracking-wider">Students Placed Successfully</p>
        </AnimatedSection>
      </section>

      {/* S2: Sector breakdown */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HoverCard className="p-10 text-center bg-white/90 backdrop-blur-md border border-sky-100 rounded-[32px] shadow-lg shadow-sky-100/50">
            <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="font-sans text-3xl font-black text-[#0b2a68] mb-3">Aviation Sector</h3>
            <p className="text-slate-600 mb-6 text-sm font-medium">Airports, Airlines, Ground Handling, Cargo & Flight Ops</p>
            <div className="font-sans text-5xl font-black text-sky-600">~60%</div>
          </HoverCard>
          
          <HoverCard className="p-10 text-center bg-white/90 backdrop-blur-md border border-sky-100 rounded-[32px] shadow-lg shadow-sky-100/50">
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="font-sans text-3xl font-black text-[#0b2a68] mb-3">Hospitality Sector</h3>
            <p className="text-slate-600 mb-6 text-sm font-medium">5-Star Luxury Hotels, F&B, Cruise Lines, Resorts</p>
            <div className="font-sans text-5xl font-black text-sky-600">~40%</div>
          </HoverCard>
        </AnimatedSection>
      </section>

      {/* S3: Recruiter Logos Grid */}
      <section className="py-24 bg-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
              Top Corporate Partners
            </span>
            <h3 className="font-sans text-3xl md:text-5xl font-black text-[#0b2a68] mt-3 mb-16">
              Our Active Recruiting Partners
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recruitersData.map((r, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.02}>
                <HoverCard className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex items-center justify-center h-32 group relative overflow-hidden">
                  <img 
                    src={r.logo} 
                    alt={r.name} 
                    title={r.name}
                    className={`w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                      r.name.includes('Jet Airways') ? 'max-h-20 max-w-[92%]' : 'max-h-16 max-w-[85%]'
                    } ${
                      r.name === 'JetLite' ? 'brightness-0' : ''
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement && !target.parentElement.querySelector('span')) {
                        const span = document.createElement('span');
                        span.className = 'font-sans font-bold text-base text-[#0b2a68] text-center tracking-wide';
                        span.innerText = r.name;
                        target.parentElement.appendChild(span);
                      }
                    }}
                  />
                </HoverCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* S4: Student Placement Records & Videos */}
      <section className="py-24 bg-gradient-to-b from-sky-50/70 via-white to-blue-50/50 border-b border-sky-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-widest border border-emerald-200">
              Placement Achievements
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-[#0b2a68] mt-3 mb-4">
              Our Placed Students
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              Celebrating our students who got placed directly from Sumedha classrooms into leading airline, airport, and luxury 5-star hotel careers.
            </p>
          </div>

          {/* Placement Achievement Videos */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="px-4 py-1 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200 inline-flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#0284c7]" /> Placement Achievement Videos
              </span>
              <h3 className="font-sans text-2xl md:text-3xl font-black text-[#0b2a68] mt-2">
                Placed Students & Selection Celebrations
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
                Watch video highlights of our students who got placed celebrating their career milestones and campus selections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Placement Video 1 Card */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner mb-4">
                  <video 
                    controls 
                    muted 
                    playsInline 
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/Videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider border border-emerald-200 inline-block mb-2">
                    Placed Students Video 1
                  </span>
                  <h4 className="font-sans font-bold text-lg text-[#0b2a68] mb-1.5 leading-snug">
                    Placed Students Felicitation & Offer Celebrations
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Celebrating Sumedha students receiving their appointment letters and successful placement milestone achievements.
                  </p>
                </div>
              </div>

              {/* Placement Video 2 Card */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner mb-4">
                  <video 
                    controls 
                    muted 
                    playsInline 
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/Videos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider border border-emerald-200 inline-block mb-2">
                    Placed Students Video 2
                  </span>
                  <h4 className="font-sans font-bold text-lg text-[#0b2a68] mb-1.5 leading-snug">
                    Aviation & Hospitality Campus Placement Drive
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Highlights of our students successfully selected by leading airlines, airport ground handlers, and luxury hotel recruiters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Aviation */}
          <div className="mb-20">
            <AnimatedSection direction="up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0b2a68] text-white flex items-center justify-center shadow-md">
                  <Plane className="w-6 h-6 text-[#d9a441]" />
                </div>
                <div>
                  <h3 className="font-sans text-2xl md:text-3xl font-black text-[#0b2a68]">Aviation Placed Students</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Students successfully placed in airport operations, airlines, ground handling, and passenger services.</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {aviationPlacements.map((student, idx) => (
                <AnimatedSection key={idx} direction="up" delay={idx * 0.02}>
                  <HoverCard className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      {/* Placed Status Badge & Batch */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Placed
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          Batch: {student.batch}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-sans font-bold text-lg text-[#0b2a68] group-hover:text-[#0284c7] transition-colors leading-snug">
                          {student.name}
                        </h4>
                        <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs shrink-0">
                          {student.name.charAt(0)}
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Placed Role</span>
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-sky-50 text-sky-900 border border-sky-200/70">
                          {student.role}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs">
                      <div className="flex items-start gap-2 text-slate-700 font-semibold">
                        <Building2 className="w-4 h-4 text-[#d9a441] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Placed Company</span>
                          <span className="text-slate-900 font-bold">{student.company}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-500 font-medium">
                        <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Work Location</span>
                          <span className="text-slate-700">{student.location}</span>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Section 2: Hotel Management */}
          <div>
            <AnimatedSection direction="up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0b2a68] text-white flex items-center justify-center shadow-md">
                  <Hotel className="w-6 h-6 text-[#d9a441]" />
                </div>
                <div>
                  <h3 className="font-sans text-2xl md:text-3xl font-black text-[#0b2a68]">Hotel Management Placed Students</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Students successfully placed across 5-star hotels, luxury resorts, commercial culinary kitchens, and F&B service.</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {hotelPlacements.map((student, idx) => (
                <AnimatedSection key={idx} direction="up" delay={idx * 0.02}>
                  <HoverCard className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      {/* Placed Status Badge & Batch */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Placed
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          Batch: {student.batch}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-sans font-bold text-lg text-[#0b2a68] group-hover:text-[#0284c7] transition-colors leading-snug">
                          {student.name}
                        </h4>
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                          {student.name.charAt(0)}
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Placed Role</span>
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/70">
                          {student.role}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs">
                      <div className="flex items-start gap-2 text-slate-700 font-semibold">
                        <Building2 className="w-4 h-4 text-[#d9a441] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Placed Hotel / Company</span>
                          <span className="text-slate-900 font-bold">{student.company}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-500 font-medium">
                        <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Work Location</span>
                          <span className="text-slate-700">{student.location}</span>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* S5: Alumni Spotlight */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200">
            Success Stories
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-[#0b2a68] mt-3">What Our Alumni Say</h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <AnimatedSection key={t.id} direction="up" delay={idx * 0.1}>
              <HoverCard className="p-8 h-full bg-white/90 backdrop-blur-md rounded-3xl border border-sky-100 shadow-md">
                <TestimonialCard {...t} />
              </HoverCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
