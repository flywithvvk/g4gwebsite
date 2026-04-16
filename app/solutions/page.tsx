'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Persona {
  id: string;
  name: string;
  icon: string;
  color: string;
  challenges: string[];
  products: Array<{
    name: string;
    description: string;
  }>;
  impact: string;
  ctaText: string;
}

const personas: Persona[] = [
  {
    id: 'cpo-operators',
    name: 'CPO Operators',
    icon: '⚡',
    color: 'from-cyan-400 to-blue-400',
    challenges: [
      'DISCOM delays and load sanctioning bottlenecks',
      '33-state policy fragmentation across India',
      'Fire dept NOCs and electrical inspector certification',
      'Subsidy disbursement delays under FAME-II',
      'Charger uptime and SLA breach management',
      'Revenue leakage and manual audit prep'
    ],
    products: [
      {
        name: 'URGAA',
        description: 'Automate 48 regulatory problems with AI-driven compliance intelligence'
      },
      {
        name: 'KAILASH-AI',
        description: 'Predictive analytics for charger uptime and operational efficiency'
      }
    ],
    impact: '48 regulatory problems automated, real-time compliance, zero manual audit prep',
    ctaText: 'Explore URGAA'
  },
  {
    id: 'workshops-service',
    name: 'Workshops & Service Centers',
    icon: '🔧',
    color: 'from-green-400 to-emerald-400',
    challenges: [
      'Service network gaps across EV coverage areas',
      'Spare parts availability and procurement delays',
      'High EV repair costs and diagnostic tool shortage',
      'Warranty disputes with OEMs',
      'GST anomalies in service invoicing',
      'Technician shortage and skill standardization'
    ],
    products: [
      {
        name: 'GSTSAAS',
        description: 'Automated GST invoicing and service commerce management'
      },
      {
        name: 'EV VIDYA ARJUN',
        description: 'AI-powered training platform for technician upskilling and certification'
      }
    ],
    impact: '17 service/commerce problems solved, automated GST invoicing, parts procurement network',
    ctaText: 'Explore GSTSAAS'
  },
  {
    id: 'fleet-operators',
    name: 'Fleet Operators',
    icon: '🚗',
    color: 'from-purple-400 to-indigo-400',
    challenges: [
      'Fleet compliance management across states',
      'Total cost of ownership (TCO) uncertainty',
      'Charging optimization for fleet routes',
      'Predictive maintenance and downtime reduction',
      'Real-time fleet monitoring and diagnostics'
    ],
    products: [
      {
        name: 'URGAA',
        description: 'Regulatory compliance automation for fleet operations'
      },
      {
        name: 'GSTSAAS',
        description: 'Fleet service management and GST invoicing'
      },
      {
        name: 'KAILASH-AI',
        description: 'Predictive maintenance and route optimization analytics'
      }
    ],
    impact: 'Operational cost reduction, 99.5% uptime, optimized routes',
    ctaText: 'Explore Fleet Solutions'
  },
  {
    id: 'ev-technicians',
    name: 'EV Technicians & Trainees',
    icon: '🎓',
    color: 'from-orange-400 to-red-400',
    challenges: [
      '100K+ technician shortage in India\u2019s EV sector',
      'Low ICE-to-EV skill overlap for existing mechanics',
      'High-voltage safety competency gap',
      'Training infrastructure gaps across regions',
      'High attrition in EV service roles'
    ],
    products: [
      {
        name: 'EV VIDYA ARJUN',
        description: 'Comprehensive AI-driven training for EV technicians with certifications'
      },
      {
        name: 'Eka-AI',
        description: 'Conversational AI assistant for instant technical guidance and troubleshooting'
      }
    ],
    impact: '8 workforce problems addressed, certified EV professionals, career progression paths',
    ctaText: 'Explore Training Programs'
  },
  {
    id: 'government-regulators',
    name: 'Government & Regulators',
    icon: '🏛️',
    color: 'from-yellow-400 to-orange-400',
    challenges: [
      'Policy fragmentation across 33 states',
      'Inter-ministerial coordination challenges',
      'FAME-II implementation failures and delays',
      'Document verification burden across departments'
    ],
    products: [
      {
        name: 'URGAA Platform APIs',
        description: 'Digitized approval workflows and real-time compliance dashboards'
      }
    ],
    impact: 'Digitized approvals, real-time compliance dashboards, reduced certification bottlenecks',
    ctaText: 'Explore Regulatory Solutions'
  },
  {
    id: 'oems-manufacturers',
    name: 'OEMs & Manufacturers',
    icon: '🏭',
    color: 'from-blue-500 to-cyan-400',
    challenges: [
      'CPO integration and ecosystem connectivity',
      'Vehicle health monitoring post-sale',
      'Warranty management and dispute resolution',
      'Demand forecasting and inventory planning',
      'Localization verification across markets'
    ],
    products: [
      {
        name: 'Platform APIs',
        description: 'Enterprise APIs for seamless ecosystem integration and data exchange'
      },
      {
        name: 'KAILASH-AI',
        description: 'Quality analytics, market insights, and demand forecasting'
      }
    ],
    impact: 'Real-time market insights, quality analytics, ecosystem integration',
    ctaText: 'Explore API Platform'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SolutionsPage() {
  const [expandedPersona, setExpandedPersona] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block px-4 py-2 glass-effect rounded-full mb-6 border border-accent-cyan/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-semibold text-accent-cyan">Tailored Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Solutions for{' '}
              <span className="gradient-text">Every Role</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From CPO operators to government regulators, discover how Go4Garage transforms your specific challenges
              into competitive advantages with AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personas Grid Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personas.map((persona) => (
              <motion.div
                key={persona.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setExpandedPersona(expandedPersona === persona.id ? null : persona.id)}
              >
                {/* Card */}
                <div className="glass-effect p-8 rounded-2xl h-full border border-white/10 hover:border-accent-cyan/30 transition-all duration-300">
                  {/* Icon and Header */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${persona.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{persona.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{persona.name}</h3>
                  </div>

                  {/* Challenges Preview (always visible) */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent-cyan mb-3 uppercase tracking-wider">
                      Key Challenges
                    </h4>
                    <ul className="space-y-2">
                      {persona.challenges.slice(0, 2).map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-accent-cyan mr-2 mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                      {persona.challenges.length > 2 && (
                        <li className="text-sm text-accent-cyan font-semibold">
                          +{persona.challenges.length - 2} more challenges
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Recommended Products */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent-cyan mb-3 uppercase tracking-wider">
                      Recommended Products
                    </h4>
                    <div className="space-y-2">
                      {persona.products.map((product, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-accent-cyan/50 transition-colors"
                        >
                          <p className="font-semibold text-sm text-white">{product.name}</p>
                          <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-6 p-4 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-lg border border-accent-cyan/20"
                  >
                    <p className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
                      Expected Impact
                    </p>
                    <p className="text-sm font-semibold text-white">{persona.impact}</p>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300"
                  >
                    {persona.ctaText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Breakdown Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our <span className="gradient-text">Complete Platform</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Platform Components */}
              {[
                {
                  name: 'URGAA',
                  description: 'Regulatory Intelligence & Compliance Automation',
                  features: ['48 regulatory problems automated', 'Real-time regulatory updates', '33-state policy compliance', 'Zero manual audit prep'],
                  icon: '⚡'
                },
                {
                  name: 'GSTSAAS',
                  description: 'Service Management & Operations',
                  features: ['Service scheduling', 'Inventory tracking', 'Quality assurance', 'Revenue optimization'],
                  icon: '🔧'
                },
                {
                  name: 'EV VIDYA ARJUN',
                  description: 'Workforce Training & Certification',
                  features: ['AI-powered training', 'Industry certifications', 'Skill tracking', 'Career pathways'],
                  icon: '🎓'
                },
                {
                  name: 'KAILASH-AI',
                  description: 'Predictive Intelligence & Analytics',
                  features: ['Demand forecasting', 'Predictive maintenance', 'Performance analytics', 'Market insights'],
                  icon: '🔮'
                },
                {
                  name: 'Eka-AI',
                  description: 'Conversational Intelligence',
                  features: ['24/7 support', 'Technical assistance', 'Problem solving', 'Instant guidance'],
                  icon: '💬'
                },
                {
                  name: 'Platform APIs',
                  description: 'Enterprise Integration & Connectivity',
                  features: ['Real-time data sync', 'Ecosystem integration', 'Custom workflows', 'Secure connectivity'],
                  icon: '🔗'
                }
              ].map((component, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-effect p-8 rounded-xl border border-white/10 hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{component.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{component.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, fidx) => (
                      <li key={fidx} className="text-sm text-gray-300 flex items-center">
                        <span className="text-accent-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Statistics Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Proven Results Across{' '}
            <span className="gradient-text">All Personas</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '6+', label: 'Industry Personas Served', desc: 'From operators to regulators' },
              { value: '48+', label: 'Regulatory Problems Automated', desc: 'For CPO operators' },
              { value: '17+', label: 'Service Problems Solved', desc: 'For workshops & service centers' },
              { value: '99.5%', label: 'Fleet Uptime', desc: 'For fleet operators' },
              { value: '8+', label: 'Workforce Gaps Addressed', desc: 'For EV technicians & trainees' },
              { value: '33', label: 'States Covered', desc: 'Policy compliance across India' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-effect p-8 rounded-xl border border-white/10 text-center hover:border-accent-cyan/30 transition-colors"
              >
                <div className="text-5xl font-bold gradient-text mb-3">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Spotlight Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Success Stories from Our <span className="gradient-text">Community</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  persona: 'Leading CPO Operator',
                  quote: 'URGAA reduced our compliance team workload by 85%. What took 2 weeks now happens in 2 days.',
                  metric: '85% efficiency gain',
                  icon: '⚡'
                },
                {
                  persona: 'Service Center Network',
                  quote: 'GSTSAAS transformed our operations. We now handle 40% more vehicles with the same staff.',
                  metric: '40% volume increase',
                  icon: '🔧'
                },
                {
                  persona: 'EV Fleet Operator',
                  quote: 'KAILASH-AI predictive maintenance saved us crores in unexpected downtime.',
                  metric: '35% cost reduction',
                  icon: '🚗'
                },
                {
                  persona: 'Technician Community',
                  quote: 'ARJUN training platform made me job-ready for EV repair in just 3 months.',
                  metric: 'Certified & hired',
                  icon: '🎓'
                }
              ].map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-effect p-8 rounded-xl border border-white/10"
                >
                  <div className="text-4xl mb-4">{story.icon}</div>
                  <p className="text-gray-300 mb-4 leading-relaxed italic">"{story.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{story.persona}</p>
                      <p className="text-sm text-accent-cyan">{story.metric}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Why Choose <span className="gradient-text">Go4Garage</span>
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              The only platform designed specifically for India's EV ecosystem with solutions for every stakeholder
            </p>

            <div className="glass-effect rounded-2xl overflow-hidden border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left font-semibold text-white">Capability</th>
                      <th className="px-6 py-4 text-center font-semibold text-accent-cyan">Go4Garage</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-400">Generic Platforms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      { capability: 'India-Specific Compliance', go4garage: true, generic: false },
                      { capability: 'Multi-Persona Support', go4garage: true, generic: false },
                      { capability: 'AI-Powered Intelligence', go4garage: true, generic: false },
                      { capability: 'Integrated Ecosystem', go4garage: true, generic: false },
                      { capability: 'Workforce Training', go4garage: true, generic: false },
                      { capability: '24/7 Conversational AI', go4garage: true, generic: false }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">{row.capability}</td>
                        <td className="px-6 py-4 text-center">
                          {row.go4garage ? (
                            <span className="text-accent-cyan text-2xl">✓</span>
                          ) : (
                            <span className="text-gray-500 text-2xl">×</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.generic ? (
                            <span className="text-accent-cyan text-2xl">✓</span>
                          ) : (
                            <span className="text-gray-500 text-2xl">×</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Your Journey with <span className="gradient-text">Go4Garage</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  phase: 'Phase 1: Assessment',
                  timeline: 'Week 1',
                  description: 'We analyze your specific challenges and customize solutions for your persona'
                },
                {
                  phase: 'Phase 2: Integration',
                  timeline: 'Week 2-3',
                  description: 'Seamless integration with your existing systems and workflow setup'
                },
                {
                  phase: 'Phase 3: Training & Enablement',
                  timeline: 'Week 4',
                  description: 'Comprehensive training for your team and knowledge transfer'
                },
                {
                  phase: 'Phase 4: Optimization & Growth',
                  timeline: 'Ongoing',
                  description: 'Continuous optimization, support, and feature releases tailored to your needs'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center font-bold mb-4">
                      {idx + 1}
                    </div>
                    {idx < 3 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-accent-cyan to-accent-blue/30"></div>
                    )}
                  </div>
                  <div className="glass-effect p-6 rounded-xl flex-1 border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{item.phase}</h3>
                      <span className="text-sm text-accent-cyan font-semibold">{item.timeline}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Operations</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join industry leaders who are already leveraging Go4Garage to solve their toughest challenges.
              Let's explore which solution is right for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent-cyan/50 transition-all"
                >
                  Schedule a Demo
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors"
              >
                View Product Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
