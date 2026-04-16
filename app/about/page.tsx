'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="gradient-text">Go4Garage</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Building the intelligent infrastructure that powers India's EV revolution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-accent-cyan text-4xl font-bold mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                To become the market leader in AI-powered automobile intelligence across India within 3 years.
              </p>
              <p className="text-accent-cyan font-semibold">
                Transforming chaos into clarity through intelligent automation.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-accent-blue text-4xl font-bold mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                An AI-first automobile intelligence platform that understands every regulation, workflow, and edge case across India's EV ecosystem.
              </p>
              <p className="text-accent-blue font-semibold">
                The Anthropic of India's automobile industry.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-green-400 text-4xl font-bold mb-4">💎</div>
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>AI-First:</strong> Intelligence over tooling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>India-Focused:</strong> Built for India, by India</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>Ecosystem Thinking:</strong> Solving for the whole</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Why We <span className="gradient-text">Built This</span>
            </h2>

            <div className="space-y-8">
              {/* Story Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">The Problem We Saw</h3>
                <p className="text-gray-300 leading-relaxed">
                  India's EV ecosystem is fragmented. Operators juggle 95+ compliance requirements across states, manage disconnected systems for CPO operations and service management, and struggle to find trained technicians. There are 48 regulatory problems, 27 operational issues, and 20 workforce challenges—all solved manually by different teams.
                </p>
              </motion.div>

              {/* Story Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-accent-blue">What Inspired Us</h3>
                <p className="text-gray-300 leading-relaxed">
                  We realized that traditional tools couldn't solve this problem. It requires deep understanding of India's unique regulatory landscape, operational workflows, and industry dynamics. We needed to build an AI system trained specifically on Indian automobile regulations, compliance frameworks, and industry best practices.
                </p>
              </motion.div>

              {/* Story Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">How Go4Garage Works</h3>
                <p className="text-gray-300 leading-relaxed">
                  Go4Garage is powered by a proprietary Automobile LLM—an AI model trained to understand Indian regulations, workflows, and industry nuances. It automates compliance tasks (89.5% reduction), accelerates operations (3x faster), and reduces costs (95% savings). Our end-to-end platform covers regulatory intelligence, service management, customer experience, workforce training, and predictive analytics.
                </p>
              </motion.div>

              {/* Story Card 4 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-accent-blue">Our Commitment</h3>
                <p className="text-gray-300 leading-relaxed">
                  We're not building tools—we're building intelligence. We're committed to becoming the market leader in AI-powered automobile intelligence within 3 years. Every update, every feature, every decision is driven by one goal: powering India's automobile future with AI-first thinking.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Impact by <span className="gradient-text">Numbers</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '89.5%', label: 'Compliance Automation', color: 'text-accent-cyan' },
              { value: '3x', label: 'Faster Operations', color: 'text-accent-blue' },
              { value: '95%', label: 'Cost Reduction', color: 'text-green-400' },
              { value: '100%', label: 'India-Focused', color: 'text-purple-400' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className={`text-5xl font-bold mb-3 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Building <span className="gradient-text">India's Automobile Future</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your operations or partner with us, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent-cyan/50 transition-shadow"
              >
                Get in Touch
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors"
              >
                Explore Platform
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
