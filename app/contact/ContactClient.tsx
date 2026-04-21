'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';

const contactMethods = [
  {
    icon: 'mail',
    title: 'Email Us',
    detail: 'info@go4garage.in',
    href: 'mailto:info@go4garage.in',
    sub: 'We respond within 2 business hours',
    color: 'from-primary to-primary-container',
  },
  {
    icon: 'phone',
    title: 'Call Us',
    detail: '+91-80-4567-8900',
    href: 'tel:+918045678900',
    sub: 'Mon – Fri, 9 AM – 6 PM IST',
    color: 'from-secondary to-secondary-container',
  },
  {
    icon: 'location_on',
    title: 'Visit Us',
    detail: 'WeWork Galaxy, 43 Residency Road',
    href: 'https://maps.google.com/?q=WeWork+Galaxy+43+Residency+Road+Bangalore',
    sub: 'Bangalore, Karnataka 560025',
    color: 'from-tertiary to-[#00a34a]',
  },
];

const PRODUCT_OPTIONS = [
  { value: '', label: 'Select a product or topic' },
  { value: 'URGAA', label: 'URGAA' },
  { value: 'GSTSAAS', label: 'GSTSAAS' },
  { value: 'Ignition', label: 'Ignition' },
  { value: 'EV_VIDYA_ARJUN', label: 'EV VIDYA ARJUN' },
  { value: 'KAILASH_AI', label: 'KAILASH-AI' },
  { value: 'Eka_AI', label: 'Eka-AI' },
  { value: 'Full_Platform', label: 'Full Platform' },
  { value: 'General_Inquiry', label: 'General Inquiry' },
];

const faqs = [
  {
    q: 'How quickly can we get started?',
    a: 'Most customers are operational within 1-2 weeks for GSTSAAS and 2-4 weeks for URGAA. Full platform deployment takes 4-5 weeks.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes, we offer a 14-day free trial on our Starter plan. Contact us to get started.',
  },
  {
    q: 'What industries do you serve?',
    a: "We focus exclusively on India's EV and automobile ecosystem — EV charging operators, service workshops, fleet operators, training institutions, and OEMs.",
  },
  {
    q: 'Is my data secure?',
    a: 'All data is encrypted in transit and at rest. We follow enterprise security practices with regular audits.',
  },
  {
    q: 'Can I integrate with my existing systems?',
    a: 'Yes. Our API-first architecture supports integration with SAP, Tally, GSTN, and custom systems.',
  },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  interest: '',
  message: '',
  website: '',
};

const CAL_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const WEEKEND_INDICES = new Set([0, 6, 7, 13, 14, 20, 21, 27, 28]);

