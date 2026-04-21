export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
  description: string;
  problemsSolved: number;
  targetUsers: string[];
  features: ProductFeature[];
  integrations: string[];
  metrics: string[];
  cta: string;
  ctaLink: string;
}

export const productData: Record<string, ProductData> = {
  urgaa: {
    slug: 'urgaa',
    name: 'URGAA (ऊर्जा)',
    shortName: 'URGAA',
    tagline: 'End-to-End EV Charging Infrastructure Intelligence',
    icon: 'ev_station',
    color: 'primary',
    description:
      "URGAA is Go4Garage's regulatory intelligence platform for EV charging infrastructure — covering site selection, DISCOM approvals, compliance tracking, and grid integration across all 33 Indian states.",
    problemsSolved: 48,
    targetUsers: ['CPO Operators', 'Real Estate Developers', 'Government Bodies', 'Infrastructure Investors'],
    features: [
      { icon: 'gavel', title: 'DISCOM Wizard', desc: 'AI-guided application for electricity connections — reduces 6-month delays to weeks' },
      { icon: 'location_on', title: 'Site Scoring Engine', desc: 'Score potential charging sites on 12 parameters: grid proximity, footfall, competition, demand' },
      { icon: 'co2', title: 'Carbon Credit Tracking', desc: 'Automated carbon credit calculation and trading support for renewable charging' },
      { icon: 'receipt_long', title: 'Tariff Management', desc: 'Real-time EV tariff updates across 33 states with automated billing adjustments' },
      { icon: 'verified', title: 'Compliance Tracker', desc: 'State and central compliance calendar with deadline alerts and document management' },
      { icon: 'bolt', title: 'Grid Capacity Estimator', desc: 'AI-powered analysis of grid infrastructure capacity and upgrade requirements' },
    ],
    integrations: ['KAILASH-AI (predictive analytics)', 'Eka-AI (regulatory Q&A)', 'GSTSAAS (billing)'],
    metrics: ['89% compliance automation', '30 days avg DISCOM approval', '33 states covered'],
    cta: 'Book a Demo',
    ctaLink: '/contact',
  },

  gstsaas: {
    slug: 'gstsaas',
    name: 'GSTSAAS',
    shortName: 'GSTSAAS',
    tagline: 'Complete EV Workshop Management Platform',
    icon: 'build',
    color: 'secondary',
    description:
      'GSTSAAS digitizes every aspect of EV service workshop operations — from job card creation to GST invoicing, inventory management to customer analytics.',
    problemsSolved: 17,
    targetUsers: ['EV Service Workshops', 'Authorized Service Centers', 'Multi-brand EV Garages', 'Dealerships'],
    features: [
      { icon: 'assignment', title: 'Digital Job Cards', desc: 'Replace paper job cards with digital workflow — real-time status tracking for customers' },
      { icon: 'receipt', title: 'GST Invoicing', desc: 'Automated GST calculation, invoice generation, and filing-ready exports for EV services' },
      { icon: 'inventory_2', title: 'Inventory Management', desc: 'Parts inventory with auto-reorder alerts, OEM integration, and wastage tracking' },
      { icon: 'price_check', title: 'Market Price Engine', desc: 'AI-powered spare parts pricing based on OEM data and market benchmarks' },
      { icon: 'people', title: 'Customer Management', desc: '360° customer profiles with vehicle history, service reminders, and loyalty tracking' },
      { icon: 'history', title: 'Service History', desc: 'Complete digital service history per vehicle — shareable for resale value proof' },
    ],
    integrations: ['KAILASH-AI (diagnostic intelligence)', 'Eka-AI (service Q&A)', 'URGAA (compliance check)'],
    metrics: ['3x faster job turnaround', '95% GST automation', '40% better customer retention'],
    cta: 'Book a Demo',
    ctaLink: '/contact',
  },

  ignition: {
    slug: 'ignition',
    name: 'Ignition',
    shortName: 'Ignition',
    tagline: 'Smart EV Ownership Experience App',
    icon: 'electric_car',
    color: 'tertiary',
    description:
      'Ignition is the consumer-facing app that transforms the EV ownership experience — real-time charging maps, intelligent service booking, cost calculators, and roadside assistance.',
    problemsSolved: 10,
    targetUsers: ['EV Vehicle Owners', 'Fleet Managers', 'Daily EV Commuters', 'EV Enthusiasts'],
    features: [
      { icon: 'map', title: 'Real-Time Charging Map', desc: 'Live charging station availability, pricing, and wait times across India' },
      { icon: 'monitor_heart', title: 'Vehicle Health Monitor', desc: 'Battery health, range prediction, and diagnostic alerts connected to your EV' },
      { icon: 'calendar_today', title: 'Service Booking', desc: 'Book certified EV service centers with transparent pricing and digital job tracking' },
      { icon: 'calculate', title: 'Cost Calculator', desc: 'Compare charging costs, calculate total ownership costs, and optimize charging schedules' },
      { icon: 'emergency', title: 'Roadside Assistance', desc: 'One-tap emergency support with location sharing and certified technician dispatch' },
      { icon: 'school', title: 'EV Learning Hub', desc: 'Tips, guides, and updates for EV owners to maximize range and battery life' },
    ],
    integrations: ['KAILASH-AI (predictive diagnostics)', 'GSTSAAS (workshop booking)'],
    metrics: ['Real-time charging network', 'Service cost transparency', 'Certified service locator'],
    cta: 'Download App',
    ctaLink: '/contact',
  },

  arjun: {
    slug: 'arjun',
    name: 'EV VIDYA ARJUN',
    shortName: 'ARJUN',
    tagline: 'EV Workforce Training & Certification Platform',
    icon: 'school',
    color: 'secondary',
    description:
      "EV VIDYA ARJUN addresses India's critical EV technician skill gap with structured curriculum, assessments, certification, and placement support.",
    problemsSolved: 8,
    targetUsers: ['Training Institutions', 'ITIs & Polytechnics', 'OEM Training Departments', 'Individual Technicians'],
    features: [
      { icon: 'menu_book', title: 'Curriculum Builder', desc: 'Industry-aligned EV curriculum covering battery, motor, power electronics, and charging systems' },
      { icon: 'quiz', title: 'Assessment Engine', desc: 'Practical and theoretical assessments with automated grading and competency mapping' },
      { icon: 'workspace_premium', title: 'Certification System', desc: 'Industry-recognized certificates with QR-verified credentials and digital badges' },
      { icon: 'precision_manufacturing', title: 'Hands-On Modules', desc: 'Simulation-based training modules for battery servicing, diagnostics, and safety protocols' },
      { icon: 'work', title: 'Placement Tracking', desc: 'Industry connections and placement support for certified EV technicians' },
      { icon: 'analytics', title: 'Progress Analytics', desc: 'Individual and cohort-level learning analytics for institutions and trainers' },
    ],
    integrations: ['KAILASH-AI (real-world case studies)', 'GSTSAAS (practical job card training)'],
    metrics: ['4-6 week certification programs', 'Industry-aligned curriculum', '200+ technicians target'],
    cta: 'Explore Training',
    ctaLink: '/contact',
  },

  'kailash-ai': {
    slug: 'kailash-ai',
    name: 'KAILASH-AI',
    shortName: 'KAILASH-AI',
    tagline: 'Predictive Intelligence Engine for the EV Ecosystem',
    icon: 'psychology',
    color: 'primary',
    description:
      'KAILASH-AI is the intelligence layer powering all Go4Garage products — predictive diagnostics, analytics, anomaly detection, and battery health scoring for the entire EV value chain.',
    problemsSolved: 2,
    targetUsers: ['Enterprise Fleet Managers', 'Insurance Companies', 'OEM Analytics Teams', 'Workshop Chains'],
    features: [
      { icon: 'troubleshoot', title: 'Predictive Diagnostics', desc: 'AI models predict component failures 2-4 weeks ahead, reducing emergency breakdowns' },
      { icon: 'dashboard', title: 'Analytics Dashboard', desc: 'Real-time operational intelligence across all Go4Garage products in one view' },
      { icon: 'warning', title: 'Anomaly Detection', desc: 'Identify unusual patterns in energy consumption, service times, and compliance status' },
      { icon: 'battery_saver', title: 'Battery Health Scoring', desc: 'Proprietary battery degradation models for EV fleet and insurance risk assessment' },
      { icon: 'auto_graph', title: 'Revenue Forecasting', desc: 'AI-powered demand and revenue forecasting for charging networks and workshops' },
      { icon: 'api', title: 'Intelligence API', desc: 'Expose KAILASH-AI capabilities via REST API for third-party integration' },
    ],
    integrations: ['All Go4Garage products', 'External fleet management systems', 'Insurance platforms'],
    metrics: ['Predictive maintenance alerts', 'Cross-platform analytics', 'Battery health scoring'],
    cta: 'Contact Sales',
    ctaLink: '/contact',
  },

  'eka-ai': {
    slug: 'eka-ai',
    name: 'Eka-AI',
    shortName: 'Eka-AI',
    tagline: 'Conversational AI Agent for EV Operations',
    icon: 'smart_toy',
    color: 'tertiary',
    description:
      "Eka-AI is Go4Garage's multi-agent conversational AI system — handling regulatory queries, operator automation, knowledge retrieval, and intelligent decision support across the EV ecosystem.",
    problemsSolved: 0,
    targetUsers: ['Operations Teams', 'Compliance Officers', 'Customer Support', 'Enterprise Platform Users'],
    features: [
      { icon: 'chat', title: 'Conversational AI', desc: 'Natural language interface for complex regulatory and operational queries in English and Hindi' },
      { icon: 'hub', title: 'Multi-Agent Orchestration', desc: 'Specialized AI agents for compliance, diagnostics, finance, and customer support working in coordination' },
      { icon: 'search', title: 'Knowledge Retrieval', desc: "Instant retrieval from India's automobile regulations, service manuals, and compliance guidelines" },
      { icon: 'auto_mode', title: 'Operator Automation', desc: 'Automated workflows triggered by AI — from compliance alerts to service scheduling' },
      { icon: 'translate', title: 'Multi-Language Support', desc: 'Hindi, English, and regional language support for operators across India' },
      { icon: 'integration_instructions', title: 'Platform Integration', desc: 'Deeply integrated with URGAA, GSTSAAS, KAILASH-AI for contextual intelligence' },
    ],
    integrations: ['All Go4Garage products (deep integration)', 'External communication platforms', 'GSTN for compliance queries'],
    metrics: ['Natural language queries', 'Multi-agent coordination', 'Hindi + English support'],
    cta: 'Contact Sales',
    ctaLink: '/contact',
  },
};

export const slugs = ['urgaa', 'gstsaas', 'ignition', 'arjun', 'kailash-ai', 'eka-ai'] as const;
export type ProductSlug = typeof slugs[number];
