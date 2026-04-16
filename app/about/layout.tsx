import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Go4Garage's mission, vision, values, and the team building India's AI-powered automobile intelligence platform.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
