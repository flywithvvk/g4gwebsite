'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Icon } from '@/components/Icon';

/* =================================================================
   CHALLENGE DATA
   ================================================================= */

// 8 real challenge layers from Go4Garage's 95-problem matrix
const STEP_LABELS = [
  'Regulatory',   // L8: 15 problems
  'DISCOM',        // L7: grid & energy
  'Site Setup',    // L1: supply chain
  'Financing',     // L3: economics
  'Operations',    // L4: after-sales
  'Consumers',     // L2: adoption
  'Workforce',     // L5: skilled talent
  'Battery',       // L6: lifecycle & safety
];

const STEP_SUBTITLES = [
  '33 states · DISCOM approvals',
  'Grid connection · load forecasting',
  'Location scoring · infrastructure',
  'EV loans · battery valuation',
  'Workshop · job card · GST billing',
  'Adoption barriers · charging access',
  'Technician training · certification',
  'SoH scoring · lifecycle management',
];

const STEP_ICONS = [
  'gavel', 'electrical_services', 'location_on',
  'account_balance', 'build', 'people', 'school', 'battery_full',
];

// Evenly distributed across 8–41 s (33 s total ÷ 8 = ~4 s each)
const CHALLENGE_WINDOWS = [
  [7,  12],   // Regulatory
  [12, 17],   // DISCOM
  [17, 21],   // Site Setup
  [21, 26],   // Financing
  [26, 30],   // Operations
  [30, 34],   // Consumers
  [34, 37],   // Workforce
  [37, 41],   // Battery
] as const;

// Floating card positions: left column (0-3) + RIGHT column (4-7, no overlap on any screen)
const CHALLENGE_FLOAT_POSITIONS: React.CSSProperties[] = [
  { top: '8%',  left: '3%'  },
  { top: '24%', left: '3%'  },
  { top: '40%', left: '3%'  },
  { top: '56%', left: '3%'  },
  { top: '8%',  right: '3%' },
  { top: '24%', right: '3%' },
  { top: '40%', right: '3%' },
  { top: '56%', right: '3%' },
];

const ARRIVED_TIME = 41;
const VIDEO_DURATION = 47;

/* =================================================================
   COMPONENT
   ================================================================= */

interface Props {
  onComplete?: () => void;
}

