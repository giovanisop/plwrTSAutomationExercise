import { expect, type Locator, type Page } from "@playwright/test";

class CommonPage {
    readonly homeLink:Locator;
    readonly cartLink:Locator;
    readonly loginLink:Locator;
    readonly productsLink:Locator;

    constructor(public readonly page:Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: ' Home' });
        this.cartLink = page.getByRole('link', { name: ' Cart' });
        this.loginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.productsLink = page.getByRole('link', { name: ' Products' });
    }
    async goToProductsPage() {
        await this.productsLink.click();
    }
    async goToLoginPage() {
        await this.loginLink.click();
    }
    async goToCartPage() {
        await this.cartLink.click();
    }
    async verifyPage(url:string) {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(url);
    }
}
export default CommonPage;