'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { IndiaFlag } from '@/components/IndiaFlag';

type ProductTone = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'blue';

interface ProductNode {
  name: string;
  short: string;
  role: string;
  metric: string;
  icon: string;
  tone: ProductTone;
}

interface StateSignal {
  name: string;
  x: number;
  y: number;
  risk: 'high' | 'medium' | 'low';
}

const productNodes: ProductNode[] = [
  { name: 'URGAA', short: 'Compliance', role: 'State EV policy, DISCOM and grid approvals', metric: '33 states', icon: 'ev_station', tone: 'primary' },
  { name: 'GST', short: 'Workshops', role: 'Job cards, billing, inventory and service flow', metric: '17 flows', icon: 'receipt_long', tone: 'secondary' },
  { name: 'Ignition', short: 'Consumer App', role: 'Charging, service booking and EV ownership', metric: '10 journeys', icon: 'smartphone', tone: 'tertiary' },
  { name: 'EV VIDYA', short: 'Skills', role: 'Technician training, assessment and certification', metric: '8 tracks', icon: 'school', tone: 'blue' },
  { name: 'KAILASH-AI', short: 'Analytics', role: 'Predictive diagnostics and intelligence APIs', metric: '18 models', icon: 'psychology', tone: 'danger' },
  { name: 'Eka-AI', short: 'Agent', role: 'Natural-language orchestration across products', metric: '1 brain', icon: 'smart_toy', tone: 'tertiary' },
];

const stateSignals: StateSignal[] = [
  { name: 'J&K', x: 37, y: 10, risk: 'medium' },
  { name: 'Delhi NCR', x: 42, y: 27, risk: 'high' },
  { name: 'Rajasthan', x: 26, y: 41, risk: 'medium' },
  { name: 'Uttar Pradesh', x: 53, y: 38, risk: 'high' },
  { name: 'Gujarat', x: 25, y: 57, risk: 'low' },
  { name: 'Maharashtra', x: 39, y: 67, risk: 'high' },
  { name: 'Karnataka', x: 39, y: 83, risk: 'medium' },
  { name: 'Tamil Nadu', x: 48, y: 93, risk: 'medium' },
  { name: 'Telangana', x: 48, y: 73, risk: 'low' },
  { name: 'Madhya Pradesh', x: 45, y: 55, risk: 'high' },
  { name: 'Odisha', x: 65, y: 66, risk: 'medium' },
  { name: 'West Bengal', x: 72, y: 53, risk: 'high' },
  { name: 'Assam', x: 83, y: 43, risk: 'medium' },
  { name: 'North East', x: 88, y: 36, risk: 'low' },
];

const toneClasses: Record<ProductTone, { card: string; icon: string; dot: string; line: string }> = {
  primary: {
    card: 'border-primary/30 bg-primary-container/10 text-primary',
    icon: 'bg-primary text-primary-on',
    dot: 'bg-primary',
    line: 'border-primary/30',
  },
  secondary: {
    card: 'border-secondary/25 bg-secondary-container/10 text-secondary',
    icon: 'bg-secondary text-secondary-on',
    dot: 'bg-secondary',
    line: 'border-secondary/25',
  },
  tertiary: {
    card: 'border-tertiary/25 bg-tertiary-container/10 text-tertiary',
    icon: 'bg-tertiary text-tertiary-on',
    dot: 'bg-tertiary',
    line: 'border-tertiary/25',
  },
  danger: {
    card: 'border-red-400/30 bg-red-500/[0.08] text-red-700',
    icon: 'bg-red-700 text-white',
    dot: 'bg-red-600',
    line: 'border-red-400/30',
  },
  blue: {
    card: 'border-blue-500/25 bg-blue-500/[0.08] text-blue-700',
    icon: 'bg-blue-700 text-white',
    dot: 'bg-blue-600',
    line: 'border-blue-500/25',
  },
};

const riskClasses = {
  high: 'bg-red-500 shadow-red-500/35',
  medium: 'bg-primary shadow-primary/35',
  low: 'bg-tertiary shadow-tertiary/30',
};

function productStatus(index: number, activeIndex: number) {
  if (index === activeIndex) return 'Active layer';
  if (index < activeIndex) return 'Synced';
  return 'Standby';
}

