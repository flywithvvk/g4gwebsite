import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productData, slugs } from './productData';
import ProductDetailClient from './ProductDetailClient';
import { SoftwareAppStructuredData, BreadcrumbStructuredData, FAQStructuredData } from '@/components/StructuredData';

const SITE_URL = 'https://go4garage.com';

type Props = {
  params: Promise<{ slug: string }>;
};

const productFaqs: Record<string, { question: string; answer: string }[]> = {
  urgaa: [
    { question: 'What is URGAA (ऊर्जा)?', answer: "URGAA is Go4Garage's multi-vertical EV infrastructure and regulatory intelligence platform — the only solution covering all 33 Indian state regulations, 64 DISCOMs, and 6 EV industry verticals in a single platform." },
    { question: 'How long does DISCOM approval take with URGAA?', answer: 'URGAA reduces DISCOM approval time from 4–6 months of manual follow-up to just 3–4 weeks — an 85% reduction — through wizard-guided applications and real-time status tracking.' },
    { question: 'How many states does URGAA cover for EV compliance?', answer: 'URGAA covers all 33 Indian states, providing state-specific compliance calendars, regulatory alerts, tariff tracking, and DISCOM portal integrations.' },
    { question: 'Can URGAA help with carbon credit tracking?', answer: 'Yes. URGAA automatically tracks and calculates carbon credits eligible under BEE and MoPNG schemes, generates trading-ready reports, and alerts operators to claim windows.' },
  ],
  gstsaas: [
    { question: 'What is Go4Garage Service Tools (GST)?', answer: "GST is Go4Garage's end-to-end workshop and service-centre operations platform — covering job cards, technician scheduling, parts inventory, GST billing, and EV-specific service workflows." },
    { question: 'Does GST support EV-specific diagnostics and service workflows?', answer: 'Yes. GST includes EV-specific service protocols for battery health checks, BMS diagnostics, motor servicing, and charging system repairs, alongside ICE workflows.' },
    { question: 'Can GST handle GST-compliant billing and invoicing?', answer: 'Yes. GST generates GST-compliant invoices, supports HSN codes for EV parts, and integrates with popular accounting software for seamless financial management.' },
  ],
  ignition: [
    { question: 'What is the Ignition App?', answer: "Ignition is Go4Garage's multi-stakeholder EV mobility app connecting EV owners, fleet managers, and workshops — offering real-time vehicle health, charging station discovery, service booking, and fleet analytics." },
    { question: 'When will the Ignition App be available?', answer: 'The Ignition App is coming soon on Android and iOS. Sign up at go4garage.in/demo to join the early access waitlist.' },
    { question: 'Who is the Ignition App designed for?', answer: 'Ignition is designed for EV owners wanting real-time vehicle insights, fleet operators managing multi-vehicle operations, and workshops looking to connect digitally with their customers.' },
  ],
  arjun: [
    { question: 'What is EV VIDYA ARJUN?', answer: "EV VIDYA ARJUN is Go4Garage's EV workforce training and certification platform — delivering structured courses, assessments, and government-aligned certifications for EV technicians across India." },
    { question: 'What certifications does ARJUN provide?', answer: 'ARJUN provides certifications aligned with NSDC, ASDC, and BEE skill frameworks for EV servicing, battery handling, charging infrastructure, and safety protocols.' },
    { question: 'Is ARJUN training available offline?', answer: 'Yes. ARJUN supports both online and offline modes, enabling technicians in low-connectivity areas to complete coursework and sync progress when connected.' },
  ],
  'kailash-ai': [
    { question: 'What is KAILASH-AI?', answer: "KAILASH-AI is Go4Garage's central AI backbone — a multi-model intelligence engine with 32+ ML models providing predictive analytics, anomaly detection, demand forecasting, and operational insights across all 12 EV industry verticals." },
    { question: 'How does KAILASH-AI improve EV operations?', answer: 'KAILASH-AI analyses historical and real-time data across fleets, charging stations, workshops, and supply chains to surface predictive insights — reducing unplanned downtime by up to 73% and improving operational efficiency.' },
    { question: 'Is KAILASH-AI data secure?', answer: 'Yes. KAILASH-AI uses enterprise-grade encryption, role-based access controls, and processes data within compliant Indian data centres. No raw business data is shared across organisations.' },
  ],
  'eka-ai': [
    { question: 'What is Eka-AI?', answer: "Eka-AI is Go4Garage's conversational AI agent — a context-aware assistant trained on all 12 EV industry verticals, enabling natural-language queries for regulatory guidance, operational decisions, and service workflows." },
    { question: 'What languages does Eka-AI support?', answer: 'Eka-AI supports English and Hindi, with regional language support planned. It understands EV industry terminology, Indian regulatory language, and vernacular phrasing.' },
    { question: 'Can Eka-AI answer regulatory and compliance questions?', answer: 'Yes. Eka-AI is trained on all 33 state EV policies, DISCOM regulations, BEE norms, and central ministry guidelines — providing accurate, up-to-date compliance guidance in natural language.' },
  ],
};

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) return {};
  const url = `${SITE_URL}/products/${slug}`;
  return {
    title: `${product.shortName} — Go4Garage`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.shortName} — Go4Garage | AI-Powered EV Platform`,
      description: product.description,
      url,
      siteName: 'Go4Garage',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: `${product.shortName} — Go4Garage` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.shortName} — Go4Garage`,
      description: product.description,
      images: [{ url: `${SITE_URL}/og-image.png`, alt: `${product.shortName} — Go4Garage` }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) notFound();
  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}` },
    { name: 'Products', url: `${SITE_URL}/products` },
    { name: product.shortName, url: `${SITE_URL}/products/${slug}` },
  ];
  const faqs = productFaqs[slug] ?? [];
  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbs} />
      <SoftwareAppStructuredData
        name={product.shortName}
        description={product.description}
        slug={slug}
        category="BusinessApplication"
        features={product.features.map((f) => f.title)}
      />
      {faqs.length > 0 && <FAQStructuredData faqs={faqs} />}
      <ProductDetailClient product={product} />
    </>
  );
}
