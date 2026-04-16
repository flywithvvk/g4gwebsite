import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors",
  description: "Series A investment opportunity. $50B+ market by 2030. Proprietary AI. Proven traction. India's EV transformation.",
};

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
