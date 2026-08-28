"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-[#f8fafc]">
      <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-800 font-extrabold text-[10px] uppercase tracking-widest mb-4">
        Application Error
      </span>
      <h2 className="font-serif font-black text-3xl md:text-4xl text-[#0B2A68] mb-3">
        Something went wrong!
      </h2>
      <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-8">
        An unexpected error occurred while loading this page. Please try refreshing or return to the home page.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#0B2A68] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-[#061a40] transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
