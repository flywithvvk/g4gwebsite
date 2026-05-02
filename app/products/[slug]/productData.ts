import { productExternalUrls } from '@/lib/productLinks';

export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
  points: string[];
  metric?: string;
}

export interface ImpactStat {
  label: string;
  before: string;
  after: string;
  icon: string;
  highlight: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  desc: string;
  icon: string;
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
  problems: string[];
  targetUsers: string[];
  features: ProductFeature[];
  impactStats: ImpactStat[];
  workflowSteps: WorkflowStep[];
  integrations: string[];
  metrics: string[];
  cta: string;
  ctaLink: string;
  externalDomain?: string;
  mobileApp?: { ios?: string; android?: string; comingSoon?: boolean };
}

export const productData: Record<string, ProductData> = {
  urgaa: {
    slug: 'urgaa',
    name: 'URGAA (\u090A\u0930\u094D\u091C\u093E)',
    shortName: 'URGAA',
    tagline: 'Multi-Vertical EV Infrastructure & Regulatory Intelligence Platform',
    icon: 'ev_station',
    color: 'primary',
    description: "India's first multi-vertical EV infrastructure platform — powering CPOs, fleets, DISCOMs, OEMs, recyclers, and government agencies across 33 states.",
    problemsSolved: 27,
    problems: [
      "DISCOM applications take 4\u20136 months of manual follow-up across 33 different state processes",
      "Site selection for EV charging is purely intuition-based with no data-driven scoring",
      "Carbon credit opportunities worth lakhs go unclaimed due to tracking complexity",
      "Tariff changes across 33 states require manual updates, causing billing errors daily",
      "Compliance deadlines are missed due to scattered documentation and zero alert system",
      "Grid capacity assessment requires expensive consultants and months of analysis",
    ],
    targetUsers: ['CPO Operators', 'Real Estate Developers', 'Government Bodies', 'Infrastructure Investors'],
    impactStats: [
      { label: 'DISCOM Approval Time', before: '4\u20136 months', after: '3\u20134 weeks', icon: 'schedule', highlight: '\u2193 85% faster' },
      { label: 'Compliance Automation', before: '0% automated', after: '89% automated', icon: 'verified', highlight: '89% automated' },
      { label: 'States Covered', before: '1\u20132 states', after: '33 states', icon: 'map', highlight: '33\u00d7 broader' },
      { label: 'Site Analysis Time', before: '2\u20133 weeks', after: '4 hours', icon: 'analytics', highlight: '\u2193 94% faster' },
    ],
    workflowSteps: [
      { step: 1, title: 'Site Assessment', desc: 'AI scores your location on 12 parameters \u2014 grid proximity, demand, competition, footfall, and ROI projection', icon: 'location_on' },
      { step: 2, title: 'DISCOM Application', desc: 'Wizard-guided application with pre-filled state-specific forms, document checklist, and real-time tracking', icon: 'gavel' },
      { step: 3, title: 'Compliance Calendar', desc: 'Auto-generated calendar with 90-day rolling view, document vault, and 30/15/7/1-day deadline alerts', icon: 'calendar_today' },
      { step: 4, title: 'Carbon & Tariff Ops', desc: 'Track real-time tariffs across 33 states and auto-calculate carbon credits with trading-ready reports', icon: 'co2' },
    ],
    features: [
      {
        icon: 'gavel',
        title: 'DISCOM Wizard',
        desc: 'AI-guided application for electricity connections \u2014 reduces 6-month delays to weeks',
        points: [
          'Pre-filled forms for all 33 state DISCOMs',
          'AI-extracted document checklist from your profile',
          'Real-time application tracking with authority contacts',
          'Automated follow-up reminders at critical milestones',
        ],
        metric: '6 months \u2192 3-4 weeks',
      },
      {
        icon: 'location_on',
        title: 'Site Scoring Engine',
        desc: 'Score potential charging sites on 12 parameters: grid proximity, footfall, competition, demand',
        points: [
          '12-parameter scoring: grid, footfall, competition, zoning',
          'ROI projection using local EV penetration data',
          'Competitor charging station proximity analysis',
          'Exportable investor-ready site assessment reports',
        ],
        metric: '4 hrs vs 3 weeks',
      },
      {
        icon: 'co2',
        title: 'Carbon Credit Tracking',
        desc: 'Automated carbon credit calculation and trading support for renewable charging',
        points: [
          'Per-kWh renewable energy credit calculation',
          'CERC and state registry compliance built-in',
          'Revenue projection from credit trading',
          'One-click claim-ready report generation',
        ],
        metric: '\u20b9\u20b9 uncaptured \u2192 tracked',
      },
      {
        icon: 'receipt_long',
        title: 'Tariff Management',
        desc: 'Real-time EV tariff updates across 33 states with automated billing adjustments',
        points: [
          'Real-time monitoring for all 33 state DISCOMs',
          'Auto-pricing adjustments pushed to terminals',
          'Historical trend analytics for forward planning',
          'Timestamped records for billing dispute resolution',
        ],
        metric: '33 states, always live',
      },
      {
        icon: 'verified',
        title: 'Compliance Tracker',
        desc: 'State and central compliance calendar with deadline alerts and document management',
        points: [
          'Central calendar with 90-day rolling view',
          'Document vault with version control + expiry alerts',
          'Auto-generated state-specific compliance checklist',
          'Multi-channel alerts: 30/15/7/1 days before deadline',
        ],
        metric: '0 missed deadlines',
      },
      {
        icon: 'bolt',
        title: 'Grid Capacity Estimator',
        desc: 'AI-powered analysis of grid infrastructure capacity and upgrade requirements',
        points: [
          'Load flow analysis for planned charging load',
          'Infrastructure upgrade cost estimation',
          'Peak demand simulation for different scenarios',
          'DISCOM-formatted submission reports',
        ],
        metric: 'Weeks \u2192 hours',
      },
    
      {
        icon: 'ev_station',
        title: 'CPO Remote Charger Management',
        desc: 'OCPP 1.6-J & 2.0.1 native integration — AI auto-resolves 73% of charger faults without a technician visit',
        points: [
          'OCPP 1.6-J covers 80% of India installed base; OCPP 2.0.1 for new installs',
          'OCPI 2.2.1 roaming — charge at partner networks seamlessly',
          'AI loop: health read -> diagnosis -> auto-fix -> learn (73% resolved remotely)',
          'Live dashboards: uptime, session KPIs, revenue per charger, fault heatmaps',
        ],
        metric: '73% faults resolved remotely',
      },
    ],
    integrations: ['KAILASH-AI (predictive analytics)', 'Eka-AI (regulatory Q&A)', 'GST (billing)'],
    metrics: ['89% compliance automation', '30 days avg DISCOM approval', '33 states covered'],
    cta: 'Book a Demo',
    ctaLink: '/contact',
    externalDomain: productExternalUrls.urgaa,
  },

  gstsaas: {
    slug: 'gstsaas',
    name: 'GST (Go4Garage Service Tools)',
    shortName: 'GST',
    tagline: 'Complete EV Workshop Management Platform',
    icon: 'build',
    color: 'secondary',
    description: "Digitize every aspect of EV service operations \u2014 job cards, invoicing, inventory, and customer analytics in one platform.",
    problemsSolved: 17,
    problems: [
      "Paper job cards lead to data loss, disputes, and zero real-time customer visibility",
      "Manual GST calculation causes errors, audit risks, and filing delays worth crores annually",
      "Spare parts tracked in Excel \u2014 stockouts and overstocking bleed profitability daily",
      "Customers have zero transparency into service pricing, eroding trust and repeat business",
      "No consolidated customer history \u2014 repeat visitors are treated as first-timers every time",
      "Workshop efficiency is unmeasured \u2014 technician performance and bottlenecks invisible",
    ],
    targetUsers: ['EV Service Workshops', 'Authorized Service Centers', 'Multi-brand EV Garages', 'Dealerships'],
    impactStats: [
      { label: 'Job Card Processing', before: '45 minutes', after: '8 minutes', icon: 'assignment', highlight: '\u2193 82% faster' },
      { label: 'GST Filing Errors', before: '~12% error rate', after: '<1% error rate', icon: 'receipt', highlight: '\u2193 92% fewer errors' },
      { label: 'Customer Retention', before: 'Baseline', after: '+40% improved', icon: 'people', highlight: '+40% retention' },
      { label: 'Inventory Accuracy', before: '~60% accurate', after: '97% accurate', icon: 'inventory_2', highlight: '\u2191 37pts accuracy' },
    ],
    workflowSteps: [
      { step: 1, title: 'Job Card Creation', desc: 'Technician creates digital job card. Customer gets SMS updates in real time as service progresses.', icon: 'assignment' },
      { step: 2, title: 'Parts & Inventory', desc: 'Parts usage auto-deducted from inventory. AI triggers reorder alerts before stockout occurs.', icon: 'inventory_2' },
      { step: 3, title: 'GST Invoice', desc: 'Invoice auto-generated with GST calculation. One-click export to Tally and filing-ready formats.', icon: 'receipt' },
      { step: 4, title: 'Customer Analytics', desc: '360\u00b0 customer profile auto-updated. Service reminders scheduled. Loyalty points calculated.', icon: 'analytics' },
    ],
    features: [
      {
        icon: 'assignment',
        title: 'Digital Job Cards',
        desc: 'Replace paper job cards with digital workflow \u2014 real-time status tracking for customers',
        points: [
          'Replace paper job cards with digital workflow',
          'Real-time customer notifications via SMS/WhatsApp',
          'Technician time tracking per job',
          'Dispute resolution with timestamped audit trail',
        ],
        metric: '\u2193 82% processing time',
      },
      {
        icon: 'receipt',
        title: 'GST Invoicing',
        desc: 'Automated GST calculation, invoice generation, and filing-ready exports for EV services',
        points: [
          'Auto-calculation of GST for EV services',
          'Invoice templates for B2B and B2C transactions',
          'One-click Tally and accounting export',
          'Filing-ready reports for monthly/quarterly returns',
        ],
        metric: '\u2193 92% fewer errors',
      },
      {
        icon: 'inventory_2',
        title: 'Inventory Management',
        desc: 'Parts inventory with auto-reorder alerts, OEM integration, and wastage tracking',
        points: [
          'Live stock levels with real-time deduction on usage',
          'AI-powered auto-reorder at minimum threshold',
          'OEM part number integration for accurate cataloging',
          'Wastage and shrinkage tracking by technician',
        ],
        metric: '97% inventory accuracy',
      },
      {
        icon: 'price_check',
        title: 'Market Price Engine',
        desc: 'AI-powered spare parts pricing based on OEM data and market benchmarks',
        points: [
          'AI benchmarks against OEM pricing data',
          'Regional market price comparison for parts',
          'Suggested selling price with margin targets',
          'Price history tracking for negotiation support',
        ],
        metric: 'Optimal margin always',
      },
      {
        icon: 'people',
        title: 'Customer Management',
        desc: '360\u00b0 customer profiles with vehicle history, service reminders, and loyalty tracking',
        points: [
          '360\u00b0 profile: vehicle, history, preferences',
          'Automated service reminder at 3/6/12 month intervals',
          'Loyalty points auto-calculated per service value',
          'WhatsApp-ready service report sharing',
        ],
        metric: '+40% retention',
      },
      {
        icon: 'history',
        title: 'Service History',
        desc: 'Complete digital service history per vehicle \u2014 shareable for resale value proof',
        points: [
          'Complete digital trail per chassis/registration number',
          'QR-code accessible history for customers',
          'Resale value proof with verified service stamps',
          'Transferable history to new vehicle owner',
        ],
        metric: '100% digital audit',
      },
    ],
    integrations: ['KAILASH-AI (diagnostic intelligence)', 'Eka-AI (service Q&A)', 'URGAA (compliance check)'],
    metrics: ['3x faster job turnaround', '95% GST automation', '40% better customer retention'],
    cta: 'Book a Demo',
    ctaLink: '/contact',
    externalDomain: productExternalUrls.gstsaas,
  },

  ignition: {
    slug: 'ignition',
    name: 'Ignition',
    shortName: 'Ignition',
    tagline: 'Multi-Stakeholder EV Mobility App for Owners, Fleets & Workshops',
    icon: 'electric_car',
    color: 'tertiary',
    description: "The all-in-one EV mobility app — serving EV owners, fleet operators, workshop managers, grid operators, and insurers with real-time intelligence on iOS & Android.",
    problemsSolved: 10,
    problems: [
      "EV owners spend 25+ minutes searching for available chargers, killing adoption confidence",
      "No real-time battery health visibility means range anxiety and unexpected mid-trip breakdowns",
      "Service booking is phone-based with no pricing transparency, inviting overcharging",
      "Roadside EV assistance takes 45+ minutes with no EV-specific protocols for high-voltage safety",
      "EV total cost of ownership is unclear, making financial planning and loan decisions impossible",
      "No centralized platform for EV education \u2014 owners learn from unverified social media",
    ],
    targetUsers: ['EV Vehicle Owners', 'Fleet Managers', 'Daily EV Commuters', 'EV Enthusiasts'],
    impactStats: [
      { label: 'Charger Search Time', before: '25+ minutes', after: 'Real-time (seconds)', icon: 'ev_station', highlight: 'Instant availability' },
      { label: 'Breakdown Response', before: '45+ minutes', after: '< 15 minutes', icon: 'emergency', highlight: '\u2193 67% faster' },
      { label: 'Pricing Transparency', before: '0% visible', after: '100% upfront', icon: 'price_check', highlight: 'Full visibility' },
      { label: 'Range Anxiety Events', before: 'Frequent', after: 'AI-eliminated', icon: 'battery_full', highlight: '\u2193 Anxiety eliminated' },
    ],
    workflowSteps: [
      { step: 1, title: 'Find & Navigate', desc: 'Open map to see real-time charger availability, pricing, and queue times. One tap to navigate.', icon: 'map' },
      { step: 2, title: 'Monitor Health', desc: "Battery health, range prediction, and anomaly alerts pulled directly from your vehicle's data.", icon: 'monitor_heart' },
      { step: 3, title: 'Book Service', desc: 'Find nearest certified EV workshop, see transparent pricing, book slot, and track service live.', icon: 'calendar_today' },
      { step: 4, title: 'Emergency Response', desc: 'One tap SOS: shares location, dispatches EV-certified technician, tracks ETA in real-time.', icon: 'emergency' },
    ],
    features: [
      {
        icon: 'map',
        title: 'Real-Time Charging Map',
        desc: 'Live charging station availability, pricing, and wait times across India',
        points: [
          'Live availability status across all CPO networks',
          'Real-time pricing comparison across chargers',
          'Queue time prediction using AI demand model',
          'Filter by connector type, speed (AC/DC), and amenities',
        ],
        metric: 'Real-time, always live',
      },
      {
        icon: 'monitor_heart',
        title: 'Vehicle Health Monitor',
        desc: 'Battery health, range prediction, and diagnostic alerts connected to your EV',
        points: [
          'Battery State-of-Health (SoH) tracking over time',
          'Range prediction based on driving history + weather',
          'Anomaly alerts: unusual drain, cell imbalance',
          'Monthly health reports shareable with workshop',
        ],
        metric: '0 unexpected failures',
      },
      {
        icon: 'calendar_today',
        title: 'Service Booking',
        desc: 'Book certified EV service centers with transparent pricing and digital job tracking',
        points: [
          'Search verified EV-certified workshops near you',
          'Real-time pricing transparency before booking',
          'Digital job card tracking: updates to your phone',
          'Cashless payment with GST invoice on completion',
        ],
        metric: '100% price clarity',
      },
      {
        icon: 'calculate',
        title: 'Cost Calculator',
        desc: 'Compare charging costs, calculate total ownership costs, and optimize charging schedules',
        points: [
          'TCO comparison: EV vs petrol/diesel equivalent',
          'Monthly charging cost vs fuel cost breakdown',
          'Optimal charging time scheduler (off-peak savings)',
          'Resale value tracker over 3/5/7 year horizons',
        ],
        metric: 'Full cost clarity',
      },
      {
        icon: 'emergency',
        title: 'Roadside Assistance',
        desc: 'One-tap emergency support with location sharing and certified technician dispatch',
        points: [
          'One-tap SOS with live GPS location sharing',
          'EV-certified technicians with HV safety training',
          'ETA tracking with real-time technician location',
          'Tow safety protocols for EV battery protection',
        ],
        metric: '< 15 min response',
      },
      {
        icon: 'school',
        title: 'EV Learning Hub',
        desc: 'Tips, guides, and updates for EV owners to maximize range and battery life',
        points: [
          'Curated guides: maximize range, battery care',
          'OEM-specific tips for your vehicle model',
          'Upcoming EV policy changes and subsidy news',
          'Community Q&A with verified EV experts',
        ],
        metric: 'Expert-vetted content',
      },
    ],
    integrations: ['KAILASH-AI (predictive diagnostics)', 'GST (workshop booking)'],
    metrics: ['Real-time charging network', 'Service cost transparency', 'Certified service locator'],
    cta: 'Download App',
    ctaLink: '/contact',
    externalDomain: productExternalUrls.ignition,
    mobileApp: { ios: '', android: '', comingSoon: true },
  },

  arjun: {
    slug: 'arjun',
    name: 'EV VIDYA ARJUN',
    shortName: 'ARJUN',
    tagline: 'EV Workforce Training & Certification Platform',
    icon: 'school',
    color: 'secondary',
    description: "Structured EV technician training with adaptive learning, automated certification, and job placement support.",
    problemsSolved: 8,
    problems: [
      "India faces a 100,000+ EV technician shortage by 2027 with no structured training pathway",
      "Mechanics have critical high-voltage safety knowledge gaps causing injury and liability risk",
      "No industry-recognized EV certification in India \u2014 employers can't verify technician competency",
      "Training dropout rates hit 35% due to disengaging classroom-only methods",
      "ITIs and polytechnics teach outdated ICE content with no EV-specific curriculum",
      "Training providers have zero data on actual skill gaps \u2014 content is generic, not competency-mapped",
    ],
    targetUsers: ['Training Institutions', 'ITIs & Polytechnics', 'OEM Training Departments', 'Individual Technicians'],
    impactStats: [
      { label: 'Certification Time', before: '6\u201312 months', after: '4\u20136 weeks', icon: 'workspace_premium', highlight: '\u2193 80% faster' },
      { label: 'Assessment Grading', before: '100% manual', after: '100% automated', icon: 'quiz', highlight: 'Full automation' },
      { label: 'Training Dropout Rate', before: '~35%', after: '< 10%', icon: 'trending_down', highlight: '\u2193 71% dropout' },
      { label: 'Job Placement Rate', before: '~40%', after: '75%+ target', icon: 'work', highlight: '\u2191 35pts placement' },
    ],
    workflowSteps: [
      { step: 1, title: 'Skill Gap Assessment', desc: 'Pre-enrollment assessment maps existing knowledge against EV competency framework. Custom learning path generated.', icon: 'quiz' },
      { step: 2, title: 'Adaptive Learning', desc: 'AI-curated modules on battery systems, HV safety, motor diagnostics. Gamified progress tracking.', icon: 'menu_book' },
      { step: 3, title: 'Practical Simulation', desc: 'Simulation-based hands-on modules for battery servicing, fault diagnosis, and safety protocols.', icon: 'precision_manufacturing' },
      { step: 4, title: 'Certification & Placement', desc: 'QR-verified certificate issued on passing. Placement support connects certified techs to hiring partners.', icon: 'workspace_premium' },
    ],
    features: [
      {
        icon: 'menu_book',
        title: 'Curriculum Builder',
        desc: 'Industry-aligned EV curriculum covering battery, motor, power electronics, and charging systems',
        points: [
          'Battery systems, motor types, power electronics modules',
          'HV safety protocols aligned with IS 15000 standards',
          'Charging infrastructure installation and maintenance',
          'OEM-agnostic content with brand-specific add-ons',
        ],
        metric: 'Industry-aligned, India-first',
      },
      {
        icon: 'quiz',
        title: 'Assessment Engine',
        desc: 'Practical and theoretical assessments with automated grading and competency mapping',
        points: [
          'Adaptive difficulty based on learner performance',
          'Theory + practical simulation assessments',
          'Auto-grading with competency gap report',
          'Anti-cheat proctoring for remote certifications',
        ],
        metric: '100% automated grading',
      },
      {
        icon: 'workspace_premium',
        title: 'Certification System',
        desc: 'Industry-recognized certificates with QR-verified credentials and digital badges',
        points: [
          'QR-code verified digital certificate on completion',
          'Blockchain-anchored credential (tamper-proof)',
          'Badge system for specializations (battery/motor/safety)',
          'Downloadable for LinkedIn and employer sharing',
        ],
        metric: 'Industry-recognized cert',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Hands-On Modules',
        desc: 'Simulation-based training modules for battery servicing, diagnostics, and safety protocols',
        points: [
          '3D simulation for battery disassembly and fault finding',
          'HV safety procedure walkthroughs with pass/fail gates',
          'Real fault case studies from Indian EV workshops',
          'Safety quiz before each practical module (mandatory)',
        ],
        metric: 'Zero-risk skill building',
      },
      {
        icon: 'work',
        title: 'Placement Tracking',
        desc: 'Industry connections and placement support for certified EV technicians',
        points: [
          'Direct pipeline to hiring partner workshops and OEMs',
          'Profile visible to 50+ EV employer partners',
          'Salary benchmarks by specialization and certification level',
          'Alumni tracking for career progression data',
        ],
        metric: '75%+ placement rate',
      },
      {
        icon: 'analytics',
        title: 'Progress Analytics',
        desc: 'Individual and cohort-level learning analytics for institutions and trainers',
        points: [
          'Learner-level progress dashboard with time-on-task',
          'Cohort comparison benchmarks for institutions',
          'At-risk learner detection 2 weeks before dropout',
          'Custom reports for NSDC and government audits',
        ],
        metric: 'Data-driven training',
      },
    ],
    integrations: ['KAILASH-AI (real-world case studies)', 'GST (practical job card training)'],
    metrics: ['4-6 week certification programs', 'Industry-aligned curriculum', '200+ technicians target'],
    cta: 'Explore Training',
    ctaLink: '/contact',
    externalDomain: productExternalUrls.arjun,
  },

  'kailash-ai': {
    slug: 'kailash-ai',
    name: 'KAILASH-AI',
    shortName: 'KAILASH-AI',
    tagline: 'Central AI Backbone Powering All 12 Industry Verticals',
    icon: 'psychology',
    color: 'primary',
    description: "The central AI backbone of the Go4Garage platform — delivering predictive diagnostics, fleet analytics, battery scoring, and domain intelligence across all 12 industry verticals.",
    problemsSolved: 18,
    problems: [
      "EV fleet breakdowns happen without warning \u2014 predictive maintenance is non-existent in India",
      "Battery health assessments miss 40% of degradation patterns using generic OBD tools",
      "Fleet managers operate blind with no cross-vehicle analytics or cross-site anomaly detection",
      "Insurance companies have no EV-specific risk models, causing inaccurate pricing and losses",
      "CPO revenue forecasting done on gut instinct \u2014 poor capacity planning hurts ROI significantly",
      "Analytics are siloed per product \u2014 no unified intelligence layer across the EV value chain",
    ],
    targetUsers: ['Enterprise Fleet Managers', 'Insurance Companies', 'OEM Analytics Teams', 'Workshop Chains'],
    impactStats: [
      { label: 'Failure Prediction Lead', before: '0 days (reactive)', after: '2\u20134 weeks advance', icon: 'troubleshoot', highlight: 'Weeks of warning' },
      { label: 'Diagnostic Accuracy', before: '~65%', after: '94%+', icon: 'analytics', highlight: '\u2191 29pts accuracy' },
      { label: 'Battery Life Error Margin', before: '\u00b125%', after: '\u00b15%', icon: 'battery_saver', highlight: '\u2193 80% error' },
      { label: 'Unplanned Downtime', before: 'Baseline', after: '\u2193 60% reduction', icon: 'schedule', highlight: '\u2193 60% downtime' },
    ],
    workflowSteps: [
      { step: 1, title: 'Data Ingestion', desc: 'Connect fleet telemetry, workshop job data, and energy data. KAILASH-AI normalizes across all sources.', icon: 'hub' },
      { step: 2, title: 'AI Model Training', desc: "Domain models learn your fleet's baseline. Anomaly thresholds personalized per vehicle type and usage pattern.", icon: 'model_training' },
      { step: 3, title: 'Predictive Alerts', desc: '2-4 week advance failure predictions with root cause analysis. Alerts pushed to fleet manager and workshop.', icon: 'troubleshoot' },
      { step: 4, title: 'Intelligence API', desc: 'Expose predictions via REST API. Plug into insurance, fleet, or third-party platforms seamlessly.', icon: 'api' },
    ],
    features: [
      {
        icon: 'troubleshoot',
        title: 'Predictive Diagnostics',
        desc: 'AI models predict component failures 2-4 weeks ahead, reducing emergency breakdowns',
        points: [
          'Fault prediction 2-4 weeks before failure occurs',
          'Root cause analysis with component-level detail',
          'Priority scoring: critical/warning/watch tiers',
          'Historical failure pattern learning per fleet type',
        ],
        metric: '2-4 weeks early warning',
      },
      {
        icon: 'dashboard',
        title: 'Analytics Dashboard',
        desc: 'Real-time operational intelligence across all Go4Garage products in one view',
        points: [
          'Real-time KPIs across all connected products',
          'Fleet health heatmap by geography and vehicle',
          'Comparative performance: week/month/quarter',
          'Custom report builder with scheduled email delivery',
        ],
        metric: 'One view, full picture',
      },
      {
        icon: 'warning',
        title: 'Anomaly Detection',
        desc: 'Identify unusual patterns in energy consumption, service times, and compliance status',
        points: [
          'Statistical baseline per vehicle, updated weekly',
          'Energy consumption deviation alerts (\u00b115% threshold)',
          'Charging behavior anomalies linked to battery health',
          'Service time outliers flagging technician inefficiency',
        ],
        metric: '94% detection accuracy',
      },
      {
        icon: 'battery_saver',
        title: 'Battery Health Scoring',
        desc: 'Proprietary battery degradation models for EV fleet and insurance risk assessment',
        points: [
          'State-of-Health (SoH) scoring: 0-100 scale',
          'Degradation curve modeling: predict remaining capacity',
          'Risk-tier classification for fleet insurance assessment',
          'Individual cell-level health inference from pack data',
        ],
        metric: 'Industry-first India model',
      },
      {
        icon: 'auto_graph',
        title: 'Revenue Forecasting',
        desc: 'AI-powered demand and revenue forecasting for charging networks and workshops',
        points: [
          'Demand forecasting for CPO sites using EV registration data',
          'Workshop revenue prediction by service type and season',
          'Tariff optimization recommendations for CPO profitability',
          'Scenario modeling: what-if fleet growth projections',
        ],
        metric: 'AI-powered foresight',
      },
      {
        icon: 'api',
        title: 'Intelligence API',
        desc: 'Expose KAILASH-AI capabilities via REST API for third-party integration',
        points: [
          'REST API with OpenAPI 3.0 documentation',
          'Webhooks for real-time failure alert integration',
          'Batch scoring endpoint for fleet health reports',
          'SDKs for Python and JavaScript integration',
        ],
        metric: 'Enterprise-ready API',
      },
    ],
    integrations: ['All Go4Garage products', 'External fleet management systems', 'Insurance platforms'],
    metrics: ['Predictive maintenance alerts', 'Cross-platform analytics', 'Battery health scoring'],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    externalDomain: productExternalUrls['kailash-ai'],
  },

  'eka-ai': {
    slug: 'eka-ai',
    name: 'Eka-AI',
    shortName: 'Eka-AI',
    tagline: 'Conversational AI Agent for All 12 Industry Verticals',
    icon: 'smart_toy',
    color: 'tertiary',
    description: "India's first multi-vertical conversational AI — answers regulatory queries, automates workflows, speaks Hindi, and serves workshops, fleets, insurers, DISCOMs, recyclers, and more.",
    problemsSolved: 3,
    problems: [
      "Operators waste 4+ hours daily answering repetitive compliance and operational queries manually",
      "Critical regulatory updates buried in government PDFs \u2014 operators miss changes causing penalties",
      "Hindi and regional language queries from technicians go unanswered or badly mishandled",
      "Cross-product workflows require manual coordination between URGAA, GST (Go4Garage Service Tools), and KAILASH-AI",
      "Operators juggle 5+ different tools with no unified AI interface for EV operations",
      "Retrieving answers from 50,000+ regulatory documents takes hours of manual searching per query",
    ],
    targetUsers: ['Operations Teams', 'Compliance Officers', 'Customer Support', 'Enterprise Platform Users'],
    impactStats: [
      { label: 'Query Resolution Time', before: '4+ hours', after: '< 2 minutes', icon: 'chat', highlight: '\u2193 99% faster' },
      { label: 'Languages Supported', before: 'English only', after: 'Hindi + English + Regional', icon: 'translate', highlight: '3\u00d7 broader reach' },
      { label: 'Compliance Accuracy', before: '~60%', after: '94%+', icon: 'gavel', highlight: '\u2191 34pts accuracy' },
      { label: 'Manual Workflow Steps', before: '12+ steps', after: '1 AI command', icon: 'auto_mode', highlight: '\u2193 92% steps' },
    ],
    workflowSteps: [
      { step: 1, title: 'Ask Anything', desc: 'Type or speak your query in English or Hindi. Eka understands EV regulatory, operational, and technical context.', icon: 'chat' },
      { step: 2, title: 'Intelligent Retrieval', desc: 'Eka searches 50,000+ documents, regulations, and platform data in under 2 seconds. Cites sources.', icon: 'manage_search' },
      { step: 3, title: 'Coordinated Response', desc: 'Multi-agent system routes to specialized agents: compliance, diagnostics, finance, or customer support.', icon: 'hub' },
      { step: 4, title: 'Automated Action', desc: 'Approve, schedule, or trigger workflows across URGAA, GST (Go4Garage Service Tools), and KAILASH-AI with one confirmation.', icon: 'auto_mode' },
    ],
    features: [
      {
        icon: 'chat',
        title: 'Conversational AI',
        desc: 'Natural language interface for complex regulatory and operational queries in English and Hindi',
        points: [
          'Natural language for complex regulatory multi-step queries',
          'Hindi + English + 8 regional language support',
          'Context-aware follow-up (remembers conversation history)',
          'Voice input support for hands-free operator use',
        ],
        metric: '< 2 min per query',
      },
      {
        icon: 'hub',
        title: 'Multi-Agent Orchestration',
        desc: 'Specialized AI agents for compliance, diagnostics, finance, and customer support working in coordination',
        points: [
          'Specialist agents: compliance, diagnostics, finance, support',
          'Automatic agent routing based on query classification',
          'Agents collaborate on multi-domain queries seamlessly',
          'Confidence scoring \u2014 low confidence escalates to human',
        ],
        metric: '99% first-contact resolution',
      },
      {
        icon: 'search',
        title: 'Knowledge Retrieval',
        desc: "Instant retrieval from India's automobile regulations, service manuals, and compliance guidelines",
        points: [
          '50,000+ structured automotive regulatory records indexed',
          'Real-time regulatory update monitoring (auto-ingested)',
          'Citation-backed answers with source document links',
          'Semantic search vs keyword \u2014 finds related concepts',
        ],
        metric: '94% retrieval accuracy',
      },
      {
        icon: 'auto_mode',
        title: 'Operator Automation',
        desc: 'Automated workflows triggered by AI \u2014 from compliance alerts to service scheduling',
        points: [
          'AI-triggered compliance filing reminders and alerts',
          'Service scheduling automation via natural language command',
          "Cross-product workflow: 'schedule maintenance for fleet X'",
          'Approval workflows with one-tap confirm or reject',
        ],
        metric: '\u2193 92% manual steps',
      },
      {
        icon: 'translate',
        title: 'Multi-Language Support',
        desc: 'Hindi, English, and regional language support for operators across India',
        points: [
          'Hindi-first design: optimized for Indian EV operators',
          'Regional scripts: Gujarati, Marathi, Tamil, Telugu',
          'Auto language detection \u2014 no manual language switch',
          'Transliteration support for mixed Hindi-English queries',
        ],
        metric: 'India-native AI',
      },
      {
        icon: 'integration_instructions',
        title: 'Platform Integration',
        desc: 'Deeply integrated with URGAA, GST (Go4Garage Service Tools), KAILASH-AI for contextual intelligence',
        points: [
          'Deep URGAA: compliance Q&A, filing status',
          'Deep GST (Go4Garage Service Tools): job card creation by voice command',
          'Deep KAILASH-AI: diagnostic explanations in plain language',
          'External: GSTN compliance queries, RTO vehicle data',
        ],
        metric: 'One agent, all products',
      },
    ],
    integrations: ['All Go4Garage products (deep integration)', 'External communication platforms', 'GSTN for compliance queries'],
    metrics: ['Natural language queries', 'Multi-agent coordination', 'Hindi + English support'],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    externalDomain: productExternalUrls['eka-ai'],
  },
};

export const slugs = ['urgaa', 'gstsaas', 'ignition', 'arjun', 'kailash-ai', 'eka-ai'] as const;
export type ProductSlug = typeof slugs[number];
