'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>{name}</span>;
}

const contactMethods = [
  { icon: 'mail', title: 'Email', detail: 'hello@go4garage.com', href: 'mailto:hello@go4garage.com', sub: 'We respond within 2 hours' },
  { icon: 'call', title: 'Phone', detail: '+91 9876 543 210', href: 'tel:+919876543210', sub: 'Mon-Fri, 9am-6pm IST' },
  { icon: 'location_on', title: 'Headquarters', detail: 'Bangalore, India', href: '#', sub: 'EST. 2024' },
];

const faqs = [
  { q: 'What\'s the typical response time?', a: 'We respond to all inquiries within 2 business hours during working days (9am-6pm IST).' },
  { q: 'Can I schedule a demo?', a: 'Absolutely! Use the form to request a demo, and our team will get back with available time slots.' },
  { q: 'Do you offer custom solutions?', a: 'Yes, our platform is highly customizable for organizations of all sizes and specific needs.' },
  { q: 'How do I become a partner?', a: 'Select "Partner" in the role dropdown and tell us about your organization. Our partnerships team will reach out.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsLoading(false);
    setTimeout(() => { setFormData({ name: '', email: '', company: '', role: '', message: '' }); setSubmitted(false); }, 4000);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-sm font-medium text-primary font-display">We&apos;d Love to Hear From You</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight font-display">Get in <span className="gradient-text">Touch</span></h1>
            <p className="text-lg text-on-surface-variant">Schedule a demo, ask questions, or explore partnership opportunities.</p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT METHODS ─── */}
      <section className="py-12 bg-surface-container-low/50 border-y border-outline-variant/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contactMethods.map((method, idx) => (
              <motion.a key={idx} href={method.href} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="bg-surface-bright p-5 rounded-xl flex items-start gap-4 group cursor-pointer border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
                <Icon name={method.icon} size={24} className="text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-sm mb-0.5 group-hover:text-primary transition-colors font-display">{method.title}</h3>
                  <p className="text-primary text-sm font-medium">{method.detail}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{method.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 font-display">Let&apos;s <span className="gradient-text">Connect</span></h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">Whether you&apos;re a CPO operator looking to automate compliance, a service center wanting to streamline operations, or an investor exploring opportunities — we&apos;re here to help.</p>
              </div>
              <div className="bg-surface-bright p-5 rounded-xl border border-outline-variant/30 shadow-sm">
                <h3 className="font-bold text-sm text-primary mb-3 font-display">What to Expect</h3>
                <ul className="space-y-2.5">
                  {['Response within 2 business hours', 'Personalized demo of relevant products', 'Custom ROI analysis for your use case', 'No commitment required'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <Icon name="check" size={16} className="text-tertiary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-3">
              <div className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 font-display">Send a <span className="gradient-text">Message</span></h2>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-16">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="w-16 h-16 mx-auto mb-4 bg-tertiary-container/20 rounded-full flex items-center justify-center">
                        <Icon name="check_circle" size={36} className="text-tertiary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-tertiary font-display">Thank You!</h3>
                      <p className="text-on-surface-variant text-sm">We&apos;ve received your message and will get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Full Name</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Email</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Company</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Your company" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all" />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Role</label>
                          <select id="role" name="role" value={formData.role} onChange={handleChange} required className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all">
                            <option value="">Select role</option>
                            <option value="cpo-operator">CPO Operator</option>
                            <option value="fleet-manager">Fleet Manager</option>
                            <option value="service-provider">Service Provider</option>
                            <option value="investor">Investor</option>
                            <option value="partner">Partner</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us how we can help..." rows={4} className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none" />
                      </div>
                      <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 py-3.5 bg-primary text-primary-on rounded-xl font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <Icon name="hourglass_empty" size={18} className="animate-spin" />
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block font-display">FAQ</span>
            <h2 className="text-4xl font-bold font-display">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full bg-surface-bright p-5 rounded-xl text-left flex items-center justify-between group border border-outline-variant/30 hover:border-primary/30 transition-all shadow-sm">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors font-display">{faq.q}</h3>
                  <motion.span animate={{ rotate: openFaq === idx ? 180 : 0 }} className="text-primary text-sm ml-4 flex-shrink-0">
                    <Icon name="expand_more" size={20} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="px-5 py-3 text-sm text-on-surface-variant">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
