import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import fs from "node:fs";
import { chromium } from "@playwright/test";

const root = path.resolve("out");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
};

const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory())
      file = path.join(file, "index.html");
    response.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
    });
    response.end(await readFile(file));
  } catch {
    response.writeHead(404).end("Not found");
  }
});

server.listen(4173, "127.0.0.1", async () => {
  console.log("Static server running on http://127.0.0.1:4173");
  fs.mkdirSync("test-results", { recursive: true });

  const browser = await chromium.launch({ channel: "chrome" });
  const viewports = [
    { name: "mobile-375", width: 375, height: 667 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "laptop-1280", width: 1280, height: 800 },
    { name: "desktop-1920", width: 1920, height: 1080 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("http://127.0.0.1:4173/");
    await page.evaluate(() => document.fonts.ready);
    // Wait for GSAP animation to settle
    await page.waitForTimeout(1600);

    const navBox = await page.locator(".site-header").boundingBox();
    const eyebrowBox = await page.locator(".hero-overline").boundingBox();
    const headlineBox = await page.locator(".hero-title").boundingBox();
    const subtitlesBox = await page.locator(".hero-subtitles").boundingBox();

    console.log(`\n=== Viewport ${vp.name} (${vp.width}x${vp.height}) ===`);
    console.log("Navbar bottom:", navBox.y + navBox.height);
    console.log("Eyebrow top:", eyebrowBox.y, "bottom:", eyebrowBox.y + eyebrowBox.height);
    console.log("Headline top:", headlineBox.y, "bottom:", headlineBox.y + headlineBox.height);
    console.log("Subtitles top:", subtitlesBox.y, "bottom:", subtitlesBox.y + subtitlesBox.height);

    // Check font
    const headlineFont = await page.locator(".hero-title").evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    });
    console.log("Headline computed fontFamily:", headlineFont);

    // Take screenshot of hero
    await page.screenshot({ path: `test-results/hero-${vp.name}.png` });
    console.log(`Saved screenshot test-results/hero-${vp.name}.png`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log("\nVerification complete!");
  process.exit(0);
});
