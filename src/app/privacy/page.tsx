import PageHero from "@/components/ui/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sumedha IIM",
  description: "Learn how Sumedha IIM collects, uses and protects your personal information when you visit our website or apply for admission.",
  keywords: "sumedha iim privacy policy"
};

export default function Privacy() {
  return (
    <div className="flex flex-col w-full bg-[#fcfcfc] min-h-screen">
      <PageHero title="Privacy Policy" />

      <section className="py-24 max-w-4xl mx-auto px-4 w-full">
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-md border border-border/50 prose prose-slate max-w-none">
          <h2 className="font-serif text-3xl font-bold text-navy mb-6">1. Introduction</h2>
          <p className="text-slate leading-relaxed mb-8">
            Sumedha IIM (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy mb-6">2. Data We Collect</h2>
          <p className="text-slate leading-relaxed mb-8">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy mb-6">3. How We Use Your Data</h2>
          <p className="text-slate leading-relaxed mb-8">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to respond to your enquiries, process admissions applications, and improve our website and services.
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy mb-6">4. Contact Us</h2>
          <p className="text-slate leading-relaxed">
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>info@mysumedha.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
