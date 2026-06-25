import { type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class AccountDeletedPage extends CommonPage {
    readonly accountDeletedTxt:Locator;
    readonly continueBtn:Locator;

    constructor(public readonly page:Page) {
        super(page);
        this.accountDeletedTxt = page.getByText('ACCOUNT DELETED!');
        this.continueBtn = page.getByRole('link', {name : 'Continue'});
    }

}
export default AccountDeletedPage;