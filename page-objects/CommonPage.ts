import { expect, type Locator, type Page } from "@playwright/test";

class CommonPage {
    readonly homePageLnk:Locator;
    readonly cartPageLnk:Locator;
    readonly loginPageLnk:Locator;
    readonly productsPageLnk:Locator;
    readonly deleteAccLnk:Locator;
    readonly logoutLnk:Locator;
    readonly userLogged:Locator;

    constructor(public readonly page:Page) {
        this.page = page;
        this.homePageLnk = page.getByRole('link', { name: ' Home' });
        this.cartPageLnk = page.getByRole('link', { name: ' Cart' });
        this.loginPageLnk = page.getByRole('link', { name: ' Signup / Login' });
        this.productsPageLnk = page.getByRole('link', { name: ' Products' });
        this.deleteAccLnk = page.getByRole('link', {name : 'Delete Account'});
        this.logoutLnk = page.getByRole('link', {name : 'Logout'});
        this.userLogged = page.locator('.navbar-nav li').filter({ hasText: 'Logged in as' }).locator('b');
    }

    async verifyPage(url:string) {
        await this.page.waitForLoadState('networkidle');
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
}
export default CommonPage;