import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Sumedha IIM Visakhapatnam | Aviation & Hospitality Degrees",
  description: "Visakhapatnam's premier institute for Aviation and Hotel Management. NSDC Approved. 100% Placement Assistance. Apply now for BBA, BHM, MBA, and Diploma courses.",
  keywords: "aviation college in Visakhapatnam, hotel management institute Vizag, cabin crew training Visakhapatnam, BBA aviation management Vizag, BHM course",
  openGraph: {
    title: "Sumedha IIM Visakhapatnam",
    description: "Visakhapatnam's Gateway to Aviation & Hospitality Careers.",
    url: "https://mysumedha.com",
    siteName: "Sumedha IIM",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sumedha IIM Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Sumedha IIM",
              "url": "https://mysumedha.com",
              "logo": "https://mysumedha.com/logo.png",
              "description": "Visakhapatnam's Gateway to Aviation & Hospitality Careers.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4th Floor, 2nd Line, Diamond Park, Dwarakanagar",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "530016",
                "addressCountry": "IN"
              },
              "telephone": "+91-8886197778"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col pt-20`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
