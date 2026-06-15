"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const images = [
  "/images/hero-campus.png",
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <div className="absolute inset-0 bg-navy/30 z-20 mix-blend-multiply"></div>
              {/* Subtle zoom animation for current slide */}
              <div className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${index === selectedIndex ? 'scale-110' : 'scale-100'}`}>
                <Image 
                  src={src} 
                  alt={`Sumedha Campus ${index + 1}`} 
                  fill 
                  className="object-cover" 
                  priority={index === 0} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 transition-all duration-300 rounded-full ${index === selectedIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/50 hover:bg-white"}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
