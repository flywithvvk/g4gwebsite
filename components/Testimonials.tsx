'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Go4Garage reduced our DISCOM approval cycle from 90 days to under 30. The regulatory intelligence is a game-changer for CPOs scaling across states.',
    author: 'Rajesh Kumar',
    role: 'Director of Operations',
    company: 'ChargePoint India',
  },
  {
    quote: 'GSTSAAS transformed our workshop from paper-based chaos to digital excellence. Our job card turnaround improved by 3x within weeks.',
    author: 'Priya Sharma',
    role: 'Workshop Owner',
    company: 'EV Service Hub',
  },
  {
    quote: 'EV VIDYA ARJUN trained 200+ technicians for our network. The certification pipeline is exactly what India\'s EV aftermarket needed.',
    author: 'Amit Patel',
    role: 'Head of Training',
    company: 'GreenDrive Motors',
  },
  {
    quote: 'The platform\'s ability to handle 33-state compliance variations in one unified dashboard is remarkable. Nothing else comes close.',
    author: 'Dr. Meera Nair',
    role: 'Policy Advisor',
    company: 'NITI Aayog',
  },
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((t, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -4 }}
          className="relative p-8 rounded-2xl bg-surface-bright border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group"
        >
          {/* Quote icon */}
          <div className="absolute top-4 right-6 text-6xl font-serif text-primary-container/30 leading-none select-none">
            &ldquo;
          </div>

          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 relative z-10">
            {t.quote}
          </p>

          <div className="flex items-center gap-3">
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={t.author}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-sm">
                {t.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            )}
            <div>
              <div className="text-sm font-semibold text-on-surface">{t.author}</div>
              <div className="text-xs text-on-surface-variant">
                {t.role}, {t.company}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
