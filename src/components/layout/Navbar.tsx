"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, FileText, Sparkles, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const announcements = [
    { text: "Admissions Open 2026-27 — Degree & Diploma Programmes in Aviation & Hotel Management", href: "/admissions/apply" },
    { text: "100% Placement Record — Over 2000+ Alumni placed in Taj, Marriott, IndiGo & Qatar Airways", href: "/placements" },
    { text: "Flexible 4-Term Fee Installment Options Available for All Courses", href: "/admissions" },
    { text: "State-of-the-Art Practical Lab Facilities & Experienced Aviation & Hotel Faculty in Vizag", href: "/about" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      path: "/about",
      dropdown: [
        { name: "About College", path: "/about" },
        { name: "Accreditations & Affiliations", path: "/about" },
        { name: "Faculty & Team", path: "/faculty" },
        { name: "Grievance & Disclosures", path: "/privacy" }
      ]
    },
    { 
      name: "Programmes", 
      path: "/programmes",
      dropdown: [
        { name: "DHM - Hotel Management", path: "/programmes/dhm" },
        { name: "DAM - Aviation Management", path: "/programmes/dam" },
        { name: "PGDHM - Post Graduate Hospitality", path: "/programmes/pgdhm" },
        { name: "PGDAM - Post Graduate Aviation", path: "/programmes/pgdam" },
        { name: "BHM - Degree in Hotel Mgmt", path: "/programmes/bhm" },
        { name: "BBA Aviation Management", path: "/programmes/bba-aviation" },
        { name: "MBA - Hospitality & Aviation", path: "/programmes/mba" },
      ]
    },
    { 
      name: "Admissions", 
      path: "/admissions",
      dropdown: [
        { name: "Admission Process", path: "/admissions" },
        { name: "Fee Payment Terms", path: "/blog/hotel-management-fee-payment-options-vizag" },
        { name: "Apply Online 2026", path: "/admissions/apply" }
      ]
    },
    { name: "Placements", path: "/placements" },
    { name: "Campus Life", path: "/campus" },
    { name: "Media", path: "/media" },
    { name: "News & Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full flex flex-col z-50">
      {/* 1. Marquee Announcement Ticker (Scrolling Infinite Bar) */}
      <div className="group bg-[#041a4a] text-white text-[11px] sm:text-sm font-semibold py-2 overflow-hidden border-b border-white/10 relative z-30">
        <div className="animate-marquee">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              {announcements.map((item, index) => (
                <span key={index} className="flex items-center">
                  <span className="mx-4 sm:mx-6 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#0B2A68] bg-gradient-to-r from-[#d9a441] via-[#ffe9b0] to-[#d9a441]">
                      <Sparkles className="w-3 h-3 text-[#0B2A68]" /> NEW
                    </span>
                    <Link href={item.href} className="inline-flex items-center gap-1.5 text-white hover:text-[#d9a441] transition-colors font-medium whitespace-nowrap">
                      <FileText className="w-3.5 h-3.5 text-[#d9a441] shrink-0 opacity-80" />
                      {item.text}
                    </Link>
                  </span>
                  <span className="text-[#d9a441]/40 text-lg mx-2">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Sleek Modern Top Institutional Header */}
      <div className="bg-white py-4 px-4 sm:px-8 border-b border-slate-200 shadow-sm relative">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <img 
              src="/images/sumedha-full-logo.png" 
              alt="Sumedha International Institute of Hospitality & Management" 
              className="h-12 sm:h-16 lg:h-20 w-auto max-w-[280px] sm:max-w-[420px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Clean Quick Info Cards (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            
            {/* Location Pill */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0284c7]">Campus Location</span>
                <span className="text-xs font-bold text-[#0B2A68] leading-tight max-w-[220px]">
                  Dwaraka Nagar, Visakhapatnam - 530016
                </span>
              </div>
            </div>

            {/* Helpline Pill */}
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6 lg:pl-8">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d9a441] shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#d9a441]">Admissions Helpline</span>
                <a href="tel:+918886197778" className="text-xs font-black text-[#0B2A68] hover:text-[#0284c7] transition-colors leading-tight">
                  +91 88861 97778 / 779
                </a>
              </div>
            </div>

            {/* Email Pill */}
            <div className="hidden lg:flex items-center gap-3 border-l border-slate-200 pl-8">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">Email Inquiry</span>
                <a href="mailto:admissions@mysumedha.com" className="text-xs font-bold text-[#0B2A68] hover:text-[#0284c7] transition-colors leading-tight">
                  admissions@mysumedha.com
                </a>
              </div>
            </div>

            {/* 14+ Years Badge */}
            <div className="hidden xl:flex shrink-0 items-center border-l border-slate-200 pl-8">
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-sky-50 border border-amber-200/80 shadow-sm text-center">
                <div className="font-serif font-black text-[#0B2A68] text-xl leading-none">14+</div>
                <div className="text-[8px] font-black text-[#d9a441] uppercase tracking-tight mt-0.5">Years Excellence</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Sticky Main Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-gradient-to-r from-[#0B2A68] via-[#0284c7] to-[#0369a1] text-white shadow-lg">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex min-h-[56px] items-center justify-between">
          
          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2 mx-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <li 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.path}
                    className={`relative flex items-center gap-1.5 px-4 py-3 text-[14px] font-semibold tracking-wide transition-all rounded-xl ${
                      isActive ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#d9a441] rounded-full shadow-[0_0_8px_rgba(217,164,65,0.8)]" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 1 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 z-50"
                        >
                          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl p-2.5 text-slate-800 space-y-1">
                            <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                              <span className="text-[10px] font-black uppercase tracking-widest text-[#d9a441]">{link.name} Options</span>
                            </div>
                            {link.dropdown.map((dropLink) => (
                              <Link
                                key={dropLink.name}
                                href={dropLink.path}
                                className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0B2A68] hover:bg-sky-50 rounded-xl transition-colors"
                              >
                                {dropLink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Quick Apply CTA (Right Desktop) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/admissions/apply"
              className="px-6 py-2.5 text-xs font-black uppercase tracking-wider text-[#0B2A68] bg-gradient-to-r from-[#d9a441] to-[#ffe9b0] hover:from-[#b88328] hover:to-[#d9a441] rounded-xl shadow-md transition-all transform hover:scale-105"
            >
              Apply Online 2026
            </Link>
          </div>

          {/* Mobile Header Bar */}
          <div className="lg:hidden flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-2">
              <img src="/images/sumedha-full-logo.png" alt="Sumedha Logo" className="h-8 w-auto object-contain" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0B2A68] border-t border-white/10 px-6 py-4 space-y-2 text-white overflow-hidden"
            >
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-white/10 pb-2">
                  <Link
                    href={link.path}
                    className="py-2 text-sm font-bold text-white hover:text-[#d9a441] flex justify-between items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1.5 text-xs text-white/80 border-l border-[#d9a441]/40 ml-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className="block py-1 hover:text-[#d9a441]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Link
                  href="/admissions/apply"
                  className="w-full text-center py-3 text-xs font-black uppercase bg-gradient-to-r from-[#d9a441] to-[#ffe9b0] text-[#0B2A68] rounded-xl shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Online 2026
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
