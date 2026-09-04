import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/")(  {
  component: Index,
});

function Index() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-6"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <Logo size={80} showName={false} />
      <span className="text-3xl font-bold tracking-tight text-gray-900">CVeeBee</span>
      <p className="text-gray-500 text-sm">Your career, simplified.</p>
    </div>
  );
}
