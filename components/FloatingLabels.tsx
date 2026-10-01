"use client";

import { motion, useReducedMotion } from "motion/react";

const labels = [
  { text: "Data analyst", position: "-left-3 -top-5 sm:-left-8", color: "text-cream", tint: "151, 180, 195", delay: 0, duration: 6.4, direction: 1 },
  { text: "Quality Management", position: "-right-3 top-4 sm:-right-8", color: "text-cream", tint: "151, 180, 195", delay: 0.2, duration: 7.2, direction: -1 },
  { text: "Supply chain Management", position: "-right-3 bottom-6 sm:-right-8", color: "text-cream", tint: "241, 233, 218", delay: 0.4, duration: 8, direction: 1 },
];

export default function FloatingLabels({ entered }: { entered: boolean }) {
  const reducedMotion = useReducedMotion();
  const floating = entered && !reducedMotion;

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {labels.map((label) => (
        <motion.div
          key={label.text}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : 12 }}
          transition={{ delay: entered && !reducedMotion ? 1.25 + label.delay : 0, duration: reducedMotion ? 0 : 0.6 }}
          className={`absolute ${label.position}`}
        >
          <motion.span
            animate={{
              x: floating ? [0, 5 * label.direction, -3 * label.direction, 0] : 0,
              y: floating ? [0, -5, 3, 0] : 0,
              rotate: floating ? [0, 0.8 * label.direction, -0.6 * label.direction, 0] : 0,
            }}
            transition={{ duration: label.duration, repeat: Infinity, ease: "easeInOut", delay: 1.85 + label.delay }}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.12), rgba(${label.tint},0.045) 45%, rgba(20,41,69,0.45))`,
              borderColor: `rgba(${label.tint},0.32)`,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.22), inset 0 0 12px rgba(${label.tint},0.06), 0 0 14px rgba(${label.tint},0.12), 0 8px 24px rgba(0,0,0,0.22)`,
            }}
            className={`relative block whitespace-nowrap rounded-2xl border px-4 py-3 text-[10px] font-medium tracking-[0.08em] backdrop-blur-2xl backdrop-saturate-150 sm:text-xs ${label.color}`}
          >
            {label.text}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}