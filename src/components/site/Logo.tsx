import logoImg from "../../assets/logo.png";

interface LogoProps {
  className?: string;
  /** Size in pixels for the square logo icon. Default 32. */
  size?: number;
  /** Show the brand name text next to the logo. Default true. */
  showName?: boolean;
}

/**
 * Square logo mark only (the yellow :C icon).
 */
export function LogoMark({
  className = "h-8 w-8",
  size,
}: {
  className?: string;
  size?: number;
}) {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <img
      src={logoImg}
      alt="CV logo"
      className={`rounded-lg object-contain ${className}`}
      style={style}
      draggable={false}
    />
  );
}

/**
 * Full logo: icon + brand name.
 */
export function Logo({ className = "", showName = true, size }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark size={size ?? 32} className="" />
      {showName && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          CV
        </span>
      )}
    </span>
  );
}
