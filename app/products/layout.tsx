import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "6 integrated AI products — URGAA (ऊर्जा), GST (Go4Garage Service Tools), Ignition, EV VIDYA ARJUN, KAILASH-AI, Eka-AI — solving 85 problems across India's EV value chain.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
