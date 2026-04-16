'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  problemsSolved: number;
  icon: string;
  keyFeatures: string[];
  color: {
    gradient: string;
    accent: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: 'URGAA Platform',
    tagline: 'Regulatory & Grid Intelligence',
    description:
      'Navigate India\'s complex regulatory landscape with AI-powered compliance automation. URGAA tracks 95+ compliance requirements across central and state regulations, automatically flagging updates and providing actionable intelligence for grid operators and CPOs.',
    problemsSolved: 48,
    icon: '⚡',
    keyFeatures: [
      'Real-time regulatory tracking across all states',
      'Automated compliance requirement mapping',
      'Grid interconnection intelligence',
      'Regulatory update alerts and notifications',
      'Compliance report generation',
      'Multi-stakeholder requirement management',
      'Historical compliance audit trails'
    ],
    color: {
      gradient: 'from-accent-cyan to-blue-400',
      accent: 'accent-cyan'
    }
  },
  {
    id: 2,
    name: 'GSTSAAS',
    tagline: 'Service & Commerce Intelligence',
    description:
      'Revolutionize service center operations and commerce management. GSTSAAS streamlines service scheduling, inventory management, vendor operations, and financial workflows. Automatically handle GST compliance, invoicing, and customer service intelligence.',
    problemsSolved: 15,
    icon: '🔧',
    keyFeatures: [
      'Service scheduling & technician allocation',
      'Inventory management automation',
      'Vendor and parts procurement',
      'GST-compliant invoicing',
      'Customer service history tracking',
      'Predictive maintenance alerts',
      'Commerce analytics dashboard'
    ],
    color: {
      gradient: 'from-orange-400 to-red-500',
      accent: 'text-orange-400'
    }
  },
  {
    id: 3,
    name: 'Ignition App',
    tagline: 'Customer Experience Intelligence',
    description:
      'Create exceptional customer journeys across every touchpoint. Ignition App delivers personalized, context-aware customer experiences through conversational AI, real-time support, and predictive engagement strategies.',
    problemsSolved: 8,
    icon: '📱',
    keyFeatures: [
      'AI-powered customer support',
      'Personalized engagement workflows',
      'Multi-channel communication hub',
      'Customer sentiment analysis',
      'Real-time issue resolution',
      'Loyalty program management',
      'Customer journey analytics'
    ],
    color: {
      gradient: 'from-green-400 to-emerald-500',
      accent: 'text-green-400'
    }
  },
  {
    id: 4,
    name: 'EV VIDYA ARJUN',
    tagline: 'Workforce Intelligence',
    description:
      'Upskill India\'s EV workforce through intelligent, adaptive learning. EV VIDYA ARJUN provides personalized training programs for technicians, field engineers, and operators—with real-time competency tracking and certification management.',
    problemsSolved: 12,
    icon: '🎓',
    keyFeatures: [
      'Adaptive learning paths',
      'Real-time competency assessment',
      'Hands-on simulation training',
      'Certification management',
      'Mentor-apprentice pairing',
      'Performance analytics',
      'Multilingual content delivery'
    ],
    color: {
      gradient: 'from-purple-400 to-pink-500',
      accent: 'text-purple-400'
    }
  },
  {
    id: 5,
    name: 'KAILASH-AI',
    tagline: 'Predictive Intelligence',
    description:
      'Predict equipment failures, demand patterns, and operational anomalies before they impact your business. KAILASH-AI uses advanced time-series forecasting to optimize maintenance, energy allocation, and resource planning.',
    problemsSolved: 6,
    icon: '🔮',
    keyFeatures: [
      'Equipment failure prediction',
      'Demand forecasting',
      'Anomaly detection',
      'Predictive maintenance scheduling',
      'Energy consumption optimization',
      'Resource utilization planning',
      'Risk scoring & early warnings'
    ],
    color: {
      gradient: 'from-indigo-400 to-violet-500',
      accent: 'text-indigo-400'
    }
  },
  {
    id: 6,
    name: 'Eka-AI',
    tagline: 'Conversational Intelligence',
    description:
      'Automate complex conversations with domain-specific AI. Eka-AI handles regulatory queries, customer inquiries, and operational support through natural conversations—reducing manual effort and improving response times.',
    problemsSolved: 6,
    icon: '💬',
    keyFeatures: [
      'Multi-turn conversation handling',
      'Domain-specific knowledge base',
      'Real-time learning from interactions',
      'Sentiment-aware responses',
      'Escalation to humans when needed',
      'Conversation analytics',
      'Integration with existing systems'
    ],
    color: {
      gradient: 'from-cyan-400 to-blue-500',
      accent: 'text-cyan-400'
    }
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const totalProblems = products.reduce((sum, p) => sum + p.problemsSolved, 0);

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Complete <span className="gradient-text">Product Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Six intelligent platforms solving {totalProblems}+ operational challenges across India's EV ecosystem.
              From regulatory compliance to customer experience—all in one integrated platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="text-5xl font-bold gradient-text mb-3">{products.length}</div>
              <div className="text-lg text-gray-300">Integrated Products</div>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="text-5xl font-bold gradient-text mb-3">{totalProblems}+</div>
              <div className="text-lg text-gray-300">Problems Solved</div>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center">
              <div className="text-5xl font-bold gradient-text mb-3">360°</div>
              <div className="text-lg text-gray-300">Complete Coverage</div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                className="group cursor-pointer"
              >
                <div className="glass-effect p-8 rounded-2xl h-full hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl">{product.icon}</div>
                    <div className="bg-gradient-to-r from-accent-cyan to-accent-blue px-4 py-2 rounded-full text-sm font-semibold">
                      {product.problemsSolved} Problems
                    </div>
                  </div>

                  {/* Product Name and Tagline */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {product.name}
                  </h3>
                  <p className="text-accent-cyan text-sm font-semibold mb-4">{product.tagline}</p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features - Expandable */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: selectedProduct === product.id ? 1 : 0,
                      height: selectedProduct === product.id ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-primary/50 p-4 rounded-xl mb-6 border border-accent-cyan/20">
                      <h4 className="text-sm font-semibold text-accent-cyan mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {product.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-300">
                            <span className="text-accent-cyan mr-2 mt-1">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* CTA and Indicator */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-xs text-gray-400 font-medium">
                      {selectedProduct === product.id ? 'Click to collapse' : 'Click to expand'}
                    </div>
                    <motion.div
                      animate={{ rotate: selectedProduct === product.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-accent-cyan text-lg"
                    >
                      ⌄
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            How Our Platform <span className="gradient-text">Works Together</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Visual representation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Unified Intelligence Layer</h3>
                    <p className="text-sm text-gray-400">All products share a single AI backbone trained on Indian automobile regulations and workflows</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Data Sync</h3>
                    <p className="text-sm text-gray-400">Changes in one product instantly update across the ecosystem for consistency</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cross-Product Intelligence</h3>
                    <p className="text-sm text-gray-400">Regulatory changes automatically trigger relevant training updates and operational workflows</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Single Sign-On & Dashboard</h3>
                    <p className="text-sm text-gray-400">Manage all products from one unified control center with role-based access</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Integration flow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-8">Seamless Integration</h3>

              <div className="space-y-4">
                {[
                  {
                    title: 'URGAA + GSTSAAS',
                    description: 'Compliance requirements automatically flow into service scheduling and vendor management'
                  },
                  {
                    title: 'EV VIDYA + KAILASH',
                    description: 'Predictive failures trigger just-in-time training for relevant skill gaps'
                  },
                  {
                    title: 'Ignition + Eka-AI',
                    description: 'Conversational AI powers customer support while learning from all interactions'
                  },
                  {
                    title: 'Full Ecosystem',
                    description: 'Every product feeds insights that improve the intelligence of the entire platform'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-effect p-4 rounded-xl border border-accent-cyan/20"
                  >
                    <h4 className="font-semibold text-accent-cyan mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Product Comparison <span className="gradient-text">Matrix</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-accent-cyan/20">
                    <th className="px-6 py-4 text-left font-semibold text-accent-cyan">Product</th>
                    <th className="px-6 py-4 text-center font-semibold text-accent-cyan">Problems Solved</th>
                    <th className="px-6 py-4 text-center font-semibold text-accent-cyan">Key Function</th>
                    <th className="px-6 py-4 text-center font-semibold text-accent-cyan">AI Type</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, idx) => (
                    <tr key={idx} className="border-b border-accent-cyan/10 hover:bg-accent-cyan/5 transition-colors">
                      <td className="px-6 py-4 font-semibold flex items-center gap-3">
                        <span className="text-2xl">{product.icon}</span>
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-gradient-to-r from-accent-cyan to-accent-blue px-3 py-1 rounded-full text-xs font-bold">
                          {product.problemsSolved}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300">{product.tagline}</td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        {product.id <= 2 && 'Regulatory'}
                        {product.id === 3 && 'Conversational'}
                        {product.id === 4 && 'Learning'}
                        {product.id === 5 && 'Predictive'}
                        {product.id === 6 && 'Conversational'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Quick <span className="gradient-text">Implementation</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Week 1', title: 'Assessment', description: 'Understand your current workflows and pain points' },
              { phase: 'Week 2', title: 'Setup', description: 'Deploy core products and integrate with your systems' },
              { phase: 'Week 3', title: 'Training', description: 'Team onboarding and advanced feature training' },
              { phase: 'Week 4+', title: 'Optimization', description: 'Continuous improvement and ROI scaling' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="text-accent-cyan text-sm font-bold mb-2">{item.phase}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Operations?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the complete Go4Garage ecosystem. Schedule a personalized demo with our product specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent-cyan/50 transition-shadow"
                >
                  Schedule Demo
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
