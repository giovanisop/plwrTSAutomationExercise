import { expect, type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class HomePage extends CommonPage {

    constructor(public readonly page:Page) {
        super(page);
    }
}
export default HomePage;
