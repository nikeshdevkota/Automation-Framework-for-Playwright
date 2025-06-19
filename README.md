# Playwright Cucumber Automation Framework

This repository contains an end-to-end automation framework using Playwright and Cucumber.js for robust, maintainable, and scalable web application testing.

## Features
- Page Object Model (POM) structure
- Cucumber BDD with feature files and step definitions
- Tag-based selective test execution (e.g., @login, @positive, @e2e)
- Parallel and cross-browser testing (Chrome, Firefox)
- CI/CD pipeline with GitHub Actions
- Automatic HTML report generation and upload for every run
- Easy locator maintenance (all selectors in constructors)

## Getting Started

### Install dependencies
```bash
npm install
```

### Run tests
- All tests: `npm test`
- By tag: `npm run test:tag:positive` (or `negative`, `purchase`, etc.)
- By browser and flow: `npm run test:login:chrome:headless`, `npm run test:e2e:firefox:headed`, etc.
- Parallel: `npm run test:login:parallel`, `npm run test:e2e:parallel`

### CI/CD
- On every push to `main`, the pipeline extracts the commit message and runs only the relevant tagged tests (`positive`, `negative`, `purchase`).
- Generates a single HTML report per run, downloadable from the GitHub Actions artifacts.

## Project Structure
- `tests/features/` — Feature files (Gherkin)
- `tests/pages/` — Page Object Model classes
- `tests/steps/` — Step definitions and world setup
- `.github/workflows/ci.yml` — GitHub Actions workflow

## Maintainer
Created by **Nikesh Devkota** 