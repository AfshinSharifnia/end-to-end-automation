const { test } = require("@playwright/test");

test("Browser playwright test", async ({ browser }) => {
  chrome - plugins / cookies;

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://Google.com");
});


test("Page Playwright test", async ({ page }) => {
  page.goto("https://google.com");
});
