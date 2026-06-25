//userregistration.specs.ts
import { test } from '@playwright/test';
import {generateNewUser} from '../test-data/userFactory';
import HomePage from '../page-objects/HomePage';
import LoginPage from '../page-objects/LoginPage';
import SignUpPage from '../page-objects/SignupPage';
import AccountCreatedPage from '../page-objects/AccountCreatedPage';
import AccountDeletedPage from '../page-objects/AccountDeletedPage';

test('Scenario - User Registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignUpPage(page);
    const accountDeletedPage = new AccountDeletedPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const newUser = generateNewUser();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const birthDay = String(Number(newUser.birth.slice(8,10)));
    const birthMonthIndex = Number(newUser.birth.slice(5, 7));
    const birthMonth = monthNames[birthMonthIndex - 1]; 
    const birthYear = String(Number(newUser.birth.slice(0,4)));

    await test.step("Go to page automationexercise.com", async () => {    
        await page.goto('https://automationexercise.com');
    });
    await test.step("Click on 'Signup / Login' button", async () => {    
        await homePage.clickBtnLnk(homePage.loginPageLnk);
    });    
    await test.step("Verify 'New User Signup!' is visible", async () => {
        await loginPage.checkVisibility(loginPage.signupTitle);
    }); 
    await test.step("Enter name and email adress", async () => {
        await loginPage.fillTextBox( loginPage.signupEmail, newUser.email);
        await loginPage.fillTextBox( loginPage.signupName, newUser.name);
    });
    await test.step("Click 'Signup' button", async () => {
        await loginPage.clickBtnLnk(loginPage.signupBtn);
    });
    await test.step("Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
        await signupPage.checkVisibility(signupPage.accountInfoTxt);
    });
    await test.step("Fill details: Title, Name, Email, Password, Date of birth", async () => {
        await signupPage.selectRadio(signupPage.genderMrRad);
        await signupPage.fillTextBox(signupPage.name, newUser.name);
        await signupPage.fillTextBox(signupPage.password, newUser.password);
        await signupPage.selectOption(signupPage.birthDay, birthDay);
        await signupPage.selectOption(signupPage.birthMonth, birthMonth);
        await signupPage.selectOption(signupPage.birthYear, birthYear);
    });
    await test.step("Select checkbox 'Sign up for our newsletter!'", async () => {
        await signupPage.toggleCheckBox(signupPage.newsletterChk);
    });
    await test.step("Select checkbox 'Receive special offers from our partners!'", async () => {
        await signupPage.toggleCheckBox(signupPage.receiveChk);
    });
    await test.step("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async () => {
        await signupPage.fillTextBox(signupPage.firstName, newUser.firstName);
        await signupPage.fillTextBox(signupPage.lastName, newUser.lastName);
        await signupPage.fillTextBox(signupPage.company, newUser.company);
        await signupPage.fillTextBox(signupPage.address1, newUser.address1);
        await signupPage.fillTextBox(signupPage.address2, newUser.address2);
        await signupPage.selectOption(signupPage.countryLst, newUser.country);
        await signupPage.fillTextBox(signupPage.state, newUser.state);
        await signupPage.fillTextBox(signupPage.city, newUser.city);
        await signupPage.fillTextBox(signupPage.zipCode, newUser.zipcode);
        await signupPage.fillTextBox(signupPage.mobile, newUser.mobile);
    });
    await test.step("Click 'Create Account button'", async () => {
        await signupPage.clickBtnLnk(signupPage.createAccBtn);
    });
    await test.step("Verify that 'ACCOUNT CREATED!' is visible", async () => {
        await accountCreatedPage.checkVisibility(accountCreatedPage.accountCreatedTxt);
    });
    await test.step("Click 'Continue' button", async () => {
        await accountCreatedPage.clickBtnLnk(accountCreatedPage.continueBtn);
    });
    await test.step("Verify that 'Logged in as username' is visible", async () => {
        await homePage.checkUserLogged(newUser.name);
    });
    await test.step("Click 'Delete Account' button", async () => {
        await homePage.clickBtnLnk(homePage.deleteAccLnk);
    });

    await test.step("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", async () => {
        await accountDeletedPage.checkVisibility(accountDeletedPage.accountDeletedTxt);
        await accountDeletedPage.clickBtnLnk(accountDeletedPage.continueBtn);
    });


});