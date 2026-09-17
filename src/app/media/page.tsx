"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverCard from "@/components/animations/HoverCard";
import { Image as ImageIcon, Video, X, Play } from "lucide-react";

export default function Media() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  interface MediaGalleryItem {
    title: string;
    category: string;
    type: "image" | "video";
    src: string;
    videoSrc?: string;
  }

  const galleryItems: MediaGalleryItem[] = [
    { title: "Front Office PMS Reception Workstations", category: "Practicals", type: "image", src: "/images/hotel-management-content-1.jpg" },
    { title: "Aviation Flight Cabin Mockup Drill", category: "Aviation", type: "image", src: "/images/www.mysumedha (561).jpg" },
    { title: "Commercial Kitchen Practical Training", category: "Practicals", type: "image", src: "/images/commercial-training-kitchen.jpg" },
    { title: "Campus Building", category: "Campus", type: "image", src: "/images/WhatsApp Image 2026-07-07 at 18.32.44.jpeg" },
    { title: "Smart AV Classroom Interactive Session", category: "Practicals", type: "image", src: "/images/IMG_9009.JPG" },
    { title: "Annual Campus Celebrations & Student Events", category: "Events", type: "image", src: "/images/WhatsApp Image 2026-05-06 at 9.59.37 AM (1).jpeg" },
    { title: "Luxury Hotel Hospitality Practical Training", category: "Practicals", type: "image", src: "/images/WhatsApp Image 2026-05-06 at 9.57.32 AM.jpeg" },
    { title: "Airport Terminal In-Flight Training Drill", category: "Aviation", type: "image", src: "/images/WhatsApp Image 2026-05-06 at 9.59.05 AM.jpeg" },
    { title: "Industrial Visit at Fairfield by Marriott", category: "Events", type: "image", src: "/images/WhatsApp Image 2026-06-06 at 12.12.44.jpeg" },
    { title: "Annual Convocation & Student Felicitation", category: "Events", type: "image", src: "/images/WhatsApp Image 2026-05-06 at 9.59.41 AM.jpeg" },
    // Newly added campus & event photos
    { title: "Classroom Lecture Session", category: "Practicals", type: "image", src: "/images/media/media-photo-1.jpg" },
    { title: "Dignitaries Seated on Stage", category: "Events", type: "image", src: "/images/media/media-photo-2.jpg" },
    { title: "Floral Decorated Ganesha Idol", category: "Events", type: "image", src: "/images/media/media-photo-3.jpg" },
    { title: "Tarang Memento Presentation on Stage", category: "Events", type: "image", src: "/images/media/media-photo-4.jpg" },
    { title: "Certificate of Participation Award Ceremony", category: "Events", type: "image", src: "/images/media/media-photo-5.jpg" },
    { title: "Group Stage Photo at Welcome Ceremony", category: "Events", type: "image", src: "/images/media/media-photo-6.jpg" },
    { title: "Inaugural Ceremonial Lamp Lighting", category: "Events", type: "image", src: "/images/media/media-photo-7.jpg" },
    { title: "Participation Certificate Presentation to Student", category: "Events", type: "image", src: "/images/media/media-photo-8.jpg" },
    { title: "Students & Faculty Stage Group Photo", category: "Events", type: "image", src: "/images/media/media-photo-9.jpg" },
    { title: "Flower Bouquet Presentation to Student", category: "Events", type: "image", src: "/images/media/media-photo-10.jpg" },
    { title: "Students Cultural Stage Performance", category: "Events", type: "image", src: "/images/media/media-photo-11.jpg" },
    { title: "Front Office Reception Desk Practical Training", category: "Practicals", type: "image", src: "/images/media/media-photo-12.png" },
    { title: "Hospitality Students at Reception Desk", category: "Practicals", type: "image", src: "/images/media/media-photo-13.png" },
    { title: "Students in Traditional Welcoming Posture", category: "Practicals", type: "image", src: "/images/media/media-photo-14.png" },
    { title: "Students Seated in Campus Reception Lounge", category: "Campus", type: "image", src: "/images/media/media-photo-15.jpg" },
    { title: "Student Academic Counseling Session", category: "Campus", type: "image", src: "/images/media/media-photo-16.png" },
    { title: "Achievement Trophy Presentation to Student", category: "Events", type: "image", src: "/images/media/media-photo-17.jpg" },
    { title: "Stage Address by Dignitary", category: "Events", type: "image", src: "/images/media/media-photo-18.jpg" },
    { title: "Student Cohort on Stage with Faculty", category: "Events", type: "image", src: "/images/media/media-photo-19.jpg" },
    { title: "Felicitation Bouquet Presentation to Student", category: "Events", type: "image", src: "/images/media/media-photo-20.jpg" },
    { title: "Student Anchors Hosting Stage Event", category: "Events", type: "image", src: "/images/media/media-photo-21.jpg" },
    { title: "Speaker Address from the Podium", category: "Events", type: "image", src: "/images/media/media-photo-22.jpg" },
    { title: "Institute Leadership on Event Stage", category: "Events", type: "image", src: "/images/media/media-photo-23.jpg" },
    { title: "Tarang 2026 Memento Presentation Ceremony", category: "Events", type: "image", src: "/images/media/media-photo-24.jpg" },
    { title: "Student Felicitation with Floral Bouquet", category: "Events", type: "image", src: "/images/media/media-photo-25.jpg" },
    { title: "Dignitary Address to Audience on Stage", category: "Events", type: "image", src: "/images/media/media-photo-26.jpg" },
    { title: "Male Student Cohort Group Stage Photo", category: "Events", type: "image", src: "/images/media/media-photo-27.jpg" },
    { title: "Female Student Cohort Group Stage Photo", category: "Events", type: "image", src: "/images/media/media-photo-28.jpg" },
    { title: "Students Group in Festive Attire on Stage", category: "Events", type: "image", src: "/images/media/media-photo-29.jpg" },
    { title: "Faculty & Families Group Photo on Stage", category: "Events", type: "image", src: "/images/media/media-photo-30.jpg" },
    { title: "Independence Day Campus Celebrations", category: "Events", type: "image", src: "/images/media/media-photo-31.jpg" },
    { title: "Leadership at Independence Day Celebrations", category: "Events", type: "image", src: "/images/media/media-photo-32.jpg" },
    { title: "Address from the Garlanded Podium on Independence Day", category: "Events", type: "image", src: "/images/media/media-photo-33.jpg" },
    { title: "Podium Speech during Campus Celebrations", category: "Events", type: "image", src: "/images/media/media-photo-34.png" },
    { title: "National Flag Hoisting Ceremony on Campus Terrace", category: "Events", type: "image", src: "/images/media/media-photo-35.jpg" },
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

      {/* Official Video Showcase & Campus Videos (Positioned directly ABOVE photo gallery) */}
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
        
        {/* 1. Existing Media Video */}
        <div className="max-w-4xl mx-auto mb-16">
          <HoverCard className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-black">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              controls 
              poster="/images/WhatsApp Image 2026-07-07 at 18.32.44.jpeg"
              className="w-full h-full object-cover"
            >
              <source src="/images/Videos/sumedha-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

        {/* 2 & 3. Newly Added Videos: video1 and video2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video 1 Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-3 sm:p-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
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
          </div>

          {/* Video 2 Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-3 sm:p-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
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
                onClick={() => setActiveLightbox(item.type === "video" && item.videoSrc ? item.videoSrc : item.src)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  {item.type === "video" && item.videoSrc ? (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      poster={item.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={item.videoSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 rounded-full text-[#0B2A68] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      {item.type === "video" ? (
                        <Play className="w-5 h-5 fill-[#0B2A68] text-[#0B2A68] ml-0.5" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-[#0B2A68]" />
                      )}
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#0B2A68]/90 text-white font-extrabold text-[9px] uppercase rounded-full shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    {item.type === "video" && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>}
                    {item.category}
                  </span>
                </div>
                
                <div className="p-5 text-left bg-white flex-grow flex items-center justify-between">
                  <h3 className="font-serif font-bold text-sm text-[#0B2A68] group-hover:text-[#0284c7] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest shrink-0 ml-2">
                    {item.type === "video" ? "WATCH" : "VIEW"}
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
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          {activeLightbox.endsWith(".mp4") ? (
            <video 
              src={activeLightbox} 
              controls 
              autoPlay 
              playsInline 
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border-2 border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img 
              src={activeLightbox} 
              alt="Enlarged Preview" 
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border-2 border-white/20" 
            />
          )}
        </div>
      )}

      <CTAStrip />
    </div>
  );
}
