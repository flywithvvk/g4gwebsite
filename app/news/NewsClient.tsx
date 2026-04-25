'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/Icon';

const newsCategories = ['All', 'Policy', 'Industry', 'Technology', 'Go4Garage', 'Funding'] as const;
type NewsCategory = (typeof newsCategories)[number];

interface NewsItem {
  id: string;
  category: Exclude<NewsCategory, 'All'>;
  date: string;
  headline: string;
  summary: string;
  source: string;
}

const categoryColors: Record<string, string> = {
  Policy: 'bg-primary/10 text-primary',
  Industry: 'bg-secondary/10 text-secondary',
  Technology: 'bg-tertiary/10 text-tertiary',
  'Go4Garage': 'bg-primary-container/20 text-on-surface',
  Funding: 'bg-secondary-container/20 text-secondary',
};

const categoryIcons: Record<string, string> = {
  Policy: 'gavel',
  Industry: 'electric_car',
  Technology: 'memory',
  'Go4Garage': 'bolt',
  Funding: 'payments',
};

const newsItems: NewsItem[] = [
  {
    id: '1',
    category: 'Go4Garage',
    date: 'Apr 2026',
    headline: 'Go4Garage Launches URGAA 2.0: All-33-State Compliance Coverage with Automated DISCOM Filing',
    summary:
      "Go4Garage has released URGAA 2.0, extending its AI-powered compliance platform to cover all 33 Indian states with automated DISCOM application filing, real-time regulatory change alerts, and a new penalty risk assessment dashboard. The update integrates with 18 DISCOM portals and processes compliance workflows 40% faster than the previous version, covering 78% of India's installed public charging capacity.",
    source: 'Go4Garage',
  },
  {
    id: '2',
    category: 'Policy',
    date: 'Apr 2026',
    headline: 'Ministry of Power Mandates OCPP 2.0 Compliance for All Public Chargers by October 2026',
    summary:
      'The Ministry of Power has issued guidelines requiring all new public EV charging stations installed from October 2026 to support the OCPP 2.0 protocol, enabling interoperability across charging networks and Vehicle-to-Grid readiness. Existing stations must present an upgrade roadmap to their State Electricity Regulatory Commissions by December 2026. Non-compliance will attract penalties starting at ₹15,000 per charger.',
    source: 'Ministry of Power',
  },
  {
    id: '3',
    category: 'Industry',
    date: 'Apr 2026',
    headline: "India's EV Two-Wheeler Sales Cross 1.5 Million Units in FY2025-26",
    summary:
      "Ola Electric, Bajaj Chetak, and TVS iQube collectively account for over 65% of India's electric two-wheeler segment after a year of record demand. PLI incentives, falling lithium cell prices, and expanding charging infrastructure drove the milestone. Industry analysts project the segment to cross 2 million units in FY2026-27 as sub-₹80,000 EVs gain traction in Tier-2 cities.",
    source: 'VAHAN Dashboard / Industry',
  },
  {
    id: '4',
    category: 'Funding',
    date: 'Apr 2026',
    headline: 'CESL Floats ₹2,400 Crore Tender for 10,000 EV Charging Points Across National Highways',
    summary:
      "CESL's latest infrastructure push targets national highways and expressways, with the tender requiring BIS-certified AC Type 2 and DC combo chargers with OCPP 2.0 support. Shortlisted vendors must demonstrate DISCOM connectivity and real-time EVSE API reporting capability. The roll-out is targeted for commissioning across 16 states by March 2027.",
    source: 'CESL',
  },
  {
    id: '5',
    category: 'Technology',
    date: 'Apr 2026',
    headline: 'IIT Madras Develops Indigenous BMS Chip Reducing EV Battery Management Costs by 40%',
    summary:
      'The low-cost Battery Management System chip, developed under DST funding at IIT Madras, is designed for sub-₹1 lakh two-wheelers and is currently undergoing AIS-048 certification. The chip reduces BMS hardware cost by approximately ₹3,500 per vehicle and supports real-time cell balancing with over-temperature and over-current protection, targeting mass-market EV affordability in India.',
    source: 'IIT Madras / DST',
  },
  {
    id: '6',
    category: 'Policy',
    date: 'Mar 2026',
    headline: 'Maharashtra Extends EV Purchase Subsidy Scheme Through FY2027',
    summary:
      'The Maharashtra government has extended its EV subsidy scheme, providing up to ₹25,000 for electric two-wheelers and ₹1.5 lakh for electric four-wheelers through March 2027. The extension covers first-time EV buyers and includes a separate incentive of ₹40,000 for electric autorickshaw operators switching from CNG or diesel, effective immediately.',
    source: 'Maharashtra State Government',
  },
  {
    id: '7',
    category: 'Industry',
    date: 'Mar 2026',
    headline: "Fleet Electrification Accelerates: SBI's ₹500 Crore EV Fleet Loan Scheme Sees 300% Uptake",
    summary:
      "Following SBI's zero-processing-fee EV fleet loan scheme launch, demand from logistics and last-mile delivery companies has exceeded initial projections by 3x. Over ₹420 crore was disbursed in the first quarter, primarily to small fleet operators purchasing 5–20 electric three-wheelers. The scheme offers a 2.5% interest subvention versus standard commercial rates for EV fleet purchases.",
    source: 'State Bank of India',
  },
  {
    id: '8',
    category: 'Technology',
    date: 'Mar 2026',
    headline: 'ISRO-Derived Thermal Management Technology Licensed to Tata and MG for EV Battery Cooling',
    summary:
      "ISRO's liquid-cooled battery thermal management system, originally developed for satellite power systems, has been licensed to Tata Motors and MG Motor India for use in upcoming EV models. The technology maintains cell temperature within a 2°C delta even at 45°C ambient, improving battery longevity by an estimated 20-25% and reducing fast-charge degradation in high-temperature Indian conditions.",
    source: 'ISRO / Industry',
  },
  {
    id: '9',
    category: 'Policy',
    date: 'Mar 2026',
    headline: 'CPCB Issues Final Notice to 847 EV Operators for EPR Non-Compliance Under Battery Waste Rules',
    summary:
      'The Central Pollution Control Board has issued compliance notices to 847 EV operators (including fleet companies, CPOs, and workshops) for failure to register on the EPR portal and non-submission of battery collection targets. Operators must submit registration and FY2025-26 collection data by June 30, 2026. Penalties under the Environment Protection Act can reach ₹1 lakh per day per violation.',
    source: 'CPCB',
  },
  {
    id: '10',
    category: 'Go4Garage',
    date: 'Mar 2026',
    headline: 'Go4Garage Integrates with VAHAN Database for Real-Time EV Fleet Registration Verification',
    summary:
      'The VAHAN integration allows CPOs and fleet operators using the Go4Garage platform to instantly verify vehicle EV status, subsidy eligibility, registration validity, and insurance details directly within their operational dashboard. The integration supports batch verification for fleets and provides automated alerts for registration renewals, supporting PM e-DRIVE subsidy audit trails.',
    source: 'Go4Garage',
  },
  {
    id: '11',
    category: 'Funding',
    date: 'Feb 2026',
    headline: 'Greenko Group Commits ₹3,000 Crore to Build 500 Solar-Powered EV Charging Hubs',
    summary:
      "The renewable energy major will co-locate EV charging infrastructure with its existing solar installations across Andhra Pradesh, Telangana, and Karnataka, targeting completion of the first 100 hubs by September 2026. Each hub will include both AC slow chargers and DC fast chargers, with on-site solar generation covering an estimated 60–80% of energy consumption and reducing CPO electricity costs.",
    source: 'Greenko Group',
  },
  {
    id: '12',
    category: 'Industry',
    date: 'Feb 2026',
    headline: "Delhi's EV Policy 2.0 Draft Released: Targets 25% EV Share of All New Vehicle Registrations by 2027",
    summary:
      "The draft policy, released for public consultation, proposes mandatory EV procurement for all government fleets, enhanced subsidies for electric autos and e-rickshaws (up to ₹30,000), and a ban on new diesel autorickshaw registrations from January 2026. The policy also proposes a 'green zone' in central Delhi accessible only to EVs and CNG vehicles during peak hours.",
    source: 'Delhi Transport Department',
  },
  {
    id: '13',
    category: 'Technology',
    date: 'Feb 2026',
    headline: 'BIS Releases Updated IS 17017 Part 4 for V2G-Capable Charger Certification',
    summary:
      'The Bureau of Indian Standards has published updated certification requirements for Vehicle-to-Grid capable EV chargers, opening the regulatory pathway for bi-directional charging in India. V2G-certified chargers can allow EV owners to sell stored electricity back to the grid or premises, creating a potential revenue stream and grid stability benefit that DISCOMS in Delhi and Maharashtra have already expressed interest in piloting.',
    source: 'Bureau of Indian Standards',
  },
  {
    id: '14',
    category: 'Industry',
    date: 'Jan 2026',
    headline: "India's EV Charging Network Crosses 25,000 Operational Public Points",
    summary:
      "NITI Aayog's EV Charging Dashboard records 25,614 operational public charging points as of January 2026, up 85% year-on-year. However, distribution remains highly uneven: over 68% of points are concentrated in 10 cities, while 347 districts across Tier-2 and Tier-3 cities have fewer than 5 public chargers. Analysts cite DISCOM application bottlenecks and grid upgrade delays as the leading causes of geographic concentration.",
    source: 'NITI Aayog / Industry',
  },
  {
    id: '15',
    category: 'Policy',
    date: 'Apr 2026',
    headline: 'NITI Aayog Releases India EV Ecosystem Action Plan for FY2026-27: 30 Lakh Target',
    summary:
      'NITI Aayog released a 47-page action plan targeting 3 million EV registrations in FY2026-27, with specific mandates for DISCOM grid upgrades at 10,000 new charging locations, accelerated state EV policy harmonisation, and a unified national EV registry. The plan includes FAME III design principles with an expanded ₹28,000 crore outlay focusing on commercial vehicles and charging infrastructure.',
    source: 'NITI Aayog',
  },
  {
    id: '16',
    category: 'Industry',
    date: 'Apr 2026',
    headline: 'Ola Electric Reports First Operating Profit: ₹44 Crore EBITDA in Q4 FY2026',
    summary:
      'Ola Electric posted its first-ever positive EBITDA of ₹44 crore in Q4 FY2025-26, driven by a 28% improvement in gross margins following in-house cell manufacturing at the Gigafactory Phase 1. Monthly production crossed 55,000 units in March 2026. The company revised its FY2027 sales guidance upward by 15%, projecting 800,000 units and break-even at PAT level by Q3 FY2027.',
    source: 'Ola Electric',
  },
  {
    id: '17',
    category: 'Go4Garage',
    date: 'Apr 2026',
    headline: 'Go4Garage Platform Processes 1 Lakh DISCOM Applications, Saving CPOs ₹18 Crore in Filing Costs',
    summary:
      "Go4Garage's URGAA platform has crossed the milestone of processing 1,00,000 DISCOM applications across 28 states since launch, with an average processing time reduction from 23 days to under 4 days. The platform's auto-fill and compliance verification features have saved operators a cumulative ₹18.3 crore in consultant and compliance filing costs. Error rejection rates dropped from 31% to 2.7% for URGAA users.",
    source: 'Go4Garage',
  },
  {
    id: '18',
    category: 'Funding',
    date: 'Apr 2026',
    headline: 'PM e-DRIVE Phase 2 Announced: ₹18,000 Crore for EV Buses, L-Category Vehicles and Charging',
    summary:
      'The Cabinet Committee on Economic Affairs approved PM e-DRIVE Phase 2 with a ₹18,000 crore allocation, expanding coverage to electric buses (8,000 new units for state transport undertakings), L-category vehicles (e-auto, e-rickshaw, cargo tricycle), and 25,000 new public fast chargers. Subsidy disbursement will be linked to VAHAN registration verification and real-time telematics reporting.',
    source: 'Cabinet Secretariat',
  },
  {
    id: '19',
    category: 'Industry',
    date: 'Apr 2026',
    headline: 'Tata Motors EV Crosses 3 Lakh Cumulative Sales; Nexon EV Remains Best-Selling EV SUV for 24 Months',
    summary:
      'Tata Motors announced cumulative EV sales of 3,00,412 units as of March 2026, making it the largest EV passenger vehicle manufacturer in India. The Nexon EV retained its top position for 24 consecutive months. The company announced Nexon EV Gen 3 with a 68 kWh battery and 550 km certified range, scheduled for launch in Q2 FY2027, alongside a new ₹12.5 lakh entry-level Tiago EV variant.',
    source: 'Tata Motors',
  },
];

