'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PlatformPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const capabilities = [
    {
      title: 'Regulatory Intelligence',
      description: 'Automated compliance tracking across 95+ regulatory requirements spanning central, state, and sector-specific mandates.',
      icon: '⚖️',
      features: ['Real-time compliance updates', 'Audit readiness', 'Regulatory filing automation']
    },
    {
      title: 'Operational Excellence',
      description: 'Unified platform for CPO operations, service management, and fleet optimization with real-time insights.',
      icon: '⚙️',
      features: ['Unified operations dashboard', 'Service workflow optimization', 'Fleet analytics']
    },
    {
      title: 'Commercial Intelligence',
      description: 'Predictive analytics and market insights powered by our proprietary Automobile LLM.',
      icon: '📊',
      features: ['Market trend analysis', 'Revenue optimization', 'Customer intelligence']
    },
    {
      title: 'Workforce Development',
      description: 'AI-powered training platform for technician certification and skill development in EV ecosystem.',
      icon: '👥',
      features: ['Structured curriculum', 'Certification tracking', 'Performance analytics']
    },
  ];

  const comparisonData = [
    {
      metric: 'Regulatory Compliance',
      traditional: 'Manual tracking, error-prone',
      go4garage: 'Automated with 89.5% accuracy'
    },
    {
      metric: 'Operations Management',
      traditional: '5+ disconnected systems',
      go4garage: 'Unified AI-powered platform'
    },
    {
      metric: 'Time to Audit Ready',
      traditional: '3-4 weeks per audit',
      go4garage: 'Always audit-ready'
    },
    {
      metric: 'Workforce Training',
      traditional: 'Ad-hoc, unstructured',
      go4garage: 'AI-guided, certified curriculum'
    },
    {
      metric: 'Decision Making',
      traditional: 'Reactive, data-scattered',
      go4garage: '3x faster with predictive insights'
    },
    {
      metric: 'Scalability',
      traditional: 'Limited, manual overhead',
      go4garage: 'Unlimited, fully automated'
    },
  ];

  const techStack = [
    {
      name: 'Automobile LLM',
      description: 'Proprietary Large Language Model trained exclusively on Indian automotive regulations, workflows, and industry patterns.',
      color: 'from-accent-cyan/20 to-blue-500/20'
    },
    {
      name: 'Real-time Compliance Engine',
      description: 'Continuous monitoring of regulatory changes across all states with instant alerts and automation.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      name: 'Predictive Analytics',
      description: 'ML-powered forecasting for market trends, operational bottlenecks, and business opportunities.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
  ];

  const enterpriseFeatures = [
    {
      title: 'Enterprise Security',
      items: ['End-to-end encryption', 'Role-based access control', 'Audit logging', 'SOC 2 Type II compliance']
    },
    {
      title: 'Scalability',
      items: ['Multi-tenant architecture', 'Auto-scaling infrastructure', 'Zero-downtime deployments', '99.99% uptime SLA']
    },
    {
      title: 'Integration',
      items: ['REST & GraphQL APIs', 'Webhook support', 'Pre-built connectors', 'Custom integration support']
    },
    {
      title: 'Support & Analytics',
      items: ['24/7 dedicated support', 'Real-time dashboards', 'Custom reporting', 'Data export capabilities']
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The AI Platform Redefining{' '}
              <span className="gradient-text">Automobile Operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Regulatory intelligence, operational excellence, and predictive insights unified in one enterprise platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent-cyan/50 transition-shadow"
                >
                  Request Demo
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Four Pillars of <span className="gradient-text">Platform Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive AI-powered solution designed for India's automobile industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-effect p-8 rounded-xl hover:border-accent-cyan/50 transition-colors group cursor-pointer"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{capability.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <span className="text-accent-cyan mr-2">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Traditional vs <span className="gradient-text">Go4Garage AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI platform transforms automobile operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left font-semibold text-accent-cyan">Metric</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-400">Traditional Approach</th>
                    <th className="px-6 py-4 text-left font-semibold text-accent-cyan">Go4Garage AI Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-white">{row.metric}</td>
                      <td className="px-6 py-4 text-gray-400">{row.traditional}</td>
                      <td className="px-6 py-4 text-accent-cyan font-semibold">{row.go4garage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="gradient-text">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI and cloud infrastructure for enterprise-grade performance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`bg-gradient-to-br ${tech.color} p-8 rounded-xl border border-white/10 hover:border-accent-cyan/30 transition-all`}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built to meet the most demanding requirements of global enterprises.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {enterpriseFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl hover:border-accent-cyan/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent-cyan">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent-cyan mr-3 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Highlights */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Seamless <span className="gradient-text">Integration</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">Unified Data Flow</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3">→</span>
                    <span>Connect regulatory systems, ERP, and fleet management tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3">→</span>
                    <span>Real-time data synchronization across platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3">→</span>
                    <span>Centralized insights from disconnected sources</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">API-First Architecture</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3">→</span>
                    <span>REST and GraphQL APIs for maximum flexibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3">→</span>
                    <span>Webhook support for event-driven workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3">→</span>
                    <span>Pre-built connectors for popular enterprise tools</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="gradient-text">Performance</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { metric: '89.5%', label: 'Compliance Automation' },
              { metric: '3x', label: 'Faster Operations' },
              { metric: '99.99%', label: 'Platform Uptime' },
              { metric: '24/7', label: 'Support Available' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl text-center hover:border-accent-cyan/50 transition-colors"
              >
                <div className="text-5xl font-bold gradient-text mb-3">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built For <span className="gradient-text">Every Use Case</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'CPO Networks',
                description: 'Manage charging infrastructure, compliance, and customer experience at scale.',
                icon: '⚡'
              },
              {
                title: 'OEM Operations',
                description: 'Streamline service centers, technician training, and customer support.',
                icon: '🏭'
              },
              {
                title: 'Fleet Operators',
                description: 'Optimize fleet utilization, maintenance scheduling, and cost management.',
                icon: '🚗'
              },
            ].map((useCase, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-effect p-8 rounded-xl hover:border-accent-cyan/50 transition-all"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance Banner */}
      <section className="py-16 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold mb-4">Enterprise-Grade Security</h3>
            <p className="text-xl text-gray-300 mb-8">
              ISO 27001 certified, SOC 2 Type II compliant, and fully GDPR ready.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {['End-to-End Encryption', 'Role-Based Access', 'Audit Logs', '99.99% Uptime SLA'].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect px-6 py-3 rounded-lg border border-accent-cyan/30"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the <span className="gradient-text">Platform Difference</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading automobile companies transforming their operations with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent-cyan/50 transition-shadow"
                >
                  Request Demo
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors"
                >
                  Contact Sales
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
