'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', role: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions? Want to schedule a demo? Let's talk about how Go4Garage can transform your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options & Form */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Options */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold mb-8">
                Let's <span className="gradient-text">Connect</span>
              </h2>

              {/* Email */}
              <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="text-accent-cyan text-2xl mr-4">✉️</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-300 mb-2">Send us a message</p>
                    <a href="mailto:hello@go4garage.com" className="text-accent-cyan hover:text-accent-blue transition-colors">
                      hello@go4garage.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="text-accent-blue text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300 mb-2">Call us Mon-Fri, 9am-6pm IST</p>
                    <a href="tel:+919876543210" className="text-accent-blue hover:text-accent-cyan transition-colors">
                      +91 9876 543 210
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="text-green-400 text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                    <p className="text-gray-300 mb-2">Visit us in Bangalore</p>
                    <p className="text-accent-cyan">
                      Bangalore, India<br />
                      EST. 2024
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="text-purple-400 text-2xl mr-4">⏰</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                    <p className="text-gray-300">
                      We typically respond within <span className="text-accent-cyan font-semibold">2 hours</span> during business hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-xl"
            >
              <h2 className="text-3xl font-semibold mb-8">
                Send us a <span className="gradient-text">Message</span>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-semibold mb-2 text-accent-cyan">Thank You!</h3>
                  <p className="text-gray-300">
                    We've received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-cyan focus:bg-white/15 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-cyan focus:bg-white/15 transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-cyan focus:bg-white/15 transition-all"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold mb-2">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-cyan focus:bg-white/15 transition-all"
                    >
                      <option value="">Select your role</option>
                      <option value="cpo-operator" className="bg-primary">CPO Operator</option>
                      <option value="fleet-manager" className="bg-primary">Fleet Manager</option>
                      <option value="service-provider" className="bg-primary">Service Provider</option>
                      <option value="investor" className="bg-primary">Investor</option>
                      <option value="partner" className="bg-primary">Partner</option>
                      <option value="other" className="bg-primary">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-cyan focus:bg-white/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-lg font-semibold shadow-lg hover:shadow-accent-cyan/50 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                q: "What's the typical response time?",
                a: "We respond to all inquiries within 2 business hours during working days (9am-6pm IST)."
              },
              {
                q: "Can I schedule a demo?",
                a: "Absolutely! Use the contact form to request a demo, and our team will get back to you with available time slots."
              },
              {
                q: "Do you offer custom solutions?",
                a: "Yes, we work with organizations of all sizes. Our platform is highly customizable for specific needs."
              },
              {
                q: "How do I become a partner?",
                a: "Select 'Partner' in the role dropdown and tell us about your organization. Our partnerships team will reach out."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-accent-cyan mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
