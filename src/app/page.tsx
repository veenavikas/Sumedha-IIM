"use client";

import { useState } from "react";
import Link from "next/link";
import HeroVideo from "@/components/ui/HeroVideo";
import { 
  ArrowRight, Award, Users, BookOpen, Hotel, Plane, Briefcase, 
  GraduationCap, Play, Star, Calendar, Download, Sparkles, 
  ChevronRight, Trophy, ShieldCheck, Heart, Coffee, Utensils, FileText, FlaskConical, Megaphone
} from "lucide-react";

export default function Home() {
  const [activeFacilityTab, setActiveFacilityTab] = useState("All");

  const statCards = [
    { number: "1500+", label: "Successful Graduates", icon: GraduationCap, color: "from-[#0B2A68] to-sky-700" },
    { number: "100%", label: "Placement Rate", icon: Award, color: "from-[#d9a441] to-amber-600" },
    { number: "14+", label: "Years Excellence", icon: Trophy, color: "from-sky-600 to-blue-800" },
    { number: "50+", label: "Hotel & Airline Partners", icon: Hotel, color: "from-[#0B2A68] to-indigo-900" },
    { number: "15+", label: "Expert Faculty", icon: Users, color: "from-amber-600 to-yellow-600" },
  ];

  const departments = [
    {
      title: "Hotel & Hospitality Management",
      icon: Utensils,
      color: "from-blue-600 to-indigo-700",
      badgeBg: "bg-blue-100 text-blue-800",
      textColor: "text-blue-600",
      desc: "Comprehensive culinary arts, food production, front office management, and housekeeping training with 5-star hotel internships.",
      coursesCount: "3 Programmes Available",
      link: "/programmes"
    },
    {
      title: "Aviation & Cabin Crew",
      icon: Plane,
      color: "from-purple-600 to-indigo-800",
      badgeBg: "bg-purple-100 text-purple-800",
      textColor: "text-purple-600",
      desc: "Simulated aircraft flight cabin training, airport ground handling, passenger customer service, and IATA safety protocols.",
      coursesCount: "3 Programmes Available",
      link: "/programmes"
    },
    {
      title: "Bachelors",
      icon: GraduationCap,
      color: "from-emerald-600 to-teal-700",
      badgeBg: "bg-emerald-100 text-emerald-800",
      textColor: "text-emerald-600",
      desc: "Undergraduate degree programs including BHM, BCA Data Science & AI, B.Sc, and B.Com Computers with hands-on industrial pathways.",
      coursesCount: "5 Programmes Available",
      link: "/programmes"
    },
    {
      title: "Management",
      icon: Briefcase,
      color: "from-amber-500 to-orange-600",
      badgeBg: "bg-amber-100 text-amber-800",
      textColor: "text-amber-600",
      desc: "Industry-focused BBA & MBA management programmes designed for strategic leadership in aviation, hospitality, and corporate business.",
      coursesCount: "2 Programmes Available",
      link: "/programmes"
    }
  ];

  const noticesList = [
    { title: "Online Registration Open for Admissions 2026-27 Batch", date: "AUG 20, 2026", isNew: true, link: "/admissions/apply" },
    { title: "Annual Aviation & Hotel Management Examination Schedule Announced", date: "AUG 18, 2026", isNew: true, link: "/news" },
    { title: "5-Star Hotel Internship Placement Drive for SDHM Final Year", date: "AUG 12, 2026", isNew: false, link: "/placements" },
    { title: "Aviation Cabin Crew Mock Drill & Safety Workshop", date: "AUG 05, 2026", isNew: false, link: "/campus" },
    { title: "Annual Culinary Fest & Mocktail Competition Registration", date: "JUL 28, 2026", isNew: false, link: "/campus" },
  ];

  const calendarsList = [
    { title: "SDHM & BHM Academic Calendar 2026-27", date: "DOWNLOAD PDF", link: "/programmes" },
    { title: "Aviation Management Term II Calendar", date: "DOWNLOAD PDF", link: "/programmes" },
    { title: "Vocational & Certificate Internship Timetable 2026", date: "DOWNLOAD PDF", link: "/programmes" },
    { title: "Examinations & Practical Evaluation Schedule", date: "DOWNLOAD PDF", link: "/programmes" },
    { title: "Industrial Exposure Training Calendar", date: "DOWNLOAD PDF", link: "/programmes" },
    { title: "Annual Campus Sports & Cultural Week", date: "DOWNLOAD PDF", link: "/programmes" },
  ];

  const curriculumList = [
    { title: "SDHM Hotel Management — course structure (R26)", link: "/programmes/sdhm" },
    { title: "SDAM Aviation Management — course structure (R26)", link: "/programmes/sdam" },
  ];

  const syllabusList = [
    { title: "Hospitality Management (BHM) — syllabus (R26)", link: "/programmes/bhm" },
    { title: "Aviation Management (BBA) — syllabus (R26)", link: "/programmes/bba-aviation" },
    { title: "BCA Data Science & AI — syllabus (R26)", link: "/programmes/bca-ds-ai" },
    { title: "Master of Business Administration (MBA) — syllabus (R26)", link: "/programmes/mba" },
  ];

  const whyChooseUsCards = [
    {
      title: "Highly Qualified",
      desc: "Faculty with advanced degrees and rich academic background.",
      icon: GraduationCap
    },
    {
      title: "Teaching Excellence",
      desc: "Committed to delivering excellence in teaching, research and mentorship.",
      icon: Star
    },
    {
      title: "Mentorship and Guidance",
      desc: "Focused on individual growth, career guidance and skill development.",
      icon: Users
    },
    {
      title: "Research and Innovation",
      desc: "Encouraging research, innovation and contribution to society.",
      icon: FlaskConical
    }
  ];

  const facilityTabs = [
    { name: "All", icon: Sparkles },
    { name: "Culinary Labs", icon: Utensils },
    { name: "Aviation Cabin", icon: Plane },
    { name: "Front Office Suite", icon: Hotel },
    { name: "Housekeeping Lab", icon: Heart },
    { name: "Library & IT", icon: BookOpen },
    { name: "Student Amenities", icon: Coffee }
  ];

  const allFacilities = [
    { title: "Commercial Training Kitchen", category: "Culinary Labs", image: "/images/hotel-management-content-1.jpg", desc: "Advanced multi-station commercial kitchen for culinary training." },
    { title: "Flight Cabin Mockup Studio", category: "Aviation Cabin", image: "/images/www.mysumedha (561).jpg", desc: "Simulated aircraft flight cabin for cabin crew emergency drills." },
    { title: "Front Office Reception Suite", category: "Front Office Suite", image: "/images/www.mysumedha (558).jpg", desc: "Opera PMS software workstations and simulated hotel reception." },
    { title: "Model Guest Room Lab", category: "Housekeeping Lab", image: "/images/WhatsApp Image 2026-06-06 at 12.11.59.jpeg", desc: "5-star luxury model suite for housekeeping & laundry operations." },
    { title: "Digital Library & E-Learning", category: "Library & IT", image: "/images/WhatsApp Image 2026-05-06 at 9.59.28 AM.jpeg", desc: "Quiet study zones, hospitality journals, and high-speed e-library." },
    { title: "Mock Bar & Beverage Lab", category: "Culinary Labs", image: "/images/WhatsApp Image 2026-05-06 at 9.57.32 AM.jpeg", desc: "Mixology & beverage service lab for flair bartending and sommelier skills." },
    { title: "Student Cafeteria & Lounge", category: "Student Amenities", image: "/images/WhatsApp Image 2026-06-06 at 12.12.51 (1).jpeg", desc: "Hygienic campus cafeteria serving nutritious meals and coffee." },
    { title: "Air-Conditioned Classrooms", category: "Student Amenities", image: "/images/IMG_9009.JPG", desc: "Smart interactive AV classrooms with ergonomic seating." }
  ];

  const filteredFacilities = activeFacilityTab === "All" 
    ? allFacilities 
    : allFacilities.filter(f => f.category === activeFacilityTab);

  interface SpotlightItem {
    title: string;
    date: string;
    type: string;
    category: string;
    mediaType: "image" | "video";
    src: string;
  }

  const spotlightEvents: SpotlightItem[] = [
    { 
      title: "Annual Culinary & Flair Mixology Competition 2026", 
      date: "SEP 15, 2026", 
      type: "Featured Campus Event", 
      category: "Culinary Arts", 
      mediaType: "image", 
      src: "/images/hotel-management-content-1.jpg" 
    },
    { 
      title: "IndiGo & Qatar Airways Campus Recruitment Drive", 
      date: "AUG 28, 2026", 
      type: "Placement Drive", 
      category: "Aviation", 
      mediaType: "image", 
      src: "/images/WhatsApp Image 2026-05-06 at 9.59.05 AM.jpeg" 
    },
    { 
      title: "Industrial Visit to Fairfield by Marriott Visakhapatnam", 
      date: "AUG 10, 2026", 
      type: "Industry Exposure", 
      category: "Hospitality", 
      mediaType: "image", 
      src: "/images/WhatsApp Image 2026-06-06 at 12.12.44.jpeg" 
    },
    { 
      title: "Annual Convocation & Graduation Day Ceremony", 
      date: "JUL 18, 2026", 
      type: "Convocation", 
      category: "Academic", 
      mediaType: "image", 
      src: "/images/WhatsApp Image 2026-05-06 at 9.59.41 AM.jpeg" 
    },
  ];

  const placementPartners = [
    { name: "Taj Hotels (IHCL)", logo: "/images/recruiters/taj-ihcl.svg" },
    { name: "IndiGo Airlines", logo: "/images/recruiters/indigo.png" },
    { name: "Hilton Worldwide", logo: "/images/recruiters/hilton.svg" },
    { name: "Air India", logo: "/images/recruiters/air-india.svg" },
    { name: "Novotel Accor", logo: "/images/recruiters/novotel.svg" },
    { name: "SpiceJet Airlines", logo: "/images/recruiters/spicejet.svg" },
    { name: "Holiday Inn (IHG)", logo: "/images/recruiters/holiday-inn.svg" },
    { name: "Grand Mercure", logo: "/images/recruiters/grand-mercure.png" },
    { name: "ALL Accor Live Limitless", logo: "/images/recruiters/all-accor.svg" },
    { name: "Wyndham Hotels & Resorts", logo: "/images/recruiters/wyndham.svg" },
    { name: "Fortune Hotels", logo: "/images/recruiters/fortune-hotels.png" },
    { name: "Sarovar Hotels", logo: "/images/recruiters/sarovar-hotels.png" },
    { name: "Royal Orchid Hotels", logo: "/images/recruiters/royal-orchid.webp" },
    { name: "Jet Airways", logo: "/images/recruiters/jet-airways.svg" },
    { name: "HotelF1 Accor", logo: "/images/recruiters/hotelf1.svg" },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      
      {/* 1. HERO SECTION WITH 2-COLUMN LAYOUT (TYPOGRAPHY LEFT + SLIDER RIGHT) & FLOATING STAT CARDS */}
      <section className="relative bg-[#04173d] text-white flex flex-col justify-between">
        
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/WhatsApp Image 2026-07-07 at 18.32.44.jpeg" 
            alt="Sumedha Diamond Park Campus" 
            className="w-full h-full object-cover object-[center_20%] opacity-20 scale-105 transition-transform duration-10000 animate-pulse" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A68]/95 via-[#0B2A68]/90 to-[#031436]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A68] via-transparent to-[#041a4a]/70" />
        </div>

        {/* Hero Grid Container */}
        <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-24 lg:pb-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffe9b0] text-xs font-bold uppercase tracking-widest shadow-xl">
                <Sparkles className="w-4 h-4 text-[#d9a441]" /> Visakhapatnam&apos;s Premier Hospitality & Aviation Institute
              </div>

              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1]">
                BUILD A GLOBAL CAREER IN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9a441] via-[#ffe9b0] to-[#d9a441]">
                  HOSPITALITY & AVIATION
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl font-medium leading-relaxed">
                Master Hotel Management, Flight Cabin Crew, Airport Ground Operations & Culinary Arts with 100% placement support.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/admissions/apply"
                  className="px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#0B2A68] bg-gradient-to-r from-[#d9a441] via-[#ffe9b0] to-[#d9a441] hover:from-[#b88328] hover:to-[#d9a441] rounded-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  APPLY FOR ADMISSIONS 2026 <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/programmes"
                  className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-2xl transition-all hover:scale-105"
                >
                  EXPLORE COURSES
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Video Component */}
            <div className="lg:col-span-5 w-full">
              <HeroVideo />
            </div>

          </div>
        </div>

        {/* 2. FLOATING OVERLAPPING 5 STAT CARDS GRID */}
        <div className="relative z-20 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 -mb-16 sm:-mb-20 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {statCards.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between min-h-[120px] sm:min-h-[140px]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br ${stat.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-[#d9a441] uppercase tracking-wider">OFFICIAL</span>
                  </div>
                  <div>
                    <div className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B2A68] tracking-tight leading-none mb-1">
                      {stat.number}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-600 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* 3. OUR DEPARTMENTS SECTION (4 VERTICAL CARDS WITH BADGE ICONS & COLOR LINKS) */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 font-extrabold text-[10px] uppercase tracking-widest border border-sky-200">
              Academic Wings
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B2A68] mt-2 tracking-tight">
              Our Academic Departments
            </h2>
            <p className="text-slate-600 text-xs md:text-sm mt-2 font-medium">
              Explore specialized career streams structured with practical labs, industrial training, and globally recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/70 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${dept.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <dept.icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full font-black text-[9px] uppercase tracking-wider ${dept.badgeBg}`}>
                      Department
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#0B2A68] mb-2 leading-snug group-hover:text-sky-600 transition-colors">
                    {dept.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal mb-6">
                    {dept.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">{dept.coursesCount}</span>
                  <Link href={dept.link} className={`inline-flex items-center text-[11px] font-black uppercase tracking-wider ${dept.textColor} hover:underline`}>
                    EXPLORE <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. NOTICES & ACADEMIC RESOURCES (WITH MARQUEE SCROLL & LIVE ANIMATION) */}
      <section className="py-24 bg-gradient-to-b from-[#f0f7ff] via-[#e0f2fe] to-[#f0f7ff] border-y border-sky-100 relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0284c7] block mb-2">
              — STAY UPDATED —
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-[#0B2A68] leading-tight">
              Notices & <span className="text-[#d9a441]">Academic Resources</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm mt-2 font-medium">
              Latest notices, calendars, curriculum and downloadable academic resources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Notice Board (With Live Blinking Indicator & Auto-Scroll Ticker) */}
            <div className="bg-white p-7 rounded-[32px] border border-slate-100 shadow-2xl hover:shadow-sky-400/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0B2A68] text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Megaphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif font-bold text-lg text-[#0B2A68] leading-tight">Notice Board</h3>
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">5 live notices</p>
                    </div>
                  </div>
                  <Link href="/news" className="text-xs font-bold text-[#0284c7] hover:underline inline-flex items-center gap-1 group/link">
                    View All <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Vertical Auto-Scrolling Ticker Window */}
                <div className="h-[270px] overflow-hidden relative group/ticker">
                  <div className="space-y-3 animate-marquee-vertical">
                    {[...noticesList, ...noticesList].map((n, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-100/70 rounded-2xl border border-slate-200/60 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 flex items-center justify-between text-xs text-slate-700">
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <FileText className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-[#0284c7] transition-colors" />
                          <Link href={n.link} className="font-semibold text-[#0B2A68] hover:text-[#0284c7] truncate">
                            {n.title}
                          </Link>
                        </div>
                        {n.isNew && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-[#d9a441] to-[#ffe9b0] text-[#0B2A68] text-[8px] font-black uppercase rounded-md shadow-sm shrink-0 animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Academic Calendars */}
            <div className="bg-white p-7 rounded-[32px] border border-slate-100 shadow-2xl hover:shadow-sky-400/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0284c7] text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0B2A68] leading-tight">Academic Calendars</h3>
                      <p className="text-[11px] text-slate-400 font-medium">6 PDFs Available</p>
                    </div>
                  </div>
                  <Link href="/programmes" className="text-xs font-bold text-[#0284c7] hover:underline inline-flex items-center gap-1 group/link">
                    View All <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="space-y-3">
                  {calendarsList.map((c, idx) => (
                    <div key={idx} className="p-3 bg-slate-100/70 rounded-2xl border border-slate-200/60 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 flex items-center justify-between text-xs group/item">
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <Calendar className="w-4 h-4 text-[#0284c7] shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="font-semibold text-[#0B2A68] truncate">{c.title}</span>
                      </div>
                      <Link href={c.link} className="text-slate-400 group-hover/item:text-[#0284c7] group-hover/item:translate-y-0.5 transition-all shrink-0">
                        <Download className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Curriculum & Syllabus */}
            <div className="bg-white p-7 rounded-[32px] border border-slate-100 shadow-2xl hover:shadow-sky-400/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#d9a441] text-[#0B2A68] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5 text-[#0B2A68]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0B2A68] leading-tight">Curriculum & Syllabus</h3>
                      <p className="text-[11px] text-slate-400 font-medium">6 PDFs Available</p>
                    </div>
                  </div>
                  <Link href="/programmes" className="text-xs font-bold text-[#0284c7] hover:underline inline-flex items-center gap-1 group/link">
                    View All <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Sub-Header 1: CURRICULUM */}
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2 block">
                  CURRICULUM
                </span>
                <div className="space-y-2 mb-4">
                  {curriculumList.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-100/70 rounded-2xl border border-slate-200/60 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 flex items-center justify-between text-xs group/item">
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <FileText className="w-4 h-4 text-[#0284c7] shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="font-semibold text-[#0B2A68] truncate">{item.title}</span>
                      </div>
                      <Link href={item.link} className="text-slate-400 group-hover/item:text-[#0284c7] group-hover/item:translate-y-0.5 transition-all shrink-0">
                        <Download className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Sub-Header 2: SYLLABUS */}
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2 block">
                  SYLLABUS
                </span>
                <div className="space-y-2">
                  {syllabusList.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-100/70 rounded-2xl border border-slate-200/60 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 flex items-center justify-between text-xs group/item">
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <BookOpen className="w-4 h-4 text-[#0284c7] shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="font-semibold text-[#0B2A68] truncate">{item.title}</span>
                      </div>
                      <Link href={item.link} className="text-slate-400 group-hover/item:text-[#0284c7] group-hover/item:translate-y-0.5 transition-all shrink-0">
                        <Download className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR FACULTY / WHY CHOOSE US (DEEP NAVY WITH 4 CREAM CARDS - EXACT SCREENSHOT 2 MATCH) */}
      <section className="bg-[#04173d] text-white py-24 shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Grid Dots */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Typography & Features Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#d9a441] block">
                THE STRENGTH BEHIND EVERY SUCCESS
              </span>
              
              <div>
                <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
                  Our <span className="text-[#d9a441]">Faculty</span>
                </h2>
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="w-8 h-[2px] bg-[#d9a441]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d9a441]" />
                  <div className="w-8 h-[2px] bg-[#d9a441]" />
                </div>
              </div>

              <p className="text-sky-100 text-xs md:text-sm leading-relaxed font-medium">
                Our faculty members are the pillars of our institution, dedicated to delivering quality education and nurturing future leaders.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  { text: "Experienced Professors", icon: Users },
                  { text: "Industry Experts", icon: Briefcase },
                  { text: "Research Leaders", icon: GraduationCap }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-white">
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#d9a441]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <Link
                  href="/faculty"
                  className="px-8 py-3.5 border-2 border-[#d9a441] text-white hover:bg-[#d9a441] hover:text-[#0B2A68] font-black text-xs uppercase tracking-widest rounded-full transition-all inline-flex items-center gap-2 hover:scale-105 shadow-lg"
                >
                  KNOW MORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right 4 Cream Cards Grid (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChooseUsCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className="bg-[#fefcf8] text-slate-800 p-8 rounded-[32px] border border-amber-100 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center flex flex-col items-center justify-between group">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-amber-50/80 border border-amber-200 text-[#d9a441] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                        <Icon className="w-7 h-7 text-[#d9a441]" />
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d9a441] mb-4" />
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0B2A68] mb-2">{card.title}</h3>
                      <div className="w-8 h-[2px] bg-[#d9a441]/60 mx-auto mb-3" />
                      <p className="text-slate-600 text-xs leading-relaxed font-normal">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Stat Strip (Exact Screenshot 2 Footer) */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-[#d9a441] flex items-center justify-center border border-white/15">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif font-black text-2xl text-white leading-none">15+</div>
                <div className="text-[10px] font-bold text-sky-200 uppercase mt-0.5">Faculty Members</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-[#d9a441] flex items-center justify-center border border-white/15">
                <Hotel className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif font-black text-2xl text-white leading-none">6</div>
                <div className="text-[10px] font-bold text-sky-200 uppercase mt-0.5">Departments</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-[#d9a441] flex items-center justify-center border border-white/15">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif font-black text-2xl text-white leading-none">100%</div>
                <div className="text-[10px] font-bold text-sky-200 uppercase mt-0.5">Commitment to Excellence</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-[#d9a441] flex items-center justify-center border border-white/15">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif font-black text-2xl text-white leading-none">20+</div>
                <div className="text-[10px] font-bold text-sky-200 uppercase mt-0.5">Years of Experience</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. LIFE AT SUMEDHA ("LIFE AT GOKUL. LIVE VIBRANT." - 100% EXACT REPLICATION OF GOKUL GROUP DIAMOND MOSAIC) */}
      <section className="py-24 bg-[#fbf9f4] border-b border-amber-900/10 relative overflow-hidden">
        
        {/* Background Grid Pattern Lines */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(11,42,104,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,42,104,0.06) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Background Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] lg:text-[280px] font-serif font-black text-[#0B2A68]/[0.04] select-none pointer-events-none tracking-widest uppercase">
          SUMEDHA
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Typography Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#d9a441]">
                <div className="w-6 h-[2px] bg-[#d9a441]" />
                <span>CAMPUS INSIGHTS</span>
              </div>
              
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2A68] tracking-tight leading-[1.05]">
                  LIFE AT SUMEDHA.
                </h2>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#d9a441] tracking-tight leading-[1.05] mt-1">
                  LIVE VIBRANT.
                </h2>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-md">
                Discover a thriving ecosystem of festivals, sports, seminars, and friendships. Sumedha is more than a college — it&apos;s where memories are forged.
              </p>

              <div className="pt-2">
                <Link
                  href="/campus"
                  className="px-7 py-3.5 bg-white border border-slate-200 text-[#0B2A68] font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-2xl transition-all inline-flex items-center gap-3 hover:scale-105"
                >
                  <span>EXPLORE CAMPUS LIFE</span>
                  <div className="w-7 h-7 rounded-full bg-amber-50 text-[#d9a441] flex items-center justify-center shadow-inner">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>

              <div className="pt-6 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 flex items-center gap-3">
                <span>EXPERIENCE</span>
                <span className="text-[#d9a441]">•</span>
                <span>CONNECT</span>
                <span className="text-[#d9a441]">•</span>
                <span>GROW</span>
              </div>
            </div>

            {/* Right True Diamond Rotated Photo Mosaic (7 Cols - Gokul Group Replica) */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[600px] py-10">
              
              {/* Background Circular Rings Radiating Outward */}
              <div className="absolute w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full border border-[#d9a441]/20 pointer-events-none animate-spin-slow" />
              <div className="absolute w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full border border-[#0B2A68]/10 pointer-events-none" />

              {/* Diamond Photo Grid Container (Rotated 45deg) */}
              <div className="relative grid grid-cols-3 gap-3 sm:gap-4.5 transform rotate-45 scale-75 sm:scale-95 md:scale-105 transition-transform duration-500">
                
                {/* Tile 1 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/WhatsApp Image 2026-07-07 at 18.32.44.jpeg" 
                    alt="Diamond Park Campus Building" 
                    className="w-full h-full object-cover object-[center_20%] transform -rotate-45 scale-[1.42] group-hover:scale-[1.55] transition-transform duration-500" 
                  />
                </div>

                {/* Tile 2 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/WhatsApp Image 2026-06-06 at 12.12.44.jpeg" 
                    alt="Fairfield Marriott Industrial Visit" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45] group-hover:scale-[1.6] transition-transform duration-500" 
                  />
                </div>

                {/* Tile 3 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/www.mysumedha (561).jpg" 
                    alt="Aviation Flight Cabin Mockup" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45] group-hover:scale-[1.6] transition-transform duration-500" 
                  />
                </div>

                {/* Tile 4 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/hotel-management-content-1.jpg" 
                    alt="Culinary Arts Training Lab" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45] group-hover:scale-[1.6] transition-transform duration-500" 
                  />
                </div>

                {/* Tile 5 (Center tile - hidden under Gold Seal) */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group opacity-0">
                  <img 
                    src="/images/WhatsApp Image 2026-07-07 at 18.32.44.jpeg" 
                    alt="Center Placeholder" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45]" 
                  />
                </div>

                {/* Tile 6 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/IMG_9009.JPG" 
                    alt="Interactive AV Smart Classroom" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45] group-hover:scale-[1.6] transition-transform duration-500" 
                  />
                </div>

                {/* Tile 7 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/WhatsApp Image 2026-05-06 at 9.59.05 AM.jpeg" 
                    alt="Airport Practical Training" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45] group-hover:scale-[1.6] transition-transform duration-500" 
                  />
                </div>

                {/* Tile 8 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/WhatsApp Image 2026-05-06 at 9.59.37 AM (1).jpeg" 
                    alt="Sumedha Cultural Celebrations" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45] group-hover:scale-[1.6] transition-transform duration-500" 
                  />
                </div>

                {/* Tile 9 */}
                <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-100 group">
                  <img 
                    src="/images/WhatsApp Image 2026-05-06 at 9.57.32 AM.jpeg" 
                    alt="Hospitality Service Practicals" 
                    className="w-full h-full object-cover transform -rotate-45 scale-[1.45] group-hover:scale-[1.6] transition-transform duration-500" 
                  />
                </div>

              </div>

              {/* Central Circular Gold Seal (Exact Replica of Gokul Group Badge) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#f4cd68] via-[#d9a441] to-[#b88328] text-[#0B2A68] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-white/40 flex flex-col items-center justify-center text-center p-3">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] leading-none text-[#0B2A68]">
                      LEARN
                    </span>
                    <span className="font-serif font-black text-lg sm:text-2xl uppercase my-1 text-[#0B2A68] tracking-tight">
                      EXPLORE
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] leading-none text-[#0B2A68]">
                      EXCEL
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. STATE-OF-THE-ART FACILITIES (LIGHT SKY GRADIENT WITH 8 REAL CAMPUS PHOTO CARDS & TAB FILTER) */}
      <section className="py-24 bg-gradient-to-b from-sky-50/70 via-white to-blue-50/50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 font-extrabold text-[10px] uppercase tracking-widest border border-sky-200">
              World-Class Infrastructure
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B2A68] mt-2 mb-1">
              State-of-the-Art Facilities
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-normal">
              Simulated flight cabins, 5-star commercial kitchens, and Property Management System suites.
            </p>
          </div>

          {/* Category Filter Tabs (Matching Gokul Group) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {facilityTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFacilityTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveFacilityTab(tab.name)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                    isActive 
                      ? "bg-[#0B2A68] text-white shadow-md scale-105" 
                      : "bg-white text-slate-700 hover:bg-sky-50 border border-slate-200/80"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#d9a441]' : 'text-sky-600'}`} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* 8 Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFacilities.map((fac, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img src={fac.image} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#0B2A68] text-white font-extrabold text-[9px] uppercase rounded-full shadow-sm">
                    {fac.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="font-serif font-bold text-base text-[#0B2A68] mb-1.5">{fac.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CAMPUS SPOTLIGHT EVENTS */}
      <section className="py-24 bg-[#061a40] text-white relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#ffe9b0] font-extrabold text-[10px] uppercase tracking-widest border border-white/20">
                Media & Happenings
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-2">
                Campus Spotlight & Events
              </h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center text-xs font-black uppercase tracking-wider text-[#d9a441] hover:underline"
            >
              VIEW ALL EVENTS & GALLERY <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {spotlightEvents.map((spot, idx) => (
              <div 
                key={idx} 
                className={`bg-white/10 backdrop-blur-md border border-white/20 shadow-xl group flex flex-col justify-between ${
                  idx === 0 ? 'sm:col-span-2 rounded-[40px] sm:rounded-[50px] p-8' : 'rounded-3xl p-6'
                }`}
              >
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-slate-900">
                  {spot.mediaType === "video" ? (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={spot.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={spot.src} 
                      alt={spot.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  )}
                  {spot.mediaType === "video" && (
                    <div className="absolute inset-0 bg-black/20 pointer-events-none flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#d9a441]/90 text-[#0B2A68] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform backdrop-blur-xs">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#0B2A68] text-white text-[9px] font-black uppercase rounded-full shadow-md flex items-center gap-1.5">
                    {spot.mediaType === "video" && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>}
                    {spot.category}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-[#d9a441] uppercase tracking-wider block mb-1">{spot.date} • {spot.type}</span>
                  <h3 className="font-serif font-bold text-lg text-white mb-2 leading-snug group-hover:text-[#ffe9b0] transition-colors">{spot.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. TOP RECRUITERS & CORPORATE PARTNERS (INFINITE HORIZONTAL MARQUEE TICKER) */}
      <section className="py-16 bg-[#04173d] text-white border-t border-white/10 overflow-hidden relative">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#d9a441] block mb-2">OUR PLACEMENT PARTNERS</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Recruiting 5-Star Hotel Chains & Leading Airlines</h2>
        </div>
        
        {/* Infinite Horizontal Marquee Track */}
        <div className="w-full overflow-hidden relative group/marquee py-6 bg-white/[0.02]">
          <div className="flex animate-marquee gap-8 sm:gap-12 whitespace-nowrap items-center">
            {[...placementPartners, ...placementPartners].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
                <div className="h-14 sm:h-16 w-36 sm:w-44 bg-white/95 hover:bg-white rounded-2xl px-4 py-2 flex items-center justify-center shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 group/logo">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    className={`max-h-9 sm:max-h-11 max-w-[120px] sm:max-w-[140px] w-auto h-auto object-contain transition-transform duration-300 group-hover/logo:scale-105 ${
                      partner.name.includes('JetLite') ? 'brightness-0' : ''
                    }`}
                  />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#d9a441]/50 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BEGIN YOUR JOURNEY / APPLICATION FORM */}
      <section className="py-24 bg-gradient-to-br from-[#0B2A68] via-[#0284c7] to-[#0369a1] text-white relative">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#ffe9b0] font-extrabold text-[10px] uppercase tracking-widest border border-white/20">
                Admissions 2026-27 Open
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
                Begin Your Career Journey with Sumedha IIM
              </h2>
              <p className="text-sky-100 text-xs md:text-sm leading-relaxed font-medium">
                Submit your preliminary application today to reserve your seat for the 2026 batch. Our admissions counselor will guide you through course selection and admission details.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "No Entrance Exam Required — Direct Merit Admissions",
                  "Personalized Career Guidance & Mentorship",
                  "Guaranteed 5-Star Hotel IT & Airport Practical Exposure"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-[#d9a441] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white text-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100">
              <h3 className="font-serif font-bold text-xl text-[#0B2A68] mb-1">Direct Admission Inquiry</h3>
              <p className="text-slate-500 text-xs mb-6">Fill in your details below for instant course brochure & admission guide.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application inquiry submitted successfully!"); }}>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input type="text" required placeholder="Enter student name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#0284c7]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input type="tel" required placeholder="10-digit mobile number" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#0284c7]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Course Interested In *</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#0284c7]">
                    <option value="">Select Course</option>
                    <option value="sdhm">SDHM - Diploma in Hotel Management</option>
                    <option value="svtphm">SVTPHM - Vocational Training in Hotel Mgmt</option>
                    <option value="sctphm">SCTPHM - Certificate in Hotel Management</option>
                    <option value="sdam">SDAM - Diploma in Aviation Management</option>
                    <option value="svtp">SVTP - Vocational Training Programme</option>
                    <option value="sctp">SCTP - Certificate Training Programme</option>
                    <option value="bhm">BHM - Degree in Hotel Management</option>
                    <option value="bba">BBA Aviation Management</option>
                    <option value="mba">MBA - Master of Business Administration</option>
                    <option value="bca">BCA - Data Science & AI</option>
                    <option value="bsc">BSC - Data Science / MPC</option>
                    <option value="bcom">B.Com - Computers</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-[#0B2A68] hover:bg-[#061a40] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all">
                  SUBMIT APPLICATION INQUIRY
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
