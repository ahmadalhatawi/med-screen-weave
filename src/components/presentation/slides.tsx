import {
  Stethoscope, HeartPulse, Activity, Brain, Video, ShieldCheck,
  Users, Database, LayoutGrid, Code2, Smartphone, Cloud, Workflow,
  ImageIcon, MapPin, FileHeart, Sparkles
} from "lucide-react";
import hebronLogo from "@/assets/hebron-university-logo.png";
import teleLogo from "@/assets/telemedicine-logo.png";
import reactIcon from "@/assets/react-icon.png";
import firebaseIcon from "@/assets/firebase-icon.png";

/* ------------ Decorative shared backgrounds ------------ */
function MedicalBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-hero opacity-20 animate-blob" />
      <div className="absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full bg-[var(--color-cyan)] opacity-15 animate-blob" style={{ animationDelay: "3s" }} />
      <svg className="absolute top-1/3 left-10 w-64 opacity-[0.07]" viewBox="0 0 100 30">
        <polyline points="0,15 15,15 20,5 25,25 30,15 45,15 50,8 55,22 60,15 100,15"
          fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary" />
      </svg>
    </div>
  );
}

function SectionTag({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-semibold animate-fade-up">
      <Icon className="w-4 h-4" />
      {label}
    </div>
  );
}

/* ============================ SLIDE 1: COVER ============================ */
export function CoverSlide() {
  const team = [
    ["أحمد جمعه", "هديل جرادات"],
    ["عبدالله زهور", "شيرين طرمان"],
  ];

  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex">
      {/* Left vertical blue band */}
      <div className="relative w-[12%] min-w-[70px] bg-gradient-to-b from-[oklch(0.82_0.09_220)] via-[oklch(0.74_0.12_215)] to-[oklch(0.6_0.14_225)]">
        <div className="absolute top-6 right-[-1px] w-px h-24 bg-[var(--color-deep)]/40" />
        <div className="absolute top-6 right-[-1px] w-12 h-px bg-[var(--color-deep)]/40" />
        <div className="absolute top-[20px] right-[44px] w-2 h-2 rotate-45 bg-[var(--color-deep)]/60" />
        <div className="absolute bottom-6 right-[-1px] w-px h-24 bg-[var(--color-deep)]/40" />
        <div className="absolute bottom-6 right-[-1px] w-12 h-px bg-[var(--color-deep)]/40" />
        <div className="absolute bottom-[20px] right-[44px] w-2 h-2 rotate-45 bg-[var(--color-deep)]/60" />
      </div>

      {/* Background subtle blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-cyan)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      {/* Top-right decorative cross */}
      <div className="absolute top-[10%] left-[6%] opacity-60 pointer-events-none">
        <div className="relative w-20 h-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/50" />
          <div className="absolute top-0 left-1/2 h-full w-px bg-primary/50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-primary/70" />
        </div>
      </div>

      {/* Hebron logo (upper-right of band) */}
      <div className="absolute right-[4%] top-[15%] z-20 animate-fade-up">
        <img src={hebronLogo} alt="جامعة الخليل" className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl" />
      </div>

      {/* TeleMEDICINE circular (lower-right of band) */}
      <div className="absolute right-[5%] top-[55%] z-20 animate-fade-up delay-300">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-soft flex items-center justify-center p-3 ring-1 ring-[var(--color-cyan)]/30">
          <img src={teleLogo} alt="TeleMEDICINE" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* TeleMEDICINE bottom-left logo */}
      <div className="absolute bottom-8 left-[5%] z-20 animate-fade-up delay-500">
        <img src={teleLogo} alt="TeleMEDICINE" className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-95" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-8 text-center">
        {/* Bismillah */}
        <p className="text-2xl md:text-4xl font-bold text-[var(--color-deep)] mb-4 animate-fade-up" style={{ fontFamily: "'Amiri', 'Cairo', serif" }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <p className="text-xl md:text-2xl text-foreground mb-1 animate-fade-up delay-100 font-bold">جامعة الخليل</p>
        <p className="text-base md:text-lg text-muted-foreground mb-6 animate-fade-up delay-100">كلية تكنولوجيا المعلومات</p>

        <p className="text-lg md:text-xl text-primary font-bold animate-fade-up delay-200">: عنوان المشروع</p>
        <h1 className="text-3xl md:text-5xl font-black text-[var(--color-deep)] mt-1 mb-7 animate-fade-up delay-200 leading-tight">
          منصّة الرعاية الطبية الافتراضية
        </h1>

        <p className="text-lg md:text-xl text-primary font-bold animate-fade-up delay-300">: مشرف المشروع</p>
        <p className="text-base md:text-lg text-foreground mb-6 mt-1 animate-fade-up delay-300">الدكتور نبيل حساسنة</p>

        <p className="text-lg md:text-xl text-primary font-bold mb-3 animate-fade-up delay-500">: فريق المشروع</p>
        <div className="grid grid-cols-2 gap-x-12 md:gap-x-24 gap-y-2 animate-fade-up delay-500">
          {team.map((row, i) => row.map((name, j) => (
            <div key={`${i}-${j}`} className="flex items-center gap-2 text-foreground text-sm md:text-base">
              <span className="text-primary text-lg leading-none">❖</span>
              <span className="font-medium">{name}</span>
            </div>
          )))}
        </div>

        <p className="mt-7 text-lg md:text-xl font-bold text-[var(--color-deep)] tracking-wider animate-fade-up delay-700">
          2025 - 2026
        </p>

      </div>
    </div>
  );
}

