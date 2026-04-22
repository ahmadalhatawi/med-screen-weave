import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, HeartPulse, Menu, X } from "lucide-react";
import {
  CoverSlide, IntroductionSlide, IdeaSlide, MethodologySlide,
  UseCaseSlide, ERDSlide, InterfacesSlide,
} from "./slides";

const SLIDES = [
  { id: "cover",        title: "الغلاف",                   component: CoverSlide },
  { id: "intro",        title: "مقدّمة المشروع",            component: IntroductionSlide },
  { id: "idea",         title: "فكرة المشروع",              component: IdeaSlide },
  { id: "methodology",  title: "المنهجية والتقنيات",        component: MethodologySlide },
  { id: "usecase",      title: "Use Case Diagram",          component: UseCaseSlide },
  { id: "erd",          title: "ERD",                       component: ERDSlide },
  { id: "interfaces",   title: "واجهات النظام",             component: InterfacesSlide },
];

export default function Presentation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [menuOpen, setMenuOpen] = useState(false);

  const go = useCallback((next: number) => {
    if (next < 0 || next >= SLIDES.length) return;
    setDirection(next > index ? "next" : "prev");
    setIndex(next);
  }, [index]);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // RTL: ArrowLeft = next, ArrowRight = prev
      if (e.key === "ArrowLeft" || e.key === "PageDown" || e.key === " ") next();
      else if (e.key === "ArrowRight" || e.key === "PageUp") prev();
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(SLIDES.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  const Current = SLIDES[index].component;
  const animClass = direction === "next" ? "animate-slide-in-left" : "animate-slide-in-right";

  return (
    <div dir="rtl" className="fixed inset-0 bg-background overflow-hidden flex flex-col font-body">
      {/* Top nav */}
      <header className="relative z-30 flex items-center justify-between px-4 md:px-8 py-3 glass border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-muted-foreground leading-tight">مشروع تخرّج</p>
            <p className="text-sm font-bold text-[var(--color-deep)] leading-tight">منصّة الرعاية الطبية الافتراضية</p>
          </div>
        </div>

        {/* Slide pills (desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                i === index
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {i + 1}. {s.title}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-primary"
            aria-label="القائمة"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[60px] inset-x-0 z-40 glass border-b shadow-soft animate-fade-up">
          <div className="p-3 grid grid-cols-1 gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { go(i); setMenuOpen(false); }}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold text-right transition-all ${
                  i === index ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
                }`}
              >
                {i + 1}. {s.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Slide stage */}
      <main className="relative flex-1 overflow-hidden">
        <div key={index} className={`absolute inset-0 ${animClass}`}>
          <Current />
        </div>

        {/* Side nav buttons */}
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="السابق"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass shadow-soft flex items-center justify-center text-primary hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-primary"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          disabled={index === SLIDES.length - 1}
          aria-label="التالي"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass shadow-soft flex items-center justify-center text-primary hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-primary"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </main>

      {/* Bottom indicators + progress */}
      <footer className="relative z-30 px-4 md:px-8 py-3 glass border-t">
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            disabled={index === 0}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-primary disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" /> السابق
          </button>

          <div className="flex-1 flex items-center justify-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                aria-label={`الانتقال إلى ${s.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={index === SLIDES.length - 1}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-primary disabled:opacity-30"
          >
            التالي <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
