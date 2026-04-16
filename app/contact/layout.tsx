import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a demo, ask questions, or explore partnership opportunities with Go4Garage.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
