import type { Metadata } from 'next';
import FAQClient from './FAQClient';
import { FAQStructuredData, WebPageStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://www.go4garage.in';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: "Frequently asked questions about Go4Garage — our products, implementation, pricing, and technical capabilities for India's EV ecosystem.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ | Go4Garage',
    description: 'Answers to common questions about Go4Garage products, implementation, pricing, and technical capabilities.',
    url: `${SITE_URL}/faq`,
    siteName: 'Go4Garage',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Go4Garage FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Go4Garage',
    description: 'Answers to common questions about Go4Garage.',
    images: [{ url: `${SITE_URL}/og-image.png`, alt: 'Go4Garage FAQ' }],
  },
};

const faqsForSchema = [
  { question: 'What is Go4Garage?', answer: "Go4Garage is India's first AI-powered automobile intelligence platform with 7 products solving 84 industry problems across the EV ecosystem." },
  { question: 'Who is Go4Garage for?', answer: 'Go4Garage serves CPO operators, automobile workshops, fleet operators, EV technicians, government agencies, and OEMs.' },
  { question: 'How long does implementation take?', answer: 'Typical implementation takes 4 weeks from kickoff to go-live, including setup, data migration, training, and supervised launch.' },
  { question: 'How is Go4Garage priced?', answer: 'Go4Garage follows a SaaS model with Starter, Professional, and Enterprise tiers. Contact sales for a customized quote.' },
  { question: 'Is there a free trial?', answer: 'We offer guided pilot programs with proper setup, training, and support so you can evaluate with real results.' },
  { question: 'Is my data secure?', answer: 'Yes. Enterprise-grade security with end-to-end encryption, role-based access controls, regular audits, and compliance with industry standards.' },
  { question: 'Does Go4Garage cover all 33 Indian states?', answer: 'Yes. URGAA (ऊर्जा) provides regulatory intelligence and compliance workflows for all 33 states, including state-specific DISCOM portals and EV policies.' },
  { question: 'Can Go4Garage integrate with existing ERP/DMS systems?', answer: 'Yes. Go4Garage provides REST APIs and supports integration with popular DMS, ERP, and fleet management systems.' },
];

export default function Page() {
  return (
    <>
      <WebPageStructuredData
        name="Go4Garage FAQ — Frequently Asked Questions"
        description="Frequently asked questions about Go4Garage products, implementation, pricing, and technical capabilities."
        url={`${SITE_URL}/faq`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'FAQ', url: `${SITE_URL}/faq` },
        ]}
      />
      <FAQStructuredData faqs={faqsForSchema} />
      <FAQClient />
    </>
  );
}
