import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
] as const;

const pageLinks = [
  { to: "/blog", label: "Blog" },
  { to: "/jobs", label: "Job Board" },
  { to: "/resume", label: "Resume Scan" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
      <div className="shell">
        <nav
          className={cn(
            "flex items-center justify-between gap-3 rounded-full border border-border/70 bg-background/85 px-3 py-2 backdrop-blur-xl transition-shadow duration-300 md:px-4",
            scrolled ? "shadow-soft" : "shadow-none",
          )}
        >
          <Link to="/" className="shrink-0 pl-1" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {mainLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPagesOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pages
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", pagesOpen && "rotate-180")}
                />
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full w-52 -translate-x-1/2 pt-3 transition-all duration-200",
                  pagesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                <div className="rounded-2xl border border-border bg-popover p-2 shadow-lift">
                  {pageLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Login
            </Link>
            <Link
              to="/resume"
              className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
            >
              Start Now
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "mt-2 overflow-hidden rounded-3xl border border-border bg-background shadow-lift transition-all duration-300 lg:hidden",
            open ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0",
          )}
        >
          <div className="flex flex-col p-3">
            {[...mainLinks, ...pageLinks].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/resume"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
