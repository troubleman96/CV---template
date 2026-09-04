import { cn } from "@/lib/utils";

type Variant = "sidebar-dark" | "sidebar-light" | "header-band" | "clean" | "split";

function Line({ w = "100%", dark = false }: { w?: string; dark?: boolean }) {
  return (
    <div
      className={cn("h-1.5 rounded-full", dark ? "bg-white/35" : "bg-foreground/12")}
      style={{ width: w }}
    />
  );
}

function Heading({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={cn(
        "text-[7px] font-semibold uppercase tracking-[0.18em]",
        dark ? "text-white/80" : "text-foreground/70",
      )}
    >
      {children}
    </p>
  );
}

function Block({ dark = false, widths }: { dark?: boolean; widths: string[] }) {
  return (
    <div className="space-y-1.5">
      {widths.map((w, i) => (
        <Line key={i} w={w} dark={dark} />
      ))}
    </div>
  );
}

export function ResumeMock({
  variant = "clean",
  name = "Daniela Silva",
  role = "Senior Product Designer",
  className,
}: {
  variant?: Variant;
  name?: string;
  role?: string;
  className?: string;
}) {
  const shell =
    "aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-white text-[8px] shadow-soft";

  if (variant === "sidebar-dark" || variant === "sidebar-light") {
    const dark = variant === "sidebar-dark";
    return (
      <div className={cn(shell, className)}>
        <div className="flex h-full">
          <div
            className={cn(
              "flex w-[38%] flex-col gap-4 p-3",
              dark ? "bg-[#22262b]" : "bg-[#eef1f6]",
            )}
          >
            <div
              className={cn(
                "mx-auto h-12 w-12 rounded-full",
                dark ? "bg-white/25" : "bg-foreground/15",
              )}
            />
            <div className="space-y-2">
              <Heading dark={dark}>Contact</Heading>
              <Block dark={dark} widths={["90%", "70%", "80%"]} />
            </div>
            <div className="space-y-2">
              <Heading dark={dark}>Skills</Heading>
              <Block dark={dark} widths={["85%", "60%", "75%", "50%"]} />
            </div>
            <div className="space-y-2">
              <Heading dark={dark}>Language</Heading>
              <Block dark={dark} widths={["70%", "55%"]} />
            </div>
          </div>
          <div className="flex-1 space-y-4 p-3">
            <div>
              <p className="text-[11px] font-semibold leading-tight text-foreground">{name}</p>
              <p className="mt-0.5 text-[7px] uppercase tracking-[0.16em] text-muted-foreground">
                {role}
              </p>
            </div>
            <div className="space-y-2">
              <Heading>Profile</Heading>
              <Block widths={["100%", "95%", "88%"]} />
            </div>
            <div className="space-y-2">
              <Heading>Experience</Heading>
              <Block widths={["100%", "80%", "92%", "70%"]} />
            </div>
            <div className="space-y-2">
              <Heading>Education</Heading>
              <Block widths={["85%", "65%"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "header-band") {
    return (
      <div className={cn(shell, className)}>
        <div className="flex h-full flex-col">
          <div className="bg-[#22262b] p-3">
            <p className="text-[11px] font-semibold text-white">{name}</p>
            <p className="mt-0.5 text-[7px] uppercase tracking-[0.16em] text-white/70">{role}</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 p-3">
            <div className="space-y-3">
              <Heading>About Me</Heading>
              <Block widths={["100%", "90%", "80%"]} />
              <Heading>Skills</Heading>
              <Block widths={["90%", "70%", "60%"]} />
            </div>
            <div className="space-y-3">
              <Heading>Experience</Heading>
              <Block widths={["100%", "85%", "95%", "70%"]} />
              <Heading>Education</Heading>
              <Block widths={["80%", "60%"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "split") {
    return (
      <div className={cn(shell, className)}>
        <div className="flex h-full flex-col gap-3 p-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-foreground/15" />
            <div>
              <p className="text-[11px] font-semibold text-foreground">{name}</p>
              <p className="text-[7px] uppercase tracking-[0.16em] text-muted-foreground">
                {role}
              </p>
            </div>
          </div>
          <div className="h-px bg-border" />
          <div className="grid flex-1 grid-cols-[1fr_1.4fr] gap-3">
            <div className="space-y-3">
              <Heading>Details</Heading>
              <Block widths={["90%", "75%", "60%"]} />
              <Heading>Expertise</Heading>
              <Block widths={["85%", "70%", "80%"]} />
            </div>
            <div className="space-y-3">
              <Heading>Employment</Heading>
              <Block widths={["100%", "88%", "95%", "76%", "90%"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(shell, className)}>
      <div className="flex h-full flex-col gap-4 p-4">
        <div className="text-center">
          <p className="text-[12px] font-semibold tracking-tight text-foreground">{name}</p>
          <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-muted-foreground">
            {role}
          </p>
        </div>
        <div className="h-px bg-border" />
        <div className="space-y-2">
          <Heading>Profile</Heading>
          <Block widths={["100%", "94%", "86%"]} />
        </div>
        <div className="space-y-2">
          <Heading>Experience</Heading>
          <Block widths={["100%", "82%", "92%", "74%"]} />
        </div>
        <div className="space-y-2">
          <Heading>Skills</Heading>
          <div className="flex flex-wrap gap-1">
            {[38, 26, 32, 22, 30].map((w, i) => (
              <span key={i} className="h-2.5 rounded-full bg-foreground/10" style={{ width: w }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
