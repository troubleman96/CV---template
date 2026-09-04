import { Link } from "@tanstack/react-router";
import ctaBg from "@/assets/cta-bg.jpg";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section className="shell py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-border">
        <img
          src={ctaBg}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/45" />
        <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center md:py-28">
          <Reveal>
            <span className="eyebrow bg-white/80">Ready to See The Magic?</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section max-w-3xl text-[#1f1f1f]">
              Build a Job-Winning Resume in Minutes with CV
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-xl text-base text-[#3f3f46] md:text-lg">
              Create, optimize, and tailor your resume with smart AI—no stress, no guesswork.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-[#1f1f1f] px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
