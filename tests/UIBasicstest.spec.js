const { test, expect } = require("@playwright/test");

test("Page Playwright test1", async ({ page }) => {
  await page.goto("https://www.linkedin.com/");
  console.log(await page.title());
});

test("Page Playwright test2", async ({ page }) => {
  await page.goto("https://www.google.com/");

  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
