import { type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class AccountCreatedPage extends CommonPage {
    readonly accountCreatedTxt:Locator;
    readonly continueBtn:Locator;

    constructor(public readonly page:Page) {
        super(page);
        
        this.accountCreatedTxt = page.getByText('ACCOUNT CREATED!');
        this.continueBtn = page.getByRole('link', {name : 'Continue'});

    }

}
export default AccountCreatedPage;