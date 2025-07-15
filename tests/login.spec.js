import { test, expect } from "@playwright/test";

const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;

test.describe("login", () => {
  test("User can login", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/login/");

    await page.locator('input[name="email"]').fill(username);
    await page.locator('input[name="password"]').fill(password);

    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
  test("shows error message with invalid credentials", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/login/");

    await page.locator('input[name="email"]').fill(username);
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
