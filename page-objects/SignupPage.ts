import { type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class SignUpPage extends CommonPage {
    readonly accountInfoTxt:Locator;

    readonly genderMrRad:Locator;
    readonly genderMrsRad:Locator;
    readonly name:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly birthDay:Locator;
    readonly birthMonth:Locator;
    readonly birthYear:Locator;
    readonly newsletterChk:Locator;
    readonly receiveChk:Locator;
    
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly company:Locator;
    readonly address1:Locator;
    readonly address2:Locator;
    readonly countryLst:Locator;
    readonly state:Locator;
    readonly city:Locator;
    readonly zipCode:Locator;
    readonly mobile:Locator;

    readonly createAccBtn:Locator;

    constructor(public readonly page:Page){
        super(page);

        this.accountInfoTxt = page.getByText('ENTER ACCOUNT INFORMATION');

        this.genderMrRad = page.locator('#id_gender1');
        this.genderMrsRad = page.locator('#id_gender2');
        this.name = page.locator('#name');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.birthDay = page.locator('#days');
        this.birthMonth = page.locator('#months');
        this.birthYear = page.locator('#years');
        this.newsletterChk = page.locator('#newsletter');
        this.receiveChk = page.locator('#optin');

        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.company = page.locator('#company');
        this.address1 = page.locator('#address1');
        this.address2 = page.locator('#address2');
        this.countryLst = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipCode = page.locator('#zipcode');
        this.mobile = page.locator('#mobile_number');
        this.createAccBtn = page.getByRole('button', {name : 'Create Account'});
    }

}
export default SignUpPage;