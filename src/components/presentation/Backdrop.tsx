import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Backdrop() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const glowX = useTransform(smoothX, (v) => `${50 + v * 8}%`);
  const glowY = useTransform(smoothY, (v) => `${50 + v * 8}%`);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Medical neon glow following the pointer */}
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, var(--medical-neon-glow), transparent 34%)`,
        }}
      />

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

      {/* Floating interactive particles */}
      {Array.from({ length: 34 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60 shadow-glow"
          style={{ left: `${(i * 7 + 5) % 100}%`, top: `${(i * 13 + 10) % 100}%` }}
          animate={{
            x: [0, (i % 2 ? 18 : -18), 0],
            y: [0, -34 - (i % 5) * 4, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 4 + (i % 6), repeat: Infinity, delay: i * 0.16, ease: "easeInOut" }}
        />
      ))}

      {/* Continuous ECG monitor line */}
      <div className="absolute top-[48%] left-0 w-[200%] opacity-[0.12] overflow-hidden">
        <motion.svg
          className="w-full h-28 text-primary"
          viewBox="0 0 2400 100"
          preserveAspectRatio="none"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1200].map((offset) => (
            <polyline
              key={offset}
              points={`${offset},50 ${offset + 180},50 ${offset + 205},20 ${offset + 230},82 ${offset + 255},50 ${offset + 470},50 ${offset + 495},32 ${offset + 520},68 ${offset + 545},50 ${offset + 760},50 ${offset + 785},14 ${offset + 812},88 ${offset + 840},50 ${offset + 1200},50`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          ))}
        </motion.svg>
      </div>
    </div>
  );
}
