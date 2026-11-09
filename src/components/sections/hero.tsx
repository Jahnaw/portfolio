"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { heroActions, heroStats, personal, socials } from "@/config/portfolio";
import { CountUp, Magnetic, Reveal, SplitText, Typewriter } from "@/components/motion-primitives";
import { GitHubMark, LinkedinMark } from "@/components/github-mark";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                {personal.availableForWork && (
                  <span className="chip chip-live">
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-signal-2)]" />
                    {personal.availableForWorkText}
                  </span>
                )}
                <span className="chip"><MapPin size={10} /> {personal.location}</span>
              </div>
            </Reveal>

            <h1 className="mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl">
              <SplitText text="Hi, I'm" as="span" />
              <br />
              <span className="inline-flex flex-wrap items-baseline gap-x-3">
                <SplitText text={personal.name} delay={0.08} as="span" />
              </span>
            </h1>

            <p className="mt-5 font-mono text-sm sm:text-base">
              <span className="text-[var(--color-ink-3)]">&gt; </span>
              <Typewriter words={personal.rotatingRoles} className="text-[var(--color-ink)]" />
            </p>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-ink-2)]">
                {personal.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {heroActions.map((action) =>
                  action.primary ? (
                    <Magnetic key={action.href}>
                      <Link href={action.href} className="btn-bench">
                        {action.label}<ArrowRight size={14} />
                      </Link>
                    </Magnetic>
                  ) : (
                    <Link key={action.href} href={action.href} className="btn-ghost">{action.label}</Link>
                  ),
                )}
                {personal.resume && (
                  <a href={personal.resume} className="btn-ghost" download>
                    <Download size={14} /> Résumé
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="mt-7 flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 items-center gap-2 border border-[var(--color-line)] px-3 text-[11px] text-[var(--color-ink-2)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                      aria-label={social.description ?? social.label}
                    >
                      {social.label === "GitHub" ? <GitHubMark size={14} /> : <LinkedinMark size={14} />}
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={34} className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div aria-hidden className="absolute -inset-3 border border-[var(--color-line)]" />
              <div aria-hidden className="absolute -right-3 -top-3 h-full w-full border border-[var(--color-signal-2)]" />
              <motion.div
                animate={reduced ? undefined : { y: [0, -7, 0] }}
                transition={reduced ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="panel panel-raised relative min-h-[390px] overflow-hidden p-6 sm:p-8"
              >
                <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4">
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-3)]">Engineering profile / 001</span>
                  <span className="flex gap-1.5" aria-hidden>
                    <i className="h-2 w-2 rounded-full bg-[var(--color-signal-2)]" />
                    <i className="h-2 w-2 rounded-full bg-[var(--color-line)]" />
                    <i className="h-2 w-2 rounded-full bg-[var(--color-line)]" />
                  </span>
                </div>
                <div className="flex min-h-[285px] flex-col justify-between">
                  <div>
                    <p className="mono mt-6 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-3)]">Software engineer</p>
                    <p className="mt-1 font-display text-[5.5rem] font-semibold leading-none tracking-[-0.08em] text-[var(--color-ink)] sm:text-[7rem]">JA<span className="text-[var(--color-signal-2)]">.</span></p>
                    <div className="mt-5 border-l-2 border-[var(--color-signal-2)] pl-4">
                      <p className="mono text-xs leading-6 text-[var(--color-ink-2)]">
                        <span className="text-[var(--color-signal-2)]">const</span> focus = [
                        <br />&nbsp;&nbsp;"backend systems",
                        <br />&nbsp;&nbsp;"full-stack products",
                        <br />&nbsp;&nbsp;"AI integration"
                        <br />];
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-6">
                    {["Java", "Node.js", "React", "MongoDB", "AWS"].map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                </div>
                <div aria-hidden className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full border border-[var(--color-signal-2)] opacity-20" />
                <div aria-hidden className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full border border-[var(--color-signal-2)] opacity-20" />
              </motion.div>
              <div className="relative mt-3 flex items-baseline justify-between gap-2">
                <p className="mono text-[10px] uppercase tracking-widest text-[var(--color-ink-3)]">{personal.name}</p>
                <p className="mono text-[10px] uppercase tracking-widest text-[var(--color-ink-3)]">IST · UTC+5:30</p>
              </div>
            </div>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:mt-20 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ ...(reduced ? {} : { duration: 0.5, delay: i * 0.06 }), ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--color-paper)] px-4 py-5"
            >
              <dt className="label">{stat.label}</dt>
              <dd className="mono mt-1.5 text-3xl leading-none sm:text-4xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
                <span className="sr-only">. {stat.hint}</span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <div aria-hidden className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block">
        <motion.div
          animate={reduced ? undefined : { y: [0, 12, 0] }}
          transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink-3)]">scroll</span>
          <span className="h-6 w-px bg-[var(--color-line)]" />
        </motion.div>
      </div>
    </section>
  );
}
