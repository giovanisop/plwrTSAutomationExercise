/* import {test, chromium, request} from '@playwright/test';
const loginPayload: {email: string, password: string} = {
    email: 'sss',
    password: 'sss'
};

test.beforeAll('Launch browser', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://automationexercise.com');
    await page.waitForLoadState('networkidle');
});

test.beforeEach('API login', async () => {
    const APIContext = await request.newContext();
    await APIContext.post('http://automationexercise.com/api/auth/login', {
        data: loginPayload
    });


});

*/