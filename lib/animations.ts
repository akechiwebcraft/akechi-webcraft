"use client";

import { useEffect, useState, useRef } from "react";

// ─── Easing Constants ────────────────────────────────
export const EASE_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ─── Hooks ───────────────────────────────────────────

/** Hook to respect prefers-reduced-motion */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/**
 * Count-up counter, as a progressive enhancement.
 *
 * The value starts at `to` so the real number is in the server HTML and stays
 * correct if JavaScript is slow, blocked, or the observer never fires — the
 * previous version started at 0 and showed "0+" in every one of those cases.
 * We only rewind to 0 for elements the visitor has not reached yet, so nothing
 * ever flashes backwards on screen.
 */
export function useCounterAnimation(
  to: number,
  duration: number = 2000
): [React.RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(to);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || doneRef.current) return;

    // Counting up is decorative motion — honour the preference and stand still.
    if (reducedMotion) return;

    let frame = 0;
    let armed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (doneRef.current) return;

        if (!entry.isIntersecting) {
          // Off screen: safe to rewind and wait for the visitor to scroll in.
          armed = true;
          setCount(0);
          return;
        }

        doneRef.current = true;
        observer.disconnect();

        // Already on screen at mount — keep the final value, skip the animation.
        if (!armed) return;

        const startTime = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // Quadratic ease-out
          const eased = 1 - (1 - progress) * (1 - progress);
          setCount(Math.floor(eased * to));
          if (progress < 1) {
            frame = requestAnimationFrame(step);
          } else {
            setCount(to);
          }
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration, reducedMotion]);

  return [ref, count];
}

/** Format number with commas */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-IN").format(n);
}
