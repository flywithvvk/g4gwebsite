const SITE_URL = 'https://www.go4garage.in';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'Corporation'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Go4Garage',
  legalName: 'Go4Garage Private Limited',
  alternateName: ['Go4Garage Technologies', 'Go4Garage Technologies Private Limited', 'Go4Garage AI'],
  description: "India's first AI-powered automobile intelligence platform — a SaaS technology company solving 84 problems across the EV ecosystem with 7 AI products. Not an auto repair shop.",
  url: SITE_URL,
  email: 'connect@go4garage.in',
  industry: 'Software as a Service (SaaS)',
  naics: '511210',
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
    caption: 'Go4Garage — AI-Powered EV Platform',
  },
  image: `${SITE_URL}/og-image.png`,
  foundingDate: '2021-04-14',
  identifier: {
    '@type': 'PropertyValue',
    name: 'CIN',
    value: 'U34300UP2021PTC145107',
  },
  foundingLocation: {
    '@type': 'Place',
    name: 'India',
    addressCountry: 'IN',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  knowsAbout: [
    'EV Charging Infrastructure',
    'Electric Vehicle Compliance',
    'DISCOM Applications India',
    'EV Fleet Management',
    'Automobile Workshop Management',
    'AI-powered SaaS',
    'EV Regulatory Intelligence',
    'Carbon Credits EV India',
  ],
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
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/go4garage',
    'https://twitter.com/go4garage',
    'https://github.com/go4garage',
    'https://www.go4garage.in',
    'https://www.zaubacorp.com/company/GO4GARAGE-PRIVATE-LIMITED/U34300UP2021PTC145107',
    'https://www.thecompanycheck.com/company/go4garage-private-limited/U34300UP2021PTC145107',
    'https://tracxn.com/d/legal-entities/india/go4garage-private-limited/__vH6l079l4l8hrDB4T6wxW5uim4TmRCz0d-xVu-Avrf8',
    'https://www.indiafilings.com/learn/go4garage-private-limited/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Go4Garage Product Suite',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'URGAA (ऊर्जा)', description: 'Multi-vertical EV infrastructure & regulatory intelligence platform for 33 Indian states' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'GST (Go4Garage Service Tools)', description: 'End-to-end EV workshop and service-centre operations platform' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Ignition App', description: 'Multi-stakeholder EV mobility app for owners, fleets & workshops' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'EV VIDYA ARJUN', description: 'EV workforce training and certification platform' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'KAILASH-AI', description: 'Central AI backbone for predictive analytics across all 12 EV industry verticals' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Eka-AI', description: 'Conversational AI agent for all 12 EV industry verticals' } },
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
    operatingSystem: 'Web, Android, iOS',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Contact for enterprise pricing',
      },
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/demo`,
    },
    featureList: features.join(', '),
    publisher: { '@id': `${SITE_URL}/#organization` },
    creator: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    isAccessibleForFree: false,
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

// ── Article (BlogPosting) schema ──────────────────────────────────────────────
export function ArticleStructuredData({
  slug,
  title,
  excerpt,
  datePublished,
  dateModified,
  author,
  category,
}: {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  author: string;
  category: string;
}) {
  const articleUrl = `${SITE_URL}/blog/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline: title,
    description: excerpt,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
      '@type': 'Organization',
      name: 'Go4Garage',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
    },
    url: articleUrl,
    inLanguage: 'en-IN',
    articleSection: category,
    isPartOf: {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'Go4Garage Insights',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    about: {
      '@type': 'Thing',
      name: 'Electric Vehicles India',
    },
    keywords: [
      'EV India',
      'Electric Vehicle',
      category,
      'Go4Garage',
      'AI EV Platform',
    ].join(', '),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── NewsArticle schema (for /news page) ───────────────────────────────────────
export function NewsArticleListStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/news#page`,
    name: 'Go4Garage Industry News & Updates',
    description: 'Latest news and regulatory updates on EV, automobile, and AI technology in India, curated by Go4Garage.',
    url: `${SITE_URL}/news`,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: [
      { '@type': 'Thing', name: 'Electric Vehicle Industry India' },
      { '@type': 'Thing', name: 'EV Policy India' },
    ],
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebPage schema for inner pages ────────────────────────────────────────────
export function WebPageStructuredData({
  name,
  description,
  url,
  dateModified,
}: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    ...(dateModified ? { dateModified } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
