import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { navigation, personal, seo, socials } from "@/config/portfolio";
import { GitHubMark } from "@/components/github-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 border-t border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-paper-2)_70%,transparent)]">
      <div aria-hidden className="filmstrip h-[5px] w-full opacity-30" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold">{personal.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">{personal.role}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink-2)]">{personal.tagline}</p>
            <a href={seo.repository} target="_blank" rel="noopener noreferrer" className="btn-bench mt-5">
              <GitHubMark size={14} /> View source code
            </a>
          </div>

          <nav aria-label="Footer pages">
            <p className="label">Explore</p>
            <ul className="mt-3 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-mono text-xs text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label">Connect</p>
            <ul className="mt-3 space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" title={social.description} className="font-mono text-xs text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]">
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${personal.email}`} className="font-mono text-xs text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]">Email</a>
              </li>
            </ul>
            <p className="mt-5 flex items-center gap-1.5 font-mono text-[10px] text-[var(--color-ink-3)]">
              <MapPin size={11} /> {personal.location} · {personal.timezone}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[10px] uppercase tracking-widest text-[var(--color-ink-3)]">© {year} {personal.name}</p>
          <p className="mono text-[10px] uppercase tracking-widest text-[var(--color-ink-3)]">Built with Next.js · React · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
