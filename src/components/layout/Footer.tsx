import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#031436] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Top CTA Banner in Footer */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0B2A68] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-400/30">
          <div className="text-center md:text-left">
            <span className="text-xs font-black text-[#d9a441] uppercase tracking-widest block mb-1">Admissions Open 2026-27</span>
            <h3 className="font-serif text-2xl md:text-4xl font-bold text-white">Begin Your Career in Aviation & Hotel Management</h3>
            <p className="text-sky-100 text-xs md:text-sm mt-2 max-w-2xl font-medium">
              Join Visakhapatnam&apos;s most trusted institute with 100% placement record and 4-term flexible fee payment options.
            </p>
          </div>
          <Link
            href="/admissions/apply"
            className="px-8 py-4 bg-gradient-to-r from-[#d9a441] to-[#ffe9b0] text-[#0B2A68] font-black text-xs uppercase tracking-widest rounded-full shadow-lg hover:from-[#b88328] hover:to-[#d9a441] transition-all shrink-0 hover:scale-105"
          >
            Apply Online 2026 <ArrowRight className="w-4 h-4 inline ml-1" />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
        
        {/* Col 1: About & Logo */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <img src="/images/sumedha-full-logo.png" alt="Sumedha IIM Logo" className="h-12 sm:h-14 w-auto object-contain" />
          </div>
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
            Sumedha International Institute of Hospitality & Management is Visakhapatnam&apos;s premier institute for Aviation, Hotel Management, and Airport Ground Operations.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#d9a441] shrink-0 mt-0.5" />
              <span>5th Ln, behind Pawan showroom, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#d9a441] shrink-0" />
              <span>+91 8886 197 778, +91 8886 197 779</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#d9a441] shrink-0" />
              <span>info@mysumedha.com | admissions@mysumedha.com</span>
            </p>
            <p className="text-[11px] text-slate-400 font-semibold pt-1">
              <span className="text-[#d9a441]">Working Hours:</span> Mon - Sun: 09:00 AM - 08:00 PM
            </p>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a href="https://facebook.com/sumedhaiim" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d9a441] hover:text-[#0B2A68] flex items-center justify-center transition-colors text-xs font-bold" title="Facebook">FB</a>
            <a href="https://www.instagram.com/sumedhaiim?utm_source=qr&igsh=cnFud3RxZGhwdGxj" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d9a441] hover:text-[#0B2A68] flex items-center justify-center transition-colors text-xs font-bold" title="Instagram">IG</a>
            <a href="https://www.youtube.com/@SUMEDHA-o7v" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d9a441] hover:text-[#0B2A68] flex items-center justify-center transition-colors text-xs font-bold" title="YouTube">YT</a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-[#d9a441] mb-4 border-b border-[#d9a441]/30 pb-2">Quick Links</h4>
          <ul className="space-y-2 text-xs text-slate-300 font-medium">
            <li><Link href="/" className="hover:text-[#d9a441] transition-colors">Home Page</Link></li>
            <li><Link href="/about" className="hover:text-[#d9a441] transition-colors">About Institution</Link></li>
            <li><Link href="/programmes" className="hover:text-[#d9a441] transition-colors">Academic Programmes</Link></li>
            <li><Link href="/admissions" className="hover:text-[#d9a441] transition-colors">Admission Process</Link></li>
            <li><Link href="/placements" className="hover:text-[#d9a441] transition-colors">100% Placements</Link></li>
            <li><Link href="/campus" className="hover:text-[#d9a441] transition-colors">Campus Facilities</Link></li>
            <li><Link href="/media" className="hover:text-[#d9a441] transition-colors">Media Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#d9a441] transition-colors">Contact Counselors</Link></li>
          </ul>
        </div>

        {/* Col 3: Programmes */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-[#d9a441] mb-4 border-b border-[#d9a441]/30 pb-2">Top Courses</h4>
          <ul className="space-y-2 text-xs text-slate-300 font-medium">
            <li><Link href="/programmes/bba-aviation" className="hover:text-[#d9a441] transition-colors">BBA Aviation Management</Link></li>
            <li><Link href="/programmes/bhm" className="hover:text-[#d9a441] transition-colors">Degree in Hotel Mgmt (BHM)</Link></li>
            <li><Link href="/programmes/dam" className="hover:text-[#d9a441] transition-colors">Diploma in Aviation (DAM)</Link></li>
            <li><Link href="/programmes/dhm" className="hover:text-[#d9a441] transition-colors">Diploma in Hotel Mgmt (DHM)</Link></li>
            <li><Link href="/programmes/pgdhm" className="hover:text-[#d9a441] transition-colors">PG Diploma Hospitality</Link></li>
            <li><Link href="/programmes/mba" className="hover:text-[#d9a441] transition-colors">MBA Aviation & Hospitality</Link></li>
          </ul>
        </div>

        {/* Col 4: Location Map Thumbnail (Gokul-Group Exact Style) */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-[#d9a441] mb-4 border-b border-[#d9a441]/30 pb-2">Campus Location</h4>
          <div className="bg-white/10 p-2 rounded-2xl border border-white/20 shadow-md overflow-hidden">
            <div className="w-full h-36 rounded-xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3375812555983!2d83.3049957!3d17.728725999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394356da8e53bd%3A0xe549dfff2f7bfec2!2sSumedha%20International%20Institute%20of%20Aviation%20%26%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1787935302028!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Sumedha IIM Map"
              ></iframe>
            </div>
            <p className="text-[10px] text-center text-slate-300 font-semibold mt-1">Dwaraka Nagar, Visakhapatnam</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© 2026 Sumedha International Institute of Hospitality & Management. All Rights Reserved.</p>
        <div className="flex items-center space-x-6 text-xs font-semibold">
          <Link href="/privacy" className="hover:text-[#d9a441]">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-[#d9a441]">Terms of Service</Link>
          <span>•</span>
          <Link href="/sitemap.xml" className="hover:text-[#d9a441]">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
