'use client';

import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';

const testimonials = [
  {
    quote:
      "We expanded from 3 to 12 states in one year without adding a single compliance headcount. URGAA tracks every state's regulatory updates, deadlines, and approval status — our team just acts on what the platform tells them.",
    name: 'Rajesh Kumar',
    role: 'Fleet Operations Head',
    company: 'GreenFleet Mobility Pvt. Ltd.',
    location: 'India | Bharat',
    product: 'URGAA',
    icon: 'directions_car',
    borderClass: 'border-primary/30',
    bgClass: 'bg-primary-container/5',
    tagClass: 'bg-primary/10 text-primary',
  },
  {
    quote:
      "GST tools digitized our 28-bay workshop in under two weeks. Billing errors stopped, revenue leakage went to near zero, and I finally have real visibility into which bays are performing and which are not.",
    name: 'Priya Patel',
    role: 'Owner & Director',
    company: 'Priya EV Service Center',
    location: 'Pune',
    product: 'GST',
    icon: 'build',
    borderClass: 'border-secondary/30',
    bgClass: 'bg-secondary-container/5',
    tagClass: 'bg-secondary/10 text-secondary',
  },
  {
    quote:
      "KAILASH-AI's pricing recommendations added ₹1.7 lakh to our monthly network revenue without touching a single charger. Platform ROI was under 6 weeks.",
    name: 'Arjun Nair',
    role: 'CPO Director',
    company: 'VoltGrid Charging Networks',
    location: 'Chennai',
    product: 'KAILASH-AI',
    icon: 'ev_station',
    borderClass: 'border-tertiary/30',
    bgClass: 'bg-tertiary-container/5',
    tagClass: 'bg-tertiary/10 text-tertiary',
  },
  {
    quote:
      "ARJUN certified 85 EV technicians in 8 weeks with a 94% first-attempt pass rate and 91% placement. Nothing else in the market comes close for an India-specific EV curriculum.",
    name: 'Dr. Meena Chandrasekaran',
    role: 'Head of Training',
    company: 'InnoEV Academy',
    location: 'Ahmedabad',
    product: 'ARJUN',
    icon: 'school',
    borderClass: 'border-primary/30',
    bgClass: 'bg-primary-container/5',
    tagClass: 'bg-primary/10 text-primary',
  },
];

export function Testimonials() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {testimonials.map((t, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.12 }}
          whileHover={{ y: -3 }}
          className={`p-7 rounded-2xl bg-surface-bright border ${t.borderClass} ${t.bgClass} shadow-sm hover:shadow-md transition-all flex flex-col gap-4`}
        >
          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#facc15" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-on-surface-variant leading-relaxed text-sm flex-1">
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Author row */}
          <div className="flex items-center gap-3 pt-3 border-t border-outline-variant/20">
            <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
              <Icon name={t.icon} size={18} className="text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-on-surface text-sm font-display">{t.name}</p>
              <p className="text-xs text-on-surface-variant truncate">
                {t.role}, {t.company}
              </p>
            </div>
            <span className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${t.tagClass}`}>
              {t.product}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

