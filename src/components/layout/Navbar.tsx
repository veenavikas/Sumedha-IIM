"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Programmes", 
      path: "/programmes",
      dropdown: [
        { name: "All Programmes", path: "/programmes" },
        { name: "BBA Aviation", path: "/programmes/bba-aviation" },
        { name: "BHM", path: "/programmes/bhm" },
        { name: "MBA", path: "/programmes/mba" },
        { name: "PGDAM", path: "/programmes/pgdam" },
        { name: "DAM", path: "/programmes/dam" },
        { name: "PGDHM", path: "/programmes/pgdhm" },
        { name: "DHM", path: "/programmes/dhm" },
      ]
    },
    { 
      name: "Admissions", 
      path: "/admissions",
      dropdown: [
        { name: "Admission Process", path: "/admissions" },
        { name: "Apply Online", path: "/admissions/apply" }
      ]
    },
    { name: "Placements", path: "/placements" },
    { name: "Campus", path: "/campus" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col items-center px-4 sm:px-6 lg:px-8 transition-all duration-500 pt-4">


      {/* Main Floating Pill Navbar */}
      <div 
        className={`w-full max-w-7xl transition-all duration-500 rounded-2xl lg:rounded-full border ${
          isScrolled 
            ? "bg-navy/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-white/10 py-2.5" 
            : "bg-navy/95 backdrop-blur-md border-white/20 shadow-lg py-3"
        }`}
      >
        <div className="px-4 lg:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center transition-transform hover:scale-105">
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10">
              <Image src="/images/image.png" alt="Sumedha IIM Logo" width={275} height={70} className="h-12 lg:h-14 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center px-4 py-2 cursor-pointer rounded-full hover:bg-white/10 transition-colors">
                    <Link 
                      href={link.path}
                      className={`text-[15px] font-medium transition-colors ${
                        pathname.startsWith(link.path) && link.path !== '/' ? "text-gold" : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 ml-1.5 text-white/50 group-hover:text-white transition-colors group-hover:-rotate-180 duration-300" />
                    
                    {/* Dropdown Menu - Modernized */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-2xl overflow-hidden border border-white/20 p-2 transform origin-top scale-95 group-hover:scale-100 transition-transform duration-300">
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.name}
                            href={dropLink.path}
                            className="block px-4 py-2.5 text-sm font-medium text-navy/80 hover:bg-slate-100 hover:text-blue-600 rounded-xl transition-all"
                          >
                            {dropLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={link.path} 
                    className={`block px-4 py-2 text-[15px] font-medium rounded-full transition-all ${
                      pathname === link.path 
                        ? "bg-white/15 text-white shadow-inner" 
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden lg:flex items-center pl-2">
            <Link 
              href="/admissions/apply" 
              className="px-6 py-2.5 bg-gold text-navy hover:bg-white font-bold text-sm rounded-full shadow-[0_0_15px_rgba(201,168,76,0.3)] hover:shadow-[0_0_20px_rgba(201,168,76,0.5)] hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Sleeker dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 py-4 mt-2 bg-navy/40 backdrop-blur-md rounded-b-2xl border-t border-white/10 flex flex-col overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.dropdown ? (
                  <>
                    <button 
                      className="flex justify-between items-center px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 rounded-xl transition-colors"
                      onClick={() => {
                        if (link.name === 'Programmes') setProgramsOpen(!programsOpen);
                        if (link.name === 'Admissions') setAdmissionsOpen(!admissionsOpen);
                      }}
                    >
                      {link.name}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                        (link.name === 'Programmes' && programsOpen) || (link.name === 'Admissions' && admissionsOpen) ? "rotate-180 text-cyan-400" : "text-white/50"
                      }`} />
                    </button>
                    <div className={`flex-col pl-4 mt-1 mb-2 space-y-1 overflow-hidden transition-all duration-300 ${
                      (link.name === 'Programmes' && programsOpen) || (link.name === 'Admissions' && admissionsOpen) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          href={dropLink.path}
                          className="block px-4 py-2.5 text-sm font-medium text-white/70 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.path} 
                    className="px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5 rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 space-y-3 px-2">
              <a 
                href="tel:+918886197778"
                className="flex items-center justify-center w-full py-3 text-white/90 font-medium text-sm rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 opacity-70" /> Call: 8886197778
              </a>
              <Link 
                href="/admissions/apply" 
                className="flex items-center justify-center w-full py-3 bg-white text-navy font-semibold text-sm rounded-xl shadow-[0_4px_15px_rgba(255,255,255,0.15)] active:scale-95 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
