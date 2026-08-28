import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers After Hotel Management | Sumedha IIM",
  description: "Discover career opportunities, placement support & salary insights for Sumedha IIM hotel management graduates in India.",
  keywords: "hotel management jobs and salary, scope of hospitality industry in india, career in hotel management after 12th"
};

export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
