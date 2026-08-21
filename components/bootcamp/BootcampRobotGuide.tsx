"use client";

import BootcampRobot from "@/components/bootcamp/BootcampRobot";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Fixed companion that weaves left/right while scrolling,
 * and tracks the cursor anywhere on the page.
 */
export default function BootcampRobotGuide({
  trackRef,
  spawnLabel,
}: {
  trackRef: RefObject<HTMLElement | null>;
  spawnLabel: string;
}) {
  const [active, setActive] = useState(false);
  // -1 = look left (toward content when parked on the right)
  const facingRef = useRef(-1);

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

  // Few crossings, long holds — start center-right
  const sideTarget = useTransform(
    scrollYProgress,
    [0, 0.28, 0.4, 0.72, 0.84, 1],
    [0.62, 0.62, 0.08, 0.08, 0.72, 0.72]
  );

  const side = useSpring(sideTarget, {
    stiffness: 28,
    damping: 32,
    mass: 1.6,
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

  useMotionValueEvent(side, "change", (value) => {
    // Face page center: right → look left, left → look right
    facingRef.current = value > 0.5 ? -1 : 1;
  });

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-24 z-[4] hidden h-[min(72vh,40rem)] w-[min(28rem,42vw)] lg:block"
      style={{ left, opacity }}
    >
      <BootcampRobot spawnLabel={spawnLabel} facingRef={facingRef} />
    </motion.div>
  );
}
