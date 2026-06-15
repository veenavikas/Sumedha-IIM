import { FileText, Download, CheckCircle2 } from "lucide-react";
import CTAStrip from "@/components/ui/CTAStrip";

export default function Admissions() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc]">
      {/* S1: Hero Exception Navy bg */}
      <section className="relative w-full py-32 bg-navy flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6 tracking-tight">Admissions Open 2026</h1>
          <p className="text-ivory/80 font-sans text-xl max-w-2xl mx-auto">
            Take the first step towards a global career in Aviation and Hospitality.
          </p>
        </div>
      </section>

      {/* S2: Timeline */}
      <section className="py-24 max-w-5xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-navy">Admission Process</h2>
        </div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none/30">
          {[
            { step: "01", title: "Choose Programme", desc: "Browse our Aviation and Hospitality courses and select the one that aligns with your career goals." },
            { step: "02", title: "Fill Application", desc: "Complete the online application form with your personal and educational details." },
            { step: "03", title: "Submit Documents", desc: "Upload necessary documents including 10th/12th marksheets and ID proof." },
            { step: "04", title: "Counselling Call", desc: "Our admission counselors will reach out to guide you through the next steps and answer queries." },
            { step: "05", title: "Enroll & Begin", desc: "Pay the admission fee to confirm your seat and prepare for the upcoming batch." }
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none text-navy font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border/50 bg-white shadow-md">
                <h3 className="font-bold text-navy text-xl mb-2">{item.title}</h3>
                <p className="text-slate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S3 & S4: Checklist & Prospectus */}
      <section className="py-24 bg-white border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Checklist */}
            <div className="bg-[#fcfcfc] p-10 rounded-2xl border border-border/50 shadow-sm">
              <h3 className="font-serif text-3xl font-bold text-navy mb-6">Required Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-slate"><CheckCircle2 className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3" /> 10th Marksheet & Certificate</li>
                <li className="flex items-center text-slate"><CheckCircle2 className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3" /> 12th Marksheet & Certificate</li>
                <li className="flex items-center text-slate"><CheckCircle2 className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3" /> Transfer Certificate (TC)</li>
                <li className="flex items-center text-slate"><CheckCircle2 className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3" /> Aadhar Card / ID Proof</li>
                <li className="flex items-center text-slate"><CheckCircle2 className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mr-3" /> 4 Passport Size Photographs</li>
              </ul>
            </div>

            {/* Prospectus */}
            <div className="bg-navy text-white p-10 rounded-2xl border border-blue-500/30 shadow-xl flex flex-col items-center justify-center text-center">
              <FileText className="w-16 h-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6" />
              <h3 className="font-serif text-3xl font-bold mb-4">Download Prospectus</h3>
              <p className="text-ivory/80 mb-8 max-w-sm">Get detailed information about all our programmes, campus facilities, fee structure, and placement records.</p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-none text-navy font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-full inline-flex items-center">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </button>
            </div>

          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
