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
├── api-utils/
│   └── UserAPI.ts                   # Playwright API request wrapper for user operations
├── common-steps/
│   ├── globalSteps.ts               # Reusable steps shared across all specs (navigation, home page)
│   └── userRegSteps.ts              # Reusable steps specific to registration/login flows
├── fixtures/
│   ├── auth.fixture.ts              # Custom Playwright fixtures
│   └── userFixture.ts               # Fixture that creates a user via API before each test and deletes after
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
│   ├── userRegistration.spec.ts     # E2E and E2E+API user registration scenarios
│   └── userLogin.spec.ts            # E2E and E2E+API user login/logout scenarios
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

### API utility layer with `UserAPI`

`UserAPI` wraps Playwright's built-in `request` context to interact with the automationexercise.com REST API directly. It is used in hybrid E2E+API scenarios to set up or tear down state (create/delete accounts) without going through the browser, keeping tests faster and more reliable. All endpoints use `application/x-www-form-urlencoded` as the request content type.

### Playwright Fixture for API-managed user lifecycle

`userFixture.ts` extends the native Playwright `test` with a `userAPI` fixture that automatically creates a user via API before the test runs and deletes it after — including on test failure. Tests that inject `userAPI` get a ready-to-use account with no manual setup or teardown. Tests that manage their own user lifecycle (e.g. deleting via the UI) skip the fixture and instantiate `UserAPI` directly.

### Reusable step helpers in `common-steps`

Common `test.step()` blocks that repeat across multiple specs are extracted into helper functions in the `common-steps` folder, keeping individual spec files lean. `globalSteps.ts` holds cross-domain steps (navigation, home page checks); `userRegSteps.ts` holds steps specific to the registration and login flows.

---

## ✅ Test Scenarios

| Scenario | Type | File | Status |
|---|---|---|---|
| User Registration | E2E | `tests/userRegistration.spec.ts` | ✅ Passing |
| Register User with existing email | E2E + API | `tests/userRegistration.spec.ts` | ✅ Passing |
| Login User with correct email and password | E2E + API | `tests/userLogin.spec.ts` | ✅ Passing |
| Login User with incorrect email and password | E2E + API | `tests/userLogin.spec.ts` | ✅ Passing |
| Logout User | E2E + API | `tests/userLogin.spec.ts` | ✅ Passing |

Each scenario is broken into `test.step()` blocks that match the original test case steps, making reports readable without needing to inspect the code.

**E2E + API** scenarios use `UserAPI` to set up (and tear down) the user account via REST API, while the browser validates the UI behaviour — demonstrating UI/API integration testing patterns.

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
