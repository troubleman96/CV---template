import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="shell flex flex-col items-center gap-5 text-center">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="h-display max-w-4xl text-foreground">{title}</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
