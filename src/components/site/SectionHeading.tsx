import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2 className="h-section max-w-3xl text-foreground">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
