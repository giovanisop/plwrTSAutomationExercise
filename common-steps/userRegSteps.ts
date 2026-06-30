import { test } from '@playwright/test';
import type HomePage from '../page-objects/HomePage';
import type LoginPage from '../page-objects/LoginPage';
import {type UserData} from '../test-data/userFactory';

// Click buttons/link section

export async function clickSignupLogin(homePage: HomePage) {
    await test.step("When Click on 'Signup / Login' button", async () => {
        await homePage.clickBtnLnk(homePage.loginPageLnk);
    });
}
export async function clickLoginBtn(loginPage: LoginPage) {
    await test.step("And Click 'login' button", async () => {
        await loginPage.clickBtnLnk(loginPage.loginBtn);
    });
}
export async function clickSignUpBtn(loginPage: LoginPage) {
    await test.step("And Click 'Signup' button", async () => {   
        await loginPage.clickBtnLnk(loginPage.signupBtn);
    });
}

//Assertions sections (checks and visibility)
export async function checkLoginPage(loginPage: LoginPage) {
    await test.step("And Verify 'New User Signup!' is visible", async () => {
        await loginPage.checkVisibility(loginPage.signupTitle);
    }); 
}
export async function checkLoggedUser(homePage: HomePage, user: UserData) {
    await test.step("Then Verify that 'Logged in as username' is visible", async () => {
        await homePage.checkUserLogged(user.name);
    });
}



