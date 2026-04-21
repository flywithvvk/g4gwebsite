'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypewriterText({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className = '',
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const current = texts[textIndex];

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeoutRef.current = setTimeout(
        () => {
          setDisplayed(
            isDeleting
              ? current.substring(0, displayed.length - 1)
              : current.substring(0, displayed.length + 1)
          );
        },
        isDeleting ? deleteSpeed : speed
      );
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}
