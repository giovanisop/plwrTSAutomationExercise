import { type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

export default class TestCasesPage extends CommonPage {

    constructor(public readonly page:Page) {
        super(page);
    }

}
