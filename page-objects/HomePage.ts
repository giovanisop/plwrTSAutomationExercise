import { type Page, type Locator } from "@playwright/test";
import CommonPage from "./CommonPage";

class HomePage extends CommonPage {
    readonly carrousel:Locator;

    constructor(public readonly page:Page) {
        super(page);
        this.carrousel = page.locator('#slider-carousel');
    }
}
export default HomePage;
