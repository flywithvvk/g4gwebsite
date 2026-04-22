'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';

// ─── Types ────────────────────────────────────────────────────────────────────

type DemoType = 'workshop' | 'charging' | 'full' | null;

interface TimeSlotDay {
  day: string;
  date: string;
  times: string[];
}

interface BookingForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  useCase: string;
}

// ─── Dynamic business day generator ──────────────────────────────────────────

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const TIME_SETS = [
  ['10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
  ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM'],
  ['11:00 AM', '1:00 PM', '3:00 PM', '6:00 PM'],
  ['10:00 AM', '2:00 PM', '4:00 PM', '5:00 PM'],
  ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM'],
];

function getNextBusinessDays(count: number): TimeSlotDay[] {
  const result: TimeSlotDay[] = [];
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1); // start from tomorrow
  let setIdx = 0;
  while (result.length < count) {
    const dow = date.getDay();
    if (dow !== 0 && dow !== 6) {
      result.push({
        day: DAY_NAMES[dow],
        date: `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`,
        times: TIME_SETS[setIdx % TIME_SETS.length],
      });
      setIdx++;
    }
    date.setDate(date.getDate() + 1);
  }
  return result;
}

const demoOptions = [
  {
    id: 'workshop' as const,
    icon: 'build',
    iconBg: 'bg-primary-container/15',
    iconColor: 'text-primary',
    title: 'Workshop Demo',
    products: 'GSTSAAS + KAILASH-AI',
    description: 'For EV workshop owners wanting to digitize operations',
    duration: '30 min',
  },
  {
    id: 'charging' as const,
    icon: 'ev_station',
    iconBg: 'bg-secondary-container/15',
    iconColor: 'text-secondary',
    title: 'Charging Network Demo',
    products: 'URGAA + KAILASH-AI',
    description: 'For CPO operators managing regulatory compliance',
    duration: '30 min',
  },
  {
    id: 'full' as const,
    icon: 'rocket_launch',
    iconBg: 'bg-tertiary-container/15',
    iconColor: 'text-tertiary',
    title: 'Full Platform Demo',
    products: 'All 6 Products',
    description: 'For enterprises looking for end-to-end transformation',
    duration: '45 min',
  },
];


const expectItems = [
  'Platform walkthrough tailored to your industry',
  'Live product demonstration',
  'Q&A with our solutions team',
  'No commitment required',
];

