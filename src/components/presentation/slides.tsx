import { motion } from "framer-motion";
import {
  HeartPulse, Brain, Video,
  Users, Database, LayoutGrid, Code2, Workflow,
  MapPin, FileHeart, Sparkles, ArrowUpRight,
  Zap, Shield, Globe2,
  UserCog, Stethoscope, User as UserIcon, FlaskConical,
  LogIn, UserPlus, Mail, KeyRound, CalendarPlus, CalendarCheck,
  CreditCard, Clock, DoorOpen, PhoneOff, ClipboardList,
  Send, CheckCircle2, Upload, FileText, Pill, QrCode,
  MessageSquare, AlertTriangle, ShieldCheck, Megaphone, LogOut,
  CheckCircle,
} from "lucide-react";
import hebronLogo from "@/assets/hebron-university-logo.png";
import teleLogo from "@/assets/telemedicine-logo.png";
import reactIcon from "@/assets/react-icon.png";
import firebaseIcon from "@/assets/firebase-icon.png";
import Backdrop from "./Backdrop";

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

            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center glass-light rounded-full px-6 py-2.5"
      >
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Academic Year</p>
        <p className="text-base md:text-lg font-black text-gradient leading-tight">2025 — 2026</p>
      </motion.div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
}

/* ============================ SLIDE 2: INTRODUCTION ============================ */
export function IntroductionSlide() {
  const pillars = [
    { Icon: Globe2, title: "وصول أسهل", text: "تقليل أثر المسافة والوقت على الحصول على الاستشارة الطبية." },
    { Icon: Zap, title: "استجابة أسرع", text: "تنظيم التواصل بين المريض والطبيب ضمن تجربة رقمية مباشرة." },
    { Icon: Shield, title: "خصوصية أعلى", text: "حماية البيانات الطبية وتوثيق رحلة العلاج بشكل آمن." },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-center px-5 sm:px-8 md:px-16 py-8 md:py-12">
        <div className="max-w-4xl">
          <Tag icon={Sparkles} label="Introduction" />
          <Title highlight="رقمية شاملة">نحو رعاية صحية</Title>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 md:gap-7 mt-5 md:mt-7 items-stretch">
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="card-3d glass-strong rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[330px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-glow opacity-50" />
            <div className="relative">
              <p className="text-sm font-bold text-cyan mb-4" style={{ color: "var(--color-cyan)" }}>سياق المشروع</p>
              <p className="text-base md:text-xl leading-[2] text-foreground/90 font-medium">
                في ظل التطور المتسارع للخدمات الرقمية، تظهر الحاجة إلى حلول طبية تقلل الحواجز بين
                المرضى ومقدمي الرعاية، خصوصًا في المناطق التي يصعب فيها الوصول السريع إلى الخدمات الصحية.
              </p>
            </div>
            <div className="relative mt-7 pt-6 border-t border-white/10">
              <p className="text-base md:text-lg leading-loose text-muted-foreground">
                لذلك يقدّم المشروع <span className="text-gradient font-black">منصّة للرعاية الطبية الافتراضية</span> تربط
                المريض بالطبيب وتدعم الاستشارات عن بُعد ضمن تجربة منظمة وآمنة.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" animate="show"
            className="grid gap-3 md:gap-4"
          >
            {pillars.map((s, i) => (
              <motion.div
                key={s.title} variants={fadeUp} custom={i + 3}
                className="card-3d glass rounded-2xl p-5 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform shrink-0">
                  <s.Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg md:text-xl font-black text-foreground leading-tight">{s.title}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
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

/* ============================ SLIDE: USER ROLES ============================ */
export function UserRolesSlide() {
  const roles = [
    {
      Icon: UserCog,
      label: "Admin",
      title: "مدير النظام",
      desc: "يدير المستخدمين، يعالج الشكاوى، ويُرسل الإعلانات داخل المنصة.",
      tone: "from-rose-500 to-orange-500",
    },
    {
      Icon: Stethoscope,
      label: "Doctor",
      title: "الطبيب",
      desc: "يستقبل المرضى، يجري الاستشارات المرئية، ويُصدر الوصفات والتحاليل.",
      tone: "from-sky-500 to-cyan-400",
    },
    {
      Icon: UserIcon,
      label: "Patient",
      title: "المريض",
      desc: "يحجز المواعيد، يحضر الجلسات، ويتلقى نتائج التحاليل والوصفات.",
      tone: "from-emerald-500 to-teal-400",
    },
    {
      Icon: FlaskConical,
      label: "Lab",
      title: "المختبر",
      desc: "يستقبل طلبات التحاليل من الأطباء ويرفع نتائج الفحوصات.",
      tone: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 overflow-y-auto">
        <Tag icon={Users} label="System Users" />
        <Title highlight="في النظام">أنواع المستخدمين</Title>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-sm md:text-lg text-muted-foreground max-w-3xl mb-6 md:mb-10 leading-loose"
        >
          يضم النظام أربعة أنواع رئيسية من المستخدمين، لكلٍّ منهم دور واضح وصلاحيات تخدم رحلة الرعاية الصحية المتكاملة.
        </motion.p>

        <motion.div
          variants={stagger} initial="hidden" animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 flex-1 min-h-0"
        >
          {roles.map((r, i) => (
            <motion.div
              key={r.label}
              variants={fadeUp} custom={i + 3}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-3d glass-strong rounded-3xl p-5 md:p-7 flex flex-col relative overflow-hidden group"
            >
              <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${r.tone} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500`} />
              <div className="absolute top-4 left-4 text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                0{i + 1}
              </div>
              <motion.div
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${r.tone} flex items-center justify-center mb-4 md:mb-5 shadow-glow`}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
              >
                <r.Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <p className="relative text-[10px] md:text-xs font-black tracking-[0.2em] text-primary mb-1">{r.label}</p>
              <h3 className="relative text-xl md:text-2xl font-black text-foreground mb-2 md:mb-3 leading-tight">{r.title}</h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
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

/* ============================ SCENARIO SLIDE FACTORY ============================ */
type Step = {
  Icon: any;
  title: string;
  desc?: string;
  tone?: "action" | "success" | "warning" | "info";
};

type ScenarioProps = {
  number: number;
  total: number;
  actor: string;
  actorIcon: any;
  title: string;
  highlight: string;
  steps: Step[];
  successMessage: string;
};

const TONE_STYLES: Record<string, { bg: string; ring: string; text: string; chip: string }> = {
  action:  { bg: "from-sky-500/90 to-blue-500/90",       ring: "ring-sky-400/30",      text: "text-sky-300",     chip: "bg-sky-500/15 text-sky-300 border-sky-400/30" },
  success: { bg: "from-emerald-500/90 to-teal-500/90",   ring: "ring-emerald-400/30",  text: "text-emerald-300", chip: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30" },
  warning: { bg: "from-amber-500/90 to-orange-500/90",   ring: "ring-amber-400/30",    text: "text-amber-300",   chip: "bg-amber-500/15 text-amber-300 border-amber-400/30" },
  info:    { bg: "from-violet-500/90 to-fuchsia-500/90", ring: "ring-violet-400/30",   text: "text-violet-300",  chip: "bg-violet-500/15 text-violet-300 border-violet-400/30" },
};

function ScenarioSlide({ number, total, actor, actorIcon: ActorIcon, title, highlight, steps, successMessage }: ScenarioProps) {
  return (
    <div className="relative w-full h-full overflow-hidden noise" style={{ background: "var(--gradient-soft)" }}>
      <Backdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col px-4 sm:px-8 md:px-16 py-5 md:py-10 overflow-y-auto">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Tag icon={Workflow} label={`Scenario ${String(number).padStart(2, "0")} / ${String(total).padStart(2, "0")}`} />
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-1.5 border border-primary/20"
          >
            <ActorIcon className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-foreground">{actor}</span>
          </motion.div>
        </div>

        <Title highlight={highlight}>{title}</Title>

        {/* Steps grid */}
        <motion.div
          variants={stagger} initial="hidden" animate="show"
          className={`grid gap-3 md:gap-4 mt-4 md:mt-6 flex-1 min-h-0 ${
            steps.length <= 2 ? "grid-cols-1 sm:grid-cols-2" :
            steps.length <= 3 ? "grid-cols-1 sm:grid-cols-3" :
            steps.length <= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" :
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {steps.map((s, i) => {
            const tone = TONE_STYLES[s.tone || "action"];
            return (
              <motion.div
                key={i}
                variants={fadeUp} custom={i + 2}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-3d glass-strong rounded-3xl p-5 md:p-6 relative overflow-hidden group flex flex-col"
              >
                <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${tone.bg} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500`} />
                <div className="absolute top-3 left-4 text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  0{i + 1}
                </div>
                <motion.div
                  className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${tone.bg} flex items-center justify-center mb-4 shadow-glow ring-2 ${tone.ring}`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <s.Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
                <h3 className="relative font-black text-base md:text-lg text-foreground mb-1.5 leading-tight">{s.title}</h3>
                {s.desc && (
                  <p className="relative text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Success banner */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 + steps.length * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-4 md:mt-6 relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-transparent backdrop-blur-xl px-5 py-4 flex items-center gap-4"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-glow shrink-0"
          >
            <CheckCircle className="w-6 h-6 text-white" />
          </motion.div>
          <div className="min-w-0">
            <p className="text-[10px] font-black tracking-[0.2em] text-emerald-400 mb-0.5">SUCCESS STATE</p>
            <p className="text-sm md:text-base font-bold text-foreground leading-snug">{successMessage}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================ 23 SCENARIO SLIDES ============================ */
export const SCENARIOS_TOTAL = 23;

export function Scenario01() {
  return <ScenarioSlide number={1} total={SCENARIOS_TOTAL} actor="الطبيب" actorIcon={Stethoscope}
    title="تسجيل دخول ناجح" highlight="للطبيب"
    steps={[
      { Icon: KeyRound, title: "إدخال بيانات الدخول", desc: "البريد الإلكتروني وكلمة المرور.", tone: "action" },
      { Icon: ShieldCheck, title: "التحقق من الهوية", desc: "التحقق الآمن من الصلاحيات.", tone: "info" },
      { Icon: LogIn, title: "الدخول إلى لوحة الطبيب", desc: "الوصول الكامل لأدوات العمل.", tone: "success" },
    ]}
    successMessage="تم تسجيل دخول الطبيب بنجاح والوصول إلى لوحة التحكم." />;
}

export function Scenario02() {
  return <ScenarioSlide number={2} total={SCENARIOS_TOTAL} actor="الطبيب" actorIcon={Stethoscope}
    title="إضافة مريض" highlight="إلى القائمة"
    steps={[
      { Icon: UserPlus, title: "إنشاء بطاقة مريض جديد", desc: "اختيار المريض من قاعدة المستخدمين.", tone: "action" },
      { Icon: Mail, title: "إرسال دعوة للمريض", desc: "إشعار رسمي عبر التطبيق.", tone: "info" },
      { Icon: ClipboardList, title: "إضافته للقائمة", desc: "ظهوره ضمن مرضى الطبيب المتابعين.", tone: "success" },
    ]}
    successMessage="تمت إضافة المريض إلى قائمة الطبيب وإرسال الدعوة." />;
}

export function Scenario03() {
  return <ScenarioSlide number={3} total={SCENARIOS_TOTAL} actor="المريض" actorIcon={UserIcon}
    title="قبول دعوة" highlight="الطبيب"
    steps={[
      { Icon: Mail, title: "استلام إشعار الدعوة", desc: "وصول إشعار من طبيب جديد.", tone: "info" },
      { Icon: CheckCircle2, title: "مراجعة بيانات الطبيب", desc: "اطلاع المريض على ملف الطبيب.", tone: "action" },
      { Icon: ShieldCheck, title: "قبول الدعوة", desc: "ربط المريض رسمياً مع الطبيب.", tone: "success" },
    ]}
    successMessage="قبل المريض دعوة الطبيب وتم ربط الحسابين." />;
}

export function Scenario04() {
  return <ScenarioSlide number={4} total={SCENARIOS_TOTAL} actor="المريض" actorIcon={UserIcon}
    title="منح صلاحية الوصول" highlight="للملف الطبي"
    steps={[
      { Icon: FileHeart, title: "طلب الطبيب الوصول", desc: "إشعار بطلب الاطلاع على الملف.", tone: "info" },
      { Icon: ShieldCheck, title: "موافقة المريض", desc: "تأكيد منح الصلاحية بشكل صريح.", tone: "action" },
      { Icon: CheckCircle2, title: "فتح الملف للطبيب", desc: "وصول آمن ومؤرشف للسجل الطبي.", tone: "success" },
    ]}
    successMessage="حصل الطبيب على صلاحية الوصول إلى الملف الطبي للمريض." />;
}

export function Scenario05() {
  return <ScenarioSlide number={5} total={SCENARIOS_TOTAL} actor="الطبيب" actorIcon={Stethoscope}
    title="حجز موعد" highlight="للمريض"
    steps={[
      { Icon: UserIcon, title: "اختيار المريض", desc: "تحديد المريض من القائمة.", tone: "action" },
      { Icon: CalendarPlus, title: "تحديد التاريخ والوقت", desc: "اختيار وقت متاح في جدول الطبيب.", tone: "info" },
      { Icon: Send, title: "إرسال طلب الحجز", desc: "إشعار يصل إلى المريض للموافقة.", tone: "success" },
    ]}
    successMessage="تم إنشاء طلب موعد وإرساله إلى المريض." />;
}

export function Scenario06() {
  return <ScenarioSlide number={6} total={SCENARIOS_TOTAL} actor="المريض" actorIcon={UserIcon}
    title="قبول الحجز" highlight="من قبل المريض"
    steps={[
      { Icon: CalendarCheck, title: "استلام طلب الموعد", desc: "إشعار بموعد مقترح من الطبيب.", tone: "info" },
      { Icon: CheckCircle2, title: "مراجعة الموعد", desc: "تأكيد الوقت يناسب المريض.", tone: "action" },
      { Icon: CheckCircle, title: "قبول الموعد", desc: "تثبيت الحجز في تقويم الطرفين.", tone: "success" },
    ]}
    successMessage="تم تأكيد الموعد وحفظه في جدول الطبيب والمريض." />;
}

export function Scenario07() {
  return <ScenarioSlide number={7} total={SCENARIOS_TOTAL} actor="المريض" actorIcon={UserIcon}
    title="الدفع الإلكتروني" highlight="قبل الدخول"
    steps={[
      { Icon: AlertTriangle, title: "تنبيه إلزامية الدفع", desc: "لا يمكن دخول الجلسة قبل السداد.", tone: "warning" },
      { Icon: CreditCard, title: "إتمام عملية الدفع", desc: "بوابة دفع آمنة ومشفّرة.", tone: "action" },
      { Icon: CheckCircle, title: "تأكيد الدفع", desc: "تفعيل إمكانية الدخول للجلسة.", tone: "success" },
    ]}
    successMessage="تم استلام الدفع وأصبحت الجلسة جاهزة للحضور." />;
}

export function Scenario08() {
  return <ScenarioSlide number={8} total={SCENARIOS_TOTAL} actor="النظام" actorIcon={Zap}
    title="تفعيل الدخول قبل الموعد" highlight="بـ 30 دقيقة"
    steps={[
      { Icon: Clock, title: "اقتراب وقت الجلسة", desc: "النظام يتابع جدول المواعيد تلقائياً.", tone: "info" },
      { Icon: Zap, title: "تفعيل زر الانضمام", desc: "يصبح زر الدخول متاحاً للطرفين.", tone: "action" },
      { Icon: Mail, title: "إرسال إشعار للطرفين", desc: "تذكير الطبيب والمريض بقرب الموعد.", tone: "success" },
    ]}
    successMessage="تم تفعيل الدخول إلى الجلسة قبل 30 دقيقة من موعدها." />;
}

export function Scenario09() {
  return <ScenarioSlide number={9} total={SCENARIOS_TOTAL} actor="الطبيب والمريض" actorIcon={Video}
    title="دخول" highlight="غرفة الفيديو"
    steps={[
      { Icon: DoorOpen, title: "الانضمام للغرفة", desc: "دخول طرفين بهوية موثّقة.", tone: "action" },
      { Icon: ShieldCheck, title: "اتصال آمن ومشفّر", desc: "بث فيديو مباشر عبر Agora.", tone: "info" },
      { Icon: Video, title: "بدء الاستشارة", desc: "تواصل مرئي وصوتي بجودة عالية.", tone: "success" },
    ]}
    successMessage="تم دخول غرفة الفيديو وبدء الاستشارة بنجاح." />;
}

export function Scenario10() {
  return <ScenarioSlide number={10} total={SCENARIOS_TOTAL} actor="الطبيب" actorIcon={Stethoscope}
    title="انتهاء" highlight="الجلسة"
    steps={[
      { Icon: PhoneOff, title: "إنهاء الاتصال", desc: "إغلاق الغرفة من قبل الطبيب.", tone: "action" },
      { Icon: Clock, title: "احتساب مدة الجلسة", desc: "تسجيل وقت البدء والانتهاء.", tone: "info" },
      { Icon: CheckCircle, title: "إغلاق غرفة الفيديو", desc: "تحرير الموارد من الخادم.", tone: "success" },
    ]}
    successMessage="تم إنهاء الجلسة وأرشفة بياناتها بنجاح." />;
}

export function Scenario11() {
  return <ScenarioSlide number={11} total={SCENARIOS_TOTAL} actor="الطبيب" actorIcon={Stethoscope}
    title="إدخال" highlight="ملخص الجلسة"
    steps={[
      { Icon: ClipboardList, title: "ظهور نافذة الملخص", desc: "تظهر تلقائياً بعد إنهاء الجلسة.", tone: "info" },
      { Icon: FileText, title: "كتابة الملاحظات الطبية", desc: "تشخيص وملاحظات الطبيب.", tone: "action" },
      { Icon: CheckCircle, title: "حفظ الملخص بالملف", desc: "إضافته للسجل الطبي للمريض.", tone: "success" },
    ]}
    successMessage="تم حفظ ملخص الجلسة في الملف الطبي للمريض." />;
}

export function Scenario12() {
  return <ScenarioSlide number={12} total={SCENARIOS_TOTAL} actor="الطبيب" actorIcon={Stethoscope}
    title="إرسال طلب" highlight="تحاليل طبية"
    steps={[
      { Icon: FlaskConical, title: "تحديد التحاليل المطلوبة", desc: "اختيار نوع الفحوصات.", tone: "action" },
      { Icon: UserIcon, title: "إرسال نسخة للمريض", desc: "وصول الطلب إلى المريض.", tone: "info" },
      { Icon: Send, title: "إرسال نسخة للمختبر", desc: "وصول الطلب إلى المختبر المختص.", tone: "success" },
    ]}
    successMessage="تم إرسال طلب التحاليل إلى المريض والمختبر معاً." />;
}

export function Scenario13() {
  return <ScenarioSlide number={13} total={SCENARIOS_TOTAL} actor="المختبر" actorIcon={FlaskConical}
    title="قبول" highlight="طلب التحاليل"
    steps={[
      { Icon: Mail, title: "استلام الطلب", desc: "وصول إشعار بطلب جديد.", tone: "info" },
      { Icon: ClipboardList, title: "مراجعة تفاصيل الطلب", desc: "نوع التحاليل وبيانات المريض.", tone: "action" },
      { Icon: CheckCircle, title: "قبول الطلب", desc: "اعتماده وجدولة الفحص.", tone: "success" },
    ]}
    successMessage="قبل المختبر طلب التحاليل وتمت جدولته." />;
}

export function Scenario14() {
  return <ScenarioSlide number={14} total={SCENARIOS_TOTAL} actor="المختبر" actorIcon={FlaskConical}
    title="رفع" highlight="نتيجة التحليل"
    steps={[
      { Icon: FlaskConical, title: "إجراء الفحص", desc: "تنفيذ التحاليل المطلوبة.", tone: "action" },
      { Icon: Upload, title: "رفع ملف النتيجة", desc: "إرفاق التقرير الطبي بصيغة PDF.", tone: "info" },
      { Icon: CheckCircle, title: "اعتماد النتيجة", desc: "ختم النتيجة ونشرها رسمياً.", tone: "success" },
    ]}
    successMessage="تم رفع نتيجة التحليل واعتمادها بنجاح." />;
}

export function Scenario15() {
  return <ScenarioSlide number={15} total={SCENARIOS_TOTAL} actor="النظام" actorIcon={Zap}
    title="وصول النتيجة" highlight="للطبيب والمريض"
    steps={[
      { Icon: Stethoscope, title: "إشعار الطبيب", desc: "وصول النتيجة فوراً للطبيب.", tone: "info" },
      { Icon: UserIcon, title: "إشعار المريض", desc: "وصول النتيجة فوراً للمريض.", tone: "info" },
      { Icon: FileText, title: "ملف بتفاصيل كاملة", desc: "يحتوي تفاصيل الفحص واسم المختبر.", tone: "success" },
    ]}
    successMessage="وصلت نتيجة التحليل إلى الطبيب والمريض في نفس اللحظة." />;
}

export function Scenario16() {
  return <ScenarioSlide number={16} total={SCENARIOS_TOTAL} actor="الطبيب" actorIcon={Stethoscope}
    title="إرسال" highlight="وصفة طبية"
    steps={[
      { Icon: Pill, title: "كتابة الوصفة", desc: "تحديد الأدوية والجرعات.", tone: "action" },
      { Icon: FileText, title: "حفظها ضمن الملف", desc: "ربطها بسجل المريض.", tone: "info" },
      { Icon: Send, title: "إرسالها للمريض", desc: "وصول الوصفة فور إصدارها.", tone: "success" },
    ]}
    successMessage="تم إصدار الوصفة الطبية وإرسالها إلى المريض." />;
}

export function Scenario17() {
  return <ScenarioSlide number={17} total={SCENARIOS_TOTAL} actor="المريض" actorIcon={UserIcon}
    title="عرض" highlight="الوصفة الطبية"
    steps={[
      { Icon: Mail, title: "استلام الوصفة", desc: "إشعار بوصول وصفة جديدة.", tone: "info" },
      { Icon: FileText, title: "فتح ملف الوصفة", desc: "عرض تفاصيل الأدوية كاملة.", tone: "action" },
      { Icon: QrCode, title: "عرض QR Code", desc: "كود يُقرأ مباشرة من الصيدلية.", tone: "success" },
    ]}
    successMessage="يمكن للمريض عرض الوصفة كملف أو QR Code للصيدلية." />;
}

export function Scenario18() {
  return <ScenarioSlide number={18} total={SCENARIOS_TOTAL} actor="الطبيب والمريض" actorIcon={MessageSquare}
    title="التواصل" highlight="عبر المحادثة"
    steps={[
      { Icon: MessageSquare, title: "فتح نافذة المحادثة", desc: "بدء حوار نصي مباشر.", tone: "action" },
      { Icon: Send, title: "تبادل الرسائل", desc: "متابعة بين الجلسات بسرعة.", tone: "info" },
      { Icon: ShieldCheck, title: "حفظ سجل المحادثة", desc: "أرشفة آمنة لكل المحادثات.", tone: "success" },
    ]}
    successMessage="تم التواصل بين الطبيب والمريض وحفظ المحادثة بشكل آمن." />;
}

export function Scenario19() {
  return <ScenarioSlide number={19} total={SCENARIOS_TOTAL} actor="المستخدم" actorIcon={UserIcon}
    title="إرسال شكوى" highlight="لمدير النظام"
    steps={[
      { Icon: AlertTriangle, title: "فتح نموذج الشكوى", desc: "اختيار نوع المشكلة.", tone: "warning" },
      { Icon: FileText, title: "كتابة تفاصيل الشكوى", desc: "وصف المشكلة بشكل واضح.", tone: "action" },
      { Icon: Send, title: "إرسالها للمدير", desc: "وصول الشكوى للوحة المدير.", tone: "success" },
    ]}
    successMessage="تم إرسال الشكوى إلى مدير النظام بنجاح." />;
}

export function Scenario20() {
  return <ScenarioSlide number={20} total={SCENARIOS_TOTAL} actor="مدير النظام" actorIcon={UserCog}
    title="معالجة" highlight="الشكوى"
    steps={[
      { Icon: ClipboardList, title: "مراجعة الشكوى", desc: "الاطلاع على تفاصيل المشكلة.", tone: "info" },
      { Icon: CheckCircle, title: "قبول الشكوى", desc: "اتخاذ إجراء فوري عليها.", tone: "success" },
      { Icon: AlertTriangle, title: "رفض أو تجاهل", desc: "في حال عدم استيفاء الشروط.", tone: "warning" },
    ]}
    successMessage="تمت معالجة الشكوى وتحديث حالتها داخل النظام." />;
}

export function Scenario21() {
  return <ScenarioSlide number={21} total={SCENARIOS_TOTAL} actor="مدير النظام" actorIcon={UserCog}
    title="إرسال" highlight="إعلان"
    steps={[
      { Icon: Megaphone, title: "كتابة الإعلان", desc: "صياغة محتوى الإعلان.", tone: "action" },
      { Icon: Users, title: "اختيار المستهدفين", desc: "كل المستخدمين أو فئة محددة.", tone: "info" },
      { Icon: Send, title: "نشر الإعلان", desc: "وصوله فوراً عبر إشعار.", tone: "success" },
    ]}
    successMessage="تم نشر الإعلان ووصوله إلى الفئة المستهدفة." />;
}

export function Scenario22() {
  return <ScenarioSlide number={22} total={SCENARIOS_TOTAL} actor="جميع المستخدمين" actorIcon={UserIcon}
    title="تسجيل خروج" highlight="ناجح"
    steps={[
      { Icon: LogOut, title: "اختيار تسجيل الخروج", desc: "النقر على زر الخروج.", tone: "action" },
      { Icon: ShieldCheck, title: "إنهاء الجلسة بأمان", desc: "إلغاء صلاحيات الجلسة.", tone: "info" },
      { Icon: CheckCircle, title: "العودة لشاشة الدخول", desc: "إغلاق كامل للحساب.", tone: "success" },
    ]}
    successMessage="تم تسجيل الخروج بنجاح وإنهاء الجلسة بشكل آمن." />;
}