export function LivingComplianceMap() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSignal, setActiveSignal] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProduct((current) => (current + 1) % productNodes.length);
      setActiveSignal((current) => (current + 1) % stateSignals.length);
    }, 1600);

    return () => window.clearInterval(timer);
  }, []);

  const selectedProduct = productNodes[activeProduct];
  const selectedTone = toneClasses[selectedProduct.tone];
  const activeState = stateSignals[activeSignal];
  const synchronizedCount = useMemo(() => activeProduct + 1, [activeProduct]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.42, duration: 0.65, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[1.75rem] border border-outline-variant/45 bg-[#fffdf7] shadow-2xl shadow-primary/10"
    >
      <div className="border-b border-outline-variant/45 bg-white/80 px-5 py-4 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-container/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <IndiaFlag size={16} /> India command layer
            </div>
            <h3 className="max-w-xl text-2xl font-black leading-tight text-on-surface md:text-[2rem] font-display">
              6 products coordinate India&apos;s automobile intelligence
            </h3>
          </div>
          <div className="hidden shrink-0 rounded-2xl border border-tertiary/25 bg-tertiary-container/10 px-4 py-2 text-right sm:block">
            <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Live stack</p>
            <p className="text-2xl font-black text-tertiary font-display">{synchronizedCount}/6</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[390px] border-b border-outline-variant/45 bg-[#fbfaf4] lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 opacity-[0.42]" style={{ backgroundImage: 'linear-gradient(rgba(144,77,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(144,77,0,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <svg viewBox="0 0 320 360" className="absolute inset-x-6 top-5 h-[330px] w-[calc(100%-3rem)] drop-shadow-xl" aria-label="India operations map" role="img">
            <defs>
              <linearGradient id="g4gIndiaFill" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#fff8e8" />
                <stop offset="0.48" stopColor="#ead8ad" />
                <stop offset="1" stopColor="#f7e6c8" />
              </linearGradient>
              <filter id="g4gMapShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#904d00" floodOpacity="0.14" />
              </filter>
            </defs>
            <path
              d="M121 12 C135 7 150 13 159 27 C174 24 190 31 199 47 C214 51 224 64 228 78 C242 82 252 93 254 108 C269 116 281 130 285 146 C266 146 249 154 237 169 C229 181 230 197 219 211 C211 225 210 244 197 261 C187 273 179 289 176 306 C169 315 160 321 149 329 C145 312 137 300 128 288 C120 277 118 263 105 252 C93 242 81 229 78 214 C67 210 57 201 51 189 C60 178 67 166 60 152 C53 139 46 128 52 115 C64 107 74 99 79 87 C82 71 91 60 96 47 C101 32 109 20 121 12 Z"
              fill="url(#g4gIndiaFill)"
              stroke="#904d00"
              strokeWidth="2.3"
              strokeLinejoin="round"
              filter="url(#g4gMapShadow)"
            />
            <path
              d="M236 113 C253 105 279 111 299 125 C285 139 263 139 247 150 C244 137 238 127 236 113 Z"
              fill="url(#g4gIndiaFill)"
              stroke="#904d00"
              strokeWidth="2.1"
              strokeLinejoin="round"
              filter="url(#g4gMapShadow)"
            />
            <path d="M131 292 C138 305 142 321 145 341" stroke="#904d00" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            <circle cx="253" cy="276" r="3" fill="#904d00" opacity="0.55" />
            <circle cx="261" cy="291" r="2.4" fill="#904d00" opacity="0.45" />
          </svg>

          <div className="absolute inset-x-6 top-5 h-[330px]">
            {stateSignals.map((signal, index) => {
              const active = index === activeSignal;
              return (
                <button
                  key={signal.name}
                  type="button"
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none"
                  style={{ left: `${signal.x}%`, top: `${signal.y}%` }}
                  aria-label={`${signal.name} ${signal.risk} signal`}
                  onClick={() => setActiveSignal(index)}
                >
                  <motion.span
                    animate={{ scale: active ? [1, 1.35, 1] : 1 }}
                    transition={{ duration: 1.2, repeat: active ? Infinity : 0 }}
                    className={`block h-3.5 w-3.5 rounded-full border-2 border-white shadow-lg ${riskClasses[signal.risk]}`}
                  />
                </button>
              );
            })}
          </div>

          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 overflow-hidden rounded-2xl border border-outline-variant/40 bg-white/[0.82] text-center backdrop-blur-sm">
            <div className="border-r border-outline-variant/35 px-3 py-2">
              <p className="text-lg font-black text-primary font-display">33</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">States</p>
            </div>
            <div className="border-r border-outline-variant/35 px-3 py-2">
              <p className="text-lg font-black text-secondary font-display">85</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Problems</p>
            </div>
            <div className="px-3 py-2">
              <p className="text-lg font-black text-tertiary font-display">6</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Products</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white/[0.76]">
          <div className={`border-b p-4 ${selectedTone.line}`}>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${selectedTone.icon}`}>
                  <Icon name={selectedProduct.icon} size={22} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-on-surface-variant">Active product layer</p>
                  <p className="font-display text-xl font-black text-on-surface">{selectedProduct.name}</p>
                </div>
              </div>
              <div className="rounded-xl border border-outline-variant/35 bg-surface/70 px-3 py-2 text-right">
                <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Signal</p>
                <p className="text-sm font-black text-primary">{activeState.name}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{selectedProduct.role}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 p-4">
            {productNodes.map((product, index) => {
              const active = index === activeProduct;
              const tone = toneClasses[product.tone];

              return (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => setActiveProduct(index)}
                  className={`min-h-[92px] rounded-2xl border p-3 text-left transition-all ${active ? `${tone.card} shadow-sm` : 'border-outline-variant/35 bg-surface/[0.55] hover:border-primary/25'}`}
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl ${active ? tone.icon : 'bg-surface-container-high text-on-surface-variant'}`}>
                      <Icon name={product.icon} size={17} />
                    </span>
                    <span className={`h-2 w-2 rounded-full ${active ? tone.dot : 'bg-outline-variant'}`} />
                  </div>
                  <p className="font-display text-sm font-black text-on-surface">{product.name}</p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{product.short}</span>
                    <span className="text-[10px] font-black text-primary">{product.metric}</span>
                  </div>
                  <p className="mt-1 text-[10px] font-semibold text-on-surface-variant">{productStatus(index, activeProduct)}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-auto border-t border-outline-variant/45 bg-[#fbfaf4] p-4">
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-outline-variant/40 bg-white/75">
              {[
                ['manage_search', 'Reads policy'],
                ['hub', 'Routes to product'],
                ['task_alt', 'Closes workflow'],
              ].map(([icon, label], index) => (
                <div key={label} className={`px-3 py-3 text-center ${index < 2 ? 'border-r border-outline-variant/35' : ''}`}>
                  <Icon name={icon} size={18} className="mx-auto mb-1 text-primary" />
                  <p className="text-[10px] font-black uppercase tracking-wider text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
