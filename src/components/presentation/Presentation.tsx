import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, HeartPulse, Menu, X, Maximize2, Grid3x3, Sun, Moon } from "lucide-react";
import {
  CoverSlide, IntroductionSlide, IdeaSlide, MethodologySlide,
  UseCaseSlide, ERDSlide, InterfacesSlide,
} from "./slides";

const SLIDES = [
  { id: "cover",       title: "الغلاف",             component: CoverSlide },
  { id: "intro",       title: "مقدّمة المشروع",      component: IntroductionSlide },
  { id: "idea",        title: "فكرة المشروع",        component: IdeaSlide },
  { id: "methodology", title: "التقنيات",            component: MethodologySlide },
  { id: "usecase",     title: "Use Case",            component: UseCaseSlide },
  { id: "erd",         title: "Database",            component: ERDSlide },
  { id: "interfaces",  title: "الواجهات",            component: InterfacesSlide },
];

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    scale: 0.95,
    rotateY: dir > 0 ? -8 : 8,
  }),
  center: {
    opacity: 1, x: 0, scale: 1, rotateY: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
    scale: 0.95,
    rotateY: dir > 0 ? 8 : -8,
    transition: { duration: 0.5, ease: [0.4, 0, 0.6, 1] as const },
  }),
};

export default function Presentation() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [gridOpen, setGridOpen] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [4, -4]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as "dark" | "light") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("light");
    else root.classList.remove("light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  const go = useCallback((next: number) => {
    if (next < 0 || next >= SLIDES.length) return;
    setState(([cur]) => [next, next > cur ? 1 : -1]);
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "PageDown" || e.key === " ") next();
      else if (e.key === "ArrowRight" || e.key === "PageUp") prev();
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(SLIDES.length - 1);
      else if (e.key === "g" || e.key === "G") setGridOpen((g) => !g);
      else if (e.key === "Escape") setGridOpen(false);
      else if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
      else if (e.key === "t" || e.key === "T") toggleTheme();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, toggleTheme]);

  const Current = SLIDES[index].component;
  const progress = ((index + 1) / SLIDES.length) * 100;
  const imageFocusedSlide = SLIDES[index].id === "usecase" || SLIDES[index].id === "erd";

  return (
    <div dir="rtl" className="fixed inset-0 bg-background overflow-hidden flex flex-col font-body">
      {/* Top progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] z-50 bg-gradient-to-r from-primary via-cyan to-primary shadow-glow"
        style={{ background: "linear-gradient(90deg, var(--primary), var(--color-cyan), var(--primary))" }}
        initial={false}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      />

      {/* Top nav */}
      <header className="relative z-30 flex items-center justify-between gap-3 px-3 sm:px-4 md:px-8 py-3 md:py-4 glass-strong border-b border-white/5">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            layoutId="app-logo"
            className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow shrink-0"
          >
            <HeartPulse className="w-5 h-5 text-white" />
          </motion.div>
          <div className="hidden sm:block">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">Graduation Project</p>
            <p className="text-sm font-bold text-foreground leading-tight">منصّة الرعاية الطبية الافتراضية</p>
          </div>
        </div>

        {/* Center pills */}
        <nav className="hidden xl:flex items-center gap-1 glass rounded-full p-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                i === index ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {i === index && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-hero shadow-glow"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative">{s.title}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-sm font-mono text-muted-foreground tabular-nums hidden sm:inline">
            <span className="text-gradient font-black">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-1">/</span>
            {String(SLIDES.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => setGridOpen(true)}
            className="w-9 h-9 md:w-10 md:h-10 rounded-xl glass hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
            aria-label="عرض الشبكة"
            title="عرض الشبكة (G)"
          >
            <Grid3x3 className="w-4 h-4" />
          </button>
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9, rotate: 180 }}
            className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl glass hover:bg-primary/20 flex items-center justify-center text-primary transition-colors overflow-hidden"
            aria-label="تبديل الوضع"
            title="تبديل الوضع (T)"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <button
            onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen();
              else document.documentElement.requestFullscreen();
            }}
            className="hidden sm:flex w-10 h-10 rounded-xl glass hover:bg-primary/20 items-center justify-center text-primary transition-colors"
            aria-label="ملء الشاشة"
            title="ملء الشاشة (F)"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden w-9 h-9 md:w-10 md:h-10 rounded-xl glass flex items-center justify-center text-primary"
            aria-label="القائمة"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-[72px] inset-x-0 z-40 glass-strong border-b border-white/5"
          >
            <div className="p-3 grid grid-cols-1 gap-1.5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { go(i); setMenuOpen(false); }}
                  className={`px-4 py-3 rounded-xl text-sm font-bold text-right transition-all ${
                    i === index ? "bg-gradient-hero text-white" : "hover:bg-primary/10 text-foreground"
                  }`}
                >
                  {i + 1}. {s.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide stage */}
      <main
        className="relative flex-1 overflow-hidden perspective-2000"
        onPointerMove={(event) => {
          pointerX.set(event.clientX / window.innerWidth - 0.5);
          pointerY.set(event.clientY / window.innerHeight - 0.5);
        }}
        onPointerLeave={() => {
          pointerX.set(0);
          pointerY.set(0);
        }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={imageFocusedSlide ? undefined : { rotateX, rotateY }}
            className="absolute inset-0 preserve-3d"
          >
            <Current />
          </motion.div>
        </AnimatePresence>

        {/* Side nav buttons */}
        <motion.button
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          disabled={index === 0}
          aria-label="السابق"
            className="absolute right-2 sm:right-4 md:right-8 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-2xl glass-strong shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          disabled={index === SLIDES.length - 1}
          aria-label="التالي"
            className="absolute left-2 sm:left-4 md:left-8 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-2xl glass-strong shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </main>

      {/* Bottom dots */}
      <footer className="relative z-30 px-4 md:px-8 py-3 md:py-4 glass-strong border-t border-white/5">
        <div className="flex items-center justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-label={`الانتقال إلى ${s.title}`}
              className="group relative h-2 rounded-full transition-all duration-500"
              style={{ width: i === index ? 40 : 8 }}
            >
              <span
                className={`absolute inset-0 rounded-full transition-all ${
                  i === index ? "bg-gradient-hero shadow-glow" : "bg-primary/20 group-hover:bg-primary/50"
                }`}
              />
            </button>
          ))}
        </div>
      </footer>

      {/* Grid overview overlay */}
      <AnimatePresence>
        {gridOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-background/80 flex items-center justify-center p-8"
            onClick={() => setGridOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full max-h-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {SLIDES.map((s, i) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { go(i); setGridOpen(false); }}
                  className={`group relative aspect-video rounded-2xl glass-strong overflow-hidden border-2 transition-all ${
                    i === index ? "border-primary shadow-glow" : "border-white/10 hover:border-primary/50"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-hero opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-5xl font-black text-gradient mb-2">{String(i + 1).padStart(2, "0")}</p>
                    <p className="text-sm font-bold text-foreground">{s.title}</p>
                  </div>
                  {i === index && (
                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-black">
                      الحالي
                    </div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