export function EVJourneyVisual({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let disposed = false;

    const startTimer = setTimeout(() => {
      if (disposed) return;
      video.play().catch(() => {});
      setStarted(true);
    }, 600);

    const tick = () => {
      if (disposed) return;
      if (video.currentTime) setTime(video.currentTime);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const handleEnded = () => {
      if (disposed) return;
      setTime(VIDEO_DURATION);
      setTimeout(() => onCompleteRef.current?.(), 6000);
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      disposed = true;
      clearTimeout(startTimer);
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const activeIdx = CHALLENGE_WINDOWS.findIndex(([s, e]) => time >= s && time < e);
  const completedCount = CHALLENGE_WINDOWS.filter(([, e]) => time >= e).length;
  const progress = Math.min(100, (time / VIDEO_DURATION) * 100);
  const showArrived = time >= ARRIVED_TIME;

  return (
    <div className="relative h-full overflow-hidden bg-black">

      {/* ═══════════ VIDEO: GPU-accelerated, no scale blur ═══════════ */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="none"
        poster="/images/journey-poster.jpg"
        style={{
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform',
          filter: 'contrast(1.08) saturate(1.15) brightness(1.04)',
        }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        {/* WebM VP9: best quality/size for Chrome/Firefox/Edge */}
        <source src="/videos/ev-journey-bg.webm" type="video/webm" />
        {/* MP4 H.264: faststart-optimised fallback for Safari */}
        <source src="/videos/ev-journey-bg.mp4" type="video/mp4" />
      </video>

      {/* ═══════════ MINIMAL OVERLAYS: readability only, no dark shadows ═══════════ */}

      {/* Very light top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%)' }}
      />

      {/* Subtle left vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.08) 0%, transparent 22%)' }}
      />

      {/* ═══════════ WATERMARK KILL COVER: hidden on mobile (panel is full-width there) ═══════════ */}
      <div
        className="absolute bottom-0 right-0 z-[28] pointer-events-none hidden sm:block"
        style={{
          width: 260,
          height: 150,
          background: 'rgba(0,0,0,0.95)',
          borderRadius: '10px 0 0 0',
        }}
      />

      {/* ═══════════ FLOATING CHALLENGE CARDS: all 8 visible on video ═══════════ */}
      <AnimatePresence>
        {started && !showArrived && activeIdx >= 0 && (
          <motion.div
            key={`float-${activeIdx}`}
            initial={{ opacity: 0, x: activeIdx >= 4 ? 20 : -20, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: activeIdx >= 4 ? 12 : -12, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute z-[20] pointer-events-none"
            style={CHALLENGE_FLOAT_POSITIONS[activeIdx]}
          >
            <div
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
              style={{
                background: 'rgba(0,0,0,0.76)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(239,68,68,0.45)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,68,68,0.1)',
                maxWidth: 'min(200px, 38vw)',
              }}
            >
              {/* Icon badge */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(239,68,68,0.18)', border: '1px solid rgba(239,68,68,0.3)' }}
              >
                <Icon name={STEP_ICONS[activeIdx]} size={15} className="text-red-400" />
              </div>
              {/* Text */}
              <div className="min-w-0">
                <div className="text-[8px] text-red-300/75 uppercase tracking-widest font-bold leading-none mb-1">
                  Challenge {activeIdx + 1} of 8
                </div>
                <div className="text-[12px] font-bold text-white leading-tight truncate">
                  {STEP_LABELS[activeIdx]}
                </div>
                <div className="text-[8px] text-white/45 leading-tight mt-0.5 truncate">
                  {STEP_SUBTITLES[activeIdx]}
                </div>
              </div>
              {/* Pulse dot */}
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 self-start mt-1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════ COMPLETED CHALLENGE BADGES: stay visible after resolved ═══════════ */}
      {started && !showArrived && STEP_LABELS.map((label, i) => {
        const done = time >= CHALLENGE_WINDOWS[i][1];
        const active = activeIdx === i;
        if (!done || active) return null;
        return (
          <motion.div
            key={`done-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute z-[19] pointer-events-none"
            style={CHALLENGE_FLOAT_POSITIONS[i]}
          >
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
              style={{
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(34,188,90,0.4)',
              }}
            >
              <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(34,188,90,0.2)' }}>
                <Icon name="check" size={10} className="text-tertiary" />
              </div>
              <span className="text-[9px] font-bold text-tertiary/90 truncate" style={{ maxWidth: 'min(130px, 26vw)' }}>
                {label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* ═══════════ STAGE UI PANEL: full-width mobile, corner on desktop ═══════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: started ? 1 : 0, y: started ? 0 : 16 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-0 right-0 z-30 pointer-events-none w-full sm:w-auto"
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.88)',
            backdropFilter: 'blur(16px)',
            padding: '10px 14px 12px 14px',
          }}
          className="sm:rounded-tl-[10px] w-full sm:w-[260px]"
        >
          {/* Challenge / resolved status row */}
          <AnimatePresence mode="wait">
            {activeIdx >= 0 && !showArrived && (
              <motion.div
                key={`ch-${activeIdx}`}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1.5 mb-2.5"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Icon name="warning" size={11} className="text-red-400" />
                </motion.div>
                <span className="text-[10px] font-bold text-red-200 uppercase tracking-wider">
                  Challenge {activeIdx + 1} · {STEP_LABELS[activeIdx]}
                </span>
              </motion.div>
            )}
            {showArrived && (
              <motion.div
                key="arrived-pill"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-1.5 mb-2.5"
              >
                <Icon name="check_circle" size={11} className="text-tertiary" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  All 8 Challenges Resolved
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step grid: 2 rows x 4 = all 8 visible */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-1.5 gap-y-1 mb-2.5">
            {STEP_LABELS.map((label, i) => {
              const done = time >= CHALLENGE_WINDOWS[i][1];
              const active = activeIdx === i;
              return (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
                    style={{
                      background: done
                        ? 'var(--color-tertiary)'
                        : active
                        ? 'rgba(255,255,255,0.9)'
                        : 'rgba(255,255,255,0.18)',
                      border: !done && !active ? '1px solid rgba(255,255,255,0.35)' : 'none',
                      boxShadow: active ? '0 0 6px rgba(255,255,255,0.5)' : 'none',
                    }}
                  >
                    {done && <Icon name="check" size={8} className="text-white" />}
                    {active && (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                    )}
                  </div>
                  <span
                    className={`text-[7px] font-bold uppercase tracking-wide transition-all duration-500 text-center leading-tight ${
                      done ? 'text-tertiary' : active ? 'text-white' : 'text-white/35'
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Thin progress bar */}
          <div
            className="h-[3px] rounded-full overflow-hidden mb-2.5"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #904d00 0%, #f18a22 40%, #7b41b3 75%, #22bc5a 100%)',
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.25, ease: 'linear' }}
            />
          </div>

          {/* Brand row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.png" alt="Go4Garage" style={{ width: 16, height: 16, objectFit: 'contain' }} />
              <span className="text-[10px] font-bold text-white">Go4Garage</span>
              <span className="text-[8px] text-white/35">AI · EV · India</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              <span className="text-[9px] text-tertiary/90 font-semibold">LIVE</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Arrived celebration overlay ── */}
      <AnimatePresence>
        {showArrived && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute inset-0 z-[25] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(2px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
              className="text-center max-w-sm mx-4 px-8 py-8 rounded-3xl border"
              style={{
                background: 'rgba(4,20,10,0.82)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(34,188,90,0.35)',
                boxShadow: '0 0 80px rgba(34,188,90,0.12), 0 24px 64px rgba(0,0,0,0.6)',
              }}
            >
              {/* Icon */}
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                style={{ background: 'rgba(34,188,90,0.18)', border: '1px solid rgba(34,188,90,0.3)' }}
              >
                <Icon name="electric_bolt" size={36} className="text-tertiary" />
              </motion.div>

              <h4
                className="text-2xl md:text-3xl font-bold text-white font-display mb-2 leading-tight"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
              >
                Energy Delivered
              </h4>
              <p
                className="text-sm text-white/60 mb-6 leading-relaxed"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
              >
                Every regulatory and operational challenge, resolved by Go4Garage in real-time.
              </p>

              {/* Stats row */}
              <div className="flex justify-center gap-6 mb-2">
                {[
                  { v: '95', l: 'Problems' },
                  { v: '33', l: 'States' },
                  { v: '89%', l: 'Faster' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.15 }}
                    className="text-center"
                  >
                    <div className="text-xl font-black text-tertiary font-display leading-none">{s.v}</div>
                    <div
                      className="text-[9px] text-white/50 uppercase tracking-widest mt-1"
                      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
                    >
                      {s.l}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
