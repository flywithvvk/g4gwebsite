const SITE_URL = 'https://www.go4garage.in';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Go4Garage',
  alternateName: 'Go4Garage Technologies',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/icon-512.png`,
  description: "India's first AI-powered automobile intelligence platform accelerating EV adoption across 33 states.",
  foundingDate: '2023',
  foundingLocation: {
    '@type': 'Place',
    addressCountry: 'IN',
    name: 'India',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'connect@go4garage.in',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      email: 'partnerships@go4garage.in',
      contactType: 'sales',
      areaServed: 'IN',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/go4garage',
    'https://twitter.com/go4garage',
    'https://github.com/go4garage',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Go4Garage Product Suite',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'URGAA (ऊर्जा)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'GSTSAAS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Ignition App' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'EV VIDYA ARJUN' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'KAILASH-AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Eka-AI' } },
    ],
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Go4Garage',
  description: "India's AI-powered automobile intelligence platform",
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-IN',
};

export function GlobalStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareAppStructuredData({
  name,
  description,
  slug,
  category,
  features,
}: {
  name: string;
  description: string;
  slug: string;
  category: string;
  features: string[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `${SITE_URL}/products/${slug}`,
    applicationCategory: category,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '0',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/demo`,
    },
    featureList: features.join(', '),
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQStructuredData({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
