import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Sumedha IIM",
  description: "Thank you for getting in touch with Sumedha IIM.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