export default function NewsClient() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('All');

  const filtered =
    activeCategory === 'All'
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/8 via-surface to-primary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[130px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #7b41b3 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-secondary/20 bg-secondary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-sm font-medium text-secondary font-display">Industry News</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight font-display">
              Industry <span className="gradient-text">News &amp; Updates</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Policy updates, funding announcements, technology breakthroughs, and Go4Garage platform
              news from India&apos;s EV ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FILTER + GRID ─── */}
      <section className="py-16 bg-surface-container-low">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-on border-primary shadow-md'
                    : 'bg-surface-bright text-on-surface-variant border-outline-variant/30 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col transition-shadow hover:shadow-md"
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                          categoryColors[item.category] ?? 'bg-primary/10 text-primary'
                        }`}
                      >
                        <Icon name={categoryIcons[item.category] ?? 'article'} size={13} />
                        {item.category}
                      </span>
                      <span className="text-xs text-on-surface-variant">{item.date}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base font-bold font-display leading-snug mb-3 text-on-surface">
                      {item.headline}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
                      {item.summary}
                    </p>

                    {/* Source tag */}
                    <div className="mt-5 pt-4 border-t border-outline-variant/20 flex items-center gap-2">
                      <Icon name="feed" size={14} className="text-on-surface-variant/60" />
                      <span className="text-xs text-on-surface-variant/70 font-medium">{item.source}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-on-surface-variant py-12"
            >
              No news items in this category yet. Check back soon!
            </motion.p>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-container">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-on mb-4 font-display">
              Stay Ahead of India&apos;s EV Industry
            </h2>
            <p className="text-primary-on/80 mb-8 max-w-xl mx-auto">
              Subscribe to the Go4Garage newsletter for weekly updates on policy changes, funding
              announcements, and platform news.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
