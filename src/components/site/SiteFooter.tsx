import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const company = [
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

const resources = [
  { to: "/blog", label: "Blog" },
  { to: "/jobs", label: "Job Board" },
  { to: "/resume", label: "Resume Scan" },
  { to: "/features", label: "Templates" },
] as const;

export function SiteFooter() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              CV helps you write, optimize, and design a job-ready resume with AI — so you
              spend less time editing and more time interviewing.
            </p>
            <div className="mt-6 flex gap-2">
              {["In", "X", "Db", "Be"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" links={company} />
          <FooterCol title="Resources" links={resources} />

          <div>
            <h3 className="text-sm font-semibold text-foreground">Stay in the loop</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Career tips and product updates. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={onSubmit} className="mt-4">
              <div className="flex items-center gap-2 rounded-full border border-border bg-background p-1.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-0.5"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {sent ? (
                <p className="mt-3 text-sm text-primary">
                  Thank you! Your submission has been received.
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} CV. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ to: string; label: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l, i) => (
          <li key={`${l.to}-${i}`}>
            <Link
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
