'use client';

import { useRef, useState, useEffect } from 'react';

export function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Default to target so SSR and non-JS fallback always show the real value, never 0
  const [count, setCount] = useState(target);
  const hasAnimated = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const duration = 2000;
        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Cubic ease-out
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(eased * target);
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        setCount(0);
        rafRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  const display = count % 1 === 0 ? Math.floor(count) : count.toFixed(1);
  return (
    <span ref={ref}>{prefix}{display}{suffix}</span>
  );
}
