import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News & Campus Events | Sumedha IIM Vizag",
  description: "Stay updated with campus news, placement achievements, and event announcements at Sumedha IIM Visakhapatnam.",
  keywords: "sumedha iim news, campus events vizag, hotel management placements vizag"
};

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Sumedha IIM Expands Advanced Practical Labs in Visakhapatnam",
      date: "May 15, 2026",
      excerpt: "To accommodate growing student enrollment in aviation & hotel management, Sumedha IIM inaugurates new high-tech commercial kitchens and mock aircraft cabin setups.",
      category: "Campus News"
    },
    {
      id: 2,
      title: "100% Placement Milestone Achieved for 2025 Batch",
      date: "April 28, 2026",
      excerpt: "Leading recruiters including IndiGo, Taj Hotels, Marriott, and Çelebi Ground Handling have hired 100% of eligible graduates across all programmes.",
      category: "Placements"
    },
    {
      id: 3,
      title: "Industry Training Partnership & Placement Expansion",
      date: "March 10, 2026",
      excerpt: "Reaffirming our commitment to employability-linked skill development, our industry network expands with new leading airline and luxury hospitality partners.",
      category: "Partnerships"
    },
    {
      id: 4,
      title: "Annual Hospitality Fest 'Atithi 2026' Concludes",
      date: "February 20, 2026",
      excerpt: "The 3-day cultural and culinary competition saw participation from over 50 institutes across Andhra Pradesh & Telangana.",
      category: "Events"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Campus News & Announcements" 
        subtitle="Stay updated with the latest achievements, events, and announcements from Sumedha IIM." 
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-sky-100 shadow-md hover:shadow-xl hover:border-sky-300 transition-all group flex flex-col h-full border-l-4 border-l-sky-500">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-sky-50 text-sky-700 font-extrabold text-[10px] uppercase tracking-wider rounded-full border border-sky-200">
                  {item.category}
                </span>
                <div className="flex items-center text-slate-500 text-xs uppercase tracking-wider font-semibold">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
                  {item.date}
                </div>
              </div>
              <h2 className="font-sans text-xl font-bold text-[#0b2a68] mb-3 group-hover:text-sky-600 transition-colors">
                {item.title}
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow font-medium">
                {item.excerpt}
              </p>
              <Link href="/admissions/apply" className="inline-flex items-center text-[#0b2a68] font-extrabold text-xs uppercase tracking-widest group-hover:text-sky-600 transition-colors mt-auto">
                Read Details <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
