import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Job } from "./data";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">{job.title}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{job.date}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
            {job.company.slice(0, 1)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{job.company}</p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {job.location}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm font-medium text-foreground">{job.salary}</span>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Apply
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
