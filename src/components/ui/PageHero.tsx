"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imagePath?: string;
}

export default function PageHero({ title, subtitle, imagePath = "/images/hero-campus.png" }: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[380px] h-auto flex items-center justify-center overflow-hidden py-24 md:py-32">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a68]/90 via-[#071d47]/85 to-[#0284c7]/80"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sky-200 font-bold text-xs uppercase tracking-widest mb-4 border border-white/20">
          Sumedha IIM Visakhapatnam
        </span>
        <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-sky-100 font-sans text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
