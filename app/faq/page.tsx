import type { Metadata } from 'next';
import FAQClient from './FAQClient';
import { FAQStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Frequently asked questions about Go4Garage — our products, implementation, pricing, and technical capabilities for India\'s EV ecosystem.',
};

const faqsForSchema = [
  { question: 'What is Go4Garage?', answer: "Go4Garage is India's first AI-powered automobile intelligence platform with 7 products solving 84 industry problems across the EV ecosystem." },
  { question: 'Who is Go4Garage for?', answer: 'Go4Garage serves CPO operators, automobile workshops, fleet operators, EV technicians, government agencies, and OEMs.' },
  { question: 'How long does implementation take?', answer: 'Typical implementation takes 4 weeks from kickoff to go-live, including setup, data migration, training, and supervised launch.' },
  { question: 'How is Go4Garage priced?', answer: 'Go4Garage follows a SaaS model with Starter, Professional, and Enterprise tiers. Contact sales for a customized quote.' },
  { question: 'Is there a free trial?', answer: 'We offer guided pilot programs with proper setup, training, and support so you can evaluate with real results.' },
  { question: 'Is my data secure?', answer: 'Yes. Enterprise-grade security with end-to-end encryption, role-based access controls, regular audits, and compliance with industry standards.' },
];

export default function Page() {
  return (
    <>
      <FAQStructuredData faqs={faqsForSchema} />
      <FAQClient />
    </>
  );
}
