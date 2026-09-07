"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    src: "/images/hotel-management-content-1.jpg",
    title: "Commercial Culinary Labs",
    tag: "PRACTICAL TRAINING",
  },
  {
    src: "/images/hero-1.jpg",
    title: "Flight Cabin Mockup Studio",
    tag: "AVIATION ACADEMY",
  },
  {
    src: "/images/hero-2.jpg",
    title: "5-Star Hotel Opera PMS Suite",
    tag: "HOSPITALITY LAB",
  },
  {
    src: "/images/www.mysumedha (1004).JPG",
    title: "State-of-the-Art Visakhapatnam Campus",
    tag: "DWARAKA NAGAR VIZAG",
  },
  {
    src: "/images/www.mysumedha (1008).JPG",
    title: "State-of-the-Art Practical Training Labs",
    tag: "INDUSTRY ACCREDITED",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-[380px] sm:h-[440px] lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group bg-navy-dark">
      {/* Embla Viewport */}
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full w-full" key={index}>
              {/* Image */}
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              
              {/* Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04173d] via-[#04173d]/30 to-transparent" />

              {/* Slide Caption Badge */}
              <div className="absolute bottom-10 left-6 right-6 z-20">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#d9a441] text-[#0B2A68] text-[10px] font-black uppercase tracking-wider mb-2 shadow-lg">
                  <Sparkles className="w-3 h-3" /> {slide.tag}
                </span>
                <h3 className="font-serif font-black text-xl sm:text-2xl text-white drop-shadow-md">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#d9a441] text-white hover:text-[#0B2A68] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-30 shadow-lg backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#d9a441] text-white hover:text-[#0B2A68] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-30 shadow-lg backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-8 bg-[#d9a441]"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
