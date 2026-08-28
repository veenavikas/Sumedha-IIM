import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | Hotel Management Admissions 2026 | Sumedha IIM",
  description: "Apply online for Sumedha IIM's Hotel Management programme. Limited seats for the 2026 batch — start your application today.",
  keywords: "hotel management admission 2026, hotel management colleges in vizag, best hotel management institute near me"
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
