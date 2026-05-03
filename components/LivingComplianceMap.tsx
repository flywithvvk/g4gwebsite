'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
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
  backdrop: string;
  signal: string;
  focus: string;
  lon: number;
  lat: number;
}

const INDIA_OUTLINE: Array<[number, number]> = [
  [77.837451, 35.49401],
  [78.912269, 34.321936],
  [78.811086, 33.506198],
  [79.208892, 32.994395],
  [79.176129, 32.48378],
  [78.458446, 32.618164],
  [78.738894, 31.515906],
  [79.721367, 30.882715],
  [81.111256, 30.183481],
  [80.476721, 29.729865],
  [80.088425, 28.79447],
  [81.057203, 28.416095],
  [81.999987, 27.925479],
  [83.304249, 27.364506],
  [84.675018, 27.234901],
  [85.251779, 26.726198],
  [86.024393, 26.630985],
  [87.227472, 26.397898],
  [88.060238, 26.414615],
  [88.174804, 26.810405],
  [88.043133, 27.445819],
  [88.120441, 27.876542],
  [88.730326, 28.086865],
  [88.814248, 27.299316],
  [88.835643, 27.098966],
  [89.744528, 26.719403],
  [90.373275, 26.875724],
  [91.217513, 26.808648],
  [92.033484, 26.83831],
  [92.103712, 27.452614],
  [91.696657, 27.771742],
  [92.503119, 27.896876],
  [93.413348, 28.640629],
  [94.56599, 29.277438],
  [95.404802, 29.031717],
  [96.117679, 29.452802],
  [96.586591, 28.83098],
  [96.248833, 28.411031],
  [97.327114, 28.261583],
  [97.402561, 27.882536],
  [97.051989, 27.699059],
  [97.133999, 27.083774],
  [96.419366, 27.264589],
  [95.124768, 26.573572],
  [95.155153, 26.001307],
  [94.603249, 25.162495],
  [94.552658, 24.675238],
  [94.106742, 23.850741],
  [93.325188, 24.078556],
  [93.286327, 23.043658],
  [93.060294, 22.703111],
  [93.166128, 22.27846],
  [92.672721, 22.041239],
  [92.146035, 23.627499],
  [91.869928, 23.624346],
  [91.706475, 22.985264],
  [91.158963, 23.503527],
  [91.46773, 24.072639],
  [91.915093, 24.130414],
  [92.376202, 24.976693],
  [91.799596, 25.147432],
  [90.872211, 25.132601],
  [89.920693, 25.26975],
  [89.832481, 25.965082],
  [89.355094, 26.014407],
  [88.563049, 26.446526],
  [88.209789, 25.768066],
  [88.931554, 25.238692],
  [88.306373, 24.866079],
  [88.084422, 24.501657],
  [88.69994, 24.233715],
  [88.52977, 23.631142],
  [88.876312, 22.879146],
  [89.031961, 22.055708],
  [88.888766, 21.690588],
  [88.208497, 21.703172],
  [86.975704, 21.495562],
  [87.033169, 20.743308],
  [86.499351, 20.151638],
  [85.060266, 19.478579],
  [83.941006, 18.30201],
  [83.189217, 17.671221],
  [82.192792, 17.016636],
  [82.191242, 16.556664],
  [81.692719, 16.310219],
  [80.791999, 15.951972],
  [80.324896, 15.899185],
  [80.025069, 15.136415],
  [80.233274, 13.835771],
  [80.286294, 13.006261],
  [79.862547, 12.056215],
  [79.857999, 10.357275],
  [79.340512, 10.308854],
  [78.885345, 9.546136],
  [79.18972, 9.216544],
  [78.277941, 8.933047],
  [77.941165, 8.252959],
  [77.539898, 7.965535],
  [76.592979, 8.899276],
  [76.130061, 10.29963],
  [75.746467, 11.308251],
  [75.396101, 11.781245],
  [74.864816, 12.741936],
  [74.616717, 13.992583],
  [74.443859, 14.617222],
  [73.534199, 15.990652],
  [73.119909, 17.92857],
  [72.820909, 19.208234],
  [72.824475, 20.419503],
  [72.630533, 21.356009],
  [71.175273, 20.757441],
  [70.470459, 20.877331],
  [69.16413, 22.089298],
  [69.644928, 22.450775],
  [69.349597, 22.84318],
  [68.176645, 23.691965],
  [68.842599, 24.359134],
  [71.04324, 24.356524],
  [70.844699, 25.215102],
  [70.282873, 25.722229],
  [70.168927, 26.491872],
  [69.514393, 26.940966],
  [70.616496, 27.989196],
  [71.777666, 27.91318],
  [72.823752, 28.961592],
  [73.450638, 29.976413],
  [74.42138, 30.979815],
  [74.405929, 31.692639],
  [75.258642, 32.271105],
  [74.451559, 32.7649],
  [74.104294, 33.441473],
  [73.749948, 34.317699],
  [74.240203, 34.748887],
  [75.757061, 34.504923],
  [76.871722, 34.653544],
  [77.837451, 35.49401],
];

