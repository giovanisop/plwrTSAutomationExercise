import { type Page, type Locator } from "@playwright/test";
import CommonPage from "./CommonPage";

export default class ContactUsPage extends CommonPage {
    readonly getInTouchTxt:Locator;
    readonly nameImp:Locator;
    readonly emailImp:Locator;
    readonly subjectImp:Locator;
    readonly messageImp:Locator;
    readonly fileField:Locator;
    readonly submitBtn:Locator;
    readonly successMsg:Locator;
    readonly homeBtn:Locator;
    
    constructor(public readonly page:Page) {
        super(page);
        this.nameImp = page.getByRole('textbox', { name: 'Name' });
        this.getInTouchTxt = page.getByRole('heading', { name: 'Get In Touch' });
        this.emailImp = page.getByRole('textbox', { name: 'Email', exact: true });
        this.subjectImp = page.getByRole('textbox', { name: 'Subject' });
        this.messageImp = page.getByRole('textbox', { name: 'Your Message Here' });
        this.fileField = page.locator('input[type="file"]');
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
        this.successMsg = page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.');
        this.homeBtn = page.locator('.btn.btn-success');
    }

}