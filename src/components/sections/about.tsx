"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { highlights, personal, sectionIds, services, skillGroups } from "@/config/portfolio";
import { Reveal, SectionHeading, StaggerGroup, StaggerItem, TiltCard } from "@/components/motion-primitives";

export function Services() {
  return (
    <section id={sectionIds.services} className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Focus areas"
          title="What I like building"
          lede="I enjoy working across backend systems, full-stack applications and AI-powered product features."
        />
        <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <TiltCard max={3} className="h-full">
                  <article className="panel panel-raised group relative h-full overflow-hidden p-6">
                    <div aria-hidden className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 bg-[var(--color-signal)] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                    <Icon size={22} className="text-[var(--color-signal-2)]" aria-hidden />
                    <h3 className="mt-4 text-xl">{service.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-ink-2)]">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {service.skills.map((skill) => <li key={skill} className="chip">{skill}</li>)}
                    </ul>
                  </article>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id={sectionIds.about} className="border-b border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-paper-2)_45%,transparent)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="panel panel-raised relative mx-auto flex aspect-[5/6] w-full max-w-sm flex-col justify-between overflow-hidden p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4">
                <span className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-3)]">About / profile</span>
                <span className="chip chip-live">Available</span>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-3)]">Hello, I'm</p>
                <p className="mt-2 font-display text-6xl font-semibold tracking-[-0.07em] sm:text-7xl">Jahnawi<span className="text-[var(--color-signal-2)]">.</span></p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink-2)]">Curious about how reliable software is designed, built and improved.</p>
              </div>
              <div className="border-t border-[var(--color-line)] pt-4">
                <p className="mono text-[10px] uppercase tracking-widest text-[var(--color-ink-3)]">Current interests</p>
                <p className="mt-2 text-sm">Backend systems · APIs · AI applications</p>
              </div>
              <div aria-hidden className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border border-[var(--color-signal-2)] opacity-20" />
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="About" title="A bit about me" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-[var(--color-ink-2)]">{personal.shortBio}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--color-ink-2)]">{personal.longBio[0]}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <dl className="mt-8 divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
                {highlights.map((item) => (
                  <div key={item.label} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
                    <dt className="label pt-0.5">{item.label}</dt>
                    <dd className="text-sm text-[var(--color-ink)]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.28}>
              <Link href="/about" className="btn-bench mt-8">More about me <ArrowRight size={14} /></Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id={sectionIds.skills} className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Technologies I work with"
          lede="A selection of languages, frameworks and tools I've used across internships and projects."
        />
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={group.title}>
                <div className="panel h-full p-6">
                  <div className="flex items-center gap-2.5">
                    <Icon size={17} className="text-[var(--color-signal-2)]" />
                    <h3 className="text-lg">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => <li key={skill} className="chip">{skill}</li>)}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
