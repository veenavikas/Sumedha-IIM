import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, ArrowRight, CheckCircle2 } from "lucide-react";
import coursesData from "@/data/courses.json";
import PageHero from "@/components/ui/PageHero";
import CTAStrip from "@/components/ui/CTAStrip";

export function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.id,
  }));
}

export default function ProgrammeDetail({ params }: { params: { slug: string } }) {
  const course = coursesData.find((c) => c.id === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#fcfcfc]">
      <PageHero 
        title={course.title} 
        subtitle={course.description} 
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">Program Overview</h2>
              <p className="text-slate leading-relaxed text-lg">
                {course.overview}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">Curriculum Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.curriculum.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">Career Prospects</h2>
              <div className="flex flex-wrap gap-3">
                {course.careerProspects.map((prospect, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-border/50 text-navy font-semibold text-sm rounded-full">
                    {prospect}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-border/50 sticky top-32">
              <h3 className="font-serif text-2xl font-bold text-navy mb-6">Quick Facts</h3>
              
              <ul className="space-y-6 mb-8">
                <li className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate mb-1">Duration</span>
                  <span className="font-semibold text-navy">{course.duration}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate mb-1">Eligibility</span>
                  <span className="font-semibold text-navy">{course.eligibility}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate mb-1">Learning Mode</span>
                  <span className="font-semibold text-navy">{course.mode}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate mb-1">Fee Estimate</span>
                  <span className="font-semibold text-navy">{course.fee}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate mb-1">Next Batch</span>
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Admissions Open 2026</span>
                </li>
              </ul>

              <div className="space-y-4">
                <Link 
                  href="/admissions/apply"
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none text-navy font-bold text-sm uppercase tracking-widest hover:bg-navy hover:text-ivory transition-colors duration-300 rounded-full"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <button 
                  className="w-full flex items-center justify-center px-6 py-4 bg-transparent border-2 border-navy text-navy font-bold text-sm uppercase tracking-widest hover:bg-navy hover:text-ivory transition-colors duration-300 rounded-full"
                >
                  <Download className="w-4 h-4 mr-2" /> Prospectus
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
