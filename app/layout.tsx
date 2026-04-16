import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Go4Garage - The AI Platform Powering India's Automobile Future",
  description: "From regulatory chaos to operational excellence. One platform. Zero friction. India's first AI-powered automobile intelligence platform.",
  keywords: ["EV charging", "automobile AI", "India EV infrastructure", "CPO management", "automotive intelligence"],
  authors: [{ name: "Go4Garage" }],
  openGraph: {
    title: "Go4Garage - The AI Platform Powering India's Automobile Future",
    description: "India's first AI-powered automobile intelligence platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-surface text-on-surface">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
