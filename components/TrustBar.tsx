'use client';

import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';

const frameworks = [
  {
    name: 'BIS IS Standards',
    subtitle: 'Electric Vehicles',
    icon: 'verified',
    desc: 'Certification compliance tracking for all BIS IS standards applicable to EVs',
  },
  {
    name: 'ARAI Testing Protocols',
    subtitle: 'Type Approval',
    icon: 'science',
    desc: 'Document management and status tracking for ARAI type-approval workflows',
  },
  {
    name: 'NSDC Skill Framework',
    subtitle: 'Workforce Development',
    icon: 'school',
    desc: 'Curriculum and assessment aligned with NSDC EV technician job roles',
  },
  {
    name: 'MNRE Solar/Grid Guidelines',
    subtitle: 'Energy Integration',
    icon: 'wb_sunny',
    desc: 'Grid integration and solar charging compliance per MNRE guidelines',
  },
  {
    name: 'FAME Scheme Compliance',
    subtitle: 'Subsidy & Incentives',
    icon: 'electric_bolt',
    desc: 'FAME-II eligibility checks and subsidy claim automation for OEMs and CPOs',
  },
  {
    name: 'GST & GSTN Integration',
    subtitle: 'Tax Compliance',
    icon: 'receipt_long',
    desc: 'Automated GST filing and GSTN reconciliation for EV service transactions',
  },
];

export function TrustBar() {
  return (
    <section className="py-16 border-y border-outline-variant/20 bg-surface-container-low/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-on-surface font-display mb-2">
            Built for India&apos;s Regulatory Framework
          </h2>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto">
            Our platform is designed around India&apos;s EV standards and compliance requirements
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworks.map((fw, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-surface-bright border border-outline-variant/30 hover:border-primary/25 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary-container/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container/25 transition-colors mt-0.5">
                <Icon name={fw.icon} size={20} className="text-on-surface-variant" />
              </div>
              <div>
                <div className="text-sm font-semibold text-on-surface font-display leading-tight">{fw.name}</div>
                <div className="text-[11px] text-primary/70 font-medium mb-1">{fw.subtitle}</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">{fw.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
