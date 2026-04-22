'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { trackCTAClick } from '@/lib/analytics';

// ─── Calculation logic ──────────────────────────────────────────────────────

interface Inputs {
  chargingStations: number;
  workshopBays: number;
  fleetSize: number;
  staffCount: number;
  monthlyComplianceCost: number;
  monthlyAdminHours: number;
  avgHourlyRate: number;
  annualFines: number;
}

interface ROIResult {
  complianceSavings: number;
  adminTimeSavings: number;
  fineSavings: number;
  revenueGain: number;
  totalAnnualSavings: number;
  roiPercent: number;
  paybackMonths: number;
  platformCostEstimate: number;
}

const AVG_PLATFORM_COST_PER_STATION = 18000;
const COMPLIANCE_REDUCTION = 0.895;
const ADMIN_REDUCTION = 0.68;
const FINE_REDUCTION = 0.92;
const REVENUE_PER_STATION_MONTHLY = 2200;
const REVENUE_GAIN_PCT = 0.15;

function calcROI(inputs: Inputs): ROIResult {
  const complianceSavings = inputs.monthlyComplianceCost * 12 * COMPLIANCE_REDUCTION;
  const adminTimeSavings = inputs.monthlyAdminHours * 12 * inputs.avgHourlyRate * ADMIN_REDUCTION;
  const fineSavings = inputs.annualFines * FINE_REDUCTION;
  const revenueGain = inputs.chargingStations * REVENUE_PER_STATION_MONTHLY * 12 * REVENUE_GAIN_PCT
    + inputs.workshopBays * 8000 * 12 * 0.12;

  const totalAnnualSavings = complianceSavings + adminTimeSavings + fineSavings + revenueGain;

  const platformCostEstimate = Math.max(
    inputs.chargingStations * AVG_PLATFORM_COST_PER_STATION
    + inputs.workshopBays * 9600
    + inputs.fleetSize * 3600,
    36000
  );

  const roiPercent = platformCostEstimate > 0
    ? ((totalAnnualSavings - platformCostEstimate) / platformCostEstimate) * 100
    : 0;

  const paybackMonths = platformCostEstimate > 0 && totalAnnualSavings > 0
    ? Math.ceil((platformCostEstimate / totalAnnualSavings) * 12)
    : 0;

  return { complianceSavings, adminTimeSavings, fineSavings, revenueGain, totalAnnualSavings, roiPercent, paybackMonths, platformCostEstimate };
}

// ─── Slider ────────────────────────────────────────────────────────────────

function Slider({ label, sublabel, value, min, max, step, unit, onChange }: {
  label: string; sublabel?: string; value: number; min: number; max: number; step: number; unit: string; onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div>
          <span className="text-sm font-medium text-on-surface">{label}</span>
          {sublabel && <span className="block text-xs text-on-surface-variant">{sublabel}</span>}
        </div>
        <span className="text-sm font-bold text-primary">
          {unit === '₹' ? `₹${value.toLocaleString('en-IN')}` : `${value.toLocaleString('en-IN')} ${unit}`}
        </span>
      </div>
      <div className="relative h-2 bg-surface-container-high rounded-full">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary-container rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-md border-2 border-white transition-all"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
        <span>{unit === '₹' ? `₹${min.toLocaleString('en-IN')}` : `${min} ${unit}`}</span>
        <span>{unit === '₹' ? `₹${max.toLocaleString('en-IN')}` : `${max} ${unit}`}</span>
      </div>
    </div>
  );
}

// ─── Result Card ──────────────────────────────────────────────────────────

