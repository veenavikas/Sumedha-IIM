import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"]
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Hotel Management & Aviation Institute in Vizag | Sumedha IIM",
  description: "Sumedha IIM is Visakhapatnam's leading hotel management & aviation institute. Explore courses, placements & 2026 admissions. Apply now!",
  keywords: "hotel management colleges in vizag, hospitality courses in vizag, best hotel management institute near me, sumedha iim",
  icons: {
    icon: '/icon.png',
  },
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
        className={`${plusJakarta.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <Script src="https://www.noupe.com/embed/019f370b67107000833c89aed7ebf6ef0d70.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
