import { motion } from "framer-motion";
import {
  Stethoscope, HeartPulse, Activity, Brain, Video,
  Users, Database, LayoutGrid, Code2, Workflow,
  MapPin, FileHeart, Sparkles, ArrowUpRight,
  Zap, Shield, Globe2,
} from "lucide-react";
import hebronLogo from "@/assets/hebron-university-logo.png";
import teleLogo from "@/assets/telemedicine-logo.png";
import reactIcon from "@/assets/react-icon.png";
import firebaseIcon from "@/assets/firebase-icon.png";
import useCaseDiagram from "@/assets/usecase-diagram.png";
import databaseDiagram from "@/assets/database-diagram.png";
import Backdrop from "./Backdrop";
import ZoomableImage from "./ZoomableImage";

/* =============== shared atoms =============== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function Tag({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-strong text-cyan border border-cyan/20"
      style={{ color: "var(--color-cyan)" }}
    >
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-pulse-ring" style={{ background: "var(--color-cyan)" }} />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-cyan)" }} />
      </span>
      <Icon className="w-4 h-4" />
      <span className="text-xs font-bold tracking-widest uppercase">{label}</span>
    </motion.div>
  );
}

function Title({ children, highlight }: { children: React.ReactNode; highlight?: string }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden" animate="show" custom={1}
      className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-black mt-4 md:mt-6 mb-3 md:mb-4 leading-[1.12] tracking-normal"
    >
      {children}{" "}
      {highlight && <span className="text-gradient">{highlight}</span>}
    </motion.h2>
  );
}

/* ============================ SLIDE 1: COVER ============================ */
export function CoverSlide() {
  const team = ["أحمد جمعه", "هديل جرادات", "عبدالله زهور", "شيرين طرمان"];

  return (
    <div className="relative w-full h-full overflow-hidden bg-background noise">
      <Backdrop />

      {/* Top decorative bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Hebron logo top right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-8 right-8 md:top-12 md:right-12 z-20 flex items-center gap-3 glass-strong rounded-2xl px-4 py-3"
      >
        <img src={hebronLogo} alt="جامعة الخليل" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
        <div className="text-right">
          <p className="text-sm font-bold text-foreground">جامعة الخليل</p>
          <p className="text-[10px] text-muted-foreground">كلية تكنولوجيا المعلومات</p>
        </div>
      </motion.div>

      {/* Main content grid */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 md:px-20 pt-24 pb-24 md:py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-20 items-center max-w-7xl w-full">
          {/* Text */}
          <div className="text-center lg:text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/80 mb-4 md:mb-6 font-quran"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan" style={{ color: "var(--color-cyan)" }} />
              <span className="text-xs font-bold tracking-widest uppercase text-cyan" style={{ color: "var(--color-cyan)" }}>
                Graduation Project
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              layoutId="main-title"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.08] tracking-normal mb-4"
            >
              منصّة الرعاية
              <br />
              <span className="text-gradient">الطبية الافتراضية</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-xl text-muted-foreground max-w-xl mb-5 md:mb-8 lg:mr-0 lg:ml-auto leading-relaxed"
            >
              نظام متكامل للاستشارات الطبية عن بُعد يربط الأطباء والمرضى عبر تجربة رقمية سلسة وآمنة.
            </motion.p>

            <motion.div
              variants={stagger} initial="hidden" animate="show"
              className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0 lg:mr-0 lg:ml-auto"
            >
              <motion.div variants={fadeUp} custom={9} className="glass rounded-2xl px-5 py-4 text-right border border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: "var(--color-cyan)" }} />
                  <p className="text-sm text-muted-foreground">إشراف</p>
                </div>
                <p className="text-lg font-black text-foreground">د. نبيل حساسنة</p>
              </motion.div>

              <motion.div variants={fadeUp} custom={10} className="glass rounded-2xl px-5 py-4 text-right border border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">إعداد الطلبة</p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {team.map((name) => (
                    <p key={name} className="text-sm font-bold text-foreground/90 whitespace-nowrap">{name}</p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D logo display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative perspective-2000 hidden lg:block"
          >
            {/* Rotating rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: "var(--gradient-aurora)", filter: "blur(40px)", opacity: 0.5 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative w-[380px] h-[380px] flex items-center justify-center preserve-3d">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: "var(--color-cyan)" }} />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-dashed border-cyan/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner glass core */}
              <motion.div
                className="relative w-64 h-64 rounded-full glass-strong shadow-glow flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={teleLogo} alt="TeleMEDICINE" className="w-44 h-44 object-contain drop-shadow-2xl" />
              </motion.div>

              {/* Floating mini icons */}
              {[
                { Icon: HeartPulse, angle: 0 },
                { Icon: Stethoscope, angle: 90 },
                { Icon: Activity, angle: 180 },
                { Icon: Brain, angle: 270 },
              ].map(({ Icon, angle }, i) => (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14 rounded-2xl glass-strong flex items-center justify-center shadow-soft"
                  style={{
                    left: "50%", top: "50%",
                    transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg) translate(-50%, -50%)`,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
}

/* ============================ SLIDE 2: INTRODUCTION ============================ */
export function IntroductionSlide() {
  const stats = [
    { Icon: Globe2, value: "100%", label: "تغطية رقمية" },
    { Icon: Zap, value: "24/7", label: "متاح دائمًا" },
    { Icon: Shield, value: "Secure", label: "بيانات مشفّرة" },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-center px-8 md:px-16 py-12">
        <Tag icon={Sparkles} label="Introduction" />
        <Title highlight="رقمية شاملة">نحو رعاية صحية</Title>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 mt-6">
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="card-3d glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-glow opacity-50" />
            <p className="relative text-base md:text-lg leading-[2] text-foreground/90 font-medium">
              في ظلِّ التطوّرات التكنولوجية المتسارعة التي يشهدها العالم، وخصوصًا في فلسطين،
              جاءت فكرة المشروع المتمثّلة في تطوير
              <span className="text-gradient font-bold"> منصّة للرعاية الطبية الافتراضية</span>،
              تهدف إلى تحسين مستوى الخدمات الصحية من خلال إتاحة الاستشارات عن بُعد،
              وتعزيز كفاءة التواصل بين مقدّمي الرعاية والمرضى، بما يلبّي احتياجات المجتمع
              ويواكب متطلّبات التحوّل الرقمي.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" animate="show"
            className="grid gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label} variants={fadeUp} custom={i + 3}
                className="card-3d glass rounded-2xl p-5 flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <s.Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-black text-gradient leading-none">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary/50 ml-auto group-hover:text-primary group-hover:rotate-45 transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ============================ SLIDE 3: PROJECT IDEA ============================ */
export function IdeaSlide() {
  const points = [
    { Icon: MapPin, title: "وصول الخدمات", text: "خدمات طبية للقرى والمناطق النائية." },
    { Icon: Workflow, title: "تجاوز العقبات", text: "تجاوز صعوبة الطرق وبُعد المراكز." },
    { Icon: Brain, title: "متابعة نفسية", text: "متابعة دورية دون عناء التنقل." },
    { Icon: Video, title: "استشارات آمنة", text: "اتصال مرئي مشفّر وآمن." },
    { Icon: FileHeart, title: "ملف صحي رقمي", text: "استمرارية الرعاية وجودتها." },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 overflow-y-auto">
        <Tag icon={HeartPulse} label="Project Idea" />
        <Title highlight="الخدمات الصحية">تسهيل وصول المرضى إلى</Title>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-sm md:text-lg text-muted-foreground max-w-3xl mb-5 md:mb-8 leading-loose"
        >
          تسهيل وصول المرضى إلى الخدمات الصحية، خاصة في المناطق النائية،
          مع التركيز على الحالات التي تحتاج متابعة دورية كمرضى الطب النفسي.
        </motion.p>

        <motion.div
          variants={stagger} initial="hidden" animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 flex-1 min-h-0"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp} custom={i + 3}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-3d glass-strong rounded-3xl p-4 md:p-6 flex flex-col relative overflow-hidden group min-h-[150px]"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                0{i + 1}
              </div>
              <motion.div
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-3 md:mb-4 shadow-glow"
                animate={{ y: [0, -6, 0], rotate: [0, i % 2 ? -5 : 5, 0] }}
                transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p.Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </motion.div>
              <h3 className="relative font-bold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ============================ SLIDE 4: TECHNOLOGIES ============================ */
export function MethodologySlide() {
  const groups = [
    {
      label: "Frontend",
      title: "تطبيقات المستخدم",
      Icon: Code2,
      tone: "primary",
      items: [
        { name: "React Native", desc: "تطبيق الهاتف للمرضى والأطباء", logo: reactIcon },
        { name: "React.js", desc: "لوحة ويب تفاعلية وسريعة", logo: reactIcon },
      ],
    },
    {
      label: "Backend",
      title: "إدارة النظام والبيانات",
      Icon: Database,
      tone: "gold",
      items: [{ name: "Firebase", desc: "تسجيل دخول، قاعدة بيانات، وتخزين سحابي", logo: firebaseIcon }],
    },
    {
      label: "Video System",
      title: "الاستشارات المرئية",
      Icon: Video,
      tone: "mint",
      items: [{ name: "Agora", desc: "مكالمات فيديو مباشرة وآمنة داخل المنصة", logo: undefined }],
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 overflow-y-auto">
        <Tag icon={Code2} label="Tech Stack" />
        <Title highlight="التقنيات المستخدمة">البرامج و</Title>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-sm md:text-lg text-muted-foreground max-w-3xl mb-5 md:mb-8 leading-loose"
        >
          اعتمدنا على بنية تقنية واضحة تجمع بين تطبيقات المستخدم، إدارة البيانات، ونظام فيديو مباشر للاستشارات الطبية.
        </motion.p>

        <motion.div variants={stagger} initial="hidden" animate="show" className="grid lg:grid-cols-3 gap-4 md:gap-6 flex-1 min-h-0">
          {groups.map((group, i) => (
            <motion.div key={group.label} variants={fadeUp} custom={i + 3} whileHover={{ y: -6 }} className="card-3d glass-strong rounded-3xl p-5 md:p-7 relative overflow-hidden flex flex-col">
              <div className="absolute inset-x-8 -top-24 h-52 rounded-full bg-gradient-glow blur-3xl opacity-70" />
              <div className="relative flex items-center gap-4 mb-5">
                <motion.div animate={{ y: [0, -7, 0], scale: [1, 1.04, 1] }} transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-light flex items-center justify-center p-3 shadow-soft">
                  {group.items[0].logo ? <img src={group.items[0].logo} alt={group.items[0].name} className="w-full h-full object-contain" /> : <group.Icon className="w-9 h-9 text-primary" />}
                </motion.div>
                <div>
                  <p className="text-[10px] md:text-xs font-black tracking-[0.2em] mb-1 text-primary">{group.label}</p>
                  <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight">{group.title}</h3>
                </div>
              </div>
              <div className="relative space-y-3 flex-1">
                {group.items.map((t) => (
                  <div key={t.name} className="flex items-start gap-3 glass rounded-2xl p-3 md:p-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                    <div>
                      <p className="font-black text-foreground">{t.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative mt-5 pt-4 border-t border-border/50 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {i === 0 && "واجهة موحدة وسريعة على الهاتف والويب."}
                {i === 1 && "بنية موثوقة للبيانات والمستخدمين."}
                {i === 2 && "اتصال مرئي فوري يدعم تجربة الاستشارة عن بُعد."}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ============================ DIAGRAM SLIDE ============================ */
function DiagramSlide({
  tag, icon: Icon, title, highlight, intro, image, imageAlt, caption,
}: {
  tag: string; icon: any; title: string; highlight: string;
  intro: string; image: string; imageAlt: string; caption?: string;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col px-4 sm:px-8 md:px-12 py-5 md:py-8 overflow-y-auto">
        <Tag icon={Icon} label={tag} />
        <motion.h2
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 md:mt-4 mb-2 leading-tight tracking-normal"
        >
          {title} <span className="text-gradient">{highlight}</span>
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-4xl leading-relaxed mb-3 md:mb-4"
        >
          {intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex-1 min-h-[320px] md:min-h-0"
        >
          <div className="relative h-full rounded-3xl glass-strong p-2 sm:p-4 overflow-hidden group">
            {/* corner accents */}
            {[
              "top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"
            ].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-3 h-3 rounded-full bg-gradient-to-br from-primary to-cyan shadow-glow`} />
            ))}
            <div className="absolute inset-0 bg-gradient-glow opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
            {/* Scan line effect */}
            <motion.div
              className="absolute inset-x-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-cyan), transparent)" }}
              animate={{ y: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative h-full w-full flex items-center justify-center bg-white/95 rounded-2xl p-2 sm:p-4 md:p-6">
              <ZoomableImage src={image} alt={imageAlt} />
            </div>
          </div>
        </motion.div>

        {caption && (
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="text-center text-xs md:text-sm text-muted-foreground mt-3 italic"
          >
            {caption}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export function UseCaseSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full grid lg:grid-cols-[0.82fr_1.18fr] gap-4 md:gap-8 px-4 sm:px-8 md:px-12 py-5 md:py-8 overflow-y-auto items-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-4 md:space-y-6">
          <Tag icon={Users} label="Use Case Diagram" />
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-normal">
            مخطط حالات الاستخدام <span className="text-gradient">Use Case</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-sm md:text-lg text-muted-foreground leading-loose">
            يوضح هذا المخطط كيفية تفاعل المستخدمين مع النظام، حيث يعرض الأدوار المختلفة والوظائف التي يمكن لكل مستخدم تنفيذها داخل المنصة.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="grid sm:grid-cols-2 gap-3">
            {["المريض", "الطبيب", "المختبر", "مدير النظام"].map((role) => (
              <div key={role} className="glass rounded-2xl p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shadow-glow" />
                <span className="font-bold text-foreground">{role}</span>
              </div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} custom={4} className="text-xs md:text-sm text-muted-foreground italic">
            الشكل (1): مخطط حالات الاستخدام للنظام
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }} className="min-h-[520px] md:min-h-[640px] lg:h-[calc(100vh-150px)] flex items-center justify-center">
          <ZoomableImage src={useCaseDiagram} alt="Use Case Diagram" className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
}

export function ERDSlide() {
  return (
    <DiagramSlide
      tag="Database Schema"
      icon={Database}
      title="مخطط قاعدة البيانات"
      highlight="Database"
      intro="يمثل هذا المخطط البنية الداخلية لقاعدة البيانات، ويوضح الجداول الرئيسية والعلاقات بينها بطريقة منظمة تسهّل فهم تصميم النظام."
      image={databaseDiagram}
      imageAlt="Database Schema Diagram"
      caption="الشكل (2): مخطط الجداول والعلاقات في قاعدة البيانات"
    />
  );
}

/* ============================ SLIDE 7: INTERFACES ============================ */
export function InterfacesSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-5xl mx-auto w-full h-full flex flex-col items-center justify-center text-center px-6 py-10">
        <Tag icon={LayoutGrid} label="Live Demo" />
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }} className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight tracking-normal mt-6">
          سنبدأ الآن <span className="text-gradient">العرض العملي</span>
        </motion.h2>
        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.9, delay: 0.35 }} className="w-36 md:w-56 h-1 bg-gradient-hero rounded-full mt-8 shadow-glow" />
      </div>
    </div>
  );
}
