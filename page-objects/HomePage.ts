import { type Page, type Locator } from "@playwright/test";
import CommonPage from "./CommonPage";

class HomePage extends CommonPage {
    readonly carrousel:Locator;
    readonly headerTxt:Locator;
    readonly arrowUpLnk:Locator;

    constructor(public readonly page:Page) {
        super(page);
        this.carrousel = page.locator('#slider-carousel');
        this.headerTxt = page.getByText('Full-Fledged practice website for Automation Engineers').first();
        this.arrowUpLnk = page.locator('#scrollUp');
    }

    async scrollUpToHeader() {
        await this.body.click();
        await this.page.keyboard.press('Home');
    }
}
export default HomePage;
