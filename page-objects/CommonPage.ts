import { expect, type Locator, type Page } from "@playwright/test";

class CommonPage {
    readonly body:Locator;
    readonly homePageLnk:Locator;
    readonly cartPageLnk:Locator;
    readonly loginPageLnk:Locator;
    readonly productsPageLnk:Locator;
    readonly deleteAccLnk:Locator;
    readonly contactUsLnk:Locator;
    readonly logoutLnk:Locator;
    readonly testCaseLnk:Locator;
    readonly userLogged:Locator;
    readonly subscriptionTxt:Locator;
    readonly subscriptionMsg:Locator;
    readonly subscriptionImp:Locator;
    readonly subscriptionBtn:Locator;

    constructor(public readonly page:Page) {
        this.page = page;
        this.body = page.locator('body');
        this.homePageLnk = page.locator('li').getByRole('link', { name: ' Home' });
        this.cartPageLnk = page.locator('li').getByRole('link', { name: ' Cart' });
        this.loginPageLnk = page.locator('li').getByRole('link', { name: ' Signup / Login' });
        this.productsPageLnk = page.locator('li').getByRole('link', { name: ' Products' });
        this.deleteAccLnk = page.locator('li').getByRole('link', {name : 'Delete Account'});
        this.logoutLnk = page.locator('li').getByRole('link', {name : 'Logout'});
        this.contactUsLnk = page.locator('li').getByRole('link', {name : 'Contact us'});
        this.testCaseLnk = page.locator('li').getByRole('link', {name : 'Test Cases'});
        this.userLogged = page.locator('.navbar-nav li').filter({ hasText: 'Logged in as' }).locator('b');
        this.subscriptionTxt = page.getByText('Subscription');
        this.subscriptionMsg = page.getByText('You have been successfully subscribed!');
        this.subscriptionImp = page.locator('#susbscribe_email');
        this.subscriptionBtn = page.locator('#subscribe');
    }

    async verifyPage(url:string, retries = 2) {
        await this.page.waitForLoadState('networkidle');

        // Google Vignette ad on automationexercise.com can hijack a click and
        // append '#google_vignette' to the current URL without navigating.
        // Dismiss it and retry so the assertion isn't flaky on CI.
        for (let attempt = 0; attempt < retries && this.page.url().includes('google_vignette'); attempt++) {
            await this.page.keyboard.press('Escape');
            await this.page.waitForTimeout(500);
            await this.page.waitForLoadState('networkidle');
        }

        await expect(this.page).toHaveURL(url);
    }

    async clickBtnLnk(locator:Locator) {
        await locator.click();
    }

    async fillTextBox(field:Locator, value:string) {
        await field.fill(value);
    }

    async toggleCheckBox(checkbox:Locator){
        // check is not checked // uncheck if is checked
        await checkbox.click();
    }

    async selectOption(list:Locator, option:string) {
        await list.selectOption({label : option});
    }

    async selectRadio(radio:Locator){
        await radio.check();
    }

    async checkVisibility(locator:Locator) {
        await expect(locator).toBeVisible();
    }

    async checkUserLogged(user:string) {
        await expect(this.userLogged).toHaveText(user);
    }

    async checkInViewport(locator:Locator) {
        await expect(locator).toBeInViewport();
    }

    async scrollDownToFooter() {
        await this.body.click();
        await this.page.keyboard.press('End');
    }
}
export default CommonPage;