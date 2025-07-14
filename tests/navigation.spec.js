import { test, expect } from "@playwright/test";
test.describe("navigation", () => {
  test("navigates to home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
  });
  test("Waits for the venue list to load", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#venue-container")).toBeVisible();
  });
  test("navigates to home page, waits for venue list, and clicks the first venue, expect venue to contain text=Venue details", async ({
    page,
  }) => {
    await page.goto("/");

    const cards = page.locator("#venue-container a");

    await cards.first().click();

    await expect(page).toHaveURL(/\/venue\/\?id=/);

    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
