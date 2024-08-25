# Basic Cypress Course

## Introduction

Welcome to the Basic Cypress Course! This course will guide you through the fundamental concepts of Cypress, a powerful tool for end-to-end testing. By the end of this course, you'll have a solid understanding of how to write and run tests using Cypress.

## Pre-requirements

Before you start, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (Version `v16.13.2` at the time of writing)
- npm (Version `8.3.2` at the time of writing)

You can verify the installation by running the following commands in your terminal:

```bash
node -v
npm -v
```
## Installation
Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

This tests run in desktop or simulation mobile viewport.

### Desktop

Run `npm test` (or `npm t` for the short version) to run the test in headless mode to run a desktop viewport.
Or, run `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.

### Mobile

Run `npm run test:mobile` (or `npm t` for the short version) to run the test in headless mode on a mobile viewport .
Or, run `npm run cy:open:modile` to open Cypress in interactive mode on a mobile viewport.