/* ============================ SLIDE 2: INTRODUCTION ============================ */
export function IntroductionSlide() {
  return (
    <div className="relative w-full h-full bg-gradient-soft p-8 md:p-16 flex flex-col justify-center overflow-hidden">
      <MedicalBackdrop />
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <SectionTag icon={Sparkles} label="مقدّمة المشروع" />
        <h2 className="text-4xl md:text-6xl font-black mt-6 mb-10 animate-fade-up delay-100 text-[var(--color-deep)]">
          نحو رعاية صحية <span className="text-primary">رقمية</span> شاملة
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="card-3d bg-gradient-card glass rounded-3xl p-8 md:p-10 shadow-soft animate-fade-up delay-200">
            <p className="text-lg md:text-xl leading-[2.2] text-foreground/90 font-medium">
              في ظلِّ التطوّرات التكنولوجية المتسارعة التي يشهدها العالم، وخصوصًا في فلسطين،
              وبما تمرّ به البلاد من لأواء وبلاء وغلاء، نسألُ اللهَ العليَّ القدير أن يُفرِّج عن أهلنا
              في القطاع، وأن يرفع عنّا وعنهم البلاء واللأواء والغلاء.
              <br /><br />
              ومن هذا المنطلق جاءت فكرة مشروع التخرّج، والمتمثّلة في تصميم وتطوير
              <span className="text-primary font-bold"> منصّة للرعاية الطبية الافتراضية</span>،
              تهدف إلى تحسين مستوى الخدمات الصحية من خلال إتاحة الاستشارات الطبية عن بُعد،
              وتعزيز كفاءة التواصل بين مقدّمي الرعاية الصحية والمرضى، بما يلبّي احتياجات المجتمع
              ويواكب متطلّبات التحوّل الرقمي.
            </p>
          </div>

          <div className="hidden md:block animate-fade-up delay-300">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 bg-gradient-hero rounded-full opacity-30 animate-blob" />
              <div className="absolute inset-4 bg-white rounded-full shadow-glow flex items-center justify-center">
                <Stethoscope className="w-24 h-24 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-2xl bg-[var(--color-cyan)] flex items-center justify-center shadow-soft animate-float-slow">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-soft animate-float-slow" style={{ animationDelay: "2s" }}>
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ SLIDE 3: PROJECT IDEA ============================ */
export function IdeaSlide() {
  const points = [
    { icon: MapPin, title: "وصول الخدمات", text: "توفير خدمات طبية عن بُعد لسكان القرى والمناطق النائية." },
    { icon: Workflow, title: "تجاوز العقبات", text: "تجاوز صعوبة الطرق وبُعد المراكز الطبية المتخصصة." },
    { icon: Brain, title: "متابعة نفسية", text: "تمكين مرضى الطب النفسي من المتابعة الدورية دون عناء التنقل." },
    { icon: Video, title: "استشارات آمنة", text: "إتاحة استشارات طبية آمنة عبر الاتصال المرئي." },
    { icon: FileHeart, title: "ملف صحي رقمي", text: "توفير ملف صحي رقمي يدعم استمرارية الرعاية وجودتها." },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-soft p-8 md:p-14 flex flex-col overflow-hidden">
      <MedicalBackdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col h-full">
        <SectionTag icon={HeartPulse} label="فكرة المشروع" />
        <h2 className="text-4xl md:text-5xl font-black mt-5 mb-3 animate-fade-up delay-100 text-[var(--color-deep)]">
          تسهيل وصول المرضى إلى <span className="text-primary">الخدمات الصحية</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl animate-fade-up delay-200 mb-8 leading-loose">
          تقوم فكرة المشروع على تسهيل وصول المرضى إلى الخدمات الصحية، خاصة في المناطق النائية وصعبة الوصول،
          مع التركيز على الحالات التي تحتاج متابعة دورية مثل مرضى الطب النفسي.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 flex-1">
          {points.map((p, i) => (
            <div key={i}
              className="card-3d bg-gradient-card glass rounded-2xl p-5 shadow-soft animate-fade-up flex flex-col"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-hero text-white flex items-center justify-center mb-4 shadow-glow">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[var(--color-deep)] mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              <div className="mt-auto pt-3 text-xs text-primary font-bold">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================ SLIDE 4: TECHNOLOGIES ============================ */
export function MethodologySlide() {
  return (
    <div className="relative w-full h-full bg-gradient-soft p-8 md:p-14 overflow-y-auto">
      <MedicalBackdrop />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTag icon={Code2} label="التقنيات المستخدمة" />
        <h2 className="text-4xl md:text-5xl font-black mt-5 mb-3 animate-fade-up delay-100 text-[var(--color-deep)]">
          البرامج و<span className="text-primary">التقنيات المستخدمة</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl animate-fade-up delay-200 mb-8 leading-loose">
          اعتمدنا على مجموعة من أحدث التقنيات لضمان أداء عالٍ وتجربة مستخدم متميزة.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div className="card-3d bg-gradient-card glass rounded-3xl p-7 shadow-soft animate-fade-up delay-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center p-2 ring-1 ring-[var(--color-cyan)]/40">
                <img src={reactIcon} alt="React" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary tracking-widest">FRONTEND</p>
                <h3 className="text-2xl font-bold text-[var(--color-deep)]">واجهة المستخدم</h3>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span><b>React Native</b> — لتطوير تطبيق الهاتف</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span><b>React.js</b> — لتطوير موقع الويب</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-primary mb-2">المزايا:</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>✓ تجربة مستخدم سلسة وسريعة</li>
              <li>✓ عمل التطبيق بكفاءة عالية على مختلف الأجهزة</li>
              <li>✓ تصميم موحد وسهل الاستخدام</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="card-3d bg-gradient-card glass rounded-3xl p-7 shadow-soft animate-fade-up delay-500">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center p-2 ring-1 ring-orange-300/50">
                <img src={firebaseIcon} alt="Firebase" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary tracking-widest">BACKEND</p>
                <h3 className="text-2xl font-bold text-[var(--color-deep)]">إدارة النظام</h3>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)]" />
                <span><b>Firebase</b> — منصة سحابية متكاملة لإدارة النظام</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-primary mb-2">المزايا:</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>✓ إدارة المستخدمين وتسجيل الدخول بشكل آمن</li>
              <li>✓ تخزين البيانات بشكل فوري وآمن</li>
              <li>✓ ضمان الاستقرار وقابلية التوسع</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ DIAGRAM PLACEHOLDER SLIDE ============================ */
function DiagramSlide({
  tag, icon: Icon, title, highlight, intro, placeholderLabel, caption,
}: {
  tag: string; icon: any; title: string; highlight: string;
  intro: string; placeholderLabel: string; caption?: string;
}) {
  return (
    <div className="relative w-full h-full bg-gradient-soft p-8 md:p-14 flex flex-col overflow-hidden">
      <MedicalBackdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col h-full">
        <SectionTag icon={Icon} label={tag} />
        <h2 className="text-4xl md:text-5xl font-black mt-5 mb-4 animate-fade-up delay-100 text-[var(--color-deep)]">
          {title} <span className="text-primary">{highlight}</span>
        </h2>
        <p className="text-base md:text-lg text-foreground/80 max-w-4xl leading-loose animate-fade-up delay-200 mb-6">
          {intro}
        </p>

        <div className="flex-1 animate-fade-up delay-300">
          <div className="card-3d relative h-full min-h-[300px] rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-card glass shadow-soft flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* corner deco */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-primary/40" />
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--color-cyan)]" />
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[var(--color-cyan)]" />
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-primary/40" />

            <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center mb-5 shadow-glow">
              <ImageIcon className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl font-bold text-[var(--color-deep)] mb-2">{placeholderLabel}</p>
            <p className="text-sm text-muted-foreground">أضف صورة المخطط هنا</p>
            <code className="mt-4 text-xs px-3 py-1.5 rounded-md bg-primary/10 text-primary font-mono">
              {`<img src="..." alt="${tag}" />`}
            </code>
          </div>
        </div>

        {caption && (
          <p className="text-center text-sm text-muted-foreground mt-4 italic animate-fade-up delay-500">{caption}</p>
        )}
      </div>
    </div>
  );
}

export function UseCaseSlide() {
  return (
    <DiagramSlide
      tag="Use Case Diagram"
      icon={Users}
      title="مخطط حالات الاستخدام"
      highlight="Use Case"
      intro="يوضح هذا المخطط كيفية تفاعل المستخدمين مع النظام، حيث يعرض الأدوار المختلفة والوظائف التي يمكن لكل مستخدم تنفيذها داخل المنصة."
      placeholderLabel="Use Case Diagram"
      caption="الشكل (1): مخطط حالات الاستخدام للنظام"
    />
  );
}

export function ERDSlide() {
  return (
    <DiagramSlide
      tag="Entity Relationship Diagram"
      icon={Database}
      title="مخطط قاعدة البيانات"
      highlight="ERD"
      intro="يمثل هذا المخطط البنية الداخلية لقاعدة البيانات، ويوضح الكيانات المختلفة والعلاقات بينها بطريقة منظمة تسهّل فهم تصميم النظام."
      placeholderLabel="ERD Diagram"
      caption="الشكل (2): مخطط الكيانات والعلاقات"
    />
  );
}

export function InterfacesSlide() {
  return (
    <div className="relative w-full h-full bg-gradient-soft p-8 md:p-14 flex flex-col overflow-hidden">
      <MedicalBackdrop />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col h-full">
        <SectionTag icon={LayoutGrid} label="System Interfaces" />
        <h2 className="text-4xl md:text-5xl font-black mt-5 mb-4 animate-fade-up delay-100 text-[var(--color-deep)]">
          واجهات <span className="text-primary">النظام</span>
        </h2>
        <p className="text-base md:text-lg text-foreground/80 max-w-4xl leading-loose animate-fade-up delay-200 mb-6">
          تعرض هذه الواجهات الشكل النهائي للنظام، وتوضح كيفية تفاعل المستخدم مع المنصة وسهولة التنقل بين الخدمات المختلفة.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 flex-1">
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <div
              key={n}
              className="card-3d relative rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-card glass shadow-soft flex flex-col items-center justify-center p-6 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.08}s`, minHeight: 180 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-3 shadow-glow">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-[var(--color-deep)]">واجهة {n}</p>
              <p className="text-xs text-muted-foreground mt-1">أضف الصورة هنا</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-5 italic animate-fade-up delay-700">
          الشكل (3): الواجهات الرئيسية لمنصّة الرعاية الطبية الافتراضية
        </p>
      </div>
    </div>
  );
}
