import { expect, type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class CartPage extends CommonPage {
    readonly emptyCart:Locator;
    readonly linkProductsPage:Locator;

    constructor(public readonly page:Page) {
        super(page);
        this.emptyCart = page.locator('#empty-cart');
        this.linkProductsPage = this.emptyCart.getByRole('link', { name: 'here' });
    }

    async checkCartEmpty(){
        await expect(this.emptyCart).toBeVisible();
    }

    async goBackToProductsPage(){
        await this.linkProductsPage.click();
    }


}

export default CartPage;