const productNodes: ProductNode[] = [
  {
    name: 'URGAA',
    short: 'Regulatory Intelligence',
    role: 'Policy engine for state EV norms, DISCOM approvals, and compliance orchestration.',
    metric: '33 states mapped',
    icon: 'gavel',
    tone: 'primary',
    backdrop: '/images/power-grid.jpg',
    signal: 'Policy Alert',
    focus: 'Delhi NCR',
    lon: 77.209,
    lat: 28.6139,
  },
  {
    name: 'GST',
    short: 'Workshop Operations',
    role: 'Runs job cards, spares, service billing, and workshop process control for scale.',
    metric: '17 workflow tracks',
    icon: 'build',
    tone: 'secondary',
    backdrop: '/images/charging-station.jpg',
    signal: 'Ops Throughput',
    focus: 'Mumbai',
    lon: 72.8777,
    lat: 19.076,
  },
  {
    name: 'Ignition',
    short: 'Consumer Journey App',
    role: 'Manages consumer charging, service bookings, ownership insights, and retention journeys.',
    metric: '10 consumer journeys',
    icon: 'smartphone',
    tone: 'tertiary',
    backdrop: '/images/ev-on-road.jpg',
    signal: 'Journey Health',
    focus: 'Bengaluru',
    lon: 77.5946,
    lat: 12.9716,
  },
  {
    name: 'EV VIDYA',
    short: 'Skilling Platform',
    role: 'Upskills EV technicians through curated modules, assessments, and certification tracks.',
    metric: '8 skilling tracks',
    icon: 'school',
    tone: 'blue',
    backdrop: '/images/road-highway.jpg',
    signal: 'Skill Readiness',
    focus: 'Hyderabad',
    lon: 78.4867,
    lat: 17.385,
  },
  {
    name: 'KAILASH-AI',
    short: 'Predictive Analytics',
    role: 'Analyzes fault patterns and operational trends to forecast failures and optimize uptime.',
    metric: '18 AI models',
    icon: 'analytics',
    tone: 'danger',
    backdrop: '/images/ev-charging-close.jpg',
    signal: 'Predictive Risk',
    focus: 'Pune',
    lon: 73.8567,
    lat: 18.5204,
  },
  {
    name: 'Eka-AI',
    short: 'Agent Orchestration',
    role: 'Unifies product workflows with natural-language copilots and cross-stack automation.',
    metric: '1 orchestration brain',
    icon: 'smart_toy',
    tone: 'tertiary',
    backdrop: '/images/journey-poster.jpg',
    signal: 'Agent Pulse',
    focus: 'Kolkata',
    lon: 88.3639,
    lat: 22.5726,
  },
];

const toneClasses: Record<
  ProductTone,
  {
    dot: string;
    chip: string;
    icon: string;
    progress: string;
  }
> = {
  primary: {
    dot: '#904d00',
    chip: 'border-primary/30 bg-primary-container/12 text-primary',
    icon: 'bg-primary text-primary-on',
    progress: 'from-primary to-primary-container',
  },
  secondary: {
    dot: '#7b41b3',
    chip: 'border-secondary/30 bg-secondary-container/12 text-secondary',
    icon: 'bg-secondary text-secondary-on',
    progress: 'from-secondary to-secondary-container',
  },
  tertiary: {
    dot: '#006e2f',
    chip: 'border-tertiary/30 bg-tertiary-container/12 text-tertiary',
    icon: 'bg-tertiary text-tertiary-on',
    progress: 'from-tertiary to-tertiary-container',
  },
  danger: {
    dot: '#dc2626',
    chip: 'border-red-500/30 bg-red-500/10 text-red-700',
    icon: 'bg-red-700 text-white',
    progress: 'from-red-700 to-red-400',
  },
  blue: {
    dot: '#2563eb',
    chip: 'border-blue-500/30 bg-blue-500/10 text-blue-700',
    icon: 'bg-blue-700 text-white',
    progress: 'from-blue-700 to-blue-400',
  },
};

