import { cn } from "@/lib/utils";

const palettes = [
  "from-[#f3a8b8] to-[#c9739a]",
  "from-[#9ec5ff] to-[#5b7cf5]",
  "from-[#ffd79a] to-[#f0a05a]",
  "from-[#a7e3c9] to-[#4fae8c]",
  "from-[#cbb7f7] to-[#8b6ce0]",
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const palette = palettes[hash(name) % palettes.length];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white",
        palette,
        className,
      )}
    >
      {initials}
    </span>
  );
}
