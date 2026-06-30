//userregistration.specs.ts
import { test } from '@playwright/test';
import {generateNewUser} from '../test-data/userFactory';
import HomePage from '../page-objects/HomePage';
import LoginPage from '../page-objects/LoginPage';
import SignUpPage from '../page-objects/SignupPage';
import AccountCreatedPage from '../page-objects/AccountCreatedPage';
import AccountDeletedPage from '../page-objects/AccountDeletedPage';
import UserAPI from '../api-utils/UserAPI';


test('Scenario - User Registration [E2E]', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignUpPage(page);
    const accountDeletedPage = new AccountDeletedPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const newUser = generateNewUser();

    await test.step("Given I Go to page automationexercise.com", async () => {    
        await page.goto('https://automationexercise.com');
    });
    await test.step("Click on 'Signup / Login' button", async () => {    
        await homePage.clickBtnLnk(homePage.loginPageLnk);
    });    
    await test.step("And Verify 'New User Signup!' is visible", async () => {
        await loginPage.checkVisibility(loginPage.signupTitle);
    }); 
    await test.step("When Enter name and email adress", async () => {
        await loginPage.fillTextBox( loginPage.signupEmail, newUser.email);
        await loginPage.fillTextBox( loginPage.signupName, newUser.name);
    });
    await test.step("And Click 'Signup' button", async () => {
        await loginPage.clickBtnLnk(loginPage.signupBtn);
    });
    await test.step("Then I Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
        await signupPage.checkVisibility(signupPage.accountInfoTxt);
    });
    await test.step("When Fill details: Title, Name, Email, Password, Date of birth", async () => {
        if (newUser.title == 'Mr') {
            await signupPage.selectRadio(signupPage.genderMrRad);
        }else{
            await signupPage.selectRadio(signupPage.genderMrsRad);
        }
        await signupPage.fillTextBox(signupPage.name, newUser.name);
        await signupPage.fillTextBox(signupPage.password, newUser.password);
        await signupPage.selectOption(signupPage.birthDay, newUser.birth_date);
        await signupPage.selectOption(signupPage.birthMonth, newUser.birth_month);
        await signupPage.selectOption(signupPage.birthYear, newUser.birth_year);
    });
    await test.step("And Select checkbox 'Sign up for our newsletter!'", async () => {
        await signupPage.toggleCheckBox(signupPage.newsletterChk);
    });
    await test.step("And Select checkbox 'Receive special offers from our partners!'", async () => {
        await signupPage.toggleCheckBox(signupPage.receiveChk);
    });
    await test.step("And Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async () => {
        await signupPage.fillTextBox(signupPage.firstName, newUser.firstname);
        await signupPage.fillTextBox(signupPage.lastName, newUser.lastname);
        await signupPage.fillTextBox(signupPage.company, newUser.company);
        await signupPage.fillTextBox(signupPage.address1, newUser.address1);
        await signupPage.fillTextBox(signupPage.address2, newUser.address2);
        await signupPage.selectOption(signupPage.countryLst, newUser.country);
        await signupPage.fillTextBox(signupPage.state, newUser.state);
        await signupPage.fillTextBox(signupPage.city, newUser.city);
        await signupPage.fillTextBox(signupPage.zipCode, newUser.zipcode);
        await signupPage.fillTextBox(signupPage.mobile, newUser.mobile_number);
    });
    await test.step("And Click 'Create Account button'", async () => {
        await signupPage.clickBtnLnk(signupPage.createAccBtn);
    });
    await test.step("Then Verify that 'ACCOUNT CREATED!' is visible", async () => {
        await accountCreatedPage.checkVisibility(accountCreatedPage.accountCreatedTxt);
    });
    await test.step("When Click 'Continue' button", async () => {
        await accountCreatedPage.clickBtnLnk(accountCreatedPage.continueBtn);
    });
    await test.step("Then Verify that 'Logged in as username' is visible", async () => {
        await homePage.checkUserLogged(newUser.name);
    });
    await test.step("When Click 'Delete Account' button", async () => {
        await homePage.clickBtnLnk(homePage.deleteAccLnk);
    });

    await test.step("Then Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", async () => {
        await accountDeletedPage.checkVisibility(accountDeletedPage.accountDeletedTxt);
        await accountDeletedPage.clickBtnLnk(accountDeletedPage.continueBtn);
    });


});

test('Scenario - Register User with existing email [E2E + API]', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const userAPI = new UserAPI();
    
    await test.step("Given Ihave already created an user'", async () => {   
        //pre user creation using 
        await userAPI.setNewUser();
    });
    await test.step("And I Navigate to url 'http://automationexercise.com'", async () => {   
        await page.goto('https://automationexercise.com');
    });    
    await test.step("When Click on 'Signup / Login' button", async () => {   
        await homePage.clickBtnLnk(homePage.loginPageLnk);      
    });
    await test.step("Then Verify 'New User Signup!' is visible", async () => {   
        await loginPage.checkVisibility(loginPage.signupTitle);
    });
    await test.step("when I Enter name and already registered email address", async () => {   
        await loginPage.fillTextBox(loginPage.signupEmail, userAPI.user.email);
        await loginPage.fillTextBox(loginPage.signupName, userAPI.user.name);
    });
    await test.step("And Click 'Signup' button", async () => {   
        await loginPage.clickBtnLnk(loginPage.signupBtn);
    });
    await test.step("Then Verify error 'Email Address already exist!' is visible", async () => {   
        await loginPage.checkVisibility(loginPage.emailAlreadyExistMsg);
        await userAPI.deleteUser(userAPI.user);
    });

});
