import { expect, type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class ProductsPage extends CommonPage {
    readonly productsItems:Locator;

    constructor(public readonly page:Page) {
        super(page);
        this.productsItems = page.locator('.features_items');
    }

    //typescriot require you to declare what is the type of the return you are going to return, so this is why the Promise below is set
    async getItem(itemName:string): Promise<Locator> {
        const singleItem = this.productsItems.filter({ hasText: itemName });
        await expect(singleItem).toBeVisible();
        return singleItem;
    }

    async getItemPrice(item:Locator): Promise<number>  {
        const price = await item.locator('h2').textContent();
        // ?? is as same for coalesce in cobol where if the left value is null or undefined then it will return the right value otherwise it will return the left value
        return parseFloat((price ?? '0').replace('Rs. ', ''));
    }

    async addItemToCart(item:Locator){
        const addToCartBtn = item.locator('.btn btn-default add-to-cart');
        await addToCartBtn.click();
    }
}

export default ProductsPage;