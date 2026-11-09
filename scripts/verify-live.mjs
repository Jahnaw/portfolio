/**
 * Smoke-check the public portfolio routes and identity links.
 *
 * Usage:
 *   node scripts/verify-live.mjs [baseUrl]
 *   JAHNAWI_PORTFOLIO_URL=https://your-domain.example node scripts/verify-live.mjs
 */
import process from "node:process";

const DEFAULT_BASE = process.env.JAHNAWI_PORTFOLIO_URL ?? "https://jahnawi-portfolio.vercel.app";
const base = (process.argv[2] ?? DEFAULT_BASE).replace(/\/$/, "");
const expectedLinks = [
  "https://github.com/Jahnaw",
  "https://linkedin.com/in/jahnawi-agrawal-1635b7284",
  "https://github.com/Jahnaw/api-rate-limiter-gateway",
  "https://github.com/Jahnaw/smart-entry-exit",
  "https://github.com/Jahnaw/DhanEase",
  "https://github.com/Jahnaw/Chatbot"
];
const routes = ["/", "/about", "/projects", "/projects/api-rate-limiting-gateway", "/projects/smart-entry-exit", "/projects/dhanease", "/projects/ai-agent-chatbot", "/experience", "/contact"];
let failed = 0;

console.log(`\nChecking ${base}\n${"─".repeat(56)}`);
for (const route of routes) {
  try {
    const response = await fetch(`${base}${route}`, { redirect: "follow" });
    const ok = response.status === 200;
    console.log(`${ok ? "PASS" : "FAIL"}  ${route} — HTTP ${response.status}`);
    if (!ok) failed++;
  } catch (error) {
    failed++;
    console.log(`FAIL  ${route} — ${error instanceof Error ? error.message : String(error)}`);
  }
}

try {
  const response = await fetch(base);
  const html = await response.text();
  for (const link of expectedLinks) {
    const ok = html.includes(link);
    console.log(`${ok ? "PASS" : "FAIL"}  homepage contains ${link}`);
    if (!ok) failed++;
  }
  const nameOk = html.includes("Jahnawi Agrawal");
  console.log(`${nameOk ? "PASS" : "FAIL"}  homepage identifies Jahnawi Agrawal`);
  if (!nameOk) failed++;
} catch (error) {
  failed++;
  console.log(`FAIL  homepage link checks — ${error instanceof Error ? error.message : String(error)}`);
}

console.log(`${"─".repeat(56)}\n${failed === 0 ? "All checks passed." : `${failed} check(s) failed.`}`);
process.exit(failed === 0 ? 0 : 1);
