# Workflow repo for the CA

# Workflow Repo

This project includes both **unit tests**[Vitest] and **end-to-end (E2E) tests** using [Playwright](https://playwright.dev/) and environment-based configuration via `.env`.

---

## 📦 Installation

1. **Clone the repository**

   git clone https://github.com/Tjommiboy/workflow-repo-ca.git
   cd workflow-repo

   ```

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** Create a `.env` file in the root of the project based on `.env.example`.

---

## 🚀 Scripts

- **Run all Playwright E2E tests**

  ```bash
  npm run test:e2e
  ```

- **Run Playwright tests in UI mode**

  ```bash
  npx playwright test --ui
  ```

- **Install Playwright browsers**

  ```bash
  npx playwright install
  ```

- **Run unit tests**

  ```bash
  npm run test:unit
  ```

---

## 📁 Test Structure

- **Unit tests** are located in the [`utils`](./utils) folder.    Run : npm run test\:unit
- **End-to-end (E2E) tests** are located in the [`tests`](./tests) folder.  Run\:npm run test\:e2e

---

## 🔐 Environment Variables

Create a `.env` file with the follobwing keys:

```
TEST_USERNAME=
TEST_PASSWORD=
```

> ⚠️ Do not commit actual values. Use `.env.example` as a template.

---

## ✅ Example E2E Test

```js
test("user can login", async ({ page }) => {
  await page.goto("/login");
  await page.locator('input[name="email"]').fill(process.env.TEST_USERNAME);
  await page.locator('input[name="password"]').fill(process.env.TEST_PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
});
```

---

Let me know if you want badges, GitHub Actions setup, or contribution guidelines added.
