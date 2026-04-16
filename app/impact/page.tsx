'use client';

import { motion } from 'framer-motion';

export default function ImpactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Impact</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real results transforming India's automobile ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Impact by <span className="gradient-text">Numbers</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                metric: '89.5%',
                label: 'Compliance Automation',
                description: 'Reduction in manual compliance work',
                icon: '✓',
                color: 'from-accent-cyan'
              },
              {
                metric: '3x',
                label: 'Faster Operations',
                description: 'Speed improvement in operational workflows',
                icon: '⚡',
                color: 'from-accent-blue'
              },
              {
                metric: '95%',
                label: 'Cost Savings',
                description: 'Average cost reduction for operators',
                icon: '💰',
                color: 'from-green-400'
              },
              {
                metric: '100%',
                label: 'Coverage',
                description: 'India-focused solutions across all states',
                icon: '🌍',
                color: 'from-purple-400'
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`glass-effect p-8 rounded-xl border-l-4 border-l-${stat.color.split('-')[1]}`}
              >
                <div className="text-5xl font-bold gradient-text mb-3">{stat.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Impact <span className="gradient-text">Areas</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Regulatory Impact */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-6xl mb-4">⚖️</div>
              <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">Regulatory Impact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">+</span>
                  <span>Real-time compliance tracking across 33 state regulatory frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">+</span>
                  <span>Automated regulatory updates and alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">+</span>
                  <span>Zero compliance penalties for our users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-2">+</span>
                  <span>95% reduction in compliance documentation time</span>
                </li>
              </ul>
            </motion.div>

            {/* Operational Impact */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-2xl font-semibold mb-4 text-accent-blue">Operational Impact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">+</span>
                  <span>3x faster incident resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">+</span>
                  <span>Unified dashboard for all operational metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">+</span>
                  <span>Predictive maintenance reducing downtime by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">+</span>
                  <span>Seamless integration with existing systems</span>
                </li>
              </ul>
            </motion.div>

            {/* Workforce Impact */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Workforce Impact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">+</span>
                  <span>Comprehensive EV technician training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">+</span>
                  <span>Certification standards improving skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">+</span>
                  <span>50+ trained professionals entering the ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">+</span>
                  <span>Career advancement opportunities in EV services</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Customer Success Story */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Customer <span className="gradient-text">Success Story</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-effect p-12 rounded-xl"
          >
            <div className="text-6xl text-accent-cyan mb-8">"</div>

            <div className="mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Go4Garage has been transformative for our operations. Before implementation, our compliance team spent 80% of their time on manual documentation and regulatory updates. Now, the platform handles all of that automatically, freeing them to focus on strategic initiatives.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mt-6">
                What used to take us 3 weeks to process now happens in 2-3 days. The cost savings alone—over 90%—justified the investment in the first quarter. But the real win? We've reduced compliance errors to zero and improved our service delivery significantly.
              </p>
            </div>

            <div className="flex items-center pt-8 border-t border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full mr-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <div className="font-semibold text-lg">Rajesh Kumar</div>
                <div className="text-accent-cyan">Operations Director</div>
                <div className="text-gray-400 text-sm">Leading CPO Network, India</div>
              </div>
            </div>

            {/* Stats from Story */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-cyan mb-1">90%</div>
                <div className="text-sm text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-blue mb-1">14x</div>
                <div className="text-sm text-gray-300">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">0</div>
                <div className="text-sm text-gray-300">Compliance Errors</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Success Metrics */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Why Organizations Choose <span className="gradient-text">Go4Garage</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: 'Proven ROI',
                description: 'Customers see 95% cost reduction and 3x operational improvement within 6 months'
              },
              {
                title: 'Zero Compliance Risk',
                description: 'Our AI ensures 100% regulatory compliance across all states and changing requirements'
              },
              {
                title: 'Instant Integration',
                description: 'Seamless integration with existing systems—no disruption to current operations'
              },
              {
                title: 'Expert Support',
                description: '24/7 support from automobile industry experts who understand your challenges'
              },
              {
                title: 'Continuous Innovation',
                description: 'Regular updates and new features based on customer feedback and regulatory changes'
              },
              {
                title: 'Scalability',
                description: 'Grows with your business—from single location to nationwide operations'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3 text-accent-cyan">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See Your <span className="gradient-text">Impact?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join dozens of organizations already transforming their operations with Go4Garage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent-cyan/50 transition-shadow inline-block"
            >
              Schedule a Demo
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors inline-block"
            >
              Explore Platform
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
