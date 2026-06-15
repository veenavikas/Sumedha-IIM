import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Sumedha IIM expands campus in Visakhapatnam",
      date: "May 15, 2026",
      excerpt: "To accommodate the growing number of aviation and hospitality students, Sumedha IIM inaugurates its new high-tech block featuring advanced mock aircraft cabins.",
      category: "Campus News"
    },
    {
      id: 2,
      title: "100% Placement Record Achieved for 2025 Batch",
      date: "April 28, 2026",
      excerpt: "Top recruiters including IndiGo, Taj Hotels, and Marriott have successfully hired the entire graduating batch of 2025 across all programmes.",
      category: "Placements"
    },
    {
      id: 3,
      title: "Partnership with NSDC renewed for next 5 years",
      date: "March 10, 2026",
      excerpt: "Reaffirming our commitment to skill development in India, our NSDC accreditation has been successfully renewed, offering better opportunities for students.",
      category: "Accreditations"
    },
    {
      id: 4,
      title: "Annual Hospitality Fest 'Atithi 2026' Concludes",
      date: "February 20, 2026",
      excerpt: "The 3-day cultural and academic fest saw participation from over 50 colleges across Andhra Pradesh and Telangana.",
      category: "Events"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero 
        title="News & Events" 
        subtitle="Stay updated with the latest happenings, achievements, and announcements from Sumedha IIM." 
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white p-8 rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#fcfcfc] text-navy font-semibold text-xs uppercase tracking-wider rounded-full border border-border/50">
                  {item.category}
                </span>
                <div className="flex items-center text-slate text-xs uppercase tracking-widest font-semibold">
                  <Calendar className="w-3 h-3 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" />
                  {item.date}
                </div>
              </div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h2>
              <p className="text-slate mb-8 flex-grow">
                {item.excerpt}
              </p>
              <Link href="#" className="inline-flex items-center text-navy font-bold text-sm uppercase tracking-widest group-hover:text-blue-600 transition-colors mt-auto">
                Read Full Story <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
