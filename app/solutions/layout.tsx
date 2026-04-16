import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Tailored solutions for CPO operators, workshops, fleet operators, EV technicians, government regulators, and OEM manufacturers.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
