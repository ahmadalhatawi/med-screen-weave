import { createFileRoute } from "@tanstack/react-router";
import Presentation from "@/components/presentation/Presentation";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "منصّة الرعاية الطبية الافتراضية — مشروع تخرّج" },
      { name: "description", content: "عرض تقديمي تفاعلي لمشروع تخرّج: منصّة الرعاية الطبية الافتراضية للاستشارات الطبية عن بُعد." },
    ],
  }),
});

function Index() {
  return <Presentation />;
}
