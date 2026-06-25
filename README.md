# 🎭 plwrTSAutomationExercise — Playwright + TypeScript Test Suite

![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-latest-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![CI](https://img.shields.io/github/actions/workflow/status/giovanisop/plwrTSAutomationExercise/playwright.yml?style=flat-square&label=CI)

End-to-end and API test suite for the [Automation Exercise](https://automationexercise.com) application, built as a portfolio project to demonstrate QA automation skills using **Playwright with TypeScript**, **API testing**, **UI/API integration flows**, and **CI/CD integration via GitHub Actions**.

This is the second project in my automation portfolio. While [plwrLabSauce](https://github.com/giovanisop/plwrLabSauce) focuses on BDD/Cucumber and storageState-based session management, this project demonstrates a native Playwright test runner approach with TypeScript and REST API validation.

> 🚧 **Work in progress** — test coverage is actively being expanded.

---

## 🛠️ Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev) | Browser automation & API testing |
| [TypeScript](https://www.typescriptlang.org) | Type-safe test authoring |
| [@faker-js/faker](https://fakerjs.dev) | Random test data generation |
| [Node.js](https://nodejs.org) | Runtime |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

---

## 📁 Project Structure

```
plwrTSAutomationExercise/
├── .github/
│   └── workflows/
│       └── playwright.yml           # CI/CD pipeline definition
├── fixtures/
│   └── auth.fixture.ts              # Custom Playwright fixtures
├── hooks/
│   └── hooks.ts                     # Global test hooks
├── page-objects/
│   ├── CommonPage.ts                # Base class with shared generic methods
│   ├── HomePage.ts                  # Home page
│   ├── LoginPage.ts                 # Login / Signup entry page
│   ├── SignupPage.ts                # Account registration form
│   ├── AccountCreatedPage.ts        # Post-registration confirmation
│   ├── AccountDeletedPage.ts        # Post-deletion confirmation
│   ├── CartPage.ts                  # Shopping cart
│   └── ProductsPage.ts             # Products listing
├── test-data/
│   ├── userFactory.ts               # Faker-powered random user generator
│   └── credentials.ts               # Static credentials (env-backed)
├── tests/
│   └── userRegistration.spec.ts     # E2E: User registration scenario
├── playwright.config.ts
└── package.json
```

---

## 🧱 Architecture

### Page Object Model with `CommonPage` base class

All page objects extend `CommonPage`, which centralises reusable interaction methods so individual page classes only declare locators and page-specific logic:

| Method | Description |
|---|---|
| `clickBtnLnk(locator)` | Click any button or link |
| `fillTextBox(field, value)` | Fill any input field |
| `selectOption(list, option)` | Select a `<select>` option by label |
| `selectRadio(radio)` | Check a radio button |
| `toggleCheckBox(checkbox)` | Toggle a checkbox |
| `checkVisibility(locator)` | Assert that an element is visible |
| `checkUserLogged(user)` | Assert the logged-in username in the navbar |
| `verifyPage(url)` | Assert the current page URL |

`CommonPage` also exposes shared navbar locators (Home, Cart, Login, Products, Delete Account, Logout) available in every page object.

### Random test data with `userFactory`

`generateNewUser()` uses `@faker-js/faker` to produce a fully randomised user on every test run — email, password, full name, address, birth date, phone, and company — ensuring tests never depend on static data and can run concurrently without conflicts.

---

## ✅ Test Scenarios

| Scenario | File | Status |
|---|---|---|
| User Registration | `tests/userRegistration.spec.ts` | ✅ Passing |

Each scenario is broken into `test.step()` blocks that match the original test case steps, making reports readable without needing to inspect the code.

---

## 🚀 Running Locally

### Prerequisites

- Node.js 24+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/giovanisop/plwrTSAutomationExercise.git
cd plwrTSAutomationExercise

# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps
```

### Run tests

```bash
# Run all tests
npx playwright test

# Run with UI mode (interactive)
npx playwright test --ui

# Run with headed browser
npx playwright test --headed

# Open the HTML report after a run
npx playwright show-report
```

---

## ⚙️ CI/CD

Every push and pull request to `main`/`master` triggers the GitHub Actions pipeline, which:

1. Installs dependencies with `npm ci`
2. Installs Playwright browsers
3. Runs the full test suite
4. Uploads the `playwright-report/` folder as a pipeline artifact (retained for 30 days)

---

## 👤 Author

**Giovani Ouro Preto** — QA Engineer | Playwright & Functional Testing | Senior Technical Business Analyst | Systems Analyst Background | SDLC Vision | SQL Specialist | International Projects

[LinkedIn](https://linkedin.com/in/giovanisop) · [GitHub](https://github.com/giovanisop)
