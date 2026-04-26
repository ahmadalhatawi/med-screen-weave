import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ZoomIn, ZoomOut, X, Maximize2, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, className }: Props) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const reset = useCallback(() => { setScale(1); setPos({ x: 0, y: 0 }); }, []);
  const zoomIn = useCallback(() => setScale((s) => Math.min(s + 0.5, 6)), []);
  const zoomOut = useCallback(() => setScale((s) => Math.max(s - 0.5, 1)), []);
  const pan = useCallback((x: number, y: number) => setPos((p) => ({ x: p.x + x, y: p.y + y })), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-") zoomOut();
      else if (e.key === "0") reset();
      e.stopPropagation();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open, zoomIn, zoomOut, reset]);

  useEffect(() => { if (open) reset(); }, [open, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale((s) => Math.max(1, Math.min(6, s + delta)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setPos((p) => ({
      x: p.x + (e.clientX - last.current.x),
      y: p.y + (e.clientY - last.current.y),
    }));
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative w-full h-full cursor-zoom-in ${className ?? ""}`}
        aria-label="تكبير الصورة"
      >
        <img src={src} alt={alt} className="w-full h-full object-contain" />
        <span className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-3.5 h-3.5" /> تكبير
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            {/* Toolbar */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 glass-strong rounded-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={zoomOut} className="w-10 h-10 rounded-xl hover:bg-primary/20 flex items-center justify-center text-white transition" title="تصغير (-)">
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-3 text-sm font-mono text-white tabular-nums min-w-[60px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <button onClick={zoomIn} className="w-10 h-10 rounded-xl hover:bg-primary/20 flex items-center justify-center text-white transition" title="تكبير (+)">
                <ZoomIn className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-white/20 mx-1" />
              <button onClick={() => pan(0, 60)} className="w-10 h-10 rounded-xl hover:bg-primary/20 flex items-center justify-center text-white transition" title="أعلى">
                <ArrowUp className="w-4 h-4" />
              </button>
              <button onClick={() => pan(0, -60)} className="w-10 h-10 rounded-xl hover:bg-primary/20 flex items-center justify-center text-white transition" title="أسفل">
                <ArrowDown className="w-4 h-4" />
              </button>
              <button onClick={() => pan(-60, 0)} className="w-10 h-10 rounded-xl hover:bg-primary/20 flex items-center justify-center text-white transition" title="يمين">
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => pan(60, 0)} className="w-10 h-10 rounded-xl hover:bg-primary/20 flex items-center justify-center text-white transition" title="يسار">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-white/20 mx-1" />
              <button onClick={reset} className="w-10 h-10 rounded-xl hover:bg-primary/20 flex items-center justify-center text-white transition" title="إعادة (0)">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-xl hover:bg-red-500/30 flex items-center justify-center text-white transition" title="إغلاق (Esc)">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs flex items-center gap-2 glass rounded-full px-4 py-2">
              <Maximize2 className="w-3 h-3" />
              مرّر بالعجلة أو استخدم الأزرار · اسحب لتحريك الصورة
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative w-full h-full flex items-center justify-center overflow-hidden p-12"
              onClick={(e) => e.stopPropagation()}
              onWheel={onWheel}
            >
              <img
                src={src}
                alt={alt}
                draggable={false}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onDoubleClick={() => (scale === 1 ? setScale(2) : reset())}
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                  cursor: scale > 1 ? (dragging.current ? "grabbing" : "grab") : "zoom-in",
                  transition: dragging.current ? "none" : "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                  touchAction: "none",
                }}
                className="max-w-full max-h-full object-contain select-none drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
