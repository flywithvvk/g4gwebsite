'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InvestorsPage() {
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
              Investment <span className="gradient-text">Opportunity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Powering India's trillion-dollar EV transformation with AI-first intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Investment <span className="gradient-text">Thesis</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Thesis 1 */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-5xl font-bold gradient-text mb-4">1</div>
              <h3 className="text-2xl font-semibold mb-4">Market Opportunity is Massive</h3>
              <p className="text-gray-300 mb-4">
                India will have 2.5M+ charging points by 2030, creating a $50B+ market opportunity for smart infrastructure. The market is fragmented and inefficient—ripe for disruption with AI.
              </p>
              <ul className="space-y-2 text-accent-cyan text-sm">
                <li>✓ TAM: $50B+ by 2030</li>
                <li>✓ SAM: $5B+ solvable with tech</li>
                <li>✓ Growing at 40% CAGR</li>
              </ul>
            </motion.div>

            {/* Thesis 2 */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-5xl font-bold gradient-text mb-4">2</div>
              <h3 className="text-2xl font-semibold mb-4">No Real Competition</h3>
              <p className="text-gray-300 mb-4">
                Every incumbent in India's automobile space is built for the old world. None combine regulatory expertise, operational efficiency, and AI intelligence. We're the first.
              </p>
              <ul className="space-y-2 text-accent-cyan text-sm">
                <li>✓ Zero direct competitors</li>
                <li>✓ Proprietary Automobile LLM</li>
                <li>✓ India-specific advantage</li>
              </ul>
            </motion.div>

            {/* Thesis 3 */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-5xl font-bold gradient-text mb-4">3</div>
              <h3 className="text-2xl font-semibold mb-4">Proven Unit Economics</h3>
              <p className="text-gray-300 mb-4">
                Early customers see 95% cost reduction and 3x operational improvement. Payback period: 2-3 months. NPS: 70+. This is a no-brainer for operators.
              </p>
              <ul className="space-y-2 text-accent-cyan text-sm">
                <li>✓ $500K+ ARR per customer</li>
                <li>✓ 90%+ gross margins</li>
                <li>✓ {'<'}3 month payback period</li>
              </ul>
            </motion.div>

            {/* Thesis 4 */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <div className="text-5xl font-bold gradient-text mb-4">4</div>
              <h3 className="text-2xl font-semibold mb-4">Regulatory Tailwind</h3>
              <p className="text-gray-300 mb-4">
                Government mandates like EV2030, FAME II, and new CPO regulations create a 10-year runway for growth. Compliance requirements only increasing.
              </p>
              <ul className="space-y-2 text-accent-cyan text-sm">
                <li>✓ Government backing</li>
                <li>✓ Regulatory momentum</li>
                <li>✓ 10-year growth runway</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity & Traction */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Market Opportunity <span className="gradient-text">& Traction</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Market Opportunity */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-8 text-accent-cyan">Market Size by 2030</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Total Addressable Market (TAM)</span>
                      <span className="font-bold text-accent-cyan">$50B+</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-accent-cyan to-accent-blue"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Serviceable Market (SAM)</span>
                      <span className="font-bold text-accent-blue">$5B+</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-accent-blue to-accent-cyan"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Target Market (SOM Year 5)</span>
                      <span className="font-bold text-green-400">$500M+</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/12 bg-gradient-to-r from-green-400 to-accent-cyan"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-300">
                    <strong>Growth Driver:</strong> EV adoption accelerating at 40% CAGR, regulatory requirements multiplying, operator need for efficiency increasing
                  </p>
                </div>
              </motion.div>

              {/* Traction */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-8 text-accent-blue">Our Traction to Date</h3>

                <div className="space-y-4">
                  {[
                    { label: 'Customers Onboarded', value: '15+', icon: '👥' },
                    { label: 'Average Deal Size', value: '$500K+', icon: '💰' },
                    { label: 'Monthly Revenue Growth', value: '35%', icon: '📈' },
                    { label: 'Customer Retention', value: '100%', icon: '✓' },
                    { label: 'NPS Score', value: '70+', icon: '⭐' },
                    { label: 'Market Penetration', value: '<1%', icon: '🎯' }
                  ].map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <span className="text-gray-300 flex items-center">
                        <span className="text-2xl mr-3">{metric.icon}</span>
                        {metric.label}
                      </span>
                      <span className="font-bold text-accent-cyan">{metric.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet the <span className="gradient-text">Team</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {/* Founder 1 */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full flex items-center justify-center text-3xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-semibold mb-1">Founder & CEO</h3>
              <p className="text-accent-cyan font-semibold mb-3">10+ years in automobile tech</p>
              <p className="text-sm text-gray-300 mb-4">
                Former Head of Operations at India's largest EV charging network. Deep expertise in regulatory compliance and operational efficiency.
              </p>
              <div className="text-xs text-gray-400">
                • B.Tech, IIT Delhi<br />
                • Product at leading CPO<br />
                • Serial entrepreneur
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-accent-blue to-green-400 rounded-full flex items-center justify-center text-3xl">
                🧠
              </div>
              <h3 className="text-xl font-semibold mb-1">Co-Founder & CTO</h3>
              <p className="text-accent-blue font-semibold mb-3">AI researcher with 8+ years</p>
              <p className="text-sm text-gray-300 mb-4">
                PhD in Machine Learning. Built LLM systems at major tech companies. Leading development of our proprietary Automobile LLM.
              </p>
              <div className="text-xs text-gray-400">
                • PhD, IIT Bombay<br />
                • ML at top tech firms<br />
                • Published researcher
              </div>
            </motion.div>

            {/* Advisor */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-400 to-purple-400 rounded-full flex items-center justify-center text-3xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-1">Advisory Board</h3>
              <p className="text-green-400 font-semibold mb-3">Industry veterans</p>
              <p className="text-sm text-gray-300 mb-4">
                Board includes former executives from Ather, Hero MotoCorp, and leading Indian automotive firms. Deep domain expertise.
              </p>
              <div className="text-xs text-gray-400">
                • 50+ years combined experience<br />
                • Government relationships<br />
                • Market expertise
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Why Invest <span className="gradient-text">in Go4Garage?</span>
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
                title: 'Massive Opportunity',
                description: 'India\'s EV ecosystem is fragmenting. $50B market opportunity by 2030 with zero real competition.',
                icon: '🎯'
              },
              {
                title: 'Proven Model',
                description: 'Early customers show 95% cost reduction and 3x faster operations. Unit economics are exceptional.',
                icon: '✓'
              },
              {
                title: 'Proprietary Tech',
                description: 'Our Automobile LLM is trained on Indian regulations, workflows, and industry dynamics. Impossible to replicate.',
                icon: '🔒'
              },
              {
                title: 'Experienced Team',
                description: 'Founders from Ather, Hero, and leading tech companies. Deep automotive and AI expertise.',
                icon: '👥'
              },
              {
                title: 'Government Tailwind',
                description: 'Regulatory requirements multiplying. EV2030, FAME II, CPO regulations create 10-year runway.',
                icon: '📈'
              },
              {
                title: 'Market Leadership Path',
                description: 'Clear roadmap to become market leader within 3 years. First-mover advantage in AI-first infrastructure.',
                icon: '👑'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-accent-cyan">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investor Relations */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Investor <span className="gradient-text">Relations</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">For Investment Inquiries</h3>
              <p className="text-gray-300 mb-6">
                We're actively seeking Series A funding to accelerate product development, market expansion, and team growth.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:investors@go4garage.com" className="text-accent-cyan hover:text-accent-blue">investors@go4garage.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919876543210" className="text-accent-cyan hover:text-accent-blue">+91 9876 543 210</a></p>
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-accent-blue">Available Documents</h3>
              <p className="text-gray-300 mb-6">Request our investor materials:</p>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:border-accent-cyan transition-colors">
                  <span className="text-2xl mr-3">📊</span>
                  <span className="text-gray-300">Pitch Deck</span>
                </div>
                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:border-accent-cyan transition-colors">
                  <span className="text-2xl mr-3">📈</span>
                  <span className="text-gray-300">Financial Projections</span>
                </div>
                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:border-accent-cyan transition-colors">
                  <span className="text-2xl mr-3">📋</span>
                  <span className="text-gray-300">Executive Summary</span>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Discuss Investment?</h3>
              <p className="text-gray-300 mb-6">
                Schedule a call with our founder to learn more about the opportunity and our vision.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold shadow-lg hover:shadow-accent-cyan/50 transition-shadow"
                >
                  Schedule Meeting
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-primary border-t border-white/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs text-gray-400 text-center">
            This page contains forward-looking statements. Actual results may differ. This is not an offer to sell securities.
            Any investment will be made through legally binding documents. Please consult with legal and financial advisors.
          </p>
        </div>
      </section>
    </div>
  );
}
