import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akphotography.co.in"),
  title: {
    default: "AK Photography Ongole — Best Wedding Photographer | Top Rated Studio",
    template: "%s | AK Photography Ongole",
  },
  description:
    "AK Photography Ongole is the most trusted and top rated photography studio with highly experienced photographer in wedding photography, pre wedding photography, baby photo shoot, birthday photography, couple photography and family photography in Ongole.",
  keywords: [
    "best wedding photographer in Ongole",
    "photography studio Ongole",
    "AK Photography Ongole",
    "wedding photography Ongole",
    "pre wedding photography",
    "baby photo shoot Ongole",
    "birthday photography",
    "couple photography Ongole",
    "family photography",
    "candid wedding photography",
    "bridal photography",
    "top rated photographer Ongole",
    "cinematic wedding film",
    "engagement photography",
  ],
  openGraph: {
    title: "AK Photography Ongole — Best Wedding Photographer | Top Rated Studio",
    description:
      "AK Photography Ongole is the most trusted and top rated photography studio with highly experienced photographer in wedding, pre wedding, baby, birthday, couple and family photography.",
    siteName: "AK Photography Ongole",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AK Photography Ongole — Best Wedding Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Photography Ongole — Best Wedding Photographer",
    description:
      "Most trusted and top rated photography studio in Ongole. Wedding, pre wedding, baby, birthday, couple and family photography.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://akphotography.co.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  );
}
