import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fahrschule Volante | Führerschein ohne Prüfung & Wiederherstellung",
  description:
    "Führerschein ohne Prüfung erhalten oder gesperrten Führerschein zurückbekommen. Schnell, diskret und zuverlässig. Ihr Partner in ganz Deutschland.",
  keywords: [
    "Führerschein ohne Prüfung",
    "Führerschein kaufen",
    "Führerschein Wiederherstellung",
    "gesperrter Führerschein",
    "Fahrschule Volante",
    "Führerschein zurückbekommen",
  ],
  openGraph: {
    title: "Fahrschule Volante | Ihr Führerschein, unser Auftrag",
    description:
      "Führerschein ohne Prüfung oder Wiederherstellung nach Sperre. Professionell und diskret in ganz Deutschland.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-cream text-navy-950`}
      >
        <div className="grain-overlay" />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
