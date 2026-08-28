import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programmes | Hotel Management Courses | Sumedha IIM",
  description: "Explore Sumedha IIM's hotel management programmes — diplomas & career-focused courses designed for placements in Visakhapatnam.",
  keywords: "hotel management subjects list, career in hotel management after 12th, scope of hospitality industry in india"
};

export default function ProgrammesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
