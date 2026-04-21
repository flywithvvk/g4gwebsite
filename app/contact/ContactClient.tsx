'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';

const contactMethods = [
  { icon: 'mail', title: 'Email Us', detail: 'go4garageofficial@gmail.com', href: 'mailto:go4garageofficial@gmail.com', sub: 'We respond within 2 business hours', color: 'from-primary to-primary-container' },
  { icon: 'mail', title: 'Business Email', detail: 'connect@go4garage.in', href: 'mailto:connect@go4garage.in', sub: 'Business & partnership inquiries', color: 'from-secondary to-secondary-container' },
  { icon: 'location_on', title: 'Visit Us', detail: 'Bangalore, India', href: 'https://maps.google.com/?q=Bangalore+India', sub: 'India\'s Silicon Valley', color: 'from-tertiary to-[#00a34a]' },
];

const faqs = [
  { q: 'How quickly do you respond?', a: 'Within 2 business hours during working days (9 AM – 6 PM IST). For urgent matters, email connect@go4garage.in.' },
  { q: 'Can I schedule a demo?', a: 'Yes! Select a time that works for you and we\'ll set up a personalized demo of the products most relevant to your needs.' },
  { q: 'Do you offer customization?', a: 'Yes, our platform is fully configurable. We tailor dashboards, workflows, and integrations to match your organization\'s specific requirements.' },
  { q: 'What\'s the implementation timeline?', a: '4 weeks from kickoff to go-live. This includes configuration, data migration, training, and a parallel-run period for validation.' },
  { q: 'Is there a free trial?', a: 'We offer a guided pilot program where our team helps you run the platform on a subset of your operations before committing.' },
  { q: 'Do you work with government bodies?', a: 'Yes, we actively work with state nodal agencies, transport departments, and government EV programs across multiple Indian states.' },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const subject = encodeURIComponent(`Contact from ${formData.name}${formData.company ? ` — ${formData.company}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:go4garageofficial@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', role: '', message: '' });
        setSubmitted(false);
      }, 4000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* ─── SPLIT LAYOUT HERO ─── */}
      <section className="relative overflow-hidden pt-20 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[180px]" />
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity, delay: 4 }} className="absolute bottom-1/4 right-1/6 w-[350px] h-[350px] bg-secondary-container/8 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

            {/* Left: Heading + Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="pt-8">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary font-display">We&apos;d Love to Hear From You</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight font-display">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-md">
                Schedule a demo, explore partnership opportunities, or just say hello. Our team responds within 2 business hours.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <motion.a key={idx} href={method.href} target={method.icon === 'location_on' ? '_blank' : undefined} rel={method.icon === 'location_on' ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + idx * 0.1 }} whileHover={{ x: 6 }} className="flex items-center gap-4 p-4 bg-surface-bright/80 backdrop-blur-sm rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                    <div className={`w-11 h-11 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon name={method.icon} size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm group-hover:text-primary transition-colors font-display">{method.title}</h3>
                      <p className="text-primary text-sm font-medium">{method.detail}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">{method.sub}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="bg-surface-bright p-8 md:p-10 rounded-2xl border border-outline-variant/30 shadow-lg">
                <h2 className="text-2xl font-bold mb-2 font-display">Send a <span className="gradient-text">Message</span></h2>
                <p className="text-sm text-on-surface-variant mb-7">Fill out the form and we&apos;ll get back to you promptly.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-16">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="w-16 h-16 mx-auto mb-4 bg-tertiary-container/20 rounded-full flex items-center justify-center">
                        <Icon name="check_circle" size={36} className="text-tertiary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-tertiary font-display">Message Sent!</h3>
                      <p className="text-on-surface-variant text-sm">Your email client should have opened. We&apos;ll respond within 2 business hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Full Name *</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Email *</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Company *</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Your company" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all" />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Role *</label>
                          <select id="role" name="role" value={formData.role} onChange={handleChange} required className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all">
                            <option value="">Select your role</option>
                            <option value="cpo-operator">CPO Operator</option>
                            <option value="workshop-owner">Workshop Owner</option>
                            <option value="fleet-manager">Fleet Manager</option>
                            <option value="government-official">Government Official</option>
                            <option value="oem-partner">OEM Partner</option>
                            <option value="investor">Investor</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Message *</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your needs, timeline, and how we can help..." rows={5} className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all resize-none" />
                      </div>
                      <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 py-3.5 bg-primary text-primary-on rounded-xl font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                              <Icon name="hourglass_empty" size={18} />
                            </motion.span>
                            Opening email client...
                          </>
                        ) : (
                          <>
                            <Icon name="send" size={18} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                      <p className="text-xs text-center text-on-surface-variant/60">
                        This will open your default email client with pre-filled details.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeading badge="FAQ" title="Frequently Asked" highlight="Questions" subtitle="Quick answers to common questions about working with Go4Garage." />
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className={`w-full bg-surface-bright p-5 rounded-xl text-left flex items-center justify-between group border transition-all shadow-sm ${openFaq === idx ? 'border-primary/30 shadow-md' : 'border-outline-variant/30 hover:border-primary/20'}`}>
                  <h3 className={`font-semibold text-sm transition-colors font-display ${openFaq === idx ? 'text-primary' : 'group-hover:text-primary'}`}>{faq.q}</h3>
                  <motion.span animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-primary ml-4 flex-shrink-0">
                    <Icon name="expand_more" size={20} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="px-5 py-4 text-sm text-on-surface-variant leading-relaxed bg-surface-bright/50 border-x border-b border-outline-variant/20 rounded-b-xl -mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFICE INFO ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Our Office" title="Where to" highlight="Find Us" />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright p-7 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h3 className="text-lg font-bold mb-4 font-display">Bangalore <span className="gradient-text">Headquarters</span></h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="location_on" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Bangalore, Karnataka, India</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">India&apos;s technology and startup capital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="schedule" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Mon – Fri, 9:00 AM – 6:00 PM IST</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">Weekend appointments available on request</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="mail" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="mailto:go4garageofficial@gmail.com" className="text-sm font-medium text-primary hover:underline">go4garageofficial@gmail.com</a>
                      <p className="text-xs text-on-surface-variant mt-0.5">General inquiries & support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="mail" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="mailto:connect@go4garage.in" className="text-sm font-medium text-primary hover:underline">connect@go4garage.in</a>
                      <p className="text-xs text-on-surface-variant mt-0.5">Business & partnership inquiries</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex items-center justify-center min-h-[280px]">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-container/15 rounded-2xl flex items-center justify-center">
                    <Icon name="map" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-base mb-2 font-display">Bangalore, India</h4>
                  <p className="text-sm text-on-surface-variant mb-4">Heart of India&apos;s tech ecosystem</p>
                  <motion.a href="https://maps.google.com/?q=Bangalore+India" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                    <Icon name="open_in_new" size={16} />
                    Open in Maps
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
