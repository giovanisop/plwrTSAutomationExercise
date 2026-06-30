import { test } from '../fixtures/userFixture';
import HomePage from '../page-objects/HomePage';
import LoginPage from '../page-objects/LoginPage';
import AccountDeletedPage from '../page-objects/AccountDeletedPage';
import * as globalSteps from '../common-steps/globalSteps';
import * as userRegSteps from '../common-steps/userRegSteps';
import UserAPI from '../api-utils/UserAPI';


test('Login User with correct email and password [E2E+API]', {tag: '@login'}, async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountDeletedPage = new AccountDeletedPage(page);
    const userAPI = new UserAPI();
    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    await userRegSteps.clickSignupLogin(homePage);
    await userRegSteps.checkLoginPage(loginPage);

    await test.step("When Enter correct email address and password", async () => {
        await loginPage.fillTextBox(loginPage.loginEmail, userAPI.user.email);
        await loginPage.fillTextBox(loginPage.loginPassword, userAPI.user.password);
    });
    
    await userRegSteps.clickLoginBtn(loginPage);

    await userRegSteps.checkLoggedUser(homePage,userAPI.user);

    await test.step("When Click 'Delete Account' button", async () => {
        await homePage.clickBtnLnk(homePage.deleteAccLnk);
    });
    await test.step("Then Verify that 'ACCOUNT DELETED!' is visible", async () => {
        await accountDeletedPage.checkVisibility(accountDeletedPage.accountDeletedTxt);
    });
    
});

test('Login User with incorrect email and password [E2E+API]', {tag: '@login'}, async ({ page , userAPI }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    await userRegSteps.clickSignupLogin(homePage);
    await userRegSteps.checkLoginPage(loginPage);

    await test.step("When Enter incorrect email address and password", async () => {
        await loginPage.fillTextBox(loginPage.loginEmail, userAPI.user.email);
        await loginPage.fillTextBox(loginPage.loginPassword, 'wrongpass');
    });

    await userRegSteps.clickLoginBtn(loginPage);

    await test.step("Then Verify error 'Your email or password is incorrect!' is visible", async () => {
        await loginPage.checkVisibility(loginPage.wrongloginMsg);
    });
    
});

test('Logout User [E2E]', {tag: '@login'}, async ({ page, userAPI }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await globalSteps.navigateToHome(page);
    await globalSteps.checkHomePage(homePage);
    await userRegSteps.clickSignupLogin(homePage);
    await userRegSteps.checkLoginPage(loginPage);

    await test.step("When Enter correct email address and password", async () => {
        await loginPage.fillTextBox(loginPage.loginEmail, userAPI.user.email);
        await loginPage.fillTextBox(loginPage.loginPassword, userAPI.user.password);
    });

    await userRegSteps.clickLoginBtn(loginPage);
    await userRegSteps.checkLoggedUser(homePage,userAPI.user);

    await test.step("When Click 'Logout' button", async () => {
        await homePage.clickBtnLnk(loginPage.logoutLnk);
    });

    await userRegSteps.checkLoginPage(loginPage);

});