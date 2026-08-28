import PageHero from "@/components/ui/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sumedha IIM",
  description: "Read the terms and conditions for using the Sumedha IIM website and enrolling in our hotel management programmes.",
  keywords: "sumedha iim terms and conditions"
};

export default function Terms() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero title="Terms & Conditions" />

      <section className="py-24 max-w-4xl mx-auto px-4 w-full">
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-md border border-border/50 prose prose-slate max-w-none">
          <h2 className="font-serif text-3xl font-bold text-navy mb-6">1. Acceptance of Terms</h2>
          <p className="text-slate leading-relaxed mb-8">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy mb-6">2. Use of Site</h2>
          <p className="text-slate leading-relaxed mb-8">
            You may use our site for lawful purposes only. You must not use our site in any way that breaches any applicable local, national, or international law or regulation. All content on this site, including text, graphics, logos, and images, is the property of Sumedha IIM.
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy mb-6">3. Admissions & Fees</h2>
          <p className="text-slate leading-relaxed mb-8">
            All admission details, fee structures, and course durations mentioned on the website are subject to change without prior notice. The final terms of enrollment will be provided to the student directly by the admissions office.
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy mb-6">4. Changes to Terms</h2>
          <p className="text-slate leading-relaxed">
            We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms.
          </p>
        </div>
      </section>
    </div>
  );
}
