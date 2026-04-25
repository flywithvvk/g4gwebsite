'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';

const trustStats = [
  { value: '89.5%', label: 'Compliance automation' },
  { value: '33', label: 'States covered' },
  { value: '95', label: 'EV problems solved' },
];

export default function LoginClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="hidden sm:block absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, delay: 5 }}
          className="hidden sm:block absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/8 rounded-full blur-[150px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* Brand Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 180 }}
              className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-primary-container/20 border border-primary/20 flex items-center justify-center"
            >
              <Icon name="ev_station" size={32} className="text-primary" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight tracking-tight font-display">
              Welcome{' '}
              <span className="gradient-text">Back</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-md mx-auto">
              Access your Go4Garage dashboard
            </p>

            {/* ─── TWO CARDS ─── */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              {/* Card 1: Dashboard Login */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-surface-bright rounded-2xl border border-outline-variant/30 border-l-4 border-l-primary shadow-sm hover:shadow-lg transition-all text-left p-7 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-container/15 flex items-center justify-center">
                  <Icon name="dashboard" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold mb-2 font-display">Dashboard Login</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    For existing customers: access your GST (Go4Garage Service Tools), URGAA, and platform dashboard.
                  </p>
                </div>
                <a
                  href="https://app.go4garage.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:bg-primary/90 transition-all"
                >
                  Go to Dashboard
                  <Icon name="arrow_forward" size={16} />
                </a>
              </motion.div>

              {/* Card 2: Request Access */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                whileHover={{ y: -4 }}
                className="bg-surface-bright rounded-2xl border border-outline-variant/30 border-l-4 border-l-secondary shadow-sm hover:shadow-lg transition-all text-left p-7 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary-container/15 flex items-center justify-center">
                  <Icon name="calendar_month" size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold mb-2 font-display">Request Access</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    New to Go4Garage? Book a demo to get started with a personalized walkthrough.
                  </p>
                </div>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-secondary/40 text-secondary bg-secondary-container/10 rounded-xl font-semibold text-sm hover:bg-secondary/10 transition-all"
                >
                  Book a Demo
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Support link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-on-surface-variant"
            >
              Having trouble? Contact support at{' '}
              <a
                href="mailto:support@go4garage.in"
                className="text-primary font-medium hover:underline"
              >
                support@go4garage.in
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST STATS ─── */}
      <section className="py-16 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-10 font-display"
          >
            Why thousands of EV businesses trust Go4Garage
          </motion.p>
          <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
            {trustStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold gradient-text font-display">{stat.value}</p>
                <p className="text-sm text-on-surface-variant mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
