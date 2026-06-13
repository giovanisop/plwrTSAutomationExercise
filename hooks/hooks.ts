import {test, chromium} from '@playwright/test';

test.beforeAll('Launch browser', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://automationexercise.com');
    await page.waitForLoadState('networkidle');
});