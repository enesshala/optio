"use client";

import BootcampRobot from "@/components/bootcamp/BootcampRobot";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";

const PARK = {
  startRight: 0.62,
  left: 0.08,
  endRight: 0.72,
} as const;

type Park = (typeof PARK)[keyof typeof PARK];

/**
 * Weaves left/right on scroll — once a crossing starts, springs all the way
 * to the destination even if scrolling stops mid-way.
 */
export default function BootcampRobotGuide({
  trackRef,
  spawnLabel,
}: {
  trackRef: RefObject<HTMLElement | null>;
  spawnLabel: string;
}) {
  const [active, setActive] = useState(false);
  const facingRef = useRef(-1);
  const walkIntentRef = useRef(false);
  const committedRef = useRef<Park>(PARK.startRight);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setActive(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const park = useMotionValue<number>(PARK.startRight);
  const side = useSpring(park, {
    stiffness: 22,
    damping: 28,
    mass: 1.8,
    restDelta: 0.001,
  });

  const left = useTransform(side, (s) => {
    if (typeof window === "undefined") return 0;
    const widthPx = Math.min(448, window.innerWidth * 0.42);
    const margin = 12;
    const maxLeft = Math.max(margin, window.innerWidth - widthPx - margin);
    return margin + s * (maxLeft - margin);
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9, 0.98], [1, 1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const current = committedRef.current;
    let next: Park = current;

    // Hysteresis: commit full destination parks, never a mid-cross scroll blend
    if (current === PARK.startRight && p >= 0.34) next = PARK.left;
    else if (current === PARK.left && p >= 0.78) next = PARK.endRight;
    else if (current === PARK.endRight && p < 0.74) next = PARK.left;
    else if (current === PARK.left && p < 0.3) next = PARK.startRight;

    if (next !== current) {
      committedRef.current = next;
      park.set(next);
    }
  });

  useMotionValueEvent(side, "change", (value) => {
    facingRef.current = value > 0.5 ? -1 : 1;
    walkIntentRef.current =
      Math.abs(value - committedRef.current) > 0.03;
  });

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-24 z-[4] hidden h-[min(72vh,40rem)] w-[min(28rem,42vw)] lg:block"
      style={{ left, opacity }}
    >
      <BootcampRobot
        spawnLabel={spawnLabel}
        facingRef={facingRef}
        walkIntentRef={walkIntentRef}
      />
    </motion.div>
  );
}
