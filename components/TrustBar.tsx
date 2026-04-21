'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'NITI Aayog', type: 'Government' },
  { name: 'MNRE', type: 'Ministry' },
  { name: 'BIS', type: 'Standards' },
  { name: 'ARAI', type: 'Testing' },
  { name: 'ICAT', type: 'Certification' },
  { name: 'Skill India', type: 'Training' },
];

export function TrustBar() {
  return (
    <section className="py-10 border-y border-outline-variant/20 bg-surface-container-low/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs text-on-surface-variant uppercase tracking-widest mb-6 font-medium">
          Aligned with India&apos;s leading institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="px-5 py-2.5 rounded-xl bg-surface-bright border border-outline-variant/30 text-sm font-semibold text-on-surface-variant group-hover:text-primary group-hover:border-primary/30 transition-all">
                {p.name}
              </div>
              <span className="text-[10px] text-on-surface-variant/60">{p.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