const MAP_WIDTH = 360;
const MAP_HEIGHT = 340;
const MAP_PADDING = 16;

export function LivingComplianceMap() {
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProduct((current) => (current + 1) % productNodes.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const bounds = useMemo(() => {
    const lons = INDIA_OUTLINE.map(([lon]) => lon);
    const lats = INDIA_OUTLINE.map(([, lat]) => lat);
    return {
      minLon: Math.min(...lons),
      maxLon: Math.max(...lons),
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
    };
  }, []);

  const projectPoint = useCallback((lon: number, lat: number) => {
    const lonRange = bounds.maxLon - bounds.minLon;
    const latRange = bounds.maxLat - bounds.minLat;

    const x =
      MAP_PADDING +
      ((lon - bounds.minLon) / lonRange) * (MAP_WIDTH - MAP_PADDING * 2);
    const y =
      MAP_HEIGHT -
      MAP_PADDING -
      ((lat - bounds.minLat) / latRange) * (MAP_HEIGHT - MAP_PADDING * 2);

    return { x, y };
  }, [bounds]);

  const indiaPath = useMemo(() => {
    return (
      INDIA_OUTLINE.map(([lon, lat], index) => {
        const point = projectPoint(lon, lat);
        return `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
      }).join(' ') + ' Z'
    );
  }, [projectPoint]);

  const projectedProducts = useMemo(() => {
    return productNodes.map((product) => ({
      ...product,
      point: projectPoint(product.lon, product.lat),
    }));
  }, [projectPoint]);

  const selectedProduct = productNodes[activeProduct];
  const selectedTone = toneClasses[selectedProduct.tone];
  const progress = ((activeProduct + 1) / productNodes.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.55, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[680px] overflow-hidden rounded-[1.5rem] border border-outline-variant/45 bg-white shadow-[0_24px_60px_-28px_rgba(26,23,20,0.35)]"
    >
      <div className="border-b border-outline-variant/45 bg-surface-bright/92 px-4 py-2.5 backdrop-blur-sm sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-container/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
              <IndiaFlag size={14} /> Real India command view
            </div>
            <h3 className="text-base font-black leading-tight text-on-surface sm:text-lg font-display">
              Product-by-product intelligence across India
            </h3>
          </div>
          <div className="hidden shrink-0 rounded-xl border border-outline-variant/40 bg-white px-3 py-2 text-right sm:block">
            <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Slide</p>
            <p className="font-display text-lg font-black text-primary">
              {activeProduct + 1}/{productNodes.length}
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
        <div className="relative border-b border-outline-variant/45 bg-[linear-gradient(180deg,#fbfdff,#f6f9fc)] p-2.5 sm:p-3 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 opacity-[0.26]" style={{ backgroundImage: 'linear-gradient(rgba(144,77,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(144,77,0,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="relative z-10 h-[280px] w-full"
            aria-label="Real map of India"
            role="img"
          >
            <defs>
              <linearGradient id="indiaRealFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#fffdf5" />
                <stop offset="1" stopColor="#f3ead2" />
              </linearGradient>
              <filter id="indiaGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#904d00" floodOpacity="0.16" />
              </filter>
            </defs>

            <path
              d={indiaPath}
              fill="url(#indiaRealFill)"
              stroke="#8d4c02"
              strokeWidth="2"
              strokeLinejoin="round"
              filter="url(#indiaGlow)"
            />

            <circle cx="312" cy="300" r="4" fill="#8d4c02" opacity="0.55" />
            <circle cx="318" cy="314" r="3.2" fill="#8d4c02" opacity="0.45" />
            <circle cx="120" cy="318" r="2.8" fill="#8d4c02" opacity="0.35" />

            {projectedProducts.map((product, index) => {
              const tone = toneClasses[product.tone];
              const active = index === activeProduct;

              return (
                <g key={product.name}>
                  {active && (
                    <motion.circle
                      cx={product.point.x}
                      cy={product.point.y}
                      r={16}
                      fill="rgba(144,77,0,0.15)"
                      animate={{ scale: [0.7, 1.25, 0.7], opacity: [0.5, 0.15, 0.5] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                  <motion.circle
                    cx={product.point.x}
                    cy={product.point.y}
                    r={active ? 7 : 5.5}
                    fill={tone.dot}
                    stroke="#ffffff"
                    strokeWidth={active ? 2.6 : 2}
                    animate={active ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                    transition={{ duration: 1.3, repeat: active ? Infinity : 0 }}
                  />
                </g>
              );
            })}
          </svg>

          <div className="relative z-10 mt-1.5 grid grid-cols-3 overflow-hidden rounded-xl border border-outline-variant/35 bg-white/85 text-center backdrop-blur-sm">
            <div className="border-r border-outline-variant/30 px-2 py-2">
              <p className="font-display text-base font-black text-primary">33</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">States</p>
            </div>
            <div className="border-r border-outline-variant/30 px-2 py-2">
              <p className="font-display text-base font-black text-secondary">95</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Problems</p>
            </div>
            <div className="px-2 py-2">
              <p className="font-display text-base font-black text-tertiary">6</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">Products</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-surface-bright/70 p-3 sm:p-4">
          <motion.div
            key={selectedProduct.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-outline-variant/35 bg-white"
          >
            <div className="relative h-40 sm:h-44">
              <Image
                src={selectedProduct.backdrop}
                alt={`${selectedProduct.name} background`}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(10,10,10,0.74),rgba(10,10,10,0.22)_58%,rgba(10,10,10,0.08))]" />

              <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-3">
                <div className={`inline-flex items-center gap-2 rounded-xl border px-2.5 py-1 text-xs font-black ${selectedTone.chip}`}>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${selectedTone.icon}`}>
                    <Icon name={selectedProduct.icon} size={16} />
                  </span>
                  {selectedProduct.name}
                </div>
                <div className="rounded-lg border border-white/30 bg-black/35 px-2 py-1 text-right text-white backdrop-blur-sm">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/80">Signal</p>
                  <p className="text-xs font-black">{selectedProduct.signal}</p>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/80">{selectedProduct.short}</p>
                <p className="font-display text-lg font-black leading-tight text-white">{selectedProduct.metric}</p>
              </div>
            </div>

            <div className="space-y-3 p-3 sm:p-4">
              <p className="text-sm leading-relaxed text-on-surface-variant">{selectedProduct.role}</p>
              <div className="flex items-center justify-between gap-2 rounded-xl border border-outline-variant/30 bg-surface-container-low px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Focus Region</p>
                <p className="text-sm font-black text-primary">{selectedProduct.focus}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-3 rounded-xl border border-outline-variant/35 bg-white/85 p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-on-surface-variant">
                Product Scroller
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveProduct((current) =>
                      current === 0 ? productNodes.length - 1 : current - 1,
                    )
                  }
                  className="rounded-lg border border-outline-variant/40 p-1.5 text-on-surface-variant transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Previous product"
                >
                  <Icon name="chevron_left" size={16} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveProduct((current) => (current + 1) % productNodes.length)
                  }
                  className="rounded-lg border border-outline-variant/40 p-1.5 text-on-surface-variant transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Next product"
                >
                  <Icon name="chevron_right" size={16} />
                </button>
              </div>
            </div>

            <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-outline-variant/25">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${selectedTone.progress}`}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {productNodes.map((product, index) => {
                const active = index === activeProduct;
                return (
                  <button
                    key={product.name}
                    type="button"
                    onClick={() => setActiveProduct(index)}
                    className={`rounded-lg border px-2 py-1.5 text-left transition-all ${
                      active
                        ? `${toneClasses[product.tone].chip} shadow-sm`
                        : 'border-outline-variant/35 bg-surface text-on-surface-variant hover:border-primary/35'
                    }`}
                  >
                    <p className="text-[11px] font-black leading-tight">{product.name}</p>
                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide opacity-80">
                      {product.short}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
