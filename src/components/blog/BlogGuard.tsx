"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

interface BlogGuardProps {
  publishDate: string;
  children: React.ReactNode;
}

export default function BlogGuard({ publishDate, children }: BlogGuardProps) {
  const [isPublished, setIsPublished] = useState<boolean | null>(null);

  useEffect(() => {
    const postTime = new Date(publishDate).getTime();
    const nowTime = new Date().getTime();

    // If valid date and in the future, it's not published yet
    if (!isNaN(postTime) && postTime > nowTime) {
      setIsPublished(false);
    } else {
      setIsPublished(true);
    }
  }, [publishDate]);

  // Prevent flash during initial hydration
  if (isPublished === null) {
    return <div className="min-h-screen bg-[#fcfcfc]" />;
  }

  if (!isPublished) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full bg-white rounded-2xl border border-border/50 p-8 text-center shadow-lg">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-navy mb-3">
            Article Scheduled
          </h2>
          <p className="text-slate text-sm mb-6 leading-relaxed">
            This blog article is scheduled to be published on{" "}
            <span className="font-bold text-navy">{publishDate}</span>. Please check back then!
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
