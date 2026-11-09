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

test("a visitor can navigate from the homepage through projects and contact", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jahnawi Agrawal");

  await page.getByRole("link", { name: "Projects" }).first().click();
  await expect(page).toHaveURL(/\/projects$/);
  await page.getByRole("link", { name: /case study/i }).first().click();
  await expect(page).toHaveURL(/\/projects\//);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByRole("link", { name: /all projects/i }).click();
  await page.getByRole("link", { name: "Experience" }).first().click();
  await expect(page).toHaveURL(/\/experience$/);
  await expect(page.getByRole("heading", { name: /where i've worked/i })).toBeVisible();

  await page.getByRole("link", { name: "Contact" }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("link", { name: /email/i }).first()).toHaveAttribute("href", "mailto:jahnawiagrawal@gmail.com");
});

test("mobile navigation opens and navigates", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation only.");
  await page.getByRole("button", { name: "Open menu" }).click();
  const nav = page.locator("#mobile-nav");
  await expect(nav).toBeVisible();
  await nav.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(nav).toBeHidden();
});
