const marks = [
  "Northwind",
  "Lumina",
  "Vertex",
  "Kaizen",
  "Orbita",
  "Foundry",
];

function Mark({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 px-8 opacity-60 transition-opacity hover:opacity-100">
      <svg className="h-6 w-6 text-foreground" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 14l3.5-5L14 13l3-4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-base font-medium tracking-tight text-foreground">{label}</span>
    </div>
  );
}

export function LogoMarquee() {
  const row = [...marks, ...marks];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex">
            {row.map((m, i) => (
              <Mark key={`${k}-${i}`} label={m} />
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
