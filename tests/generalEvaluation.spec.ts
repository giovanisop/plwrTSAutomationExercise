import { test } from '../fixtures/userFixture';
import {generateNewUser} from '../test-data/userFactory';
import * as globalSteps from '../common-steps/globalSteps';
import * as generalSteps from '../common-steps/generalSteps';
import HomePage from '../page-objects/HomePage';
import CartPage from '../page-objects/CartPage';
import TestCasesPage from '../page-objects/TestCasesPage';
import ContactUsPage from '../page-objects/ContactUsPage';

test("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", {tag: ['@E2E']},  async ({ page }) => {
    const homePage = new HomePage(page);

    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    await generalSteps.scrollDownToFooter(homePage);
    await generalSteps.checkSubscriptionView(homePage);

    await test.step("When I click on arrow at bottom right side to move upward", async () => {
        await homePage.clickBtnLnk(homePage.arrowUpLnk);
    });

    await generalSteps.checkHeaderView(homePage);
});

test("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", {tag: ['@E2E']}, async ({ page }) => {
    const homePage = new HomePage(page);

    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    await generalSteps.scrollDownToFooter(homePage);
    await generalSteps.checkSubscriptionView(homePage);

    await test.step("When I scroll up page to top", async () => {
        await homePage.scrollUpToHeader();
    });

    await generalSteps.checkHeaderView(homePage);
});

test('Verify Subscription in home page', {tag: ['@E2E']}, async ({ page }) => {
    const homePage = new HomePage(page);
    const newUser = generateNewUser();
    
    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    await generalSteps.scrollDownToFooter(homePage);
    await generalSteps.checkSubscriptionView(homePage);
    await generalSteps.subscribe(homePage, newUser);
    await generalSteps.checkSubscribeMsg(homePage);
});

test('Verify Subscription in Cart page', {tag: ['@E2E']}, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const newUser = generateNewUser();

    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);

    await test.step("When I click on Cart button", async () => {
        await homePage.clickBtnLnk(homePage.cartPageLnk);
    });

    await generalSteps.scrollDownToFooter(cartPage);
    await generalSteps.checkSubscriptionView(cartPage);
    await generalSteps.subscribe(cartPage, newUser);
    await generalSteps.checkSubscribeMsg(cartPage);
});


test('Verify Test Cases Page', async ({ page }) => {
    const homePage = new HomePage(page);
    const testCasesPage = new TestCasesPage(page);
    
    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    
    await test.step("When I click on 'Test Cases' button", async () => {
        await homePage.clickBtnLnk(homePage.testCaseLnk);
    });
    
    await test.step("Then I verify user is navigated to test cases page successfully", async () => {
        await testCasesPage.verifyPage('https://automationexercise.com/test_cases');
    });

});

test('Contact Us Form', {tag: ['@E2E']}, async ({ page, samplePdf }) => {
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);
    const user = generateNewUser();

    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    await test.step("When I click on 'Contact Us' button", async () => {
        await homePage.clickBtnLnk(homePage.contactUsLnk);
        await contactUsPage.page.waitForLoadState('networkidle');
    });
    await test.step("Then I verify 'GET IN TOUCH' is visible", async () => {
        await contactUsPage.checkVisibility(contactUsPage.getInTouchTxt);
    });
    await test.step("When I enter name, email, subject and message", async () => {
        await contactUsPage.fillTextBox(contactUsPage.nameImp, user.name);
        await contactUsPage.fillTextBox(contactUsPage.emailImp, user.email);
        await contactUsPage.fillTextBox(contactUsPage.subjectImp, 'Test Subject');
        await contactUsPage.fillTextBox(contactUsPage.messageImp, 'Test Message');
    });
    await test.step("When I upload file", async () => {
        await contactUsPage.fileField.setInputFiles(samplePdf);
    });
    await test.step("When I click 'Submit' button and accept the confirmation dialog", async () => {
        contactUsPage.page.once('dialog', dialog => dialog.accept());
        await contactUsPage.clickBtnLnk(contactUsPage.submitBtn);
        await homePage.page.waitForLoadState('networkidle');
    });
    await test.step("Then I verify success message 'Success! Your details have been submitted successfully.' is visible", async () => {
        await contactUsPage.checkVisibility(contactUsPage.successMsg);
    });
    await test.step("Then I click 'Home' button and verify that landed to home page successfully", async () => {
        await contactUsPage.clickBtnLnk(contactUsPage.homeBtn);
        await homePage.page.waitForLoadState('networkidle');
        await homePage.verifyPage('https://automationexercise.com/');
    });
});
