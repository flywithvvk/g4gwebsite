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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
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
