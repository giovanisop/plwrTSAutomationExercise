import { expect, type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class CartPage extends CommonPage {
    readonly emptyCart:Locator;
    readonly productsPageLnk:Locator;
    readonly proceedcheckoutLnk:Locator;
    readonly homeBreadLnk:Locator;
    readonly cartItems:Locator;
    readonly registerLnk:Locator;
    readonly continueCartBtn:Locator;


    constructor(public readonly page:Page) {
        super(page);
        this.emptyCart = page.locator('#empty-cart');
        this.productsPageLnk = this.emptyCart.getByRole('link', { name: 'here' });
        this.proceedcheckoutLnk = page.getByRole('link', { name: 'Proceed to Checkout' });
        this.homeBreadLnk = page.locator('.breadcrumb').getByRole('link', { name: 'Home' });
        this.cartItems = page.locator('#cart_info_table tbody tr');
        this.registerLnk = page.getByRole('link', { name: 'Register / Login' });
        this.continueCartBtn = page.getByRole('button', { name: 'Continue On Cart' });
    }

    async checkCartEmpty(){
        await expect(this.emptyCart).toBeVisible();
    }

    async goBackToProductsPage(){
        await this.productsPageLnk.click();
    }

    async proceedToCheckout(){
        await this.proceedcheckoutLnk.click();
    }

    async goBackToHomePage(){
        await this.homeBreadLnk.click();
    }

    async getItemsCount(): Promise<number> {
        return await this.cartItems.count();
    }

    async getItem(itemName:string): Promise<Locator> {
        const singleItem = this.cartItems.filter({ hasText: itemName });
        await expect(singleItem).toBeVisible();
        return singleItem;
    }

    async getItemPrice(item:Locator): Promise<number>  {
        const price = await item.locator('.cart_price p').textContent();
        const quantity = await item.locator('.cart_quantity button').textContent();
        const totalPrice = parseFloat((price ?? '0').replace('Rs. ', '')) * parseInt(quantity ?? '0');
        return totalPrice;
    }

    async removeItem(item:Locator){
        const removeBtn = item.locator('.cart_quantity_delete');
        await removeBtn.click();
    }

    async continueCart(){  
        await this.continueCartBtn.click();
    }

    async registerOrLogin(){
        await this.registerLnk.click();
    }

}
export default CartPage;