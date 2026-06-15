"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imagePath?: string;
}

export default function PageHero({ title, subtitle, imagePath = "/images/hero-campus.png" }: PageHeroProps) {
  return (
    <section className="relative w-full h-[40vh] min-h-[300px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-4">{title}</h1>
        {subtitle && (
          <p className="text-ivory/80 font-sans text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
