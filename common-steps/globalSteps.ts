// helpers to reuse steps when they repeat among tests

import { test, type Page } from '@playwright/test';
import type HomePage from '../page-objects/HomePage';

// navigation section
export async function navigateToHome(page: Page) {
    await test.step("And I Navigate to automationexercise.com", async () => {
        await page.goto('https://automationexercise.com');
    });
}

// assertions section
export async function checkHomePage(homePage: HomePage) {
    await test.step("And Verify that home page is successfully visible", async () => {
        await homePage.checkVisibility(homePage.carrousel);
    });
}