'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Icon } from '@/components/Icon';

/* =================================================================
   CHALLENGE DATA
   ================================================================= */

const STEP_LABELS = ['Regulatory', 'DISCOM', 'Infrastructure', 'Grid', 'Revenue'];

const CHALLENGE_WINDOWS = [
  [8, 13],
  [16, 21],
  [23, 28],
  [30, 35],
  [36, 41],
] as const;

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
    <div className="relative h-screen overflow-hidden bg-black">

      {/* ═══════════ VIDEO — scaled up to push watermark outside viewport ═══════════ */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster="/images/journey-poster.jpg"
        style={{ transform: 'scale(1.08)', transformOrigin: 'center center' }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/videos/ev-journey-bg.mp4" type="video/mp4" />
      </video>

      {/* ═══════════ CINEMATIC OVERLAY SYSTEM ═══════════ */}

      {/* Top vignette — keeps nav area dark */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }}
      />

      {/* Bottom vignette — darkens progress bar area */}
      <div
        className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)' }}
      />

      {/* Corner vignette — natural cinematic darkening of bottom-right
          This elegantly covers the watermark area without any visible hard edge */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.90) 10%, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0.25) 32%, transparent 48%)',
        }}
      />

      {/* Left vignette — subtle depth */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 25%)' }}
      />

      {/* ═══════════ GO4GARAGE BRAND BADGE ═══════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 8 }}
        animate={{ opacity: started ? 1 : 0, scale: started ? 1 : 0.8, y: started ? 0 : 8 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute z-30 flex items-center gap-2.5 pointer-events-none"
        style={{ bottom: 28, right: 24 }}
      >
        <div
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-white/15"
          style={{ background: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(16px)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="Go4Garage" style={{ width: 22, height: 22, objectFit: 'contain' }} />
          <div>
            <div className="text-[11px] font-bold text-white font-display leading-none">Go4Garage</div>
            <div className="text-[9px] text-white/45 leading-none mt-0.5 tracking-wide">AI · EV · India</div>
          </div>
          <div className="w-px h-6 bg-white/15" />
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
            <span className="text-[9px] text-tertiary/90 font-semibold">LIVE</span>
          </div>
        </div>
      </motion.div>

      {/* ═══════════ CONTENT OVERLAY ═══════════ */}
      <div className="relative z-20 flex flex-col h-screen">

        {/* ── Top: journey label + active challenge pill ── */}
        <div className="pt-20 pb-2 px-6 md:px-10 space-y-3">

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: started ? 1 : 0, y: started ? 0 : -12 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-tertiary"
            />
            <span
              className="text-[11px] font-bold text-white tracking-[0.18em] uppercase font-display"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}
            >
              The EV Charging Journey
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeIdx >= 0 && !showArrived && (
              <motion.div
                key={`challenge-${activeIdx}`}
                initial={{ opacity: 0, x: -16, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-red-400/40 backdrop-blur-md w-fit"
                style={{ background: 'rgba(200,30,30,0.22)' }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Icon name="warning" size={14} className="text-red-300" />
                </motion.div>
                <span
                  className="text-[11px] font-bold text-red-100 tracking-wider uppercase"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                >
                  Challenge {activeIdx + 1} · {STEP_LABELS[activeIdx]}
                </span>
              </motion.div>
            )}

            {showArrived && (
              <motion.div
                key="resolved"
                initial={{ opacity: 0, x: -16, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-tertiary/40 backdrop-blur-md w-fit"
                style={{ background: 'rgba(0,110,47,0.22)' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                >
                  <Icon name="check_circle" size={14} className="text-tertiary" />
                </motion.div>
                <span
                  className="text-[11px] font-bold text-white tracking-wider uppercase"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                >
                  All 5 Challenges Resolved
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1" />

        {/* ── Bottom: journey steps + progress ── */}
        <div className="px-6 md:px-10 pb-8 md:pb-10" style={{ paddingRight: 'clamp(24px, 5vw, 220px)' }}>

          {/* Step indicators */}
          <div className="flex items-end flex-wrap gap-x-1 gap-y-2 mb-5">
            {STEP_LABELS.map((label, i) => {
              const done = time >= CHALLENGE_WINDOWS[i][1];
              const active = activeIdx === i;
              const upcoming = !done && !active;
              return (
                <div key={i} className="flex items-center gap-1.5">
                  <motion.div
                    animate={active ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div
                      className={`
                        rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500
                        ${done ? 'w-6 h-6 shadow-lg' : active ? 'w-6 h-6 shadow-lg shadow-white/30' : 'w-4.5 h-4.5'}
                      `}
                      style={{
                        background: done
                          ? 'var(--color-tertiary)'
                          : active
                          ? 'rgba(255,255,255,0.95)'
                          : 'rgba(255,255,255,0.25)',
                        border: upcoming ? '1.5px solid rgba(255,255,255,0.5)' : 'none',
                      }}
                    >
                      {done && <Icon name="check" size={12} className="text-white" />}
                      {active && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2.5 h-2.5 rounded-full bg-primary"
                        />
                      )}
                    </div>

                    <div className="flex items-center gap-0.5">
                      <span
                        className={`text-[9px] font-bold tracking-widest uppercase transition-all duration-500 ${
                          done ? 'text-tertiary' : active ? 'text-white' : 'text-white/55'
                        }`}
                        style={{ textShadow: '0 1px 6px rgba(0,0,0,1)' }}
                      >
                        {label}
                      </span>
                    </div>
                  </motion.div>

                  {i < 4 && (
                    <div className="mb-4 mx-0.5">
                      <div
                        className={`w-5 md:w-8 h-[2px] rounded-full transition-all duration-700 ${
                          done ? 'bg-tertiary/80' : 'bg-white/20'
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress bar — wider and more polished */}
          <div className="max-w-xs">
            <div className="flex justify-between items-center mb-1.5">
              <span
                className="text-[10px] font-semibold text-white/80"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,1)' }}
              >
                {completedCount} of 5 resolved
              </span>
              <span
                className="text-[10px] font-semibold text-white/80 tabular-nums"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,1)' }}
              >
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-[6px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.18)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #904d00 0%, #f18a22 40%, #7b41b3 75%, #22bc5a 100%)' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Arrived celebration overlay ── */}
      <AnimatePresence>
        {showArrived && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute inset-0 z-25 flex items-center justify-center"
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
                Every regulatory and operational challenge — resolved by Go4Garage in real-time.
              </p>

              {/* Stats row */}
              <div className="flex justify-center gap-6 mb-2">
                {[
                  { v: '5', l: 'Challenges' },
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