function ResultCard({ label, value, icon, color, sublabel }: { label: string; value: string; icon: string; color: string; sublabel?: string }) {
  return (
    <motion.div
      layout
      className={`p-4 rounded-2xl border ${color}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-current/10 flex items-center justify-center shrink-0">
          <Icon name={icon} size={20} className="opacity-70" />
        </div>
        <div>
          <p className="text-xs font-medium opacity-80 mb-0.5">{label}</p>
          <p className="text-lg font-bold leading-tight">{value}</p>
          {sublabel && <p className="text-xs opacity-60 mt-0.5">{sublabel}</p>}
        </div>
      </div>
    </motion.div>
  );
}

function fmt(n: number) {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(1)}Cr`;
  if (n >= 1_00_000) return `₹${(n / 1_00_000).toFixed(1)}L`;
  return `₹${n.toLocaleString('en-IN')}`;
}

// ─── Main Component ──────────────────────────────────────────────────────

const DEFAULTS: Inputs = {
  chargingStations: 10,
  workshopBays: 5,
  fleetSize: 20,
  staffCount: 15,
  monthlyComplianceCost: 50000,
  monthlyAdminHours: 80,
  avgHourlyRate: 400,
  annualFines: 120000,
};

export default function ROIClient() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const set = (k: keyof Inputs) => (v: number) => setInputs((p) => ({ ...p, [k]: v }));

  const result = useMemo(() => calcROI(inputs), [inputs]);

  return (
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ─── HERO ─── */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/8 via-surface to-secondary-container/6" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/8 rounded-full blur-[150px]"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/10 border border-primary/20 text-sm font-semibold text-primary mb-6"
          >
            <Icon name="calculate" size={18} className="text-primary" />
            ROI Calculator
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-on-surface mb-4 leading-tight"
          >
            What&apos;s Your <span className="gradient-text">Go4Garage ROI?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Drag the sliders to match your business. See your projected annual savings, payback period, and ROI instantly.
          </motion.p>
        </div>
      </section>

      {/* ─── CALCULATOR ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* INPUTS — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Business Scale */}
            <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/30">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary-container/15 flex items-center justify-center">
                  <Icon name="business" size={18} className="text-primary" />
                </div>
                <h2 className="font-bold text-on-surface">Business Scale</h2>
              </div>
              <div className="space-y-6">
                <Slider label="EV Charging Stations" sublabel="Total CPO stations managed" value={inputs.chargingStations} min={1} max={200} step={1} unit="stations" onChange={set('chargingStations')} />
                <Slider label="Workshop Bays" sublabel="Service bays in all locations" value={inputs.workshopBays} min={0} max={50} step={1} unit="bays" onChange={set('workshopBays')} />
                <Slider label="Fleet Size" sublabel="EVs in your fleet" value={inputs.fleetSize} min={0} max={500} step={5} unit="EVs" onChange={set('fleetSize')} />
                <Slider label="Staff / Team Size" value={inputs.staffCount} min={1} max={200} step={1} unit="people" onChange={set('staffCount')} />
              </div>
            </div>

            {/* Cost Baseline */}
            <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/30">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-secondary-container/15 flex items-center justify-center">
                  <Icon name="account_balance_wallet" size={18} className="text-secondary" />
                </div>
                <h2 className="font-bold text-on-surface">Current Monthly Costs</h2>
              </div>
              <div className="space-y-6">
                <Slider label="Compliance & Legal Costs" sublabel="Per month — consultants, filings, licences" value={inputs.monthlyComplianceCost} min={5000} max={500000} step={5000} unit="₹" onChange={set('monthlyComplianceCost')} />
                <Slider label="Admin Hours" sublabel="Hours/month on manual tasks" value={inputs.monthlyAdminHours} min={10} max={500} step={10} unit="hrs" onChange={set('monthlyAdminHours')} />
                <Slider label="Hourly Cost Rate" sublabel="Staff cost per hour (fully loaded)" value={inputs.avgHourlyRate} min={150} max={2000} step={50} unit="₹" onChange={set('avgHourlyRate')} />
                <Slider label="Annual Fines & Penalties" sublabel="Missed compliance deadlines, errors" value={inputs.annualFines} min={0} max={1000000} step={10000} unit="₹" onChange={set('annualFines')} />
              </div>
            </div>
          </motion.div>

          {/* RESULTS — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Big number */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary-container/5 to-surface-container border border-primary/20 text-center">
              <p className="text-sm font-semibold text-primary mb-1">Projected Annual Savings</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={result.totalAnnualSavings}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-5xl font-black gradient-text mb-1"
                >
                  {fmt(result.totalAnnualSavings)}
                </motion.p>
              </AnimatePresence>
              <p className="text-xs text-on-surface-variant">per year across your operations</p>

              {/* Breakdown bar */}
              <div className="mt-4 h-3 rounded-full overflow-hidden bg-surface-container-high flex">
                {result.totalAnnualSavings > 0 && (
                  <>
                    <div className="bg-primary transition-all duration-500" style={{ width: `${(result.complianceSavings / result.totalAnnualSavings) * 100}%` }} />
                    <div className="bg-secondary transition-all duration-500" style={{ width: `${(result.adminTimeSavings / result.totalAnnualSavings) * 100}%` }} />
                    <div className="bg-tertiary transition-all duration-500" style={{ width: `${(result.fineSavings / result.totalAnnualSavings) * 100}%` }} />
                    <div className="bg-primary-container transition-all duration-500" style={{ width: `${(result.revenueGain / result.totalAnnualSavings) * 100}%` }} />
                  </>
                )}
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 justify-center">
                {[
                  { label: 'Compliance', color: 'bg-primary' },
                  { label: 'Admin', color: 'bg-secondary' },
                  { label: 'Fines', color: 'bg-tertiary' },
                  { label: 'Revenue', color: 'bg-primary-container' },
                ].map((l) => (
                  <span key={l.label} className="flex items-center gap-1 text-[10px] text-on-surface-variant">
                    <span className={`w-2 h-2 rounded-full ${l.color}`} />{l.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-3">
              <ResultCard label="Compliance Savings" value={fmt(result.complianceSavings)} icon="gavel" color="bg-primary-container/10 border-primary/20 text-primary" sublabel="89.5% reduction" />
              <ResultCard label="Admin Time Saved" value={fmt(result.adminTimeSavings)} icon="schedule" color="bg-secondary-container/10 border-secondary/20 text-secondary" sublabel="68% reduction" />
              <ResultCard label="Fine Avoidance" value={fmt(result.fineSavings)} icon="shield" color="bg-tertiary-container/10 border-tertiary/20 text-tertiary" sublabel="92% reduction" />
              <ResultCard label="Revenue Gain" value={fmt(result.revenueGain)} icon="trending_up" color="bg-primary-container/10 border-primary/20 text-primary" sublabel="15% uplift" />
            </div>

            {/* ROI + Payback */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/30 text-center">
                <p className="text-xs text-on-surface-variant mb-1">ROI</p>
                <p className={`text-2xl font-black ${result.roiPercent >= 0 ? 'text-tertiary' : 'text-red-500'}`}>
                  {result.roiPercent >= 0 ? '+' : ''}{Math.round(result.roiPercent)}%
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/30 text-center">
                <p className="text-xs text-on-surface-variant mb-1">Payback Period</p>
                <p className="text-2xl font-black text-primary">
                  {result.paybackMonths <= 0 ? '–' : `${result.paybackMonths}mo`}
                </p>
              </div>
            </div>

            {/* Platform cost estimate */}
            <div className="p-4 rounded-2xl bg-surface-container-high border border-outline-variant/30 text-center text-sm text-on-surface-variant">
              <p className="text-xs mb-1 font-medium">Estimated Annual Platform Cost</p>
              <p className="text-base font-bold text-on-surface">{fmt(result.platformCostEstimate)}</p>
              <p className="text-[10px] mt-0.5">Actual pricing depends on plan. <a href="/pricing" className="text-primary underline">View Plans →</a></p>
            </div>

            {/* CTA */}
            <Link
              href="/demo"
              onClick={() => trackCTAClick('roi_book_demo', '/demo')}
              className="block w-full py-3.5 bg-primary text-white rounded-xl font-bold text-sm text-center hover:bg-primary/90 transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <Icon name="event" size={18} className="text-white" />
              Book a Demo — Verify Your Numbers
            </Link>
            <p className="text-[11px] text-center text-on-surface-variant">
              * Estimates based on average Go4Garage customer outcomes. Actual results vary by business size and current processes.
            </p>
          </motion.div>
        </div>

        {/* ─── TRUST BAR ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-surface-container border border-outline-variant/30"
        >
          <SectionHeading
            title="Based on Real Go4Garage Customer Data"
            subtitle="These multipliers come from averaging outcomes across our current customer base."
            align="center"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { metric: '89.5%', label: 'Compliance cost reduction', icon: 'gavel', color: 'text-primary' },
              { metric: '4 weeks', label: 'Average implementation', icon: 'schedule', color: 'text-secondary' },
              { metric: '33 states', label: 'Regulatory coverage', icon: 'map', color: 'text-tertiary' },
              { metric: '₹0', label: 'Downtime during go-live', icon: 'bolt', color: 'text-primary' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <Icon name={item.icon} size={24} className={`${item.color} mb-2 mx-auto`} />
                <p className={`text-2xl font-black ${item.color}`}>{item.metric}</p>
                <p className="text-xs text-on-surface-variant mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