export default function ContactClient() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name in errors) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.website) return;
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setSubmitted(true); }, 800);
  };

  const handleReset = () => { setFormData(INITIAL_FORM); setErrors({}); setSubmitted(false); };

  const inputBase = 'w-full px-4 py-3 bg-surface-container-low border rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 transition-all';
  const inputOk = 'border-outline-variant/30 focus:border-primary/50 focus:ring-primary/15';
  const inputErr = 'border-red-500 focus:border-red-500 focus:ring-red-500/15';

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">

      {/* SPLIT LAYOUT HERO */}
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
                  <motion.a
                    key={idx}
                    href={method.href}
                    target={method.icon === 'location_on' ? '_blank' : undefined}
                    rel={method.icon === 'location_on' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 bg-surface-bright/80 backdrop-blur-sm rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  >
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
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-12 px-4">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                        <Icon name="check_circle" size={36} className="text-green-500" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-green-600 font-display">Thank you!</h3>
                      <p className="text-on-surface-variant text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                      <motion.button onClick={handleReset} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-5 py-2.5 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Honeypot hidden from real users */}
                      <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={`${inputBase} ${errors.name ? inputErr : inputOk}`} />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className={`${inputBase} ${errors.email ? inputErr : inputOk}`} />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Company</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company (optional)" className={`${inputBase} ${inputOk}`} />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Phone</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX (optional)" className={`${inputBase} ${inputOk}`} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">Product Interest</label>
                        <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className={`${inputBase} ${inputOk}`}>
                          {PRODUCT_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold mb-1.5 text-on-surface font-display">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your needs, timeline, and how we can help... (min. 20 characters)" rows={5} className={`${inputBase} ${errors.message ? inputErr : inputOk} resize-none`} />
                        {errors.message
                          ? <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                          : <p className="text-xs text-on-surface-variant/60 mt-1 text-right">{formData.message.length} / 20 min</p>
                        }
                      </div>

                      <motion.button type="submit" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 py-3.5 bg-primary text-primary-on rounded-xl font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                              <Icon name="hourglass_empty" size={18} />
                            </motion.span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Icon name="send" size={18} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CALENDAR BOOKING */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            badge="Book a Call"
            title="Schedule a"
            highlight="Discovery Call"
            subtitle="Talk to our team about your specific needs and how Go4Garage can help."
          />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-container/15 rounded-xl flex items-center justify-center">
                  <Icon name="calendar_month" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display">Book a 30-Minute Discovery Call</h3>
                  <p className="text-sm text-on-surface-variant">Pick a time that works for you</p>
                </div>
              </div>
              <motion.a href="https://calendly.com/go4garage" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex-shrink-0">
                <Icon name="open_in_new" size={16} />
                Open Calendar
              </motion.a>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-5 py-10 px-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest font-display">Calendar Booking Widget — Powered by Calendly</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              <div className="w-full max-w-sm bg-surface-container-low rounded-2xl border border-outline-variant/30 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-sm font-display">July 2025</span>
                  <div className="flex gap-1">
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-primary-container/20 transition-colors text-on-surface-variant">
                      <Icon name="chevron_left" size={16} />
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-primary-container/20 transition-colors text-on-surface-variant">
                      <Icon name="chevron_right" size={16} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {CAL_DAYS.map((d, i) => (
                    <div key={i} className="h-8 flex items-center justify-center text-xs font-bold text-on-surface-variant">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }, (_, i) => (
                    <motion.div
                      key={i}
                      whileHover={!WEEKEND_INDICES.has(i) ? { scale: 1.15 } : {}}
                      className={`h-8 flex items-center justify-center rounded-lg text-xs transition-colors cursor-pointer ${WEEKEND_INDICES.has(i) ? 'text-on-surface-variant/30 cursor-default' : i === 14 ? 'bg-primary text-primary-on font-bold' : 'hover:bg-primary-container/25 text-on-surface'}`}
                    >
                      {i + 1}
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-on-surface-variant">Select a date to see available time slots</p>

              <motion.a href="https://calendly.com/go4garage" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                <Icon name="calendar_month" size={18} />
                Schedule Your Free Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface">
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

      {/* OFFICE INFO */}
      <section className="py-24 bg-surface-container-low">
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
                      <p className="text-sm font-medium">WeWork Galaxy, 43 Residency Road</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">Bangalore, Karnataka 560025</p>
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
                      <a href="mailto:info@go4garage.in" className="text-sm font-medium text-primary hover:underline">info@go4garage.in</a>
                      <p className="text-xs text-on-surface-variant mt-0.5">General inquiries &amp; support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="phone" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="tel:+918045678900" className="text-sm font-medium text-primary hover:underline">+91-80-4567-8900</a>
                      <p className="text-xs text-on-surface-variant mt-0.5">Mon – Fri, 9 AM – 6 PM IST</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex items-center justify-center min-h-[280px]">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-container/15 rounded-2xl flex items-center justify-center">
                    <Icon name="map" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-base mb-2 font-display">WeWork Galaxy, Bangalore</h4>
                  <p className="text-sm text-on-surface-variant mb-4">43 Residency Road, Karnataka 560025</p>
                  <motion.a href="https://maps.google.com/?q=WeWork+Galaxy+43+Residency+Road+Bangalore" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-on rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                    <Icon name="open_in_new" size={16} />
                    Open in Maps
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <motion.a
          href="https://wa.me/918045678900?text=Hello%20Go4Garage%2C%20I%27m%20interested%20in%20your%20EV%20platform"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            Chat with us
            <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>

    </div>
  );
}
