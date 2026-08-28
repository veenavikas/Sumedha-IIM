import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sumedha IIM, Visakhapatnam",
  description: "Get in touch with Sumedha IIM for admissions, course details or campus visits. Call, WhatsApp or visit our Visakhapatnam campus today.",
  keywords: "sumedha iim contact, hospitality training institute near me, hotel management institute vizag"
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
