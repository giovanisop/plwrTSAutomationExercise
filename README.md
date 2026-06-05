# 🎭 plwrTSAutomationExercise — Playwright + TypeScript Test Suite

![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-latest-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![CI](https://img.shields.io/github/actions/workflow/status/giovanisop/plwrTSAutomationExercise/playwright.yml?style=flat-square&label=CI)

End-to-end and API test suite for the [Automation Exercise](https://automationexercise.com) application, built as a portfolio project to demonstrate QA automation skills using **Playwright with TypeScript**, **API testing**, **UI/API integration flows**, and **CI/CD integration via GitHub Actions**.

This is the second project in my automation portfolio. While [plwrLabSauce](https://github.com/giovanisop/plwrLabSauce) focuses on BDD/Cucumber and storageState-based session management, this project demonstrates a native Playwright test runner approach with TypeScript and REST API validation.

> 🚧 **Work in progress** — project structure and test coverage are actively being built out.

---

## 🛠️ Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev) | Browser automation & API testing |
| [TypeScript](https://www.typescriptlang.org) | Type-safe test authoring |
| [Node.js](https://nodejs.org) | Runtime |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

---

## 📁 Project Structure

```
plwrTSAutomationExercise/
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI/CD pipeline definition
├── tests/                        # Test specs (structure evolving)
├── page-objects/                 # Page Object Model classes
├── playwright.config.ts          # Playwright configuration
└── package.json
```

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
