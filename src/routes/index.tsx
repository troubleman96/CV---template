import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Scan,
  LayoutTemplate,
  MessageSquareQuote,
  Search,
  Rocket,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";

import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ResumeMock } from "@/components/site/ResumeMock";
import { JobCard } from "@/components/site/JobCard";
import { FaqList } from "@/components/site/FaqList";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { jobs, testimonials, benefits } from "@/components/site/data";

export const Route = createFileRoute("/")({
  component: Index,
});

const benefitIcons = {
  scan: Scan,
  layout: LayoutTemplate,
  feedback: MessageSquareQuote,
  search: Search,
  rocket: Rocket,
  portfolio: Briefcase,
};

function Index() {
  const [activeTemplate, setActiveTemplate] = useState<"clean" | "sidebar-dark" | "header-band" | "split">("sidebar-dark");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation Header */}
      <SiteNav />

      <main className="relative pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="shell relative pb-16 pt-8 md:pb-24 md:pt-12">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-[90%] max-w-4xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="flex flex-col items-center text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen AI Resume & CV Builder</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Build a <span className="underline decoration-primary decoration-wavy decoration-2 underline-offset-4">Job-Winning</span> Resume in Minutes
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                CV uses smart AI to analyze job descriptions, optimize ATS keywords, and format professional resumes designed to land interviews.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
                >
                  Create Resume Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#templates"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary"
                >
                  View Templates
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  ATS Friendly
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  No Credit Card Required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Instant Download
                </span>
              </div>
            </Reveal>
          </div>

          {/* HERO VISUAL MOCKUP SHOWCASE */}
          <div className="mt-14 md:mt-20">
            <Reveal delay={300}>
              <div className="relative mx-auto max-w-5xl rounded-3xl border border-border/80 bg-card p-4 shadow-lift md:p-8">
                <div className="grid gap-6 md:grid-cols-12 md:items-center">
                  <div className="space-y-4 md:col-span-5">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                      <Zap className="h-3.5 w-3.5 text-primary" />
                      Live AI Optimization
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      Real-Time ATS Keyword Scoring
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Get real-time feedback on how well your CV matches target roles. Our intelligent editor suggests impactful action verbs and missing skills.
                    </p>
                    <div className="space-y-2 pt-2">
                      {[
                        "Automatically detects ATS compliance issues",
                        "Generates bullet points tailored to your role",
                        "Exports clean, high-resolution PDF & Word formats",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Link
                        to="/resume"
                        className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-border"
                      >
                        Try Live Resume Scanner
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <div className="grid grid-cols-2 gap-4">
                      <ResumeMock variant="sidebar-dark" name="Alexander Wright" role="Senior Full-Stack Engineer" />
                      <ResumeMock variant="split" name="Elena Rostova" role="Product Design Lead" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <section className="border-y border-border bg-surface/50 py-10">
          <div className="shell text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Empowering job seekers hired at industry leaders
            </p>
            <div className="mt-6">
              <LogoMarquee />
            </div>
          </div>
        </section>

        {/* FEATURES / BENEFITS SECTION */}
        <section className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Why Choose CV"
            title="Everything You Need to Win Your Next Role"
            description="Designed from the ground up to give candidates a competitive edge with modern ATS technology and clean design."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const IconComp = benefitIcons[b.icon] || Sparkles;
              return (
                <Reveal key={b.title} delay={i * 60}>
                  <div className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* TEMPLATES PREVIEW SECTION */}
        <section id="templates" className="border-t border-border bg-surface/40 py-20 md:py-28">
          <div className="shell">
            <SectionHeading
              eyebrow="Curated Templates"
              title="Modern, Recruiter-Approved Layouts"
              description="Switch seamlessly between clean, modern, executive, and minimal templates with a single click."
            />

            {/* Template Selector Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {[
                { id: "sidebar-dark", label: "Executive Dark" },
                { id: "split", label: "Modern Split" },
                { id: "header-band", label: "Header Band" },
                { id: "clean", label: "Minimalist Clean" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTemplate(t.id as any)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                    activeTemplate === t.id
                      ? "bg-foreground text-background shadow-soft"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Template Gallery Display */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={0}>
                <div className={`cursor-pointer transition-all ${activeTemplate === "sidebar-dark" ? "scale-105 ring-2 ring-primary rounded-xl" : ""}`}>
                  <ResumeMock variant="sidebar-dark" name="Marcus Vance" role="Lead Systems Architect" />
                  <p className="mt-3 text-center text-xs font-semibold text-foreground">Executive Dark</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className={`cursor-pointer transition-all ${activeTemplate === "split" ? "scale-105 ring-2 ring-primary rounded-xl" : ""}`}>
                  <ResumeMock variant="split" name="Sarah Jenkins" role="Head of Growth" />
                  <p className="mt-3 text-center text-xs font-semibold text-foreground">Modern Split</p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className={`cursor-pointer transition-all ${activeTemplate === "header-band" ? "scale-105 ring-2 ring-primary rounded-xl" : ""}`}>
                  <ResumeMock variant="header-band" name="David Chen" role="Financial Analyst" />
                  <p className="mt-3 text-center text-xs font-semibold text-foreground">Header Band</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className={`cursor-pointer transition-all ${activeTemplate === "clean" ? "scale-105 ring-2 ring-primary rounded-xl" : ""}`}>
                  <ResumeMock variant="clean" name="Amara Okafor" role="Product Designer" />
                  <p className="mt-3 text-center text-xs font-semibold text-foreground">Minimalist Clean</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RECENT OPPORTUNITIES / JOB BOARD PREVIEW */}
        <section className="shell py-20 md:py-28">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <SectionHeading
              eyebrow="Explore Roles"
              title="Featured Job Opportunities"
              description="Matching top talent with high-growth remote and global positions."
              align="left"
            />
            <Link
              to="/jobs"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary"
            >
              Explore All Jobs
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.slice(0, 3).map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="border-t border-border bg-surface/50 py-20 md:py-28">
          <div className="shell">
            <SectionHeading
              eyebrow="Success Stories"
              title="Loved by Job Seekers Worldwide"
              description="Here is what candidates have to say about their experience using CV."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((item, idx) => (
                <Reveal key={item.name} delay={idx * 80}>
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <div>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-foreground">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Find quick answers to common questions about CV, ATS optimization, and account features."
          />

          <div className="mt-12">
            <FaqList />
          </div>
        </section>

        {/* CALL TO ACTION */}
        <CtaSection />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
