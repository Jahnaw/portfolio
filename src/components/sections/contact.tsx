"use client";

import { ExternalLink, Mail } from "lucide-react";
import { personal, sectionIds, socials } from "@/config/portfolio";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { GitHubMark, LinkedinMark } from "@/components/github-mark";

export function Contact() {
  return (
    <section id={sectionIds.contact} className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something useful"
              lede="I'm open to software engineering opportunities where I can contribute to backend systems, full-stack products and practical AI applications."
            />
            <Reveal delay={0.12}>
              <a href={`mailto:${personal.email}`} className="panel mt-8 flex items-center gap-3 p-4 transition-colors hover:border-[var(--color-ink)]">
                <Mail size={18} className="shrink-0 text-[var(--color-signal-2)]" />
                <span className="min-w-0">
                  <span className="label block">Email</span>
                  <span className="mono block truncate text-sm">{personal.email}</span>
                </span>
                <ExternalLink size={13} className="ml-auto shrink-0 text-[var(--color-ink-3)]" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="panel panel-raised flex h-full min-h-[260px] flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-3)]">Currently looking for</p>
                <h3 className="mt-4 max-w-md font-display text-3xl leading-tight sm:text-4xl">SDE · Backend · Full-Stack</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-ink-2)]">Interested in teams that value strong fundamentals, thoughtful engineering and learning by building.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
                    {social.label === "GitHub" ? <GitHubMark size={13} /> : <LinkedinMark size={13} />}
                    {social.label}
                  </a>
                ))}
                <a href={`mailto:${personal.email}`} className="btn-bench btn-sm"><Mail size={13} /> Email me</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
