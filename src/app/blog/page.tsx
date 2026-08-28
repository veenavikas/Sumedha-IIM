/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Blog() {
  const allBlogPosts = [
    {
      id: 5,
      title: "Sumedha IIM vs Other Hotel Management Colleges in Vizag: What to Actually Compare",
      date: "August 20, 2026",
      excerpt: "Compare Sumedha IIM with other hotel management colleges in Vizag. Evaluate practical labs, central location, term fee flexibility, and placements for 2026.",
      category: "Hospitality Careers",
      author: "Sumedha IIM",
      slug: "sumedha-iim-vs-other-hotel-management-colleges-vizag",
      image: "/images/august-blog-3-hero.jpg"
    },
    {
      id: 4,
      title: "Aviation Management Jobs & Salary Guide 2026: What Graduates Actually Earn",
      date: "August 11, 2026",
      excerpt: "Curious about aviation management salaries in India for 2026? Discover ground staff, airport manager, and airline executive pay scales at Sumedha IIM.",
      category: "Aviation Careers",
      author: "Sumedha IIM",
      slug: "aviation-management-jobs-salary-guide-2026",
      image: "/images/august-blog-2-hero.png"
    },
    {
      id: 3,
      title: "Hotel Management Fee Payment Options in Vizag: Complete 2026 Guide",
      date: "August 1, 2026",
      excerpt: "Explore flexible term-wise fee payment options (up to 4 terms) for hotel management in Vizag. Contact Sumedha IIM today for personalized fee details!",
      category: "Hospitality Careers",
      author: "Sumedha IIM",
      slug: "hotel-management-fee-payment-options-vizag",
      image: "/images/hotel-management-fee-hero.png"
    },
    {
      id: 2,
      title: "Hotel Management Career in 2026: Scope, Jobs & Data",
      date: "July 16, 2026",
      excerpt: "Is a hotel management career in 2026 worth it? Discover the latest industry data, diverse job roles, salary insights, and top BHM courses in Vizag.",
      category: "Hospitality Careers",
      author: "Sumedha IIM",
      slug: "hotel-management-career-2026-scope-jobs",
      image: "/images/hotel-management-hero.jpg"
    },
    {
      id: 1,
      title: "Aviation Careers in India You Didn't Know You Could Train For in Visakhapatnam",
      date: "July 10, 2026",
      excerpt: "When you think about Aviation Careers in India, what is the first image that flashes across your mind? For most students and parents, it is either a pilot navigating the skies or an elegant cabin crew member greeting passengers at 35,000 feet. But did you know that the aircraft you see in the sky represents only a fraction of a massive global ecosystem?",
      category: "Aviation Careers",
      author: "Sumedha IIM",
      slug: "aviation-careers-in-india-vizag",
      image: "/images/blog-hero.jpeg"
    }
  ];

  const [visiblePosts, setVisiblePosts] = useState(allBlogPosts);

  useEffect(() => {
    const now = new Date().getTime();
    setVisiblePosts(
      allBlogPosts.filter((post) => {
        const postTime = new Date(post.date).getTime();
        return isNaN(postTime) || postTime <= now;
      })
    );
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white via-sky-50/50 to-blue-50/30 overflow-hidden">
      <PageHero 
        title="Official Blog & Career Guides" 
        subtitle="Insights, trends, fee advice, and salary guides in Aviation and Hospitality." 
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <article key={post.id} className="bg-white/90 backdrop-blur-md rounded-3xl border border-sky-100 shadow-md hover:shadow-2xl hover:border-sky-300 transition-all duration-300 group flex flex-col h-full overflow-hidden">
              {post.image && (
                <div className="relative w-full h-52 overflow-hidden bg-sky-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 font-extrabold text-[10px] uppercase tracking-wider rounded-full border border-sky-200">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-sans text-xl font-bold text-[#0b2a68] mb-3 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <div className="flex items-center text-slate-500 text-xs font-semibold mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
                    {post.author}
                  </div>
                </div>
                <p className="text-slate-600 mb-6 flex-grow text-xs leading-relaxed line-clamp-3 font-medium">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[#0b2a68] font-extrabold text-xs uppercase tracking-widest group-hover:text-sky-600 transition-colors mt-auto">
                  Read Full Article <ArrowRight className="ml-1.5 w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
