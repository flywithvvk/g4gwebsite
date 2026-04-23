export interface ArticleSection {
  type: 'heading' | 'paragraph' | 'list' | 'callout' | 'stat-row';
  level?: 2 | 3;
  content?: string;
  items?: string[];
  stats?: Array<{ value: string; label: string }>;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  icon: string;
  author: string;
  authorRole: string;
  sections: ArticleSection[];
}

export const articleData: Record<string, Article> = {
  'india-ev-revolution-ai-compliance': {
    slug: 'india-ev-revolution-ai-compliance',
    title: "India's EV Revolution: How AI is Transforming Compliance",
    excerpt:
      'The EV ecosystem in India is growing at an unprecedented pace. But with growth comes regulatory complexity — across 33 states, multiple ministries, and evolving policies. Learn how AI-powered intelligence is cutting through the chaos to deliver 89.5% compliance automation.',
    date: 'Apr 2026',
    category: 'Regulatory',
    readTime: '8 min read',
    icon: 'auto_stories',
    author: 'Go4Garage Research Team',
    authorRole: 'EV Policy Analysts',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '33', label: 'States with distinct EV regulations' },
          { value: '89.5%', label: 'Compliance automation rate' },
          { value: '₹3.6L', label: 'Avg annual filing cost saved per CPO' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: "The Compliance Burden India's EV Sector Didn't See Coming",
      },
      {
        type: 'paragraph',
        content:
          "India's EV industry has surpassed 2 million annual registrations, establishing itself as one of the fastest-growing EV markets globally. But behind the growth headlines lies an unglamorous operational reality: running an EV business in India means simultaneously navigating regulatory filings across 33 states, multiple central ministries, 64 DISCOMs, the Bureau of Energy Efficiency (BEE), and the Ministry of Petroleum and Natural Gas (MoPNG). For a Charge Point Operator running 50 charging stations across Maharashtra, Karnataka, and Delhi, a single compliance cycle can involve 12 or more applications, over 40 documents, and 60+ working days of human effort.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'What the Data Says About Manual Compliance Costs',
      },
      {
        type: 'paragraph',
        content:
          'A 2025 industry survey conducted by Go4Garage across 140 mid-sized CPOs and EV fleet operators found that compliance-related activities consume an average of 18 person-days per quarter — equivalent to approximately ₹3.6 lakh in annual direct labour cost, before accounting for errors, penalties, and missed deadlines. DISCOM applications are the single largest contributor to this burden. Maharashtra\'s MSEDCL, Delhi\'s TPDDL, Tamil Nadu\'s TNEB, and Gujarat\'s DGVCL each maintain distinct application formats, load sanction procedures, and timeline commitments — with none digitally integrated with one another.',
      },
      {
        type: 'stat-row',
        stats: [
          { value: '18', label: 'Person-days/quarter on compliance' },
          { value: '60+', label: 'Working days per full compliance cycle' },
          { value: '40+', label: 'Documents per DISCOM application set' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'How AI Changes the Compliance Equation',
      },
      {
        type: 'paragraph',
        content:
          "Modern AI compliance platforms like Go4Garage's URGAA address the regulatory complexity by ingesting data from all 33 state regulatory frameworks, building structured workflows for each filing type, and automating the generation, submission, and tracking of applications. What previously required 3 weeks of coordinated effort across multiple team members now takes under 2 hours. URGAA integrates directly with DISCOM portals for LT/HT connection applications in 18 states, auto-populates form fields from the operator's master data repository, and alerts teams to regulatory changes within 24 hours of any government notification.",
      },
      {
        type: 'callout',
        content:
          "URGAA's AI compliance engine has achieved an 89.5% automation rate across DISCOM applications, load sanction filings, and BEE compliance submissions — with a human review layer for the remaining 10.5% of edge cases that require contextual judgment.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The DISCOM Integration Challenge',
      },
      {
        type: 'paragraph',
        content:
          "One of the most technically complex pieces of the compliance puzzle is DISCOM integration. India has 64 operational distribution companies, each running a different vintage of IT infrastructure. URGAA addresses this through adaptive connectors: API-based integrations where available, intelligent web-form automation where APIs don't exist, and assisted filing workflows for legacy portals. As of April 2026, URGAA supports automated DISCOM applications in Maharashtra, Delhi, Karnataka, Tamil Nadu, Gujarat, Rajasthan, Telangana, and Uttar Pradesh — covering 78% of India's installed public charging capacity.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'Regulatory Change Management: The Hidden Complexity',
      },
      {
        type: 'paragraph',
        content:
          "Perhaps the most underestimated compliance challenge is staying current with the rapidly evolving regulatory environment. In FY2025-26 alone, the Ministry of Power issued revised EVSE guidelines, BEE updated energy efficiency norms for charging equipment, and at least 7 states modified their EV tariff structures. For a CPO, missing a single update can mean operating non-compliant equipment for months before an audit surfaces the issue. URGAA's regulatory intelligence engine monitors government gazettes, DISCOM circulars, and BEE notifications in real-time, pushing categorised alerts to operators within 24 hours of any relevant change.",
      },
      {
        type: 'heading',
        level: 2,
        content: "The Path Forward for India's EV Operators",
      },
      {
        type: 'paragraph',
        content:
          "The days of spreadsheet-driven compliance management are ending for serious EV operators. As the sector matures — with enforcement tightening, penalty structures evolving, and the Ministry of Power's OCPP 2.0 mandate taking effect in October 2026 — AI-powered compliance is transitioning from competitive advantage to operational baseline. Operators who invest in systematic compliance infrastructure today are building the regulatory foundation that separates scalable EV businesses from those perpetually firefighting their filing backlogs.",
      },
    ],
  },

  'discom-applications-ev-charging-india': {
    slug: 'discom-applications-ev-charging-india',
    title: 'Complete Guide to DISCOM Applications for EV Charging Stations in India',
    excerpt:
      'A step-by-step walkthrough of DISCOM application processes across all Indian states — timelines, documentation, and common pitfalls to avoid.',
    date: 'Apr 2026',
    category: 'Regulatory',
    readTime: '8 min read',
    icon: 'policy',
    author: 'Go4Garage Policy Team',
    authorRole: 'Regulatory Compliance Specialists',
    sections: [
      {
        type: 'paragraph',
        content:
          "If you're setting up an EV charging station in India, the DISCOM application is the single most time-consuming bureaucratic step — and the one most likely to derail your project timeline. Getting it wrong costs weeks. Getting it right requires knowing exactly what each distribution company expects and when. Here's a complete guide to the process.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'What Is a DISCOM Application?',
      },
      {
        type: 'paragraph',
        content:
          'DISCOM (Distribution Company) applications are the formal requests to your local electricity distribution utility for power supply to your charging station. Depending on the load requirement, you will apply for either an LT (Low Tension) connection for stations below 100 kVA, or an HT (High Tension) connection for larger installations. The application triggers a sequence of assessments: site inspection, load sanction, metering installation, and finally connection commissioning.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Standard Application Process',
      },
      {
        type: 'list',
        items: [
          'Submit Load Application with site plan, proposed load, and owner identity proof',
          'DISCOM conducts site inspection — typically within 5–15 working days of application',
          'Demand Notice issued: pay security deposit (usually 2 months of estimated consumption)',
          'Load Sanction Order issued after deposit confirmation',
          'Infrastructure work: cable laying and meter box installation by DISCOM or approved contractor',
          'Connection energised and revenue meter commissioned',
          'Apply for EV-specific tariff where applicable (available in Delhi, Tamil Nadu, Gujarat)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'State-Wise Timeline Variations',
      },
      {
        type: 'paragraph',
        content:
          'Timeline adherence varies dramatically across states and DISCOMs. Building buffer time into your project plan is essential:',
      },
      {
        type: 'list',
        items: [
          'MSEDCL (Maharashtra): 30–45 working days for LT, 60–90 days for HT. Online application portal available but site inspection scheduling remains manual.',
          "BSES/TPDDL (Delhi): 15–25 working days for LT. Delhi has streamlined processes with a dedicated EV tariff (TPDDL's EV rate: ₹4.50/unit off-peak).",
          'TNEB (Tamil Nadu): 30–60 working days. Additional Form EB-3 required for commercial EV charging classification.',
          'DGVCL/MGVCL (Gujarat): 20–35 working days. Gujarat offers a preferential EV tariff of ₹3.00/unit during designated off-peak hours.',
          'BESCOM (Karnataka): 25–40 working days. Bangalore Urban has a fast-track process for DC fast chargers above 50 kW.',
          'TSSPDCL (Telangana): 30–50 working days. Requires prior NoC from local municipal body for commercial sites.',
        ],
      },
      {
        type: 'callout',
        content:
          'Key Planning Rule: DISCOM timelines are guidelines, not guarantees. Factor a 20–30% buffer into your project schedule and submit applications 3–4 months before your intended commissioning date.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Common Rejection Reasons',
      },
      {
        type: 'list',
        items: [
          'Incomplete site plan or missing certified load calculations',
          'Property ownership documents do not match the applicant entity name',
          'Existing unpaid arrears on the property\'s current electricity connection',
          'Proposed load exceeds local feeder capacity — requires transformer upgrade negotiation',
          'Missing No-Objection Certificate from property owner for leased premises',
          'Incorrect connection category selected (LT vs HT threshold misidentified)',
          'Application submitted under individual name instead of registered business entity',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Documentation Checklist',
      },
      {
        type: 'list',
        items: [
          'Proof of property ownership or registered lease agreement with owner NOC',
          'Site plan drawn to scale, showing charger placement and proposed electrical layout',
          'Load calculation sheet certified and signed by a licensed electrical contractor',
          'Applicant PAN card and current address proof',
          'Business entity registration certificate (GST, Udyam, or incorporation document)',
          'For HT connections: single line diagram and detailed load schedule',
          'For fast chargers (>22 kW): BIS certification document for the charger model (IS 17017)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Automating Applications with URGAA',
      },
      {
        type: 'paragraph',
        content:
          "Go4Garage's URGAA platform automates the DISCOM application workflow end-to-end across 18 states. It pre-populates application forms from your master data repository, auto-generates load calculation sheets from charger specifications, tracks application status in real-time with deadline alerts, and maintains a complete audit trail for each site. For operators managing multiple sites simultaneously, URGAA's batch application feature can initiate filings across 5+ DISCOMs in under 2 hours — versus the 2–3 weeks the same work takes manually.",
      },
    ],
  },

  'ev-workshops-gst-compliance-automation-2026': {
    slug: 'ev-workshops-gst-compliance-automation-2026',
    title: 'How Indian EV Workshops Can Automate GST Compliance in 2026',
    excerpt:
      'GST complexity in EV servicing is real — from input credits to workshop billing. Discover how automation reduces compliance burden by 80%.',
    date: 'Apr 2026',
    category: 'Workshop',
    readTime: '6 min read',
    icon: 'receipt_long',
    author: 'Go4Garage Research Team',
    authorRole: 'Workshop Operations Specialists',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '5%', label: 'GST on EV vehicles' },
          { value: '28%', label: 'GST on conventional vehicles' },
          { value: '18%', label: 'GST on most EV parts & services' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: "India's EV Tax Policy: A Mixed Blessing for Workshops",
      },
      {
        type: 'paragraph',
        content:
          "India's differentiated GST structure for EVs was designed to incentivise adoption — and it's working. However, for workshop technicians, accountants, and operators who live in the details, the same policy creates substantial compliance complexity. The headline rate (5% GST on EVs) tells only part of the story. In practice, an EV workshop servicing electric two-wheelers, handling component replacements, and managing warranty repairs faces GST implications across multiple categories simultaneously — and getting any of them wrong triggers notices.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The GST Rate Landscape for EV Workshops',
      },
      {
        type: 'list',
        items: [
          'EV sale/purchase (both two-wheelers and four-wheelers): 5% GST',
          'EV spare parts — battery cells, motors, controllers: 18% GST under various HSN codes',
          'Labour charges for EV servicing and repair: 18% GST',
          'Battery packs supplied separately: 18% GST (HSN 8507)',
          'Charging equipment, cables, and accessories: 18% GST',
          'Annual Maintenance Contracts (AMCs): 18% GST',
          'Warranty repairs billed to OEM: complex mixed-supply treatment depending on contract structure',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Input Tax Credit Complexity',
      },
      {
        type: 'paragraph',
        content:
          'Workshops that service both EVs and conventional ICE vehicles face a specific ITC challenge. GST law requires businesses to apportion input tax credit between taxable and exempt supplies. Since EV service income (18% GST) and goods purchases attract different rates, and workshops may also offer zero-rated or exempt services, calculating the correct ITC claim each month requires maintaining detailed service-type records. Getting this wrong — in either direction — means either overclaiming ITC (triggering demand notices) or underclaiming (leaving money on the table every quarter).',
      },
      {
        type: 'callout',
        content:
          'A mid-sized EV workshop in Pune processing ₹40 lakh per month in service revenue can expect ₹3.2–4.8 lakh in monthly ITC claims. Getting the ITC apportionment wrong by even 10% represents a ₹32,000–48,000 monthly error — ₹3.8–5.8 lakh annually.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Reverse Charge Mechanism: The Import Issue',
      },
      {
        type: 'paragraph',
        content:
          'Many workshops source specialised EV components — IGBT modules, motor controllers, thermal management components — from overseas suppliers in Germany, China, and South Korea. Under the Reverse Charge Mechanism (RCM) provisions of GST law, the Indian workshop (as recipient) is liable to pay GST on these imports, not the foreign supplier. The RCM liability must be self-assessed and reported in GSTR-3B, and the same amount can then be claimed as ITC in the same return. Failure to account for RCM correctly is a leading cause of GST notices issued to EV workshops in FY2025-26.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Critical HSN Codes for EV Parts',
      },
      {
        type: 'list',
        items: [
          '8507: Electric accumulators — battery packs and cells (18% GST)',
          '8501: Electric motors and generators (18% GST)',
          '8543: EV controllers and inverters (18% GST)',
          '8544: Wiring harnesses and EV-grade cables (18% GST)',
          '9032: Automatic regulating instruments including BMS units (18% GST)',
          '8504: Transformers, chargers, and AC/DC converters (18% GST)',
          '3926: Plastic body parts and trim components (18% GST)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Automating GST Compliance with Go4Garage',
      },
      {
        type: 'paragraph',
        content:
          "Go4Garage's GST product automates the most error-prone parts of workshop GST compliance. It maps every job card line item to the correct HSN code automatically, calculates ITC apportionment ratios from your service mix records, generates pre-populated GSTR-1 and GSTR-3B filings ready for review and submission, and flags RCM obligations when foreign supplier invoices are detected. In FY2025-26, workshops using the platform reported a 78% reduction in GST reconciliation time and zero notices from the GST department — versus an industry average of 1.3 notices per workshop annually.",
      },
    ],
  },

  '33-state-ev-charging-regulations-cpos': {
    slug: '33-state-ev-charging-regulations-cpos',
    title: '33-State EV Charging Regulations: What CPOs Need to Know',
    excerpt:
      "Charge Point Operators face a patchwork of state-level rules. This comprehensive guide covers every state's requirements in one place.",
    date: 'Feb 2026',
    category: 'Regulatory',
    readTime: '10 min read',
    icon: 'verified',
    author: 'Go4Garage Policy Team',
    authorRole: 'Regulatory Compliance Specialists',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '33', label: 'States with distinct EV regulations' },
          { value: '64', label: 'Active DISCOMs in India' },
          { value: '23', label: 'Avg annual filings for 5-state CPO' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Regulatory Patchwork: Why It Is So Complex',
      },
      {
        type: 'paragraph',
        content:
          "India's EV charging regulation operates at two levels: a central framework set by BEE, MoPNG, and the Ministry of Power, and state-level implementation by State Electricity Regulatory Commissions (SERCs) and individual DISCOMs. While the Electricity (Amendment) Rules and BEE EVSE regulations provide a common baseline, states have substantial latitude to modify tariff structures, safety requirements, and connectivity mandates — and most have exercised that latitude in ways that create meaningful operational differences for CPOs operating across multiple states.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'Central Framework: What the BEE and MoPNG Require',
      },
      {
        type: 'list',
        items: [
          'All public charging stations must comply with IS 17017 (BIS standard for EV supply equipment)',
          'Chargers must support OCPP 1.6 minimum; OCPP 2.0 mandated for all new installations from October 2026',
          'AC chargers: Type 1 and Type 2 connectors required; DC chargers: CCS2 and CHAdeMO',
          'Minimum 1 DC fast charger (≥50 kW) per every 3 AC slow chargers at expressway stations',
          'Real-time availability data must be shareable via EVSE API for the BEE national EV charging dashboard',
          'Energy metering must use IS-certified meters for billing accuracy and auditability',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Key State Variations CPOs Must Track',
      },
      {
        type: 'list',
        items: [
          'Delhi: Dedicated EV tariff (TPDDL ₹4.50/unit off-peak). Mandatory prior approval from DERC for commercial stations above 30 kW. Rooftop solar mandate for fast-charging hubs.',
          'Maharashtra: No state-specific EV tariff; DISCOMs apply commercial rates. MSEDCL requires NoC from local authority in addition to standard DISCOM application.',
          'Karnataka: BESCOM has a dedicated EV Charging Infrastructure desk. State mandates interoperability with the Karnataka EV charging aggregator platform.',
          'Tamil Nadu: TNEB concessional tariff for off-peak EV charging (11pm–6am: ₹3.50/unit). Additional registration with Tamil Nadu Energy Development Agency (TEDA) required.',
          'Gujarat: DGVCL/MGVCL offer ₹3.00/unit off-peak and ₹5.50/unit peak. Gujarat EV Policy mandates 20% of mall and commercial parking to have EV charging by 2026.',
          'Rajasthan: Standard commercial tariffs apply. State EV Policy 2022 requires CPOs to register on the Rajasthan EV Portal for subsidy tracking and compliance reporting.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'OCPP Compliance: The October 2026 Deadline',
      },
      {
        type: 'paragraph',
        content:
          "The Ministry of Power's April 2026 mandate for OCPP 2.0 on all new public chargers represents the most significant recent regulatory shift. OCPP 2.0 enables smart charging features, V2G (Vehicle-to-Grid) readiness, and improved interoperability across charging networks. For CPOs with older charger infrastructure, this means a technical refresh cycle is now unavoidable — and the October 2026 deadline is tight. URGAA's compliance calendar automatically tracks OCPP certification status for each charger asset and alerts operators when upgrades or renewals are required.",
      },
      {
        type: 'callout',
        content:
          'CPOs operating across 5+ states face an average of 23 distinct annual filing requirements — spanning DISCOMs, SERCs, BEE, and local authorities. Missing any single filing can trigger penalties ranging from ₹10,000 to ₹1 lakh per violation, plus potential station shutdown orders.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Penalty Structures: What Non-Compliance Costs',
      },
      {
        type: 'list',
        items: [
          'Operating without valid DISCOM connection approval: ₹25,000–₹1,00,000 per station',
          'Non-compliant or non-certified metering equipment: ₹10,000–₹50,000 plus mandatory rectification order',
          'Failure to display mandatory tariff rates at the charging station: ₹5,000–₹25,000 per notice',
          'Operating non-BIS-certified EVSE equipment: potential station shutdown plus ₹50,000 fine',
          'Data non-reporting to BEE EVSE national portal: ₹10,000 per quarter per station',
          'OCPP non-compliance after October 2026 deadline: ₹15,000–₹75,000 per charger',
        ],
      },
      {
        type: 'paragraph',
        content:
          "The enforcement environment is tightening significantly. Multiple SERC commissions issued orders in FY2025-26 directing DISCOMs to conduct physical verification of registered EV charging stations. Non-compliant operators are facing both financial penalties and operational shutdowns. For CPOs operating at scale, building a systematic compliance programme is no longer optional — it is a prerequisite for sustainable operation.",
      },
    ],
  },

  'predictive-maintenance-ev-fleets-ai': {
    slug: 'predictive-maintenance-ev-fleets-ai',
    title: 'Predictive Maintenance for EV Fleets: AI-Powered Approach',
    excerpt:
      'How AI and IoT sensor data can predict component failures before they happen — reducing downtime and extending battery life for fleet operators.',
    date: 'Feb 2026',
    category: 'AI & Tech',
    readTime: '7 min read',
    icon: 'model_training',
    author: 'Go4Garage Tech Team',
    authorRole: 'EV Fleet Technology Specialists',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '23%', label: 'Avg unplanned downtime reduction' },
          { value: '18%', label: 'Battery life extension' },
          { value: '₹4.2L', label: 'Annual TCO savings per 50-EV fleet' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Why EV Maintenance Is Fundamentally Different',
      },
      {
        type: 'paragraph',
        content:
          "EV fleet management requires a fundamentally different maintenance paradigm than ICE fleet operations. While EVs eliminate engine oil changes, spark plugs, and transmission servicing, they introduce new failure modes that are harder to diagnose with conventional tools: battery degradation, BMS faults, motor controller anomalies, and thermal management system failures. These failures are often gradual, invisible to the naked eye, and expensive to remediate once they escalate. A battery pack replacement on a commercial EV three-wheeler costs ₹60,000–₹1.5 lakh; catching the degradation pattern 60 days earlier reduces that to a ₹8,000 cell replacement and a scheduled service visit.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Sensor Data Points That Drive Prediction',
      },
      {
        type: 'list',
        items: [
          'State of Charge (SoC) variance — deviation from the expected SoC curve indicates cell-level degradation',
          'State of Health (SoH) — overall battery capacity as a percentage of rated capacity at delivery',
          'Cell temperature delta — temperature difference between cells signals thermal management issues',
          'Charge-discharge cycle count and depth — the leading predictor of remaining battery life',
          'Motor current draw at standardised loads — elevated draw indicates motor or transmission wear',
          'Regenerative braking efficiency trend — degraded regen performance suggests motor or controller issues',
          'Onboard fault codes (ECU-generated) — often precede visible symptoms by days to weeks',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'How KAILASH-AI Predicts Failures',
      },
      {
        type: 'paragraph',
        content:
          "KAILASH-AI's predictive maintenance engine ingests telematics data from fleet vehicles via OBD-II dongles or direct OEM telematics integrations. The ML models — trained on failure histories from thousands of EVs operating across Indian conditions, including extreme heat, monsoon humidity, and high-dust environments — identify patterns that reliably precede specific failure types. For example, a 3% increase in charge time coupled with elevated cell temperature delta and a specific SoH decline pattern over 45 days has been correlated with imminent battery pack failure in Bajaj RE EVs operating in high-ambient-temperature conditions.",
      },
      {
        type: 'callout',
        content:
          'KAILASH-AI correctly identified 87% of battery failures 45+ days before they occurred in a 2025 pilot with a 120-vehicle EV delivery fleet in Chennai — preventing 34 unplanned breakdowns and saving an estimated ₹18.4 lakh in emergency repair and vehicle downtime costs.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'From Detection to Maintenance Action',
      },
      {
        type: 'paragraph',
        content:
          "Prediction is only valuable if it triggers the right maintenance action at the right time. KAILASH-AI integrates with workshop management systems to automatically schedule predictive maintenance appointments when a vehicle crosses a configurable risk threshold. The system prioritises work orders based on failure severity, vehicle utilisation rate (high-utilisation vehicles get earlier slots), and workshop capacity — preventing the common problem of simultaneous maintenance alerts overwhelming a fleet manager's queue.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'Total Cost of Ownership Impact',
      },
      {
        type: 'stat-row',
        stats: [
          { value: '23%', label: 'Reduction in unplanned downtime' },
          { value: '18%', label: 'Battery pack life extension' },
          { value: '35%', label: 'Emergency repair cost reduction' },
        ],
      },
      {
        type: 'paragraph',
        content:
          'A 50-EV logistics fleet operating in a Tier-1 Indian city spends approximately ₹28–32 lakh annually on maintenance, including emergency repairs and battery replacements. Based on pilot data, KAILASH-AI reduces this by ₹4–5 lakh annually through earlier, less invasive interventions — with the majority of savings coming from avoiding full battery pack replacements.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Getting Started: What You Need',
      },
      {
        type: 'paragraph',
        content:
          'Implementing predictive maintenance for your EV fleet requires three components: telematics data collection, an analytics platform, and integration with your maintenance workflow. KAILASH-AI handles all three, with deployment possible in under 2 weeks for standard fleet configurations. The platform natively supports Tata Ace EV, Mahindra Treo, Piaggio Ape E-City, Bajaj RE EV, and all major two-wheeler EV platforms, with custom integrations available for OEM-proprietary telematics systems.',
      },
    ],
  },

  'ev-technician-certification-india': {
    slug: 'ev-technician-certification-india',
    title: 'EV Technician Certification: Why Standardization Matters for India',
    excerpt:
      "India needs 100,000+ certified EV technicians by 2030. Here's why a national certification standard is critical and what it should include.",
    date: 'Jan 2026',
    category: 'Workshop',
    readTime: '5 min read',
    icon: 'engineering',
    author: 'Go4Garage Research Team',
    authorRole: 'Workforce Development Specialists',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '1 lakh+', label: 'Technician shortfall by FY2026' },
          { value: '800V', label: 'Max HV in premium EVs' },
          { value: '4 weeks', label: 'Standard certification cycle' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: "India's EV Technician Crisis",
      },
      {
        type: 'paragraph',
        content:
          "India's EV industry is growing faster than its technician workforce can keep up. Industry bodies estimate a shortfall of over 1 lakh certified EV technicians by FY2026, with the gap widening as EV registrations continue their 40–60% annual growth trajectory. The problem isn't just numbers — it's qualification. Most of India's 3.2 million auto technicians were trained entirely on ICE vehicles. Retraining them for EV-specific competencies — particularly high-voltage safety, battery diagnostics, and motor controller troubleshooting — requires a fundamentally different curriculum and hands-on training approach.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The High-Voltage Safety Imperative',
      },
      {
        type: 'paragraph',
        content:
          'The most critical distinction between ICE and EV servicing is the presence of high-voltage systems. Under IS 17017 and AIS-138 safety standards, EV battery systems classified as HV (above 60V DC) require technicians to be trained in: HV lockout/tagout procedures; personal protective equipment (HV-rated gloves rated to 1000V, face shields); HV cable identification and colour-coded system protocols; isolation verification before any maintenance intervention; and emergency response procedures for HV incidents. An untrained technician contacting a live HV bus bar can receive a fatal shock. This is not a theoretical risk — HV incidents have been reported at informal workshops across India.',
      },
      {
        type: 'callout',
        content:
          "India's EV battery packs operate between 48V (two-wheelers) and 800V DC (premium passenger cars). Any system above 60V DC is classified as High Voltage under IEC 60038 and requires trained, certified personnel for any maintenance or diagnostic work.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Certification Landscape',
      },
      {
        type: 'list',
        items: [
          'NSDC/ASDC (Automotive Skills Development Council): Offers QP/NOS-based EV Service Technician qualification (QP: ASC/Q1401) with national recognition',
          'ARAI and NATRIP: Provide advanced diagnostics certification for workshop instructors and senior master technicians',
          'State ITIs: Progressive integration of EV modules into existing automobile technology curriculum — 47 ITIs had dedicated EV modules as of March 2026',
          'OEM Dealer Networks: Tata Motors, Mahindra, Ola Electric, and Bajaj run proprietary certification programmes that complement but do not replace national frameworks',
          'AICTE: Proposed inclusion of EV service modules in polytechnic diploma programmes from FY2026-27',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'The 4-Week Certification Cycle',
      },
      {
        type: 'list',
        items: [
          'Week 1: EV fundamentals — battery chemistry, BMS operation, motor types, HV safety theory and regulatory framework',
          'Week 2: Practical HV safety procedures — PPE use, lockout/tagout drills, isolation verification, and ISO 26262 safety protocols',
          'Week 3: Vehicle diagnostics — fault code interpretation, BMS troubleshooting, motor testing, and thermal system inspection',
          'Week 4: Charging system maintenance, EVSE troubleshooting, final practical assessment, and ASDC examination',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Go4Garage EV VIDYA ARJUN: Certification at Scale',
      },
      {
        type: 'paragraph',
        content:
          "Go4Garage's EV VIDYA ARJUN platform delivers the complete ASDC-aligned certification curriculum digitally, combining AR (Augmented Reality) simulations for HV safety training, video-based practical demonstrations by ASC-certified master technicians, and automated assessment with immediate certification issuance. Workshops using EV VIDYA ARJUN have certified their first technician batch in under 5 weeks on average — significantly faster than classroom-only approaches, and accessible to technicians in Tier-2 and Tier-3 cities without requiring travel to training centres.",
      },
      {
        type: 'paragraph',
        content:
          "For India's EV sector, technician certification is the unsung infrastructure requirement. Every charging station, every workshop, every fleet service centre needs certified personnel. As EV system voltages increase with new vehicle generations and battery chemistries evolve, the technical baseline will only raise further. The window to build the workforce at scale — before unsafe practices become entrenched — is open right now.",
      },
    ],
  },

  'india-ev-subsidy-state-vs-central': {
    slug: 'india-ev-subsidy-state-vs-central',
    title: "Understanding India's EV Subsidy Landscape: State vs Central Schemes",
    excerpt:
      "From FAME to state-level incentives — navigating India's EV subsidy ecosystem can unlock significant savings for buyers and operators alike.",
    date: 'Jan 2026',
    category: 'Policy',
    readTime: '9 min read',
    icon: 'account_balance',
    author: 'Go4Garage Policy Team',
    authorRole: 'Policy Research Specialists',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '₹10,900Cr', label: 'PM e-DRIVE scheme outlay' },
          { value: '29', label: 'States with active EV subsidy schemes' },
          { value: '₹1.5L', label: 'Max EV4W subsidy in Delhi (draft)' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'From FAME to PM e-DRIVE: The Central Subsidy Evolution',
      },
      {
        type: 'paragraph',
        content:
          "The FAME (Faster Adoption and Manufacturing of Hybrid and Electric Vehicles) scheme was India's first structured central EV subsidy programme. FAME II (2019–2024) disbursed approximately ₹10,000 crore in incentives for over 1.5 million EVs and 7,400 charging stations. With FAME II concluded in March 2024, the PM e-DRIVE scheme — approved in September 2024 with a ₹10,900 crore outlay for FY2024-25 to FY2025-26 — takes over with a recalibrated focus: two-wheelers, three-wheelers, and electric buses rather than personal four-wheelers.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'PM e-DRIVE Scheme: Key Parameters',
      },
      {
        type: 'list',
        items: [
          'Total outlay: ₹10,900 crore across FY2024-25 and FY2025-26',
          'Electric two-wheelers: ₹5,000 per kWh of battery capacity, maximum ₹10,000 per vehicle',
          'Electric three-wheelers (e-rickshaws, e-autos, L5): ₹25,000 per vehicle',
          'Electric intracity buses (9–12 metre): ₹20 lakh per bus; (12+ metre): ₹35 lakh per bus',
          'EV charging infrastructure: ₹2,000 crore component for public charging rollout',
          'Benefit flows through registered OEMs, passed to buyer as price reduction at point of sale',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'State-Level Incentives: The Real Opportunity for Operators',
      },
      {
        type: 'paragraph',
        content:
          'For many buyers and fleet operators, state incentives can substantially exceed central subsidies — particularly for four-wheelers not covered under PM e-DRIVE. The key state schemes as of early 2026 include the following:',
      },
      {
        type: 'list',
        items: [
          'Delhi EV Policy 2.0 (Draft, 2026): Up to ₹25,000 for e-two-wheelers, ₹1.5 lakh for e-four-wheelers, ₹30,000 for e-autos. Road tax and registration fee waiver.',
          'Tamil Nadu: 100% SGST reimbursement on EVs at dealer level, ₹10,000 consumer incentive for e-two-wheelers. Special incentive rates for EV fleet operators making bulk purchases.',
          'Gujarat: ₹20,000 for e-two-wheelers (income-linked), ₹1.5 lakh for e-buses. Full road tax exemption through FY2026.',
          'Maharashtra: Stamp duty exemption on EV financing agreements; dedicated subsidy structure for EV public transport operators.',
          'Karnataka: 100% road tax and registration fee exemption; 5-year exemption from permit fees for electric autos and cabs.',
          'Rajasthan: ₹10,000 for e-two-wheelers, interest subvention on EV loans from state financial institutions.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'PLI Scheme for ACC Battery Manufacturing',
      },
      {
        type: 'paragraph',
        content:
          "For operators investing in energy storage for large charging hubs or grid-connected battery systems, India's PLI scheme for ACC (Advanced Chemistry Cell) batteries is directly relevant. The ₹18,100 crore scheme incentivises domestic battery manufacturing, with the downstream effect of reducing battery procurement costs for operators by an estimated 15–20% over the scheme period as domestic supply scales and import dependency reduces.",
      },
      {
        type: 'callout',
        content:
          'A fleet operator in Tamil Nadu purchasing 20 electric three-wheelers can potentially access: PM e-DRIVE subsidy (₹5 lakh total) + TN SGST reimbursement (~₹2.4 lakh) + TN consumer incentive (₹2 lakh) = ₹9.4 lakh in combined incentives, reducing total acquisition cost by 28–35%.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'How to Stack Incentives: A Step-by-Step Guide',
      },
      {
        type: 'list',
        items: [
          'Verify the vehicle model is registered on the PM e-DRIVE OEM portal before committing to purchase',
          'Apply for state subsidy at dealer level — most states process the benefit at point of sale',
          'Claim SGST reimbursement (where applicable) through the state portal within 90 days of purchase',
          'Ensure GST invoice correctly reflects the 5% EV rate for ITC eligibility (commercial buyers)',
          'Check PLI-linked battery discount eligibility with the OEM — passed through as a vehicle price reduction',
          'Register for road tax exemption at the RTO using the EV-specific application form for your state',
        ],
      },
      {
        type: 'paragraph',
        content:
          "India's EV incentive landscape rewards the informed buyer and operator. Unassisted buyers typically capture only 40–60% of available benefits. For fleet operators making bulk EV purchases in the ₹1–5 crore range, professional navigation of the full subsidy stack — central plus state plus financing schemes — can represent ₹50–80 lakh in realised savings that would otherwise be left unclaimed.",
      },
    ],
  },

  'india-ev-sales-fy2026-record-numbers': {
    slug: 'india-ev-sales-fy2026-record-numbers',
    title: "India EV Sales FY2026: Record Numbers and What's Driving Unprecedented Growth",
    excerpt:
      'India crossed 2 million EV registrations in FY2025-26, marking a 67% year-on-year surge. From two-wheelers to commercial fleets, we break down the data — and what it means for CPOs, workshops, and the broader ecosystem.',
    date: 'Apr 2026',
    category: 'Policy',
    readTime: '7 min read',
    icon: 'trending_up',
    author: 'Go4Garage Research Team',
    authorRole: 'Market Intelligence',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '20.3L', label: 'Total EV registrations FY26' },
          { value: '67%', label: 'Year-on-year growth' },
          { value: '₹45K', label: 'Entry EV two-wheeler price now' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'India Crosses the 2 Million EV Milestone',
      },
      {
        type: 'paragraph',
        content:
          "FY2025-26 marked a watershed moment for India's electric vehicle industry. With 2.03 million EV registrations across all categories — up 67% from 1.22 million in FY2024-25 — India has firmly established itself as the world's third-largest EV market by volume. The milestone is especially significant given that it was achieved without personal four-wheeler EVs driving the numbers. Instead, two-wheelers, three-wheelers, and commercial vehicles powered the surge, reflecting the fundamentally different character of India's EV transition compared to Western markets.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Two-Wheeler Engine: Three OEMs Dominate',
      },
      {
        type: 'paragraph',
        content:
          'Electric two-wheelers accounted for 58% of total EV registrations in FY2025-26, with 1.18 million units sold. Three manufacturers continue to dominate the segment:',
      },
      {
        type: 'list',
        items: [
          'Ola Electric: 4.2 lakh units (35.6% market share) — S1 series and Roadster X drove volume across Tier-1 and Tier-2 cities',
          'Bajaj Chetak: 2.8 lakh units (23.7%) — premium positioning and expanded dealer network yielded consistent growth',
          'TVS iQube: 2.1 lakh units (17.8%) — iQube ST\'s extended range attracted significant fleet buyer interest',
          'Ather Energy: 1.4 lakh units (11.9%) — 450X and Rizta maintained strong Tier-1 city presence with OTA-update differentiation',
          'Hero Vida and others: 1.1 lakh units (9%) — growing but fragmented, with multiple new entrants below ₹80,000',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Commercial Vehicles: The Quiet Revolution',
      },
      {
        type: 'paragraph',
        content:
          "The most strategically significant growth story in FY2025-26 was commercial vehicle electrification. Electric three-wheelers for last-mile delivery grew 94% year-on-year to 3.8 lakh units, driven by logistics platform mandates and favourable PM e-DRIVE subsidy structures. Electric buses saw accelerated procurement by state transport undertakings under CESL's aggregated tender programme. Tata Ace EV and Mahindra Treo Zor gained serious traction with logistics platforms including Flipkart, Amazon, and Delhivery, who have publicly committed to EV-first fleet procurement policies.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Infrastructure Gap Problem',
      },
      {
        type: 'callout',
        content:
          'India has 2 million EVs and only 25,614 operational public charging points — a ratio of 78 EVs per charger. Global best practice is 10–15 EVs per charger. Closing this gap requires ₹18,000–24,000 crore in charging infrastructure investment by 2028.',
      },
      {
        type: 'paragraph',
        content:
          "The charging infrastructure gap remains the most significant near-term constraint on adoption acceleration. While two-wheeler owners can primarily charge at home, the 3.8 lakh new commercial three-wheelers added in FY2026 — predominantly operated by drivers without dedicated parking — need public and semi-public charging solutions. CESL's April 2026 tender for 10,000 new highway chargers is welcome progress, but far short of the estimated 75,000 new public charging points needed by FY2028.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'What This Means for the EV Ecosystem',
      },
      {
        type: 'list',
        items: [
          'CPOs: Charger utilisation rates are rising rapidly — infrastructure investment made today has a stronger ROI case than at any prior point in India\'s EV history',
          'Workshops: A 67% YoY increase in EVs on the road creates a direct service bay demand surge — workshops without EV certification are already turning away revenue',
          'Fleet operators: With acquisition costs falling (sub-₹1 lakh two-wheelers, sub-₹5 lakh LCVs) and charging expanding, the TCO case for fleet electrification is now compelling even in Tier-2 cities',
          'Parts & battery suppliers: Cell replacement demand will materialise in earnest from FY2026-27 as vehicles from the 2021-22 adoption wave approach 4-5 years of use',
        ],
      },
      {
        type: 'paragraph',
        content:
          "India's EV market has crossed its inflection point. The question for industry participants is no longer whether to participate in the EV economy — it's how rapidly they can build the capabilities, infrastructure, and compliance frameworks to serve a market growing faster than most projections anticipated.",
      },
    ],
  },

  'pm-e-drive-scheme-operators-guide-2026': {
    slug: 'pm-e-drive-scheme-operators-guide-2026',
    title: "PM e-DRIVE Scheme: Complete Operator's Guide for FY2026 Claims",
    excerpt:
      "With FAME II concluded and PM e-DRIVE in full swing, CPOs and fleet operators face new subsidy claim procedures. Here's a step-by-step walkthrough of the eligibility criteria, documentation, and disbursement timelines under the ₹10,900 crore scheme.",
    date: 'Mar 2026',
    category: 'Policy',
    readTime: '9 min read',
    icon: 'account_balance',
    author: 'Go4Garage Policy Team',
    authorRole: 'Policy Research Specialists',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '₹10,900Cr', label: 'Total scheme outlay' },
          { value: '41.4L', label: 'Target EVs to be supported' },
          { value: '₹2,000Cr', label: 'Charging infra component' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'PM e-DRIVE: What It Is and Why It Replaced FAME II',
      },
      {
        type: 'paragraph',
        content:
          'The PM Electric Drive Revolution in Innovative Vehicle Enhancement (PM e-DRIVE) scheme, approved by the Cabinet in September 2024 with a ₹10,900 crore outlay spanning FY2024-25 and FY2025-26, represents India\'s second-generation central EV incentive programme. Unlike FAME II, which used a demand-linked subsidy model that proved vulnerable to fraudulent claims from non-compliant OEMs, PM e-DRIVE uses a direct benefit disbursement model with tighter OEM registration requirements and real-time VahanDB linkage — significantly improving accountability and reducing leakage.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Eligible Vehicle Categories and Subsidy Quantum',
      },
      {
        type: 'list',
        items: [
          'Electric two-wheelers: ₹5,000 per kWh, maximum ₹10,000 per vehicle (2–4 kWh pack most common)',
          'Electric three-wheelers — L5 passenger and L5M cargo: ₹25,000 per vehicle',
          'Electric intracity buses, 9–12 metre: ₹20 lakh per bus',
          'Electric intracity buses, 12+ metre: ₹35 lakh per bus',
          'Electric ambulances: ₹10 lakh per vehicle under a dedicated sub-scheme',
          'EV charging infrastructure: eligible CPOs claim infrastructure support via the MoP portal separately',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Claim Process: Step by Step',
      },
      {
        type: 'list',
        items: [
          'Step 1 — OEM Registration: Vehicle manufacturer registers on the PM e-DRIVE portal with VahanDB integration credentials. Only vehicles from registered OEMs are eligible.',
          'Step 2 — VahanDB Linkage: At point of sale, the OEM dealer registers the vehicle in VahanDB with EV-specific fields: battery capacity (kWh), OEM registration ID, and subsidy claim flag.',
          'Step 3 — Subsidy Disbursement: Ministry of Heavy Industries (MHI) disburses subsidy directly to the OEM bank account monthly, based on verified VahanDB sales data from the previous month.',
          'Step 4 — Buyer Price Reduction: OEM passes through the subsidy as a price reduction at point of sale. The buyer receives the discounted price; invoice documents the subsidy amount applied.',
          'Step 5 — Charging Infra Claims (CPOs): File a separate application on the MoP EVSE Infra portal with DISCOM approval, installation photos, and BIS certification documents.',
        ],
      },
      {
        type: 'callout',
        content:
          'Key Detail for Buyers: You do not need to file any subsidy claim yourself for the vehicle component. The PM e-DRIVE subsidy is processed entirely by the OEM and automatically reflected in the vehicle price. Verify the subsidy amount on your purchase invoice.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Documentation CPOs Need for Charging Infra Claims',
      },
      {
        type: 'list',
        items: [
          'Valid DISCOM connection approval letter for the site',
          'BIS certification of charging equipment (IS 17017 Part 2 for AC, Part 3 for DC)',
          'Geo-tagged installation photographs — minimum 4 angles showing the charger, site, and meter',
          'Site address proof and ownership or lease documents',
          'GSTIN and PAN of the claiming entity',
          'Bank account details for direct benefit transfer',
          'For chargers above 50 kW: electrical safety certificate from a licensed electrical inspector',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Common Rejection Causes',
      },
      {
        type: 'list',
        items: [
          'OEM not registered on PM e-DRIVE portal — verify eligibility before vehicle purchase',
          'Vehicle registered in VAHAN with incorrect battery capacity (mismatch from OEM data)',
          'Dealer submitted incorrect OEM registration ID — verify subsidy certificate at time of delivery',
          'For infra claims: charger model not in the current BIS-approved equipment list',
          'For infra claims: DISCOM connection registered under a different entity name than the applicant',
          'Infra claim submitted after the 90-day post-commissioning window has closed',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Timeline and Disbursement',
      },
      {
        type: 'paragraph',
        content:
          "For vehicle subsidies, disbursement to OEMs typically occurs within 45–60 days of the monthly data cut-off based on VahanDB verification. For charging infrastructure claims, the MoP EVSE portal processes applications within 90 working days of a complete submission — though in practice, straightforward claims with complete documentation are typically cleared within 60–75 days. Go4Garage's URGAA platform tracks PM e-DRIVE claim status in real-time, sends alerts for document deficiencies, and maintains a complete audit trail for all subsidy interactions, supporting both annual compliance and any future inspections.",
      },
    ],
  },

  'battery-waste-management-rules-ev-operators-2026': {
    slug: 'battery-waste-management-rules-ev-operators-2026',
    title: 'Battery Waste Management Rules 2022: What EV Operators Must Do in 2026',
    excerpt:
      "India's Battery Waste Management Rules mandate EPR (Extended Producer Responsibility) compliance for all EV operators. With enforcement stepping up in 2026, here's exactly what your business needs — from registration to collection targets.",
    date: 'Mar 2026',
    category: 'Regulatory',
    readTime: '6 min read',
    icon: 'battery_horiz_075',
    author: 'Go4Garage Policy Team',
    authorRole: 'Environmental Compliance Specialists',
    sections: [
      {
        type: 'stat-row',
        stats: [
          { value: '₹1L/day', label: 'Max penalty for non-compliance' },
          { value: '25%→60%', label: 'Collection targets by 2027-28' },
          { value: '847', label: 'EPR notices issued by CPCB (Mar 2026)' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'What Are the Battery Waste Management Rules?',
      },
      {
        type: 'paragraph',
        content:
          "The Battery Waste Management Rules, 2022 (notified under the Environment Protection Act) establish a comprehensive Extended Producer Responsibility (EPR) framework for all batteries in India — including EV batteries. For EV fleet operators, charge point operators who own battery swapping infrastructure, and workshops that handle end-of-life EV batteries, these rules create specific compliance obligations that moved from advisory to actively enforced in FY2025-26. The CPCB's issuance of 847 notices to EV operators in March 2026 marks the beginning of serious enforcement.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'Who Is Covered Under the Rules?',
      },
      {
        type: 'list',
        items: [
          'EV OEMs: Mandatory EPR registration with CPCB as "Producers" for all battery types sold',
          'Battery importers: Registration as Producers for all imported battery categories',
          'EV fleet operators with more than 50 vehicles: Required to register and declare total battery inventory',
          'Workshops handling EV battery replacements: Must route all replaced batteries through registered recyclers or PROs',
          'Battery swapping network operators: Treated as Producers for all batteries in circulation under their network',
          'CPOs with Battery Energy Storage Systems (BESS): Registration required if total battery capacity exceeds 2 MWh',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'The EPR Targets: Collection and Recycling Obligations',
      },
      {
        type: 'paragraph',
        content:
          'The rules establish phased collection targets expressed as a percentage of batteries sold or deployed in prior years:',
      },
      {
        type: 'list',
        items: [
          'FY2024-25: Collect and recycle 25% of batteries sold in FY2021-22',
          'FY2025-26: Collect and recycle 33% of batteries sold in FY2022-23',
          'FY2026-27: Collect and recycle 40% of batteries sold in FY2023-24',
          'FY2027-28: Collect and recycle 60% of batteries sold in FY2024-25',
          'FY2029-30: Collect and recycle 70% of batteries sold in FY2025-26',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'How to Register on the CPCB EPR Portal',
      },
      {
        type: 'list',
        items: [
          'Step 1: Create an entity account on the CPCB Extended Producer Responsibility portal at epr.cpcb.gov.in',
          'Step 2: Submit the registration form with business details, battery types handled, and estimated annual battery deployment volume',
          'Step 3: CPCB review period — typically 15–30 working days for standard applications',
          'Step 4: Registration certificate issued, valid for 3 years before renewal',
          'Step 5: Annual EPR collection target notified by CPCB based on your registration data',
          'Step 6: Link with a registered PRO (Producer Responsibility Organisation) or establish your own compliant collection mechanism',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'PRO Options: Self-Managed vs. Outsourced EPR',
      },
      {
        type: 'paragraph',
        content:
          'EPR obligations can be met through two routes. The first is engaging a registered PRO — an organisation authorised by CPCB to collect and channel batteries to certified recyclers on behalf of producers. This transfers the operational complexity of collection to a specialist and typically costs ₹8–15 per Wh of battery capacity collected. The second is a self-managed EPR plan, where the operator establishes their own collection points and contracts directly with CPCB-certified recyclers. Self-management makes economic sense for large fleet operators with more than 500 vehicles who have sufficient scale to manage collection logistics.',
      },
      {
        type: 'callout',
        content:
          'CPCB issued 847 notices to EV operators in March 2026 for EPR non-compliance — primarily for failure to register, missing annual returns, and routing end-of-life batteries through non-certified channels. Penalties under the Environment Protection Act can reach ₹1 lakh per day per violation.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Annual Reporting and Documentation Requirements',
      },
      {
        type: 'list',
        items: [
          'Annual Return: File by June 30 each year on the CPCB EPR portal, detailing batteries deployed, collected, and recycled in the previous financial year',
          'Battery Transfer Documents: Maintain records of all battery transfers to PROs or certified recyclers for a minimum of 3 years',
          'Recycling Certificates: Obtain and retain certificates from certified processors as audit evidence',
          'Inventory Declaration: Annual update of total battery inventory on the CPCB portal',
          'Non-compliant battery disposal: Any informal disposal — landfilling, open burning — attracts criminal liability under the Environment Protection Act',
        ],
      },
    ],
  },
};
