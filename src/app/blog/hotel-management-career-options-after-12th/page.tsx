/* eslint-disable react/no-unescaped-entities */
import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";
import Link from "next/link";
import { 
  Calendar, User, Clock, CheckCircle2, Building2, Utensils, 
  ConciergeBell, ChefHat, HeartHandshake, BedDouble, CalendarDays, 
  Ship, Compass, Plane, TrendingUp, Sparkles, HelpCircle, ArrowRight, ShieldCheck, GraduationCap
} from "lucide-react";
import Script from "next/script";
import BlogGuard from "@/components/blog/BlogGuard";

export const metadata = {
  title: "Hotel Management Career Options After 12th in India: BHM Scope | Sumedha IIM",
  description: "Discover career options after Hotel Management in India. Explore paths in hotels, culinary, events, airlines, cruise lines, and BHM scope after 12th.",
  keywords: "Hotel Management Career Options After 12th, BHM Scope in India, Hotel Management Jobs, Career After Hotel Management, Hospitality Career Pathways, BHM Course Vizag, Sumedha IIM",
};

export default function BlogPost() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What can I do after Hotel Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After Hotel Management, you can work across hotels, resorts, food and beverage service, culinary production, front office management, event management, cruise lines, airlines, tourism agencies, sales, and customer experience operations."
        }
      },
      {
        "@type": "Question",
        "name": "Is Hotel Management a good career after 12th?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is a great choice for students who prefer dynamic, active work, enjoy dealing with people, and want clear operational pathways in service industries."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career options after a BHM degree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BHM graduates can pursue roles like Front Office Executive, F&B Operations Executive, Guest Relations Executive, Commis Chef, Banquet Coordinator, Hospitality Sales Associate, or Cruise Hospitality Staff."
        }
      },
      {
        "@type": "Question",
        "name": "Can Hotel Management graduates work in airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hotel management graduates frequently work in aviation guest experience roles, airport lounge management, passenger service administration, and flight catering operations."
        }
      },
      {
        "@type": "Question",
        "name": "Can I become a chef after Hotel Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hotel Management programs cover food production basics. Graduates interested in culinary careers can enter commercial kitchens as Commis Chefs and advance to specialized kitchen roles through practice."
        }
      },
      {
        "@type": "Question",
        "name": "Can Hotel Management graduates work on cruise ships?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hospitality graduates can apply for cruise line positions in guest services, accommodations, and food operations. Specific safety certifications, medical clearance, and valid travel documents are required."
        }
      },
      {
        "@type": "Question",
        "name": "What is the scope of BHM in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With expanding tourism, corporate travel, luxury dining, and new resort developments, the scope for structured BHM graduates continues to grow across Indian urban centers and tourism hubs."
        }
      },
      {
        "@type": "Question",
        "name": "Is Hotel Management only about working in hotels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The skills learned in hotel management—such as service quality, operational logistics, and team coordination—apply to event agencies, luxury retail, customer experience teams, travel firms, and corporate service divisions."
        }
      },
      {
        "@type": "Question",
        "name": "What skills are needed for a career in hospitality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential skills include strong communication, customer service orientation, problem-solving under pressure, teamwork, time management, grooming etiquette, and basic business awareness."
        }
      },
      {
        "@type": "Question",
        "name": "Which Hotel Management course is suitable after 12th?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A structured 3- or 4-year degree like the Bachelor of Hotel Management (BHM) is suitable for students seeking comprehensive management training, broad career flexibility, and higher education eligibility."
        }
      }
    ]
  };

  const careerSectors = [
    {
      title: "1. Hotels & Resorts",
      icon: Building2,
      desc: "Hotels, luxury resorts, boutique stays, and business properties rely on structured operational management to function 24/7. Graduates entering this space usually begin in operational entry roles and advance into supervisory and managerial positions across departments.",
      roles: "Hotel Operations Executive, Duty Manager, Guest Service Supervisor, Operations Manager, Assistant General Manager.",
      focus: "Coordinating inter-departmental activities, handling operational challenges, managing daily guest flows, and maintaining service quality."
    },
    {
      title: "2. Food & Beverage (F&B) Service",
      icon: Utensils,
      desc: "The F&B sector is one of the largest employers within hospitality. It covers luxury dining restaurants, hotel food services, independent cafés, industrial catering, and banquet facilities.",
      roles: "F&B Executive, Restaurant Supervisor, Banquet Operations Executive, F&B Captain, Outlet Manager.",
      focus: "Overseeing dining service standards, managing floor staff, controlling inventory, maintaining hygiene compliance, and ensuring profitability."
    },
    {
      title: "3. Front Office Management",
      icon: ConciergeBell,
      desc: "The Front Office serves as the nerve center of any accommodation property. It directly influences guest satisfaction from check-in through departure.",
      roles: "Front Office Executive, Reservations Associate, Guest Service Associate, Concierge Specialist, Assistant Front Office Manager.",
      focus: "Managing reservation systems, room allocations, guest inquiries, check-in operations, and front-desk administrative functions."
    },
    {
      title: "4. Culinary Careers",
      icon: ChefHat,
      desc: "For students passionate about cooking and food production, a hotel management background provides essential commercial kitchen knowledge. While practical cooking skills require continuous kitchen practice, hotel management courses cover food science, kitchen organization, and menu planning.",
      roles: "Commis Chef (Entry-level), Chef de Partie (Station Head), Bakery & Pastry Assistant, Kitchen Operations Trainee.",
      focus: "Food preparation, recipe standardisation, station maintenance, food safety compliance, and kitchen workflow management."
    },
    {
      title: "5. Guest Relations & Customer Experience",
      icon: HeartHandshake,
      desc: "Guest Relations focuses on building customer loyalty, managing high-profile guests (VIPs), and addressing service feedback constructively.",
      roles: "Guest Relations Executive (GRE), Customer Experience Specialist, Guest Experience Supervisor, VIP Relations Manager.",
      focus: "Ensuring guest satisfaction, solving service issues, managing personal requests for high-value clients, and conducting quality audits."
    },
    {
      title: "6. Housekeeping & Accommodation Operations",
      icon: BedDouble,
      desc: "Far from basic cleaning, housekeeping in commercial hospitality is a multi-million-rupee operational function responsible for asset protection, interior aesthetics, laundry logistics, and room inventory management.",
      roles: "Housekeeping Executive, Accommodation Operations Supervisor, Floor Supervisor, Assistant Executive Housekeeper.",
      focus: "Managing floor staff, coordinating room inspections, managing linen and chemical inventory, maintaining environmental hygiene, and managing room turnover logistics."
    },
    {
      title: "7. Events & Banquets",
      icon: CalendarDays,
      desc: "Hospitality graduates are well-equipped to enter the high-growth event management sector. Properties rely heavily on banquet teams to host weddings, corporate conferences, product launches, and gala events.",
      roles: "Banquet Executive, Event Operations Coordinator, Conference & Event Supervisor, Venue Coordinator.",
      focus: "Event planning, floor setup, coordination with catering and decor teams, timeline execution, and vendor management."
    },
    {
      title: "8. Cruise Hospitality",
      icon: Ship,
      desc: "International cruise lines operate as floating luxury resorts, employing thousands of hospitality professionals worldwide across food service, guest accommodation, and leisure entertainment.",
      roles: "Cruise Hospitality Crew, Onboard Guest Service Associate, Cruise F&B Steward, Accommodations Operations Staff.",
      focus: "Delivering high-standard service in international marine environments. (Note: Cruise lines usually require specific safety certifications such as STCW, medical fitness clearance, and international travel documentation)."
    },
    {
      title: "9. Travel & Tourism Services",
      icon: Compass,
      desc: "Hospitality training overlaps significantly with tourism management. Graduates often transition into destination management, tour operations, and guest experience coordination.",
      roles: "Travel Operations Executive, Tourism Coordinator, Destination Management Associate, Tour Guest Manager.",
      focus: "Itinerary coordination, guest logistics, tourist accommodation management, and destination customer support."
    },
    {
      title: "10. Airline & Airport Hospitality",
      icon: Plane,
      desc: "Aviation ground services and premium passenger care rely on hospitality-trained professionals to deliver service standards inside airport lounges, VIP terminals, and flight catering operations.",
      roles: "Airport Lounge Executive, Passenger Service Associate, In-flight Catering Coordinator, Ground Handling Hospitality Associate.",
      focus: "Premium passenger assistance, lounge management, flight food service coordination, and transit guest care."
    },
    {
      title: "11. Hospitality Sales & Marketing",
      icon: TrendingUp,
      desc: "Hospitality properties rely on dedicated commercial teams to drive room bookings, corporate banquets, and brand visibility.",
      roles: "Hospitality Sales Executive, Corporate Sales Associate, Digital Marketing Assistant (Hospitality), Revenue Operations Assistant.",
      focus: "B2B sales outreach, corporate account management, event space bookings, local promotion, and client relationship management."
    },
    {
      title: "12. Hospitality Entrepreneurship",
      icon: Sparkles,
      desc: "Equipped with operational, culinary, and management knowledge, hotel management graduates often start their own business ventures.",
      roles: "Launching independent cafés, cloud kitchens, boutique bakeries, catering businesses, event management agencies, or homestay operations.",
      focus: "Business planning, menu design, vendor sourcing, operational compliance, and business development."
    }
  ];

  return (
    <BlogGuard publishDate="September 15, 2026">
      <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
        <Script id="faq-schema" type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </Script>

        <PageHero 
          title="Hotel Management Career Options After 12th in India: What Can You Do After BHM?" 
          subtitle="Your Hospitality Career Has More Than One Destination: Explore diverse pathways across luxury resorts, culinary arts, cruise lines, airlines, and event management."
          imagePath="/images/hotel-management-career-options-hero.jpg"
        />

        <article className="py-24 max-w-4xl mx-auto px-4 sm:px-6 w-full">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-12 py-6 border-y border-border/50 text-slate text-sm font-medium">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-primary" />
              Sumedha IIM
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              September 15, 2026
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              8 min read
            </div>
          </div>

          {/* Featured Snippet Box */}
          <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-2xl p-6 mb-12 shadow-sm">
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong>Quick Summary:</strong> After studying Hotel Management, graduates can pursue diverse careers across hotels, resorts, food and beverage operations, culinary arts, front office, housekeeping, guest relations, event planning, cruise hospitality, travel and tourism, airline hospitality, sales and marketing, and hospitality entrepreneurship. A Bachelor of Hotel Management (BHM) opens doors well beyond traditional hotel reception roles.
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6 mb-12">
            <p className="lead text-xl text-navy font-medium">
              When most students and parents think about hotel management, a common image comes to mind: a professional standing behind a hotel reception desk checking in guests. While front desk management is a vital part of the industry, it represents only a small fraction of what the global hospitality sector offers.
            </p>
            <p>
              Modern hospitality is a vast, multi-billion-dollar ecosystem that encompasses luxury resorts, fine dining establishments, international airline lounges, luxury cruise lines, corporate event management, and destination tourism. Studying Hotel Management provides a versatile foundation in business administration, operations, customer experience, and team leadership.
            </p>
            <p>
              So, what can you actually do after studying Hotel Management?
            </p>
            <p>
              Whether you choose to enter the field through a standard diploma or a structured 3- or 4-year degree like the <Link href="/bhm" className="text-primary hover:underline font-semibold">BHM Program</Link>, your career options extend far wider than you might expect. This guide breaks down the major career pathways, required skills, industry scope, and educational choices after Class 12.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center">
              💡 Key Takeaways: Hospitality Careers at a Glance
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Beyond Reception Desks:</strong> Hotel Management prepares graduates for diverse business and operational roles, not just front office jobs.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Diverse Career Sectors:</strong> A degree like the Bachelor of Hotel Management (BHM) opens career opportunities in hotels, culinary arts, events, cruise lines, aviation hospitality, travel, sales, and entrepreneurship.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Core Skills Matter:</strong> Long-term success relies heavily on communication skills, operational efficiency, emotional intelligence, and leadership alongside academic credentials.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Structured Career Growth:</strong> The industry offers clear progression from entry-level operational roles to executive department heads and general management.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Strategic Education:</strong> Choosing an institution offering strong practical training, modern labs, and structured industry exposure is essential for building a long-term hospitality career.</span>
              </li>
            </ul>
          </div>

          {/* What Is Hotel Management? */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              What Is Hotel Management?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              At its core, Hotel Management is the study and application of operational strategies, business principles, and service standards required to manage commercial accommodation, food service, and entertainment establishments smoothly.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6 font-medium">
              Rather than focusing solely on basic service tasks, modern hospitality education equips students with skills across:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-navy mb-2">Hotel Operations & Administration</h4>
                <p className="text-slate-600 text-sm">Managing guest services, facility standards, and operational workflows.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-navy mb-2">Food & Beverage (F&B) Management</h4>
                <p className="text-slate-600 text-sm">Overseeing kitchen production, restaurant service, inventory control, and hygiene standards.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-navy mb-2">Front Office Operations</h4>
                <p className="text-slate-600 text-sm">Directing room inventory, guest communications, reservations, and billing systems.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-navy mb-2">Housekeeping & Accommodation Management</h4>
                <p className="text-slate-600 text-sm">Maintaining property aesthetics, sanitation standards, and room preparation.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-navy mb-2">Events & Banquet Management</h4>
                <p className="text-slate-600 text-sm">Planning, executing, and coordinating corporate functions, weddings, and large conferences.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-navy mb-2">Revenue & Business Strategy</h4>
                <p className="text-slate-600 text-sm">Understanding guest demographics, pricing models, marketing, and customer satisfaction metrics.</p>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Hospitality management blends people skills with business discipline, teaching graduates how to deliver exceptional guest experiences while maintaining profitable and efficient operations.
            </p>
          </div>

          {/* 12 Career Sectors */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              What Can You Do After Hotel Management?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              The hospitality industry is divided into specialized operational and management departments. Below is an in-depth breakdown of the primary career paths open to hotel management graduates.
            </p>

            <div className="space-y-6">
              {careerSectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <div key={index} className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-navy">{sector.title}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">{sector.desc}</p>
                    <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-border/50 text-sm">
                      <div>
                        <strong className="text-navy font-semibold">Typical Roles: </strong>
                        <span className="text-slate-700">{sector.roles}</span>
                      </div>
                      <div>
                        <strong className="text-navy font-semibold">Career Focus: </strong>
                        <span className="text-slate-700">{sector.focus}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Career Options Comparison Table */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Career Options Comparison Table
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-4 font-semibold">Career Area</th>
                    <th className="p-4 font-semibold">Typical Work Focus</th>
                    <th className="p-4 font-semibold">Key Skills Required</th>
                    <th className="p-4 font-semibold">Example Entry-Level Roles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Hotels & Resorts</td>
                    <td className="p-4 text-slate-700">Daily property operations, guest flow, room logistics</td>
                    <td className="p-4 text-slate-700">Leadership, multitasking, operational coordination</td>
                    <td className="p-4 text-slate-700">Operations Executive, Duty Management Trainee</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Front Office</td>
                    <td className="p-4 text-slate-700">Reservations, guest check-in/check-out, front desk management</td>
                    <td className="p-4 text-slate-700">Communication, problem-solving, computer literacy</td>
                    <td className="p-4 text-slate-700">Front Office Executive, Guest Service Associate</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Food & Beverage (F&B)</td>
                    <td className="p-4 text-slate-700">Restaurant service, dining operations, banquet coordination</td>
                    <td className="p-4 text-slate-700">Customer service, team coordination, F&B knowledge</td>
                    <td className="p-4 text-slate-700">F&B Executive, Restaurant Captain</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Culinary Arts</td>
                    <td className="p-4 text-slate-700">Commercial food production, kitchen workflow, menu preparation</td>
                    <td className="p-4 text-slate-700">Cooking techniques, hygiene standards, pressure handling</td>
                    <td className="p-4 text-slate-700">Commis Chef, Kitchen Management Trainee</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Housekeeping</td>
                    <td className="p-4 text-slate-700">Accommodation quality, room inspection, facility maintenance</td>
                    <td className="p-4 text-slate-700">Attention to detail, quality control, inventory management</td>
                    <td className="p-4 text-slate-700">Housekeeping Executive, Floor Supervisor Trainee</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Guest Relations</td>
                    <td className="p-4 text-slate-700">Managing high-profile guest needs, service recovery, feedback</td>
                    <td className="p-4 text-slate-700">Empathy, communication, conflict resolution</td>
                    <td className="p-4 text-slate-700">Guest Relations Executive (GRE)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Events & Banquets</td>
                    <td className="p-4 text-slate-700">Planning, venue setups, coordinating corporate & social events</td>
                    <td className="p-4 text-slate-700">Organization, vendor management, time management</td>
                    <td className="p-4 text-slate-700">Event Operations Executive, Banquet Supervisor</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Cruise Hospitality</td>
                    <td className="p-4 text-slate-700">Onboard guest services, dining, and accommodations</td>
                    <td className="p-4 text-slate-700">Adaptability, service standards, cross-cultural teamwork</td>
                    <td className="p-4 text-slate-700">Cruise Hospitality Crew, Steward</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Travel & Tourism</td>
                    <td className="p-4 text-slate-700">Destination travel services, tour logistics, guest coordination</td>
                    <td className="p-4 text-slate-700">Customer care, geographical knowledge, planning</td>
                    <td className="p-4 text-slate-700">Tourism Associate, Travel Operations Executive</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Sales & Marketing</td>
                    <td className="p-4 text-slate-700">B2B sales outreach, event space sales, client development</td>
                    <td className="p-4 text-slate-700">Persuasion, communication, digital marketing basics</td>
                    <td className="p-4 text-slate-700">Hospitality Sales Executive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Career Progression Example */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Career Progression Example
            </h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              While actual career timelines depend on individual performance, skill development, employer size, and economic conditions, below is an illustrative pathway of operational growth in the hotel sector:
            </p>

            <div className="relative border-l-2 border-primary/30 pl-6 ml-4 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow"></div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Years 0 – 2</span>
                  <h4 className="text-lg font-bold text-navy mt-1">Trainee / Entry-Level Executive</h4>
                  <p className="text-slate-600 text-sm mt-2">Front Office Executive • F&B Executive • Commis Chef • Guest Service Associate</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow"></div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Years 2 – 4</span>
                  <h4 className="text-lg font-bold text-navy mt-1">Shift Supervisor / Team Lead</h4>
                  <p className="text-slate-600 text-sm mt-2">Floor Supervisor • Restaurant Captain • Chef de Partie • Front Desk Supervisor</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow"></div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Years 4 – 7</span>
                  <h4 className="text-lg font-bold text-navy mt-1">Assistant Department Manager</h4>
                  <p className="text-slate-600 text-sm mt-2">Assistant Front Office Manager • Assistant F&B Manager • Assistant Executive Housekeeper • Sous Chef</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow"></div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Years 7 – 10+</span>
                  <h4 className="text-lg font-bold text-navy mt-1">Department Head / Manager</h4>
                  <p className="text-slate-600 text-sm mt-2">Front Office Manager • F&B Manager • Executive Chef • Executive Housekeeper • Banquet Sales Director</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow"></div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Years 10+</span>
                  <h4 className="text-lg font-bold text-navy mt-1">Senior Management</h4>
                  <p className="text-slate-600 text-sm mt-2">Resident Manager • Hotel Manager • General Manager (GM) • Regional Hospitality Director</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">
              Note: This diagram serves as a general structural example, not a guaranteed timeline.
            </p>
          </div>

          {/* What Skills Do Hospitality Employers Look For? */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              What Skills Do Hospitality Employers Look For?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              A successful career in hospitality requires a balance of operational competence and interpersonal capabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-primary mr-2" />
                  Technical & Operational Skills
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Hotel Operations Knowledge:</strong> Understanding how front desk, housekeeping, and F&B divisions collaborate.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Property Management Systems (PMS):</strong> Basic familiarity with digital reservation and hotel operations software.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Food & Beverage Fundamentals:</strong> Understanding service styles, menu planning, food safety, and beverage handling.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Resource & Inventory Control:</strong> Tracking supplies, managing stock, and minimizing operational waste.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <HeartHandshake className="w-5 h-5 text-primary mr-2" />
                  Soft & Professional Skills
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Clear Communication:</strong> Professional verbal and written English, along with strong regional language abilities for clear interactions.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Problem-Solving & Conflict Resolution:</strong> Staying calm under pressure to resolve guest concerns effectively.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Professional Etiquette & Grooming:</strong> Maintaining visual standards, body language, and professional protocol.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Adaptability & Teamwork:</strong> Working smoothly across rotating shifts, operational teams, and fast-paced environments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Is Hotel Management a Good Career Choice After 12th? */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Is Hotel Management a Good Career Choice After 12th?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Hotel Management can be an excellent career path after Class 12, but it depends on your personality, strengths, and professional goals.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center">
                  ✅ Ideal For Students Who:
                </h3>
                <ul className="space-y-3 text-emerald-950 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Enjoy active, dynamic, hands-on work environments rather than sitting at a desk all day.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Possess strong interpersonal skills and enjoy interacting with diverse people.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Are interested in food, culinary arts, event organization, or customer management.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Want clear operational career pathways that reward performance and operational skill.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                  ⚠️ Realities to Consider:
                </h3>
                <ul className="space-y-3 text-amber-950 text-sm">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 flex-shrink-0 font-bold">•</span>
                    <span><strong>Work Schedules:</strong> Hospitality operates 24/7. Entry-level roles often involve shift work, weekends, and holiday rosters.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 flex-shrink-0 font-bold">•</span>
                    <span><strong>Operational Demands:</strong> The industry involves standing for long hours and maintaining active guest interactions throughout shifts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 flex-shrink-0 font-bold">•</span>
                    <span><strong>Service Orientation:</strong> Success requires patience, active listening, and a genuine interest in service delivery.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BHM vs Short-Term Course Comparison */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              BHM vs Short-Term Course Comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-4 font-semibold">Factor</th>
                    <th className="p-4 font-semibold">Bachelor of Hotel Management (BHM)</th>
                    <th className="p-4 font-semibold">Short-Term Diploma / Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Duration</td>
                    <td className="p-4 text-slate-700">3 to 4 Years</td>
                    <td className="p-4 text-slate-700">6 Months to 1 Year</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Qualification Level</td>
                    <td className="p-4 text-slate-700">Full Undergraduate Degree</td>
                    <td className="p-4 text-slate-700">Certificate or Diploma</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Academic Depth</td>
                    <td className="p-4 text-slate-700">Broad: Operations, management, finance, marketing, and business strategy</td>
                    <td className="p-4 text-slate-700">Narrow: Focused primarily on specific technical skills (e.g., baking, food service)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Career Flexibility</td>
                    <td className="p-4 text-slate-700">High: Provides foundational knowledge suitable across diverse service sectors</td>
                    <td className="p-4 text-slate-700">Moderate: Best suited for immediate entry into specific departmental roles</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-navy">Higher Education</td>
                    <td className="p-4 text-slate-700">Eligible for Master's programs (MBA, MHM, M.Sc. Hospitality)</td>
                    <td className="p-4 text-slate-700">Generally not eligible for direct post-graduate degree admission</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Why Consider Studying Hotel Management in Visakhapatnam? */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Why Consider Studying Hotel Management in Visakhapatnam?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Selecting the right location for hospitality education is just as important as choosing the course itself. Visakhapatnam (Vizag) has developed into a major commercial, educational, and tourism hub in Andhra Pradesh.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              With expanding coastal tourism, luxury beach resorts, convention centers, industrial growth, and a growing food sector, pursuing a <Link href="/bhm" className="text-primary hover:underline font-semibold">hotel management course in Visakhapatnam</Link> provides students direct access to a dynamic regional hospitality market. Studying in a major city allows students to secure local industrial exposure, complete hospitality internships, and observe operational standards firsthand without moving far from home.
            </p>
            <p className="text-slate-700 leading-relaxed">
              For students exploring options in Coastal Andhra, institutions like Sumedha Institute of Innovation & Management offer dedicated degree training aimed at building practical skills and professional readiness.
            </p>
          </div>

          {/* Choosing Sumedha */}
          <div className="bg-slate-50 border border-border rounded-2xl p-8 mb-16">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Choosing Sumedha for Your Hotel Management Degree
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              When evaluating a hotel management college in Vizag, look for an institution that balances academic structure with practical training. At Sumedha Institute of Innovation & Management, the <Link href="/bhm" className="text-primary hover:underline font-bold">BHM Program</Link> is structured to transform Class 12 graduates into career-ready hospitality professionals.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy">Comprehensive Curriculum</h4>
                  <p className="text-slate-600 text-sm">Covering Front Office, Food & Beverage Service, Accommodation Operations, Food Production, and Event Management.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy">Practical Hospitality Labs</h4>
                  <p className="text-slate-600 text-sm">Hands-on training in dedicated food production, front desk simulation, housekeeping, and dining setups.</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy">Experienced Faculty</h4>
                  <p className="text-slate-600 text-sm">Learn from instructors with both industry backgrounds and academic expertise.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy">Structured Internship Support</h4>
                  <p className="text-slate-600 text-sm">Guidance in securing practical training placements across reputable hospitality properties.</p>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-border flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/about" className="text-primary hover:underline">About Sumedha →</Link>
              <Link href="/bhm" className="text-primary hover:underline">BHM Course Details →</Link>
              <Link href="/contact" className="text-primary hover:underline">Career Counselling →</Link>
            </div>
          </div>

          {/* How to Choose the Right College Checklist */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              How to Choose the Right Hotel Management College
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Use this practical checklist when evaluating hospitality institutes:
            </p>
            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Course Structure & Recognition:</strong> Is the qualification a recognized degree program (such as a BHM) or a short-term diploma?</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Practical Facilities:</strong> Does the campus feature functional culinary labs, mock front desks, housekeeping setups, and service labs?</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Internship Opportunities:</strong> Does the institution assist with structured internships in established hotels, resorts, or service organizations?</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Faculty Credentials:</strong> Are instructors experienced in both real-world hotel operations and academic instruction?</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Location & Industry Access:</strong> Is the college located in a region with access to hotels, resorts, travel hubs, and event venues?</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Career & Placement Support:</strong> Does the institution offer resume building, interview practice, and campus placement assistance? Check verified student outcomes via <Link href="/placements" className="text-primary hover:underline font-semibold">Student Success Stories</Link>.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Transparent Fee Structure:</strong> Understand overall program fees, lab charges, and uniform costs up front. Explore transparent details under <Link href="/contact" className="text-primary hover:underline font-semibold">BHM Fees</Link>.</span>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Conclusion
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
              <p>
                A career in Hotel Management is far broader than working behind a hotel front desk. From managing restaurant operations and luxury resort divisions to coordinating corporate events, managing cruise hospitality, or launching a boutique culinary business—a hospitality background provides a versatile skill set for modern service industries.
              </p>
              <p>
                Success in this field requires a blend of solid academic training, practical operational exposure, continuous skill development, and genuine dedication to service excellence.
              </p>
              <p className="font-semibold text-navy text-lg">
                Your career can go farther than you think.
              </p>
              <p>
                Ready to build a career in global hospitality? <Link href="/bhm" className="text-primary font-bold hover:underline">Explore BHM</Link> at Sumedha Institute of Innovation & Management, Visakhapatnam, and discover where your training can take you.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 flex items-center">
              <HelpCircle className="w-8 h-8 text-primary mr-3" />
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item, index) => (
                <div key={index} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:border-primary/40 transition-colors">
                  <h3 className="font-bold text-lg text-navy mb-3 flex items-start">
                    <span className="text-primary font-serif mr-3 text-xl">Q.</span>
                    {item.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-7 text-sm md:text-base">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Card CTA */}
          <div className="bg-gradient-to-br from-navy to-[#0F2B48] text-white p-8 md:p-12 rounded-3xl shadow-xl text-center">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Begin Your Global Hospitality Career at Sumedha
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Gain hands-on training, industry certifications, and structured placement mentorship with our Bachelor of Hotel Management (BHM) program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/admissions" 
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition shadow-lg"
              >
                Apply for BHM Admission <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition backdrop-blur-sm"
              >
                Request Course Brochure
              </Link>
            </div>
          </div>
        </article>

        <CTAStrip />
      </div>
    </BlogGuard>
  );
}
