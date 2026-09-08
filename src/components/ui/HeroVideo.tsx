"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay attempted:", err);
      });
    }
  }, []);

  return (
    <div className="relative h-[380px] sm:h-[440px] lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group bg-[#04173d]">
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/WhatsApp Image 2026-07-07 at 18.32.44.jpeg"
        className="w-full h-full object-cover object-center block"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      >
        <source src="/images/Videos/sumedha-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for Text & Badge Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04173d]/90 via-[#04173d]/25 to-transparent pointer-events-none" />

      {/* Slide / Video Caption Badge Overlay */}
      <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d9a441] text-[#0B2A68] text-[10px] font-black uppercase tracking-wider mb-2 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" /> CAMPUS EXPERIENCE
        </span>
        <h3 className="font-serif font-black text-xl sm:text-2xl text-white drop-shadow-md leading-tight">
          Sumedha International Institute
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-sm mt-0.5">
          Aviation & Hospitality Campus Tour
        </p>
      </div>
    </div>
  );
}
