import { expect, test } from "@playwright/test";

const hasLiveTarget = Boolean(process.env.FM_BASE_URL);

test.beforeEach(async ({ page }) => {
  test.skip(Boolean(process.env.CI) && !hasLiveTarget, "Set the FM_BASE_URL repository variable to run browser tests against a deployment.");
  try {
    await page.goto("/", { waitUntil: "domcontentloaded", timeout: 25_000 });
  } catch {
    test.skip(true, "The portfolio deployment is not reachable from this runner yet.");
  }
});

test("home page presents Jahnawi's profile and real sections", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jahnawi Agrawal");
  await expect(page.getByText("Open to SDE / Backend / Full-Stack roles")).toBeVisible();
  await expect(page.getByRole("heading", { name: "A bit about me" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What I like building" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technologies I work with" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Things I built and shipped" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Where I've worked" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Let's build something useful" })).toBeVisible();
  await expect(page.getByText("LeetCode rating")).toBeVisible();
});

test("the hero uses the no-photo developer visual and profile links", async ({ page }) => {
  await expect(page.getByText("Engineering profile / 001")).toBeVisible();
  await expect(page.getByRole("link", { name: /GitHub profile of Jahnawi Agrawal/i }).first()).toHaveAttribute("href", "https://github.com/Jahnaw");
  await expect(page.getByRole("link", { name: /LinkedIn profile of Jahnawi Agrawal/i }).first()).toHaveAttribute("href", "https://linkedin.com/in/jahnawi-agrawal-1635b7284");
});

test("projects page lists all four projects and supports filtering", async ({ page }) => {
  await page.goto("/projects");
  for (const title of ["Distributed API Rate Limiting Gateway", "Smart Entry-Exit System", "DhanEase — AI Financial Advisor", "AI Agent Chatbot"]) {
    await expect(page.getByText(title).first()).toBeVisible();
  }
  const java = page.getByRole("button", { name: /^Java/ });
  await expect(java).toBeVisible();
  await java.click();
  await expect(page).toHaveURL(/tag=Java/);
});

test("API gateway case study shows implementation details and source links", async ({ page }) => {
  await page.goto("/projects/api-rate-limiting-gateway");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Distributed API Rate Limiting Gateway");
  await expect(page.getByText(/Fixed Window and Token Bucket/i).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /source code/i })).toHaveAttribute("href", "https://github.com/Jahnaw/api-rate-limiter-gateway");
});

test("contact page provides a direct email and professional profiles", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("link", { name: /email/i }).first()).toHaveAttribute("href", "mailto:jahnawiagrawal@gmail.com");
  await expect(page.getByRole("link", { name: "GitHub" }).first()).toHaveAttribute("href", "https://github.com/Jahnaw");
});

test("theme switcher changes the visual palette", async ({ page }) => {
  const html = page.locator("html");
  await expect(html).toHaveAttribute("data-theme", "bench");
  await page.getByRole("button", { name: /ink theme/i }).click();
  await expect(html).toHaveAttribute("data-theme", "ink");
  await page.getByRole("button", { name: /paper theme/i }).click();
  await expect(html).toHaveAttribute("data-theme", "paper");
});

test("unused template routes redirect back to the portfolio", async ({ page }) => {
  await page.goto("/lab");
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jahnawi Agrawal");
});
