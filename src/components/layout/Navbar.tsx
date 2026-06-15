"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
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
        { name: "BHM (Hotel Management)", path: "/programmes/bhm" },
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
    <header className="fixed top-0 w-full z-50 flex flex-col">
      {/* Top Bar */}
      <div className={`hidden lg:flex w-full transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'bg-gradient-to-r from-blue-700 to-navy text-white py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex space-x-6">
            <a href="mailto:info@mysumedha.com" className="flex items-center hover:text-blue-300 transition-colors">
              <Mail className="w-3 h-3 mr-2" /> info@mysumedha.com
            </a>
            <a href="tel:+918886197778" className="flex items-center hover:text-blue-300 transition-colors">
              <Phone className="w-3 h-3 mr-2" /> +91 8886 197 778
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span>NSDC Approved</span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span>Skill India Partner</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-navy shadow-lg py-2" : "bg-navy/95 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center bg-white/5 p-1.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Image src="/images/image.png" alt="Sumedha IIM Logo" width={220} height={60} className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div className="flex items-center space-x-1 cursor-pointer py-2">
                      <Link 
                        href={link.path}
                        className={`text-sm font-semibold uppercase tracking-widest hover:text-cyan-400 transition-colors ${
                          pathname.startsWith(link.path) && link.path !== '/' ? "text-cyan-400" : "text-white/90"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-cyan-400 transition-colors" />
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 flex flex-col mt-2">
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.name}
                            href={dropLink.path}
                            className="px-6 py-3 text-sm font-medium text-navy hover:bg-[#fcfcfc] hover:text-blue-600 border-b border-border/30 last:border-none transition-colors"
                          >
                            {dropLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.path} 
                      className={`text-sm font-semibold uppercase tracking-widest hover:text-cyan-400 transition-colors py-2 block ${
                        pathname === link.path ? "text-cyan-400" : "text-white/90"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTAs Desktop */}
            <div className="hidden lg:flex items-center space-x-4 pl-4 border-l border-white/20">
              <Link 
                href="/admissions/apply" 
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-none font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 rounded-full"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-cyan-400 focus:outline-none transition-colors"
              >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-navy shadow-xl border-t border-white/10 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 py-4 flex-grow">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.dropdown ? (
                    <>
                      <button 
                        className="flex justify-between items-center py-4 text-sm font-semibold text-white uppercase border-b border-white/10"
                        onClick={() => {
                          if (link.name === 'Programmes') setProgramsOpen(!programsOpen);
                          if (link.name === 'Admissions') setAdmissionsOpen(!admissionsOpen);
                        }}
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${
                          (link.name === 'Programmes' && programsOpen) || (link.name === 'Admissions' && admissionsOpen) ? "rotate-180 text-cyan-400" : "text-white/70"
                        }`} />
                      </button>
                      <div className={`flex-col pl-4 mt-1 mb-2 space-y-1 ${
                        (link.name === 'Programmes' && programsOpen) || (link.name === 'Admissions' && admissionsOpen) ? "flex" : "hidden"
                      }`}>
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.name}
                            href={dropLink.path}
                            className="py-2.5 text-sm text-white/80 hover:text-cyan-400 transition-colors"
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
                      className="py-4 text-sm font-semibold text-white uppercase border-b border-white/10 hover:text-cyan-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 bg-deep/50 space-y-4">
              <a 
                href="tel:+918886197778"
                className="block w-full py-3.5 text-center border border-white/30 text-white font-semibold text-sm uppercase rounded-full hover:bg-white/10 transition-colors"
              >
                Call: 8886197778
              </a>
              <Link 
                href="/admissions/apply" 
                className="block w-full py-3.5 text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm uppercase rounded-full shadow-[0_4px_15px_rgba(6,182,212,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
