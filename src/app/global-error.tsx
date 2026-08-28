"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 font-sans text-slate-900">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-800 font-extrabold text-[10px] uppercase tracking-widest">
            System Error
          </span>
          <h2 className="font-serif font-black text-2xl text-[#0B2A68]">
            Global Application Error
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed">
            An unhandled system error occurred. Please click below to reload the application.
          </p>
          <button
            onClick={() => reset()}
            className="w-full py-3 bg-[#0B2A68] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-[#061a40] transition-colors"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
