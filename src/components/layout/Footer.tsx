"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Simple SVG icons for social media
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  );
  const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
  );
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.6l.4-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );
  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  );

  return (
    <footer className="bg-navy text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white/5 p-1.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Image src="/images/image.png" alt="Sumedha IIM Logo" width={220} height={60} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/70">
              Visakhapatnam&apos;s Gateway to Aviation & Hospitality Careers. Transforming India through world-class employability-linked skill training since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/sumedhaiim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold text-white hover:text-navy transition-all">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com/@SUMEDHA-o7v" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold text-white hover:text-navy transition-all">
                <YoutubeIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold text-white hover:text-navy transition-all">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold text-white hover:text-navy transition-all">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-gold transition-colors text-sm text-white/70">About Us</Link></li>
              <li><Link href="/placements" className="hover:text-gold transition-colors text-sm text-white/70">Placements</Link></li>
              <li><Link href="/campus" className="hover:text-gold transition-colors text-sm text-white/70">Campus Life</Link></li>
              <li><Link href="/faculty" className="hover:text-gold transition-colors text-sm text-white/70">Faculty</Link></li>
              <li><Link href="/news" className="hover:text-gold transition-colors text-sm text-white/70">News & Events</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">Programmes</h3>
            <ul className="space-y-3">
              <li><Link href="/programmes/bba-aviation" className="hover:text-gold transition-colors text-sm text-white/70">BBA Aviation Management</Link></li>
              <li><Link href="/programmes/bhm" className="hover:text-gold transition-colors text-sm text-white/70">BHM (Hotel Management)</Link></li>
              <li><Link href="/programmes/mba" className="hover:text-gold transition-colors text-sm text-white/70">MBA Hospitality</Link></li>
              <li><Link href="/programmes/pgdam" className="hover:text-gold transition-colors text-sm text-white/70">PG Diploma Aviation (PGDAM)</Link></li>
              <li><Link href="/programmes/dam" className="hover:text-gold transition-colors text-sm text-white/70">Diploma Aviation (DAM)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-1" />
                <span className="text-sm text-white/70">4th Floor, 2nd Line, Diamond Park, Dwarakanagar, Visakhapatnam</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918886197778" className="text-sm hover:text-gold transition-colors">+91 8886 197 778</a>
                  <a href="tel:+919966319916" className="text-sm hover:text-gold transition-colors">+91 9966 319 916</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@mysumedha.com" className="text-sm hover:text-gold transition-colors">info@mysumedha.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs mb-4 md:mb-0 text-white/50">
            &copy; {currentYear} Sumedha IIM Visakhapatnam. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs hover:text-white transition-colors text-white/50">Privacy Policy</Link>
            <Link href="/terms" className="text-xs hover:text-white transition-colors text-white/50">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
