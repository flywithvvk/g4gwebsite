import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description: "Enterprise-grade AI platform for regulatory intelligence, operational excellence, and predictive insights — built for India's automobile industry.",
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return children;
}
