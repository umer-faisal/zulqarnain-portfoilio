import { expect, test } from "@playwright/test";

test("desktop export: navigation, services, fonts, and motion have no runtime errors", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("h1")).toHaveText("Z.S Productions");
  await expect(page.locator(".hero-portrait img")).toBeVisible();
  await expect(page.locator(".wordmark img")).toHaveAttribute("src", "/images/zs-productions-logo.png");
  await expect(page.locator(".hero-portrait img")).toHaveAttribute("src", "/images/zs.png");
  await page.waitForTimeout(2200);
  await page.screenshot({ path: "test-results/desktop-hero.png" });
  for (const section of ["about", "work", "services", "contact"]) {
    await page.locator(`.main-nav a[href='#${section}']`).click();
    await expect(page).toHaveURL(new RegExp(`#${section}$`));
    await expect(page.locator(`#${section}`)).toBeInViewport();
  }
  await page.locator("#services").scrollIntoViewIfNeeded();
  const production = page.locator("details").nth(1);
  await production.locator("summary").click();
  await expect(production).toHaveAttribute("open", "");
  await expect(production.locator(".service-body")).toBeVisible();
  await production.locator("summary").click();
  await expect(production).not.toHaveAttribute("open", "");
  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1300);
  await page.screenshot({ path: "test-results/desktop-work.png" });
  expect(errors).toEqual([]);
});

test("mobile: no overflow, menu focus trap, escape, and anchor closing", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForTimeout(2200);
  await page.screenshot({ path: "test-results/mobile-hero.png" });
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const toggle = page.locator(".menu-toggle");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".main-nav a").first()).toBeFocused();
  await page.locator(".main-nav a").last().focus();
  await page.keyboard.press("Tab");
  await expect(toggle).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.locator(".main-nav a[href='#work']").click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#work")).toBeFocused();
  await expect(page.locator("#work")).toBeInViewport();
});

test("reduced motion preserves visible content and native navigation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero-name")).toHaveCSS("opacity", "1");
  await expect(page.locator(".hero-name")).toHaveCSS("transform", "none");
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await page.locator(".main-nav a[href='#about']").click();
  await expect(page.locator("#about h2")).toHaveCSS("opacity", "1");
  await page.screenshot({ path: "test-results/desktop-about.png" });
});

test("core content is readable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("#about h2")).toHaveCSS("opacity", "1");
  await context.close();
});
