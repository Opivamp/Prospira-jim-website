import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingModalProvider } from "@/context/BookingModalContext";
import { BookingModal } from "@/components/ui/BookingModal";
import { gymInfo } from "@/data/gymInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PROSPIRA — Build Your Next Level | Premium Strength & Performance",
    template: "%s | PROSPIRA",
  },
  description:
    "A contemporary strength and athletic performance gym engineered for disciplined progress, evidence-based coaching, and an uncompromising standard of training.",
  keywords: [
    "strength training gym",
    "athletic performance",
    "barbell club",
    "personal training",
    "metabolic conditioning",
    "sauna and recovery",
    "prospira fitness",
  ],
  authors: [{ name: "Prospira Athletic Brand" }],
  openGraph: {
    title: "PROSPIRA — Build Your Next Level",
    description: "Built by discipline. Defined by progress. Premium strength and athletic performance.",
    siteName: "PROSPIRA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} dark`}>
      <body className="bg-prospira-bg text-prospira-text font-sans antialiased selection:bg-prospira-accent selection:text-prospira-bg flex flex-col min-h-screen">
        <BookingModalProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <BookingModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