const initialForm: BookingForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  useCase: '',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function DemoClient() {
  const [selectedDemo, setSelectedDemo] = useState<DemoType>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const timeSlots = useMemo(() => getNextBusinessDays(5), []);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<BookingForm>>({});

  const canBook = selectedDemo !== null && selectedSlot !== null;

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof BookingForm]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateBooking = (): Partial<BookingForm> => {
    const errs: Partial<BookingForm> = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.company.trim()) errs.company = 'Company name is required.';
    if (!form.useCase) errs.useCase = 'Please select your use case.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateBooking();
    if (Object.keys(errs).length > 0) { setFormErrors(errs); return; }

    const demoLabel = demoOptions.find((d) => d.id === selectedDemo)?.title ?? selectedDemo;
    const subject = encodeURIComponent(`Demo Booking: ${demoLabel} — ${form.name} (${form.company})`);
    const body = encodeURIComponent(
      `DEMO BOOKING REQUEST\n\nDemo Type: ${demoLabel}\nRequested Slot: ${selectedSlot}\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone || 'Not provided'}\nUse Case: ${form.useCase}`
    );
    window.location.href = `mailto:connect@go4garage.in?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm(initialForm);
      setFormErrors({});
    }, 5000);
  };

  const openModal = () => {
    setSubmitted(false);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/8" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-primary-container/10 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-secondary-container/8 rounded-full blur-[150px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #904d00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary-container/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary font-display">Book a Demo</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-display">
              See Go4Garage{' '}
              <span className="gradient-text">in Action</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Get a personalized 30-minute walkthrough of the platform tailored to your use case
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: DEMO OPTIONS ────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Choose Your Demo"
            title="Pick the Right"
            highlight="Demo for You"
            subtitle="Select the demo type that best matches your use case."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {demoOptions.map((option, idx) => {
              const isSelected = selectedDemo === option.id;
              return (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedDemo(option.id)}
                  className={`text-left p-7 rounded-2xl border shadow-sm transition-all flex flex-col gap-4 ${
                    isSelected
                      ? 'border-primary ring-2 ring-primary shadow-md bg-surface-bright'
                      : 'border-outline-variant/30 hover:shadow-md bg-surface-bright hover:border-primary/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl ${option.iconBg} flex items-center justify-center`}>
                    <Icon name={option.icon} size={26} className={option.iconColor} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-lg font-display">{option.title}</h3>
                      {isSelected && (
                        <Icon name="check_circle" size={20} className="text-primary flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs font-semibold text-primary mb-2">{option.products}</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/20">
                    <Icon name="schedule" size={16} className="text-on-surface-variant" />
                    <span className="text-xs text-on-surface-variant">{option.duration}</span>
                  </div>
                  <span
                    className={`w-full text-center py-2 rounded-xl text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-primary text-primary-on'
                        : 'bg-primary-container/10 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {isSelected ? 'Selected ✓' : 'Select This Demo'}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BOOKING ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
              Select Your Preferred <span className="gradient-text">Time</span>
            </h2>
            <p className="mt-4 text-on-surface-variant text-lg">All times in IST (India Standard Time)</p>
          </motion.div>

          {/* Time slot grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
            {timeSlots.map((daySlot, dayIdx) => (
              <motion.div
                key={daySlot.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: dayIdx * 0.07 }}
                className="flex flex-col gap-2"
              >
                <div className="text-center mb-1">
                  <p className="font-bold text-sm font-display">{daySlot.day}</p>
                  <p className="text-xs text-on-surface-variant">{daySlot.date}</p>
                </div>
                {daySlot.times.map((time) => {
                  const slotKey = `${daySlot.day} ${daySlot.date} at ${time} IST`;
                  const isActive = selectedSlot === slotKey;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedSlot(slotKey)}
                      className={`w-full py-2 px-1 rounded-xl text-xs font-semibold border transition-all ${
                        isActive
                          ? 'bg-primary text-primary-on border-primary shadow-md'
                          : 'bg-surface-bright border-outline-variant/30 text-on-surface-variant hover:border-primary/40 hover:text-primary'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </motion.div>
            ))}
          </div>

          {/* Selected slot display */}
          <div className="text-center mb-8 min-h-[1.75rem]">
            <AnimatePresence mode="wait">
              {selectedSlot && (
                <motion.p
                  key={selectedSlot}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-semibold text-primary"
                >
                  <Icon name="event" size={16} className="inline mr-1 align-middle" />
                  Selected: {selectedSlot}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Book button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={canBook ? { scale: 1.03 } : {}}
              whileTap={canBook ? { scale: 0.97 } : {}}
              onClick={canBook ? openModal : undefined}
              disabled={!canBook}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base shadow-md transition-all ${
                canBook
                  ? 'bg-primary text-primary-on hover:shadow-lg cursor-pointer'
                  : 'bg-outline-variant/30 text-on-surface-variant cursor-not-allowed opacity-60'
              }`}
            >
              <Icon name="calendar_month" size={20} />
              Book This Slot
            </motion.button>
          </div>
          {!canBook && (
            <p className="text-center text-xs text-on-surface-variant mt-3">
              {!selectedDemo && !selectedSlot
                ? 'Select a demo type and time slot to continue'
                : !selectedDemo
                ? 'Select a demo type above to continue'
                : 'Select a time slot above to continue'}
            </p>
          )}
        </div>
      </section>

      {/* ─── SECTION 4: WHAT TO EXPECT ──────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="What's Included"
            title="What to"
            highlight="Expect"
            subtitle="Every demo is personalized — not a generic sales pitch."
          />
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {expectItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 p-5 bg-surface-bright rounded-2xl border border-outline-variant/30 shadow-sm"
              >
                <Icon name="check_circle" size={22} className="text-tertiary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-on-surface leading-relaxed font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-container">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-on mb-4 font-display">
              Still have questions?
            </h2>
            <p className="text-primary-on/80 mb-8 max-w-md mx-auto">
              Our team is happy to answer anything before you book.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-bright text-primary rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="mail" size={20} />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── MODAL BOOKING FORM ─────────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !submitted && setShowModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-surface-bright w-full max-w-lg rounded-2xl border border-outline-variant/30 shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* Success state */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-10 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="w-16 h-16 mx-auto mb-4 bg-tertiary-container/20 rounded-full flex items-center justify-center"
                      >
                        <Icon name="check_circle" size={36} className="text-tertiary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-tertiary font-display">
                        Booking Request Sent!
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-1">
                        Your request has been sent to our team.
                      </p>
                      <p className="text-on-surface-variant text-sm">
                        We&apos;ll confirm your demo slot at <strong>{form.email}</strong> within 2 hours.
                      </p>
                    </motion.div>
                  ) : (
                    /* Form state */
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="flex items-center justify-between p-6 border-b border-outline-variant/20">
                        <div>
                          <h3 className="text-xl font-bold font-display">Confirm Your Booking</h3>
                          {selectedSlot && (
                            <p className="text-xs text-primary mt-0.5">{selectedSlot}</p>
                          )}
                        </div>
                        <button
                          onClick={() => setShowModal(false)}
                          className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                          aria-label="Close modal"
                        >
                          <Icon name="close" size={20} />
                        </button>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold mb-1.5 font-display">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleFormChange}
                              placeholder="Your full name"
                              className={`w-full px-4 py-3 bg-surface-container-low border rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 transition-all ${formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : 'border-outline-variant/30 focus:border-primary/50 focus:ring-primary/15'}`}
                            />
                            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-semibold mb-1.5 font-display">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleFormChange}
                              placeholder="you@company.com"
                              className={`w-full px-4 py-3 bg-surface-container-low border rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 transition-all ${formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : 'border-outline-variant/30 focus:border-primary/50 focus:ring-primary/15'}`}
                            />
                            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold mb-1.5 font-display">
                              Company <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleFormChange}
                              placeholder="Your company"
                              className={`w-full px-4 py-3 bg-surface-container-low border rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 transition-all ${formErrors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : 'border-outline-variant/30 focus:border-primary/50 focus:ring-primary/15'}`}
                            />
                            {formErrors.company && <p className="text-red-500 text-xs mt-1">{formErrors.company}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-semibold mb-1.5 font-display">
                              Phone{' '}
                              <span className="text-on-surface-variant font-normal">(optional)</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleFormChange}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1.5 font-display">
                            Use Case <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="useCase"
                            value={form.useCase}
                            onChange={handleFormChange}
                            className={`w-full px-4 py-3 bg-surface-container-low border rounded-xl text-on-surface text-sm focus:outline-none focus:ring-2 transition-all ${formErrors.useCase ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : 'border-outline-variant/30 focus:border-primary/50 focus:ring-primary/15'}`}
                          >
                            <option value="">Select your use case</option>
                            <option value="ev-workshop">EV Workshop</option>
                            <option value="charging-network">Charging Network</option>
                            <option value="fleet-management">Fleet Management</option>
                            <option value="government-municipal">Government / Municipal</option>
                            <option value="other">Other</option>
                          </select>
                          {formErrors.useCase && <p className="text-red-500 text-xs mt-1">{formErrors.useCase}</p>}
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 bg-primary text-primary-on rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Icon name="calendar_month" size={18} />
                          Confirm Demo Booking
                        </motion.button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
