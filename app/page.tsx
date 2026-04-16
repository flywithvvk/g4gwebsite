'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The AI Platform Powering{' '}
              <span className="gradient-text">India's Automobile Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From regulatory chaos to operational excellence. One platform. Zero friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-accent-cyan/50 transition-shadow"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/platform">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors"
                >
                  Explore Platform
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Insight Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            India's Automobile Ecosystem Needs{' '}
            <span className="gradient-text">Intelligent Infrastructure</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Complexity',
                description: '95+ compliance requirements across state & central regulations',
                stat: '48 Problems'
              },
              {
                title: 'Operational Fragmentation',
                description: 'Multiple disconnected systems for CPO, service, and fleet management',
                stat: '27 Problems'
              },
              {
                title: 'Workforce Gap',
                description: 'Lack of skilled technicians and standardized training for EV ecosystem',
                stat: '20 Problems'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-effect p-8 rounded-xl"
              >
                <div className="text-accent-cyan text-5xl font-bold mb-4">{item.stat}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section with Stats */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Platform. <span className="gradient-text">Infinite Possibilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proprietary Automobile LLM reduces human effort by understanding and automating
              complex regulatory, operational, and technical workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '89.5%', label: 'Compliance Automation' },
              { value: '3x', label: 'Faster Operations' },
              { value: '95%', label: 'Cost Reduction' },
              { value: '100%', label: 'India-Focused' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold gradient-text mb-3">{stat.value}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Complete <span className="gradient-text">Ecosystem Platform</span>
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'URGAA Platform', tagline: 'Regulatory Intelligence', icon: '⚡' },
              { name: 'GSTSAAS', tagline: 'Service Intelligence', icon: '🔧' },
              { name: 'Ignition', tagline: 'Customer Experience', icon: '📱' },
              { name: 'EV VIDYA ARJUN', tagline: 'Workforce Training', icon: '🎓' },
              { name: 'KAILASH-AI', tagline: 'Predictive Intelligence', icon: '🔮' },
              { name: 'Eka-AI', tagline: 'Conversational AI', icon: '💬' }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl cursor-pointer hover:border-accent-cyan/50 transition-colors"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.tagline}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold shadow-lg hover:shadow-accent-cyan/50 transition-shadow"
              >
                Explore All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Differentiation */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The <span className="gradient-text">Anthropic of India's Automobile Industry</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're not building tools—we're building intelligence. Our proprietary Automobile LLM
              understands every regulation, every workflow, every edge case in India's EV ecosystem.
            </p>
            <div className="glass-effect p-8 rounded-xl text-left">
              <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">What Makes Us Different</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-3">✓</span>
                  <span>First AI platform trained specifically on Indian automobile regulations and workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-3">✓</span>
                  <span>89.5% reduction in manual compliance work through intelligent automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-3">✓</span>
                  <span>Real-time updates on regulatory changes across all states</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-cyan mr-3">✓</span>
                  <span>End-to-end platform covering CPO operations, service management, and workforce training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Traction */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building the <span className="gradient-text">Future Together</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto glass-effect p-8 rounded-xl">
            <div className="text-6xl text-accent-cyan mb-4">"</div>
            <p className="text-xl text-gray-300 mb-6">
              Go4Garage transformed our operations completely. What used to take us weeks now happens
              in hours. Their AI understands Indian regulations better than any consultant we've worked with.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">CPO Operator</div>
                <div className="text-sm text-gray-400">Leading EV Charging Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the platform that's powering India's automobile future with AI-first intelligence.
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
            <Link href="/investors">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg border border-accent-cyan/30 hover:border-accent-cyan transition-colors"
              >
                For Investors
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
