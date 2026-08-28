"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import { Sparkles, Image as ImageIcon, Video, X } from "lucide-react";

export default function Media() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const galleryItems = [
    { title: "Commercial Kitchen Practical Training", category: "Practicals", src: "/images/hotel-management-content-1.jpg" },
    { title: "Aviation Flight Cabin Mockup Drill", category: "Aviation", src: "/images/hero-1.jpg" },
    { title: "Front Desk PMS Reception Workstations", category: "Practicals", src: "/images/hero-2.jpg" },
    { title: "Main Diamond Park Campus Building", category: "Campus", src: "/images/front.jpeg" },
    { title: "Digital Library & E-Learning Zone", category: "Campus", src: "/images/hero-campus.png" },
    { title: "Student Cafeteria & Lounge", category: "Campus", src: "/images/IMG_9009.JPG" },
    { title: "Smart AV Classroom Interactive Session", category: "Practicals", src: "/images/IMG_9023.JPG" },
    { title: "Annual Campus Sports & Cultural Meet", category: "Events", src: "/images/IMG_9194.JPG" },
    { title: "Luxury Hotel Suite Housekeeping Lab", category: "Practicals", src: "/images/hotel-management-hero.jpg" },
  ];

  const filteredItems = activeTab === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Media & Photo Gallery" 
        subtitle="Explore life at Sumedha IIM through campus tours, practical labs, and student event showcases." 
      />

      {/* Official Video Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-sky-100 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200 inline-flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-[#0284c7]" /> Official Video Showcase
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-[#0B2A68] mt-3">
            Sumedha IIM Campus Video Tour
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-medium">
            Watch our official video highlighting practical labs, simulated flight cabin training, and student life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <HoverCard className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/7p7mrpLU7bM" 
              title="Sumedha IIM Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </HoverCard>
          
          <div className="mt-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-md text-center">
            <h3 className="font-serif font-black text-[#0B2A68] text-xl mb-1">
              Practical Training & Campus Environment
            </h3>
            <p className="text-slate-600 text-xs font-medium">
              Over 60%+ practical exposure across commercial culinary labs, flight mock cabins, and Property Management System workstations.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Photo Gallery */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-widest border border-sky-200 inline-flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-[#0284c7]" /> Photo Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-[#0B2A68] mt-3">
            Campus Moments & Infrastructure
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {["All", "Practicals", "Campus", "Aviation", "Events"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#0B2A68] text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-sky-50 border border-slate-200/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <AnimatedSection key={idx} direction="up" delay={idx * 0.06}>
              <div 
                onClick={() => setActiveLightbox(item.src)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 rounded-full text-[#0B2A68] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Sparkles className="w-5 h-5 text-[#d9a441]" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#0B2A68]/90 text-white font-extrabold text-[9px] uppercase rounded-full shadow-sm backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                
                <div className="p-5 text-left bg-white flex-grow flex items-center justify-between">
                  <h3 className="font-serif font-bold text-sm text-[#0B2A68] group-hover:text-[#0284c7] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest shrink-0 ml-2">
                    VIEW
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div 
          onClick={() => setActiveLightbox(null)} 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button 
            onClick={() => setActiveLightbox(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={activeLightbox} 
            alt="Enlarged Preview" 
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border-2 border-white/20" 
          />
        </div>
      )}

      <CTAStrip />
    </div>
  );
}
