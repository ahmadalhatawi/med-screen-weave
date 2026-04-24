import { motion } from "framer-motion";

export default function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Aurora orb - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Cyan orb - bottom left */}
      <motion.div
        className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-cyan), transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{ left: `${(i * 7 + 5) % 100}%`, top: `${(i * 13 + 10) % 100}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}

      {/* ECG line */}
      <svg className="absolute top-1/2 left-0 w-full opacity-[0.06]" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <motion.polyline
          points="0,50 200,50 220,20 240,80 260,50 500,50 520,30 540,70 560,50 800,50 820,15 840,85 860,50 1200,50"
          fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
